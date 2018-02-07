Coveo.TemplateCache.registerTemplate("CardSharePointList", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\r\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\r\n      <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\r\n      <a class=\"CoveoResultLink\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\r\n      <span class=\"CoveoExcerpt\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <span class=\"CoveoPrintableUri\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"CoveoCardActionBar\">\r\n    <div class=\"CoveoQuickview\"></div>\r\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\r\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\r\n        <tbody>\r\n          <tr data-field=\"@author\" data-caption=\"Author\">\r\n          </tr>\r\n          <tr data-field=\"@site\" data-caption=\"Site\">\r\n          </tr>\r\n          <tr data-field=\"@sptagnames\" data-caption=\"Tags\">\r\n          </tr>\r\n          <tr data-field=\"@spcontenttype\" data-caption=\"Content Type\">\r\n          </tr>\r\n          <tr data-field=\"@spitemtype\" data-caption=\"Item Type\">\r\n          </tr>\r\n          <tr data-field=\"@spparentname\" data-caption=\"Parent\">\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"CoveoFollowItem\"></div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"spitemtype","values":["List"]}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("CardSharePoint", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\" style=\"margin-bottom: 20px\">\r\n    <div class=\"coveo-result-cell\" style=\"width:32px; vertical-align:middle; flex-grow:0\">\r\n      <span class=\"CoveoIcon\" data-small=\"true\" data-with-label=\"false\"></span>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left: 10px; vertical-align: middle;\">\r\n      <a class=\"CoveoResultLink\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <div class=\"CoveoText\" data-value=\"Description\" data-weight=\"bold\"></div>\r\n      <span class=\"CoveoExcerpt\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"CoveoText\" data-value=\"Modified\" data-weight=\"bold\"></div>\r\n      <div class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"emailDateTime\" data-helper-options-always-include-time=\"true\"></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n      <span class=\"CoveoPrintableUri\">\r\n      </span>\r\n    </div>\r\n  </div>\r\n  <div class=\"CoveoCardActionBar\">\r\n    <div class=\"CoveoQuickview\"></div>\r\n    <div class=\"CoveoCardOverlay\" data-title=\"Details\" data-icon=\"coveo-sprites-main-search-active\">\r\n      <table class=\"CoveoFieldTable\" data-allow-minimization=\"false\">\r\n        <tbody>\r\n          <tr data-field=\"@author\" data-caption=\"Author\">\r\n          </tr>\r\n          <tr data-field=\"@site\" data-caption=\"Site\">\r\n          </tr>\r\n          <tr data-field=\"@sptagnames\" data-caption=\"Tags\">\r\n          </tr>\r\n          <tr data-field=\"@spcontenttype\" data-caption=\"Content Type\">\r\n          </tr>\r\n          <tr data-field=\"@spitemtype\" data-caption=\"Item Type\">\r\n          </tr>\r\n          <tr data-field=\"@spparentname\" data-caption=\"Parent\">\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"CoveoFollowItem\"></div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"card","fieldsToMatch":[{"field":"spitemtype"}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("SharePointList", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"width:85px;text-align:center;\">\r\n      <span class=\"CoveoIcon\"></span>\r\n      <div class=\"CoveoQuickview\"></div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\">\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\r\n          <a class=\"CoveoResultLink\"></a>\r\n        </div>\r\n        <div class=\"coveo-result-cell\" style=\"width:120px;font-size:12px;\">\r\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n          <span class=\"CoveoExcerpt\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <table class=\"CoveoFieldTable\">\r\n            <tbody>\r\n              <tr data-field=\"@author\" data-caption=\"Author\"></tr>\r\n              <tr data-field=\"@site\" data-caption=\"Site\"></tr>\r\n              <tr data-field=\"@sptagnames\" data-caption=\"Tags\"></tr>\r\n              <tr data-field=\"@spcontenttype\" data-caption=\"Content Type\"></tr>\r\n              <tr data-field=\"@spitemtype\" data-caption=\"Item Type\"></tr>\r\n              <tr data-field=\"@spparentname\" data-caption=\"Parent\"></tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <span class=\"CoveoPrintableUri\"></span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"spitemtype","values":["List"]}],"mobile":null}),true, true)
Coveo.TemplateCache.registerTemplate("SharePoint", Coveo.HtmlTemplate.fromString("<div class=\"coveo-result-frame\">\r\n  <div class=\"coveo-result-row\">\r\n    <div class=\"coveo-result-cell\" style=\"width:85px; text-align:center; padding-top:5px\">\r\n      <span class=\"CoveoIcon\">\r\n      </span>\r\n      <div class=\"CoveoQuickview\">\r\n      </div>\r\n    </div>\r\n    <div class=\"coveo-result-cell\" style=\"padding-left:15px\">\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"font-size:18px\">\r\n          <a class=\"CoveoResultLink\">\r\n          </a>\r\n        </div>\r\n        <div class=\"coveo-result-cell\" style=\"width:120px;font-size:12px;\">\r\n          <span class=\"CoveoFieldValue\" data-field=\"@date\" data-helper=\"date\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px\">\r\n          <span class=\"CoveoExcerpt\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <table class=\"CoveoFieldTable\">\r\n            <tbody>\r\n              <tr data-field=\"@author\" data-caption=\"Author\">\r\n              </tr>\r\n              <tr data-field=\"@site\" data-caption=\"Site\">\r\n              </tr>\r\n              <tr data-field=\"@sptagnames\" data-caption=\"Tags\">\r\n              </tr>\r\n              <tr data-field=\"@spcontenttype\" data-caption=\"Content Type\">\r\n              </tr>\r\n              <tr data-field=\"@spitemtype\" data-caption=\"Item Type\">\r\n              </tr>\r\n              <tr data-field=\"@spparentname\" data-caption=\"Parent\">\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"coveo-result-row\">\r\n        <div class=\"coveo-result-cell\" style=\"padding-top:5px; padding-bottom:5px; font-size:13px;\">\r\n          <span class=\"CoveoPrintableUri\">\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",{"condition":null,"layout":"list","fieldsToMatch":[{"field":"spitemtype"}],"mobile":null}),true, true)