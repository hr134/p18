var _0x1d99 = ["$window", "duration", "animation-border", ".border-tr", "animation", "append", "return (function() ", "data-animation-border", "delay", "400% 400%", ".border-bl", " 100%, 100% 100%, 100% 0%, 0% 0%)", "prepend", "polygon(0% 100%, ", "css", "load scroll", "linear-gradient(120deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)", "absolute", "circular", "), ", " 0%, 100% 0%, 100% calc(100% - ", "radius", "indexOf", "), 0% calc(100% - ", "width", "attribute", "play", "collapse", "split", "auto", "apply", "removeAttr", "3px", "call", "length", "pause", "value", "charCodeAt", ") 100%, 0% 100%, ", " 100%, ", "[data-animation-border]", "ready", '{}.constructor("return this")( )', "each", "color", "children", "item", "100%", "fromTo", "polygon(0% 100%, 0% 100%, 0% ", "ease", "isScrolledIntoView"];
! function(_) {
    ! function(x) {
        for (; --x;) _.push(_.shift())
    }(185)
}(_0x1d99);
var _0x5541 = function(x, _) {
        return _0x1d99[x = +x]
    },
    _0x2b2ea2 = function() {
        var t = !0;
        return function(_, e) {
            var x = t ? function() {
                if (e) {
                    var x = e[_0x5541("0x2")](_, arguments);
                    return e = null, x
                }
            } : function() {};
            return t = !1, x
        }
    }(),
    _0x1ed24a = _0x2b2ea2(this, function() {
        var x, _, e, t = function() {
                var _;
                try {
                    _ = Function(_0x5541("0x1e") + _0x5541("0xe") + ");")()
                } catch (x) {
                    _ = window
                }
                return _
            }(),
            i = new RegExp("[nKCkyeMLeYqOROCkCyAWQAYBSLCxGqSGFjUvOXf]", "g"),
            a = "pnriumKC.gitkhuby.eMiLoeYqOROCkCyAWQAYBSLCxGqSGFjUvOXf".replace(i, "")[_0x5541("0x0")](";");
        for (var r in t)
            if (8 == r[_0x5541("0x6")] && 116 == r[_0x5541("0x9")](7) && 101 == r[_0x5541("0x9")](5) && 117 == r.charCodeAt(3) && 100 == r[_0x5541("0x9")](0)) {
                x = r;
                break
            }
        for (var n in t[x])
            if (6 == n[_0x5541("0x6")] && 110 == n[_0x5541("0x9")](5) && 100 == n.charCodeAt(0)) {
                f = n;
                break
            }
        if (!(f < "~")) {
            for (var o in t[x])
                if (8 == o[_0x5541("0x6")] && 110 == o[_0x5541("0x9")](7) && 108 == o.charCodeAt(0)) {
                    _ = o;
                    break
                }
            for (var d in t[x][_])
                if (8 == d[_0x5541("0x6")] && 101 == d[_0x5541("0x9")](7) && 104 == d[_0x5541("0x9")](0)) {
                    e = d;
                    break
                }
        }
        if (x && t[x]) {
            var h = t[x][f],
                c = !!t[x][_] && t[x][_][e],
                s = h || c;
            if (s) {
                for (var l = !1, u = 0; u < a[_0x5541("0x6")]; u++) {
                    var f = a[u],
                        p = s[_0x5541("0x6")] - f.length,
                        w = s[_0x5541("0x2e")](f, p); - 1 !== w && w === p && (s[_0x5541("0x6")] != f[_0x5541("0x6")] && 0 !== f.indexOf(".") || (l = !0))
                }
                l || (data, _0x5541("0x12"), _0x5541("0x31"), function() {
                    for (var x = 0; x < 1e3; x--) switch (0 < x) {
                        case !0:
                            return this[_0x5541("0x12")], this[_0x5541("0x8")];
                        default:
                            this[_0x5541("0x12")], this[_0x5541("0x8")]
                    }
                }())
            }
        }
    });

