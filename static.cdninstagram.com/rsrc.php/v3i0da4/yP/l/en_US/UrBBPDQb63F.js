/*FB_PKG_DELIM*/

__d(
  "IGDSSVGIconBase.react",
  ["react", "stylex", "useCurrentDisplayMode"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i,
      j = i || d("react"),
      k = {
        root: { display: "x1lliihq", position: "x1n2onr6", $$css: !0 },
        shadow: { filter: "x1hfr7tm", $$css: !0 },
      },
      l = {
        "challenge-link": { color: "x147svu5", $$css: !0 },
        "gradient-orange": { color: "x1q64x2m", $$css: !0 },
        "ig-badge": { color: "xxk16z8", $$css: !0 },
        "ig-banner-background": { color: "x7dbv58", $$css: !0 },
        "ig-close-friends-refreshed": { color: "xgicycq", $$css: !0 },
        "ig-elevated-background": { color: "x1qrl4i3", $$css: !0 },
        "ig-elevated-separator": { color: "xt78tet", $$css: !0 },
        "ig-error-or-destructive": { color: "xkmlbd1", $$css: !0 },
        "ig-facebook-blue": { color: "x2ltsn7", $$css: !0 },
        "ig-focus-stroke": { color: "x1uarppy", $$css: !0 },
        "ig-highlight-background": { color: "x1g921b2", $$css: !0 },
        "ig-link": { color: "x7l2uk3", $$css: !0 },
        "ig-live-badge": { color: "xapd5gi", $$css: !0 },
        "ig-primary-background": { color: "xqqdhr3", $$css: !0 },
        "ig-primary-button": { color: "x173jzuc", $$css: !0 },
        "ig-primary-icon": { color: "xyb1xck", $$css: !0 },
        "ig-primary-text": { color: "x5n08af", $$css: !0 },
        "ig-secondary-background": { color: "xnys4xv", $$css: !0 },
        "ig-secondary-button": { color: "xqnirrm", $$css: !0 },
        "ig-secondary-icon": { color: "x1cp0k07", $$css: !0 },
        "ig-secondary-text": { color: "x1roi4f4", $$css: !0 },
        "ig-separator": { color: "xmjyxvj", $$css: !0 },
        "ig-stroke": { color: "xwvvxsp", $$css: !0 },
        "ig-stroke-on-media": { color: "xq3z1fi", $$css: !0 },
        "ig-stroke-prism": { color: "x1ttxmnt", $$css: !0 },
        "ig-success": { color: "x127hrn9", $$css: !0 },
        "ig-temporary-highlight": { color: "x1xlt76t", $$css: !0 },
        "ig-tertiary-button-hover": { color: "x2bpzcn", $$css: !0 },
        "ig-tertiary-icon": { color: "x10xgr34", $$css: !0 },
        "ig-tertiary-text": { color: "xb88cxz", $$css: !0 },
        "ig-text-on-color": { color: "xwmz7sl", $$css: !0 },
        "ig-text-on-media": { color: "x1g9anri", $$css: !0 },
        "post-separator": { color: "x1xik6o7", $$css: !0 },
        "tos-box-shadow": { color: "x1arsvhq", $$css: !0 },
        "web-always-black": { color: "x175jnsf", $$css: !0 },
        "web-always-white": { color: "x9bdzbf", $$css: !0 },
        "web-secondary-action": { color: "x1f1bo2u", $$css: !0 },
      };
    function a(a) {
      var b = a.aspectRatio;
      b = b === void 0 ? 1 : b;
      var d = a.children,
        e = a.viewBox;
      a = babelHelpers.objectWithoutPropertiesLoose(a, [
        "aspectRatio",
        "children",
        "viewBox",
      ]);
      var f = a.alt,
        g = a.color;
      g = g === void 0 ? "ig-primary-text" : g;
      var i = a["data-testid"];
      i = a.shadow;
      i = i === void 0 ? !1 : i;
      a = a.size;
      a = a === void 0 ? 24 : a;
      var m = c("useCurrentDisplayMode")();
      return j.jsxs("svg", {
        "aria-label": f,
        className: (h || (h = c("stylex")))(
          k.root,
          i && k.shadow,
          typeof g === "string" && l[g]
        ),
        "data-testid": void 0,
        fill: typeof g === "string" ? "currentColor" : g[m],
        height: Math.ceil(a / b),
        role: "img",
        viewBox: e,
        width: a,
        children: [j.jsx("title", { children: f }), d],
      });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a;
  },
  98
);
__d(
  "IGDSVerifiedIcon",
  ["IGDSSVGIconBase.react", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || d("react");
    function a(a) {
      return i.jsx(
        c("IGDSSVGIconBase.react"),
        babelHelpers["extends"]({}, a, {
          viewBox: "0 0 40 40",
          children: i.jsx("path", {
            d: "M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z",
            fillRule: "evenodd",
          }),
        })
      );
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.memo(a);
    g["default"] = b;
  },
  98
);
__d(
  "IGDSThemeConstantsHelpers",
  ["XIGStyleXDefaultTheme"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      a = c("XIGStyleXDefaultTheme")[a];
      return a.includes(".") ? parseFloat(a) : parseInt(a, 10);
    }
    g.getNumericValue = a;
  },
  98
);
__d(
  "PolarisSponsoredPostContext.react",
  ["react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
      k = b.useMemo,
      l = b.useState,
      m = {
        canUserSeePersistentCta: !1,
        carouselImagesAsCta: !1,
        onProfileClick: function () {},
        singleImageAdAsCta: !1,
        updateSponsoredPostContext: function () {},
      },
      n = i.createContext(m);
    function a(a) {
      a = a.children;
      var b = k(function () {
        return m;
      }, []);
      b = l(b);
      var c = b[0],
        d = b[1],
        e = j(function (a) {
          return d(function (b) {
            return babelHelpers["extends"]({}, b, a);
          });
        }, []);
      b = k(
        function () {
          return babelHelpers["extends"]({}, c, {
            updateSponsoredPostContext: e,
          });
        },
        [c, e]
      );
      return i.jsx(n.Provider, { value: b, children: a });
    }
    a.displayName = a.name + " [from " + f.id + "]";
    c = i.memo(a);
    g.defaultContext = m;
    g.PolarisSponsoredPostContext = n;
    g.PolarisSponsoredPostContextProvider = c;
  },
  98
);
__d(
  "PolarisDesktopStoriesGalleryConstants",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    a = { preview: 0.4, viewer: 1 };
    b = [
      a.preview,
      a.preview,
      a.preview,
      a.preview,
      a.viewer,
      a.preview,
      a.preview,
      a.preview,
      a.preview,
    ];
    c = b.slice(2, 7);
    d = 0.5;
    e = 1.5;
    var g = 2,
      h = [
        { height: 1, previewCount: d, width: 1 },
        { height: 9, previewCount: e, width: 14 },
        { height: 9, previewCount: g, width: 16 },
      ],
      i = 0.96,
      j = 9 / 16;
    f.STORY_GALLERY_ITEM_SCALES = a;
    f.GALLERY = b;
    f.VISIBLE_GALLERY = c;
    f.PREVIEW_COUNT_0_5_CROP = d;
    f.PREVIEW_COUNT_1_5_CROP = e;
    f.PREVIEW_COUNT_2_CROP = g;
    f.ASPECT_RATIOS = h;
    f.STORY_VIEWER_LARGE_HEIGHT_PCT = i;
    f.STORY_VIEWER_ASPECT_RATIO_W_H = j;
  },
  66
);
__d(
  "PolarisThirdPartyPlatformType",
  ["$InternalEnum"],
  function (a, b, c, d, e, f) {
    "use strict";
    a = b("$InternalEnum")({
      FACEBOOK: "facebook",
      MESSENGER: "messenger",
      WHATSAPP: "whats_app",
      TWITTER: "twitter",
      COPY_LINK: "copy_link",
      EMAIL: "email",
      IMESSAGE: "imessage",
      USER_SMS: "user_sms",
    });
    f.PolarisThirdPartyPlatformType = a;
  },
  66
);
__d(
  "PolarisUrlHelpers",
  ["once"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h =
        "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz-----",
      i =
        "\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c",
      j = c("once")(function () {
        return new RegExp(i.split("").join("|"), "g");
      });
    function k(a) {
      return h.charAt(i.indexOf(a));
    }
    function a(a) {
      return a
        .toString()
        .toLowerCase()
        .replace(j(), k)
        .replace(/[^\w\s-]+/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/--+/g, "-");
    }
    g.slugify = a;
  },
  98
);
__d(
  "polarisRenderAboveImage",
  ["ReactDOMComet", "nullthrows", "react"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || d("react");
    function a(a, b) {
      var e = a === "EmbedGuide" ? ".GuideCover" : ".EmbedFrame";
      e = c("nullthrows")(document.querySelector(e));
      var f = document.createElement("div");
      f.className = a;
      e.appendChild(f);
      a === "EmbedSidecar" && (e.className += " EmbedFrameWithSidecar");
      d("ReactDOMComet").createRoot(f).render(b);
    }
    g["default"] = a;
  },
  98
);
__d(
  "PolarisGenericStrings",
  ["fbt"],
  function (a, b, c, d, e, f, g, h) {
    "use strict";
    a = h._("");
    b = h._("Failed to Load.");
    c = h._("Retry");
    d = h._("OK");
    e = h._("Close");
    f = h._("Go to fullscreen mode");
    var i = h._("Exit fullscreen mode"),
      j = h._("Cancel"),
      k = h._("Delete"),
      l = h._("Report"),
      m = h._("Report ad"),
      n = h._("Hide ad"),
      o = h._("Back"),
      p = h._("Uploading\u2026"),
      q = h._("Skip"),
      r = h._("Done"),
      s = h._("Undo"),
      t = h._("Follow"),
      u = h._("Following"),
      v = h._("Verified"),
      w = h._("Tags"),
      x = h._("Search"),
      y = h._("Play"),
      z = h._("Pause"),
      A = h._("Learn more"),
      B = h._("Next"),
      C = h._("Go Back"),
      D = h._("Comments on this post have been limited."),
      E = h._("Something went wrong. Please try again."),
      F = h._(
        "Something went wrong. If you have Ad blocker enabled, consider disabling it before trying again."
      ),
      G = h._("Carousel"),
      H = h._("Video"),
      I = h._("Reel"),
      J = h._("Pinned post icon"),
      K = h._("Upcoming event icon"),
      L = h._("Checkmark outline icon"),
      M = h._("Checkmark filled icon"),
      N = h._("Down chevron icon"),
      O = h._("Up chevron icon"),
      P = h._("Right chevron"),
      Q = h._("Left chevron"),
      R = h._("Play count icon"),
      S = h._("Dismiss"),
      T = h._("Close"),
      U = h._("Digital collectible"),
      V = h._("Save"),
      W = h._("Saved"),
      X = h._("View more comments"),
      Y = h._("Comments"),
      Z = function (a) {
        return h._("View all {reply count} replies", [
          h._param("reply count", a),
        ]);
      },
      $ = h._("Hide all replies"),
      aa = h._("Show more replies"),
      ba = h._("Couldn't post comment."),
      ca = h._("Retry"),
      da = h._("Oops, something happened"),
      ea = h._("There's an issue and we're working on it"),
      fa = h._("Post"),
      ga = h._("Add a comment\u2026");
    g.EMPTY_STRING = a;
    g.FAILED_TO_LOAD_TEXT = b;
    g.RETRY_TEXT = c;
    g.OK_TEXT = d;
    g.CLOSE_TEXT = e;
    g.GO_FULLSCREEN_TEXT = f;
    g.EXIT_FULLSCREEN_TEXT = i;
    g.CANCEL_TEXT = j;
    g.DELETE_TEXT = k;
    g.REPORT_TEXT = l;
    g.REPORT_AD_TEXT = m;
    g.HIDE_AD_TEXT = n;
    g.BACK_TEXT = o;
    g.UPLOADING_TEXT = p;
    g.SKIP_TEXT = q;
    g.DONE_TEXT = r;
    g.UNDO_TEXT = s;
    g.FOLLOW_TEXT = t;
    g.FOLLOWING_TEXT = u;
    g.VERIFIED_TEXT = v;
    g.TAG_TEXT = w;
    g.SEARCH_TEXT = x;
    g.ASSISTIVE_TEXT_PLAY_BUTTON = y;
    g.ASSISTIVE_TEXT_PAUSE_BUTTON = z;
    g.LEARN_MORE = A;
    g.NEXT = B;
    g.GO_BACK = C;
    g.COMMENTING_LIMITED = D;
    g.GENERIC_ERROR_MESSAGE = E;
    g.AD_BLOCKER_ERROR_MESSAGE = F;
    g.MEDIA_CAROUSEL_ALT = G;
    g.PLAY_BUTTON_ALT = H;
    g.REEL_ICON_ALT = I;
    g.PINNED_POST_ICON_ALT = J;
    g.UPCOMING_EVENT_ICON_ALT = K;
    g.CHECKMARK_OUTLINE_ICON_ALT = L;
    g.CHECKMARK_FILLED_ICON_ALT = M;
    g.DOWN_CHEVRON_ALT = N;
    g.UP_CHEVRON_ALT = O;
    g.RIGHT_CHEVRON = P;
    g.LEFT_CHEVRON = Q;
    g.PLAY_ICON_ALT = R;
    g.DISMISS_TEXT = S;
    g.ALT_TEXT_CLOSE_ICON = T;
    g.DIGITAL_COLLECTIBLE_TEXT = U;
    g.SAVE_TEXT = V;
    g.SAVED_TEXT = W;
    g.VIEW_MORE_COMMENTS_TEXT = X;
    g.COMMENTS_TEXT = Y;
    g.VIEW_ALL_REPLIES_TEXT = Z;
    g.HIDE_ALL_REPLIES_TEXT = $;
    g.SHOW_MORE_REPLIES_TEXT = aa;
    g.COMMENT_CREATION_FAILURE_TEXT = ba;
    g.COMMENT_CREATION_RETRY_TEXT = ca;
    g.CLIPS_PLAYER_FAILURE_TEXT = da;
    g.CLIPS_PLAYER_FAILURE_SUBTEXT = ea;
    g.POST_COMMENT_TEXT = fa;
    g.COMMENT_PLACEHOLDER_TEXT = ga;
  },
  98
);
__d(
  "PolarisMediaOverlayInfoTypes",
  ["isStringNullOrEmpty"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    b = {
      BOTTOM_BANNER: 0,
      BOTTOM_BANNER_BLOKS: 3,
      GEOBLOCK: 4,
      MEDIA_COVER: 1,
      MEDIA_COVER_WITH_BOTTOM_BANNER: 2,
    };
    d = {
      BANNER: 0,
      BOTTOM_BUTTON: 2,
      CENTER_BUTTON: 3,
      POST_REVEAL_BANNER_CTA: 1,
    };
    e = {
      CLEAR_MEDIA_COVER: 2,
      NO_OP: 1,
      OPEN_BLOKS_APP: 3,
      OPEN_EXTERNAL_URL: 0,
      OPEN_FACT_CHECK_SHEET: 1e3,
    };
    f = { GLYPH: 0 };
    var h = { EYE_OFF: 1, INFO: 0, NEWS_OFF: 2, WARNING: 3 },
      i = {
        MISINFORMATION: "MISINFORMATION",
        NEWSWORTHY_CONTENT_BOTTOM_BANNER: "NEWSWORTHY_CONTENT_BOTTOM_BANNER",
        SENSITIVITY: "SENSITIVITY",
      };
    function a(a) {
      a = a.media_overlay_info;
      var b = a || {};
      b = b.bloks_data;
      b = c("isStringNullOrEmpty")(b) ? null : JSON.parse(b);
      return a != null
        ? babelHelpers["extends"]({}, a, { bloks_data: b })
        : null;
    }
    g.MEDIA_OVERLAY_LAYOUTS = b;
    g.MEDIA_OVERLAY_BUTTON_TYPES = d;
    g.MEDIA_OVERLAY_BUTTON_ACTIONS = e;
    g.MEDIA_OVERLAY_ICON_TYPES = f;
    g.MEDIA_OVERLAY_ICON_GLYPHS = h;
    g.MEDIA_OVERLAY_TYPES = i;
    g.getMediaOverlayInfoFromGraphMediaInterface = a;
  },
  98
);
__d(
  "PolarisRefUtils",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function g(a, b) {
      typeof a === "function"
        ? a(b)
        : typeof a === "object" &&
          a != null &&
          Object.prototype.hasOwnProperty.call(a, "current") &&
          (a.current = b);
    }
    function a() {
      for (var a = arguments.length, b = new Array(a), c = 0; c < a; c++)
        b[c] = arguments[c];
      return function (a) {
        for (var c = 0; c < b.length; c++) {
          var d = b[c];
          g(d, a);
        }
      };
    }
    f.setRef = g;
    f.createRefHandler = a;
  },
  66
);
__d(
  "PolarisUpcomingEventTypes",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b;
      return {
        endTime: a.end_time,
        eventId: (b = c("nullthrows"))(a.id),
        reminderEnabled: b(a.reminder_enabled),
        startTime: b(a.start_time),
        title: b(a.title),
      };
    }
    g.getUpcomingEventFromUpcomingEventDict = a;
  },
  98
);
__d(
  "PolarisMediaConstants",
  ["keyMirror", "polarisUnexpected"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h = "UNSUPPORTED_MEDIA_TYPE";
    b = 2.5;
    d = 60.5;
    e = (4 / 5) * 0.99;
    f = 1.91 * 1.01;
    var i = 4 / 5,
      j = 9 / 16,
      k = c("keyMirror")({ center_crop: null }),
      l = {
        ALBUM: 3,
        ANIMATED_MEDIA: 12,
        AUDIO: 11,
        BROADCAST: 7,
        BUNDLE: 5,
        CAROUSEL_V2: 8,
        COLLECTION: 10,
        IMAGE: 1,
        MAP: 6,
        STATIC_STICKER: 13,
        VIDEO: 2,
        WEBVIEW: 4,
      };
    function a(a) {
      switch (a) {
        case 1:
          return "GraphImage";
        case 2:
          return "GraphVideo";
        case 8:
          return "GraphSidecar";
        default:
          c("polarisUnexpected")("unexpected post media type: " + a);
          return h;
      }
    }
    var m = {
        ALBUM: "album",
        DRAFT: "draft",
        FEED: "default",
        IGTV: "igtv",
        IGTV_DRAFT: "igtv_draft",
        IGTV_WITH_FEED: "igtv_with_feed",
        LIVE_REACTION: "live_reaction",
        NAMETAG_SELFIE: "nametag_selfie",
        PROFILE: "profile",
        PROFILE_PIC: "profile_pic",
        REEL: "reel",
      },
      n = {
        CLOSE_FRIENDS: 5,
        DEFAULT: 0,
        DEPRECATED_BESTIES: 2,
        FAN_CLUB: 4,
        ONLY_ME: 1,
        REHEARSAL: 3,
      },
      o = { AD: 2, NETEGO: 3, ORGANIC: 1, STATIC_MODEL: 4, UNDEFINED: 0 };
    g.FEED_MINIMUM_VIDEO_DURATION = b;
    g.FEED_MAXIMUM_VIDEO_DURATION = d;
    g.IMAGE_ASPECT_RATIO_MIN = e;
    g.IMAGE_ASPECT_RATIO_MAX = f;
    g.VIDEO_ASPECT_RATIO_MIN = i;
    g.VIDEO_ASPECT_RATIO_DOVETAIL_MIN = j;
    g.VIDEOTRANSFORM = k;
    g.MediaTypes = l;
    g.mapMediaTypeToGraphType = a;
    g.MediaPublishMode = m;
    g.MediaVisibility = n;
    g.UnitItemType = o;
  },
  98
);
__d(
  "polarisGetCrossOriginAttribute",
  ["justknobx"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a() {
      return c("justknobx")._("87") ? "anonymous" : void 0;
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetLocationFromGraphLocation",
  ["PolarisUrlHelpers", "recoverableViolation"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b = a.has_public_page,
        e = a.id,
        f = a.lat,
        g = a.lng,
        h = a.name;
      a = a.profile_pic_url;
      if (e == null || h == null) {
        var i;
        return c("recoverableViolation")(
          "Got missing data for location " + ((i = e) != null ? i : ""),
          "polaris"
        );
      }
      return {
        hasPublicPage: b,
        id: e,
        lat: f,
        lng: g,
        name: h,
        profilePictureUrl: a,
        slug: d("PolarisUrlHelpers").slugify(h),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetImageResourceFromGraphImageResource",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        configHeight: c("nullthrows")(a.config_height),
        configWidth: c("nullthrows")(a.config_width),
        src: a.src,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetRelatedMediaFromGraphMediaInterface",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        code: c("nullthrows")(a.shortcode),
        thumbnailSrc: c("nullthrows")(a.thumbnail_src),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetRelatedVideoMediaFromGraphMediaInterface",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return {
        accessibilityCaption: a.accessibility_caption,
        mediaOverlayInfo: a.media_overlay_info,
        shortcode: a.shortcode,
        thumbnailSrc: a.thumbnail_src,
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "polarisGetSensitivityFrictionInfoFromGraphMediaSensitivityFrictionInfo",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a
        ? {
            shareFrictionPrimaryButton: a.share_friction_primary_button,
            shareFrictionSecondaryButton: a.share_friction_secondary_button,
            shareFrictionSubtitle: a.share_friction_subtitle,
            shareFrictionTitle: a.share_friction_title,
          }
        : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "polarisGetSharingFrictionInfoFromGraphMediaSharingFrictionInfo",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return a
        ? {
            bloksAppUrl: a.bloks_app_url,
            shouldHaveSharingFriction: a.should_have_sharing_friction,
          }
        : null;
    }
    f["default"] = a;
  },
  66
);
__d(
  "polarisGetTaggedUserFromGraphTaggedUser",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b;
      return {
        user: {
          fullName: (b = c("nullthrows"))(a.user.full_name),
          id: b(a.user.id),
          isVerified: b(a.user.is_verified),
          profilePictureUrl: b(a.user.profile_pic_url),
          username: b(a.user.username),
        },
        x: a.x,
        y: a.y,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetUserFromGraphUser",
  ["filterObject", "nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a === null ? "" : a;
    }
    function a(a) {
      var b;
      b = {
        admins: (b = a.group_metadata) == null ? void 0 : b.num_admins,
        followedBy: a.edge_followed_by && a.edge_followed_by.count,
        follows: a.edge_follow && a.edge_follow.count,
        media:
          a.edge_owner_to_timeline_media &&
          a.edge_owner_to_timeline_media.count,
      };
      var d;
      if (a.edge_mutual_followed_by != null) {
        var e = a.edge_mutual_followed_by.edges.map(function (a) {
            return a.node.username;
          }),
          f = c("nullthrows")(a.edge_mutual_followed_by).count - e.length;
        d = { additional_count: f, usernames: e };
      }
      var g;
      if (
        a.biography_with_entities != null &&
        a.biography_with_entities.entities != null
      ) {
        g = {
          entities: a.biography_with_entities.entities,
          rawText:
            (f = a.biography_with_entities) == null ? void 0 : f.raw_text,
        };
      }
      e = {
        aiAgentType: a.ai_agent_type,
        basicAdsTier: (e = a.basic_ads_tier) != null ? e : void 0,
        bio: h(a.biography),
        biographyWithEntities: g,
        bioLinks: a.bio_links,
        blockedByViewer: a.blocked_by_viewer,
        businessAddress:
          a.business_address_json != null
            ? JSON.parse((f = a.business_address_json) != null ? f : "")
            : void 0,
        businessContactMethod:
          (e = a.business_contact_method) != null ? e : void 0,
        businessEmail: (f = a.business_email) != null ? f : void 0,
        businessPhoneNumber: (e = a.business_phone_number) != null ? e : void 0,
        canSeeOrganicInsights: a.can_see_organic_insights,
        categoryEnum: a.category_enum,
        categoryName: a.category_name,
        counts: c("filterObject")(b, function (a) {
          return a !== void 0;
        }),
        fbid: a.fbid,
        fbProfileBioLink: a.fb_profile_biolink,
        followedByViewer: a.followed_by_viewer,
        followsViewer: a.follows_viewer,
        fullName: a.full_name,
        groupMetadata: a.group_metadata,
        guardianId: a.guardian_id,
        guardianOfViewer: a.is_guardian_of_viewer,
        hasAREffects: a.has_ar_effects,
        hasBlockedViewer: a.has_blocked_viewer,
        hasClips: a.has_clips,
        hasGuides: a.has_guides,
        hasPhoneNumber: a.has_phone_number,
        hasProfilePic: a.has_profile_pic,
        hasPublicStory: a.has_public_story,
        hasRequestedViewer: a.has_requested_viewer,
        hasTabbedInbox: a.has_tabbed_inbox,
        hideLikeAndViewCounts: a.hide_like_and_view_counts,
        highlightReelCount: a.highlight_reel_count,
        id: c("nullthrows")(
          (a.id != null && a.id !== "" ? String(a.id) : void 0) ||
            (a.pk != null && a.pk !== "" ? String(a.pk) : void 0)
        ),
        interopMessagingUserFbid:
          a.eimu_id != null && a.eimu_id !== "" ? String(a.eimu_id) : void 0,
        isBasicAdsOptedIn: (f = a.is_basic_ads_opted_in) != null ? f : void 0,
        isBusinessAccount: a.is_business_account,
        isEmbedsDisabled: Boolean(a.is_embeds_disabled),
        isMemorialized: a.is_memorialized,
        isNew: Boolean(a.is_joined_recently),
        isPrivate: a.is_private,
        isProfessionalAccount: a.is_professional_account,
        isRegulatedC18: a.is_regulated_c18,
        isSupervisedUser: a.is_supervised_user,
        isSupervisionEnabled: a.is_supervision_enabled,
        isUnpublished: a.is_unpublished,
        isUserInCanada: a.is_user_in_canada,
        isVerified: a.is_verified,
        isVerifiedByMv4b: a.is_verified_by_mv4b,
        mutualFollowers: d,
        overallCategoryName: h(a.overall_category_name),
        passTieringRecommendation: a.pass_tiering_recommendation,
        profilePictureUrl: a.profile_pic_url,
        profilePictureUrlHd: a.profile_pic_url_hd,
        pronouns: a.pronouns,
        requestedByViewer: a.requested_by_viewer,
        restrictedByViewer: (e = a.restricted_by_viewer) != null ? e : void 0,
        shouldShowCategory: a.should_show_category,
        shouldShowPublicContacts: a.should_show_public_contacts,
        showAccountTransparencyDetails: a.show_account_transparency_details,
        supervisedByViewer: a.is_supervised_by_viewer,
        transparencyLabel: (b = a.transparency_label) != null ? b : void 0,
        transparencyProduct: (f = a.transparency_product) != null ? f : void 0,
        username: a.username,
        website: h(a.external_url),
        websiteLinkshimmed: h(a.external_url_linkshimmed),
      };
      return c("filterObject")(e, function (a) {
        return a !== void 0;
      });
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetSidecarChildFromGraphMediaInterface",
  [
    "PolarisMediaOverlayInfoTypes",
    "PolarisUpcomingEventTypes",
    "nullthrows",
    "polarisGetImageResourceFromGraphImageResource",
    "polarisGetSensitivityFrictionInfoFromGraphMediaSensitivityFrictionInfo",
    "polarisGetSharingFrictionInfoFromGraphMediaSharingFrictionInfo",
    "polarisGetTaggedUserFromGraphTaggedUser",
    "polarisGetUserFromGraphUser",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function h(a) {
      return a.media_preview;
    }
    function a(a, b, e, f) {
      return {
        accessibilityCaption:
          a.accessibility_caption === void 0 ? void 0 : a.accessibility_caption,
        dashInfo: a.dash_info === void 0 ? void 0 : a.dash_info,
        dimensions: babelHelpers["extends"](
          {},
          c("nullthrows")((f = f.dimensions) != null ? f : a.dimensions)
        ),
        displayResources:
          a.display_resources &&
          a.display_resources.map(function (a) {
            return c("polarisGetImageResourceFromGraphImageResource")(a);
          }),
        id: c("nullthrows")(a.id),
        isVideo: c("nullthrows")(a.is_video),
        mediaOverlayInfo: d(
          "PolarisMediaOverlayInfoTypes"
        ).getMediaOverlayInfoFromGraphMediaInterface(a),
        mediaPreview: h(a),
        owner: b && c("polarisGetUserFromGraphUser")(b),
        sensitivityFrictionInfo:
          a.sensitivity_friction_info &&
          c(
            "polarisGetSensitivityFrictionInfoFromGraphMediaSensitivityFrictionInfo"
          )(a.sensitivity_friction_info),
        sharingFrictionInfo: c(
          "polarisGetSharingFrictionInfoFromGraphMediaSharingFrictionInfo"
        )(a.sharing_friction_info),
        src: c("nullthrows")(a.display_url),
        trackingToken: a.tracking_token,
        upcomingEvent:
          e &&
          d("PolarisUpcomingEventTypes").getUpcomingEventFromUpcomingEventDict(
            e
          ),
        usertags:
          a.edge_media_to_tagged_user &&
          a.edge_media_to_tagged_user.edges.map(function (a) {
            return c("polarisGetTaggedUserFromGraphTaggedUser")(a.node);
          }),
        videoUrl: a.video_url != null ? a.video_url : void 0,
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetSponsorFromGraphSponsorTag",
  ["nullthrows"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return {
        id: c("nullthrows")(a.sponsor.id),
        username: c("nullthrows")(a.sponsor.username),
      };
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisGetVideoResourceFromGraphVideoResource",
  [],
  function (a, b, c, d, e, f) {
    "use strict";
    function a(a) {
      return {
        configHeight: a.config_height,
        configWidth: a.config_width,
        mimeType: a.mime_type,
        profile: a.profile,
        src: a.src,
        type: null,
      };
    }
    f["default"] = a;
  },
  66
);
__d(
  "polarisGetShareIdsFromGraphMediaShareableTracking",
  ["PolarisThirdPartyPlatformType"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      var b,
        c = {};
      c[
        (b = d(
          "PolarisThirdPartyPlatformType"
        )).PolarisThirdPartyPlatformType.FACEBOOK
      ] = a.facebook;
      c[b.PolarisThirdPartyPlatformType.MESSENGER] = a.messenger;
      c[b.PolarisThirdPartyPlatformType.WHATSAPP] = a.whatsapp;
      c[b.PolarisThirdPartyPlatformType.TWITTER] = a.twitter;
      c[b.PolarisThirdPartyPlatformType.COPY_LINK] = a.copy;
      c[b.PolarisThirdPartyPlatformType.EMAIL] = a.email;
      return c;
    }
    g["default"] = a;
  },
  98
);
__d(
  "polarisMediaOverlayInfoUtils",
  ["PolarisMediaOverlayInfoTypes"],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a) {
      return a == null ? void 0 : a.overlay_layout;
    }
    function h(a) {
      return a == null ? void 0 : a.overlay_type;
    }
    function i(a) {
      switch (a) {
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
          .BOTTOM_BANNER:
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
          .BOTTOM_BANNER_BLOKS:
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
          .MEDIA_COVER:
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
          .MEDIA_COVER_WITH_BOTTOM_BANNER:
          return !0;
        default:
          return !1;
      }
    }
    function b(a) {
      return (
        a ===
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES.MISINFORMATION
      );
    }
    function j(a) {
      return (
        a === d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES.SENSITIVITY
      );
    }
    function c(a) {
      return (
        a ===
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES
          .NEWSWORTHY_CONTENT_BOTTOM_BANNER
      );
    }
    function k(a) {
      if (a == null) return null;
      var b = a.icon_glyph;
      a = a.icon_type;
      return a ===
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_ICON_TYPES.GLYPH
        ? b
        : null;
    }
    function l(a, b) {
      if (a == null) return null;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (d == null) continue;
        var e = d.button_type;
        if (e === b) return d;
      }
      return null;
    }
    function m(a) {
      return (
        i(a) &&
        (a ===
          d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS.MEDIA_COVER ||
          a ===
            d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
              .MEDIA_COVER_WITH_BOTTOM_BANNER)
      );
    }
    function n(a) {
      if (a == null) return null;
      var b = a.buttons,
        c = a.description,
        e = a.icon,
        f = a.overlay_layout,
        g = a.overlay_type;
      a = a.title;
      return !m(f)
        ? null
        : {
            bottomButton: l(
              b,
              d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES
                .BOTTOM_BUTTON
            ),
            centerButton: l(
              b,
              d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES
                .CENTER_BUTTON
            ),
            description: c,
            overlayLayout: f,
            overlayType: g,
            rootIconGlyph: k(e),
            title: a,
          };
    }
    function e(a) {
      return !j(h(a)) ? null : n(a);
    }
    function f(a, b) {
      var c = a.banner,
        e = a.buttons,
        f = a.overlay_layout;
      a = a.overlay_type;
      if (!i(f)) return null;
      var g = null,
        h = !1,
        j = !1;
      if (
        f ===
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS.BOTTOM_BANNER
      )
        g = l(
          e,
          d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES.BANNER
        );
      else if (
        f ===
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS.MEDIA_COVER
      )
        (g = l(
          e,
          d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES
            .POST_REVEAL_BANNER_CTA
        )),
          (h = !b),
          (j = !0);
      else if (
        f ===
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_LAYOUTS
          .MEDIA_COVER_WITH_BOTTOM_BANNER
      ) {
        e = l(
          e,
          d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES
            .POST_REVEAL_BANNER_CTA
        );
        c = l(
          [c],
          d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_BUTTON_TYPES.BANNER
        );
        e != null
          ? c != null
            ? (g = b ? e : c)
            : ((g = e), (h = !b), (j = !0))
          : (g = c);
      }
      if (g == null) return null;
      e = g;
      b = e.icon;
      c = e.text;
      if (c == null || c === "") return null;
      e = null;
      var n = null;
      b != null && ((n = b.name), (e = k(b)));
      return {
        animationInfo: { canAnimateSlideIn: j, isHidden: h },
        bannerButton: g,
        hasMediaCover: m(f),
        iconAltText: n,
        iconGlyph: e,
        overlayLayout: f,
        overlayType: a,
        text: c,
      };
    }
    g.getMediaOverlayLayout = a;
    g.getMediaOverlayType = h;
    g.isMediaOverlayLayoutSupported = i;
    g.isMediaOverlayTypeMisinfo = b;
    g.isMediaOverlayTypeSensitiveContent = j;
    g.isMediaOverlayTypeNewsworthyContent = c;
    g.getMediaOverlayMediaCoverInfo = n;
    g.getLiveMediaOverlayMediaCoverInfo = e;
    g.getMediaOverlayBottomBannerInfo = f;
  },
  98
);
__d(
  "polarisGetPostFromGraphMediaInterface",
  [
    "PolarisMediaConstants",
    "PolarisMediaOverlayInfoTypes",
    "PolarisUpcomingEventTypes",
    "filterObject",
    "nullthrows",
    "polarisGetImageResourceFromGraphImageResource",
    "polarisGetLocationFromGraphLocation",
    "polarisGetRelatedMediaFromGraphMediaInterface",
    "polarisGetRelatedVideoMediaFromGraphMediaInterface",
    "polarisGetSensitivityFrictionInfoFromGraphMediaSensitivityFrictionInfo",
    "polarisGetShareIdsFromGraphMediaShareableTracking",
    "polarisGetSharingFrictionInfoFromGraphMediaSharingFrictionInfo",
    "polarisGetSidecarChildFromGraphMediaInterface",
    "polarisGetSponsorFromGraphSponsorTag",
    "polarisGetTaggedUserFromGraphTaggedUser",
    "polarisGetUserFromGraphUser",
    "polarisGetVideoResourceFromGraphVideoResource",
    "polarisMediaOverlayInfoUtils",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    function a(a, b) {
      a = a.owner;
      return !a || !b ? !1 : a.id === b.id;
    }
    function b(a) {
      a = a.owner;
      if (!a) return !1;
      a = a.isPrivate;
      a = a === void 0 ? !1 : a;
      return a;
    }
    function e(a) {
      a = a.owner;
      if (!a) return !1;
      a = a.isUnpublished;
      a = a === void 0 ? !1 : a;
      return a;
    }
    function f(a) {
      var b = a.isEmbedsDisabled;
      b = b === void 0 ? !1 : b;
      var c = a.isPrivate;
      c = c === void 0 ? !1 : c;
      a = a.isUnpublished;
      a = a === void 0 ? !1 : a;
      return !(b || c || a);
    }
    function h(a) {
      return (a.sidecarChildren || []).length > 0;
    }
    function i(a, b) {
      a = d("polarisMediaOverlayInfoUtils").getMediaOverlayType(
        a.mediaOverlayInfo
      );
      switch (b) {
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES
          .MISINFORMATION:
          return d("polarisMediaOverlayInfoUtils").isMediaOverlayTypeMisinfo(a);
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES.SENSITIVITY:
          return d(
            "polarisMediaOverlayInfoUtils"
          ).isMediaOverlayTypeSensitiveContent(a);
        case d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES
          .NEWSWORTHY_CONTENT_BOTTOM_BANNER:
          return d(
            "polarisMediaOverlayInfoUtils"
          ).isMediaOverlayTypeNewsworthyContent(a);
        default:
          return !1;
      }
    }
    function j(a) {
      return i(
        a,
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES.MISINFORMATION
      );
    }
    function k(a) {
      return i(
        a,
        d("PolarisMediaOverlayInfoTypes").MEDIA_OVERLAY_TYPES.SENSITIVITY
      );
    }
    function l(a) {
      return d("polarisMediaOverlayInfoUtils").isMediaOverlayLayoutSupported(
        d("polarisMediaOverlayInfoUtils").getMediaOverlayLayout(
          a.mediaOverlayInfo
        )
      );
    }
    function m(a) {
      var b = a.mediaOverlayInfo;
      return b != null && l(a) ? b : null;
    }
    function n(a, b) {
      a = m(a);
      return a != null
        ? d("polarisMediaOverlayInfoUtils").getMediaOverlayBottomBannerInfo(
            a,
            b
          )
        : null;
    }
    function o(a, b) {
      return a != null
        ? d("polarisMediaOverlayInfoUtils").getMediaOverlayBottomBannerInfo(
            a,
            b
          )
        : null;
    }
    function p(a, b) {
      return n(a, b);
    }
    function q(a, b) {
      return n(a, b);
    }
    function r(a) {
      a = m(a);
      return a != null
        ? d("polarisMediaOverlayInfoUtils").getMediaOverlayMediaCoverInfo(a)
        : null;
    }
    function s(a) {
      return r(a);
    }
    function t(a) {
      return r(a);
    }
    function u(a) {
      if (s(a) != null && a.mediaPreview != null && a.mediaPreview !== "")
        return a;
      if (a.isSidecar === !0) {
        a = a.sidecarChildren;
        a = a && a.length > 0 ? a[0] : null;
        if (
          a != null &&
          t(a) != null &&
          a.mediaPreview != null &&
          a.mediaPreview !== ""
        )
          return a;
      }
      return null;
    }
    function v(a) {
      if (a.isSidecar === !0)
        return d("PolarisMediaConstants").MediaTypes.CAROUSEL_V2;
      return a.isVideo === !0
        ? d("PolarisMediaConstants").MediaTypes.VIDEO
        : d("PolarisMediaConstants").MediaTypes.IMAGE;
    }
    var w = "pre_upload",
      x = "encoding_in_progress",
      y = "segmented_upload_and_encoding_in_progress",
      z = "encoding_complete",
      A = "encoding_failed",
      B = "published";
    function C(a) {
      return [w, x, y].includes(a.encodingStatus);
    }
    var D = "clips",
      E = "igtv",
      F = "story";
    function G(a) {
      return H(a.productType);
    }
    function H(a) {
      return a === D;
    }
    function I(a) {
      return a.commentsDisabled != null ? a.commentsDisabled : !1;
    }
    function J(a) {
      return a.likeAndViewCountsDisabled != null
        ? a.likeAndViewCountsDisabled === !1
        : !1;
    }
    function K(a) {
      return a.code;
    }
    function L(a) {
      return (
        a.edge_sidecar_to_children &&
        a.edge_sidecar_to_children.edges.map(function (b) {
          return c("polarisGetSidecarChildFromGraphMediaInterface")(
            b.node,
            a.owner,
            a.upcoming_event,
            a
          );
        })
      );
    }
    function M(a) {
      a = L(a);
      if (a != null && a.length > 0) {
        a = a[0];
        return (a = a.thumbnailResources) != null ? a : [];
      }
      return [];
    }
    function N(a) {
      a = L(a);
      if (a != null && a.length > 0) {
        a = a[0];
        return (a = a.src) != null ? a : "";
      }
      return "";
    }
    function O(a) {
      var b;
      b = {
        accessibilityCaption:
          a.accessibility_caption === void 0 ? void 0 : a.accessibility_caption,
        attribution: a.attribution === void 0 ? void 0 : a.attribution,
        audience: a.audience === void 0 ? void 0 : a.audience,
        canSeeInsightsAsBrand: a.can_see_insights_as_brand,
        caption:
          a.edge_media_to_caption &&
          a.edge_media_to_caption.edges[0] &&
          a.edge_media_to_caption.edges[0].node.text,
        captionCreatedAt:
          ((b = a.edge_media_to_caption) == null
            ? void 0
            : (b = b.edges[0]) == null
            ? void 0
            : (b = b.node) == null
            ? void 0
            : b.created_at) != null
            ? parseInt(a.edge_media_to_caption.edges[0].node.created_at, 10)
            : null,
        captionIsEdited: a.caption_is_edited,
        clipsMusicAttributionInfo:
          a.__typename === "GraphVideo"
            ? a.clips_music_attribution_info
            : void 0,
        coauthorProducers: (a.coauthor_producers || []).map(function (a) {
          return c("polarisGetUserFromGraphUser")(a);
        }),
        code: a.shortcode,
        commenterCount: a.commenter_count,
        commentingDisabledForViewer: a.commenting_disabled_for_viewer,
        commentsDisabled: a.comments_disabled,
        dashInfo: a.dash_info === void 0 ? void 0 : a.dash_info,
        dimensions: a.dimensions && {
          height: a.dimensions.height,
          width: a.dimensions.width,
        },
        displayResources:
          a.display_resources &&
          a.display_resources.map(
            c("polarisGetImageResourceFromGraphImageResource")
          ),
        encodingStatus:
          a.encoding_status != null && a.encoding_status !== ""
            ? a.encoding_status
            : void 0,
        expiringAt:
          a.expiring_at_timestamp != null && a.expiring_at_timestamp !== 0
            ? a.expiring_at_timestamp
            : void 0,
        felixProfileGridCrop:
          a.__typename === "GraphVideo" ? a.felix_profile_grid_crop : void 0,
        felixUploadState:
          a.__typename === "GraphVideo" ? a.felix_upload_state : void 0,
        followHashtagInfo: a.follow_hashtag_info,
        hasAudio:
          a.__typename === "GraphVideo" || a.__typename === "GraphStoryVideo"
            ? !!a.has_audio
            : !0,
        hasRankedComments: !!(a == null ? void 0 : a.has_ranked_comments),
        hasUpcomingEvent: a.has_upcoming_event,
        id: c("nullthrows")(a.id),
        isAd: a.is_ad,
        isAffiliate: a.is_affiliate === !0,
        isPaidPartnership: a.is_paid_partnership === !0,
        isPublished: a.__typename === "GraphVideo" ? a.is_published : void 0,
        isSidecar: a.__typename === "GraphSidecar",
        isSponsored: !1,
        isVideo:
          a.__typename === "GraphVideo" ||
          a.__typename === "GraphStoryVideo" ||
          a.is_video,
        likeAndViewCountsDisabled: a.like_and_view_counts_disabled,
        likedByViewer: a.viewer_has_liked,
        likers:
          a.edge_media_preview_like &&
          a.edge_media_preview_like.edges &&
          a.edge_media_preview_like.edges.map(function (a) {
            return c("polarisGetUserFromGraphUser")(a.node);
          }),
        location:
          a.location && c("polarisGetLocationFromGraphLocation")(a.location),
        mediaOverlayInfo: d(
          "PolarisMediaOverlayInfoTypes"
        ).getMediaOverlayInfoFromGraphMediaInterface(a),
        mediaPreview: a.media_preview,
        mutingInfo: a.__typename === "GraphStoryVideo" ? a.muting_info : void 0,
        numComments:
          a.edge_media_to_comment || a.edge_media_preview_comment
            ? c("nullthrows")(
                a.edge_media_to_comment || a.edge_media_preview_comment
              ).count
            : 0,
        numLikes:
          a == null ? void 0 : (b = a.edge_liked_by) == null ? void 0 : b.count,
        numPreviewLikes:
          a == null
            ? void 0
            : (b = a.edge_media_preview_like) == null
            ? void 0
            : b.count,
        overlayImageSrc:
          !!a.overlay_image_resources &&
          a.overlay_image_resources !== void 0 &&
          a.overlay_image_resources.length > 0
            ? a.overlay_image_resources[0].src
            : null,
        owner: a.owner && c("polarisGetUserFromGraphUser")(a.owner),
        pinnedForUsers: (a.pinned_for_users || []).map(function (a) {
          return c("polarisGetUserFromGraphUser")(a);
        }),
        postedAt: a.taken_at_timestamp,
        previewCommentIds:
          a.edge_media_preview_comment &&
          a.edge_media_preview_comment.edges &&
          a.edge_media_preview_comment.edges.map(function (a) {
            return a.node.id;
          }),
        productType: a.__typename === "GraphVideo" ? a.product_type : void 0,
        relatedMedia: (
          (a.edge_web_media_to_related_media &&
            a.edge_web_media_to_related_media.edges) ||
          []
        ).map(function (a) {
          return c("polarisGetRelatedMediaFromGraphMediaInterface")(a.node);
        }),
        relatedVideoMedia: (
          (((b = a.owner) == null
            ? void 0
            : b.edge_owner_to_timeline_video_media) &&
            ((b = a.owner) == null
              ? void 0
              : b.edge_owner_to_timeline_video_media.edges)) ||
          []
        ).map(function (a) {
          return c("polarisGetRelatedVideoMediaFromGraphMediaInterface")(
            a.node
          );
        }),
        savedByViewer: a.viewer_has_saved,
        savedByViewerToCollection: a.viewer_has_saved_to_collection,
        sensitivityFrictionInfo:
          a.sensitivity_friction_info &&
          c(
            "polarisGetSensitivityFrictionInfoFromGraphMediaSensitivityFrictionInfo"
          )(a.sensitivity_friction_info),
        shareIds:
          a.share_ids != null
            ? c("polarisGetShareIdsFromGraphMediaShareableTracking")(
                a.share_ids
              )
            : void 0,
        sharingFrictionInfo: c(
          "polarisGetSharingFrictionInfoFromGraphMediaSharingFrictionInfo"
        )(a.sharing_friction_info),
        sidecarChildren: (b = L(a)) != null ? b : [],
        sponsors:
          a.edge_media_to_sponsor_user &&
          a.edge_media_to_sponsor_user.edges.map(function (a) {
            return c("polarisGetSponsorFromGraphSponsorTag")(a.node);
          }),
        src: a.display_url,
        storyAppAttribution:
          a.story_app_attribution === void 0 ? void 0 : a.story_app_attribution,
        storyCtaUrl: a.story_cta_url === void 0 ? void 0 : a.story_cta_url,
        storyViewCount:
          a.story_view_count === void 0 ? void 0 : a.story_view_count,
        storyViewers:
          a.edge_story_media_viewers === void 0
            ? void 0
            : a.edge_story_media_viewers.edges.map(function (a) {
                return {
                  hasLiked: !1,
                  user: c("polarisGetUserFromGraphUser")(a.node),
                };
              }),
        thumbnailResources:
          a.__typename !== "GraphSidecar"
            ? a.thumbnail_resources &&
              a.thumbnail_resources.map(
                c("polarisGetImageResourceFromGraphImageResource")
              )
            : M(a),
        thumbnailSrc: a.__typename !== "GraphSidecar" ? a.thumbnail_src : N(a),
        title: a.__typename === "GraphVideo" ? a.title : void 0,
        trackingToken: a.tracking_token,
        upcomingEvent:
          a.upcoming_event &&
          d("PolarisUpcomingEventTypes").getUpcomingEventFromUpcomingEventDict(
            a.upcoming_event
          ),
        usertags:
          a.edge_media_to_tagged_user &&
          a.edge_media_to_tagged_user.edges.map(function (a) {
            return c("polarisGetTaggedUserFromGraphTaggedUser")(a.node);
          }),
        videoDuration: a.video_duration === void 0 ? void 0 : a.video_duration,
        videoPlays: a.video_play_count === void 0 ? void 0 : a.video_play_count,
        videoResources:
          a.video_resources === void 0
            ? void 0
            : a.video_resources.map(
                c("polarisGetVideoResourceFromGraphVideoResource")
              ),
        videoUrl: a.video_url != null ? a.video_url : void 0,
        videoViews: a.video_view_count === void 0 ? void 0 : a.video_view_count,
        viewerCanReshare: a.viewer_can_reshare,
        viewerInPhotoOfYou: a.viewer_in_photo_of_you,
      };
      return c("filterObject")(b, function (a) {
        return a !== void 0;
      });
    }
    g.getPostOwnerIsViewer = a;
    g.getPostOwnerIsPrivate = b;
    g.getPostOwnerIsUnpublished = e;
    g.getUserIsEmbeddable = f;
    g.getPostIsSidecar = h;
    g.isSidecarItemMediaOverlayTypeMisinfo = j;
    g.isSidecarItemMediaOverlayTypeSensitiveContent = k;
    g.getMediaOverlayBottomBannerInfoFromOverlayInfo = o;
    g.getMediaOverlayBottomBannerInfoFromRootPost = p;
    g.getMediaOverlayBottomBannerInfoFromSidecarChild = q;
    g.getMediaOverlayMediaCoverInfoFromPostOrSidecarItem = r;
    g.getMediaOverlayMediaCoverInfoFromPost = s;
    g.getMediaOverlayMediaCoverInfoFromSidecarChild = t;
    g.getPostOrSidecarItemForSensitivityOverlay = u;
    g.getPostMediaType = v;
    g.POST_ENCODING_COMPLETE = z;
    g.POST_ENCODING_FAILED = A;
    g.POST_ENCODING_PUBLISHED = B;
    g.getEncodingStatusWillChange = C;
    g.PRODUCT_TYPE_CLIPS = D;
    g.PRODUCT_TYPE_IGTV = E;
    g.PRODUCT_TYPE_STORY = F;
    g.isClipsPost = G;
    g.isClipsProductType = H;
    g.isPostCommentingOff = I;
    g.isPostLikeViewCountVisible = J;
    g.getPostShortCode = K;
    g.getPostFromGraphMediaInterface = O;
  },
  98
);
__d(
  "PolarisSizing",
  [
    "IGDSThemeConfig",
    "IGDSThemeConstantsHelpers",
    "PolarisDesktopStoriesGalleryConstants",
    "PolarisUA",
  ],
  function (a, b, c, d, e, f, g) {
    "use strict";
    var h,
      i = {
        footer: (h = d("IGDSThemeConstantsHelpers")).getNumericValue(
          "footer-width-wide"
        ),
        narrow: h.getNumericValue("site-width-narrow"),
        wide: h.getNumericValue("site-width-wide"),
      },
      j = 614,
      k = 470,
      l = h.getNumericValue("small-screen-min"),
      m = h.getNumericValue("small-screen-max");
    h = h.getNumericValue("medium-screen-min");
    var n = h;
    function a(a) {
      return (a.height / a.width) * 100;
    }
    function b(a) {
      var b = parseInt(c("IGDSThemeConfig").light.photo, 10);
      a.height > a.width &&
        (b = Math.ceil(
          (a.width * parseInt(c("IGDSThemeConfig").light.photo, 10)) / a.height
        ));
      return b + d("IGDSThemeConstantsHelpers").getNumericValue("media-info");
    }
    function e(a) {
      return !!(a && a.height && a.width && a.height > a.width);
    }
    function f(a) {
      return d("PolarisUA").isMobile() ? a > n : a > l;
    }
    function o(a) {
      a =
        a *
        d("PolarisDesktopStoriesGalleryConstants")
          .STORY_VIEWER_LARGE_HEIGHT_PCT;
      var b =
        d("PolarisDesktopStoriesGalleryConstants")
          .STORY_VIEWER_ASPECT_RATIO_W_H * a;
      return { height: a, width: b };
    }
    var p = 125;
    g.SITE_WIDTHS = i;
    g.FEED_WIDTH_WIDE = j;
    g.FEED_WIDTH_WIDE_DENSE = k;
    g.SMALL_SCREEN_CUTOFF = l;
    g.SMALL_SCREEN_MAX = m;
    g.LANDSCAPE_SMALL_SCREEN_CUTOFF = h;
    g.MEDIUM_SCREEN_MIN = n;
    g.getHeightPercent = a;
    g.getPageWidthForPostDimensions = b;
    g.needsCustomMaxPageWidth = e;
    g.shouldSpawnModals = f;
    g.getViewerDimensionsFromHeightV2 = o;
    g.CAPPED_HEIGHT_PERCENT = p;
  },
  98
);
__d(
  "ISOCountryCode",
  [],
  function (a, b, c, d, e, f) {
    a = Object.freeze({
      AD: "AD",
      AE: "AE",
      AF: "AF",
      AG: "AG",
      AI: "AI",
      AL: "AL",
      AM: "AM",
      AN: "AN",
      AO: "AO",
      AQ: "AQ",
      AR: "AR",
      AS: "AS",
      AT: "AT",
      AU: "AU",
      AW: "AW",
      AX: "AX",
      AZ: "AZ",
      BA: "BA",
      BB: "BB",
      BD: "BD",
      BE: "BE",
      BF: "BF",
      BG: "BG",
      BH: "BH",
      BI: "BI",
      BJ: "BJ",
      BL: "BL",
      BM: "BM",
      BN: "BN",
      BO: "BO",
      BQ: "BQ",
      BR: "BR",
      BS: "BS",
      BT: "BT",
      BV: "BV",
      BW: "BW",
      BY: "BY",
      BZ: "BZ",
      CA: "CA",
      CC: "CC",
      CD: "CD",
      CF: "CF",
      CG: "CG",
      CH: "CH",
      CI: "CI",
      CK: "CK",
      CL: "CL",
      CM: "CM",
      CN: "CN",
      CO: "CO",
      CR: "CR",
      CU: "CU",
      CV: "CV",
      CW: "CW",
      CX: "CX",
      CY: "CY",
      CZ: "CZ",
      DE: "DE",
      DJ: "DJ",
      DK: "DK",
      DM: "DM",
      DO: "DO",
      DZ: "DZ",
      EC: "EC",
      EE: "EE",
      EG: "EG",
      EH: "EH",
      ER: "ER",
      ES: "ES",
      ET: "ET",
      FI: "FI",
      FJ: "FJ",
      FK: "FK",
      FM: "FM",
      FO: "FO",
      FR: "FR",
      GA: "GA",
      GB: "GB",
      GD: "GD",
      GE: "GE",
      GF: "GF",
      GG: "GG",
      GH: "GH",
      GI: "GI",
      GL: "GL",
      GM: "GM",
      GN: "GN",
      GP: "GP",
      GQ: "GQ",
      GR: "GR",
      GS: "GS",
      GT: "GT",
      GU: "GU",
      GW: "GW",
      GY: "GY",
      HK: "HK",
      HM: "HM",
      HN: "HN",
      HR: "HR",
      HT: "HT",
      HU: "HU",
      ID: "ID",
      IE: "IE",
      IL: "IL",
      IM: "IM",
      IN: "IN",
      IO: "IO",
      IQ: "IQ",
      IR: "IR",
      IS: "IS",
      IT: "IT",
      JE: "JE",
      JM: "JM",
      JO: "JO",
      JP: "JP",
      KE: "KE",
      KG: "KG",
      KH: "KH",
      KI: "KI",
      KM: "KM",
      KN: "KN",
      KP: "KP",
      KR: "KR",
      KW: "KW",
      KY: "KY",
      KZ: "KZ",
      LA: "LA",
      LB: "LB",
      LC: "LC",
      LI: "LI",
      LK: "LK",
      LR: "LR",
      LS: "LS",
      LT: "LT",
      LU: "LU",
      LV: "LV",
      LY: "LY",
      MA: "MA",
      MC: "MC",
      MD: "MD",
      ME: "ME",
      MF: "MF",
      MG: "MG",
      MH: "MH",
      MK: "MK",
      ML: "ML",
      MM: "MM",
      MN: "MN",
      MO: "MO",
      MP: "MP",
      MQ: "MQ",
      MR: "MR",
      MS: "MS",
      MT: "MT",
      MU: "MU",
      MV: "MV",
      MW: "MW",
      MX: "MX",
      MY: "MY",
      MZ: "MZ",
      NA: "NA",
      NC: "NC",
      NE: "NE",
      NF: "NF",
      NG: "NG",
      NI: "NI",
      NL: "NL",
      NO: "NO",
      NP: "NP",
      NR: "NR",
      NU: "NU",
      NZ: "NZ",
      OM: "OM",
      PA: "PA",
      PE: "PE",
      PF: "PF",
      PG: "PG",
      PH: "PH",
      PK: "PK",
      PL: "PL",
      PM: "PM",
      PN: "PN",
      PR: "PR",
      PS: "PS",
      PT: "PT",
      PW: "PW",
      PY: "PY",
      QA: "QA",
      RE: "RE",
      RO: "RO",
      RS: "RS",
      RU: "RU",
      RW: "RW",
      SA: "SA",
      SB: "SB",
      SC: "SC",
      SD: "SD",
      SE: "SE",
      SG: "SG",
      SH: "SH",
      SI: "SI",
      SJ: "SJ",
      SK: "SK",
      SL: "SL",
      SM: "SM",
      SN: "SN",
      SO: "SO",
      SR: "SR",
      SS: "SS",
      ST: "ST",
      SV: "SV",
      SX: "SX",
      SY: "SY",
      SZ: "SZ",
      TC: "TC",
      TD: "TD",
      TF: "TF",
      TG: "TG",
      TH: "TH",
      TJ: "TJ",
      TK: "TK",
      TL: "TL",
      TM: "TM",
      TN: "TN",
      TO: "TO",
      TR: "TR",
      TT: "TT",
      TV: "TV",
      TW: "TW",
      TZ: "TZ",
      UA: "UA",
      UG: "UG",
      UM: "UM",
      US: "US",
      UY: "UY",
      UZ: "UZ",
      VA: "VA",
      VC: "VC",
      VE: "VE",
      VG: "VG",
      VI: "VI",
      VN: "VN",
      VU: "VU",
      WF: "WF",
      WS: "WS",
      XK: "XK",
      YE: "YE",
      YT: "YT",
      ZA: "ZA",
      ZM: "ZM",
      ZW: "ZW",
    });
    f["default"] = a;
  },
  66
);
__d(
  "CountryNames",
  ["CountryNamesConfig"],
  function (a, b, c, d, e, f) {
    "use strict";
    e.exports = b("CountryNamesConfig").codeToName;
  },
  null
);
