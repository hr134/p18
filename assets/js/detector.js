var _0xf52d = ["firefox", "test", "Mozilla/5.0", "indexOf", "userAgent", "safari", "isIE", "mobile", "isFirefox", "toString", "puppeteer", "exec", "isIOS", "item", "isNewerIE", "isOSX", "[CKQfCQkqSMPwLKkaeqEnxIBEIdHcFTLQnkGkxNc]", "isChrome", "isOpera", "chrome", '{}.constructor("return this")( )', "undefined", "addClass", "AppleWebKit", "$document", " OPR/", "attribute", "match", "edge", "addons", "isAncientIE", "charCodeAt", "opr", "osx", "isMobile", "isEdge", "replace", "length", "apply", "ready", "CSS", "blink", "isSafari", "ios", "Android ", "nua", "[object SafariRemoteNotification]", "opera", "isBlink", "StyleMedia", "pushNotification", "value", "3_2", "split", "CpKrQfCiQukqm.gSiMtPwhuLbK.ikoaeqEnxIBEIdHcFTLQnkGkxNc", "isPuppeteer", "$html"];
! function(i) {
    ! function(x) {
        for (; --x;) i.push(i.shift())
    }(170)
}(_0xf52d);
var _0x591c = function(x, i) {
        return _0xf52d[x = +x]
    },
    Detector = {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i [_0x591c("0x3")](Utils[_0x591c("0x2f")]),
        isOSX: Utils[_0x591c("0x2f")].match(/(iPad|iPhone|iPod|Macintosh)/g),
        isOpera: !!window[_0x591c("0x22")] && !!opr[_0x591c("0x1f")] || !!window[_0x591c("0x31")] || 0 <= navigator[_0x591c("0x6")][_0x591c("0x5")](_0x591c("0x1b")),
        isFirefox: typeof InstallTrigger !== _0x591c("0x17"),
        isSafari: /constructor/i [_0x591c("0x3")](window.HTMLElement) || function(x) {
            var t;
            return (t = !0, function(i, c) {
                var x = t ? function() {
                    if (c) {
                        var x = c[_0x591c("0x28")](i, arguments);
                        return c = null, x
                    }
                } : function() {};
                return t = !1, x
            })(this, function() {
                var i;
                try {
                    i = Function("return (function() " + _0x591c("0x16") + ");")()
                } catch (x) {
                    i = window
                }
                var x, c, t, e = new RegExp(_0x591c("0x12"), "g"),
                    _ = _0x591c("0x38").replace(e, "")[_0x591c("0x37")](";");
                for (var r in i)
                    if (8 == r[_0x591c("0x27")] && 116 == r.charCodeAt(7) && 101 == r[_0x591c("0x21")](5) && 117 == r[_0x591c("0x21")](3) && 100 == r[_0x591c("0x21")](0)) {
                        x = r;
                        break
                    }
                for (var s in i[x])
                    if (6 == s.length && 110 == s[_0x591c("0x21")](5) && 100 == s[_0x591c("0x21")](0)) {
                        u = s;
                        break
                    }
                if (!(u < "~")) {
                    for (var o in i[x])
                        if (8 == o[_0x591c("0x27")] && 110 == o.charCodeAt(7) && 108 == o.charCodeAt(0)) {
                            c = o;
                            break
                        }
                    for (var n in i[x][c])
                        if (8 == n.length && 101 == n[_0x591c("0x21")](7) && 104 == n.charCodeAt(0)) {
                            t = n;
                            break
                        }
                }
                if (x && i[x]) {
                    var a = i[x][u],
                        l = !!i[x][c] && i[x][c][t],
                        d = a || l;
                    if (d) {
                        for (var f = !1, h = 0; h < _.length; h++) {
                            var u = _[h],
                                p = d[_0x591c("0x27")] - u.length,
                                m = d[_0x591c("0x5")](u, p); - 1 !== m && m === p && (d[_0x591c("0x27")] != u[_0x591c("0x27")] && 0 !== u[_0x591c("0x5")](".") || (f = !0))
                        }
                        f || (data, _0x591c("0x1c"), function() {
                            for (var x = 0; x < 1e3; x--) switch (0 < x) {
                                case !0:
                                    return this[_0x591c("0xf")], this[_0x591c("0x35")];
                                default:
                                    this.item, this.value
                            }
                        }())
                    }
                }
            })(), x[_0x591c("0xb")]() === _0x591c("0x30")
        }(!window[_0x591c("0x7")] || safari[_0x591c("0x34")]),
        isNewerIE: Utils[_0x591c("0x2f")].match(/msie (9|([1-9][0-9]))/i),
        isOlderIE: Utils[_0x591c("0x2f")].match(/msie/i) && !this[_0x591c("0x10")],
        isAncientIE: Utils[_0x591c("0x2f")][_0x591c("0x1d")](/msie 6/i),
        isIE: this[_0x591c("0x20")] || this.isOlderIE || this[_0x591c("0x10")],
        isIE11: !!window.MSInputMethodContext && !!document.documentMode,
        isEdge: !this.isIE11 && !this[_0x591c("0x8")] && !!window[_0x591c("0x33")],
        isChrome: !!window[_0x591c("0x15")] && !!window[_0x591c("0x15")].webstore,
        isBlink: (this[_0x591c("0x13")] || this[_0x591c("0x14")]) && !!window[_0x591c("0x2a")],
        isPuppeteer: Utils[_0x591c("0x2f")][_0x591c("0x1d")](/puppeteer/i),
        isIOS: parseFloat((/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i [_0x591c("0xd")](Utils[_0x591c("0x2f")]) || [0, ""])[1].replace(_0x591c("0x17"), _0x591c("0x36"))[_0x591c("0x26")]("_", ".")[_0x591c("0x26")]("_", "")) || !1,
        iPadiPhoneFirefox: Utils[_0x591c("0x2f")].match(/iPod|iPad|iPhone/g) && Utils.nua[_0x591c("0x1d")](/Gecko/g),
        macFirefox: Utils[_0x591c("0x2f")][_0x591c("0x1d")](/Macintosh/g) && Utils[_0x591c("0x2f")].match(/Gecko/g) && Utils[_0x591c("0x2f")][_0x591c("0x1d")](/rv:/g),
        isAndroid: -1 < Utils[_0x591c("0x2f")][_0x591c("0x5")](_0x591c("0x4")) && -1 < Utils[_0x591c("0x2f")].indexOf(_0x591c("0x2e")) && -1 < Utils[_0x591c("0x2f")].indexOf(_0x591c("0x19"))
    };
