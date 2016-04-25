#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Linux Presentation Day France'
SITENAME = u'Linux Presentation Day France'
SITESUBTITLE = u'Une journée pour découvrir et essayer Linux'
SITEURL = ''
SITELOGO = '/theme/images/logo-lpd.png'
LPD_DATE = 'Samedi 30 avril 2016'

LOAD_CONTENT_CACHE = False

# Theme stuff
THEME = './lpd-theme'
# HEADER_COVER = '/theme/images/default-bg.jpg'

PLUGIN_PATHS = ('/home/numahell/.pelican/pelican-plugins',)
PLUGINS = [ 'assets', 'html_rst_directive', 'md_inline_extension']

STATIC_PATHS = [
    'extra/js',
    'extra/images',
    'extra/pdf',
]

PATH = 'content'

ARTICLE_PATHS = ['blog']
PAGE_PATHS = ['pages']

TEMPLATE_PAGES = {'map.html': 'map.html',}

ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'
ARTICLE_SAVE_AS = ARTICLE_URL

PAGE_URL = '{slug}.html'
PAGE_SAVE_AS = PAGE_URL

CATEGORY_URL = 'blog/{slug}.html'
CATEGORY_SAVE_AS = CATEGORY_URL

YEAR_ARCHIVE_SAVE_AS = 'blog/{date:%Y}/index.html'
MONTH_ARCHIVE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/index.html'

DISPLAY_CATEGORIES_ON_MENU = False

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
