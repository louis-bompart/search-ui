Coveo.TemplateCache.registerTemplate("CardPeople", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\r\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\r\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\r\n      <img class=\"CoveoThumbnail\" data-no-thumbnail-class=\"coveo-sprites-user-small\"/>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\r\n      <a class=\"CoveoResultLink\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"CoveoCardActionBar\">\r\n    <div class=\"CoveoQuickview\"></div>\r\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\r\n      <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\" data-allow-minimization=\"false\">\r\n        <tbody>\r\n          <tr data-field=\"@worktitle\" data-caption=\"Title\">\r\n          </tr>\r\n          <tr data-field=\"@company\" data-caption=\"Company\">\r\n          </tr>\r\n          <tr data-field=\"@workemail\" data-caption=\"Email\">\r\n          </tr>\r\n          <tr data-field=\"@workphone\" data-caption=\"Work Phone\">\r\n          </tr>\r\n          <tr data-field=\"@mobilephone\" data-caption=\"Mobile Phone\">\r\n          </tr>\r\n          <tr data-field=\"@homephone\" data-caption=\"Home Phone\">\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"CoveoFollowItem\"></div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"fullname"}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("People", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:5px\">\r\n      <img class=\"CoveoThumbnail\" data-no-thumbnail-class=\"coveo-sprites-user\" width=\"60px\" height=\"60px\" style=\"border-radius:4px;\"/>\r\n      <div class=\"CoveoQuickview\">\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\r\n          <a class=\"CoveoResultLink\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <table class=\"CoveoFieldTable\" data-use-json-template-fields=\"true\" data-minimized-by-default=\"false\" data-allow-minimization=\"false\">\r\n            <tbody>\r\n              <tr data-field=\"@worktitle\" data-caption=\"Title\">\r\n              </tr>\r\n              <tr data-field=\"@company\" data-caption=\"Company\">\r\n              </tr>\r\n              <tr data-field=\"@office\" data-caption=\"Office\">\r\n              </tr>\r\n              <tr data-field=\"@workemail\" data-caption=\"Email\">\r\n              </tr>\r\n              <tr data-field=\"@workphone\" data-caption=\"Work Phone\">\r\n              </tr>\r\n              <tr data-field=\"@mobilephone\" data-caption=\"Mobile Phone\">\r\n              </tr>\r\n              <tr data-field=\"@homephone\" data-caption=\"Home Phone\">\r\n              </tr>\r\n              <tr data-field=\"@manager\" data-caption=\"Manager\">\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"fullname"}],"mobile":null}),true, true)