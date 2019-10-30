﻿import * as application from "tns-core-modules/application";
import { AppShortcuts } from "nativescript-app-shortcuts";

// .. and set a callback handler as well
new AppShortcuts().setQuickActionCallback(shortcutItem => {
  console.log(`The app was launched by shortcut type '${shortcutItem.type}'`);

  // this is where you handle any specific case for the shortcut
  if (shortcutItem.type === "beer") {
    // this is an example of 'deeplinking' through a shortcut
    const frameModule = require("tns-core-modules/ui/frame");
    // not sure this works on Android
    setTimeout(() => {
      frameModule.getFrameById("appRootFrame") // see app-root.xml
          .navigate("beer-page");
    });
  } else {
    // .. any other shortcut handling
  }
});

application.run({moduleName: "app-root"});
