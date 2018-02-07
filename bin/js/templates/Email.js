Coveo.TemplateCache.registerTemplate("CardEmailThread", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\r\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\r\n    <div class=\"coveo-result-cell\" style=\"width: 32px; vertical-align:middle; flex-grow:0\">\r\n      <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\r\n      <a class=\"CoveoResultLink\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"margin-right: 10px\">\r\n      <div class=\"CoveoText\" data-value=\"From\" data-weight=\"bold\" data-color=\"#1D4F76\"></div>\r\n      <div class=\"CoveoFieldValue\" style=\"overflow: hidden; text-overflow: ellipsis;\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\"></div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"To\" data-weight=\"bold\" data-color=\"#1D4F76\"></div>\r\n      <div class=\"CoveoFieldValue\" style=\"overflow: hidden; text-overflow: ellipsis;\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\" data-color=\"#1D4F76\"> </div>\r\n      <span class=\"CoveoExcerpt\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"Date\" data-weight=\"bold\" data-color=\"#1D4F76\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <span class=\"CoveoResultAttachments\" data-result-template-id=\"EmailResultAttachment\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"CoveoCardActionBar\">\r\n    <div class=\"CoveoCardOverlay\" data-title=\"Replies\" data-icon=\"coveo-sprites-replies\">\r\n      <span class=\"CoveoResultFolding\" data-result-template-id=\"CardEmailChildResult\"></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"mailbox"}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("EmailThread", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:7px\">\r\n      <span class=\"CoveoIcon\">\r\n      </span>\r\n      <div class=\"CoveoQuickview\" data-template-id=\"EmailQuickviewContent\">\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\r\n          <a class=\"CoveoResultLink\">\r\n          </a>\r\n        </div>\r\n        <div class=\"coveo-result-cell\" style=\"width:120px; text-align:right; font-size:12px\">\r\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"font-size:13px;padding-top:5px;padding-bottom:5px;\">\r\n          <span class=\"CoveoText\" data-value=\"From:\">\r\n          </span>\r\n          <span class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\">\r\n          </span>\r\n          <span class=\"CoveoText\" data-value=\"To:\">\r\n          </span>\r\n          <span class=\"CoveoFieldValue\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n          <span class=\"CoveoExcerpt\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <span class=\"CoveoResultAttachments\" data-result-template-id=\"EmailResultAttachment\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px;  font-size:13px;\">\r\n          <span class=\"CoveoResultFolding\" data-result-template-id=\"EmailChildResult\" data-more-caption=\"ShowAllReplies\" data-less-caption=\"ShowOnlyMostRelevantReplies\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"mailbox"}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("EmailResultAttachment", Coveo.HtmlTemplate.fromString("<div class=\"coveo-attachment-container\">\r\n    <div class=\"coveo-result-frame\">\r\n        <div class=\"coveo-result-row\">\r\n            <div class=\"coveo-result-cell\" style=\"width:60px;text-align: left;padding-right: 10px;\">\r\n                <img class=\"CoveoThumbnail\"/>\r\n            </div>\r\n            <div class=\"coveo-result-cell\">\r\n                <a class=\"CoveoResultLink\"></a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("EmailQuickviewContent", Coveo.HtmlTemplate.fromString("<div class=\"coveo-quick-view-full-height\">\r\n    <div class=\"coveo-quick-view-header\">\r\n        <div class=\"coveo-email-from\">\r\n            From: <span class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\"></span>\r\n        </div>\r\n        <div class=\"coveo-email-to\">\r\n            To: <span class=\"CoveoFieldValue\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"CoveoEmailActions\"></div>\r\n    <div class=\"CoveoQuickviewDocument\"></div>\r\n</div>\r\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("EmailChildResult", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\">\r\n    <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"width:50px;text-align:center;\">\r\n            <span class=\"CoveoIcon\" data-small=\"true\"></span>\r\n            <div class=\"CoveoQuickview\" data-template-id=\"EmailQuickviewContent\"></div>\r\n        </div>\r\n        <div class=\"coveo-result-cell\">\r\n            <div class=\"coveo-result-row\">\r\n                <div class=\"coveo-result-cell\" style=\"font-size:18px\">\r\n                    <a class=\"CoveoResultLink\"></a>\r\n                </div>\r\n                <div class=\"coveo-result-cell\" style=\"width:60px; text-align:right; font-size:12px\">\r\n                    <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"coveo-result-row\">\r\n                <div class=\"coveo-result-cell\" style=\"font-size:13px;padding-top:5px;padding-bottom:5px;\">\r\n                    <span class=\"CoveoText\" data-value=\"From:\"></span>\r\n                    <span class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\"></span>\r\n                    <span class=\"CoveoText\" data-value=\"To:\"></span>\r\n                    <span class=\"CoveoFieldValue\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"coveo-result-row\">\r\n                <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n                    <span class=\"CoveoExcerpt\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"coveo-result-row\">\r\n                <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n                    <span class=\"CoveoResultAttachments\" data-result-template-id=\"EmailResultAttachment\"></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)
Coveo.TemplateCache.registerTemplate("CardEmailChildResult", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame coveo-email-result\" style=\"padding-top: 20px; padding-bottom: 20px\">\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-bottom:5px\">\r\n      <a class=\"CoveoResultLink\">\r\n      </a>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"width: 30px; padding-left: 6px\">\r\n      <div class=\"CoveoQuickview\">\r\n        <span class=\"coveo-sprites-quickview\">\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\" style=\"margin-top: 3px; margin-bottom: 3px;\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" style=\"font-size: 12px\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <span class=\"CoveoExcerpt\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\" style=\"margin-top: 10px\">\r\n    <div class=\"coveo-result-cell\" style=\"margin-right: 10px\">\r\n      <div class=\"CoveoText\" data-value=\"From\" data-size=\"13px\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@from\" data-helper=\"email\" data-html-value=\"true\" style=\"overflow: hidden; text-overflow: ellipsis;\"></div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"To\" data-size=\"13px\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@recipients\" data-helper=\"email\" data-html-value=\"true\" style=\"overflow: hidden; text-overflow: ellipsis;\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":null,"fieldsToMatch":null,"mobile":null}),false, false)