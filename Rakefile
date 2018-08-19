require "bundler/setup"
task default: 'test'

# cf. How to test a Jekyll site
# http://joenyland.me/blog/how_to_test_a_jekyll_site/
require 'html-proofer'
task test: [:build] do
  HTMLProofer.check_directory('./_site', {
                                allow_hash_href:  true,
                                check_opengraph:  true,
                                check_favicon:    true,
                                check_html:       true,
                                disable_external: true,
                                #file_ignore: [
                                #  /node_modules/,
                                #  "./_site/ja/workshops/raspi/index.html",
                                #  "./_site/google********.html"
                                #],
                                url_ignore:  %w(coderdojo.com),
                                http_status_ignore: [0, 500, 999],
                             }).run
end

task build: [:clean] do
  system 'bundle exec jekyll build'
end

task :clean do
  system 'bundle exec jekyll clean'
end
