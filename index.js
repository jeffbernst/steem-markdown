import { getHtml } from './busy/Body';

function steemMarkdown(markdown) {
  return getHtml(markdown, {}, 'text')
}

module.exports = steemMarkdown