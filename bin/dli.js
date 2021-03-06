#!/usr/bin/env node

require('commander')
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new project from a template')
  .command('tool', 'list available official templates')
  .command('new', 'new')
  .parse(process.argv)