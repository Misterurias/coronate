// Generated by BUCKLESCRIPT VERSION 6.0.3, PLEASE EDIT WITH CARE

import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Localforage from "localforage";
import * as LocalforageGetitems from "localforage-getitems";
import * as LocalforageSetitems from "localforage-setitems";
import * as LocalforageRemoveitems from "localforage-removeitems";

var EloRank = /* module */[];

function Instance(DataType) {
  var make = function (name, storeName) {
    return Localforage.default.createInstance({
                name: name,
                storeName: storeName
              });
  };
  return /* module */[/* make */make];
}

var $$Map = /* module */[/* Instance */Instance];

function Instance$1(DataType) {
  var make = function (name, storeName) {
    return Localforage.default.createInstance({
                name: name,
                storeName: storeName
              });
  };
  return /* module */[/* make */make];
}

var Obj = /* module */[/* Instance */Instance$1];

function loadGetItems(param) {
  LocalforageGetitems.extendPrototype(Localforage.default);
  return /* () */0;
}

function loadSetItems(param) {
  LocalforageSetitems.extendPrototype(Localforage.default);
  return /* () */0;
}

function loadRemoveItems(param) {
  LocalforageRemoveitems.extendPrototype(Localforage.default);
  return /* () */0;
}

var Plugins = /* module */[
  /* loadGetItems */loadGetItems,
  /* loadSetItems */loadSetItems,
  /* loadRemoveItems */loadRemoveItems
];

var LocalForage = /* module */[
  /* Map */$$Map,
  /* Obj */Obj,
  /* Plugins */Plugins
];

LocalforageGetitems.extendPrototype(Localforage.default);

LocalforageSetitems.extendPrototype(Localforage.default);

LocalforageRemoveitems.extendPrototype(Localforage.default);

var VisuallyHidden = /* module */[];

var Dialog = /* module */[];

var Tabs = /* module */[];

var TabList = /* module */[];

var Tab = /* module */[];

var TabPanels = /* module */[];

var TabPanel = /* module */[];

var ReachTabs = /* module */[
  /* Tabs */Tabs,
  /* TabList */TabList,
  /* Tab */Tab,
  /* TabPanels */TabPanels,
  /* TabPanel */TabPanel
];

function string_of_locale(locale) {
  return "en-US";
}

function string_of_numbered(x) {
  return "2-digit";
}

function string_of_month(month) {
  return "short";
}

function string_of_year(year) {
  return "numeric";
}

function config(day, month, year, hour, minute, param) {
  return {
          day: Belt_Option.mapWithDefault(day, undefined, string_of_numbered),
          month: Belt_Option.mapWithDefault(month, undefined, string_of_month),
          year: Belt_Option.mapWithDefault(year, undefined, string_of_year),
          hour: Belt_Option.mapWithDefault(hour, undefined, string_of_numbered),
          minute: Belt_Option.mapWithDefault(minute, undefined, string_of_numbered)
        };
}

var IntlDateTimeFormat = /* module */[
  /* string_of_locale */string_of_locale,
  /* string_of_numbered */string_of_numbered,
  /* string_of_month */string_of_month,
  /* string_of_year */string_of_year,
  /* config */config
];

export {
  EloRank ,
  LocalForage ,
  VisuallyHidden ,
  Dialog ,
  ReachTabs ,
  IntlDateTimeFormat ,
  
}
/*  Not a pure module */
