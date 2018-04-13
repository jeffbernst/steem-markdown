import { getHtml } from './busy/Body';

exports.steemMarkdown = function(markdown, options) {
  return getHtml(markdown, options)
}