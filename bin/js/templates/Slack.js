Coveo.TemplateCache.registerTemplate("CardSlack", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\r\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\r\n      <img class=\"CoveoThumbnail\" data-no-thumbnail-class=\"coveo-sprites-webpage\" width=\"30px\" height=\"30px\" style=\"border-radius:4px;\"/>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\r\n      <a class=\"CoveoResultLink\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <span class=\"CoveoExcerpt\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"CoveoCardActionBar\">\r\n    <div class=\"CoveoQuickview\"></div>\r\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\r\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\r\n        <tbody>\r\n          <tr data-field=\"@author\" data-caption=\"Author\"></tr>\r\n          <tr data-field=\"@source\" data-caption=\"Source\"></tr>\r\n          <tr data-field=\"@language\" data-caption=\"Language\"></tr>\r\n          <tr data-field=\"@date\" data-caption=\"Creation Date\" data-helper=\"date\" />\r\n          <tr data-field=\"@slackchannelsname\" data-caption=\"Channel\"/>\r\n          <tr data-field=\"@slackchannelpurposevalue\" data-caption=\"Channel Purpose\"/>\r\n          <tr data-field=\"@slackchanneltopicvalue\" data-caption=\"Channel Topic\"/>\r\n          <tr data-field=\"@slackuserrealname\" data-caption=\"Real Name\"/>\r\n          <tr data-field=\"@slackteamemaildomain\" data-caption=\"Email Domain\"/>\r\n          <tr data-field=\"@slackteamdomain\" data-caption=\"Domain\"/>\r\n          <tr data-field=\"@slackparticipatingusers\" data-caption=\"Participating Users\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\r\n          <tr data-field=\"@slackfilesharedchannelsnames\" data-caption=\"Shared Channels\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"CoveoFollowItem\"></div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"connectortype","values":["SlackCrawler"]}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("Slack", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\r\n      <span class=\"CoveoIcon\">\r\n      </span>\r\n      <div class=\"CoveoQuickview\">\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\r\n          <a class=\"CoveoResultLink\">\r\n          </a>\r\n        </div>\r\n        <div class=\"coveo-result-cell\" style=\"width:120px;text-align:right;font-size:12px\">\r\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n          <span class=\"CoveoExcerpt\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <table class=\"CoveoFieldTable\">\r\n            <tbody>\r\n              <tr data-field=\"@author\" data-caption=\"Author\"></tr>\r\n              <tr data-field=\"@source\" data-caption=\"Source\"></tr>\r\n              <tr data-field=\"@language\" data-caption=\"Language\"></tr>\r\n              <tr data-field=\"@date\" data-caption=\"Creation Date\" data-helper=\"date\" />\r\n              <tr data-field=\"@slackchannelsname\" data-caption=\"Channel\"/>\r\n              <tr data-field=\"@slackchannelpurposevalue\" data-caption=\"Channel Purpose\"/>\r\n              <tr data-field=\"@slackchanneltopicvalue\" data-caption=\"Channel Topic\"/>\r\n              <tr data-field=\"@slackuserrealname\" data-caption=\"Real Name\"/>\r\n              <tr data-field=\"@slackteamemaildomain\" data-caption=\"Email Domain\"/>\r\n              <tr data-field=\"@slackteamdomain\" data-caption=\"Domain\"/>\r\n              <tr data-field=\"@slackparticipatingusers\" data-caption=\"Participating Users\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\r\n              <tr data-field=\"@slackfilesharedchannelsnames\" data-caption=\"Shared Channels\" data-is-multi-value-field=\"true\" data-split-values=\"true\"/>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"connectortype","values":["SlackCrawler"]}],"mobile":null}),true, true)