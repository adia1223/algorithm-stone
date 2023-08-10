import leetcode_view
import codeforces_view
import ssl

ssl._create_default_https_context = ssl._create_unverified_context


def main():
    leetcode_view.process()
    codeforces_view.process()

if __name__ == "__main__":
    main()
