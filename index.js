import { getHtml } from './busy/Body';

function steemMarkdown(markdown, options) {
  return getHtml(markdown, options)
}

module.exports = steemMarkdown