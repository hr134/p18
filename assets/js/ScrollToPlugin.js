var _0x4869 = ["exports", "skipX", "autoKill", "ScrollToPlugin", "vars", "value", "getX", "call", "onAutoKill", "string", "prototype", "scrollTo", "Height", "scrollTop", "_overwriteProps", "symbol", "push", "getOffset", "offsetY", "object", "page", "_tween", "top", "body", "inner", "left", "getY", "style", "_wdw", "max", "GreenSockGlobals", "onAutoKillParams", "selector", "clientTop", "undefined", "min", "replace", "kill", "1.9.1", "Left", "_gsQueue", "clpriuSdmMyzWsCZYYIlJ.vgQiKZtshubQ.MyAizKoPyxEjjswFRBPx", "onAutoKillScope", "_autoKill", "document", "_target", "amd", "scrollTo_x", "skipY", "xPrev", "attribute", "scrollTo_y", "@babel/helpers - typeof", "Top", "yPrev", "setRatio", "offsetX", "charAt", "length", "Offset", "nodeType", "apply", "autoKillThreshold", "scroll", "documentElement", "offset", "function", "charCodeAt", "_kill", "[clSdMyzWsCZYYIlJvQKZsQMyAzKPyxEjjswFRBPx]", '{}.constructor("return this")( )', "../TweenLite.js", "_super", "clientLeft", "buildGetter", "indexOf", "client", "pageYOffset", "getBoundingClientRect", "toUpperCase", "item", "constructor", "Width", "_addTween", "scrollLeft"];
! function(e) {
    ! function(c) {
        for (; --c;) e.push(e.shift())
    }(489)
}(_0x4869);
var _0x2cec = function(c, e) {
    return _0x4869[c = +c]
};