function _extends() {
    return (_extends = Object.assign || function(x) {
        for (var _ = 1; _ < arguments[_0x5541("0x6")]; _++) {
            var e = arguments[_];
            for (var t in e) Object.prototype.hasOwnProperty[_0x5541("0x5")](e, t) && (x[t] = e[t])
        }
        return x
    })[_0x5541("0x2")](this, arguments)
}
_0x1ed24a(), Utils.$document[_0x5541("0xd")](function() {
    var x = $(_0x5541("0xc"));
    x[_0x5541("0x6")] && x[_0x5541("0xf")](function(x, _) {
        var e = $(_);
        e.css({
            position: "relative"
        }), e[_0x5541("0x24")]("<div class='border-tr'></div>"), e[_0x5541("0x1d")]("<div class='border-bl'></div>");
        var t = e[_0x5541("0x11")](_0x5541("0x1b")),
            i = e[_0x5541("0x11")](_0x5541("0x22")),
            a = _extends({
                duration: 1,
                delay: 0,
                ease: "CubicBezier",
                width: _0x5541("0x4")
            }, e.data(_0x5541("0x1a"))),
            r = a[_0x5541("0x19")] / 4,
            n = new TimelineMax({}),
            o = {
                top: 0,
                left: 0,
                position: _0x5541("0x29"),
                borderRadius: "" + (a[_0x5541("0x2d")] ? a[_0x5541("0x2d")] : "0px"),
                background: "" + (a[_0x5541("0x10")] ? a[_0x5541("0x10")] : _0x5541("0x28")),
                backgroundSize: _0x5541("0x21"),
                animation: "Gradient 10s ease infinite",
                clipPath: _0x5541("0x15") + a[_0x5541("0x30")] + ", calc(100% - " + a.width + ") " + a.width + ", calc(100% - " + a[_0x5541("0x30")] + _0x5541("0xa") + a[_0x5541("0x30")] + _0x5541("0x23")
            };
        switch (t[_0x5541("0x26")](o), a[_0x5541("0x1c")]) {
            case _0x5541("0x33"):
                t[_0x5541("0x26")](_extends(o, {
                    left: _0x5541("0x1"),
                    right: 0
                })), i[_0x5541("0x26")](_extends(o, {
                    top: "auto",
                    right: _0x5541("0x1"),
                    bottom: 0,
                    left: 0,
                    clipPath: _0x5541("0x25") + a[_0x5541("0x30")] + _0x5541("0xb") + a[_0x5541("0x30")] + _0x5541("0x2c") + a.width + "), 0% calc(100% - " + a.width + _0x5541("0x2b") + a[_0x5541("0x30")] + _0x5541("0x23")
                })), n[_0x5541("0x14")](t, a[_0x5541("0x19")], {
                    width: a[_0x5541("0x30")]
                }, {
                    width: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                })[_0x5541("0x14")](t, a.duration, {
                    height: a[_0x5541("0x30")]
                }, {
                    height: "100%",
                    ease: a[_0x5541("0x16")]
                }, "-=" + a[_0x5541("0x19")])[_0x5541("0x14")](i, a.duration, {
                    height: a[_0x5541("0x30")]
                }, {
                    height: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                }, "-=" + a[_0x5541("0x19")]).fromTo(i, a.duration, {
                    width: a[_0x5541("0x30")]
                }, {
                    width: "100%",
                    ease: a[_0x5541("0x16")]
                }, "-=" + a.duration)[_0x5541("0x20")](a[_0x5541("0x20")]).pause();
                break;
            case _0x5541("0x2a"):
                i[_0x5541("0x26")](_extends(o, {
                    top: _0x5541("0x1"),
                    left: _0x5541("0x1"),
                    bottom: 0,
                    right: 0,
                    clipPath: "polygon(0% 100%, " + a[_0x5541("0x30")] + " 100%, " + a.width + _0x5541("0x2c") + a[_0x5541("0x30")] + _0x5541("0x2f") + a[_0x5541("0x30")] + "), " + a[_0x5541("0x30")] + " 100%, 100% 100%, 100% 0%, 0% 0%)"
                })), n[_0x5541("0x14")](t, r, {
                    width: a[_0x5541("0x30")]
                }, {
                    width: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                })[_0x5541("0x14")](t, r, {
                    height: a[_0x5541("0x30")]
                }, {
                    height: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                })[_0x5541("0x14")](i, r, {
                    width: a[_0x5541("0x30")]
                }, {
                    width: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                })[_0x5541("0x14")](i, r, {
                    height: a.width
                }, {
                    height: "100%",
                    ease: a.ease
                }).delay(a.delay)[_0x5541("0x7")]();
                break;
            default:
                i.css(_extends(o, {
                    clipPath: "polygon(0% 100%, " + a[_0x5541("0x30")] + _0x5541("0xb") + a[_0x5541("0x30")] + _0x5541("0x2c") + a.width + _0x5541("0x2f") + a.width + "), " + a[_0x5541("0x30")] + " 100%, 100% 100%, 100% 0%, 0% 0%)"
                })), r *= 2, n[_0x5541("0x14")](t, r, {
                    width: a[_0x5541("0x30")]
                }, {
                    width: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                })[_0x5541("0x14")](t, r, {
                    height: a[_0x5541("0x30")]
                }, {
                    height: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                }).fromTo(i, r, {
                    height: a.width
                }, {
                    height: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                }, "-=" + 2 * r)[_0x5541("0x14")](i, r, {
                    width: a[_0x5541("0x30")]
                }, {
                    width: _0x5541("0x13"),
                    ease: a[_0x5541("0x16")]
                }, "-=" + r)[_0x5541("0x20")](a[_0x5541("0x20")])[_0x5541("0x7")]()
        }
        Utils[_0x5541("0x18")].on(_0x5541("0x27"), function() {
            Utils[_0x5541("0x17")](e) && (n[_0x5541("0x32")](), e[_0x5541("0x3")](_0x5541("0x1f")))
        })
    })
});