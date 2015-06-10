angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/main/templates/mdDataTable.html","<md-content class=\"mdDataTable md-whiteframe-z1\" layout=\"column\">\n    <!-- table card -->\n    <div ng-if=\"tableCard.visible\"\n         ng-hide=\"alternateHeaders && isAnyRowSelected()\"\n         class=\"mdDataTable-header\" layout=\"row\" layout-align=\"start center\">\n        <span>{{tableCard.title}}</span>\n    </div>\n    <!-- table card end -->\n\n    <!-- alternate headers -->\n    <div ng-if=\"alternateHeaders && isAnyRowSelected()\" class=\"mdDataTable-header-alternate\" layout=\"row\" layout-align=\"start center\">\n        <span class=\"alternate-text\">{{getNumberOfSelectedRows().selected}} item selected</span>\n    </div>\n    <!-- alternate headers end -->\n\n    <table cellpadding=\"0\" cellspacing=\"0\">\n        <thead></thead>\n        <tbody></tbody>\n    </table>\n\n    <!-- table card -->\n    <div ng-if=\"tableCard.visible\" class=\"mdDataTable-footer\" layout=\"row\"> </div>\n    <!-- table card end -->\n</md-content>");
$templateCache.put("/main/templates/mdDataTableCell.html","<td class=\"column {{getColumnAlignClass}}\">\n    <ng-transclude></ng-transclude>\n</td>");
$templateCache.put("/main/templates/mdDataTableColumn.html","<th class=\"column {{getColumnAlignClass}}\">\n    <ng-transclude></ng-transclude>\n</th>");
$templateCache.put("/main/templates/mdDataTableHeaderRow.html","<tr class=\"theadTrRow\">\n    <th class=\"checkboxCell\" ng-show=\"isSelectableRows()\" >\n        <md-checkbox aria-label=\"select all\" ng-model=\"selectAllRows\"></md-checkbox>\n    </th>\n</tr>");
$templateCache.put("/main/templates/mdDataTableRow.html","<tr ng-class=\"{\'selectedRow\': rowOptions.selected}\">\n    <td class=\"checkboxCell\" ng-show=\"isSelectableRows()\">\n        <md-checkbox aria-label=\"select\" ng-model=\"rowOptions.selected\"></md-checkbox>\n    </td>\n</tr>");}]);