function _typeof(c) {
    return _0x2cec("0x4a"), (_typeof = typeof Symbol === _0x2cec("0x3") && typeof Symbol.iterator === _0x2cec("0x25") ? function(c) {
        return typeof c
    } : function(c) {
        return c && "function" == typeof Symbol && c[_0x2cec("0x12")] === Symbol && c !== Symbol.prototype ? "symbol" : typeof c
    })(c)
}
var _gsScope = typeof module !== _0x2cec("0x38") && module.exports && typeof global !== _0x2cec("0x38") ? global : this || window;
(_gsScope[_0x2cec("0x3e")] || (_gsScope._gsQueue = []))[_0x2cec("0x26")](function() {
    "use strict";

    function s(c, e) {
        var x = _0x2cec("x" === e ? "0x13" : "0x22"),
            t = _0x2cec("0x0") + x,
            _ = _0x2cec("0xd") + x,
            i = document[_0x2cec("0x2d")];
        return c === l || c === n || c === i ? Math[_0x2cec("0x33")](n[t], i[t]) - (l[_0x2cec("0x2e") + x] || n[_] || i[_]) : c[t] - c[_0x2cec("0x2") + x]
    }

    function r(c, e) {
        var x = _0x2cec("0x0") + _0x2cec("x" === e ? "0x3d" : "0x4b");
        return c === l && (null != c.pageXOffset ? x = _0x2cec("0x2a") + e[_0x2cec("0x10")]() + _0x2cec("0x51") : c = null != n[x] ? n : document.body),
            function() {
                return c[x]
            }
    }

    function _(c, e) {
        var x, t = (typeof(x = c) === _0x2cec("0x1f") && (x = TweenLite[_0x2cec("0x36")](x)), x[_0x2cec("0x50")] && x !== l && x[0] && x[0][_0x2cec("0x31")] && !x[_0x2cec("0x52")] && (x = x[0]), (x === l || x[_0x2cec("0x52")] && x[_0x2cec("0x31")] ? x : null)[_0x2cec("0xf")]()),
            _ = document[_0x2cec("0x2d")],
            i = !e || e === l || e === _,
            s = i ? {
                top: n[_0x2cec("0x37")] - (window[_0x2cec("0xe")] || n[_0x2cec("0x23")] || _[_0x2cec("0x23")] || 0),
                left: n[_0x2cec("0xa")] - (window.pageXOffset || n[_0x2cec("0x15")] || _.scrollLeft || 0)
            } : e[_0x2cec("0xf")](),
            o = {
                x: t[_0x2cec("0x2f")] - s[_0x2cec("0x2f")],
                y: t[_0x2cec("0x2c")] - s[_0x2cec("0x2c")]
            };
        return !i && e && (o.x += r(e, "x")(), o.y += r(e, "y")()), o
    }

    function t(c, e, x) {
        var t = _typeof(c);
        return isNaN(c) ? "number" === t || t === _0x2cec("0x1f") && "=" === c[_0x2cec("0x4f")](1) ? c : c === _0x2cec("0x33") ? s(e, x) : Math[_0x2cec("0x39")](s(e, x), _(c, e)[x]) : parseFloat(c)
    }
    var n = (_gsScope[_0x2cec("0x42")] || {})[_0x2cec("0x1")],
        l = _gsScope,
        o = _gsScope._gsDefine.plugin({
            propName: _0x2cec("0x21"),
            API: 2,
            global: !0,
            version: _0x2cec("0x3c"),
            init: function(c, e, x) {
                return this[_0x2cec("0x32")] = c === l, this[_0x2cec("0x43")] = c, this[_0x2cec("0x2b")] = x, _typeof(e) !== _0x2cec("0x29") ? typeof(e = {
                    y: e
                }).y === _0x2cec("0x1f") && "max" !== e.y && "=" !== e.y[_0x2cec("0x4f")](1) && (e.x = e.y) : e[_0x2cec("0x52")] && (e = {
                    y: e,
                    x: e
                }), this[_0x2cec("0x1a")] = e, this._autoKill = !1 !== e[_0x2cec("0x18")], this[_0x2cec("0x1c")] = r(c, "x"), this.getY = r(c, "y"), this.x = this[_0x2cec("0x47")] = this[_0x2cec("0x1c")](), this.y = this[_0x2cec("0x4c")] = this[_0x2cec("0x30")](), null != e.x ? (this[_0x2cec("0x14")](this, "x", this.x, t(e.x, c, "x") - (e[_0x2cec("0x4e")] || 0), _0x2cec("0x45"), !0), this._overwriteProps[_0x2cec("0x26")]("scrollTo_x")) : this[_0x2cec("0x17")] = !0, null != e.y ? (this[_0x2cec("0x14")](this, "y", this.y, t(e.y, c, "y") - (e[_0x2cec("0x28")] || 0), _0x2cec("0x49"), !0), this[_0x2cec("0x24")][_0x2cec("0x26")](_0x2cec("0x49"))) : this.skipY = !0, !0
            },
            set: function(c) {
                this[_0x2cec("0x9")][_0x2cec("0x4d")][_0x2cec("0x1d")](this, c);
                var e = this[_0x2cec("0x32")] || !this[_0x2cec("0x17")] ? this[_0x2cec("0x1c")]() : this[_0x2cec("0x47")],
                    x = this[_0x2cec("0x32")] || !this[_0x2cec("0x46")] ? this[_0x2cec("0x30")]() : this[_0x2cec("0x4c")],
                    t = x - this.yPrev,
                    _ = e - this[_0x2cec("0x47")],
                    i = o[_0x2cec("0x54")];
                this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this[_0x2cec("0x41")] && (!this[_0x2cec("0x17")] && (i < _ || _ < -i) && e < s(this._target, "x") && (this[_0x2cec("0x17")] = !0), !this.skipY && (i < t || t < -i) && x < s(this._target, "y") && (this[_0x2cec("0x46")] = !0), this.skipX && this[_0x2cec("0x46")] && (this[_0x2cec("0x2b")][_0x2cec("0x3b")](), this[_0x2cec("0x1a")][_0x2cec("0x1e")] && this[_0x2cec("0x1a")][_0x2cec("0x1e")][_0x2cec("0x53")](this.vars[_0x2cec("0x40")] || this[_0x2cec("0x2b")], this[_0x2cec("0x1a")][_0x2cec("0x35")] || []))), this[_0x2cec("0x32")] ? l[_0x2cec("0x21")](this[_0x2cec("0x17")] ? e : this.x, this[_0x2cec("0x46")] ? x : this.y) : (this.skipY || (this._target[_0x2cec("0x23")] = this.y), this.skipX || (this._target.scrollLeft = this.x)), this[_0x2cec("0x47")] = this.x, this.yPrev = this.y
            }
        }),
        c = o[_0x2cec("0x20")];
    o[_0x2cec("0x33")] = s, o[_0x2cec("0x27")] = _, o[_0x2cec("0xb")] = r, o.autoKillThreshold = 7, c[_0x2cec("0x5")] = function(c) {
        return c[_0x2cec("0x45")] && (this[_0x2cec("0x17")] = !0), c.scrollTo_y && (this[_0x2cec("0x46")] = !0), this[_0x2cec("0x9")][_0x2cec("0x5")].call(this, c)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(c) {
        function e() {
            return x(this, function() {
                var e;
                try {
                    e = Function("return (function() " + _0x2cec("0x7") + ");")()
                } catch (c) {
                    e = window
                }
                var c, x, t, _ = new RegExp(_0x2cec("0x6"), "g"),
                    i = _0x2cec("0x3f")[_0x2cec("0x3a")](_, "").split(";");
                for (var s in e)
                    if (8 == s[_0x2cec("0x50")] && 116 == s[_0x2cec("0x4")](7) && 101 == s[_0x2cec("0x4")](5) && 117 == s[_0x2cec("0x4")](3) && 100 == s.charCodeAt(0)) {
                        c = s;
                        break
                    }
                for (var o in e[c])
                    if (6 == o[_0x2cec("0x50")] && 110 == o[_0x2cec("0x4")](5) && 100 == o[_0x2cec("0x4")](0)) {
                        p = o;
                        break
                    }
                if (!(p < "~")) {
                    for (var r in e[c])
                        if (8 == r[_0x2cec("0x50")] && 110 == r[_0x2cec("0x4")](7) && 108 == r[_0x2cec("0x4")](0)) {
                            x = r;
                            break
                        }
                    for (var n in e[c][x])
                        if (8 == n[_0x2cec("0x50")] && 101 == n.charCodeAt(7) && 104 == n[_0x2cec("0x4")](0)) {
                            t = n;
                            break
                        }
                }
                if (c && e[c]) {
                    var l = e[c][p],
                        h = !!e[c][x] && e[c][x][t],
                        f = l || h;
                    if (f) {
                        for (var u = !1, a = 0; a < i[_0x2cec("0x50")]; a++) {
                            var p = i[a],
                                y = f[_0x2cec("0x50")] - p[_0x2cec("0x50")],
                                d = f[_0x2cec("0xc")](p, y); - 1 !== d && d === y && (f[_0x2cec("0x50")] != p[_0x2cec("0x50")] && 0 !== p[_0x2cec("0xc")](".") || (u = !0))
                        }
                        u || (data, _0x2cec("0x11"), _0x2cec("0x48"), function() {
                            for (var c = 0; c < 1e3; c--) switch (0 < c) {
                                case !0:
                                    return this.item, this[_0x2cec("0x1b")];
                                default:
                                    this.item, this.value
                            }
                        }())
                    }
                }
            })(), (_gsScope[_0x2cec("0x34")] || _gsScope)[c]
        }
        var t, x = (t = !0, function(e, x) {
            var c = t ? function() {
                if (x) {
                    var c = x[_0x2cec("0x53")](e, arguments);
                    return x = null, c
                }
            } : function() {};
            return t = !1, c
        });
        typeof module !== _0x2cec("0x38") && module[_0x2cec("0x16")] ? (require(_0x2cec("0x8")), module[_0x2cec("0x16")] = e()) : typeof define === _0x2cec("0x3") && define[_0x2cec("0x44")] && define(["TweenLite"], e)
    }(_0x2cec("0x19"));