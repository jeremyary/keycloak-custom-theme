"use strict";
function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function strengthBar(t, n, r, i, e, o) {
    t.progressBar({
        showText: !1,
        boxImage: e + "/img/progressbar.gif",
        barImage: {
            0: e + "/img/progressbg-too-short.png",
            25: e + "/img/progressbg-very-weak.png",
            50: e + "/img/progressbg-weak.png",
            75: e + "/img/progressbg-good.png",
            100: e + "/img/progressbg-strong.png"
        }
    });
    var s = n;
    i.keyup(function() {
        var e = i.val();
        0 === e.length ? (t.progressBar(0),
        n.detach()) : (s.appendTo(r),
        e.length < 8 ? (s.html(o.tooShort),
        t.progressBar(5)) : 0 <= (e = passwordCheck(e)) && e < 25 ? (s.html(o.veryWeak),
        t.progressBar(25)) : 25 <= e && e < 50 ? (s.html(o.weak),
        t.progressBar(50)) : 50 <= e && e < 75 ? (s.html(o.good),
        t.progressBar(75)) : 75 <= e && e <= 100 && (s.html(o.strong),
        t.progressBar(100)))
    })
}
function passwordCheck(e) {
    for (var t = 0, n = 0, r = 0, i = 0, o = 0, s = 0, a = 0, l = 0, u = 0, c = 0, d = -1, f = 0, h = -1, p = 0, g = -1, m = 0, v = e.length, y = 0; y < v; y++) {
        var b = e[y];
        b.match(/[A-Z]/g) && (0 <= d && d + 1 === y && f++,
        d = y,
        n++),
        b.match(/[a-z]/g) && (0 <= h && h + 1 === y && p++,
        h = y,
        r++),
        b.match(/[0-9]/g) && (0 < y && y < v - 1 && s++,
        0 <= g && g + 1 === y && m++,
        g = y,
        i++),
        b.match(/[^a-zA-Z0-9_]/g) && (0 < y && y < v - 1 && a++,
        o++)
    }
    t = 4 * v + (l = 0 < n && n < v ? 2 * (v - n) : l) + (u = 0 < r && r < v ? 2 * (v - r) : u) + (c = 0 < i && i < v ? 4 * i : c) + (0 < o ? 6 : 0) + 2 * (s + a),
    r + n === v && (t -= r + n),
    i === v && (t -= i);
    return t = (t = (t = (t -= 2 * m + 2 * f + 2 * p) - 3 * sequenceCheck(e, "abcdefghijklmnopqrstuvwxyz")) - 3 * sequenceCheck(e, "01234567890")) - 3 * sequenceCheck(e, "!@#$%^&*()")
}
function sequenceCheck(e, t) {
    for (var n = 0, r = 0; r < t.length - 3; r++) {
        var i = t.substring(r, r + 3)
          , o = i.reverse();
        -1 === e.toLowerCase().indexOf(i) && -1 === e.toLowerCase().indexOf(o) || n++
    }
    return n
}
function toggleShowPassword(e, t) {
    "password" === e.type ? (e.setAttribute("type", "text"),
    t.innerText = "Hide") : (e.setAttribute("type", "password"),
    t.innerText = "Show")
}
!function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document)
            return t(e);
        throw new Error("jQuery requires a window with a document")
    }
    : t(e)
}("undefined" != typeof window ? window : void 0, function(T, O) {
    function y(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }
    function g(e) {
        return null != e && e === e.window
    }
    var t = []
      , I = Object.getPrototypeOf
      , a = t.slice
      , M = t.flat ? function(e) {
        return t.flat.call(e)
    }
    : function(e) {
        return t.concat.apply([], e)
    }
      , F = t.push
      , _ = t.indexOf
      , B = {}
      , W = B.toString
      , $ = B.hasOwnProperty
      , z = $.toString
      , U = z.call(Object)
      , m = {}
      , C = T.document
      , V = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function X(e, t, n) {
        var r, i, o = (n = n || C).createElement("script");
        if (o.text = e,
        t)
            for (r in V)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function p(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? B[W.call(e)] || "object" : _typeof(e)
    }
    var e = "3.6.0"
      , E = function e(t, n) {
        return new e.fn.init(t,n)
    };
    function K(e) {
        var t = !!e && "length"in e && e.length
          , n = p(e);
        return !y(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: e,
        constructor: E,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = E.merge(this.constructor(), e);
            return e.prevObject = this,
            e
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length
              , e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: F,
        sort: t.sort,
        splice: t.splice
    },
    E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o = arguments[0] || {}, s = 1, a = arguments.length, l = !1;
        for ("boolean" == typeof o && (l = o,
        o = arguments[s] || {},
        s++),
        "object" == _typeof(o) || y(o) || (o = {}),
        s === a && (o = this,
        s--); s < a; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = e[t],
                    "__proto__" !== t && o !== n && (l && n && (E.isPlainObject(n) || (r = Array.isArray(n))) ? (i = o[t],
                    i = r && !Array.isArray(i) ? [] : r || E.isPlainObject(i) ? i : {},
                    r = !1,
                    o[t] = E.extend(l, i, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    E.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== W.call(e) || (e = I(e)) && ("function" != typeof (e = $.call(e, "constructor") && e.constructor) || z.call(e) !== U))
        },
        isEmptyObject: function(e) {
            for (var t in e)
                return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            X(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (K(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (K(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : F.call(t, e)),
            t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : _.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
                !t(e[i], i) != s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0, s = [];
            if (K(e))
                for (r = e.length; o < r; o++)
                    null != (i = t(e[o], o, n)) && s.push(i);
            else
                for (o in e)
                    null != (i = t(e[o], o, n)) && s.push(i);
            return M(s)
        },
        guid: 1,
        support: m
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    });
    function r(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && E(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
    function Q(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var e = function(O) {
        function d(e, t) {
            return e = "0x" + e.slice(1) - 65536,
            t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
        }
        function I(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }
        function M() {
            T()
        }
        var e, f, x, o, F, h, _, B, w, l, u, T, C, n, E, p, r, i, g, S = "sizzle" + +new Date, c = O.document, k = 0, W = 0, $ = D(), z = D(), U = D(), m = D(), V = function(e, t) {
            return e === t && (u = !0),
            0
        }, X = {}.hasOwnProperty, t = [], K = t.pop, Q = t.push, A = t.push, G = t.slice, y = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Y = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", s = "[\\x20\\t\\r\\n\\f]", a = "(?:\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Z = "\\[" + s + "*(" + a + ")(?:" + s + "*([*^$|!~]?=)" + s + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + a + "))|)" + s + "*\\]", J = ":(" + a + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Z + ")*)|.*)\\)|)", ee = new RegExp(s + "+","g"), v = new RegExp("^" + s + "+|((?:^|[^\\\\])(?:\\\\.)*)" + s + "+$","g"), te = new RegExp("^" + s + "*," + s + "*"), ne = new RegExp("^" + s + "*([>+~]|" + s + ")" + s + "*"), re = new RegExp(s + "|>"), ie = new RegExp(J), oe = new RegExp("^" + a + "$"), b = {
            ID: new RegExp("^#(" + a + ")"),
            CLASS: new RegExp("^\\.(" + a + ")"),
            TAG: new RegExp("^(" + a + "|[*])"),
            ATTR: new RegExp("^" + Z),
            PSEUDO: new RegExp("^" + J),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + s + "*(even|odd|(([+-]|)(\\d*)n|)" + s + "*(?:([+-]|)" + s + "*(\\d+)|))" + s + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Y + ")$","i"),
            needsContext: new RegExp("^" + s + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + s + "*((?:-\\d)?\\d*)" + s + "*\\)|)(?=[^-]|$)","i")
        }, se = /HTML$/i, ae = /^(?:input|select|textarea|button)$/i, le = /^h\d$/i, N = /^[^{]+\{\s*\[native \w/, ue = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ce = /[+~]/, j = new RegExp("\\\\[\\da-fA-F]{1,6}" + s + "?|\\\\([^\\r\\n\\f])","g"), de = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fe = ye(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            A.apply(t = G.call(c.childNodes), c.childNodes),
            t[c.childNodes.length].nodeType
        } catch (e) {
            A = {
                apply: t.length ? function(e, t) {
                    Q.apply(e, G.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function q(e, t, n, r) {
            var i, o, s, a, l, u, c = t && t.ownerDocument, d = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)
                return n;
            if (!r && (T(t),
            t = t || C,
            E)) {
                if (11 !== d && (a = ue.exec(e)))
                    if (i = a[1]) {
                        if (9 === d) {
                            if (!(u = t.getElementById(i)))
                                return n;
                            if (u.id === i)
                                return n.push(u),
                                n
                        } else if (c && (u = c.getElementById(i)) && g(t, u) && u.id === i)
                            return n.push(u),
                            n
                    } else {
                        if (a[2])
                            return A.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = a[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return A.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (f.qsa && !m[e + " "] && (!p || !p.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e,
                    c = t,
                    1 === d && (re.test(e) || ne.test(e))) {
                        for ((c = ce.test(e) && me(t.parentNode) || t) === t && f.scope || ((s = t.getAttribute("id")) ? s = s.replace(de, I) : t.setAttribute("id", s = S)),
                        o = (l = h(e)).length; o--; )
                            l[o] = (s ? "#" + s : ":scope") + " " + H(l[o]);
                        u = l.join(",")
                    }
                    try {
                        return A.apply(n, c.querySelectorAll(u)),
                        n
                    } catch (t) {
                        m(e, !0)
                    } finally {
                        s === S && t.removeAttribute("id")
                    }
                }
            }
            return B(e.replace(v, "$1"), t, n, r)
        }
        function D() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > x.cacheLength && delete e[r.shift()],
                e[t + " "] = n
            }
        }
        function L(e) {
            return e[S] = !0,
            e
        }
        function R(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t)
            }
        }
        function he(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && fe(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function P(s) {
            return L(function(o) {
                return o = +o,
                L(function(e, t) {
                    for (var n, r = s([], e.length, o), i = r.length; i--; )
                        e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in f = q.support = {},
        F = q.isXML = function(e) {
            var t = e && e.namespaceURI
              , e = e && (e.ownerDocument || e).documentElement;
            return !se.test(t || e && e.nodeName || "HTML")
        }
        ,
        T = q.setDocument = function(e) {
            var e = e ? e.ownerDocument || e : c;
            return e != C && 9 === e.nodeType && e.documentElement && (n = (C = e).documentElement,
            E = !F(C),
            c != C && (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", M, !1) : e.attachEvent && e.attachEvent("onunload", M)),
            f.scope = R(function(e) {
                return n.appendChild(e).appendChild(C.createElement("div")),
                void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }),
            f.attributes = R(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            f.getElementsByTagName = R(function(e) {
                return e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = N.test(C.getElementsByClassName),
            f.getById = R(function(e) {
                return n.appendChild(e).id = S,
                !C.getElementsByName || !C.getElementsByName(S).length
            }),
            f.getById ? (x.filter.ID = function(e) {
                var t = e.replace(j, d);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E)
                    return (t = t.getElementById(e)) ? [t] : []
            }
            ) : (x.filter.ID = function(e) {
                var t = e.replace(j, d);
                return function(e) {
                    e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return e && e.value === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                        for (i = t.getElementsByName(e),
                        r = 0; o = i[r++]; )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = f.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" !== e)
                    return o;
                for (; n = o[i++]; )
                    1 === n.nodeType && r.push(n);
                return r
            }
            ,
            x.find.CLASS = f.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && E)
                    return t.getElementsByClassName(e)
            }
            ,
            r = [],
            p = [],
            (f.qsa = N.test(C.querySelectorAll)) && (R(function(e) {
                var t;
                n.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && p.push("[*^$]=" + s + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || p.push("\\[" + s + "*(?:value|" + Y + ")"),
                e.querySelectorAll("[id~=" + S + "-]").length || p.push("~="),
                (t = C.createElement("input")).setAttribute("name", ""),
                e.appendChild(t),
                e.querySelectorAll("[name='']").length || p.push("\\[" + s + "*name" + s + "*=" + s + "*(?:''|\"\")"),
                e.querySelectorAll(":checked").length || p.push(":checked"),
                e.querySelectorAll("a#" + S + "+*").length || p.push(".#.+[+~]"),
                e.querySelectorAll("\\\f"),
                p.push("[\\r\\n\\f]")
            }),
            R(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && p.push("name" + s + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && p.push(":enabled", ":disabled"),
                n.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && p.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                p.push(",.*:")
            })),
            (f.matchesSelector = N.test(i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && R(function(e) {
                f.disconnectedMatch = i.call(e, "*"),
                i.call(e, "[s!='']:x"),
                r.push("!=", J)
            }),
            p = p.length && new RegExp(p.join("|")),
            r = r.length && new RegExp(r.join("|")),
            e = N.test(n.compareDocumentPosition),
            g = e || N.test(n.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , t = t && t.parentNode;
                return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            V = e ? function(e, t) {
                return e === t ? (u = !0,
                0) : !e.compareDocumentPosition - !t.compareDocumentPosition || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == c && g(c, e) ? -1 : t == C || t.ownerDocument == c && g(c, t) ? 1 : l ? y(l, e) - y(l, t) : 0 : 4 & n ? -1 : 1);
                var n
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [e], a = [t];
                if (!i || !o)
                    return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : l ? y(l, e) - y(l, t) : 0;
                if (i === o)
                    return pe(e, t);
                for (n = e; n = n.parentNode; )
                    s.unshift(n);
                for (n = t; n = n.parentNode; )
                    a.unshift(n);
                for (; s[r] === a[r]; )
                    r++;
                return r ? pe(s[r], a[r]) : s[r] == c ? -1 : a[r] == c ? 1 : 0
            }
            ),
            C
        }
        ,
        q.matches = function(e, t) {
            return q(e, null, null, t)
        }
        ,
        q.matchesSelector = function(e, t) {
            if (T(e),
            f.matchesSelector && E && !m[t + " "] && (!r || !r.test(t)) && (!p || !p.test(t)))
                try {
                    var n = i.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {
                    m(t, !0)
                }
            return 0 < q(t, C, null, [e]).length
        }
        ,
        q.contains = function(e, t) {
            return (e.ownerDocument || e) != C && T(e),
            g(e, t)
        }
        ,
        q.attr = function(e, t) {
            (e.ownerDocument || e) != C && T(e);
            var n = x.attrHandle[t.toLowerCase()]
              , n = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== n ? n : f.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        q.escape = function(e) {
            return (e + "").replace(de, I)
        }
        ,
        q.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        q.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (u = !f.detectDuplicates,
            l = !f.sortStable && e.slice(0),
            e.sort(V),
            u) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return l = null,
            e
        }
        ,
        o = q.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += o(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += o(t);
            return n
        }
        ,
        (x = q.selectors = {
            cacheLength: 50,
            createPseudo: L,
            match: b,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(j, d),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(j, d),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || q.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && q.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return b.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ie.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(j, d).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + s + ")" + e + "(" + s + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, r) {
                    return function(e) {
                        e = q.attr(e, t);
                        return null == e ? "!=" === n : !n || (e += "",
                        "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(p, e, t, g, m) {
                    var v = "nth" !== p.slice(0, 3)
                      , y = "last" !== p.slice(-4)
                      , b = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var r, i, o, s, a, l, u = v != y ? "nextSibling" : "previousSibling", c = e.parentNode, d = b && e.nodeName.toLowerCase(), f = !n && !b, h = !1;
                        if (c) {
                            if (v) {
                                for (; u; ) {
                                    for (s = e; s = s[u]; )
                                        if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType)
                                            return !1;
                                    l = u = "only" === p && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? c.firstChild : c.lastChild],
                            y && f) {
                                for (h = (a = (r = (i = (o = (s = c)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === k && r[1]) && r[2],
                                s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++h && s === e) {
                                        i[p] = [k, a, h];
                                        break
                                    }
                            } else if (!1 === (h = f ? a = (r = (i = (o = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] || [])[0] === k && r[1] : h))
                                for (; (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++h || (f && ((i = (o = s[S] || (s[S] = {}))[s.uniqueID] || (o[s.uniqueID] = {}))[p] = [k, h]),
                                s !== e)); )
                                    ;
                            return (h -= m) === g || h % g == 0 && 0 <= h / g
                        }
                    }
                },
                PSEUDO: function(e, o) {
                    var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || q.error("unsupported pseudo: " + e);
                    return s[S] ? s(o) : 1 < s.length ? (t = [e, e, "", o],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function(e, t) {
                        for (var n, r = s(e, o), i = r.length; i--; )
                            e[n = y(e, r[i])] = !(t[n] = r[i])
                    }) : function(e) {
                        return s(e, 0, t)
                    }
                    ) : s
                }
            },
            pseudos: {
                not: L(function(e) {
                    var r = []
                      , i = []
                      , a = _(e.replace(v, "$1"));
                    return a[S] ? L(function(e, t, n, r) {
                        for (var i, o = a(e, null, r, []), s = e.length; s--; )
                            (i = o[s]) && (e[s] = !(t[s] = i))
                    }) : function(e, t, n) {
                        return r[0] = e,
                        a(r, null, n, i),
                        r[0] = null,
                        !i.pop()
                    }
                }),
                has: L(function(t) {
                    return function(e) {
                        return 0 < q(t, e).length
                    }
                }),
                contains: L(function(t) {
                    return t = t.replace(j, d),
                    function(e) {
                        return -1 < (e.textContent || o(e)).indexOf(t)
                    }
                }),
                lang: L(function(n) {
                    return oe.test(n || "") || q.error("unsupported lang: " + n),
                    n = n.replace(j, d).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var t = O.location && O.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === n
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return le.test(e.nodeName)
                },
                input: function(e) {
                    return ae.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: P(function() {
                    return [0]
                }),
                last: P(function(e, t) {
                    return [t - 1]
                }),
                eq: P(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: P(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: P(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: P(function(e, t, n) {
                    for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                        e.push(r);
                    return e
                }),
                gt: P(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            x.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);
        function ve() {}
        function H(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function ye(s, e, t) {
            var a = e.dir
              , l = e.next
              , u = l || a
              , c = t && "parentNode" === u
              , d = W++;
            return e.first ? function(e, t, n) {
                for (; e = e[a]; )
                    if (1 === e.nodeType || c)
                        return s(e, t, n);
                return !1
            }
            : function(e, t, n) {
                var r, i, o = [k, d];
                if (n) {
                    for (; e = e[a]; )
                        if ((1 === e.nodeType || c) && s(e, t, n))
                            return !0
                } else
                    for (; e = e[a]; )
                        if (1 === e.nodeType || c)
                            if (i = (i = e[S] || (e[S] = {}))[e.uniqueID] || (i[e.uniqueID] = {}),
                            l && l === e.nodeName.toLowerCase())
                                e = e[a] || e;
                            else {
                                if ((r = i[u]) && r[0] === k && r[1] === d)
                                    return o[2] = r[2];
                                if ((i[u] = o)[2] = s(e, t, n))
                                    return !0
                            }
                return !1
            }
        }
        function be(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var r = i.length; r--; )
                    if (!i[r](e, t, n))
                        return !1;
                return !0
            }
            : i[0]
        }
        function xe(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
                !(o = e[a]) || n && !n(o, r, i) || (s.push(o),
                u && t.push(a));
            return s
        }
        function we(e) {
            for (var r, t, n, i = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = ye(function(e) {
                return e === r
            }, s, !0), u = ye(function(e) {
                return -1 < y(r, e)
            }, s, !0), c = [function(e, t, n) {
                e = !o && (n || t !== w) || ((r = t).nodeType ? l : u)(e, t, n);
                return r = null,
                e
            }
            ]; a < i; a++)
                if (t = x.relative[e[a].type])
                    c = [ye(be(c), t)];
                else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[S]) {
                        for (n = ++a; n < i && !x.relative[e[n].type]; n++)
                            ;
                        return function e(h, p, g, m, v, t) {
                            return m && !m[S] && (m = e(m)),
                            v && !v[S] && (v = e(v, t)),
                            L(function(e, t, n, r) {
                                var i, o, s, a = [], l = [], u = t.length, c = e || function(e, t, n) {
                                    for (var r = 0, i = t.length; r < i; r++)
                                        q(e, t[r], n);
                                    return n
                                }(p || "*", n.nodeType ? [n] : n, []), d = !h || !e && p ? c : xe(c, a, h, n, r), f = g ? v || (e ? h : u || m) ? [] : t : d;
                                if (g && g(d, f, n, r),
                                m)
                                    for (i = xe(f, l),
                                    m(i, [], n, r),
                                    o = i.length; o--; )
                                        (s = i[o]) && (f[l[o]] = !(d[l[o]] = s));
                                if (e) {
                                    if (v || h) {
                                        if (v) {
                                            for (i = [],
                                            o = f.length; o--; )
                                                (s = f[o]) && i.push(d[o] = s);
                                            v(null, f = [], i, r)
                                        }
                                        for (o = f.length; o--; )
                                            (s = f[o]) && -1 < (i = v ? y(e, s) : a[o]) && (e[i] = !(t[i] = s))
                                    }
                                } else
                                    f = xe(f === t ? f.splice(u, f.length) : f),
                                    v ? v(null, t, f, r) : A.apply(t, f)
                            })
                        }(1 < a && be(c), 1 < a && H(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(v, "$1"), t, a < n && we(e.slice(a, n)), n < i && we(e = e.slice(n)), n < i && H(e))
                    }
                    c.push(t)
                }
            return be(c)
        }
        return ve.prototype = x.filters = x.pseudos,
        x.setFilters = new ve,
        h = q.tokenize = function(e, t) {
            var n, r, i, o, s, a, l, u = z[e + " "];
            if (u)
                return t ? 0 : u.slice(0);
            for (s = e,
            a = [],
            l = x.preFilter; s; ) {
                for (o in n && !(r = te.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                a.push(i = [])),
                n = !1,
                (r = ne.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(v, " ")
                }),
                s = s.slice(n.length)),
                x.filter)
                    !(r = b[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? q.error(e) : z(e, a).slice(0)
        }
        ,
        _ = q.compile = function(e, t) {
            var n, m, v, y, b, r, i = [], o = [], s = U[e + " "];
            if (!s) {
                for (n = (t = t || h(e)).length; n--; )
                    ((s = we(t[n]))[S] ? i : o).push(s);
                (s = U(e, (y = 0 < (v = i).length,
                b = 0 < (m = o).length,
                r = function(e, t, n, r, i) {
                    var o, s, a, l = 0, u = "0", c = e && [], d = [], f = w, h = e || b && x.find.TAG("*", i), p = k += null == f ? 1 : Math.random() || .1, g = h.length;
                    for (i && (w = t == C || t || i); u !== g && null != (o = h[u]); u++) {
                        if (b && o) {
                            for (s = 0,
                            t || o.ownerDocument == C || (T(o),
                            n = !E); a = m[s++]; )
                                if (a(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = p)
                        }
                        y && ((o = !a && o) && l--,
                        e && c.push(o))
                    }
                    if (l += u,
                    y && u !== l) {
                        for (s = 0; a = v[s++]; )
                            a(c, d, t, n);
                        if (e) {
                            if (0 < l)
                                for (; u--; )
                                    c[u] || d[u] || (d[u] = K.call(r));
                            d = xe(d)
                        }
                        A.apply(r, d),
                        i && !e && 0 < d.length && 1 < l + v.length && q.uniqueSort(r)
                    }
                    return i && (k = p,
                    w = f),
                    c
                }
                ,
                y ? L(r) : r))).selector = e
            }
            return s
        }
        ,
        B = q.select = function(e, t, n, r) {
            var i, o, s, a, l, u = "function" == typeof e && e, c = !r && h(e = u.selector || e);
            if (n = n || [],
            1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && 9 === t.nodeType && E && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(j, d), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = b.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !x.relative[a = s.type]); )
                    if ((l = x.find[a]) && (r = l(s.matches[0].replace(j, d), ce.test(o[0].type) && me(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && H(o))
                            break;
                        return A.apply(n, r),
                        n
                    }
            }
            return (u || _(e, c))(r, t, !E, n, !t || ce.test(e) && me(t.parentNode) || t),
            n
        }
        ,
        f.sortStable = S.split("").sort(V).join("") === S,
        f.detectDuplicates = !!u,
        T(),
        f.sortDetached = R(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }),
        R(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || he("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        f.attributes && R(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || he("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        R(function(e) {
            return null == e.getAttribute("disabled")
        }) || he(Y, function(e, t, n) {
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        q
    }(T)
      , G = (E.find = e,
    E.expr = e.selectors,
    E.expr[":"] = E.expr.pseudos,
    E.uniqueSort = E.unique = e.uniqueSort,
    E.text = e.getText,
    E.isXMLDoc = e.isXML,
    E.contains = e.contains,
    E.escapeSelector = e.escape,
    E.expr.match.needsContext);
    function l(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var Y = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Z(e, n, r) {
        return y(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < _.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    E.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e)
                return this.pushStack(E(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (E.contains(i[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(Z(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(Z(this, e || [], !0))
        },
        is: function(e) {
            return !!Z(this, "string" == typeof e && G.test(e) ? E(e) : e || [], !1).length
        }
    });
    var J, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, te = ((E.fn.init = function(e, t, n) {
        if (e) {
            if (n = n || J,
            "string" != typeof e)
                return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !r[1] && t)
                return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t,
                E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : C, !0)),
                Y.test(r[1]) && E.isPlainObject(t))
                    for (var r in t)
                        y(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
            } else
                (n = C.getElementById(r[2])) && (this[0] = n,
                this.length = 1)
        }
        return this
    }
    ).prototype = E.fn,
    J = E(C),
    /^(?:parents|prev(?:Until|All))/), ne = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function re(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], s = "string" != typeof e && E(e);
            if (!G.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? _.call(E(e), this[0]) : _.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    E.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return r(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return r(e, "parentNode", n)
        },
        next: function(e) {
            return re(e, "nextSibling")
        },
        prev: function(e) {
            return re(e, "previousSibling")
        },
        nextAll: function(e) {
            return r(e, "nextSibling")
        },
        prevAll: function(e) {
            return r(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return r(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return r(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Q((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Q(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && I(e.contentDocument) ? e.contentDocument : (l(e, "template") && (e = e.content || e),
            E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length && (ne[r] || E.uniqueSort(n),
            te.test(r) && n.reverse()),
            this.pushStack(n)
        }
    });
    var S = /[^\x20\t\r\n\f]+/g;
    function c(e) {
        return e
    }
    function ie(e) {
        throw e
    }
    function oe(e, t, n, r) {
        var i;
        try {
            e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
        n = {},
        E.each(e.match(S) || [], function(e, t) {
            n[t] = !0
        }),
        n) : E.extend({}, r);
        function i() {
            for (a = a || r.once,
            s = o = !0; u.length; c = -1)
                for (t = u.shift(); ++c < l.length; )
                    !1 === l[c].apply(t[0], t[1]) && r.stopOnFalse && (c = l.length,
                    t = !1);
            r.memory || (t = !1),
            o = !1,
            a && (l = t ? [] : "")
        }
        var o, t, s, a, l = [], u = [], c = -1, d = {
            add: function() {
                return l && (t && !o && (c = l.length - 1,
                u.push(t)),
                function n(e) {
                    E.each(e, function(e, t) {
                        y(t) ? r.unique && d.has(t) || l.push(t) : t && t.length && "string" !== p(t) && n(t)
                    })
                }(arguments),
                t && !o && i()),
                this
            },
            remove: function() {
                return E.each(arguments, function(e, t) {
                    for (var n; -1 < (n = E.inArray(t, l, n)); )
                        l.splice(n, 1),
                        n <= c && c--
                }),
                this
            },
            has: function(e) {
                return e ? -1 < E.inArray(e, l) : 0 < l.length
            },
            empty: function() {
                return l = l && [],
                this
            },
            disable: function() {
                return a = u = [],
                l = t = "",
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return a = u = [],
                t || o || (l = t = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                u.push(t),
                o || i()),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return d
    }
    ,
    E.extend({
        Deferred: function(e) {
            var o = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , s = {
                state: function() {
                    return i
                },
                always: function() {
                    return a.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return s.then(null, e)
                },
                pipe: function() {
                    var i = arguments;
                    return E.Deferred(function(r) {
                        E.each(o, function(e, t) {
                            var n = y(i[t[4]]) && i[t[4]];
                            a[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && y(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                            })
                        }),
                        i = null
                    }).promise()
                },
                then: function(t, n, r) {
                    var l = 0;
                    function u(i, o, s, a) {
                        return function() {
                            function e() {
                                var e, t;
                                if (!(i < l)) {
                                    if ((e = s.apply(n, r)) === o.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then,
                                    y(t) ? a ? t.call(e, u(l, o, c, a), u(l, o, ie, a)) : (l++,
                                    t.call(e, u(l, o, c, a), u(l, o, ie, a), u(l, o, c, o.notifyWith))) : (s !== c && (n = void 0,
                                    r = [e]),
                                    (a || o.resolveWith)(n, r))
                                }
                            }
                            var n = this
                              , r = arguments
                              , t = a ? e : function() {
                                try {
                                    e()
                                } catch (e) {
                                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace),
                                    l <= i + 1 && (s !== ie && (n = void 0,
                                    r = [e]),
                                    o.rejectWith(n, r))
                                }
                            }
                            ;
                            i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()),
                            T.setTimeout(t))
                        }
                    }
                    return E.Deferred(function(e) {
                        o[0][3].add(u(0, e, y(r) ? r : c, e.notifyWith)),
                        o[1][3].add(u(0, e, y(t) ? t : c)),
                        o[2][3].add(u(0, e, y(n) ? n : ie))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? E.extend(e, s) : s
                }
            }
              , a = {};
            return E.each(o, function(e, t) {
                var n = t[2]
                  , r = t[5];
                s[t[1]] = n.add,
                r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                n.add(t[3].fire),
                a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                    this
                }
                ,
                a[t[0] + "With"] = n.fireWith
            }),
            s.promise(a),
            e && e.call(a, a),
            a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this,
                    o[t] = 1 < arguments.length ? a.call(arguments) : e,
                    --n || s.resolveWith(i, o)
                }
            }
            var n = arguments.length
              , r = n
              , i = Array(r)
              , o = a.call(arguments)
              , s = E.Deferred();
            if (n <= 1 && (oe(e, s.done(t(r)).resolve, s.reject, !n),
            "pending" === s.state() || y(o[r] && o[r].then)))
                return s.then();
            for (; r--; )
                oe(o[r], t(r), s.reject);
            return s.promise()
        }
    });
    var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
      , ae = (E.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && se.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
    ,
    E.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    }
    ,
    E.Deferred());
    function le() {
        C.removeEventListener("DOMContentLoaded", le),
        T.removeEventListener("load", le),
        E.ready()
    }
    E.fn.ready = function(e) {
        return ae.then(e).catch(function(e) {
            E.readyException(e)
        }),
        this
    }
    ,
    E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || ae.resolveWith(C, [E])
        }
    }),
    E.ready.then = ae.then,
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", le),
    T.addEventListener("load", le));
    function d(e, t, n, r, i, o, s) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === p(n))
            for (a in i = !0,
            n)
                d(e, t, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0,
        y(r) || (s = !0),
        t = u ? s ? (t.call(e, r),
        null) : (u = t,
        function(e, t, n) {
            return u.call(E(e), n)
        }
        ) : t))
            for (; a < l; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
    var ue = /^-ms-/
      , ce = /-([a-z])/g;
    function de(e, t) {
        return t.toUpperCase()
    }
    function b(e) {
        return e.replace(ue, "ms-").replace(ce, de)
    }
    function v(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    function fe() {
        this.expando = E.expando + fe.uid++
    }
    fe.uid = 1,
    fe.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            v(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)
                i[b(t)] = n;
            else
                for (r in t)
                    i[b(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][b(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(b) : (t = b(t))in r ? [t] : t.match(S) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !E.isEmptyObject(e)
        }
    };
    var x = new fe
      , u = new fe
      , he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , pe = /[A-Z]/g;
    function ge(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(pe, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : he.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                u.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return u.hasData(e) || x.hasData(e)
        },
        data: function(e, t, n) {
            return u.access(e, t, n)
        },
        removeData: function(e, t) {
            u.remove(e, t)
        },
        _data: function(e, t, n) {
            return x.access(e, t, n)
        },
        _removeData: function(e, t) {
            x.remove(e, t)
        }
    }),
    E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], s = o && o.attributes;
            if (void 0 !== n)
                return "object" == _typeof(n) ? this.each(function() {
                    u.set(this, n)
                }) : d(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = u.get(o, n)) || void 0 !== (t = ge(o, n)) ? t : void 0;
                    this.each(function() {
                        u.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = u.get(o),
            1 === o.nodeType && !x.get(o, "hasDataAttrs"))) {
                for (t = s.length; t--; )
                    s[t] && 0 === (r = s[t].name).indexOf("data-") && (r = b(r.slice(5)),
                    ge(o, r, i[r]));
                x.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                u.remove(this, e)
            })
        }
    }),
    E.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return r = x.get(e, t = (t || "fx") + "queue"),
                n && (!r || Array.isArray(n) ? r = x.access(e, t, E.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, function() {
                E.dequeue(e, t)
            }, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x.get(e, n) || x.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    x.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || o.resolveWith(s, [s])
            }
            var r, i = 1, o = E.Deferred(), s = this, a = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (r = x.get(s[a], e + "queueHooks")) && r.empty && (i++,
                r.empty.add(n));
            return n(),
            o.promise(t)
        }
    });
    function me(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && k(e) && "none" === E.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , ve = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
      , f = ["Top", "Right", "Bottom", "Left"]
      , w = C.documentElement
      , k = function(e) {
        return E.contains(e.ownerDocument, e)
    }
      , ye = {
        composed: !0
    };
    w.getRootNode && (k = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
    }
    );
    function be(e, t, n, r) {
        var i, o, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return E.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== u && +l) && ve.exec(E.css(e, t));
        if (c && c[3] !== u) {
            for (u = u || c[3],
            c = +(l /= 2) || 1; s--; )
                E.style(e, t, c + u),
                (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                c /= o;
            E.style(e, t, (c *= 2) + u),
            n = n || []
        }
        return n && (c = +c || +l || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = c,
        r.end = i)),
        i
    }
    var xe = {};
    function A(e, t) {
        for (var n, r, i, o, s, a, l = [], u = 0, c = e.length; u < c; u++)
            (r = e[u]).style && (n = r.style.display,
            t ? ("none" === n && (l[u] = x.get(r, "display") || null,
            l[u] || (r.style.display = "")),
            "" === r.style.display && me(r) && (l[u] = (a = o = i = void 0,
            o = r.ownerDocument,
            s = r.nodeName,
            (a = xe[s]) || (i = o.body.appendChild(o.createElement(s)),
            a = E.css(i, "display"),
            i.parentNode.removeChild(i),
            xe[s] = a = "none" === a ? "block" : a)))) : "none" !== n && (l[u] = "none",
            x.set(r, "display", n)));
        for (u = 0; u < c; u++)
            null != l[u] && (e[u].style.display = l[u]);
        return e
    }
    E.fn.extend({
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                me(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var we = /^(?:checkbox|radio)$/i
      , Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
      , Ce = /^$|^module$|\/(?:java|ecma)script/i
      , n = C.createDocumentFragment().appendChild(C.createElement("div"))
      , N = ((L = C.createElement("input")).setAttribute("type", "radio"),
    L.setAttribute("checked", "checked"),
    L.setAttribute("name", "t"),
    n.appendChild(L),
    m.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
    n.innerHTML = "<textarea>x</textarea>",
    m.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue,
    n.innerHTML = "<option></option>",
    m.option = !!n.lastChild,
    {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    });
    function j(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && l(e, t) ? E.merge([e], n) : n
    }
    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            x.set(e[n], "globalEval", !t || x.get(t[n], "globalEval"))
    }
    N.tbody = N.tfoot = N.colgroup = N.caption = N.thead,
    N.th = N.td,
    m.option || (N.optgroup = N.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Se = /<|&#?\w+;/;
    function ke(e, t, n, r, i) {
        for (var o, s, a, l, u, c = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
            if ((o = e[f]) || 0 === o)
                if ("object" === p(o))
                    E.merge(d, o.nodeType ? [o] : o);
                else if (Se.test(o)) {
                    for (s = s || c.appendChild(t.createElement("div")),
                    a = (Te.exec(o) || ["", ""])[1].toLowerCase(),
                    a = N[a] || N._default,
                    s.innerHTML = a[1] + E.htmlPrefilter(o) + a[2],
                    u = a[0]; u--; )
                        s = s.lastChild;
                    E.merge(d, s.childNodes),
                    (s = c.firstChild).textContent = ""
                } else
                    d.push(t.createTextNode(o));
        for (c.textContent = "",
        f = 0; o = d[f++]; )
            if (r && -1 < E.inArray(o, r))
                i && i.push(o);
            else if (l = k(o),
            s = j(c.appendChild(o), "script"),
            l && Ee(s),
            n)
                for (u = 0; o = s[u++]; )
                    Ce.test(o.type || "") && n.push(o);
        return c
    }
    var Ae = /^([^.]*)(?:\.(.+)|)/;
    function s() {
        return !0
    }
    function h() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function je(e, t, n, r, i, o) {
        var s, a;
        if ("object" == _typeof(t)) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                je(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        !1 === i)
            i = h;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        (i = function(e) {
            return E().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = E.guid++)),
        e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }
    function qe(e, i, o) {
        o ? (x.set(e, i, !1),
        E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = x.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)
                        (E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = a.call(arguments),
                    x.set(this, i, r),
                    t = o(this, i),
                    this[i](),
                    r !== (n = x.get(this, i)) || t ? x.set(this, i, !1) : n = {},
                    r !== n)
                        return e.stopImmediatePropagation(),
                        e.preventDefault(),
                        n && n.value
                } else
                    r.length && (x.set(this, i, {
                        value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                    }),
                    e.stopImmediatePropagation())
            }
        })) : void 0 === x.get(e, i) && E.event.add(e, i, s)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, s, a, l, u, c, d, f, h, p = x.get(t);
            if (v(t))
                for (n.handler && (n = (o = n).handler,
                i = o.selector),
                i && E.find.matchesSelector(w, i),
                n.guid || (n.guid = E.guid++),
                (a = p.events) || (a = p.events = Object.create(null)),
                (s = p.handle) || (s = p.handle = function(e) {
                    return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                l = (e = (e || "").match(S) || [""]).length; l--; )
                    d = h = (f = Ae.exec(e[l]) || [])[1],
                    f = (f[2] || "").split(".").sort(),
                    d && (u = E.event.special[d] || {},
                    d = (i ? u.delegateType : u.bindType) || d,
                    u = E.event.special[d] || {},
                    h = E.extend({
                        type: d,
                        origType: h,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: f.join(".")
                    }, o),
                    (c = a[d]) || ((c = a[d] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(t, r, f, s) || t.addEventListener && t.addEventListener(d, s)),
                    u.add && (u.add.call(t, h),
                    h.handler.guid || (h.handler.guid = n.guid)),
                    i ? c.splice(c.delegateCount++, 0, h) : c.push(h),
                    E.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, u, c, d, f, h, p, g, m = x.hasData(e) && x.get(e);
            if (m && (l = m.events)) {
                for (u = (t = (t || "").match(S) || [""]).length; u--; )
                    if (h = g = (a = Ae.exec(t[u]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    h) {
                        for (d = E.event.special[h] || {},
                        f = l[h = (r ? d.delegateType : d.bindType) || h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = f.length; o--; )
                            c = f[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1),
                            c.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, c));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || E.removeEvent(e, h, m.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            E.event.remove(e, h + t[u], n, r, !0);
                E.isEmptyObject(l) && x.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s = new Array(arguments.length), a = E.event.fix(e), e = (x.get(this, "events") || Object.create(null))[a.type] || [], l = E.event.special[a.type] || {};
            for (s[0] = a,
            t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (a.delegateTarget = this,
            !l.preDispatch || !1 !== l.preDispatch.call(this, a)) {
                for (o = E.event.handlers.call(this, a, e),
                t = 0; (r = o[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (i = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !1 !== i.namespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i,
                        a.data = i.data,
                        void 0 !== (i = ((E.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [], l = t.delegateCount, u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[i = (r = t[n]).selector + " "] && (s[i] = r.needsContext ? -1 < E(i, this).index(u) : E.find(i, this, null, [u]).length),
                            s[i] && o.push(r);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return u = this,
            l < t.length && a.push({
                elem: u,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && qe(e, "click", s),
                    !1
                },
                trigger: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && l(e, "input") && qe(e, "click"),
                    !0
                },
                _default: function(e) {
                    e = e.target;
                    return we.test(e.type) && e.click && l(e, "input") && x.get(e, "click") || l(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    E.Event = function(e, t) {
        if (!(this instanceof E.Event))
            return new E.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? s : h,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && E.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[E.expando] = !0
    }
    ,
    E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = s,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = s,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = s,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp),
    E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return qe(this, e, Ne),
                !1
            },
            trigger: function() {
                return qe(this, e),
                !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }),
    E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget, r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType,
                t = r.handler.apply(this, arguments),
                e.type = i),
                t
            }
        }
    }),
    E.fn.extend({
        on: function(e, t, n, r) {
            return je(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return je(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                r = e.handleObj,
                E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
            else {
                if ("object" != _typeof(e))
                    return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                    !1 === n && (n = h),
                    this.each(function() {
                        E.event.remove(this, e, n, t)
                    });
                for (i in e)
                    this.off(i, t, e[i])
            }
            return this
        }
    });
    var De = /<script|<style|<link/i
      , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Pe(e, t) {
        return l(e, "table") && l(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }
    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function Ie(e, t) {
        var n, r, i, o;
        if (1 === t.nodeType) {
            if (x.hasData(e) && (o = x.get(e).events))
                for (i in x.remove(t, "handle events"),
                o)
                    for (n = 0,
                    r = o[i].length; n < r; n++)
                        E.event.add(t, i, o[i][n]);
            u.hasData(e) && (e = u.access(e),
            e = E.extend({}, e),
            u.set(t, e))
        }
    }
    function q(n, r, i, o) {
        r = M(r);
        var e, t, s, a, l, u, c = 0, d = n.length, f = d - 1, h = r[0], p = y(h);
        if (p || 1 < d && "string" == typeof h && !m.checkClone && Le.test(h))
            return n.each(function(e) {
                var t = n.eq(e);
                p && (r[0] = h.call(this, e, t.html())),
                q(t, r, i, o)
            });
        if (d && (t = (e = ke(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (a = (s = E.map(j(e, "script"), He)).length; c < d; c++)
                l = e,
                c !== f && (l = E.clone(l, !0, !0),
                a && E.merge(s, j(l, "script"))),
                i.call(n[c], l, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument,
                E.map(s, Oe),
                c = 0; c < a; c++)
                    l = s[c],
                    Ce.test(l.type || "") && !x.access(l, "globalEval") && E.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }, u) : X(l.textContent.replace(Re, ""), l, u))
        }
        return n
    }
    function Me(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || E.cleanData(j(r)),
            r.parentNode && (n && k(r) && Ee(j(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, l, u, c = e.cloneNode(!0), d = k(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = j(c),
                r = 0,
                i = (o = j(e)).length; r < i; r++)
                    a = o[r],
                    "input" === (u = (l = s[r]).nodeName.toLowerCase()) && we.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (o = o || j(e),
                    s = s || j(c),
                    r = 0,
                    i = o.length; r < i; r++)
                        Ie(o[r], s[r]);
                else
                    Ie(e, c);
            return 0 < (s = j(c, "script")).length && Ee(s, !d && j(e, "script")),
            c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (v(n)) {
                    if (t = n[x.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[x.expando] = void 0
                    }
                    n[u.expando] && (n[u.expando] = void 0)
                }
        }
    }),
    E.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return d(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return q(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Pe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return q(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Pe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return q(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return q(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (E.cleanData(j(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return d(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !De.test(e) && !N[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (E.cleanData(j(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return q(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(j(this)),
                t && t.replaceChild(e, this))
            }, n)
        }
    }),
    E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
                t = o === i ? this : this.clone(!0),
                E(r[o])[s](t),
                F.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    function Fe(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : T).getComputedStyle(e)
    }
    function _e(e, t, n) {
        var r, i = {};
        for (r in t)
            i[r] = e.style[r],
            e.style[r] = t[r];
        for (r in n = n.call(e),
        t)
            e.style[r] = i[r];
        return n
    }
    var Be, We, $e, ze, Ue, Ve, Xe, i, Ke = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), Qe = new RegExp(f.join("|"),"i");
    function Ge(e, t, n) {
        var r, i, o = e.style;
        return (n = n || Fe(e)) && ("" !== (i = n.getPropertyValue(t) || n[t]) || k(e) || (i = E.style(e, t)),
        !m.pixelBoxStyles() && Ke.test(i) && Qe.test(t) && (e = o.width,
        t = o.minWidth,
        r = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = i,
        i = n.width,
        o.width = e,
        o.minWidth = t,
        o.maxWidth = r)),
        void 0 !== i ? i + "" : i
    }
    function Ye(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function Ze() {
        var e;
        i && (Xe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
        i.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
        w.appendChild(Xe).appendChild(i),
        e = T.getComputedStyle(i),
        Be = "1%" !== e.top,
        Ve = 12 === Je(e.marginLeft),
        i.style.right = "60%",
        ze = 36 === Je(e.right),
        We = 36 === Je(e.width),
        i.style.position = "absolute",
        $e = 12 === Je(i.offsetWidth / 3),
        w.removeChild(Xe),
        i = null)
    }
    function Je(e) {
        return Math.round(parseFloat(e))
    }
    Xe = C.createElement("div"),
    (i = C.createElement("div")).style && (i.style.backgroundClip = "content-box",
    i.cloneNode(!0).style.backgroundClip = "",
    m.clearCloneStyle = "content-box" === i.style.backgroundClip,
    E.extend(m, {
        boxSizingReliable: function() {
            return Ze(),
            We
        },
        pixelBoxStyles: function() {
            return Ze(),
            ze
        },
        pixelPosition: function() {
            return Ze(),
            Be
        },
        reliableMarginLeft: function() {
            return Ze(),
            Ve
        },
        scrollboxSize: function() {
            return Ze(),
            $e
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Ue && (e = C.createElement("table"),
            t = C.createElement("tr"),
            n = C.createElement("div"),
            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
            t.style.cssText = "border:1px solid",
            t.style.height = "1px",
            n.style.height = "9px",
            n.style.display = "block",
            w.appendChild(e).appendChild(t).appendChild(n),
            n = T.getComputedStyle(t),
            Ue = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight,
            w.removeChild(e)),
            Ue
        }
    }));
    var et = ["Webkit", "Moz", "ms"]
      , tt = C.createElement("div").style
      , nt = {};
    function rt(e) {
        return E.cssProps[e] || nt[e] || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--; )
                if ((e = et[n] + t)in tt)
                    return e
        }(e) || e)
    }
    var it = /^(none|table(?!-c[ea]).+)/
      , ot = /^--/
      , st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , at = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function lt(e, t, n) {
        var r = ve.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function ut(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += E.css(e, n + f[s], !0, i)),
            r ? ("content" === n && (l -= E.css(e, "padding" + f[s], !0, i)),
            "margin" !== n && (l -= E.css(e, "border" + f[s] + "Width", !0, i))) : (l += E.css(e, "padding" + f[s], !0, i),
            "padding" !== n ? l += E.css(e, "border" + f[s] + "Width", !0, i) : a += E.css(e, "border" + f[s] + "Width", !0, i));
        return !r && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0),
        l
    }
    function ct(e, t, n) {
        var r = Fe(e)
          , i = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r)
          , o = i
          , s = Ge(e, t, r)
          , a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ke.test(s)) {
            if (!n)
                return s;
            s = "auto"
        }
        return (!m.boxSizingReliable() && i || !m.reliableTrDimensions() && l(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r),
        (o = a in e) && (s = e[a])),
        (s = parseFloat(s) || 0) + ut(e, t, n || (i ? "border" : "content"), o, r, s) + "px"
    }
    function o(e, t, n, r, i) {
        return new o.prototype.init(e,t,n,r,i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t)
                        return "" === (t = Ge(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = b(t), l = ot.test(t), u = e.style;
                if (l || (t = rt(a)),
                s = E.cssHooks[t] || E.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];
                "string" === (o = _typeof(n)) && (i = ve.exec(n)) && i[1] && (n = be(e, t, i),
                o = "number"),
                null != n && n == n && ("number" !== o || l || (n += i && i[3] || (E.cssNumber[a] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l ? u.setProperty(t, n) : u[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o = b(t);
            return ot.test(t) || (t = rt(o)),
            "normal" === (i = void 0 === (i = (o = E.cssHooks[t] || E.cssHooks[o]) && "get"in o ? o.get(e, !0, n) : i) ? Ge(e, t, r) : i) && t in at && (i = at[t]),
            "" === n || n ? (o = parseFloat(i),
            !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
    E.each(["height", "width"], function(e, s) {
        E.cssHooks[s] = {
            get: function(e, t, n) {
                if (t)
                    return !it.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, s, n) : _e(e, st, function() {
                        return ct(e, s, n)
                    })
            },
            set: function(e, t, n) {
                var r = Fe(e)
                  , i = !m.scrollboxSize() && "absolute" === r.position
                  , o = (i || n) && "border-box" === E.css(e, "boxSizing", !1, r)
                  , n = n ? ut(e, s, n, o, r) : 0;
                return o && i && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - ut(e, s, "border", !1, r) - .5)),
                n && (o = ve.exec(t)) && "px" !== (o[3] || "px") && (e.style[s] = t,
                t = E.css(e, s)),
                lt(0, t, n)
            }
        }
    }),
    E.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - _e(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[i + f[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        },
        "margin" !== i && (E.cssHooks[i + o].set = lt)
    }),
    E.fn.extend({
        css: function(e, t) {
            return d(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = Fe(e),
                    i = t.length; s < i; s++)
                        o[t[s]] = E.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }),
    ((E.Tween = o).prototype = {
        constructor: o,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || E.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = o.propHooks[this.prop];
            return (e && e.get ? e : o.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = o.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (n && n.set ? n : o.propHooks._default).set(this),
            this
        }
    }).init.prototype = o.prototype,
    (o.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = o.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    E.fx = o.prototype.init,
    E.fx.step = {};
    var D, dt, L, ft = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    function pt() {
        dt && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(pt) : T.setTimeout(pt, E.fx.interval),
        E.fx.tick())
    }
    function gt() {
        return T.setTimeout(function() {
            D = void 0
        }),
        D = Date.now()
    }
    function mt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = f[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function vt(e, t, n) {
        for (var r, i = (R.tweeners[t] || []).concat(R.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function R(i, e, t) {
        var n, o, r, s, a, l, u, c = 0, d = R.prefilters.length, f = E.Deferred().always(function() {
            delete h.elem
        }), h = function() {
            if (o)
                return !1;
            for (var e = D || gt(), e = Math.max(0, p.startTime + p.duration - e), t = 1 - (e / p.duration || 0), n = 0, r = p.tweens.length; n < r; n++)
                p.tweens[n].run(t);
            return f.notifyWith(i, [p, t, e]),
            t < 1 && r ? e : (r || f.notifyWith(i, [p, 1, 0]),
            f.resolveWith(i, [p]),
            !1)
        }, p = f.promise({
            elem: i,
            props: E.extend({}, e),
            opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: D || gt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                t = E.Tween(i, p.opts, e, t, p.opts.specialEasing[e] || p.opts.easing);
                return p.tweens.push(t),
                t
            },
            stop: function(e) {
                var t = 0
                  , n = e ? p.tweens.length : 0;
                if (!o) {
                    for (o = !0; t < n; t++)
                        p.tweens[t].run(1);
                    e ? (f.notifyWith(i, [p, 1, 0]),
                    f.resolveWith(i, [p, e])) : f.rejectWith(i, [p, e])
                }
                return this
            }
        }), g = p.props, m = g, v = p.opts.specialEasing;
        for (r in m)
            if (a = v[s = b(r)],
            l = m[r],
            Array.isArray(l) && (a = l[1],
            l = m[r] = l[0]),
            r !== s && (m[s] = l,
            delete m[r]),
            (u = E.cssHooks[s]) && "expand"in u)
                for (r in l = u.expand(l),
                delete m[s],
                l)
                    r in m || (m[r] = l[r],
                    v[r] = a);
            else
                v[s] = a;
        for (; c < d; c++)
            if (n = R.prefilters[c].call(p, i, g, p.opts))
                return y(n.stop) && (E._queueHooks(p.elem, p.opts.queue).stop = n.stop.bind(n)),
                n;
        return E.map(g, vt, p),
        y(p.opts.start) && p.opts.start.call(i, p),
        p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always),
        E.fx.timer(E.extend(h, {
            elem: i,
            anim: p,
            queue: p.opts.queue
        })),
        p
    }
    E.Animation = E.extend(R, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return be(n.elem, e, ve.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            for (var n, r = 0, i = (e = y(e) ? (t = e,
            ["*"]) : e.match(S)).length; r < i; r++)
                n = e[r],
                R.tweeners[n] = R.tweeners[n] || [],
                R.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, s, a, l, u, c = "width"in t || "height"in t, d = this, f = {}, h = e.style, p = e.nodeType && me(e), g = x.get(e, "fxshow");
            for (r in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            d.always(function() {
                d.always(function() {
                    s.unqueued--,
                    E.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (i = t[r],
                ft.test(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (p ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        p = !0
                    }
                    f[r] = g && g[r] || E.style(e, r)
                }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f))
                for (r in c && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (u = g && g.display) && (u = x.get(e, "display")),
                "none" === (c = E.css(e, "display")) && (u ? c = u : (A([e], !0),
                u = e.style.display || u,
                c = E.css(e, "display"),
                A([e]))),
                ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (d.done(function() {
                    h.display = u
                }),
                null == u && (c = h.display,
                u = "none" === c ? "" : c)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                d.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                f)
                    l || (g ? "hidden"in g && (p = g.hidden) : g = x.access(e, "fxshow", {
                        display: u
                    }),
                    o && (g.hidden = !p),
                    p && A([e], !0),
                    d.done(function() {
                        for (r in p || A([e]),
                        x.remove(e, "fxshow"),
                        f)
                            E.style(e, r, f[r])
                    })),
                    l = vt(p ? g[r] : 0, r, d),
                    r in g || (g[r] = l.start,
                    p && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? R.prefilters.unshift(e) : R.prefilters.push(e)
        }
    }),
    E.speed = function(e, t, n) {
        var r = e && "object" == _typeof(e) ? E.extend({}, e) : {
            complete: n || !n && t || y(e) && e,
            duration: e,
            easing: n && t || t && !y(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            y(r.old) && r.old.call(this),
            r.queue && E.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(me).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function i() {
                var e = R(this, E.extend({}, t), s);
                (o || x.get(this, "finish")) && e.stop(!0)
            }
            var o = E.isEmptyObject(t)
              , s = E.speed(e, n, r);
            return i.finish = i,
            o || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, e, o) {
            function s(e) {
                var t = e.stop;
                delete e.stop,
                t(o)
            }
            return "string" != typeof i && (o = e,
            e = i,
            i = void 0),
            e && this.queue(i || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != i && i + "queueHooks"
                  , n = E.timers
                  , r = x.get(this);
                if (t)
                    r[t] && r[t].stop && s(r[t]);
                else
                    for (t in r)
                        r[t] && r[t].stop && ht.test(t) && s(r[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                    e = !1,
                    n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"),
            this.each(function() {
                var e, t = x.get(this), n = t[s + "queue"], r = t[s + "queueHooks"], i = E.timers, o = n ? n.length : 0;
                for (t.finish = !0,
                E.queue(this, s, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length; e--; )
                    i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0),
                    i.splice(e, 1));
                for (e = 0; e < o; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(mt(r, !0), e, t, n)
        }
    }),
    E.each({
        slideDown: mt("show"),
        slideUp: mt("hide"),
        slideToggle: mt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }),
    E.timers = [],
    E.fx.tick = function() {
        var e, t = 0, n = E.timers;
        for (D = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(),
        D = void 0
    }
    ,
    E.fx.timer = function(e) {
        E.timers.push(e),
        E.fx.start()
    }
    ,
    E.fx.interval = 13,
    E.fx.start = function() {
        dt || (dt = !0,
        pt())
    }
    ,
    E.fx.stop = function() {
        dt = null
    }
    ,
    E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r,
        this.queue(e = e || "fx", function(e, t) {
            var n = T.setTimeout(e, r);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }
    ,
    L = C.createElement("input"),
    n = C.createElement("select").appendChild(C.createElement("option")),
    L.type = "checkbox",
    m.checkOn = "" !== L.value,
    m.optSelected = n.selected,
    (L = C.createElement("input")).value = "t",
    L.type = "radio",
    m.radioValue = "t" === L.value;
    var yt, bt = E.expr.attrHandle, xt = (E.fn.extend({
        attr: function(e, t) {
            return d(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }),
    E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? yt : void 0)),
                void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : !(i && "get"in i && null !== (r = i.get(e, t))) && null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    var n;
                    if (!m.radioValue && "radio" === t && l(e, "input"))
                        return n = e.value,
                        e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(S);
            if (i && 1 === e.nodeType)
                for (; n = i[r++]; )
                    e.removeAttribute(n)
        }
    }),
    yt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = bt[t] || E.find.attr;
        bt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = bt[o],
            bt[o] = r,
            r = null != s(e, t, n) ? o : null,
            bt[o] = i),
            r
        }
    }),
    /^(?:input|select|textarea|button)$/i), wt = /^(?:a|area)$/i;
    function P(e) {
        return (e.match(S) || []).join(" ")
    }
    function H(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(S) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return d(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }),
    E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                i = E.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : xt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    m.optSelected || (E.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex,
            e.parentNode && e.parentNode.selectedIndex)
        }
    }),
    E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }),
    E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, s, a = 0;
            if (y(t))
                return this.each(function(e) {
                    E(this).addClass(t.call(this, e, H(this)))
                });
            if ((e = Tt(t)).length)
                for (; n = this[a++]; )
                    if (s = H(n),
                    r = 1 === n.nodeType && " " + P(s) + " ") {
                        for (o = 0; i = e[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s !== (s = P(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, s, a = 0;
            if (y(t))
                return this.each(function(e) {
                    E(this).removeClass(t.call(this, e, H(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((e = Tt(t)).length)
                for (; n = this[a++]; )
                    if (s = H(n),
                    r = 1 === n.nodeType && " " + P(s) + " ") {
                        for (o = 0; i = e[o++]; )
                            for (; -1 < r.indexOf(" " + i + " "); )
                                r = r.replace(" " + i + " ", " ");
                        s !== (s = P(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = _typeof(i)
              , s = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : y(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, H(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (s)
                    for (t = 0,
                    n = E(this),
                    r = Tt(i); e = r[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    void 0 !== i && "boolean" !== o || ((e = H(this)) && x.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", !e && !1 !== i && x.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++]; )
                if (1 === t.nodeType && -1 < (" " + P(H(t)) + " ").indexOf(r))
                    return !0;
            return !1
        }
    });
    function Ct(e) {
        e.stopPropagation()
    }
    var Et = /\r/g
      , St = (E.fn.extend({
        val: function(t) {
            var n, e, r, i = this[0];
            return arguments.length ? (r = y(t),
            this.each(function(e) {
                1 === this.nodeType && (null == (e = r ? t.call(this, e, E(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = E.map(e, function(e) {
                    return null == e ? "" : e + ""
                })),
                (n = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : i ? (n = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(i, "value")) ? e : "string" == typeof (e = i.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
        }
    }),
    E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : P(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, r = e.selectedIndex, i = "select-one" === e.type, o = i ? null : [], s = i ? r + 1 : n.length, a = r < 0 ? s : i ? r : 0; a < s; a++)
                        if (((t = n[a]).selected || a === r) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (t = E(t).val(),
                            i)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = E.makeArray(t), s = i.length; s--; )
                        ((r = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        },
        m.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    m.focusin = "onfocusin"in T,
    /^(?:focusinfocus|focusoutblur)$/)
      , kt = (E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, s, a, l, u, c, d = [n || C], f = $.call(e, "type") ? e.type : e, h = $.call(e, "namespace") ? e.namespace.split(".") : [], p = c = o = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(f + E.event.triggered) && (-1 < f.indexOf(".") && (f = (h = f.split(".")).shift(),
            h.sort()),
            a = f.indexOf(":") < 0 && "on" + f,
            (e = e[E.expando] ? e : new E.Event(f,"object" == _typeof(e) && e)).isTrigger = r ? 2 : 3,
            e.namespace = h.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : E.makeArray(t, [e]),
            u = E.event.special[f] || {},
            r || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                if (!r && !u.noBubble && !g(n)) {
                    for (s = u.delegateType || f,
                    St.test(s + f) || (p = p.parentNode); p; p = p.parentNode)
                        d.push(p),
                        o = p;
                    o === (n.ownerDocument || C) && d.push(o.defaultView || o.parentWindow || T)
                }
                for (i = 0; (p = d[i++]) && !e.isPropagationStopped(); )
                    c = p,
                    e.type = 1 < i ? s : u.bindType || f,
                    (l = (x.get(p, "events") || Object.create(null))[e.type] && x.get(p, "handle")) && l.apply(p, t),
                    (l = a && p[a]) && l.apply && v(p) && (e.result = l.apply(p, t),
                    !1 === e.result && e.preventDefault());
                return e.type = f,
                r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !v(n) || a && y(n[f]) && !g(n) && ((o = n[a]) && (n[a] = null),
                E.event.triggered = f,
                e.isPropagationStopped() && c.addEventListener(f, Ct),
                n[f](),
                e.isPropagationStopped() && c.removeEventListener(f, Ct),
                E.event.triggered = void 0,
                o && (n[a] = o)),
                e.result
            }
        },
        simulate: function(e, t, n) {
            n = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(n, null, t)
        }
    }),
    E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return E.event.trigger(e, t, n, !0)
        }
    }),
    m.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        function i(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        }
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this
                  , t = x.access(e, r);
                t || e.addEventListener(n, i, !0),
                x.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this
                  , t = x.access(e, r) - 1;
                t ? x.access(e, r, t) : (e.removeEventListener(n, i, !0),
                x.remove(e, r))
            }
        }
    }),
    T.location)
      , At = {
        guid: Date.now()
    }
      , Nt = /\?/
      , jt = (E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0],
        t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)),
        t
    }
    ,
    /\[\]$/)
      , qt = /\r?\n/g
      , Dt = /^(?:submit|button|image|reset|file)$/i
      , Lt = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            t = y(t) ? t() : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, i = [];
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
            E.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (r in e)
                !function n(r, e, i, o) {
                    if (Array.isArray(e))
                        E.each(e, function(e, t) {
                            i || jt.test(r) ? o(r, t) : n(r + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, i, o)
                        });
                    else if (i || "object" !== p(e))
                        o(r, e);
                    else
                        for (var t in e)
                            n(r + "[" + t + "]", e[t], i, o)
                }(r, e[r], t, n);
        return i.join("&")
    }
    ,
    E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Lt.test(this.nodeName) && !Dt.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(qt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(qt, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g
      , Pt = /#.*$/
      , Ht = /([?&])_=[^&]*/
      , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , It = /^(?:GET|HEAD)$/
      , Mt = /^\/\//
      , Ft = {}
      , _t = {}
      , Bt = "*/".concat("*")
      , Wt = C.createElement("a");
    function $t(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, r = 0, i = e.toLowerCase().match(S) || [];
            if (y(t))
                for (; n = i[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function zt(t, r, i, o) {
        var s = {}
          , a = t === _t;
        function l(e) {
            var n;
            return s[e] = !0,
            E.each(t[e] || [], function(e, t) {
                t = t(r, i, o);
                return "string" != typeof t || a || s[t] ? a ? !(n = t) : void 0 : (r.dataTypes.unshift(t),
                l(t),
                !1)
            }),
            n
        }
        return l(r.dataTypes[0]) || !s["*"] && l("*")
    }
    function Ut(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r = r || {})[n] = t[n]);
        return r && E.extend(!0, e, r),
        e
    }
    Wt.href = kt.href,
    E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, E.ajaxSettings), t) : Ut(E.ajaxSettings, e)
        },
        ajaxPrefilter: $t(Ft),
        ajaxTransport: $t(_t),
        ajax: function(e, t) {
            "object" == _typeof(e) && (t = e,
            e = void 0);
            var l, u, c, n, d, f, h, r, i, p = E.ajaxSetup({}, t = t || {}), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? E(g) : E.event, v = E.Deferred(), y = E.Callbacks("once memory"), b = p.statusCode || {}, o = {}, s = {}, a = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (f) {
                        if (!n)
                            for (n = {}; t = Ot.exec(c); )
                                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                        t = n[e.toLowerCase() + " "]
                    }
                    return null == t ? null : t.join(", ")
                },
                getAllResponseHeaders: function() {
                    return f ? c : null
                },
                setRequestHeader: function(e, t) {
                    return null == f && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                    o[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == f && (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    if (e)
                        if (f)
                            x.always(e[x.status]);
                        else
                            for (var t in e)
                                b[t] = [b[t], e[t]];
                    return this
                },
                abort: function(e) {
                    e = e || a;
                    return l && l.abort(e),
                    w(0, e),
                    this
                }
            };
            if (v.promise(x),
            p.url = ((e || p.url || kt.href) + "").replace(Mt, kt.protocol + "//"),
            p.type = t.method || t.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(S) || [""],
            null == p.crossDomain) {
                i = C.createElement("a");
                try {
                    i.href = p.url,
                    i.href = i.href,
                    p.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = E.param(p.data, p.traditional)),
            zt(Ft, p, t, x),
            !f) {
                for (r in (h = E.event && p.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !It.test(p.type),
                u = p.url.replace(Pt, ""),
                p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Rt, "+")) : (i = p.url.slice(u.length),
                p.data && (p.processData || "string" == typeof p.data) && (u += (Nt.test(u) ? "&" : "?") + p.data,
                delete p.data),
                !1 === p.cache && (u = u.replace(Ht, "$1"),
                i = (Nt.test(u) ? "&" : "?") + "_=" + At.guid++ + i),
                p.url = u + i),
                p.ifModified && (E.lastModified[u] && x.setRequestHeader("If-Modified-Since", E.lastModified[u]),
                E.etag[u] && x.setRequestHeader("If-None-Match", E.etag[u])),
                (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && x.setRequestHeader("Content-Type", p.contentType),
                x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : p.accepts["*"]),
                p.headers)
                    x.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, x, p) || f))
                    return x.abort();
                if (a = "abort",
                y.add(p.complete),
                x.done(p.success),
                x.fail(p.error),
                l = zt(_t, p, t, x)) {
                    if (x.readyState = 1,
                    h && m.trigger("ajaxSend", [x, p]),
                    f)
                        return x;
                    p.async && 0 < p.timeout && (d = T.setTimeout(function() {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        f = !1,
                        l.send(o, w)
                    } catch (e) {
                        if (f)
                            throw e;
                        w(-1, e)
                    }
                } else
                    w(-1, "No Transport")
            }
            return x;
            function w(e, t, n, r) {
                var i, o, s, a = t;
                f || (f = !0,
                d && T.clearTimeout(d),
                l = void 0,
                c = r || "",
                x.readyState = 0 < e ? 4 : 0,
                r = 200 <= e && e < 300 || 304 === e,
                n && (s = function(e, t, n) {
                    for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in a)
                            if (a[i] && a[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0]in n)
                        o = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                o = i;
                                break
                            }
                            s = s || i
                        }
                        o = o || s
                    }
                    if (o)
                        return o !== l[0] && l.unshift(o),
                        n[o]
                }(p, x, n)),
                !r && -1 < E.inArray("script", p.dataTypes) && E.inArray("json", p.dataTypes) < 0 && (p.converters["text script"] = function() {}
                ),
                s = function(e, t, n, r) {
                    var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1])
                        for (s in e.converters)
                            u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; )
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = o,
                        o = c.shift())
                            if ("*" === o)
                                o = l;
                            else if ("*" !== l && l !== o) {
                                if (!(s = u[l + " " + o] || u["* " + o]))
                                    for (i in u)
                                        if ((a = i.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                            !0 === s ? s = u[i] : !0 !== u[i] && (o = a[0],
                                            c.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + o
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, s, x, r),
                r ? (p.ifModified && ((n = x.getResponseHeader("Last-Modified")) && (E.lastModified[u] = n),
                (n = x.getResponseHeader("etag")) && (E.etag[u] = n)),
                204 === e || "HEAD" === p.type ? a = "nocontent" : 304 === e ? a = "notmodified" : (a = s.state,
                i = s.data,
                r = !(o = s.error))) : (o = a,
                !e && a || (a = "error",
                e < 0 && (e = 0))),
                x.status = e,
                x.statusText = (t || a) + "",
                r ? v.resolveWith(g, [i, a, x]) : v.rejectWith(g, [x, a, o]),
                x.statusCode(b),
                b = void 0,
                h && m.trigger(r ? "ajaxSuccess" : "ajaxError", [x, p, r ? i : o]),
                y.fireWith(g, [x, a]),
                h && (m.trigger("ajaxComplete", [x, p]),
                --E.active || E.event.trigger("ajaxStop")))
            }
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }),
    E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return y(t) && (r = r || n,
            n = t,
            t = void 0),
            E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }),
    E.ajaxPrefilter(function(e) {
        for (var t in e.headers)
            "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }),
    E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }
    ,
    E.fn.extend({
        wrapAll: function(e) {
            return this[0] && (y(e) && (e = e.call(this[0])),
            e = E(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(n) {
            return y(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = y(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }
    ,
    E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    E.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Vt = {
        0: 200,
        1223: 204
    }
      , Xt = E.ajaxSettings.xhr();
    m.cors = !!Xt && "withCredentials"in Xt,
    m.ajax = Xt = !!Xt,
    E.ajaxTransport(function(i) {
        var o, s;
        if (m.cors || Xt && !i.crossDomain)
            return {
                send: function(e, t) {
                    var n, r = i.xhr();
                    if (r.open(i.type, i.url, i.async, i.username, i.password),
                    i.xhrFields)
                        for (n in i.xhrFields)
                            r[n] = i.xhrFields[n];
                    for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                    i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        r.setRequestHeader(n, e[n]);
                    o = function(e) {
                        return function() {
                            o && (o = s = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                            "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Vt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }
                    ,
                    r.onload = o(),
                    s = r.onerror = r.ontimeout = o("error"),
                    void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                        4 === r.readyState && T.setTimeout(function() {
                            o && s()
                        })
                    }
                    ,
                    o = o("abort");
                    try {
                        r.send(i.hasContent && i.data || null)
                    } catch (e) {
                        if (o)
                            throw e
                    }
                },
                abort: function() {
                    o && o()
                }
            }
    }),
    E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e),
                e
            }
        }
    }),
    E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs)
            return {
                send: function(e, t) {
                    r = E("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(),
                        i = null,
                        e && t("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    C.head.appendChild(r[0])
                },
                abort: function() {
                    i && i()
                }
            }
    });
    var Kt = []
      , Qt = /(=)\?(?=&|$)|\?\?/
      , Gt = (E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || E.expando + "_" + At.guid++;
            return this[e] = !0,
            e
        }
    }),
    E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, s = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            s ? e[s] = e[s].replace(Qt, "$1" + r) : !1 !== e.jsonp && (e.url += (Nt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || E.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            i = T[r],
            T[r] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === i ? E(T).removeProp(r) : T[r] = i,
                e[r] && (e.jsonpCallback = t.jsonpCallback,
                Kt.push(r)),
                o && y(i) && i(o[0]),
                o = i = void 0
            }),
            "script"
    }),
    m.createHTMLDocument = ((e = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
    2 === e.childNodes.length),
    E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (m.createHTMLDocument ? ((r = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href,
        t.head.appendChild(r)) : t = C),
        r = !n && [],
        (n = Y.exec(e)) ? [t.createElement(n[1])] : (n = ke([e], t, r),
        r && r.length && E(r).remove(),
        E.merge([], n.childNodes)));
        var r
    }
    ,
    E.fn.load = function(e, t, n) {
        var r, i, o, s = this, a = e.indexOf(" ");
        return -1 < a && (r = P(e.slice(a)),
        e = e.slice(0, a)),
        y(t) ? (n = t,
        t = void 0) : t && "object" == _typeof(t) && (i = "POST"),
        0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a = E.css(e, "position"), l = E(e), u = {};
            "static" === a && (e.style.position = "relative"),
            o = l.offset(),
            r = E.css(e, "top"),
            s = E.css(e, "left"),
            a = ("absolute" === a || "fixed" === a) && -1 < (r + s).indexOf("auto") ? (i = (a = l.position()).top,
            a.left) : (i = parseFloat(r) || 0,
            parseFloat(s) || 0),
            null != (t = y(t) ? t.call(e, n, E.extend({}, o)) : t).top && (u.top = t.top - o.top + i),
            null != t.left && (u.left = t.left - o.left + a),
            "using"in t ? t.using.call(e, u) : l.css(u)
        }
    },
    E.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    E.offset.setOffset(this, t, e)
                });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
            n = n.ownerDocument.defaultView,
            {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === E.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0),
                    i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position"); )
                    e = e.offsetParent;
                return e || w
            })
        }
    }),
    E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return d(this, function(e, t, n) {
                var r;
                if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
                    return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }),
    E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Ye(m.pixelPosition, function(e, t) {
            if (t)
                return t = Ge(e, n),
                Ke.test(t) ? E(e).position()[n] + "px" : t
        })
    }),
    E.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        E.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e)
                  , i = r || (!0 === e || !0 === t ? "margin" : "border");
                return d(this, function(e, t, n) {
                    var r;
                    return g(e) ? 0 === o.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (r = e.documentElement,
                    Math.max(e.body["scroll" + s], r["scroll" + s], e.body["offset" + s], r["offset" + s], r["client" + s])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }),
    E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g)
      , Yt = (E.proxy = function(e, t) {
        var n, r;
        if ("string" == typeof t && (r = e[t],
        t = e,
        e = r),
        y(e))
            return n = a.call(arguments, 2),
            (r = function() {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }
            ).guid = e.guid = e.guid || E.guid++,
            r
    }
    ,
    E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }
    ,
    E.isArray = Array.isArray,
    E.parseJSON = JSON.parse,
    E.nodeName = l,
    E.isFunction = y,
    E.isWindow = g,
    E.camelCase = b,
    E.type = p,
    E.now = Date.now,
    E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    }),
    T.jQuery)
      , Zt = T.$;
    return E.noConflict = function(e) {
        return T.$ === E && (T.$ = Zt),
        e && T.jQuery === E && (T.jQuery = Yt),
        E
    }
    ,
    void 0 === O && (T.jQuery = T.$ = E),
    E
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
    c.extend(c.fn, {
        validate: function(e) {
            var r;
            {
                if (this.length)
                    return (r = c.data(this[0], "validator")) || (this.attr("novalidate", "novalidate"),
                    r = new c.validator(e,this[0]),
                    c.data(this[0], "validator", r),
                    r.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                        r.submitButton = e.currentTarget,
                        c(this).hasClass("cancel") && (r.cancelSubmit = !0),
                        void 0 !== c(this).attr("formnovalidate") && (r.cancelSubmit = !0)
                    }),
                    this.on("submit.validate", function(n) {
                        function e() {
                            var e, t;
                            return r.submitButton && (r.settings.submitHandler || r.formSubmitted) && (e = c("<input type='hidden'/>").attr("name", r.submitButton.name).val(c(r.submitButton).val()).appendTo(r.currentForm)),
                            !(r.settings.submitHandler && !r.settings.debug) || (t = r.settings.submitHandler.call(r, r.currentForm, n),
                            e && e.remove(),
                            void 0 !== t && t)
                        }
                        return r.settings.debug && n.preventDefault(),
                        r.cancelSubmit ? (r.cancelSubmit = !1,
                        e()) : r.form() ? r.pendingRequest ? !(r.formSubmitted = !0) : e() : (r.focusInvalid(),
                        !1)
                    })),
                    r);
                e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            }
        },
        valid: function() {
            var e, t, n;
            return c(this[0]).is("form") ? e = this.validate().form() : (n = [],
            e = !0,
            t = c(this[0].form).validate(),
            this.each(function() {
                (e = t.element(this) && e) || (n = n.concat(t.errorList))
            }),
            t.errorList = n),
            e
        },
        rules: function(e, t) {
            var n, r, i, o, s, a = this[0], l = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != a && (!a.form && l && (a.form = this.closest("form")[0],
            a.name = this.attr("name")),
            null != a.form)) {
                if (e)
                    switch (n = c.data(a.form, "validator").settings,
                    r = n.rules,
                    i = c.validator.staticRules(a),
                    e) {
                    case "add":
                        c.extend(i, c.validator.normalizeRule(t)),
                        delete i.messages,
                        r[a.name] = i,
                        t.messages && (n.messages[a.name] = c.extend(n.messages[a.name], t.messages));
                        break;
                    case "remove":
                        return t ? (s = {},
                        c.each(t.split(/\s/), function(e, t) {
                            s[t] = i[t],
                            delete i[t]
                        }),
                        s) : (delete r[a.name],
                        i)
                    }
                return (l = c.validator.normalizeRules(c.extend({}, c.validator.classRules(a), c.validator.attributeRules(a), c.validator.dataRules(a), c.validator.staticRules(a)), a)).required && (o = l.required,
                delete l.required,
                l = c.extend({
                    required: o
                }, l)),
                l.remote && (o = l.remote,
                delete l.remote,
                l = c.extend(l, {
                    remote: o
                })),
                l
            }
        }
    });
    function t(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    var n;
    c.extend(c.expr.pseudos || c.expr[":"], {
        blank: function(e) {
            return !t("" + c(e).val())
        },
        filled: function(e) {
            e = c(e).val();
            return null !== e && !!t("" + e)
        },
        unchecked: function(e) {
            return !c(e).prop("checked")
        }
    }),
    c.validator = function(e, t) {
        this.settings = c.extend(!0, {}, c.validator.defaults, e),
        this.currentForm = t,
        this.init()
    }
    ,
    c.validator.format = function(n, e) {
        return 1 === arguments.length ? function() {
            var e = c.makeArray(arguments);
            return e.unshift(n),
            c.validator.format.apply(this, e)
        }
        : (void 0 === e || ((e = 2 < arguments.length && e.constructor !== Array ? c.makeArray(arguments).slice(1) : e).constructor !== Array && (e = [e]),
        c.each(e, function(e, t) {
            n = n.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                return t
            })
        })),
        n)
    }
    ,
    c.extend(c.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: c([]),
            errorLabelContainer: c([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                9 === t.which && "" === this.elementValue(e) || -1 !== c.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(e, t, n) {
                ("radio" === e.type ? this.findByName(e.name) : c(e)).addClass(t).removeClass(n)
            },
            unhighlight: function(e, t, n) {
                ("radio" === e.type ? this.findByName(e.name) : c(e)).removeClass(t).addClass(n)
            }
        },
        setDefaults: function(e) {
            c.extend(c.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: c.validator.format("Please enter no more than {0} characters."),
            minlength: c.validator.format("Please enter at least {0} characters."),
            rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
            range: c.validator.format("Please enter a value between {0} and {1}."),
            max: c.validator.format("Please enter a value less than or equal to {0}."),
            min: c.validator.format("Please enter a value greater than or equal to {0}."),
            step: c.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var t, n, r = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    !this.form && r && (this.form = c(this).closest("form")[0],
                    this.name = c(this).attr("name")),
                    i === this.form && (r = c.data(this.form, "validator"),
                    t = "on" + e.type.replace(/^validate/, ""),
                    (n = r.settings)[t] && !c(this).is(n.ignore) && n[t].call(r, this, e))
                }
                this.labelContainer = c(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm),
                this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var n, i = this.currentForm, r = this.groups = {};
                c.each(this.settings.groups, function(n, e) {
                    "string" == typeof e && (e = e.split(/\s/)),
                    c.each(e, function(e, t) {
                        r[t] = n
                    })
                }),
                n = this.settings.rules,
                c.each(n, function(e, t) {
                    n[e] = c.validator.normalizeRule(t)
                }),
                c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e),
                this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                c.extend(this.submitted, this.errorMap),
                this.invalid = c.extend({}, this.errorMap),
                this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(e) {
                var t, n, r = this.clean(e), i = this.validationTargetFor(r), o = this, s = !0;
                return void 0 === i ? delete this.invalid[r.name] : (this.prepareElement(i),
                this.currentElements = c(i),
                (n = this.groups[i.name]) && c.each(this.groups, function(e, t) {
                    t === n && e !== i.name && ((r = o.validationTargetFor(o.clean(o.findByName(e)))) && r.name in o.invalid && (o.currentElements.push(r),
                    s = o.check(r) && s))
                }),
                t = !1 !== this.check(i),
                s = s && t,
                this.invalid[i.name] = !t,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                c(e).attr("aria-invalid", !t)),
                s
            },
            showErrors: function(t) {
                var n;
                t && (c.extend((n = this).errorMap, t),
                this.errorList = c.map(this.errorMap, function(e, t) {
                    return {
                        message: e,
                        element: n.findByName(t)[0]
                    }
                }),
                this.successList = c.grep(this.successList, function(e) {
                    return !(e.name in t)
                })),
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                c.fn.resetForm && c(this.currentForm).resetForm(),
                this.invalid = {},
                this.submitted = {},
                this.prepareForm(),
                this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                        this.findByName(e[t].name).removeClass(this.settings.validClass);
                else
                    e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e)
                    void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""),
                this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin")
                    } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === c.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var n = this
                  , r = {};
                return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var e = this.name || c(this).attr("name")
                      , t = void 0 !== c(this).attr("contenteditable") && "false" !== c(this).attr("contenteditable");
                    return !e && n.settings.debug && window.console && console.error("%o has no name assigned", this),
                    t && (this.form = c(this).closest("form")[0],
                    this.name = e),
                    this.form === n.currentForm && !(e in r || !n.objectLength(c(this).rules())) && (r[e] = !0)
                })
            },
            clean: function(e) {
                return c(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return c(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = c([]),
                this.toHide = c([])
            },
            reset: function() {
                this.resetInternals(),
                this.currentElements = c([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(e) {
                var t = c(e)
                  , n = e.type
                  , r = void 0 !== t.attr("contenteditable") && "false" !== t.attr("contenteditable");
                return "radio" === n || "checkbox" === n ? this.findByName(e.name).filter(":checked").val() : "number" === n && void 0 !== e.validity ? e.validity.badInput ? "NaN" : t.val() : (e = r ? t.text() : t.val(),
                "file" === n ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (r = e.lastIndexOf("/")) ? e.substr(r + 1) : 0 <= (r = e.lastIndexOf("\\")) ? e.substr(r + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e, n, r, i, o = c(t).rules(), s = c.map(o, function(e, t) {
                    return t
                }).length, a = !1, l = this.elementValue(t);
                for (n in "function" == typeof o.normalizer ? i = o.normalizer : "function" == typeof this.settings.normalizer && (i = this.settings.normalizer),
                i && (l = i.call(t, l),
                delete o.normalizer),
                o) {
                    r = {
                        method: n,
                        parameters: o[n]
                    };
                    try {
                        if ("dependency-mismatch" === (e = c.validator.methods[n].call(this, l, t, r.parameters)) && 1 === s)
                            a = !0;
                        else {
                            if (a = !1,
                            "pending" === e)
                                return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                            if (!e)
                                return this.formatAndAdd(t, r),
                                !1
                        }
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", e),
                        e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."),
                        e
                    }
                }
                if (!a)
                    return this.objectLength(o) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(e, t) {
                return c(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || c(e).data("msg")
            },
            customMessage: function(e, t) {
                e = this.settings.messages[e];
                return e && (e.constructor === String ? e : e[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e]
            },
            defaultMessage: function(e, t) {
                var n = this.findDefined(this.customMessage(e.name, (t = "string" == typeof t ? {
                    method: t
                } : t).method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, c.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>")
                  , r = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, t.parameters, e) : r.test(n) && (n = c.validator.format(n.replace(r, "{$1}"), t.parameters)),
                n
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }),
                this.errorMap[e.name] = n,
                this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return e = this.settings.wrapper ? e.add(e.parent(this.settings.wrapper)) : e
            },
            defaultShowErrors: function() {
                for (var e, t, n = 0; this.errorList[n]; n++)
                    t = this.errorList[n],
                    this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (n = 0; this.successList[n]; n++)
                        this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0,
                    e = this.validElements(); e[n]; n++)
                        this.settings.unhighlight.call(this, e[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return c(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, t) {
                var n, r, i, o = this.errorsFor(e), s = this.idOrName(e), a = c(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                o.html(t)) : (r = o = c("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(t || ""),
                this.settings.wrapper && (r = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(r) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, r, c(e)) : r.insertAfter(e),
                o.is("label") ? o.attr("for", s) : 0 === o.parents("label[for='" + this.escapeCssMeta(s) + "']").length && (r = o.attr("id"),
                a ? a.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (a += " " + r) : a = r,
                c(e).attr("aria-describedby", a),
                (n = this.groups[e.name]) && c.each((i = this).groups, function(e, t) {
                    t === n && c("[name='" + i.escapeCssMeta(e) + "']", i.currentForm).attr("aria-describedby", o.attr("id"))
                }))),
                !t && this.settings.success && (o.text(""),
                "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)),
                this.toShow = this.toShow.add(o)
            },
            errorsFor: function(e) {
                var t = this.escapeCssMeta(this.idOrName(e))
                  , e = c(e).attr("aria-describedby")
                  , t = "label[for='" + t + "'], label[for='" + t + "'] *";
                return e && (t = t + ", #" + this.escapeCssMeta(e).replace(/\s+/g, ", #")),
                this.errors().filter(t)
            },
            escapeCssMeta: function(e) {
                return void 0 === e ? "" : e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || !this.checkable(e) && e.id || e.name
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)),
                c(e).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(e) {
                return c(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                case "select":
                    return c("option:selected", t).length;
                case "input":
                    if (this.checkable(t))
                        return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) {
                return !this.dependTypes[_typeof(e)] || this.dependTypes[_typeof(e)](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(e, t) {
                    return !!c(e, t.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !c.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++,
                c(e).addClass(this.settings.pendingClass),
                this.pending[e.name] = !0)
            },
            stopRequest: function(e, t) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                c(e).removeClass(this.settings.pendingClass),
                t && 0 === this.pendingRequest && this.formSubmitted && this.form() && 0 === this.pendingRequest ? (c(this.currentForm).trigger("submit"),
                this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(e, t) {
                return t = "string" == typeof t && t || "remote",
                c.data(e, "previousValue") || c.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: t
                    })
                })
            },
            destroy: function() {
                this.resetForm(),
                c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : c.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var t = {}
              , e = c(e).attr("class");
            return e && c.each(e.split(" "), function() {
                this in c.validator.classRuleSettings && c.extend(t, c.validator.classRuleSettings[this])
            }),
            t
        },
        normalizeAttributeRule: function(e, t, n, r) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (r = Number(r),
            isNaN(r) && (r = void 0)),
            r || 0 === r ? e[n] = r : t === n && "range" !== t && (e["date" === t ? "dateISO" : n] = !0)
        },
        attributeRules: function(e) {
            var t, n, r = {}, i = c(e), o = e.getAttribute("type");
            for (t in c.validator.methods)
                n = "required" === t ? (n = e.getAttribute(t),
                "" === n && (n = !0),
                !!n) : i.attr(t),
                this.normalizeAttributeRule(r, o, t, n);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength,
            r
        },
        dataRules: function(e) {
            var t, n, r = {}, i = c(e), o = e.getAttribute("type");
            for (t in c.validator.methods)
                n = i.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()),
                "" === n && (n = !0),
                this.normalizeAttributeRule(r, o, t, n);
            return r
        },
        staticRules: function(e) {
            var t = {}
              , n = c.data(e.form, "validator");
            return t = n.settings.rules ? c.validator.normalizeRule(n.settings.rules[e.name]) || {} : t
        },
        normalizeRules: function(r, i) {
            return c.each(r, function(e, t) {
                if (!1 === t)
                    delete r[e];
                else if (t.param || t.depends) {
                    var n = !0;
                    switch (_typeof(t.depends)) {
                    case "string":
                        n = !!c(t.depends, i.form).length;
                        break;
                    case "function":
                        n = t.depends.call(i, i)
                    }
                    n ? r[e] = void 0 === t.param || t.param : (c.data(i.form, "validator").resetElements(c(i)),
                    delete r[e])
                }
            }),
            c.each(r, function(e, t) {
                r[e] = "function" == typeof t && "normalizer" !== e ? t(i) : t
            }),
            c.each(["minlength", "maxlength"], function() {
                r[this] && (r[this] = Number(r[this]))
            }),
            c.each(["rangelength", "range"], function() {
                var e;
                r[this] && (Array.isArray(r[this]) ? r[this] = [Number(r[this][0]), Number(r[this][1])] : "string" == typeof r[this] && (e = r[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                r[this] = [Number(e[0]), Number(e[1])]))
            }),
            c.validator.autoCreateRanges && (null != r.min && null != r.max && (r.range = [r.min, r.max],
            delete r.min,
            delete r.max),
            null != r.minlength && null != r.maxlength && (r.rangelength = [r.minlength, r.maxlength],
            delete r.minlength,
            delete r.maxlength)),
            r
        },
        normalizeRule: function(e) {
            var t;
            return "string" == typeof e && (t = {},
            c.each(e.split(/\s/), function() {
                t[this] = !0
            }),
            e = t),
            e
        },
        addMethod: function(e, t, n) {
            c.validator.methods[e] = t,
            c.validator.messages[e] = void 0 !== n ? n : c.validator.messages[e],
            t.length < 3 && c.validator.addClassRules(e, c.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, t, n) {
                return this.depend(n, t) ? "select" === t.nodeName.toLowerCase() ? (n = c(t).val()) && 0 < n.length : this.checkable(t) ? 0 < this.getLength(e, t) : null != e && 0 < e.length : "dependency-mismatch"
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})+(?::(?:[^\]\[?\/<~#`!@$^&*()+=}|:";',>{ ]|%[0-9A-Fa-f]{2})*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: (n = !1,
            function(e, t) {
                return n || (n = !0,
                this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),
                this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }
            ),
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(e, t, n) {
                e = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n <= e
            },
            maxlength: function(e, t, n) {
                e = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || e <= n
            },
            rangelength: function(e, t, n) {
                e = Array.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || n <= e
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(e, t, n) {
                function r(e) {
                    return (e = ("" + e).match(/(?:\.(\d+))?$/)) && e[1] ? e[1].length : 0
                }
                function i(e) {
                    return Math.round(e * Math.pow(10, o))
                }
                var o, s = c(t).attr("type"), a = "Step attribute on input type " + s + " is not supported.", l = new RegExp("\\b" + s + "\\b"), u = !0;
                if (s && !l.test(["text", "number", "range"].join()))
                    throw new Error(a);
                return o = r(n),
                (r(e) > o || i(e) % i(n) != 0) && (u = !1),
                this.optional(t) || u
            },
            equalTo: function(e, t, n) {
                n = c(n);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    c(t).valid()
                }),
                e === n.val()
            },
            remote: function(r, i, e, o) {
                if (this.optional(i))
                    return "dependency-mismatch";
                o = "string" == typeof o && o || "remote";
                var s, t, a = this.previousValue(i, o);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                a.originalMessage = a.originalMessage || this.settings.messages[i.name][o],
                this.settings.messages[i.name][o] = a.message,
                t = c.param(c.extend({
                    data: r
                }, (e = "string" == typeof e ? {
                    url: e
                } : e).data)),
                a.old === t ? a.valid : (a.old = t,
                (s = this).startRequest(i),
                (t = {})[i.name] = r,
                c.ajax(c.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: t,
                    context: s.currentForm,
                    success: function(e) {
                        var t, n = !0 === e || "true" === e;
                        s.settings.messages[i.name][o] = a.originalMessage,
                        n ? (t = s.formSubmitted,
                        s.resetInternals(),
                        s.toHide = s.errorsFor(i),
                        s.formSubmitted = t,
                        s.successList.push(i),
                        s.invalid[i.name] = !1,
                        s.showErrors()) : (t = {},
                        e = e || s.defaultMessage(i, {
                            method: o,
                            parameters: r
                        }),
                        t[i.name] = a.message = e,
                        s.invalid[i.name] = !0,
                        s.showErrors(t)),
                        a.valid = n,
                        s.stopRequest(i, n)
                    }
                }, e)),
                "pending")
            }
        }
    });
    var r, i = {};
    return c.ajaxPrefilter ? c.ajaxPrefilter(function(e, t, n) {
        var r = e.port;
        "abort" === e.mode && (i[r] && i[r].abort(),
        i[r] = n)
    }) : (r = c.ajax,
    c.ajax = function(e) {
        var t = ("mode"in e ? e : c.ajaxSettings).mode
          , e = ("port"in e ? e : c.ajaxSettings).port;
        return "abort" === t ? (i[e] && i[e].abort(),
        i[e] = r.apply(this, arguments),
        i[e]) : r.apply(this, arguments)
    }
    ),
    c
}),
function(h) {
    h.extend({
        progressBar: new function() {
            this.defaults = {
                steps: 20,
                stepDuration: 20,
                max: 100,
                showText: !0,
                textFormat: "percentage",
                width: 120,
                height: 12,
                callback: null,
                boxImage: "images/progressbar.gif",
                barImage: {
                    0: "images/progressbg_red.gif",
                    30: "images/progressbg_orange.gif",
                    70: "images/progressbg_green.gif"
                },
                running_value: 0,
                value: 0,
                image: null
            },
            this.construct = function(e, t) {
                var d = null
                  , f = null;
                return null != e && (isNaN(e) ? f = e : (d = e,
                null != t && (f = t))),
                this.each(function(e) {
                    var i = this
                      , o = this.config;
                    if (null != d && null != this.bar && null != this.config)
                        this.config.value = parseInt(d),
                        null != f && (i.config = h.extend(this.config, f)),
                        o = i.config;
                    else {
                        for (var t = h(this), n = ((o = h.extend({}, h.progressBar.defaults, f)).id = t.attr("id") ? t.attr("id") : Math.ceil(1e5 * Math.random()),
                        null == d && (d = t.html().replace("%", "")),
                        o.value = parseInt(d),
                        o.running_value = 0,
                        o.image = l(o),
                        ["steps", "stepDuration", "max", "width", "height", "running_value", "value"]), r = 0; r < n.length; r++)
                            o[n[r]] = parseInt(o[n[r]]);
                        t.html("");
                        var s = document.createElement("img")
                          , a = document.createElement("span")
                          , s = h(s)
                          , a = h(a);
                        (i.bar = s).attr("id", o.id + "_pbImage"),
                        a.attr("id", o.id + "_pbText"),
                        a.html(u(o)),
                        s.attr("title", u(o)),
                        s.attr("alt", u(o)),
                        s.attr("src", o.boxImage),
                        s.attr("width", o.width),
                        s.css("width", o.width + "px"),
                        s.css("height", o.height + "px"),
                        s.css("background-image", "url(" + o.image + ")"),
                        s.css("background-position", -1 * o.width + "px 50%"),
                        s.css("padding", "0"),
                        s.css("margin", "0"),
                        t.append(s),
                        t.append(a)
                    }
                    function l(e) {
                        var t = e.barImage;
                        if ("object" == _typeof(e.barImage))
                            for (var n in e.barImage) {
                                if (!(e.running_value >= parseInt(n)))
                                    break;
                                t = e.barImage[n]
                            }
                        return t
                    }
                    function u(e) {
                        if (e.showText)
                            return "percentage" == e.textFormat ? " " + Math.round(e.running_value) + "%" : "fraction" == e.textFormat ? " " + e.running_value + "/" + e.max : void 0
                    }
                    o.increment = Math.round((o.value - o.running_value) / o.steps),
                    o.increment < 0 && (o.increment *= -1),
                    o.increment < 1 && (o.increment = 1);
                    var c = setInterval(function() {
                        var e = o.width / 100
                          , t = (o.running_value > o.value ? o.running_value - o.increment < o.value ? o.running_value = o.value : o.running_value -= o.increment : o.running_value < o.value && (o.running_value + o.increment > o.value ? o.running_value = o.value : o.running_value += o.increment),
                        o.running_value == o.value && clearInterval(c),
                        h("#" + o.id + "_pbImage"))
                          , n = h("#" + o.id + "_pbText")
                          , r = l(o);
                        r != o.image && (t.css("background-image", "url(" + r + ")"),
                        o.image = r),
                        t.css("background-position", -1 * o.width + 100 * (r = o).running_value / r.max * e + "px 50%"),
                        t.attr("title", u(o)),
                        n.html(u(o)),
                        null != o.callback && "function" == typeof o.callback && o.callback(o),
                        i.config = o
                    }, o.stepDuration)
                })
            }
        }
    }),
    h.fn.extend({
        progressBar: h.progressBar.construct
    })
}(jQuery),
String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}
,
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? e(require("jquery")) : e(jQuery)
}(function(o, r) {
    var n = "plugin_hideShowPassword"
      , i = ["show", "innerToggle"]
      , t = {
        show: "infer",
        innerToggle: !1,
        enable: function() {
            var e = document.body
              , t = document.createElement("input")
              , n = !0
              , t = (e = e || document.createElement("body")).appendChild(t);
            try {
                t.setAttribute("type", "text")
            } catch (e) {
                n = !1
            }
            return e.removeChild(t),
            n
        }(),
        className: "hideShowPassword-field",
        initEvent: "hideShowPasswordInit",
        changeEvent: "passwordVisibilityChange",
        props: {
            autocapitalize: "off",
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: "false"
        },
        toggle: {
            element: '<button type="button">',
            className: "hideShowPassword-toggle",
            touchSupport: "undefined" != typeof Modernizr && Modernizr.touchevents,
            attachToEvent: "click.hideShowPassword",
            attachToTouchEvent: "touchstart.hideShowPassword mousedown.hideShowPassword",
            attachToKeyEvent: "keyup",
            attachToKeyCodes: !0,
            styles: {
                position: "absolute"
            },
            touchStyles: {
                pointerEvents: "none"
            },
            position: "infer",
            verticalAlign: "middle",
            offset: 0,
            attr: {
                role: "button",
                "aria-label": "Show Password",
                title: "Show Password",
                tabIndex: 0
            }
        },
        wrapper: {
            element: "<div>",
            className: "hideShowPassword-wrapper",
            enforceWidth: !0,
            styles: {
                position: "relative"
            },
            inheritStyles: ["display", "verticalAlign", "marginTop", "marginRight", "marginBottom", "marginLeft"],
            innerElementStyles: {
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0
            }
        },
        states: {
            shown: {
                className: "hideShowPassword-shown",
                changeEvent: "passwordShown",
                props: {
                    type: "text"
                },
                toggle: {
                    className: "hideShowPassword-toggle-hide",
                    content: "Hide",
                    attr: {
                        "aria-pressed": "true",
                        title: "Hide Password"
                    }
                }
            },
            hidden: {
                className: "hideShowPassword-hidden",
                changeEvent: "passwordHidden",
                props: {
                    type: "password"
                },
                toggle: {
                    className: "hideShowPassword-toggle-show",
                    content: "Show",
                    attr: {
                        "aria-pressed": "false",
                        title: "Show Password"
                    }
                }
            }
        }
    };
    function s(e, t) {
        this.element = o(e),
        this.wrapperElement = o(),
        this.toggleElement = o(),
        this.init(t)
    }
    s.prototype = {
        init: function(e) {
            this.update(e, t) && (this.element.addClass(this.options.className),
            this.options.innerToggle && (this.wrapElement(this.options.wrapper),
            this.initToggle(this.options.toggle),
            "string" == typeof this.options.innerToggle && (this.toggleElement.hide(),
            this.element.one(this.options.innerToggle, o.proxy(function() {
                this.toggleElement.show()
            }, this)))),
            this.element.trigger(this.options.initEvent, [this]))
        },
        update: function(e, t) {
            return this.options = this.prepareOptions(e, t),
            this.updateElement() && this.element.trigger(this.options.changeEvent, [this]).trigger(this.state().changeEvent, [this]),
            this.options.enable
        },
        toggle: function(e) {
            return this.update({
                show: e = e || "toggle"
            })
        },
        prepareOptions: function(e, t) {
            var n, r = e || {}, i = [];
            if (t = t || this.options,
            e = o.extend(!0, {}, t, e),
            Object.prototype.hasOwnProperty.call(r, "wrapper") && Object.prototype.hasOwnProperty.call(r.wrapper, "inheritStyles") && (e.wrapper.inheritStyles = r.wrapper.inheritStyles),
            e.enable && ("toggle" === e.show ? e.show = this.isType("hidden", e.states) : "infer" === e.show && (e.show = this.isType("shown", e.states)),
            "infer" === e.toggle.position && (e.toggle.position = "rtl" === this.element.css("text-direction") ? "left" : "right"),
            !Array.isArray(e.toggle.attachToKeyCodes))) {
                if (!0 === e.toggle.attachToKeyCodes)
                    switch ((n = o(e.toggle.element)).prop("tagName").toLowerCase()) {
                    case "button":
                    case "input":
                        break;
                    case "a":
                        n.filter("[href]").length && i.push(32);
                        break;
                    default:
                        i.push(32, 13)
                    }
                e.toggle.attachToKeyCodes = i
            }
            return e
        },
        updateElement: function() {
            return !(!this.options.enable || this.isType()) && (this.element.prop(o.extend({}, this.options.props, this.state().props)).addClass(this.state().className).removeClass(this.otherState().className),
            this.updateToggle(),
            !0)
        },
        isType: function(e, t) {
            return (t = t || this.options.states)[e = e || this.state(r, r, t).props.type] && (e = t[e].props.type),
            this.element.prop("type") === e
        },
        state: function(e, t, n) {
            return n = n || this.options.states,
            "boolean" == typeof (e = e === r ? this.options.show : e) && (e = e ? "shown" : "hidden"),
            n[e = t ? "shown" === e ? "hidden" : "shown" : e]
        },
        otherState: function(e) {
            return this.state(e, !0)
        },
        wrapElement: function(n) {
            var e, t = n.enforceWidth;
            return this.wrapperElement.length || (e = this.element.outerWidth(),
            o.each(n.inheritStyles, o.proxy(function(e, t) {
                n.styles[t] = this.element.css(t)
            }, this)),
            this.element.css(n.innerElementStyles),
            n.element.jquery ? this.wrapperElement = n.element : (this.element.wrap(o(n.element)),
            this.wrapperElement = this.element.parent()),
            this.wrapperElement.addClass(n.className).css(n.styles),
            !1 !== (t = !0 === t ? this.wrapperElement.outerWidth() !== e && e : t) && this.wrapperElement.css("width", t)),
            this.wrapperElement
        },
        initToggle: function(e) {
            return this.toggleElement.length || (this.toggleElement = o(e.element).attr(e.attr).addClass(e.className).css(e.styles).appendTo(this.wrapperElement),
            this.updateToggle(),
            this.positionToggle(e.position, e.verticalAlign, e.offset),
            e.touchSupport ? (this.toggleElement.css(e.touchStyles),
            this.element.on(e.attachToTouchEvent, o.proxy(this.toggleTouchEvent, this))) : this.toggleElement.on(e.attachToEvent, o.proxy(this.toggleEvent, this)),
            e.attachToKeyCodes.length && this.toggleElement.on(e.attachToKeyEvent, o.proxy(this.toggleKeyEvent, this))),
            this.toggleElement
        },
        positionToggle: function(e, t, n) {
            var r = {};
            switch (r[e] = n,
            t) {
            case "top":
            case "bottom":
                r[t] = n;
                break;
            case "middle":
                r.top = "50%",
                r.marginTop = this.toggleElement.outerHeight() / -2
            }
            return this.toggleElement.css(r)
        },
        updateToggle: function(e, t) {
            var n;
            return this.toggleElement.length && (n = "padding-" + this.options.toggle.position,
            e = e || this.state().toggle,
            t = t || this.otherState().toggle,
            this.toggleElement.attr(e.attr).addClass(e.className).removeClass(t.className).html(e.content),
            t = this.toggleElement.outerWidth() + 2 * this.options.toggle.offset,
            this.element.css(n) !== t && this.element.css(n, t)),
            this.toggleElement
        },
        toggleEvent: function(e) {
            e.preventDefault(),
            this.toggle()
        },
        toggleKeyEvent: function(n) {
            o.each(this.options.toggle.attachToKeyCodes, o.proxy(function(e, t) {
                if (n.which === t)
                    return this.toggleEvent(n),
                    !1
            }, this))
        },
        toggleTouchEvent: function(e) {
            var t, n, r = this.toggleElement.offset().left;
            r && (t = e.pageX || e.originalEvent.pageX,
            r = "left" === this.options.toggle.position ? (n = t,
            r += this.toggleElement.outerWidth()) : (n = r,
            t),
            n <= r && this.toggleEvent(e))
        }
    },
    o.fn.hideShowPassword = function() {
        var r = {};
        return o.each(arguments, function(e, t) {
            var n = {};
            if ("object" === _typeof(t))
                n = t;
            else {
                if (!i[e])
                    return !1;
                n[i[e]] = t
            }
            o.extend(!0, r, n)
        }),
        this.each(function() {
            var e = o(this)
              , t = e.data(n);
            t ? t.update(r) : e.data(n, new s(this,r))
        })
    }
    ,
    o.each({
        show: !0,
        hide: !1,
        toggle: "toggle"
    }, function(e, n) {
        o.fn[e + "Password"] = function(e, t) {
            return this.hideShowPassword(n, e, t)
        }
    })
});
