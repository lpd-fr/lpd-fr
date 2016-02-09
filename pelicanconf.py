#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Linux Presentation Day France'
SITENAME = u'Linux Presentation Day France'
SITEURL = ''


THEME = '/home/numahell/.pelican/pelican-clean-blog'
# THEME = './themes/numahell2015'

PLUGIN_PATHS = ('/home/numahell/.pelican/pelican-plugins',)
PLUGINS = [ 'assets', 'html_rst_directive', ]

PATH = 'content'
ARTICLE_PATHS = ['blog']
PAGE_PATHS = ['pages']

ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'
ARTICLE_SAVE_AS = ARTICLE_URL

PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = PAGE_URL

CATEGORY_URL = 'blog/{slug}.html'
CATEGORY_SAVE_AS = CATEGORY_URL

YEAR_ARCHIVE_SAVE_AS = 'blog/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/index.html'

TIMEZONE = 'Europe/Paris'

DEFAULT_LANG = u'fr'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Framablog', 'http://www.framablog.org/index.php'),)

# Social widget
# SOCIAL = (('You can add links in your config file', '#'),
#           ('Another social link', '#'),)

DEFAULT_PAGINATION = 6

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
