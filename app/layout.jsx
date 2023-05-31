"use client";
import { Inter } from 'next/font/google'
import React, { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  useEffect(() => {
    const scripts = [
      `/assets/libs/bootstrap/js/bootstrap.bundle.min.js`,
      `/assets/libs/simplebar/simplebar.min.js`,
      `/assets/libs/node-waves/waves.min.js`,
      `/assets/libs/feather-icons/feather.min.js`,
      `/assets/js/pages/plugins/lord-icon-2.1.0.js`,
      `/assets/js/plugins.js`,
      // `/assets/libs/particles.js/particles.js`,
      // `/assets/js/pages/particles.app.js`,
      `/assets/js/pages/password-addon.init.js`,
    ]
    
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src + `?v=${Date.now()}`; // Add timestamp query parameter
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      for (const script of scripts) {
        try {
          await loadScript(script);
        } catch (error) {
          console.error(error);
        }
      }
    };

    if (document.readyState === "complete") {
      loadScripts();
    } else {
      window.onload = loadScripts;
    }
  }, []);
  return (
    <>
      <html lang="en">
        <head>

          <meta charSet="utf-8" />
          <title>Dashboard | NIAM - Admin &amp; Dashboard Template</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta
            content="Premium Multipurpose Admin & Dashboard Template"
            name="description"
          />
          <meta content="Themesbrand" name="author" />
          <link rel="shortcut icon" href="assets/images/favicon.ico" />
          <link
            href="/assets/libs/jsvectormap/css/jsvectormap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/assets/libs/swiper/swiper-bundle.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="/assets/css/icons.min.css" rel="stylesheet" type="text/css" />
          <link href="/assets/css/app.min.css" rel="stylesheet" type="text/css" />
          <link href="/assets/css/custom.min.css" rel="stylesheet" type="text/css" />


        </head>
        <body >
          {children}
        </body>
      </html>
    </>

  )
}
