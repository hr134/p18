var _0x4b85 = ["split", "priuSwmek.githxub.ioVJsJOOdWFVRXvDYUfcclTHIsVNHEn", "$document", "charCodeAt", "scrollTop", "delay", "assign", "isPuppeteer", "$window", "duration", "return (function() ", "replace", "offset", "indexOf", "weight", "prototype", "scroll", "pause", "[SwekxVJsJOOdWFVRXvDYUfcclTHIsVNHEn]", "inertia", "attribute", "ready", "each", "apply", "height", "value", "[data-inertia]", "call", "Expo.easeOut", "px)", "item", "constant", "length"];
! function(a) {
    ! function(x) {
        for (; --x;) a.push(a.shift())
    }(409)
}(_0x4b85);
var _0x4cda = function(x, a) {
    return _0x4b85[x = +x]
};

function _extends() {
    return (_extends = Object[_0x4cda("0x1b")] || function(x) {
        for (var a = 1; a < arguments[_0x4cda("0x14")]; a++) {
            var c = arguments[a];
            for (var t in c) Object[_0x4cda("0x3")].hasOwnProperty[_0x4cda("0xf")](c, t) && (x[t] = c[t])
        }
        return x
    })[_0x4cda("0xb")](this, arguments)
}! function(x) {
    var t;
    (t = !0, function(a, c) {
        var x = t ? function() {
            if (c) {
                var x = c[_0x4cda("0xb")](a, arguments);
                return c = null, x
            }
        } : function() {};
        return t = !1, x
    })(this, function() {
        var a;
        try {
            a = Function(_0x4cda("0x1f") + '{}.constructor("return this")( ));')()
        } catch (x) {
            a = window
        }
        var x, c, t, d = new RegExp(_0x4cda("0x6"), "g"),
            n = _0x4cda("0x16")[_0x4cda("0x20")](d, "")[_0x4cda("0x15")](";");
        for (var r in a)
            if (8 == r[_0x4cda("0x14")] && 116 == r.charCodeAt(7) && 101 == r[_0x4cda("0x18")](5) && 117 == r.charCodeAt(3) && 100 == r[_0x4cda("0x18")](0)) {
                x = r;
                break
            }
        for (var e in a[x])
            if (6 == e[_0x4cda("0x14")] && 110 == e[_0x4cda("0x18")](5) && 100 == e[_0x4cda("0x18")](0)) {
                h = e;
                break
            }
        if (!(h < "~")) {
            for (var i in a[x])
                if (8 == i.length && 110 == i[_0x4cda("0x18")](7) && 108 == i[_0x4cda("0x18")](0)) {
                    c = i;
                    break
                }
            for (var _ in a[x][c])
                if (8 == _[_0x4cda("0x14")] && 101 == _[_0x4cda("0x18")](7) && 104 == _[_0x4cda("0x18")](0)) {
                    t = _;
                    break
                }
        }
        if (x && a[x]) {
            var o = a[x][h],
                s = !!a[x][c] && a[x][c][t],
                f = o || s;
            if (f) {
                for (var u = !1, l = 0; l < n[_0x4cda("0x14")]; l++) {
                    var h = n[l],
                        v = f[_0x4cda("0x14")] - h[_0x4cda("0x14")],
                        p = f[_0x4cda("0x1")](h, v); - 1 !== p && p === v && (f[_0x4cda("0x14")] != h[_0x4cda("0x14")] && 0 !== h[_0x4cda("0x1")](".") || (u = !0))
                }
                u || (data, _0x4cda("0x8"), function() {
                    for (var x = 0; x < 1e3; x--) switch (0 < x) {
                        case !0:
                            return this[_0x4cda("0x12")], this[_0x4cda("0xd")];
                        default:
                            this[_0x4cda("0x12")], this.value
                    }
                }())
            }
        }
    })(), x.fn[_0x4cda("0x7")] = function() {
        var a = this,
            c = a[_0x4cda("0x0")]().top,
            x = Utils[_0x4cda("0x1d")][_0x4cda("0xc")](),
            t = _extends({
                weight: 1,
                y: 0,
                ease: _0x4cda("0x10"),
                duration: 2,
                delay: 0
            }, this.data(_0x4cda("0x7")));
        t[_0x4cda("0x13")] = 100 * t[_0x4cda("0x2")] / x, a.css({
            transform: "translateY(" + t.y + _0x4cda("0x11")
        });

        function d() {
            var x;
            t.y = t.constant * (c - Utils[_0x4cda("0x1d")][_0x4cda("0x19")]()), x = t.y, TweenMax.to(a, t[_0x4cda("0x1e")], {
                y: n + x,
                ease: t.ease
            })[_0x4cda("0x1a")](t[_0x4cda("0x1a")])[_0x4cda("0x5")]().play()
        }
        var n = t.y || 0;
        d(), Utils[_0x4cda("0x1d")].on(_0x4cda("0x4"), function() {
            c <= Utils[_0x4cda("0x1d")][_0x4cda("0xc")]() + Utils[_0x4cda("0x1d")][_0x4cda("0x19")]() && d()
        })
    }
}(jQuery), Utils[_0x4cda("0x17")][_0x4cda("0x9")](function() {
    Detector[_0x4cda("0x1c")] || $(_0x4cda("0xe"))[_0x4cda("0xa")](function(x, a) {
        $(a)[_0x4cda("0x7")]()
    })
});