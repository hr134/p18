var _0x50c6 = ["count", "countNum", "each", "indexOf", "toFixed", "toString", "value", "return (function() ", "text", "charCodeAt", "comma", "replace", "[data-countup]", "apply", "attribute", "animate", "item", "priumPVc.giKUtyhquWsbxPcX.iowsZAzvSWaMUXdHeVeUexlUfkV", "split", "scroll", "$document", "floor", "isScrolledIntoView", "linear", "length", "$window"];
! function(t) {
    ! function(x) {
        for (; --x;) t.push(t.shift())
    }(377)
}(_0x50c6);
var _0x1408 = function(x, t) {
        return _0x50c6[x = +x]
    },
    _0x266c21 = function() {
        var e = !0;
        return function(t, n) {
            var x = e ? function() {
                if (n) {
                    var x = n[_0x1408("0x1")](t, arguments);
                    return n = null, x
                }
            } : function() {};
            return e = !1, x
        }
    }(),
    _0x367885 = _0x266c21(this, function() {
        var x, t, n, e = function() {
                var t;
                try {
                    t = Function(_0x1408("0x15") + '{}.constructor("return this")( ));')()
                } catch (x) {
                    t = window
                }
                return t
            }(),
            i = new RegExp("[PVcKUyqWsxPcXwsZAzvSWaMUXdHeVeUexlUfkV]", "g"),
            r = _0x1408("0x5").replace(i, "")[_0x1408("0x6")](";");
        for (var c in e)
            if (8 == c[_0x1408("0xc")] && 116 == c[_0x1408("0x17")](7) && 101 == c[_0x1408("0x17")](5) && 117 == c[_0x1408("0x17")](3) && 100 == c.charCodeAt(0)) {
                x = c;
                break
            }
        for (var a in e[x])
            if (6 == a[_0x1408("0xc")] && 110 == a[_0x1408("0x17")](5) && 100 == a[_0x1408("0x17")](0)) {
                d = a;
                break
            }
        if (!(d < "~")) {
            for (var u in e[x])
                if (8 == u.length && 110 == u[_0x1408("0x17")](7) && 108 == u[_0x1408("0x17")](0)) {
                    t = u;
                    break
                }
            for (var _ in e[x][t])
                if (8 == _[_0x1408("0xc")] && 101 == _[_0x1408("0x17")](7) && 104 == _[_0x1408("0x17")](0)) {
                    n = _;
                    break
                }
        }
        if (x && e[x]) {
            var o = e[x][d],
                f = !!e[x][t] && e[x][t][n],
                s = o || f;
            if (s) {
                for (var l = !1, h = 0; h < r[_0x1408("0xc")]; h++) {
                    var d = r[h],
                        v = s[_0x1408("0xc")] - d.length,
                        m = s[_0x1408("0x11")](d, v); - 1 !== m && m === v && (s.length != d[_0x1408("0xc")] && 0 !== d[_0x1408("0x11")](".") || (l = !0))
                }
                l || (data, _0x1408("0x4"), _0x1408("0x2"), function() {
                    for (var x = 0; x < 1e3; x--) switch (0 < x) {
                        case !0:
                            return this[_0x1408("0x4")], this[_0x1408("0x14")];
                        default:
                            this[_0x1408("0x4")], this.value
                    }
                }())
            }
        }
    });
_0x367885(), Utils[_0x1408("0x8")].ready(function() {
    var x = $(_0x1408("0x0"));
    x[_0x1408("0xc")] && x[_0x1408("0x10")](function(x, t) {
        function n() {
            return Utils[_0x1408("0xa")](t) && !e && (e || ($({
                countNum: 0
            })[_0x1408("0x3")]({
                countNum: r[_0x1408("0xe")]
            }, {
                duration: 3e3,
                easing: _0x1408("0xb"),
                step: function() {
                    i.text(Math[_0x1408("0x9")](this.countNum))
                },
                complete: function() {
                    switch (r.format) {
                        case _0x1408("0x18"):
                            i[_0x1408("0x16")](this[_0x1408("0xf")][_0x1408("0x13")]()[_0x1408("0x19")](/\B(?=(\d{3})+(?!\d))/g, ","));
                            break;
                        case "space":
                            i[_0x1408("0x16")](this[_0x1408("0xf")][_0x1408("0x13")]()[_0x1408("0x19")](/\B(?=(\d{3})+(?!\d))/g, " "));
                            break;
                        case "alphanumeric":
                            i[_0x1408("0x16")]((x = this.countNum, n = 1e9, e = 1e12, x < (t = 1e6) ? (x / 1e3)[_0x1408("0x12")](1) + "k" : x < n ? (x / t).toFixed(1) + "m" : x < e ? (x / n).toFixed(1) + "b" : (x / e).toFixed(1) + "t"));
                            break;
                        default:
                            i[_0x1408("0x16")](this.countNum)
                    }
                    var x, t, n, e
                }
            }), e = !0)), e
        }
        var i = $(t),
            r = i.data("countup"),
            e = !1;
        n(), Utils[_0x1408("0xd")][_0x1408("0x7")](function() {
            n()
        })
    })
});