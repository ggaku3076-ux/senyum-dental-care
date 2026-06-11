from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parent
EXPECTED_PAGES = [
    "index.html",
    "layanan.html",
    "dokter.html",
    "harga.html",
    "testimoni.html",
    "lokasi.html",
    "faq.html",
]
EXPECTED_NAV = [
    "index.html",
    "layanan.html",
    "dokter.html",
    "harga.html",
    "testimoni.html",
    "lokasi.html",
    "faq.html",
]

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.titles = []
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "a" and "href" in attrs:
            self.links.append(attrs["href"])
        if tag == "title":
            self._in_title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False

    def handle_data(self, data):
        if self._in_title:
            self.titles.append(data.strip())


def parse(path):
    parser = LinkParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def test_expected_pages_exist():
    missing = [page for page in EXPECTED_PAGES if not (ROOT / page).exists()]
    assert not missing, f"missing multipage files: {missing}"


def test_nav_uses_page_links_not_single_page_hashes():
    for page in EXPECTED_PAGES:
        html = (ROOT / page).read_text(encoding="utf-8")
        start = html.index('<div class="nav-menu"')
        end = html.index('</div>', start)
        nav_html = html[start:end]
        for href in EXPECTED_NAV[1:]:
            assert f'href="{href}"' in nav_html, f"{page} nav missing {href}"
        assert 'href="#layanan"' not in nav_html
        assert 'href="#dokter"' not in nav_html
        assert 'href="#harga"' not in nav_html
        assert 'href="#testimoni"' not in nav_html
        assert 'href="#lokasi"' not in nav_html
        assert 'href="#faq"' not in nav_html


def test_required_assets_and_scripts_are_referenced():
    for page in EXPECTED_PAGES:
        html = (ROOT / page).read_text(encoding="utf-8")
        assert 'href="style.css"' in html, f"{page} missing stylesheet"
        assert 'src="script.js"' in html, f"{page} missing script"
        assert 'class="sticky-whatsapp js-whatsapp"' in html, f"{page} missing sticky whatsapp"


def test_each_page_has_unique_title_and_h1():
    titles = []
    for page in EXPECTED_PAGES:
        html = (ROOT / page).read_text(encoding="utf-8")
        parser = parse(ROOT / page)
        title = " ".join(parser.titles)
        titles.append(title)
        assert title, f"{page} missing title"
        assert html.count("<h1") == 1, f"{page} should have exactly one h1"
    assert len(set(titles)) == len(titles), "page titles should be unique"


def test_internal_page_links_have_files():
    allowed_prefixes = ("http://", "https://", "mailto:", "tel:", "#")
    for page in EXPECTED_PAGES:
        parser = parse(ROOT / page)
        for href in parser.links:
            if href == "#":
                continue
            if href.startswith(allowed_prefixes):
                continue
            target = href.split("#", 1)[0]
            if target.endswith(".html"):
                assert (ROOT / target).exists(), f"{page} links to missing {target}"

if __name__ == "__main__":
    tests = [name for name in globals() if name.startswith("test_")]
    failures = []
    for name in tests:
        try:
            globals()[name]()
            print(f"pass {name}")
        except AssertionError as exc:
            failures.append((name, str(exc)))
            print(f"fail {name}: {exc}")
    if failures:
        raise SystemExit(1)
    print("all multipage checks passed")