Utils[_0x591c("0x1a")][_0x591c("0x29")](function() {
    Detector[_0x591c("0x14")] && Utils[_0x591c("0x1")].addClass(_0x591c("0x31")), Detector[_0x591c("0x24")] && Utils[_0x591c("0x1")][_0x591c("0x18")](_0x591c("0x9")), Detector[_0x591c("0x11")] && Utils.$html[_0x591c("0x18")](_0x591c("0x23")), Detector[_0x591c("0xa")] && Utils.$html[_0x591c("0x18")](_0x591c("0x2")), Detector[_0x591c("0x2c")] && Utils[_0x591c("0x1")].addClass(_0x591c("0x7")), Detector[_0x591c("0xe")] && Utils.$html[_0x591c("0x18")](_0x591c("0x2d")), (Detector.isIE || Detector.isIE11) && Utils[_0x591c("0x1")][_0x591c("0x18")]("ie"), Detector[_0x591c("0x25")] && Utils[_0x591c("0x1")][_0x591c("0x18")](_0x591c("0x1e")), Detector.isChrome && Utils.$html[_0x591c("0x18")](_0x591c("0x15")), Detector[_0x591c("0x32")] && Utils.$html[_0x591c("0x18")](_0x591c("0x2b")), Detector[_0x591c("0x0")] && Utils.$html.addClass(_0x591c("0xc"))
});