(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        a(r);
    new MutationObserver(r => {
        for (const f of r)
            if (f.type === "childList")
                for (const o of f.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && a(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function u(r) {
        const f = {};
        return r.integrity && (f.integrity = r.integrity),
        r.referrerPolicy && (f.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? f.credentials = "include" : r.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function a(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const f = u(r);
        fetch(r.href, f)
    }
}
)();
function Tp(d) {
    return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d
}
var Md = {
    exports: {}
}
  , qr = {};
var D1;
function l2() {
    if (D1)
        return qr;
    D1 = 1;
    var d = Symbol.for("react.transitional.element")
      , n = Symbol.for("react.fragment");
    function u(a, r, f) {
        var o = null;
        if (f !== void 0 && (o = "" + f),
        r.key !== void 0 && (o = "" + r.key),
        "key"in r) {
            f = {};
            for (var h in r)
                h !== "key" && (f[h] = r[h])
        } else
            f = r;
        return r = f.ref,
        {
            $$typeof: d,
            type: a,
            key: o,
            ref: r !== void 0 ? r : null,
            props: f
        }
    }
    return qr.Fragment = n,
    qr.jsx = u,
    qr.jsxs = u,
    qr
}
var N1;
function n2() {
    return N1 || (N1 = 1,
    Md.exports = l2()),
    Md.exports
}
var z = n2()
  , Cd = {
    exports: {}
}
  , St = {};
var w1;
function i2() {
    if (w1)
        return St;
    w1 = 1;
    var d = Symbol.for("react.transitional.element")
      , n = Symbol.for("react.portal")
      , u = Symbol.for("react.fragment")
      , a = Symbol.for("react.strict_mode")
      , r = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , o = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , g = Symbol.for("react.memo")
      , _ = Symbol.for("react.lazy")
      , y = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function b(E) {
        return E === null || typeof E != "object" ? null : (E = S && E[S] || E["@@iterator"],
        typeof E == "function" ? E : null)
    }
    var M = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , x = Object.assign
      , D = {};
    function B(E, L, I) {
        this.props = E,
        this.context = L,
        this.refs = D,
        this.updater = I || M
    }
    B.prototype.isReactComponent = {},
    B.prototype.setState = function(E, L) {
        if (typeof E != "object" && typeof E != "function" && E != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, E, L, "setState")
    }
    ,
    B.prototype.forceUpdate = function(E) {
        this.updater.enqueueForceUpdate(this, E, "forceUpdate")
    }
    ;
    function G() {}
    G.prototype = B.prototype;
    function Z(E, L, I) {
        this.props = E,
        this.context = L,
        this.refs = D,
        this.updater = I || M
    }
    var Y = Z.prototype = new G;
    Y.constructor = Z,
    x(Y, B.prototype),
    Y.isPureReactComponent = !0;
    var V = Array.isArray;
    function F() {}
    var j = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , W = Object.prototype.hasOwnProperty;
    function J(E, L, I) {
        var tt = I.ref;
        return {
            $$typeof: d,
            type: E,
            key: L,
            ref: tt !== void 0 ? tt : null,
            props: I
        }
    }
    function $(E, L) {
        return J(E.type, L, E.props)
    }
    function ft(E) {
        return typeof E == "object" && E !== null && E.$$typeof === d
    }
    function P(E) {
        var L = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + E.replace(/[=:]/g, function(I) {
            return L[I]
        })
    }
    var xt = /\/+/g;
    function pt(E, L) {
        return typeof E == "object" && E !== null && E.key != null ? P("" + E.key) : L.toString(36)
    }
    function vt(E) {
        switch (E.status) {
        case "fulfilled":
            return E.value;
        case "rejected":
            throw E.reason;
        default:
            switch (typeof E.status == "string" ? E.then(F, F) : (E.status = "pending",
            E.then(function(L) {
                E.status === "pending" && (E.status = "fulfilled",
                E.value = L)
            }, function(L) {
                E.status === "pending" && (E.status = "rejected",
                E.reason = L)
            })),
            E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason
            }
        }
        throw E
    }
    function N(E, L, I, tt, ut) {
        var dt = typeof E;
        (dt === "undefined" || dt === "boolean") && (E = null);
        var ht = !1;
        if (E === null)
            ht = !0;
        else
            switch (dt) {
            case "bigint":
            case "string":
            case "number":
                ht = !0;
                break;
            case "object":
                switch (E.$$typeof) {
                case d:
                case n:
                    ht = !0;
                    break;
                case _:
                    return ht = E._init,
                    N(ht(E._payload), L, I, tt, ut)
                }
            }
        if (ht)
            return ut = ut(E),
            ht = tt === "" ? "." + pt(E, 0) : tt,
            V(ut) ? (I = "",
            ht != null && (I = ht.replace(xt, "$&/") + "/"),
            N(ut, L, I, "", function(Ml) {
                return Ml
            })) : ut != null && (ft(ut) && (ut = $(ut, I + (ut.key == null || E && E.key === ut.key ? "" : ("" + ut.key).replace(xt, "$&/") + "/") + ht)),
            L.push(ut)),
            1;
        ht = 0;
        var Zt = tt === "" ? "." : tt + ":";
        if (V(E))
            for (var Dt = 0; Dt < E.length; Dt++)
                tt = E[Dt],
                dt = Zt + pt(tt, Dt),
                ht += N(tt, L, I, dt, ut);
        else if (Dt = b(E),
        typeof Dt == "function")
            for (E = Dt.call(E),
            Dt = 0; !(tt = E.next()).done; )
                tt = tt.value,
                dt = Zt + pt(tt, Dt++),
                ht += N(tt, L, I, dt, ut);
        else if (dt === "object") {
            if (typeof E.then == "function")
                return N(vt(E), L, I, tt, ut);
            throw L = String(E),
            Error("Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ht
    }
    function k(E, L, I) {
        if (E == null)
            return E;
        var tt = []
          , ut = 0;
        return N(E, tt, "", "", function(dt) {
            return L.call(I, dt, ut++)
        }),
        tt
    }
    function et(E) {
        if (E._status === -1) {
            var L = E._result;
            L = L(),
            L.then(function(I) {
                (E._status === 0 || E._status === -1) && (E._status = 1,
                E._result = I)
            }, function(I) {
                (E._status === 0 || E._status === -1) && (E._status = 2,
                E._result = I)
            }),
            E._status === -1 && (E._status = 0,
            E._result = L)
        }
        if (E._status === 1)
            return E._result.default;
        throw E._result
    }
    var ot = typeof reportError == "function" ? reportError : function(E) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var L = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
                error: E
            });
            if (!window.dispatchEvent(L))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", E);
            return
        }
        console.error(E)
    }
      , C = {
        map: k,
        forEach: function(E, L, I) {
            k(E, function() {
                L.apply(this, arguments)
            }, I)
        },
        count: function(E) {
            var L = 0;
            return k(E, function() {
                L++
            }),
            L
        },
        toArray: function(E) {
            return k(E, function(L) {
                return L
            }) || []
        },
        only: function(E) {
            if (!ft(E))
                throw Error("React.Children.only expected to receive a single React element child.");
            return E
        }
    };
    return St.Activity = y,
    St.Children = C,
    St.Component = B,
    St.Fragment = u,
    St.Profiler = r,
    St.PureComponent = Z,
    St.StrictMode = a,
    St.Suspense = p,
    St.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j,
    St.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(E) {
            return j.H.useMemoCache(E)
        }
    },
    St.cache = function(E) {
        return function() {
            return E.apply(null, arguments)
        }
    }
    ,
    St.cacheSignal = function() {
        return null
    }
    ,
    St.cloneElement = function(E, L, I) {
        if (E == null)
            throw Error("The argument must be a React element, but you passed " + E + ".");
        var tt = x({}, E.props)
          , ut = E.key;
        if (L != null)
            for (dt in L.key !== void 0 && (ut = "" + L.key),
            L)
                !W.call(L, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && L.ref === void 0 || (tt[dt] = L[dt]);
        var dt = arguments.length - 2;
        if (dt === 1)
            tt.children = I;
        else if (1 < dt) {
            for (var ht = Array(dt), Zt = 0; Zt < dt; Zt++)
                ht[Zt] = arguments[Zt + 2];
            tt.children = ht
        }
        return J(E.type, ut, tt)
    }
    ,
    St.createContext = function(E) {
        return E = {
            $$typeof: o,
            _currentValue: E,
            _currentValue2: E,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        E.Provider = E,
        E.Consumer = {
            $$typeof: f,
            _context: E
        },
        E
    }
    ,
    St.createElement = function(E, L, I) {
        var tt, ut = {}, dt = null;
        if (L != null)
            for (tt in L.key !== void 0 && (dt = "" + L.key),
            L)
                W.call(L, tt) && tt !== "key" && tt !== "__self" && tt !== "__source" && (ut[tt] = L[tt]);
        var ht = arguments.length - 2;
        if (ht === 1)
            ut.children = I;
        else if (1 < ht) {
            for (var Zt = Array(ht), Dt = 0; Dt < ht; Dt++)
                Zt[Dt] = arguments[Dt + 2];
            ut.children = Zt
        }
        if (E && E.defaultProps)
            for (tt in ht = E.defaultProps,
            ht)
                ut[tt] === void 0 && (ut[tt] = ht[tt]);
        return J(E, dt, ut)
    }
    ,
    St.createRef = function() {
        return {
            current: null
        }
    }
    ,
    St.forwardRef = function(E) {
        return {
            $$typeof: h,
            render: E
        }
    }
    ,
    St.isValidElement = ft,
    St.lazy = function(E) {
        return {
            $$typeof: _,
            _payload: {
                _status: -1,
                _result: E
            },
            _init: et
        }
    }
    ,
    St.memo = function(E, L) {
        return {
            $$typeof: g,
            type: E,
            compare: L === void 0 ? null : L
        }
    }
    ,
    St.startTransition = function(E) {
        var L = j.T
          , I = {};
        j.T = I;
        try {
            var tt = E()
              , ut = j.S;
            ut !== null && ut(I, tt),
            typeof tt == "object" && tt !== null && typeof tt.then == "function" && tt.then(F, ot)
        } catch (dt) {
            ot(dt)
        } finally {
            L !== null && I.types !== null && (L.types = I.types),
            j.T = L
        }
    }
    ,
    St.unstable_useCacheRefresh = function() {
        return j.H.useCacheRefresh()
    }
    ,
    St.use = function(E) {
        return j.H.use(E)
    }
    ,
    St.useActionState = function(E, L, I) {
        return j.H.useActionState(E, L, I)
    }
    ,
    St.useCallback = function(E, L) {
        return j.H.useCallback(E, L)
    }
    ,
    St.useContext = function(E) {
        return j.H.useContext(E)
    }
    ,
    St.useDebugValue = function() {}
    ,
    St.useDeferredValue = function(E, L) {
        return j.H.useDeferredValue(E, L)
    }
    ,
    St.useEffect = function(E, L) {
        return j.H.useEffect(E, L)
    }
    ,
    St.useEffectEvent = function(E) {
        return j.H.useEffectEvent(E)
    }
    ,
    St.useId = function() {
        return j.H.useId()
    }
    ,
    St.useImperativeHandle = function(E, L, I) {
        return j.H.useImperativeHandle(E, L, I)
    }
    ,
    St.useInsertionEffect = function(E, L) {
        return j.H.useInsertionEffect(E, L)
    }
    ,
    St.useLayoutEffect = function(E, L) {
        return j.H.useLayoutEffect(E, L)
    }
    ,
    St.useMemo = function(E, L) {
        return j.H.useMemo(E, L)
    }
    ,
    St.useOptimistic = function(E, L) {
        return j.H.useOptimistic(E, L)
    }
    ,
    St.useReducer = function(E, L, I) {
        return j.H.useReducer(E, L, I)
    }
    ,
    St.useRef = function(E) {
        return j.H.useRef(E)
    }
    ,
    St.useState = function(E) {
        return j.H.useState(E)
    }
    ,
    St.useSyncExternalStore = function(E, L, I) {
        return j.H.useSyncExternalStore(E, L, I)
    }
    ,
    St.useTransition = function() {
        return j.H.useTransition()
    }
    ,
    St.version = "19.2.4",
    St
}
var R1;
function vh() {
    return R1 || (R1 = 1,
    Cd.exports = i2()),
    Cd.exports
}
var gt = vh();
const Ke = Tp(gt);
var Od = {
    exports: {}
}
  , Lr = {}
  , Dd = {
    exports: {}
}
  , Nd = {};
var j1;
function a2() {
    return j1 || (j1 = 1,
    (function(d) {
        function n(N, k) {
            var et = N.length;
            N.push(k);
            t: for (; 0 < et; ) {
                var ot = et - 1 >>> 1
                  , C = N[ot];
                if (0 < r(C, k))
                    N[ot] = k,
                    N[et] = C,
                    et = ot;
                else
                    break t
            }
        }
        function u(N) {
            return N.length === 0 ? null : N[0]
        }
        function a(N) {
            if (N.length === 0)
                return null;
            var k = N[0]
              , et = N.pop();
            if (et !== k) {
                N[0] = et;
                t: for (var ot = 0, C = N.length, E = C >>> 1; ot < E; ) {
                    var L = 2 * (ot + 1) - 1
                      , I = N[L]
                      , tt = L + 1
                      , ut = N[tt];
                    if (0 > r(I, et))
                        tt < C && 0 > r(ut, I) ? (N[ot] = ut,
                        N[tt] = et,
                        ot = tt) : (N[ot] = I,
                        N[L] = et,
                        ot = L);
                    else if (tt < C && 0 > r(ut, et))
                        N[ot] = ut,
                        N[tt] = et,
                        ot = tt;
                    else
                        break t
                }
            }
            return k
        }
        function r(N, k) {
            var et = N.sortIndex - k.sortIndex;
            return et !== 0 ? et : N.id - k.id
        }
        if (d.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            d.unstable_now = function() {
                return f.now()
            }
        } else {
            var o = Date
              , h = o.now();
            d.unstable_now = function() {
                return o.now() - h
            }
        }
        var p = []
          , g = []
          , _ = 1
          , y = null
          , S = 3
          , b = !1
          , M = !1
          , x = !1
          , D = !1
          , B = typeof setTimeout == "function" ? setTimeout : null
          , G = typeof clearTimeout == "function" ? clearTimeout : null
          , Z = typeof setImmediate < "u" ? setImmediate : null;
        function Y(N) {
            for (var k = u(g); k !== null; ) {
                if (k.callback === null)
                    a(g);
                else if (k.startTime <= N)
                    a(g),
                    k.sortIndex = k.expirationTime,
                    n(p, k);
                else
                    break;
                k = u(g)
            }
        }
        function V(N) {
            if (x = !1,
            Y(N),
            !M)
                if (u(p) !== null)
                    M = !0,
                    F || (F = !0,
                    P());
                else {
                    var k = u(g);
                    k !== null && vt(V, k.startTime - N)
                }
        }
        var F = !1
          , j = -1
          , W = 5
          , J = -1;
        function $() {
            return D ? !0 : !(d.unstable_now() - J < W)
        }
        function ft() {
            if (D = !1,
            F) {
                var N = d.unstable_now();
                J = N;
                var k = !0;
                try {
                    t: {
                        M = !1,
                        x && (x = !1,
                        G(j),
                        j = -1),
                        b = !0;
                        var et = S;
                        try {
                            e: {
                                for (Y(N),
                                y = u(p); y !== null && !(y.expirationTime > N && $()); ) {
                                    var ot = y.callback;
                                    if (typeof ot == "function") {
                                        y.callback = null,
                                        S = y.priorityLevel;
                                        var C = ot(y.expirationTime <= N);
                                        if (N = d.unstable_now(),
                                        typeof C == "function") {
                                            y.callback = C,
                                            Y(N),
                                            k = !0;
                                            break e
                                        }
                                        y === u(p) && a(p),
                                        Y(N)
                                    } else
                                        a(p);
                                    y = u(p)
                                }
                                if (y !== null)
                                    k = !0;
                                else {
                                    var E = u(g);
                                    E !== null && vt(V, E.startTime - N),
                                    k = !1
                                }
                            }
                            break t
                        } finally {
                            y = null,
                            S = et,
                            b = !1
                        }
                        k = void 0
                    }
                } finally {
                    k ? P() : F = !1
                }
            }
        }
        var P;
        if (typeof Z == "function")
            P = function() {
                Z(ft)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var xt = new MessageChannel
              , pt = xt.port2;
            xt.port1.onmessage = ft,
            P = function() {
                pt.postMessage(null)
            }
        } else
            P = function() {
                B(ft, 0)
            }
            ;
        function vt(N, k) {
            j = B(function() {
                N(d.unstable_now())
            }, k)
        }
        d.unstable_IdlePriority = 5,
        d.unstable_ImmediatePriority = 1,
        d.unstable_LowPriority = 4,
        d.unstable_NormalPriority = 3,
        d.unstable_Profiling = null,
        d.unstable_UserBlockingPriority = 2,
        d.unstable_cancelCallback = function(N) {
            N.callback = null
        }
        ,
        d.unstable_forceFrameRate = function(N) {
            0 > N || 125 < N ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < N ? Math.floor(1e3 / N) : 5
        }
        ,
        d.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        d.unstable_next = function(N) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var k = 3;
                break;
            default:
                k = S
            }
            var et = S;
            S = k;
            try {
                return N()
            } finally {
                S = et
            }
        }
        ,
        d.unstable_requestPaint = function() {
            D = !0
        }
        ,
        d.unstable_runWithPriority = function(N, k) {
            switch (N) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                N = 3
            }
            var et = S;
            S = N;
            try {
                return k()
            } finally {
                S = et
            }
        }
        ,
        d.unstable_scheduleCallback = function(N, k, et) {
            var ot = d.unstable_now();
            switch (typeof et == "object" && et !== null ? (et = et.delay,
            et = typeof et == "number" && 0 < et ? ot + et : ot) : et = ot,
            N) {
            case 1:
                var C = -1;
                break;
            case 2:
                C = 250;
                break;
            case 5:
                C = 1073741823;
                break;
            case 4:
                C = 1e4;
                break;
            default:
                C = 5e3
            }
            return C = et + C,
            N = {
                id: _++,
                callback: k,
                priorityLevel: N,
                startTime: et,
                expirationTime: C,
                sortIndex: -1
            },
            et > ot ? (N.sortIndex = et,
            n(g, N),
            u(p) === null && N === u(g) && (x ? (G(j),
            j = -1) : x = !0,
            vt(V, et - ot))) : (N.sortIndex = C,
            n(p, N),
            M || b || (M = !0,
            F || (F = !0,
            P()))),
            N
        }
        ,
        d.unstable_shouldYield = $,
        d.unstable_wrapCallback = function(N) {
            var k = S;
            return function() {
                var et = S;
                S = k;
                try {
                    return N.apply(this, arguments)
                } finally {
                    S = et
                }
            }
        }
    }
    )(Nd)),
    Nd
}
var U1;
function u2() {
    return U1 || (U1 = 1,
    Dd.exports = a2()),
    Dd.exports
}
var wd = {
    exports: {}
}
  , fl = {};
var H1;
function r2() {
    if (H1)
        return fl;
    H1 = 1;
    var d = vh();
    function n(p) {
        var g = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            g += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var _ = 2; _ < arguments.length; _++)
                g += "&args[]=" + encodeURIComponent(arguments[_])
        }
        return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u() {}
    var a = {
        d: {
            f: u,
            r: function() {
                throw Error(n(522))
            },
            D: u,
            C: u,
            L: u,
            m: u,
            X: u,
            S: u,
            M: u
        },
        p: 0,
        findDOMNode: null
    }
      , r = Symbol.for("react.portal");
    function f(p, g, _) {
        var y = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: r,
            key: y == null ? null : "" + y,
            children: p,
            containerInfo: g,
            implementation: _
        }
    }
    var o = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(p, g) {
        if (p === "font")
            return "";
        if (typeof g == "string")
            return g === "use-credentials" ? g : ""
    }
    return fl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a,
    fl.createPortal = function(p, g) {
        var _ = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
            throw Error(n(299));
        return f(p, g, null, _)
    }
    ,
    fl.flushSync = function(p) {
        var g = o.T
          , _ = a.p;
        try {
            if (o.T = null,
            a.p = 2,
            p)
                return p()
        } finally {
            o.T = g,
            a.p = _,
            a.d.f()
        }
    }
    ,
    fl.preconnect = function(p, g) {
        typeof p == "string" && (g ? (g = g.crossOrigin,
        g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null,
        a.d.C(p, g))
    }
    ,
    fl.prefetchDNS = function(p) {
        typeof p == "string" && a.d.D(p)
    }
    ,
    fl.preinit = function(p, g) {
        if (typeof p == "string" && g && typeof g.as == "string") {
            var _ = g.as
              , y = h(_, g.crossOrigin)
              , S = typeof g.integrity == "string" ? g.integrity : void 0
              , b = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
            _ === "style" ? a.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
                crossOrigin: y,
                integrity: S,
                fetchPriority: b
            }) : _ === "script" && a.d.X(p, {
                crossOrigin: y,
                integrity: S,
                fetchPriority: b,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0
            })
        }
    }
    ,
    fl.preinitModule = function(p, g) {
        if (typeof p == "string")
            if (typeof g == "object" && g !== null) {
                if (g.as == null || g.as === "script") {
                    var _ = h(g.as, g.crossOrigin);
                    a.d.M(p, {
                        crossOrigin: _,
                        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                        nonce: typeof g.nonce == "string" ? g.nonce : void 0
                    })
                }
            } else
                g == null && a.d.M(p)
    }
    ,
    fl.preload = function(p, g) {
        if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
            var _ = g.as
              , y = h(_, g.crossOrigin);
            a.d.L(p, _, {
                crossOrigin: y,
                integrity: typeof g.integrity == "string" ? g.integrity : void 0,
                nonce: typeof g.nonce == "string" ? g.nonce : void 0,
                type: typeof g.type == "string" ? g.type : void 0,
                fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
                referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
                imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
                imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
                media: typeof g.media == "string" ? g.media : void 0
            })
        }
    }
    ,
    fl.preloadModule = function(p, g) {
        if (typeof p == "string")
            if (g) {
                var _ = h(g.as, g.crossOrigin);
                a.d.m(p, {
                    as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
                    crossOrigin: _,
                    integrity: typeof g.integrity == "string" ? g.integrity : void 0
                })
            } else
                a.d.m(p)
    }
    ,
    fl.requestFormReset = function(p) {
        a.d.r(p)
    }
    ,
    fl.unstable_batchedUpdates = function(p, g) {
        return p(g)
    }
    ,
    fl.useFormState = function(p, g, _) {
        return o.H.useFormState(p, g, _)
    }
    ,
    fl.useFormStatus = function() {
        return o.H.useHostTransitionStatus()
    }
    ,
    fl.version = "19.2.4",
    fl
}
var B1;
function s2() {
    if (B1)
        return wd.exports;
    B1 = 1;
    function d() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)
            } catch (n) {
                console.error(n)
            }
    }
    return d(),
    wd.exports = r2(),
    wd.exports
}
var Y1;
function c2() {
    if (Y1)
        return Lr;
    Y1 = 1;
    var d = u2()
      , n = vh()
      , u = s2();
    function a(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var l = 2; l < arguments.length; l++)
                e += "&args[]=" + encodeURIComponent(arguments[l])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function f(t) {
        var e = t
          , l = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (l = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? l : null
    }
    function o(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function h(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function p(t) {
        if (f(t) !== t)
            throw Error(a(188))
    }
    function g(t) {
        var e = t.alternate;
        if (!e) {
            if (e = f(t),
            e === null)
                throw Error(a(188));
            return e !== t ? null : t
        }
        for (var l = t, i = e; ; ) {
            var s = l.return;
            if (s === null)
                break;
            var c = s.alternate;
            if (c === null) {
                if (i = s.return,
                i !== null) {
                    l = i;
                    continue
                }
                break
            }
            if (s.child === c.child) {
                for (c = s.child; c; ) {
                    if (c === l)
                        return p(s),
                        t;
                    if (c === i)
                        return p(s),
                        e;
                    c = c.sibling
                }
                throw Error(a(188))
            }
            if (l.return !== i.return)
                l = s,
                i = c;
            else {
                for (var m = !1, v = s.child; v; ) {
                    if (v === l) {
                        m = !0,
                        l = s,
                        i = c;
                        break
                    }
                    if (v === i) {
                        m = !0,
                        i = s,
                        l = c;
                        break
                    }
                    v = v.sibling
                }
                if (!m) {
                    for (v = c.child; v; ) {
                        if (v === l) {
                            m = !0,
                            l = c,
                            i = s;
                            break
                        }
                        if (v === i) {
                            m = !0,
                            i = c,
                            l = s;
                            break
                        }
                        v = v.sibling
                    }
                    if (!m)
                        throw Error(a(189))
                }
            }
            if (l.alternate !== i)
                throw Error(a(190))
        }
        if (l.tag !== 3)
            throw Error(a(188));
        return l.stateNode.current === l ? t : e
    }
    function _(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = _(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var y = Object.assign
      , S = Symbol.for("react.element")
      , b = Symbol.for("react.transitional.element")
      , M = Symbol.for("react.portal")
      , x = Symbol.for("react.fragment")
      , D = Symbol.for("react.strict_mode")
      , B = Symbol.for("react.profiler")
      , G = Symbol.for("react.consumer")
      , Z = Symbol.for("react.context")
      , Y = Symbol.for("react.forward_ref")
      , V = Symbol.for("react.suspense")
      , F = Symbol.for("react.suspense_list")
      , j = Symbol.for("react.memo")
      , W = Symbol.for("react.lazy")
      , J = Symbol.for("react.activity")
      , $ = Symbol.for("react.memo_cache_sentinel")
      , ft = Symbol.iterator;
    function P(t) {
        return t === null || typeof t != "object" ? null : (t = ft && t[ft] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var xt = Symbol.for("react.client.reference");
    function pt(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === xt ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case x:
            return "Fragment";
        case B:
            return "Profiler";
        case D:
            return "StrictMode";
        case V:
            return "Suspense";
        case F:
            return "SuspenseList";
        case J:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case M:
                return "Portal";
            case Z:
                return t.displayName || "Context";
            case G:
                return (t._context.displayName || "Context") + ".Consumer";
            case Y:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case j:
                return e = t.displayName || null,
                e !== null ? e : pt(t.type) || "Memo";
            case W:
                e = t._payload,
                t = t._init;
                try {
                    return pt(t(e))
                } catch {}
            }
        return null
    }
    var vt = Array.isArray
      , N = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , k = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , et = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , ot = []
      , C = -1;
    function E(t) {
        return {
            current: t
        }
    }
    function L(t) {
        0 > C || (t.current = ot[C],
        ot[C] = null,
        C--)
    }
    function I(t, e) {
        C++,
        ot[C] = t.current,
        t.current = e
    }
    var tt = E(null)
      , ut = E(null)
      , dt = E(null)
      , ht = E(null);
    function Zt(t, e) {
        switch (I(dt, e),
        I(ut, t),
        I(tt, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? Ig(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = Ig(e),
                t = t1(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        L(tt),
        I(tt, t)
    }
    function Dt() {
        L(tt),
        L(ut),
        L(dt)
    }
    function Ml(t) {
        t.memoizedState !== null && I(ht, t);
        var e = tt.current
          , l = t1(e, t.type);
        e !== l && (I(ut, t),
        I(tt, l))
    }
    function Re(t) {
        ut.current === t && (L(tt),
        L(ut)),
        ht.current === t && (L(ht),
        Ur._currentValue = et)
    }
    var Ge, Bt;
    function Ft(t) {
        if (Ge === void 0)
            try {
                throw Error()
            } catch (l) {
                var e = l.stack.trim().match(/\n( *(at )?)/);
                Ge = e && e[1] || "",
                Bt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ge + t + Bt
    }
    var Je = !1;
    function Ie(t, e) {
        if (!t || Je)
            return "";
        Je = !0;
        var l = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (H) {
                                    var U = H
                                }
                                Reflect.construct(t, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (H) {
                                    U = H
                                }
                                t.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (H) {
                                U = H
                            }
                            (K = t()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (H) {
                        if (H && U && typeof H.stack == "string")
                            return [H.stack, U.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var s = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            s && s.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = i.DetermineComponentFrameRoot()
              , m = c[0]
              , v = c[1];
            if (m && v) {
                var T = m.split(`
`)
                  , R = v.split(`
`);
                for (s = i = 0; i < T.length && !T[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; s < R.length && !R[s].includes("DetermineComponentFrameRoot"); )
                    s++;
                if (i === T.length || s === R.length)
                    for (i = T.length - 1,
                    s = R.length - 1; 1 <= i && 0 <= s && T[i] !== R[s]; )
                        s--;
                for (; 1 <= i && 0 <= s; i--,
                s--)
                    if (T[i] !== R[s]) {
                        if (i !== 1 || s !== 1)
                            do
                                if (i--,
                                s--,
                                0 > s || T[i] !== R[s]) {
                                    var X = `
` + T[i].replace(" at new ", " at ");
                                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)),
                                    X
                                }
                            while (1 <= i && 0 <= s);
                        break
                    }
            }
        } finally {
            Je = !1,
            Error.prepareStackTrace = l
        }
        return (l = t ? t.displayName || t.name : "") ? Ft(l) : ""
    }
    function q(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return Ft(t.type);
        case 16:
            return Ft("Lazy");
        case 13:
            return t.child !== e && e !== null ? Ft("Suspense Fallback") : Ft("Suspense");
        case 19:
            return Ft("SuspenseList");
        case 0:
        case 15:
            return Ie(t.type, !1);
        case 11:
            return Ie(t.type.render, !1);
        case 1:
            return Ie(t.type, !0);
        case 31:
            return Ft("Activity");
        default:
            return ""
        }
    }
    function ul(t) {
        try {
            var e = ""
              , l = null;
            do
                e += q(t, l),
                l = t,
                t = t.return;
            while (t);
            return e
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var Vl = Object.prototype.hasOwnProperty
      , on = d.unstable_scheduleCallback
      , ie = d.unstable_cancelCallback
      , jn = d.unstable_shouldYield
      , Xn = d.unstable_requestPaint
      , Me = d.unstable_now
      , je = d.unstable_getCurrentPriorityLevel
      , Un = d.unstable_ImmediatePriority
      , fe = d.unstable_UserBlockingPriority
      , rl = d.unstable_NormalPriority
      , Cl = d.unstable_LowPriority
      , dn = d.unstable_IdlePriority
      , ga = d.log
      , xe = d.unstable_setDisableYieldValue
      , Gn = null
      , me = null;
    function pl(t) {
        if (typeof ga == "function" && xe(t),
        me && typeof me.setStrictMode == "function")
            try {
                me.setStrictMode(Gn, t)
            } catch {}
    }
    var Ue = Math.clz32 ? Math.clz32 : Mt
      , Vn = Math.log
      , ii = Math.LN2;
    function Mt(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Vn(t) / ii | 0) | 0
    }
    var hn = 256
      , sl = 262144
      , cl = 4194304;
    function Ve(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function mn(t, e, l) {
        var i = t.pendingLanes;
        if (i === 0)
            return 0;
        var s = 0
          , c = t.suspendedLanes
          , m = t.pingedLanes;
        t = t.warmLanes;
        var v = i & 134217727;
        return v !== 0 ? (i = v & ~c,
        i !== 0 ? s = Ve(i) : (m &= v,
        m !== 0 ? s = Ve(m) : l || (l = v & ~t,
        l !== 0 && (s = Ve(l))))) : (v = i & ~c,
        v !== 0 ? s = Ve(v) : m !== 0 ? s = Ve(m) : l || (l = i & ~t,
        l !== 0 && (s = Ve(l)))),
        s === 0 ? 0 : e !== 0 && e !== s && (e & c) === 0 && (c = s & -s,
        l = e & -e,
        c >= l || c === 32 && (l & 4194048) !== 0) ? e : s
    }
    function gn(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function Hn(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Di() {
        var t = cl;
        return cl <<= 1,
        (cl & 62914560) === 0 && (cl = 4194304),
        t
    }
    function yt(t) {
        for (var e = [], l = 0; 31 > l; l++)
            e.push(t);
        return e
    }
    function rt(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function Vt(t, e, l, i, s, c) {
        var m = t.pendingLanes;
        t.pendingLanes = l,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= l,
        t.entangledLanes &= l,
        t.errorRecoveryDisabledLanes &= l,
        t.shellSuspendCounter = 0;
        var v = t.entanglements
          , T = t.expirationTimes
          , R = t.hiddenUpdates;
        for (l = m & ~l; 0 < l; ) {
            var X = 31 - Ue(l)
              , K = 1 << X;
            v[X] = 0,
            T[X] = -1;
            var U = R[X];
            if (U !== null)
                for (R[X] = null,
                X = 0; X < U.length; X++) {
                    var H = U[X];
                    H !== null && (H.lane &= -536870913)
                }
            l &= ~K
        }
        i !== 0 && lt(t, i, 0),
        c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e))
    }
    function lt(t, e, l) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var i = 31 - Ue(e);
        t.entangledLanes |= e,
        t.entanglements[i] = t.entanglements[i] | 1073741824 | l & 261930
    }
    function bt(t, e) {
        var l = t.entangledLanes |= e;
        for (t = t.entanglements; l; ) {
            var i = 31 - Ue(l)
              , s = 1 << i;
            s & e | t[i] & e && (t[i] |= e),
            l &= ~s
        }
    }
    function st(t, e) {
        var l = e & -e;
        return l = (l & 42) !== 0 ? 1 : _t(l),
        (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    }
    function _t(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function Se(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Nt() {
        var t = k.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : T1(t.type))
    }
    function oe(t, e) {
        var l = k.p;
        try {
            return k.p = t,
            e()
        } finally {
            k.p = l
        }
    }
    var ue = Math.random().toString(36).slice(2)
      , zt = "__reactFiber$" + ue
      , Ct = "__reactProps$" + ue
      , Gt = "__reactContainer$" + ue
      , _l = "__reactEvents$" + ue
      , re = "__reactListeners$" + ue
      , vl = "__reactHandles$" + ue
      , kl = "__reactResources$" + ue
      , ge = "__reactMarker$" + ue;
    function Ce(t) {
        delete t[zt],
        delete t[Ct],
        delete t[_l],
        delete t[re],
        delete t[vl]
    }
    function pe(t) {
        var e = t[zt];
        if (e)
            return e;
        for (var l = t.parentNode; l; ) {
            if (e = l[Gt] || l[zt]) {
                if (l = e.alternate,
                e.child !== null || l !== null && l.child !== null)
                    for (t = r1(t); t !== null; ) {
                        if (l = t[zt])
                            return l;
                        t = r1(t)
                    }
                return e
            }
            t = l,
            l = t.parentNode
        }
        return null
    }
    function Ol(t) {
        if (t = t[zt] || t[Gt]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function kn(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(a(33))
    }
    function _e(t) {
        var e = t[kl];
        return e || (e = t[kl] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function wt(t) {
        t[ge] = !0
    }
    var Ql = new Set
      , $a = {};
    function Qn(t, e) {
        pn(t, e),
        pn(t + "Capture", e)
    }
    function pn(t, e) {
        for ($a[t] = e,
        t = 0; t < e.length; t++)
            Ql.add(e[t])
    }
    var _n = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Ni = {}
      , pa = {};
    function Zn(t) {
        return Vl.call(pa, t) ? !0 : Vl.call(Ni, t) ? !1 : _n.test(t) ? pa[t] = !0 : (Ni[t] = !0,
        !1)
    }
    function bs(t, e, l) {
        if (Zn(e))
            if (l === null)
                t.removeAttribute(e);
            else {
                switch (typeof l) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var i = e.toLowerCase().slice(0, 5);
                    if (i !== "data-" && i !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + l)
            }
    }
    function xs(t, e, l) {
        if (l === null)
            t.removeAttribute(e);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + l)
        }
    }
    function ai(t, e, l, i) {
        if (i === null)
            t.removeAttribute(l);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(l);
                return
            }
            t.setAttributeNS(e, l, "" + i)
        }
    }
    function vn(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function Qh(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function F_(t, e, l) {
        var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var s = i.get
              , c = i.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return s.call(this)
                },
                set: function(m) {
                    l = "" + m,
                    c.call(this, m)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: i.enumerable
            }),
            {
                getValue: function() {
                    return l
                },
                setValue: function(m) {
                    l = "" + m
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function yf(t) {
        if (!t._valueTracker) {
            var e = Qh(t) ? "checked" : "value";
            t._valueTracker = F_(t, e, "" + t[e])
        }
    }
    function Zh(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var l = e.getValue()
          , i = "";
        return t && (i = Qh(t) ? t.checked ? "true" : "false" : t.value),
        t = i,
        t !== l ? (e.setValue(t),
        !0) : !1
    }
    function Ss(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var W_ = /[\n"\\]/g;
    function yn(t) {
        return t.replace(W_, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function bf(t, e, l, i, s, c, m, v) {
        t.name = "",
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? t.type = m : t.removeAttribute("type"),
        e != null ? m === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + vn(e)) : t.value !== "" + vn(e) && (t.value = "" + vn(e)) : m !== "submit" && m !== "reset" || t.removeAttribute("value"),
        e != null ? xf(t, m, vn(e)) : l != null ? xf(t, m, vn(l)) : i != null && t.removeAttribute("value"),
        s == null && c != null && (t.defaultChecked = !!c),
        s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"),
        v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? t.name = "" + vn(v) : t.removeAttribute("name")
    }
    function Kh(t, e, l, i, s, c, m, v) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c),
        e != null || l != null) {
            if (!(c !== "submit" && c !== "reset" || e != null)) {
                yf(t);
                return
            }
            l = l != null ? "" + vn(l) : "",
            e = e != null ? "" + vn(e) : l,
            v || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        i = i ?? s,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        t.checked = v ? t.checked : !!i,
        t.defaultChecked = !!i,
        m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (t.name = m),
        yf(t)
    }
    function xf(t, e, l) {
        e === "number" && Ss(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l)
    }
    function Pa(t, e, l, i) {
        if (t = t.options,
        e) {
            e = {};
            for (var s = 0; s < l.length; s++)
                e["$" + l[s]] = !0;
            for (l = 0; l < t.length; l++)
                s = e.hasOwnProperty("$" + t[l].value),
                t[l].selected !== s && (t[l].selected = s),
                s && i && (t[l].defaultSelected = !0)
        } else {
            for (l = "" + vn(l),
            e = null,
            s = 0; s < t.length; s++) {
                if (t[s].value === l) {
                    t[s].selected = !0,
                    i && (t[s].defaultSelected = !0);
                    return
                }
                e !== null || t[s].disabled || (e = t[s])
            }
            e !== null && (e.selected = !0)
        }
    }
    function Jh(t, e, l) {
        if (e != null && (e = "" + vn(e),
        e !== t.value && (t.value = e),
        l == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = l != null ? "" + vn(l) : ""
    }
    function Fh(t, e, l, i) {
        if (e == null) {
            if (i != null) {
                if (l != null)
                    throw Error(a(92));
                if (vt(i)) {
                    if (1 < i.length)
                        throw Error(a(93));
                    i = i[0]
                }
                l = i
            }
            l == null && (l = ""),
            e = l
        }
        l = vn(e),
        t.defaultValue = l,
        i = t.textContent,
        i === l && i !== "" && i !== null && (t.value = i),
        yf(t)
    }
    function Ia(t, e) {
        if (e) {
            var l = t.firstChild;
            if (l && l === t.lastChild && l.nodeType === 3) {
                l.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var $_ = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Wh(t, e, l) {
        var i = e.indexOf("--") === 0;
        l == null || typeof l == "boolean" || l === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, l) : typeof l != "number" || l === 0 || $_.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px"
    }
    function $h(t, e, l) {
        if (e != null && typeof e != "object")
            throw Error(a(62));
        if (t = t.style,
        l != null) {
            for (var i in l)
                !l.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
            for (var s in e)
                i = e[s],
                e.hasOwnProperty(s) && l[s] !== i && Wh(t, s, i)
        } else
            for (var c in e)
                e.hasOwnProperty(c) && Wh(t, c, e[c])
    }
    function Sf(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var P_ = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , I_ = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Ts(t) {
        return I_.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function ui() {}
    var Tf = null;
    function Ef(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var tu = null
      , eu = null;
    function Ph(t) {
        var e = Ol(t);
        if (e && (t = e.stateNode)) {
            var l = t[Ct] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (bf(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name),
                e = l.name,
                l.type === "radio" && e != null) {
                    for (l = t; l.parentNode; )
                        l = l.parentNode;
                    for (l = l.querySelectorAll('input[name="' + yn("" + e) + '"][type="radio"]'),
                    e = 0; e < l.length; e++) {
                        var i = l[e];
                        if (i !== t && i.form === t.form) {
                            var s = i[Ct] || null;
                            if (!s)
                                throw Error(a(90));
                            bf(i, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name)
                        }
                    }
                    for (e = 0; e < l.length; e++)
                        i = l[e],
                        i.form === t.form && Zh(i)
                }
                break t;
            case "textarea":
                Jh(t, l.value, l.defaultValue);
                break t;
            case "select":
                e = l.value,
                e != null && Pa(t, !!l.multiple, e, !1)
            }
        }
    }
    var Af = !1;
    function Ih(t, e, l) {
        if (Af)
            return t(e, l);
        Af = !0;
        try {
            var i = t(e);
            return i
        } finally {
            if (Af = !1,
            (tu !== null || eu !== null) && (fc(),
            tu && (e = tu,
            t = eu,
            eu = tu = null,
            Ph(e),
            t)))
                for (e = 0; e < t.length; e++)
                    Ph(t[e])
        }
    }
    function Pu(t, e) {
        var l = t.stateNode;
        if (l === null)
            return null;
        var i = l[Ct] || null;
        if (i === null)
            return null;
        l = i[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (t = t.type,
            i = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !i;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (l && typeof l != "function")
            throw Error(a(231, e, typeof l));
        return l
    }
    var ri = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , zf = !1;
    if (ri)
        try {
            var Iu = {};
            Object.defineProperty(Iu, "passive", {
                get: function() {
                    zf = !0
                }
            }),
            window.addEventListener("test", Iu, Iu),
            window.removeEventListener("test", Iu, Iu)
        } catch {
            zf = !1
        }
    var wi = null
      , Mf = null
      , Es = null;
    function t0() {
        if (Es)
            return Es;
        var t, e = Mf, l = e.length, i, s = "value"in wi ? wi.value : wi.textContent, c = s.length;
        for (t = 0; t < l && e[t] === s[t]; t++)
            ;
        var m = l - t;
        for (i = 1; i <= m && e[l - i] === s[c - i]; i++)
            ;
        return Es = s.slice(t, 1 < i ? 1 - i : void 0)
    }
    function As(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function zs() {
        return !0
    }
    function e0() {
        return !1
    }
    function Dl(t) {
        function e(l, i, s, c, m) {
            this._reactName = l,
            this._targetInst = s,
            this.type = i,
            this.nativeEvent = c,
            this.target = m,
            this.currentTarget = null;
            for (var v in t)
                t.hasOwnProperty(v) && (l = t[v],
                this[v] = l ? l(c) : c[v]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? zs : e0,
            this.isPropagationStopped = e0,
            this
        }
        return y(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var l = this.nativeEvent;
                l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1),
                this.isDefaultPrevented = zs)
            },
            stopPropagation: function() {
                var l = this.nativeEvent;
                l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
                this.isPropagationStopped = zs)
            },
            persist: function() {},
            isPersistent: zs
        }),
        e
    }
    var _a = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Ms = Dl(_a), tr = y({}, _a, {
        view: 0,
        detail: 0
    }), tv = Dl(tr), Cf, Of, er, Cs = y({}, tr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Nf,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== er && (er && t.type === "mousemove" ? (Cf = t.screenX - er.screenX,
            Of = t.screenY - er.screenY) : Of = Cf = 0,
            er = t),
            Cf)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Of
        }
    }), l0 = Dl(Cs), ev = y({}, Cs, {
        dataTransfer: 0
    }), lv = Dl(ev), nv = y({}, tr, {
        relatedTarget: 0
    }), Df = Dl(nv), iv = y({}, _a, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), av = Dl(iv), uv = y({}, _a, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), rv = Dl(uv), sv = y({}, _a, {
        data: 0
    }), n0 = Dl(sv), cv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, fv = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, ov = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function dv(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = ov[t]) ? !!e[t] : !1
    }
    function Nf() {
        return dv
    }
    var hv = y({}, tr, {
        key: function(t) {
            if (t.key) {
                var e = cv[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = As(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? fv[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Nf,
        charCode: function(t) {
            return t.type === "keypress" ? As(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? As(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , mv = Dl(hv)
      , gv = y({}, Cs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , i0 = Dl(gv)
      , pv = y({}, tr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Nf
    })
      , _v = Dl(pv)
      , vv = y({}, _a, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , yv = Dl(vv)
      , bv = y({}, Cs, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , xv = Dl(bv)
      , Sv = y({}, _a, {
        newState: 0,
        oldState: 0
    })
      , Tv = Dl(Sv)
      , Ev = [9, 13, 27, 32]
      , wf = ri && "CompositionEvent"in window
      , lr = null;
    ri && "documentMode"in document && (lr = document.documentMode);
    var Av = ri && "TextEvent"in window && !lr
      , a0 = ri && (!wf || lr && 8 < lr && 11 >= lr)
      , u0 = " "
      , r0 = !1;
    function s0(t, e) {
        switch (t) {
        case "keyup":
            return Ev.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function c0(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var lu = !1;
    function zv(t, e) {
        switch (t) {
        case "compositionend":
            return c0(e);
        case "keypress":
            return e.which !== 32 ? null : (r0 = !0,
            u0);
        case "textInput":
            return t = e.data,
            t === u0 && r0 ? null : t;
        default:
            return null
        }
    }
    function Mv(t, e) {
        if (lu)
            return t === "compositionend" || !wf && s0(t, e) ? (t = t0(),
            Es = Mf = wi = null,
            lu = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return a0 && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var Cv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function f0(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!Cv[t.type] : e === "textarea"
    }
    function o0(t, e, l, i) {
        tu ? eu ? eu.push(i) : eu = [i] : tu = i,
        e = _c(e, "onChange"),
        0 < e.length && (l = new Ms("onChange","change",null,l,i),
        t.push({
            event: l,
            listeners: e
        }))
    }
    var nr = null
      , ir = null;
    function Ov(t) {
        Kg(t, 0)
    }
    function Os(t) {
        var e = kn(t);
        if (Zh(e))
            return t
    }
    function d0(t, e) {
        if (t === "change")
            return e
    }
    var h0 = !1;
    if (ri) {
        var Rf;
        if (ri) {
            var jf = "oninput"in document;
            if (!jf) {
                var m0 = document.createElement("div");
                m0.setAttribute("oninput", "return;"),
                jf = typeof m0.oninput == "function"
            }
            Rf = jf
        } else
            Rf = !1;
        h0 = Rf && (!document.documentMode || 9 < document.documentMode)
    }
    function g0() {
        nr && (nr.detachEvent("onpropertychange", p0),
        ir = nr = null)
    }
    function p0(t) {
        if (t.propertyName === "value" && Os(ir)) {
            var e = [];
            o0(e, ir, t, Ef(t)),
            Ih(Ov, e)
        }
    }
    function Dv(t, e, l) {
        t === "focusin" ? (g0(),
        nr = e,
        ir = l,
        nr.attachEvent("onpropertychange", p0)) : t === "focusout" && g0()
    }
    function Nv(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Os(ir)
    }
    function wv(t, e) {
        if (t === "click")
            return Os(e)
    }
    function Rv(t, e) {
        if (t === "input" || t === "change")
            return Os(e)
    }
    function jv(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Zl = typeof Object.is == "function" ? Object.is : jv;
    function ar(t, e) {
        if (Zl(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var l = Object.keys(t)
          , i = Object.keys(e);
        if (l.length !== i.length)
            return !1;
        for (i = 0; i < l.length; i++) {
            var s = l[i];
            if (!Vl.call(e, s) || !Zl(t[s], e[s]))
                return !1
        }
        return !0
    }
    function _0(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function v0(t, e) {
        var l = _0(t);
        t = 0;
        for (var i; l; ) {
            if (l.nodeType === 3) {
                if (i = t + l.textContent.length,
                t <= e && i >= e)
                    return {
                        node: l,
                        offset: e - t
                    };
                t = i
            }
            t: {
                for (; l; ) {
                    if (l.nextSibling) {
                        l = l.nextSibling;
                        break t
                    }
                    l = l.parentNode
                }
                l = void 0
            }
            l = _0(l)
        }
    }
    function y0(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? y0(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function b0(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Ss(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var l = typeof e.contentWindow.location.href == "string"
            } catch {
                l = !1
            }
            if (l)
                t = e.contentWindow;
            else
                break;
            e = Ss(t.document)
        }
        return e
    }
    function Uf(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var Uv = ri && "documentMode"in document && 11 >= document.documentMode
      , nu = null
      , Hf = null
      , ur = null
      , Bf = !1;
    function x0(t, e, l) {
        var i = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
        Bf || nu == null || nu !== Ss(i) || (i = nu,
        "selectionStart"in i && Uf(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        ur && ar(ur, i) || (ur = i,
        i = _c(Hf, "onSelect"),
        0 < i.length && (e = new Ms("onSelect","select",null,e,l),
        t.push({
            event: e,
            listeners: i
        }),
        e.target = nu)))
    }
    function va(t, e) {
        var l = {};
        return l[t.toLowerCase()] = e.toLowerCase(),
        l["Webkit" + t] = "webkit" + e,
        l["Moz" + t] = "moz" + e,
        l
    }
    var iu = {
        animationend: va("Animation", "AnimationEnd"),
        animationiteration: va("Animation", "AnimationIteration"),
        animationstart: va("Animation", "AnimationStart"),
        transitionrun: va("Transition", "TransitionRun"),
        transitionstart: va("Transition", "TransitionStart"),
        transitioncancel: va("Transition", "TransitionCancel"),
        transitionend: va("Transition", "TransitionEnd")
    }
      , Yf = {}
      , S0 = {};
    ri && (S0 = document.createElement("div").style,
    "AnimationEvent"in window || (delete iu.animationend.animation,
    delete iu.animationiteration.animation,
    delete iu.animationstart.animation),
    "TransitionEvent"in window || delete iu.transitionend.transition);
    function ya(t) {
        if (Yf[t])
            return Yf[t];
        if (!iu[t])
            return t;
        var e = iu[t], l;
        for (l in e)
            if (e.hasOwnProperty(l) && l in S0)
                return Yf[t] = e[l];
        return t
    }
    var T0 = ya("animationend")
      , E0 = ya("animationiteration")
      , A0 = ya("animationstart")
      , Hv = ya("transitionrun")
      , Bv = ya("transitionstart")
      , Yv = ya("transitioncancel")
      , z0 = ya("transitionend")
      , M0 = new Map
      , qf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    qf.push("scrollEnd");
    function Bn(t, e) {
        M0.set(t, e),
        Qn(e, [t])
    }
    var Ds = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , bn = []
      , au = 0
      , Lf = 0;
    function Ns() {
        for (var t = au, e = Lf = au = 0; e < t; ) {
            var l = bn[e];
            bn[e++] = null;
            var i = bn[e];
            bn[e++] = null;
            var s = bn[e];
            bn[e++] = null;
            var c = bn[e];
            if (bn[e++] = null,
            i !== null && s !== null) {
                var m = i.pending;
                m === null ? s.next = s : (s.next = m.next,
                m.next = s),
                i.pending = s
            }
            c !== 0 && C0(l, s, c)
        }
    }
    function ws(t, e, l, i) {
        bn[au++] = t,
        bn[au++] = e,
        bn[au++] = l,
        bn[au++] = i,
        Lf |= i,
        t.lanes |= i,
        t = t.alternate,
        t !== null && (t.lanes |= i)
    }
    function Xf(t, e, l, i) {
        return ws(t, e, l, i),
        Rs(t)
    }
    function ba(t, e) {
        return ws(t, null, null, e),
        Rs(t)
    }
    function C0(t, e, l) {
        t.lanes |= l;
        var i = t.alternate;
        i !== null && (i.lanes |= l);
        for (var s = !1, c = t.return; c !== null; )
            c.childLanes |= l,
            i = c.alternate,
            i !== null && (i.childLanes |= l),
            c.tag === 22 && (t = c.stateNode,
            t === null || t._visibility & 1 || (s = !0)),
            t = c,
            c = c.return;
        return t.tag === 3 ? (c = t.stateNode,
        s && e !== null && (s = 31 - Ue(l),
        t = c.hiddenUpdates,
        i = t[s],
        i === null ? t[s] = [e] : i.push(e),
        e.lane = l | 536870912),
        c) : null
    }
    function Rs(t) {
        if (50 < Cr)
            throw Cr = 0,
            $o = null,
            Error(a(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var uu = {};
    function qv(t, e, l, i) {
        this.tag = t,
        this.key = l,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = i,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function Kl(t, e, l, i) {
        return new qv(t,e,l,i)
    }
    function Gf(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function si(t, e) {
        var l = t.alternate;
        return l === null ? (l = Kl(t.tag, e, t.key, t.mode),
        l.elementType = t.elementType,
        l.type = t.type,
        l.stateNode = t.stateNode,
        l.alternate = t,
        t.alternate = l) : (l.pendingProps = e,
        l.type = t.type,
        l.flags = 0,
        l.subtreeFlags = 0,
        l.deletions = null),
        l.flags = t.flags & 65011712,
        l.childLanes = t.childLanes,
        l.lanes = t.lanes,
        l.child = t.child,
        l.memoizedProps = t.memoizedProps,
        l.memoizedState = t.memoizedState,
        l.updateQueue = t.updateQueue,
        e = t.dependencies,
        l.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        l.sibling = t.sibling,
        l.index = t.index,
        l.ref = t.ref,
        l.refCleanup = t.refCleanup,
        l
    }
    function O0(t, e) {
        t.flags &= 65011714;
        var l = t.alternate;
        return l === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = l.childLanes,
        t.lanes = l.lanes,
        t.child = l.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = l.memoizedProps,
        t.memoizedState = l.memoizedState,
        t.updateQueue = l.updateQueue,
        t.type = l.type,
        e = l.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function js(t, e, l, i, s, c) {
        var m = 0;
        if (i = t,
        typeof t == "function")
            Gf(t) && (m = 1);
        else if (typeof t == "string")
            m = ky(t, l, tt.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case J:
                return t = Kl(31, l, e, s),
                t.elementType = J,
                t.lanes = c,
                t;
            case x:
                return xa(l.children, s, c, e);
            case D:
                m = 8,
                s |= 24;
                break;
            case B:
                return t = Kl(12, l, e, s | 2),
                t.elementType = B,
                t.lanes = c,
                t;
            case V:
                return t = Kl(13, l, e, s),
                t.elementType = V,
                t.lanes = c,
                t;
            case F:
                return t = Kl(19, l, e, s),
                t.elementType = F,
                t.lanes = c,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case Z:
                        m = 10;
                        break t;
                    case G:
                        m = 9;
                        break t;
                    case Y:
                        m = 11;
                        break t;
                    case j:
                        m = 14;
                        break t;
                    case W:
                        m = 16,
                        i = null;
                        break t
                    }
                m = 29,
                l = Error(a(130, t === null ? "null" : typeof t, "")),
                i = null
            }
        return e = Kl(m, l, e, s),
        e.elementType = t,
        e.type = i,
        e.lanes = c,
        e
    }
    function xa(t, e, l, i) {
        return t = Kl(7, t, i, e),
        t.lanes = l,
        t
    }
    function Vf(t, e, l) {
        return t = Kl(6, t, null, e),
        t.lanes = l,
        t
    }
    function D0(t) {
        var e = Kl(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function kf(t, e, l) {
        return e = Kl(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = l,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var N0 = new WeakMap;
    function xn(t, e) {
        if (typeof t == "object" && t !== null) {
            var l = N0.get(t);
            return l !== void 0 ? l : (e = {
                value: t,
                source: e,
                stack: ul(e)
            },
            N0.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: ul(e)
        }
    }
    var ru = []
      , su = 0
      , Us = null
      , rr = 0
      , Sn = []
      , Tn = 0
      , Ri = null
      , Kn = 1
      , Jn = "";
    function ci(t, e) {
        ru[su++] = rr,
        ru[su++] = Us,
        Us = t,
        rr = e
    }
    function w0(t, e, l) {
        Sn[Tn++] = Kn,
        Sn[Tn++] = Jn,
        Sn[Tn++] = Ri,
        Ri = t;
        var i = Kn;
        t = Jn;
        var s = 32 - Ue(i) - 1;
        i &= ~(1 << s),
        l += 1;
        var c = 32 - Ue(e) + s;
        if (30 < c) {
            var m = s - s % 5;
            c = (i & (1 << m) - 1).toString(32),
            i >>= m,
            s -= m,
            Kn = 1 << 32 - Ue(e) + s | l << s | i,
            Jn = c + t
        } else
            Kn = 1 << c | l << s | i,
            Jn = t
    }
    function Qf(t) {
        t.return !== null && (ci(t, 1),
        w0(t, 1, 0))
    }
    function Zf(t) {
        for (; t === Us; )
            Us = ru[--su],
            ru[su] = null,
            rr = ru[--su],
            ru[su] = null;
        for (; t === Ri; )
            Ri = Sn[--Tn],
            Sn[Tn] = null,
            Jn = Sn[--Tn],
            Sn[Tn] = null,
            Kn = Sn[--Tn],
            Sn[Tn] = null
    }
    function R0(t, e) {
        Sn[Tn++] = Kn,
        Sn[Tn++] = Jn,
        Sn[Tn++] = Ri,
        Kn = e.id,
        Jn = e.overflow,
        Ri = t
    }
    var tl = null
      , se = null
      , Lt = !1
      , ji = null
      , En = !1
      , Kf = Error(a(519));
    function Ui(t) {
        var e = Error(a(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw sr(xn(e, t)),
        Kf
    }
    function j0(t) {
        var e = t.stateNode
          , l = t.type
          , i = t.memoizedProps;
        switch (e[zt] = t,
        e[Ct] = i,
        l) {
        case "dialog":
            Ht("cancel", e),
            Ht("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            Ht("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Dr.length; l++)
                Ht(Dr[l], e);
            break;
        case "source":
            Ht("error", e);
            break;
        case "img":
        case "image":
        case "link":
            Ht("error", e),
            Ht("load", e);
            break;
        case "details":
            Ht("toggle", e);
            break;
        case "input":
            Ht("invalid", e),
            Kh(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
            break;
        case "select":
            Ht("invalid", e);
            break;
        case "textarea":
            Ht("invalid", e),
            Fh(e, i.value, i.defaultValue, i.children)
        }
        l = i.children,
        typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || i.suppressHydrationWarning === !0 || $g(e.textContent, l) ? (i.popover != null && (Ht("beforetoggle", e),
        Ht("toggle", e)),
        i.onScroll != null && Ht("scroll", e),
        i.onScrollEnd != null && Ht("scrollend", e),
        i.onClick != null && (e.onclick = ui),
        e = !0) : e = !1,
        e || Ui(t, !0)
    }
    function U0(t) {
        for (tl = t.return; tl; )
            switch (tl.tag) {
            case 5:
            case 31:
            case 13:
                En = !1;
                return;
            case 27:
            case 3:
                En = !0;
                return;
            default:
                tl = tl.return
            }
    }
    function cu(t) {
        if (t !== tl)
            return !1;
        if (!Lt)
            return U0(t),
            Lt = !0,
            !1;
        var e = t.tag, l;
        if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type,
        l = !(l !== "form" && l !== "button") || dd(t.type, t.memoizedProps)),
        l = !l),
        l && se && Ui(t),
        U0(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(a(317));
            se = u1(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(a(317));
            se = u1(t)
        } else
            e === 27 ? (e = se,
            Fi(t.type) ? (t = _d,
            _d = null,
            se = t) : se = e) : se = tl ? zn(t.stateNode.nextSibling) : null;
        return !0
    }
    function Sa() {
        se = tl = null,
        Lt = !1
    }
    function Jf() {
        var t = ji;
        return t !== null && (jl === null ? jl = t : jl.push.apply(jl, t),
        ji = null),
        t
    }
    function sr(t) {
        ji === null ? ji = [t] : ji.push(t)
    }
    var Ff = E(null)
      , Ta = null
      , fi = null;
    function Hi(t, e, l) {
        I(Ff, e._currentValue),
        e._currentValue = l
    }
    function oi(t) {
        t._currentValue = Ff.current,
        L(Ff)
    }
    function Wf(t, e, l) {
        for (; t !== null; ) {
            var i = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
            t === l)
                break;
            t = t.return
        }
    }
    function $f(t, e, l, i) {
        var s = t.child;
        for (s !== null && (s.return = t); s !== null; ) {
            var c = s.dependencies;
            if (c !== null) {
                var m = s.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var v = c;
                    c = s;
                    for (var T = 0; T < e.length; T++)
                        if (v.context === e[T]) {
                            c.lanes |= l,
                            v = c.alternate,
                            v !== null && (v.lanes |= l),
                            Wf(c.return, l, t),
                            i || (m = null);
                            break t
                        }
                    c = v.next
                }
            } else if (s.tag === 18) {
                if (m = s.return,
                m === null)
                    throw Error(a(341));
                m.lanes |= l,
                c = m.alternate,
                c !== null && (c.lanes |= l),
                Wf(m, l, t),
                m = null
            } else
                m = s.child;
            if (m !== null)
                m.return = s;
            else
                for (m = s; m !== null; ) {
                    if (m === t) {
                        m = null;
                        break
                    }
                    if (s = m.sibling,
                    s !== null) {
                        s.return = m.return,
                        m = s;
                        break
                    }
                    m = m.return
                }
            s = m
        }
    }
    function fu(t, e, l, i) {
        t = null;
        for (var s = e, c = !1; s !== null; ) {
            if (!c) {
                if ((s.flags & 524288) !== 0)
                    c = !0;
                else if ((s.flags & 262144) !== 0)
                    break
            }
            if (s.tag === 10) {
                var m = s.alternate;
                if (m === null)
                    throw Error(a(387));
                if (m = m.memoizedProps,
                m !== null) {
                    var v = s.type;
                    Zl(s.pendingProps.value, m.value) || (t !== null ? t.push(v) : t = [v])
                }
            } else if (s === ht.current) {
                if (m = s.alternate,
                m === null)
                    throw Error(a(387));
                m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(Ur) : t = [Ur])
            }
            s = s.return
        }
        t !== null && $f(e, t, l, i),
        e.flags |= 262144
    }
    function Hs(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Zl(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Ea(t) {
        Ta = t,
        fi = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function el(t) {
        return H0(Ta, t)
    }
    function Bs(t, e) {
        return Ta === null && Ea(t),
        H0(t, e)
    }
    function H0(t, e) {
        var l = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: l,
            next: null
        },
        fi === null) {
            if (t === null)
                throw Error(a(308));
            fi = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            fi = fi.next = e;
        return l
    }
    var Lv = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(l, i) {
                t.push(i)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(l) {
                return l()
            })
        }
    }
      , Xv = d.unstable_scheduleCallback
      , Gv = d.unstable_NormalPriority
      , He = {
        $$typeof: Z,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Pf() {
        return {
            controller: new Lv,
            data: new Map,
            refCount: 0
        }
    }
    function cr(t) {
        t.refCount--,
        t.refCount === 0 && Xv(Gv, function() {
            t.controller.abort()
        })
    }
    var fr = null
      , If = 0
      , ou = 0
      , du = null;
    function Vv(t, e) {
        if (fr === null) {
            var l = fr = [];
            If = 0,
            ou = nd(),
            du = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    l.push(i)
                }
            }
        }
        return If++,
        e.then(B0, B0),
        e
    }
    function B0() {
        if (--If === 0 && fr !== null) {
            du !== null && (du.status = "fulfilled");
            var t = fr;
            fr = null,
            ou = 0,
            du = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function kv(t, e) {
        var l = []
          , i = {
            status: "pending",
            value: null,
            reason: null,
            then: function(s) {
                l.push(s)
            }
        };
        return t.then(function() {
            i.status = "fulfilled",
            i.value = e;
            for (var s = 0; s < l.length; s++)
                (0,
                l[s])(e)
        }, function(s) {
            for (i.status = "rejected",
            i.reason = s,
            s = 0; s < l.length; s++)
                (0,
                l[s])(void 0)
        }),
        i
    }
    var Y0 = N.S;
    N.S = function(t, e) {
        xg = Me(),
        typeof e == "object" && e !== null && typeof e.then == "function" && Vv(t, e),
        Y0 !== null && Y0(t, e)
    }
    ;
    var Aa = E(null);
    function to() {
        var t = Aa.current;
        return t !== null ? t : ee.pooledCache
    }
    function Ys(t, e) {
        e === null ? I(Aa, Aa.current) : I(Aa, e.pool)
    }
    function q0() {
        var t = to();
        return t === null ? null : {
            parent: He._currentValue,
            pool: t
        }
    }
    var hu = Error(a(460))
      , eo = Error(a(474))
      , qs = Error(a(542))
      , Ls = {
        then: function() {}
    };
    function L0(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function X0(t, e, l) {
        switch (l = t[l],
        l === void 0 ? t.push(e) : l !== e && (e.then(ui, ui),
        e = l),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            V0(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(ui, ui);
            else {
                if (t = ee,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(a(482));
                t = e,
                t.status = "pending",
                t.then(function(i) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "fulfilled",
                        s.value = i
                    }
                }, function(i) {
                    if (e.status === "pending") {
                        var s = e;
                        s.status = "rejected",
                        s.reason = i
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                V0(t),
                t
            }
            throw Ma = e,
            hu
        }
    }
    function za(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (l) {
            throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Ma = l,
            hu) : l
        }
    }
    var Ma = null;
    function G0() {
        if (Ma === null)
            throw Error(a(459));
        var t = Ma;
        return Ma = null,
        t
    }
    function V0(t) {
        if (t === hu || t === qs)
            throw Error(a(483))
    }
    var mu = null
      , or = 0;
    function Xs(t) {
        var e = or;
        return or += 1,
        mu === null && (mu = []),
        X0(mu, t, e)
    }
    function dr(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function Gs(t, e) {
        throw e.$$typeof === S ? Error(a(525)) : (t = Object.prototype.toString.call(e),
        Error(a(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function k0(t) {
        function e(O, A) {
            if (t) {
                var w = O.deletions;
                w === null ? (O.deletions = [A],
                O.flags |= 16) : w.push(A)
            }
        }
        function l(O, A) {
            if (!t)
                return null;
            for (; A !== null; )
                e(O, A),
                A = A.sibling;
            return null
        }
        function i(O) {
            for (var A = new Map; O !== null; )
                O.key !== null ? A.set(O.key, O) : A.set(O.index, O),
                O = O.sibling;
            return A
        }
        function s(O, A) {
            return O = si(O, A),
            O.index = 0,
            O.sibling = null,
            O
        }
        function c(O, A, w) {
            return O.index = w,
            t ? (w = O.alternate,
            w !== null ? (w = w.index,
            w < A ? (O.flags |= 67108866,
            A) : w) : (O.flags |= 67108866,
            A)) : (O.flags |= 1048576,
            A)
        }
        function m(O) {
            return t && O.alternate === null && (O.flags |= 67108866),
            O
        }
        function v(O, A, w, Q) {
            return A === null || A.tag !== 6 ? (A = Vf(w, O.mode, Q),
            A.return = O,
            A) : (A = s(A, w),
            A.return = O,
            A)
        }
        function T(O, A, w, Q) {
            var ct = w.type;
            return ct === x ? X(O, A, w.props.children, Q, w.key) : A !== null && (A.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === W && za(ct) === A.type) ? (A = s(A, w.props),
            dr(A, w),
            A.return = O,
            A) : (A = js(w.type, w.key, w.props, null, O.mode, Q),
            dr(A, w),
            A.return = O,
            A)
        }
        function R(O, A, w, Q) {
            return A === null || A.tag !== 4 || A.stateNode.containerInfo !== w.containerInfo || A.stateNode.implementation !== w.implementation ? (A = kf(w, O.mode, Q),
            A.return = O,
            A) : (A = s(A, w.children || []),
            A.return = O,
            A)
        }
        function X(O, A, w, Q, ct) {
            return A === null || A.tag !== 7 ? (A = xa(w, O.mode, Q, ct),
            A.return = O,
            A) : (A = s(A, w),
            A.return = O,
            A)
        }
        function K(O, A, w) {
            if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
                return A = Vf("" + A, O.mode, w),
                A.return = O,
                A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                case b:
                    return w = js(A.type, A.key, A.props, null, O.mode, w),
                    dr(w, A),
                    w.return = O,
                    w;
                case M:
                    return A = kf(A, O.mode, w),
                    A.return = O,
                    A;
                case W:
                    return A = za(A),
                    K(O, A, w)
                }
                if (vt(A) || P(A))
                    return A = xa(A, O.mode, w, null),
                    A.return = O,
                    A;
                if (typeof A.then == "function")
                    return K(O, Xs(A), w);
                if (A.$$typeof === Z)
                    return K(O, Bs(O, A), w);
                Gs(O, A)
            }
            return null
        }
        function U(O, A, w, Q) {
            var ct = A !== null ? A.key : null;
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
                return ct !== null ? null : v(O, A, "" + w, Q);
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case b:
                    return w.key === ct ? T(O, A, w, Q) : null;
                case M:
                    return w.key === ct ? R(O, A, w, Q) : null;
                case W:
                    return w = za(w),
                    U(O, A, w, Q)
                }
                if (vt(w) || P(w))
                    return ct !== null ? null : X(O, A, w, Q, null);
                if (typeof w.then == "function")
                    return U(O, A, Xs(w), Q);
                if (w.$$typeof === Z)
                    return U(O, A, Bs(O, w), Q);
                Gs(O, w)
            }
            return null
        }
        function H(O, A, w, Q, ct) {
            if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
                return O = O.get(w) || null,
                v(A, O, "" + Q, ct);
            if (typeof Q == "object" && Q !== null) {
                switch (Q.$$typeof) {
                case b:
                    return O = O.get(Q.key === null ? w : Q.key) || null,
                    T(A, O, Q, ct);
                case M:
                    return O = O.get(Q.key === null ? w : Q.key) || null,
                    R(A, O, Q, ct);
                case W:
                    return Q = za(Q),
                    H(O, A, w, Q, ct)
                }
                if (vt(Q) || P(Q))
                    return O = O.get(w) || null,
                    X(A, O, Q, ct, null);
                if (typeof Q.then == "function")
                    return H(O, A, w, Xs(Q), ct);
                if (Q.$$typeof === Z)
                    return H(O, A, w, Bs(A, Q), ct);
                Gs(A, Q)
            }
            return null
        }
        function nt(O, A, w, Q) {
            for (var ct = null, kt = null, at = A, Et = A = 0, qt = null; at !== null && Et < w.length; Et++) {
                at.index > Et ? (qt = at,
                at = null) : qt = at.sibling;
                var Qt = U(O, at, w[Et], Q);
                if (Qt === null) {
                    at === null && (at = qt);
                    break
                }
                t && at && Qt.alternate === null && e(O, at),
                A = c(Qt, A, Et),
                kt === null ? ct = Qt : kt.sibling = Qt,
                kt = Qt,
                at = qt
            }
            if (Et === w.length)
                return l(O, at),
                Lt && ci(O, Et),
                ct;
            if (at === null) {
                for (; Et < w.length; Et++)
                    at = K(O, w[Et], Q),
                    at !== null && (A = c(at, A, Et),
                    kt === null ? ct = at : kt.sibling = at,
                    kt = at);
                return Lt && ci(O, Et),
                ct
            }
            for (at = i(at); Et < w.length; Et++)
                qt = H(at, O, Et, w[Et], Q),
                qt !== null && (t && qt.alternate !== null && at.delete(qt.key === null ? Et : qt.key),
                A = c(qt, A, Et),
                kt === null ? ct = qt : kt.sibling = qt,
                kt = qt);
            return t && at.forEach(function(ta) {
                return e(O, ta)
            }),
            Lt && ci(O, Et),
            ct
        }
        function mt(O, A, w, Q) {
            if (w == null)
                throw Error(a(151));
            for (var ct = null, kt = null, at = A, Et = A = 0, qt = null, Qt = w.next(); at !== null && !Qt.done; Et++,
            Qt = w.next()) {
                at.index > Et ? (qt = at,
                at = null) : qt = at.sibling;
                var ta = U(O, at, Qt.value, Q);
                if (ta === null) {
                    at === null && (at = qt);
                    break
                }
                t && at && ta.alternate === null && e(O, at),
                A = c(ta, A, Et),
                kt === null ? ct = ta : kt.sibling = ta,
                kt = ta,
                at = qt
            }
            if (Qt.done)
                return l(O, at),
                Lt && ci(O, Et),
                ct;
            if (at === null) {
                for (; !Qt.done; Et++,
                Qt = w.next())
                    Qt = K(O, Qt.value, Q),
                    Qt !== null && (A = c(Qt, A, Et),
                    kt === null ? ct = Qt : kt.sibling = Qt,
                    kt = Qt);
                return Lt && ci(O, Et),
                ct
            }
            for (at = i(at); !Qt.done; Et++,
            Qt = w.next())
                Qt = H(at, O, Et, Qt.value, Q),
                Qt !== null && (t && Qt.alternate !== null && at.delete(Qt.key === null ? Et : Qt.key),
                A = c(Qt, A, Et),
                kt === null ? ct = Qt : kt.sibling = Qt,
                kt = Qt);
            return t && at.forEach(function(e2) {
                return e(O, e2)
            }),
            Lt && ci(O, Et),
            ct
        }
        function te(O, A, w, Q) {
            if (typeof w == "object" && w !== null && w.type === x && w.key === null && (w = w.props.children),
            typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case b:
                    t: {
                        for (var ct = w.key; A !== null; ) {
                            if (A.key === ct) {
                                if (ct = w.type,
                                ct === x) {
                                    if (A.tag === 7) {
                                        l(O, A.sibling),
                                        Q = s(A, w.props.children),
                                        Q.return = O,
                                        O = Q;
                                        break t
                                    }
                                } else if (A.elementType === ct || typeof ct == "object" && ct !== null && ct.$$typeof === W && za(ct) === A.type) {
                                    l(O, A.sibling),
                                    Q = s(A, w.props),
                                    dr(Q, w),
                                    Q.return = O,
                                    O = Q;
                                    break t
                                }
                                l(O, A);
                                break
                            } else
                                e(O, A);
                            A = A.sibling
                        }
                        w.type === x ? (Q = xa(w.props.children, O.mode, Q, w.key),
                        Q.return = O,
                        O = Q) : (Q = js(w.type, w.key, w.props, null, O.mode, Q),
                        dr(Q, w),
                        Q.return = O,
                        O = Q)
                    }
                    return m(O);
                case M:
                    t: {
                        for (ct = w.key; A !== null; ) {
                            if (A.key === ct)
                                if (A.tag === 4 && A.stateNode.containerInfo === w.containerInfo && A.stateNode.implementation === w.implementation) {
                                    l(O, A.sibling),
                                    Q = s(A, w.children || []),
                                    Q.return = O,
                                    O = Q;
                                    break t
                                } else {
                                    l(O, A);
                                    break
                                }
                            else
                                e(O, A);
                            A = A.sibling
                        }
                        Q = kf(w, O.mode, Q),
                        Q.return = O,
                        O = Q
                    }
                    return m(O);
                case W:
                    return w = za(w),
                    te(O, A, w, Q)
                }
                if (vt(w))
                    return nt(O, A, w, Q);
                if (P(w)) {
                    if (ct = P(w),
                    typeof ct != "function")
                        throw Error(a(150));
                    return w = ct.call(w),
                    mt(O, A, w, Q)
                }
                if (typeof w.then == "function")
                    return te(O, A, Xs(w), Q);
                if (w.$$typeof === Z)
                    return te(O, A, Bs(O, w), Q);
                Gs(O, w)
            }
            return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w,
            A !== null && A.tag === 6 ? (l(O, A.sibling),
            Q = s(A, w),
            Q.return = O,
            O = Q) : (l(O, A),
            Q = Vf(w, O.mode, Q),
            Q.return = O,
            O = Q),
            m(O)) : l(O, A)
        }
        return function(O, A, w, Q) {
            try {
                or = 0;
                var ct = te(O, A, w, Q);
                return mu = null,
                ct
            } catch (at) {
                if (at === hu || at === qs)
                    throw at;
                var kt = Kl(29, at, null, O.mode);
                return kt.lanes = Q,
                kt.return = O,
                kt
            }
        }
    }
    var Ca = k0(!0)
      , Q0 = k0(!1)
      , Bi = !1;
    function lo(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function no(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function Yi(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function qi(t, e, l) {
        var i = t.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (Kt & 2) !== 0) {
            var s = i.pending;
            return s === null ? e.next = e : (e.next = s.next,
            s.next = e),
            i.pending = e,
            e = Rs(t),
            C0(t, null, l),
            e
        }
        return ws(t, i, e, l),
        Rs(t)
    }
    function hr(t, e, l) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (l & 4194048) !== 0)) {
            var i = e.lanes;
            i &= t.pendingLanes,
            l |= i,
            e.lanes = l,
            bt(t, l)
        }
    }
    function io(t, e) {
        var l = t.updateQueue
          , i = t.alternate;
        if (i !== null && (i = i.updateQueue,
        l === i)) {
            var s = null
              , c = null;
            if (l = l.firstBaseUpdate,
            l !== null) {
                do {
                    var m = {
                        lane: l.lane,
                        tag: l.tag,
                        payload: l.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? s = c = m : c = c.next = m,
                    l = l.next
                } while (l !== null);
                c === null ? s = c = e : c = c.next = e
            } else
                s = c = e;
            l = {
                baseState: i.baseState,
                firstBaseUpdate: s,
                lastBaseUpdate: c,
                shared: i.shared,
                callbacks: i.callbacks
            },
            t.updateQueue = l;
            return
        }
        t = l.lastBaseUpdate,
        t === null ? l.firstBaseUpdate = e : t.next = e,
        l.lastBaseUpdate = e
    }
    var ao = !1;
    function mr() {
        if (ao) {
            var t = du;
            if (t !== null)
                throw t
        }
    }
    function gr(t, e, l, i) {
        ao = !1;
        var s = t.updateQueue;
        Bi = !1;
        var c = s.firstBaseUpdate
          , m = s.lastBaseUpdate
          , v = s.shared.pending;
        if (v !== null) {
            s.shared.pending = null;
            var T = v
              , R = T.next;
            T.next = null,
            m === null ? c = R : m.next = R,
            m = T;
            var X = t.alternate;
            X !== null && (X = X.updateQueue,
            v = X.lastBaseUpdate,
            v !== m && (v === null ? X.firstBaseUpdate = R : v.next = R,
            X.lastBaseUpdate = T))
        }
        if (c !== null) {
            var K = s.baseState;
            m = 0,
            X = R = T = null,
            v = c;
            do {
                var U = v.lane & -536870913
                  , H = U !== v.lane;
                if (H ? (Yt & U) === U : (i & U) === U) {
                    U !== 0 && U === ou && (ao = !0),
                    X !== null && (X = X.next = {
                        lane: 0,
                        tag: v.tag,
                        payload: v.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var nt = t
                          , mt = v;
                        U = e;
                        var te = l;
                        switch (mt.tag) {
                        case 1:
                            if (nt = mt.payload,
                            typeof nt == "function") {
                                K = nt.call(te, K, U);
                                break t
                            }
                            K = nt;
                            break t;
                        case 3:
                            nt.flags = nt.flags & -65537 | 128;
                        case 0:
                            if (nt = mt.payload,
                            U = typeof nt == "function" ? nt.call(te, K, U) : nt,
                            U == null)
                                break t;
                            K = y({}, K, U);
                            break t;
                        case 2:
                            Bi = !0
                        }
                    }
                    U = v.callback,
                    U !== null && (t.flags |= 64,
                    H && (t.flags |= 8192),
                    H = s.callbacks,
                    H === null ? s.callbacks = [U] : H.push(U))
                } else
                    H = {
                        lane: U,
                        tag: v.tag,
                        payload: v.payload,
                        callback: v.callback,
                        next: null
                    },
                    X === null ? (R = X = H,
                    T = K) : X = X.next = H,
                    m |= U;
                if (v = v.next,
                v === null) {
                    if (v = s.shared.pending,
                    v === null)
                        break;
                    H = v,
                    v = H.next,
                    H.next = null,
                    s.lastBaseUpdate = H,
                    s.shared.pending = null
                }
            } while (!0);
            X === null && (T = K),
            s.baseState = T,
            s.firstBaseUpdate = R,
            s.lastBaseUpdate = X,
            c === null && (s.shared.lanes = 0),
            ki |= m,
            t.lanes = m,
            t.memoizedState = K
        }
    }
    function Z0(t, e) {
        if (typeof t != "function")
            throw Error(a(191, t));
        t.call(e)
    }
    function K0(t, e) {
        var l = t.callbacks;
        if (l !== null)
            for (t.callbacks = null,
            t = 0; t < l.length; t++)
                Z0(l[t], e)
    }
    var gu = E(null)
      , Vs = E(0);
    function J0(t, e) {
        t = bi,
        I(Vs, t),
        I(gu, e),
        bi = t | e.baseLanes
    }
    function uo() {
        I(Vs, bi),
        I(gu, gu.current)
    }
    function ro() {
        bi = Vs.current,
        L(gu),
        L(Vs)
    }
    var Jl = E(null)
      , An = null;
    function Li(t) {
        var e = t.alternate;
        I(Oe, Oe.current & 1),
        I(Jl, t),
        An === null && (e === null || gu.current !== null || e.memoizedState !== null) && (An = t)
    }
    function so(t) {
        I(Oe, Oe.current),
        I(Jl, t),
        An === null && (An = t)
    }
    function F0(t) {
        t.tag === 22 ? (I(Oe, Oe.current),
        I(Jl, t),
        An === null && (An = t)) : Xi()
    }
    function Xi() {
        I(Oe, Oe.current),
        I(Jl, Jl.current)
    }
    function Fl(t) {
        L(Jl),
        An === t && (An = null),
        L(Oe)
    }
    var Oe = E(0);
    function ks(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var l = e.memoizedState;
                if (l !== null && (l = l.dehydrated,
                l === null || gd(l) || pd(l)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var di = 0
      , Tt = null
      , Pt = null
      , Be = null
      , Qs = !1
      , pu = !1
      , Oa = !1
      , Zs = 0
      , pr = 0
      , _u = null
      , Qv = 0;
    function Te() {
        throw Error(a(321))
    }
    function co(t, e) {
        if (e === null)
            return !1;
        for (var l = 0; l < e.length && l < t.length; l++)
            if (!Zl(t[l], e[l]))
                return !1;
        return !0
    }
    function fo(t, e, l, i, s, c) {
        return di = c,
        Tt = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        N.H = t === null || t.memoizedState === null ? wm : zo,
        Oa = !1,
        c = l(i, s),
        Oa = !1,
        pu && (c = $0(e, l, i, s)),
        W0(t),
        c
    }
    function W0(t) {
        N.H = yr;
        var e = Pt !== null && Pt.next !== null;
        if (di = 0,
        Be = Pt = Tt = null,
        Qs = !1,
        pr = 0,
        _u = null,
        e)
            throw Error(a(300));
        t === null || Ye || (t = t.dependencies,
        t !== null && Hs(t) && (Ye = !0))
    }
    function $0(t, e, l, i) {
        Tt = t;
        var s = 0;
        do {
            if (pu && (_u = null),
            pr = 0,
            pu = !1,
            25 <= s)
                throw Error(a(301));
            if (s += 1,
            Be = Pt = null,
            t.updateQueue != null) {
                var c = t.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            N.H = Rm,
            c = e(l, i)
        } while (pu);
        return c
    }
    function Zv() {
        var t = N.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? _r(e) : e,
        t = t.useState()[0],
        (Pt !== null ? Pt.memoizedState : null) !== t && (Tt.flags |= 1024),
        e
    }
    function oo() {
        var t = Zs !== 0;
        return Zs = 0,
        t
    }
    function ho(t, e, l) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~l
    }
    function mo(t) {
        if (Qs) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            Qs = !1
        }
        di = 0,
        Be = Pt = Tt = null,
        pu = !1,
        pr = Zs = 0,
        _u = null
    }
    function yl() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Be === null ? Tt.memoizedState = Be = t : Be = Be.next = t,
        Be
    }
    function De() {
        if (Pt === null) {
            var t = Tt.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = Pt.next;
        var e = Be === null ? Tt.memoizedState : Be.next;
        if (e !== null)
            Be = e,
            Pt = t;
        else {
            if (t === null)
                throw Tt.alternate === null ? Error(a(467)) : Error(a(310));
            Pt = t,
            t = {
                memoizedState: Pt.memoizedState,
                baseState: Pt.baseState,
                baseQueue: Pt.baseQueue,
                queue: Pt.queue,
                next: null
            },
            Be === null ? Tt.memoizedState = Be = t : Be = Be.next = t
        }
        return Be
    }
    function Ks() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function _r(t) {
        var e = pr;
        return pr += 1,
        _u === null && (_u = []),
        t = X0(_u, t, e),
        e = Tt,
        (Be === null ? e.memoizedState : Be.next) === null && (e = e.alternate,
        N.H = e === null || e.memoizedState === null ? wm : zo),
        t
    }
    function Js(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return _r(t);
            if (t.$$typeof === Z)
                return el(t)
        }
        throw Error(a(438, String(t)))
    }
    function go(t) {
        var e = null
          , l = Tt.updateQueue;
        if (l !== null && (e = l.memoCache),
        e == null) {
            var i = Tt.alternate;
            i !== null && (i = i.updateQueue,
            i !== null && (i = i.memoCache,
            i != null && (e = {
                data: i.data.map(function(s) {
                    return s.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        l === null && (l = Ks(),
        Tt.updateQueue = l),
        l.memoCache = e,
        l = e.data[e.index],
        l === void 0)
            for (l = e.data[e.index] = Array(t),
            i = 0; i < t; i++)
                l[i] = $;
        return e.index++,
        l
    }
    function hi(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function Fs(t) {
        var e = De();
        return po(e, Pt, t)
    }
    function po(t, e, l) {
        var i = t.queue;
        if (i === null)
            throw Error(a(311));
        i.lastRenderedReducer = l;
        var s = t.baseQueue
          , c = i.pending;
        if (c !== null) {
            if (s !== null) {
                var m = s.next;
                s.next = c.next,
                c.next = m
            }
            e.baseQueue = s = c,
            i.pending = null
        }
        if (c = t.baseState,
        s === null)
            t.memoizedState = c;
        else {
            e = s.next;
            var v = m = null
              , T = null
              , R = e
              , X = !1;
            do {
                var K = R.lane & -536870913;
                if (K !== R.lane ? (Yt & K) === K : (di & K) === K) {
                    var U = R.revertLane;
                    if (U === 0)
                        T !== null && (T = T.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: R.action,
                            hasEagerState: R.hasEagerState,
                            eagerState: R.eagerState,
                            next: null
                        }),
                        K === ou && (X = !0);
                    else if ((di & U) === U) {
                        R = R.next,
                        U === ou && (X = !0);
                        continue
                    } else
                        K = {
                            lane: 0,
                            revertLane: R.revertLane,
                            gesture: null,
                            action: R.action,
                            hasEagerState: R.hasEagerState,
                            eagerState: R.eagerState,
                            next: null
                        },
                        T === null ? (v = T = K,
                        m = c) : T = T.next = K,
                        Tt.lanes |= U,
                        ki |= U;
                    K = R.action,
                    Oa && l(c, K),
                    c = R.hasEagerState ? R.eagerState : l(c, K)
                } else
                    U = {
                        lane: K,
                        revertLane: R.revertLane,
                        gesture: R.gesture,
                        action: R.action,
                        hasEagerState: R.hasEagerState,
                        eagerState: R.eagerState,
                        next: null
                    },
                    T === null ? (v = T = U,
                    m = c) : T = T.next = U,
                    Tt.lanes |= K,
                    ki |= K;
                R = R.next
            } while (R !== null && R !== e);
            if (T === null ? m = c : T.next = v,
            !Zl(c, t.memoizedState) && (Ye = !0,
            X && (l = du,
            l !== null)))
                throw l;
            t.memoizedState = c,
            t.baseState = m,
            t.baseQueue = T,
            i.lastRenderedState = c
        }
        return s === null && (i.lanes = 0),
        [t.memoizedState, i.dispatch]
    }
    function _o(t) {
        var e = De()
          , l = e.queue;
        if (l === null)
            throw Error(a(311));
        l.lastRenderedReducer = t;
        var i = l.dispatch
          , s = l.pending
          , c = e.memoizedState;
        if (s !== null) {
            l.pending = null;
            var m = s = s.next;
            do
                c = t(c, m.action),
                m = m.next;
            while (m !== s);
            Zl(c, e.memoizedState) || (Ye = !0),
            e.memoizedState = c,
            e.baseQueue === null && (e.baseState = c),
            l.lastRenderedState = c
        }
        return [c, i]
    }
    function P0(t, e, l) {
        var i = Tt
          , s = De()
          , c = Lt;
        if (c) {
            if (l === void 0)
                throw Error(a(407));
            l = l()
        } else
            l = e();
        var m = !Zl((Pt || s).memoizedState, l);
        if (m && (s.memoizedState = l,
        Ye = !0),
        s = s.queue,
        bo(em.bind(null, i, s, t), [t]),
        s.getSnapshot !== e || m || Be !== null && Be.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            vu(9, {
                destroy: void 0
            }, tm.bind(null, i, s, l, e), null),
            ee === null)
                throw Error(a(349));
            c || (di & 127) !== 0 || I0(i, e, l)
        }
        return l
    }
    function I0(t, e, l) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: l
        },
        e = Tt.updateQueue,
        e === null ? (e = Ks(),
        Tt.updateQueue = e,
        e.stores = [t]) : (l = e.stores,
        l === null ? e.stores = [t] : l.push(t))
    }
    function tm(t, e, l, i) {
        e.value = l,
        e.getSnapshot = i,
        lm(e) && nm(t)
    }
    function em(t, e, l) {
        return l(function() {
            lm(e) && nm(t)
        })
    }
    function lm(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var l = e();
            return !Zl(t, l)
        } catch {
            return !0
        }
    }
    function nm(t) {
        var e = ba(t, 2);
        e !== null && Ul(e, t, 2)
    }
    function vo(t) {
        var e = yl();
        if (typeof t == "function") {
            var l = t;
            if (t = l(),
            Oa) {
                pl(!0);
                try {
                    l()
                } finally {
                    pl(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: hi,
            lastRenderedState: t
        },
        e
    }
    function im(t, e, l, i) {
        return t.baseState = l,
        po(t, Pt, typeof i == "function" ? i : hi)
    }
    function Kv(t, e, l, i, s) {
        if (Ps(t))
            throw Error(a(485));
        if (t = e.action,
        t !== null) {
            var c = {
                payload: s,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(m) {
                    c.listeners.push(m)
                }
            };
            N.T !== null ? l(!0) : c.isTransition = !1,
            i(c),
            l = e.pending,
            l === null ? (c.next = e.pending = c,
            am(e, c)) : (c.next = l.next,
            e.pending = l.next = c)
        }
    }
    function am(t, e) {
        var l = e.action
          , i = e.payload
          , s = t.state;
        if (e.isTransition) {
            var c = N.T
              , m = {};
            N.T = m;
            try {
                var v = l(s, i)
                  , T = N.S;
                T !== null && T(m, v),
                um(t, e, v)
            } catch (R) {
                yo(t, e, R)
            } finally {
                c !== null && m.types !== null && (c.types = m.types),
                N.T = c
            }
        } else
            try {
                c = l(s, i),
                um(t, e, c)
            } catch (R) {
                yo(t, e, R)
            }
    }
    function um(t, e, l) {
        l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(i) {
            rm(t, e, i)
        }, function(i) {
            return yo(t, e, i)
        }) : rm(t, e, l)
    }
    function rm(t, e, l) {
        e.status = "fulfilled",
        e.value = l,
        sm(e),
        t.state = l,
        e = t.pending,
        e !== null && (l = e.next,
        l === e ? t.pending = null : (l = l.next,
        e.next = l,
        am(t, l)))
    }
    function yo(t, e, l) {
        var i = t.pending;
        if (t.pending = null,
        i !== null) {
            i = i.next;
            do
                e.status = "rejected",
                e.reason = l,
                sm(e),
                e = e.next;
            while (e !== i)
        }
        t.action = null
    }
    function sm(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function cm(t, e) {
        return e
    }
    function fm(t, e) {
        if (Lt) {
            var l = ee.formState;
            if (l !== null) {
                t: {
                    var i = Tt;
                    if (Lt) {
                        if (se) {
                            e: {
                                for (var s = se, c = En; s.nodeType !== 8; ) {
                                    if (!c) {
                                        s = null;
                                        break e
                                    }
                                    if (s = zn(s.nextSibling),
                                    s === null) {
                                        s = null;
                                        break e
                                    }
                                }
                                c = s.data,
                                s = c === "F!" || c === "F" ? s : null
                            }
                            if (s) {
                                se = zn(s.nextSibling),
                                i = s.data === "F!";
                                break t
                            }
                        }
                        Ui(i)
                    }
                    i = !1
                }
                i && (e = l[0])
            }
        }
        return l = yl(),
        l.memoizedState = l.baseState = e,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: cm,
            lastRenderedState: e
        },
        l.queue = i,
        l = Om.bind(null, Tt, i),
        i.dispatch = l,
        i = vo(!1),
        c = Ao.bind(null, Tt, !1, i.queue),
        i = yl(),
        s = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        i.queue = s,
        l = Kv.bind(null, Tt, s, c, l),
        s.dispatch = l,
        i.memoizedState = t,
        [e, l, !1]
    }
    function om(t) {
        var e = De();
        return dm(e, Pt, t)
    }
    function dm(t, e, l) {
        if (e = po(t, e, cm)[0],
        t = Fs(hi)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var i = _r(e)
            } catch (m) {
                throw m === hu ? qs : m
            }
        else
            i = e;
        e = De();
        var s = e.queue
          , c = s.dispatch;
        return l !== e.memoizedState && (Tt.flags |= 2048,
        vu(9, {
            destroy: void 0
        }, Jv.bind(null, s, l), null)),
        [i, c, t]
    }
    function Jv(t, e) {
        t.action = e
    }
    function hm(t) {
        var e = De()
          , l = Pt;
        if (l !== null)
            return dm(e, l, t);
        De(),
        e = e.memoizedState,
        l = De();
        var i = l.queue.dispatch;
        return l.memoizedState = t,
        [e, i, !1]
    }
    function vu(t, e, l, i) {
        return t = {
            tag: t,
            create: l,
            deps: i,
            inst: e,
            next: null
        },
        e = Tt.updateQueue,
        e === null && (e = Ks(),
        Tt.updateQueue = e),
        l = e.lastEffect,
        l === null ? e.lastEffect = t.next = t : (i = l.next,
        l.next = t,
        t.next = i,
        e.lastEffect = t),
        t
    }
    function mm() {
        return De().memoizedState
    }
    function Ws(t, e, l, i) {
        var s = yl();
        Tt.flags |= t,
        s.memoizedState = vu(1 | e, {
            destroy: void 0
        }, l, i === void 0 ? null : i)
    }
    function $s(t, e, l, i) {
        var s = De();
        i = i === void 0 ? null : i;
        var c = s.memoizedState.inst;
        Pt !== null && i !== null && co(i, Pt.memoizedState.deps) ? s.memoizedState = vu(e, c, l, i) : (Tt.flags |= t,
        s.memoizedState = vu(1 | e, c, l, i))
    }
    function gm(t, e) {
        Ws(8390656, 8, t, e)
    }
    function bo(t, e) {
        $s(2048, 8, t, e)
    }
    function Fv(t) {
        Tt.flags |= 4;
        var e = Tt.updateQueue;
        if (e === null)
            e = Ks(),
            Tt.updateQueue = e,
            e.events = [t];
        else {
            var l = e.events;
            l === null ? e.events = [t] : l.push(t)
        }
    }
    function pm(t) {
        var e = De().memoizedState;
        return Fv({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((Kt & 2) !== 0)
                throw Error(a(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function _m(t, e) {
        return $s(4, 2, t, e)
    }
    function vm(t, e) {
        return $s(4, 4, t, e)
    }
    function ym(t, e) {
        if (typeof e == "function") {
            t = t();
            var l = e(t);
            return function() {
                typeof l == "function" ? l() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function bm(t, e, l) {
        l = l != null ? l.concat([t]) : null,
        $s(4, 4, ym.bind(null, e, t), l)
    }
    function xo() {}
    function xm(t, e) {
        var l = De();
        e = e === void 0 ? null : e;
        var i = l.memoizedState;
        return e !== null && co(e, i[1]) ? i[0] : (l.memoizedState = [t, e],
        t)
    }
    function Sm(t, e) {
        var l = De();
        e = e === void 0 ? null : e;
        var i = l.memoizedState;
        if (e !== null && co(e, i[1]))
            return i[0];
        if (i = t(),
        Oa) {
            pl(!0);
            try {
                t()
            } finally {
                pl(!1)
            }
        }
        return l.memoizedState = [i, e],
        i
    }
    function So(t, e, l) {
        return l === void 0 || (di & 1073741824) !== 0 && (Yt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l,
        t = Tg(),
        Tt.lanes |= t,
        ki |= t,
        l)
    }
    function Tm(t, e, l, i) {
        return Zl(l, e) ? l : gu.current !== null ? (t = So(t, l, i),
        Zl(t, e) || (Ye = !0),
        t) : (di & 42) === 0 || (di & 1073741824) !== 0 && (Yt & 261930) === 0 ? (Ye = !0,
        t.memoizedState = l) : (t = Tg(),
        Tt.lanes |= t,
        ki |= t,
        e)
    }
    function Em(t, e, l, i, s) {
        var c = k.p;
        k.p = c !== 0 && 8 > c ? c : 8;
        var m = N.T
          , v = {};
        N.T = v,
        Ao(t, !1, e, l);
        try {
            var T = s()
              , R = N.S;
            if (R !== null && R(v, T),
            T !== null && typeof T == "object" && typeof T.then == "function") {
                var X = kv(T, i);
                vr(t, e, X, Pl(t))
            } else
                vr(t, e, i, Pl(t))
        } catch (K) {
            vr(t, e, {
                then: function() {},
                status: "rejected",
                reason: K
            }, Pl())
        } finally {
            k.p = c,
            m !== null && v.types !== null && (m.types = v.types),
            N.T = m
        }
    }
    function Wv() {}
    function To(t, e, l, i) {
        if (t.tag !== 5)
            throw Error(a(476));
        var s = Am(t).queue;
        Em(t, s, e, et, l === null ? Wv : function() {
            return zm(t),
            l(i)
        }
        )
    }
    function Am(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: et,
            baseState: et,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hi,
                lastRenderedState: et
            },
            next: null
        };
        var l = {};
        return e.next = {
            memoizedState: l,
            baseState: l,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: hi,
                lastRenderedState: l
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function zm(t) {
        var e = Am(t);
        e.next === null && (e = t.alternate.memoizedState),
        vr(t, e.next.queue, {}, Pl())
    }
    function Eo() {
        return el(Ur)
    }
    function Mm() {
        return De().memoizedState
    }
    function Cm() {
        return De().memoizedState
    }
    function $v(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var l = Pl();
                t = Yi(l);
                var i = qi(e, t, l);
                i !== null && (Ul(i, e, l),
                hr(i, e, l)),
                e = {
                    cache: Pf()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function Pv(t, e, l) {
        var i = Pl();
        l = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ps(t) ? Dm(e, l) : (l = Xf(t, e, l, i),
        l !== null && (Ul(l, t, i),
        Nm(l, e, i)))
    }
    function Om(t, e, l) {
        var i = Pl();
        vr(t, e, l, i)
    }
    function vr(t, e, l, i) {
        var s = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (Ps(t))
            Dm(e, s);
        else {
            var c = t.alternate;
            if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer,
            c !== null))
                try {
                    var m = e.lastRenderedState
                      , v = c(m, l);
                    if (s.hasEagerState = !0,
                    s.eagerState = v,
                    Zl(v, m))
                        return ws(t, e, s, 0),
                        ee === null && Ns(),
                        !1
                } catch {}
            if (l = Xf(t, e, s, i),
            l !== null)
                return Ul(l, t, i),
                Nm(l, e, i),
                !0
        }
        return !1
    }
    function Ao(t, e, l, i) {
        if (i = {
            lane: 2,
            revertLane: nd(),
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        Ps(t)) {
            if (e)
                throw Error(a(479))
        } else
            e = Xf(t, l, i, 2),
            e !== null && Ul(e, t, 2)
    }
    function Ps(t) {
        var e = t.alternate;
        return t === Tt || e !== null && e === Tt
    }
    function Dm(t, e) {
        pu = Qs = !0;
        var l = t.pending;
        l === null ? e.next = e : (e.next = l.next,
        l.next = e),
        t.pending = e
    }
    function Nm(t, e, l) {
        if ((l & 4194048) !== 0) {
            var i = e.lanes;
            i &= t.pendingLanes,
            l |= i,
            e.lanes = l,
            bt(t, l)
        }
    }
    var yr = {
        readContext: el,
        use: Js,
        useCallback: Te,
        useContext: Te,
        useEffect: Te,
        useImperativeHandle: Te,
        useLayoutEffect: Te,
        useInsertionEffect: Te,
        useMemo: Te,
        useReducer: Te,
        useRef: Te,
        useState: Te,
        useDebugValue: Te,
        useDeferredValue: Te,
        useTransition: Te,
        useSyncExternalStore: Te,
        useId: Te,
        useHostTransitionStatus: Te,
        useFormState: Te,
        useActionState: Te,
        useOptimistic: Te,
        useMemoCache: Te,
        useCacheRefresh: Te
    };
    yr.useEffectEvent = Te;
    var wm = {
        readContext: el,
        use: Js,
        useCallback: function(t, e) {
            return yl().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: el,
        useEffect: gm,
        useImperativeHandle: function(t, e, l) {
            l = l != null ? l.concat([t]) : null,
            Ws(4194308, 4, ym.bind(null, e, t), l)
        },
        useLayoutEffect: function(t, e) {
            return Ws(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            Ws(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var l = yl();
            e = e === void 0 ? null : e;
            var i = t();
            if (Oa) {
                pl(!0);
                try {
                    t()
                } finally {
                    pl(!1)
                }
            }
            return l.memoizedState = [i, e],
            i
        },
        useReducer: function(t, e, l) {
            var i = yl();
            if (l !== void 0) {
                var s = l(e);
                if (Oa) {
                    pl(!0);
                    try {
                        l(e)
                    } finally {
                        pl(!1)
                    }
                }
            } else
                s = e;
            return i.memoizedState = i.baseState = s,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: s
            },
            i.queue = t,
            t = t.dispatch = Pv.bind(null, Tt, t),
            [i.memoizedState, t]
        },
        useRef: function(t) {
            var e = yl();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = vo(t);
            var e = t.queue
              , l = Om.bind(null, Tt, e);
            return e.dispatch = l,
            [t.memoizedState, l]
        },
        useDebugValue: xo,
        useDeferredValue: function(t, e) {
            var l = yl();
            return So(l, t, e)
        },
        useTransition: function() {
            var t = vo(!1);
            return t = Em.bind(null, Tt, t.queue, !0, !1),
            yl().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, l) {
            var i = Tt
              , s = yl();
            if (Lt) {
                if (l === void 0)
                    throw Error(a(407));
                l = l()
            } else {
                if (l = e(),
                ee === null)
                    throw Error(a(349));
                (Yt & 127) !== 0 || I0(i, e, l)
            }
            s.memoizedState = l;
            var c = {
                value: l,
                getSnapshot: e
            };
            return s.queue = c,
            gm(em.bind(null, i, c, t), [t]),
            i.flags |= 2048,
            vu(9, {
                destroy: void 0
            }, tm.bind(null, i, c, l, e), null),
            l
        },
        useId: function() {
            var t = yl()
              , e = ee.identifierPrefix;
            if (Lt) {
                var l = Jn
                  , i = Kn;
                l = (i & ~(1 << 32 - Ue(i) - 1)).toString(32) + l,
                e = "_" + e + "R_" + l,
                l = Zs++,
                0 < l && (e += "H" + l.toString(32)),
                e += "_"
            } else
                l = Qv++,
                e = "_" + e + "r_" + l.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Eo,
        useFormState: fm,
        useActionState: fm,
        useOptimistic: function(t) {
            var e = yl();
            e.memoizedState = e.baseState = t;
            var l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = l,
            e = Ao.bind(null, Tt, !0, l),
            l.dispatch = e,
            [t, e]
        },
        useMemoCache: go,
        useCacheRefresh: function() {
            return yl().memoizedState = $v.bind(null, Tt)
        },
        useEffectEvent: function(t) {
            var e = yl()
              , l = {
                impl: t
            };
            return e.memoizedState = l,
            function() {
                if ((Kt & 2) !== 0)
                    throw Error(a(440));
                return l.impl.apply(void 0, arguments)
            }
        }
    }
      , zo = {
        readContext: el,
        use: Js,
        useCallback: xm,
        useContext: el,
        useEffect: bo,
        useImperativeHandle: bm,
        useInsertionEffect: _m,
        useLayoutEffect: vm,
        useMemo: Sm,
        useReducer: Fs,
        useRef: mm,
        useState: function() {
            return Fs(hi)
        },
        useDebugValue: xo,
        useDeferredValue: function(t, e) {
            var l = De();
            return Tm(l, Pt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = Fs(hi)[0]
              , e = De().memoizedState;
            return [typeof t == "boolean" ? t : _r(t), e]
        },
        useSyncExternalStore: P0,
        useId: Mm,
        useHostTransitionStatus: Eo,
        useFormState: om,
        useActionState: om,
        useOptimistic: function(t, e) {
            var l = De();
            return im(l, Pt, t, e)
        },
        useMemoCache: go,
        useCacheRefresh: Cm
    };
    zo.useEffectEvent = pm;
    var Rm = {
        readContext: el,
        use: Js,
        useCallback: xm,
        useContext: el,
        useEffect: bo,
        useImperativeHandle: bm,
        useInsertionEffect: _m,
        useLayoutEffect: vm,
        useMemo: Sm,
        useReducer: _o,
        useRef: mm,
        useState: function() {
            return _o(hi)
        },
        useDebugValue: xo,
        useDeferredValue: function(t, e) {
            var l = De();
            return Pt === null ? So(l, t, e) : Tm(l, Pt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = _o(hi)[0]
              , e = De().memoizedState;
            return [typeof t == "boolean" ? t : _r(t), e]
        },
        useSyncExternalStore: P0,
        useId: Mm,
        useHostTransitionStatus: Eo,
        useFormState: hm,
        useActionState: hm,
        useOptimistic: function(t, e) {
            var l = De();
            return Pt !== null ? im(l, Pt, t, e) : (l.baseState = t,
            [t, l.queue.dispatch])
        },
        useMemoCache: go,
        useCacheRefresh: Cm
    };
    Rm.useEffectEvent = pm;
    function Mo(t, e, l, i) {
        e = t.memoizedState,
        l = l(i, e),
        l = l == null ? e : y({}, e, l),
        t.memoizedState = l,
        t.lanes === 0 && (t.updateQueue.baseState = l)
    }
    var Co = {
        enqueueSetState: function(t, e, l) {
            t = t._reactInternals;
            var i = Pl()
              , s = Yi(i);
            s.payload = e,
            l != null && (s.callback = l),
            e = qi(t, s, i),
            e !== null && (Ul(e, t, i),
            hr(e, t, i))
        },
        enqueueReplaceState: function(t, e, l) {
            t = t._reactInternals;
            var i = Pl()
              , s = Yi(i);
            s.tag = 1,
            s.payload = e,
            l != null && (s.callback = l),
            e = qi(t, s, i),
            e !== null && (Ul(e, t, i),
            hr(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var l = Pl()
              , i = Yi(l);
            i.tag = 2,
            e != null && (i.callback = e),
            e = qi(t, i, l),
            e !== null && (Ul(e, t, l),
            hr(e, t, l))
        }
    };
    function jm(t, e, l, i, s, c, m) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, c, m) : e.prototype && e.prototype.isPureReactComponent ? !ar(l, i) || !ar(s, c) : !0
    }
    function Um(t, e, l, i) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, i),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, i),
        e.state !== t && Co.enqueueReplaceState(e, e.state, null)
    }
    function Da(t, e) {
        var l = e;
        if ("ref"in e) {
            l = {};
            for (var i in e)
                i !== "ref" && (l[i] = e[i])
        }
        if (t = t.defaultProps) {
            l === e && (l = y({}, l));
            for (var s in t)
                l[s] === void 0 && (l[s] = t[s])
        }
        return l
    }
    function Hm(t) {
        Ds(t)
    }
    function Bm(t) {
        console.error(t)
    }
    function Ym(t) {
        Ds(t)
    }
    function Is(t, e) {
        try {
            var l = t.onUncaughtError;
            l(e.value, {
                componentStack: e.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function qm(t, e, l) {
        try {
            var i = t.onCaughtError;
            i(l.value, {
                componentStack: l.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (s) {
            setTimeout(function() {
                throw s
            })
        }
    }
    function Oo(t, e, l) {
        return l = Yi(l),
        l.tag = 3,
        l.payload = {
            element: null
        },
        l.callback = function() {
            Is(t, e)
        }
        ,
        l
    }
    function Lm(t) {
        return t = Yi(t),
        t.tag = 3,
        t
    }
    function Xm(t, e, l, i) {
        var s = l.type.getDerivedStateFromError;
        if (typeof s == "function") {
            var c = i.value;
            t.payload = function() {
                return s(c)
            }
            ,
            t.callback = function() {
                qm(e, l, i)
            }
        }
        var m = l.stateNode;
        m !== null && typeof m.componentDidCatch == "function" && (t.callback = function() {
            qm(e, l, i),
            typeof s != "function" && (Qi === null ? Qi = new Set([this]) : Qi.add(this));
            var v = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: v !== null ? v : ""
            })
        }
        )
    }
    function Iv(t, e, l, i, s) {
        if (l.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (e = l.alternate,
            e !== null && fu(e, l, s, !0),
            l = Jl.current,
            l !== null) {
                switch (l.tag) {
                case 31:
                case 13:
                    return An === null ? oc() : l.alternate === null && Ee === 0 && (Ee = 3),
                    l.flags &= -257,
                    l.flags |= 65536,
                    l.lanes = s,
                    i === Ls ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? l.updateQueue = new Set([i]) : e.add(i),
                    td(t, i, s)),
                    !1;
                case 22:
                    return l.flags |= 65536,
                    i === Ls ? l.flags |= 16384 : (e = l.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    l.updateQueue = e) : (l = e.retryQueue,
                    l === null ? e.retryQueue = new Set([i]) : l.add(i)),
                    td(t, i, s)),
                    !1
                }
                throw Error(a(435, l.tag))
            }
            return td(t, i, s),
            oc(),
            !1
        }
        if (Lt)
            return e = Jl.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = s,
            i !== Kf && (t = Error(a(422), {
                cause: i
            }),
            sr(xn(t, l)))) : (i !== Kf && (e = Error(a(423), {
                cause: i
            }),
            sr(xn(e, l))),
            t = t.current.alternate,
            t.flags |= 65536,
            s &= -s,
            t.lanes |= s,
            i = xn(i, l),
            s = Oo(t.stateNode, i, s),
            io(t, s),
            Ee !== 4 && (Ee = 2)),
            !1;
        var c = Error(a(520), {
            cause: i
        });
        if (c = xn(c, l),
        Mr === null ? Mr = [c] : Mr.push(c),
        Ee !== 4 && (Ee = 2),
        e === null)
            return !0;
        i = xn(i, l),
        l = e;
        do {
            switch (l.tag) {
            case 3:
                return l.flags |= 65536,
                t = s & -s,
                l.lanes |= t,
                t = Oo(l.stateNode, i, t),
                io(l, t),
                !1;
            case 1:
                if (e = l.type,
                c = l.stateNode,
                (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (Qi === null || !Qi.has(c))))
                    return l.flags |= 65536,
                    s &= -s,
                    l.lanes |= s,
                    s = Lm(s),
                    Xm(s, t, l, i),
                    io(l, s),
                    !1
            }
            l = l.return
        } while (l !== null);
        return !1
    }
    var Do = Error(a(461))
      , Ye = !1;
    function ll(t, e, l, i) {
        e.child = t === null ? Q0(e, null, l, i) : Ca(e, t.child, l, i)
    }
    function Gm(t, e, l, i, s) {
        l = l.render;
        var c = e.ref;
        if ("ref"in i) {
            var m = {};
            for (var v in i)
                v !== "ref" && (m[v] = i[v])
        } else
            m = i;
        return Ea(e),
        i = fo(t, e, l, m, c, s),
        v = oo(),
        t !== null && !Ye ? (ho(t, e, s),
        mi(t, e, s)) : (Lt && v && Qf(e),
        e.flags |= 1,
        ll(t, e, i, s),
        e.child)
    }
    function Vm(t, e, l, i, s) {
        if (t === null) {
            var c = l.type;
            return typeof c == "function" && !Gf(c) && c.defaultProps === void 0 && l.compare === null ? (e.tag = 15,
            e.type = c,
            km(t, e, c, i, s)) : (t = js(l.type, null, i, e, e.mode, s),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (c = t.child,
        !Yo(t, s)) {
            var m = c.memoizedProps;
            if (l = l.compare,
            l = l !== null ? l : ar,
            l(m, i) && t.ref === e.ref)
                return mi(t, e, s)
        }
        return e.flags |= 1,
        t = si(c, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function km(t, e, l, i, s) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (ar(c, i) && t.ref === e.ref)
                if (Ye = !1,
                e.pendingProps = i = c,
                Yo(t, s))
                    (t.flags & 131072) !== 0 && (Ye = !0);
                else
                    return e.lanes = t.lanes,
                    mi(t, e, s)
        }
        return No(t, e, l, i, s)
    }
    function Qm(t, e, l, i) {
        var s = i.children
          , c = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        i.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (c = c !== null ? c.baseLanes | l : l,
                t !== null) {
                    for (i = e.child = t.child,
                    s = 0; i !== null; )
                        s = s | i.lanes | i.childLanes,
                        i = i.sibling;
                    i = s & ~c
                } else
                    i = 0,
                    e.child = null;
                return Zm(t, e, c, l, i)
            }
            if ((l & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Ys(e, c !== null ? c.cachePool : null),
                c !== null ? J0(e, c) : uo(),
                F0(e);
            else
                return i = e.lanes = 536870912,
                Zm(t, e, c !== null ? c.baseLanes | l : l, l, i)
        } else
            c !== null ? (Ys(e, c.cachePool),
            J0(e, c),
            Xi(),
            e.memoizedState = null) : (t !== null && Ys(e, null),
            uo(),
            Xi());
        return ll(t, e, s, l),
        e.child
    }
    function br(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function Zm(t, e, l, i, s) {
        var c = to();
        return c = c === null ? null : {
            parent: He._currentValue,
            pool: c
        },
        e.memoizedState = {
            baseLanes: l,
            cachePool: c
        },
        t !== null && Ys(e, null),
        uo(),
        F0(e),
        t !== null && fu(t, e, i, !0),
        e.childLanes = s,
        null
    }
    function tc(t, e) {
        return e = lc({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function Km(t, e, l) {
        return Ca(e, t.child, null, l),
        t = tc(e, e.pendingProps),
        t.flags |= 2,
        Fl(e),
        e.memoizedState = null,
        t
    }
    function ty(t, e, l) {
        var i = e.pendingProps
          , s = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (Lt) {
                if (i.mode === "hidden")
                    return t = tc(e, i),
                    e.lanes = 536870912,
                    br(null, t);
                if (so(e),
                (t = se) ? (t = a1(t, En),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Ri !== null ? {
                        id: Kn,
                        overflow: Jn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = D0(t),
                l.return = e,
                e.child = l,
                tl = e,
                se = null)) : t = null,
                t === null)
                    throw Ui(e);
                return e.lanes = 536870912,
                null
            }
            return tc(e, i)
        }
        var c = t.memoizedState;
        if (c !== null) {
            var m = c.dehydrated;
            if (so(e),
            s)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = Km(t, e, l);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(a(558));
            else if (Ye || fu(t, e, l, !1),
            s = (l & t.childLanes) !== 0,
            Ye || s) {
                if (i = ee,
                i !== null && (m = st(i, l),
                m !== 0 && m !== c.retryLane))
                    throw c.retryLane = m,
                    ba(t, m),
                    Ul(i, t, m),
                    Do;
                oc(),
                e = Km(t, e, l)
            } else
                t = c.treeContext,
                se = zn(m.nextSibling),
                tl = e,
                Lt = !0,
                ji = null,
                En = !1,
                t !== null && R0(e, t),
                e = tc(e, i),
                e.flags |= 4096;
            return e
        }
        return t = si(t.child, {
            mode: i.mode,
            children: i.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function ec(t, e) {
        var l = e.ref;
        if (l === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof l != "function" && typeof l != "object")
                throw Error(a(284));
            (t === null || t.ref !== l) && (e.flags |= 4194816)
        }
    }
    function No(t, e, l, i, s) {
        return Ea(e),
        l = fo(t, e, l, i, void 0, s),
        i = oo(),
        t !== null && !Ye ? (ho(t, e, s),
        mi(t, e, s)) : (Lt && i && Qf(e),
        e.flags |= 1,
        ll(t, e, l, s),
        e.child)
    }
    function Jm(t, e, l, i, s, c) {
        return Ea(e),
        e.updateQueue = null,
        l = $0(e, i, l, s),
        W0(t),
        i = oo(),
        t !== null && !Ye ? (ho(t, e, c),
        mi(t, e, c)) : (Lt && i && Qf(e),
        e.flags |= 1,
        ll(t, e, l, c),
        e.child)
    }
    function Fm(t, e, l, i, s) {
        if (Ea(e),
        e.stateNode === null) {
            var c = uu
              , m = l.contextType;
            typeof m == "object" && m !== null && (c = el(m)),
            c = new l(i,c),
            e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Co,
            e.stateNode = c,
            c._reactInternals = e,
            c = e.stateNode,
            c.props = i,
            c.state = e.memoizedState,
            c.refs = {},
            lo(e),
            m = l.contextType,
            c.context = typeof m == "object" && m !== null ? el(m) : uu,
            c.state = e.memoizedState,
            m = l.getDerivedStateFromProps,
            typeof m == "function" && (Mo(e, l, m, i),
            c.state = e.memoizedState),
            typeof l.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (m = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            m !== c.state && Co.enqueueReplaceState(c, c.state, null),
            gr(e, i, c, s),
            mr(),
            c.state = e.memoizedState),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            i = !0
        } else if (t === null) {
            c = e.stateNode;
            var v = e.memoizedProps
              , T = Da(l, v);
            c.props = T;
            var R = c.context
              , X = l.contextType;
            m = uu,
            typeof X == "object" && X !== null && (m = el(X));
            var K = l.getDerivedStateFromProps;
            X = typeof K == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            v = e.pendingProps !== v,
            X || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (v || R !== m) && Um(e, c, i, m),
            Bi = !1;
            var U = e.memoizedState;
            c.state = U,
            gr(e, i, c, s),
            mr(),
            R = e.memoizedState,
            v || U !== R || Bi ? (typeof K == "function" && (Mo(e, l, K, i),
            R = e.memoizedState),
            (T = Bi || jm(e, l, T, i, U, R, m)) ? (X || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = i,
            e.memoizedState = R),
            c.props = i,
            c.state = R,
            c.context = m,
            i = T) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            i = !1)
        } else {
            c = e.stateNode,
            no(t, e),
            m = e.memoizedProps,
            X = Da(l, m),
            c.props = X,
            K = e.pendingProps,
            U = c.context,
            R = l.contextType,
            T = uu,
            typeof R == "object" && R !== null && (T = el(R)),
            v = l.getDerivedStateFromProps,
            (R = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (m !== K || U !== T) && Um(e, c, i, T),
            Bi = !1,
            U = e.memoizedState,
            c.state = U,
            gr(e, i, c, s),
            mr();
            var H = e.memoizedState;
            m !== K || U !== H || Bi || t !== null && t.dependencies !== null && Hs(t.dependencies) ? (typeof v == "function" && (Mo(e, l, v, i),
            H = e.memoizedState),
            (X = Bi || jm(e, l, X, i, U, H, T) || t !== null && t.dependencies !== null && Hs(t.dependencies)) ? (R || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, H, T),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, H, T)),
            typeof c.componentDidUpdate == "function" && (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || m === t.memoizedProps && U === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = i,
            e.memoizedState = H),
            c.props = i,
            c.state = H,
            c.context = T,
            i = X) : (typeof c.componentDidUpdate != "function" || m === t.memoizedProps && U === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || m === t.memoizedProps && U === t.memoizedState || (e.flags |= 1024),
            i = !1)
        }
        return c = i,
        ec(t, e),
        i = (e.flags & 128) !== 0,
        c || i ? (c = e.stateNode,
        l = i && typeof l.getDerivedStateFromError != "function" ? null : c.render(),
        e.flags |= 1,
        t !== null && i ? (e.child = Ca(e, t.child, null, s),
        e.child = Ca(e, null, l, s)) : ll(t, e, l, s),
        e.memoizedState = c.state,
        t = e.child) : t = mi(t, e, s),
        t
    }
    function Wm(t, e, l, i) {
        return Sa(),
        e.flags |= 256,
        ll(t, e, l, i),
        e.child
    }
    var wo = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Ro(t) {
        return {
            baseLanes: t,
            cachePool: q0()
        }
    }
    function jo(t, e, l) {
        return t = t !== null ? t.childLanes & ~l : 0,
        e && (t |= $l),
        t
    }
    function $m(t, e, l) {
        var i = e.pendingProps, s = !1, c = (e.flags & 128) !== 0, m;
        if ((m = c) || (m = t !== null && t.memoizedState === null ? !1 : (Oe.current & 2) !== 0),
        m && (s = !0,
        e.flags &= -129),
        m = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (Lt) {
                if (s ? Li(e) : Xi(),
                (t = se) ? (t = a1(t, En),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: Ri !== null ? {
                        id: Kn,
                        overflow: Jn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                l = D0(t),
                l.return = e,
                e.child = l,
                tl = e,
                se = null)) : t = null,
                t === null)
                    throw Ui(e);
                return pd(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var v = i.children;
            return i = i.fallback,
            s ? (Xi(),
            s = e.mode,
            v = lc({
                mode: "hidden",
                children: v
            }, s),
            i = xa(i, s, l, null),
            v.return = e,
            i.return = e,
            v.sibling = i,
            e.child = v,
            i = e.child,
            i.memoizedState = Ro(l),
            i.childLanes = jo(t, m, l),
            e.memoizedState = wo,
            br(null, i)) : (Li(e),
            Uo(e, v))
        }
        var T = t.memoizedState;
        if (T !== null && (v = T.dehydrated,
        v !== null)) {
            if (c)
                e.flags & 256 ? (Li(e),
                e.flags &= -257,
                e = Ho(t, e, l)) : e.memoizedState !== null ? (Xi(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (Xi(),
                v = i.fallback,
                s = e.mode,
                i = lc({
                    mode: "visible",
                    children: i.children
                }, s),
                v = xa(v, s, l, null),
                v.flags |= 2,
                i.return = e,
                v.return = e,
                i.sibling = v,
                e.child = i,
                Ca(e, t.child, null, l),
                i = e.child,
                i.memoizedState = Ro(l),
                i.childLanes = jo(t, m, l),
                e.memoizedState = wo,
                e = br(null, i));
            else if (Li(e),
            pd(v)) {
                if (m = v.nextSibling && v.nextSibling.dataset,
                m)
                    var R = m.dgst;
                m = R,
                i = Error(a(419)),
                i.stack = "",
                i.digest = m,
                sr({
                    value: i,
                    source: null,
                    stack: null
                }),
                e = Ho(t, e, l)
            } else if (Ye || fu(t, e, l, !1),
            m = (l & t.childLanes) !== 0,
            Ye || m) {
                if (m = ee,
                m !== null && (i = st(m, l),
                i !== 0 && i !== T.retryLane))
                    throw T.retryLane = i,
                    ba(t, i),
                    Ul(m, t, i),
                    Do;
                gd(v) || oc(),
                e = Ho(t, e, l)
            } else
                gd(v) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = T.treeContext,
                se = zn(v.nextSibling),
                tl = e,
                Lt = !0,
                ji = null,
                En = !1,
                t !== null && R0(e, t),
                e = Uo(e, i.children),
                e.flags |= 4096);
            return e
        }
        return s ? (Xi(),
        v = i.fallback,
        s = e.mode,
        T = t.child,
        R = T.sibling,
        i = si(T, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = T.subtreeFlags & 65011712,
        R !== null ? v = si(R, v) : (v = xa(v, s, l, null),
        v.flags |= 2),
        v.return = e,
        i.return = e,
        i.sibling = v,
        e.child = i,
        br(null, i),
        i = e.child,
        v = t.child.memoizedState,
        v === null ? v = Ro(l) : (s = v.cachePool,
        s !== null ? (T = He._currentValue,
        s = s.parent !== T ? {
            parent: T,
            pool: T
        } : s) : s = q0(),
        v = {
            baseLanes: v.baseLanes | l,
            cachePool: s
        }),
        i.memoizedState = v,
        i.childLanes = jo(t, m, l),
        e.memoizedState = wo,
        br(t.child, i)) : (Li(e),
        l = t.child,
        t = l.sibling,
        l = si(l, {
            mode: "visible",
            children: i.children
        }),
        l.return = e,
        l.sibling = null,
        t !== null && (m = e.deletions,
        m === null ? (e.deletions = [t],
        e.flags |= 16) : m.push(t)),
        e.child = l,
        e.memoizedState = null,
        l)
    }
    function Uo(t, e) {
        return e = lc({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function lc(t, e) {
        return t = Kl(22, t, null, e),
        t.lanes = 0,
        t
    }
    function Ho(t, e, l) {
        return Ca(e, t.child, null, l),
        t = Uo(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function Pm(t, e, l) {
        t.lanes |= e;
        var i = t.alternate;
        i !== null && (i.lanes |= e),
        Wf(t.return, e, l)
    }
    function Bo(t, e, l, i, s, c) {
        var m = t.memoizedState;
        m === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: l,
            tailMode: s,
            treeForkCount: c
        } : (m.isBackwards = e,
        m.rendering = null,
        m.renderingStartTime = 0,
        m.last = i,
        m.tail = l,
        m.tailMode = s,
        m.treeForkCount = c)
    }
    function Im(t, e, l) {
        var i = e.pendingProps
          , s = i.revealOrder
          , c = i.tail;
        i = i.children;
        var m = Oe.current
          , v = (m & 2) !== 0;
        if (v ? (m = m & 1 | 2,
        e.flags |= 128) : m &= 1,
        I(Oe, m),
        ll(t, e, i, l),
        i = Lt ? rr : 0,
        !v && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && Pm(t, l, e);
                else if (t.tag === 19)
                    Pm(t, l, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (s) {
        case "forwards":
            for (l = e.child,
            s = null; l !== null; )
                t = l.alternate,
                t !== null && ks(t) === null && (s = l),
                l = l.sibling;
            l = s,
            l === null ? (s = e.child,
            e.child = null) : (s = l.sibling,
            l.sibling = null),
            Bo(e, !1, s, l, c, i);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (l = null,
            s = e.child,
            e.child = null; s !== null; ) {
                if (t = s.alternate,
                t !== null && ks(t) === null) {
                    e.child = s;
                    break
                }
                t = s.sibling,
                s.sibling = l,
                l = s,
                s = t
            }
            Bo(e, !0, l, null, c, i);
            break;
        case "together":
            Bo(e, !1, null, null, void 0, i);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function mi(t, e, l) {
        if (t !== null && (e.dependencies = t.dependencies),
        ki |= e.lanes,
        (l & e.childLanes) === 0)
            if (t !== null) {
                if (fu(t, e, l, !1),
                (l & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(a(153));
        if (e.child !== null) {
            for (t = e.child,
            l = si(t, t.pendingProps),
            e.child = l,
            l.return = e; t.sibling !== null; )
                t = t.sibling,
                l = l.sibling = si(t, t.pendingProps),
                l.return = e;
            l.sibling = null
        }
        return e.child
    }
    function Yo(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Hs(t)))
    }
    function ey(t, e, l) {
        switch (e.tag) {
        case 3:
            Zt(e, e.stateNode.containerInfo),
            Hi(e, He, t.memoizedState.cache),
            Sa();
            break;
        case 27:
        case 5:
            Ml(e);
            break;
        case 4:
            Zt(e, e.stateNode.containerInfo);
            break;
        case 10:
            Hi(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                so(e),
                null;
            break;
        case 13:
            var i = e.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (Li(e),
                e.flags |= 128,
                null) : (l & e.child.childLanes) !== 0 ? $m(t, e, l) : (Li(e),
                t = mi(t, e, l),
                t !== null ? t.sibling : null);
            Li(e);
            break;
        case 19:
            var s = (t.flags & 128) !== 0;
            if (i = (l & e.childLanes) !== 0,
            i || (fu(t, e, l, !1),
            i = (l & e.childLanes) !== 0),
            s) {
                if (i)
                    return Im(t, e, l);
                e.flags |= 128
            }
            if (s = e.memoizedState,
            s !== null && (s.rendering = null,
            s.tail = null,
            s.lastEffect = null),
            I(Oe, Oe.current),
            i)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            Qm(t, e, l, e.pendingProps);
        case 24:
            Hi(e, He, t.memoizedState.cache)
        }
        return mi(t, e, l)
    }
    function tg(t, e, l) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Ye = !0;
            else {
                if (!Yo(t, l) && (e.flags & 128) === 0)
                    return Ye = !1,
                    ey(t, e, l);
                Ye = (t.flags & 131072) !== 0
            }
        else
            Ye = !1,
            Lt && (e.flags & 1048576) !== 0 && w0(e, rr, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var i = e.pendingProps;
                if (t = za(e.elementType),
                e.type = t,
                typeof t == "function")
                    Gf(t) ? (i = Da(t, i),
                    e.tag = 1,
                    e = Fm(null, e, t, i, l)) : (e.tag = 0,
                    e = No(null, e, t, i, l));
                else {
                    if (t != null) {
                        var s = t.$$typeof;
                        if (s === Y) {
                            e.tag = 11,
                            e = Gm(null, e, t, i, l);
                            break t
                        } else if (s === j) {
                            e.tag = 14,
                            e = Vm(null, e, t, i, l);
                            break t
                        }
                    }
                    throw e = pt(t) || t,
                    Error(a(306, e, ""))
                }
            }
            return e;
        case 0:
            return No(t, e, e.type, e.pendingProps, l);
        case 1:
            return i = e.type,
            s = Da(i, e.pendingProps),
            Fm(t, e, i, s, l);
        case 3:
            t: {
                if (Zt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(a(387));
                i = e.pendingProps;
                var c = e.memoizedState;
                s = c.element,
                no(t, e),
                gr(e, i, null, l);
                var m = e.memoizedState;
                if (i = m.cache,
                Hi(e, He, i),
                i !== c.cache && $f(e, [He], l, !0),
                mr(),
                i = m.element,
                c.isDehydrated)
                    if (c = {
                        element: i,
                        isDehydrated: !1,
                        cache: m.cache
                    },
                    e.updateQueue.baseState = c,
                    e.memoizedState = c,
                    e.flags & 256) {
                        e = Wm(t, e, i, l);
                        break t
                    } else if (i !== s) {
                        s = xn(Error(a(424)), e),
                        sr(s),
                        e = Wm(t, e, i, l);
                        break t
                    } else
                        for (t = e.stateNode.containerInfo,
                        t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                        se = zn(t.firstChild),
                        tl = e,
                        Lt = !0,
                        ji = null,
                        En = !0,
                        l = Q0(e, null, i, l),
                        e.child = l; l; )
                            l.flags = l.flags & -3 | 4096,
                            l = l.sibling;
                else {
                    if (Sa(),
                    i === s) {
                        e = mi(t, e, l);
                        break t
                    }
                    ll(t, e, i, l)
                }
                e = e.child
            }
            return e;
        case 26:
            return ec(t, e),
            t === null ? (l = o1(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : Lt || (l = e.type,
            t = e.pendingProps,
            i = vc(dt.current).createElement(l),
            i[zt] = e,
            i[Ct] = t,
            nl(i, l, t),
            wt(i),
            e.stateNode = i) : e.memoizedState = o1(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return Ml(e),
            t === null && Lt && (i = e.stateNode = s1(e.type, e.pendingProps, dt.current),
            tl = e,
            En = !0,
            s = se,
            Fi(e.type) ? (_d = s,
            se = zn(i.firstChild)) : se = s),
            ll(t, e, e.pendingProps.children, l),
            ec(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && Lt && ((s = i = se) && (i = Ny(i, e.type, e.pendingProps, En),
            i !== null ? (e.stateNode = i,
            tl = e,
            se = zn(i.firstChild),
            En = !1,
            s = !0) : s = !1),
            s || Ui(e)),
            Ml(e),
            s = e.type,
            c = e.pendingProps,
            m = t !== null ? t.memoizedProps : null,
            i = c.children,
            dd(s, c) ? i = null : m !== null && dd(s, m) && (e.flags |= 32),
            e.memoizedState !== null && (s = fo(t, e, Zv, null, null, l),
            Ur._currentValue = s),
            ec(t, e),
            ll(t, e, i, l),
            e.child;
        case 6:
            return t === null && Lt && ((t = l = se) && (l = wy(l, e.pendingProps, En),
            l !== null ? (e.stateNode = l,
            tl = e,
            se = null,
            t = !0) : t = !1),
            t || Ui(e)),
            null;
        case 13:
            return $m(t, e, l);
        case 4:
            return Zt(e, e.stateNode.containerInfo),
            i = e.pendingProps,
            t === null ? e.child = Ca(e, null, i, l) : ll(t, e, i, l),
            e.child;
        case 11:
            return Gm(t, e, e.type, e.pendingProps, l);
        case 7:
            return ll(t, e, e.pendingProps, l),
            e.child;
        case 8:
            return ll(t, e, e.pendingProps.children, l),
            e.child;
        case 12:
            return ll(t, e, e.pendingProps.children, l),
            e.child;
        case 10:
            return i = e.pendingProps,
            Hi(e, e.type, i.value),
            ll(t, e, i.children, l),
            e.child;
        case 9:
            return s = e.type._context,
            i = e.pendingProps.children,
            Ea(e),
            s = el(s),
            i = i(s),
            e.flags |= 1,
            ll(t, e, i, l),
            e.child;
        case 14:
            return Vm(t, e, e.type, e.pendingProps, l);
        case 15:
            return km(t, e, e.type, e.pendingProps, l);
        case 19:
            return Im(t, e, l);
        case 31:
            return ty(t, e, l);
        case 22:
            return Qm(t, e, l, e.pendingProps);
        case 24:
            return Ea(e),
            i = el(He),
            t === null ? (s = to(),
            s === null && (s = ee,
            c = Pf(),
            s.pooledCache = c,
            c.refCount++,
            c !== null && (s.pooledCacheLanes |= l),
            s = c),
            e.memoizedState = {
                parent: i,
                cache: s
            },
            lo(e),
            Hi(e, He, s)) : ((t.lanes & l) !== 0 && (no(t, e),
            gr(e, null, null, l),
            mr()),
            s = t.memoizedState,
            c = e.memoizedState,
            s.parent !== i ? (s = {
                parent: i,
                cache: i
            },
            e.memoizedState = s,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s),
            Hi(e, He, i)) : (i = c.cache,
            Hi(e, He, i),
            i !== s.cache && $f(e, [He], l, !0))),
            ll(t, e, e.pendingProps.children, l),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(a(156, e.tag))
    }
    function gi(t) {
        t.flags |= 4
    }
    function qo(t, e, l, i, s) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (s & 335544128) === s)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Mg())
                    t.flags |= 8192;
                else
                    throw Ma = Ls,
                    eo
        } else
            t.flags &= -16777217
    }
    function eg(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !p1(e))
            if (Mg())
                t.flags |= 8192;
            else
                throw Ma = Ls,
                eo
    }
    function nc(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? Di() : 536870912,
        t.lanes |= e,
        Su |= e)
    }
    function xr(t, e) {
        if (!Lt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var l = null; e !== null; )
                    e.alternate !== null && (l = e),
                    e = e.sibling;
                l === null ? t.tail = null : l.sibling = null;
                break;
            case "collapsed":
                l = t.tail;
                for (var i = null; l !== null; )
                    l.alternate !== null && (i = l),
                    l = l.sibling;
                i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
            }
    }
    function ce(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , l = 0
          , i = 0;
        if (e)
            for (var s = t.child; s !== null; )
                l |= s.lanes | s.childLanes,
                i |= s.subtreeFlags & 65011712,
                i |= s.flags & 65011712,
                s.return = t,
                s = s.sibling;
        else
            for (s = t.child; s !== null; )
                l |= s.lanes | s.childLanes,
                i |= s.subtreeFlags,
                i |= s.flags,
                s.return = t,
                s = s.sibling;
        return t.subtreeFlags |= i,
        t.childLanes = l,
        e
    }
    function ly(t, e, l) {
        var i = e.pendingProps;
        switch (Zf(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ce(e),
            null;
        case 1:
            return ce(e),
            null;
        case 3:
            return l = e.stateNode,
            i = null,
            t !== null && (i = t.memoizedState.cache),
            e.memoizedState.cache !== i && (e.flags |= 2048),
            oi(He),
            Dt(),
            l.pendingContext && (l.context = l.pendingContext,
            l.pendingContext = null),
            (t === null || t.child === null) && (cu(e) ? gi(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            Jf())),
            ce(e),
            null;
        case 26:
            var s = e.type
              , c = e.memoizedState;
            return t === null ? (gi(e),
            c !== null ? (ce(e),
            eg(e, c)) : (ce(e),
            qo(e, s, null, i, l))) : c ? c !== t.memoizedState ? (gi(e),
            ce(e),
            eg(e, c)) : (ce(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== i && gi(e),
            ce(e),
            qo(e, s, t, i, l)),
            null;
        case 27:
            if (Re(e),
            l = dt.current,
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== i && gi(e);
            else {
                if (!i) {
                    if (e.stateNode === null)
                        throw Error(a(166));
                    return ce(e),
                    null
                }
                t = tt.current,
                cu(e) ? j0(e) : (t = s1(s, i, l),
                e.stateNode = t,
                gi(e))
            }
            return ce(e),
            null;
        case 5:
            if (Re(e),
            s = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== i && gi(e);
            else {
                if (!i) {
                    if (e.stateNode === null)
                        throw Error(a(166));
                    return ce(e),
                    null
                }
                if (c = tt.current,
                cu(e))
                    j0(e);
                else {
                    var m = vc(dt.current);
                    switch (c) {
                    case 1:
                        c = m.createElementNS("http://www.w3.org/2000/svg", s);
                        break;
                    case 2:
                        c = m.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                        break;
                    default:
                        switch (s) {
                        case "svg":
                            c = m.createElementNS("http://www.w3.org/2000/svg", s);
                            break;
                        case "math":
                            c = m.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                            break;
                        case "script":
                            c = m.createElement("div"),
                            c.innerHTML = "<script><\/script>",
                            c = c.removeChild(c.firstChild);
                            break;
                        case "select":
                            c = typeof i.is == "string" ? m.createElement("select", {
                                is: i.is
                            }) : m.createElement("select"),
                            i.multiple ? c.multiple = !0 : i.size && (c.size = i.size);
                            break;
                        default:
                            c = typeof i.is == "string" ? m.createElement(s, {
                                is: i.is
                            }) : m.createElement(s)
                        }
                    }
                    c[zt] = e,
                    c[Ct] = i;
                    t: for (m = e.child; m !== null; ) {
                        if (m.tag === 5 || m.tag === 6)
                            c.appendChild(m.stateNode);
                        else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                            m.child.return = m,
                            m = m.child;
                            continue
                        }
                        if (m === e)
                            break t;
                        for (; m.sibling === null; ) {
                            if (m.return === null || m.return === e)
                                break t;
                            m = m.return
                        }
                        m.sibling.return = m.return,
                        m = m.sibling
                    }
                    e.stateNode = c;
                    t: switch (nl(c, s, i),
                    s) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break t;
                    case "img":
                        i = !0;
                        break t;
                    default:
                        i = !1
                    }
                    i && gi(e)
                }
            }
            return ce(e),
            qo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== i && gi(e);
            else {
                if (typeof i != "string" && e.stateNode === null)
                    throw Error(a(166));
                if (t = dt.current,
                cu(e)) {
                    if (t = e.stateNode,
                    l = e.memoizedProps,
                    i = null,
                    s = tl,
                    s !== null)
                        switch (s.tag) {
                        case 27:
                        case 5:
                            i = s.memoizedProps
                        }
                    t[zt] = e,
                    t = !!(t.nodeValue === l || i !== null && i.suppressHydrationWarning === !0 || $g(t.nodeValue, l)),
                    t || Ui(e, !0)
                } else
                    t = vc(t).createTextNode(i),
                    t[zt] = e,
                    e.stateNode = t
            }
            return ce(e),
            null;
        case 31:
            if (l = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (i = cu(e),
                l !== null) {
                    if (t === null) {
                        if (!i)
                            throw Error(a(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(a(557));
                        t[zt] = e
                    } else
                        Sa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    ce(e),
                    t = !1
                } else
                    l = Jf(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (Fl(e),
                    e) : (Fl(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(a(558))
            }
            return ce(e),
            null;
        case 13:
            if (i = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (s = cu(e),
                i !== null && i.dehydrated !== null) {
                    if (t === null) {
                        if (!s)
                            throw Error(a(318));
                        if (s = e.memoizedState,
                        s = s !== null ? s.dehydrated : null,
                        !s)
                            throw Error(a(317));
                        s[zt] = e
                    } else
                        Sa(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    ce(e),
                    s = !1
                } else
                    s = Jf(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s),
                    s = !0;
                if (!s)
                    return e.flags & 256 ? (Fl(e),
                    e) : (Fl(e),
                    null)
            }
            return Fl(e),
            (e.flags & 128) !== 0 ? (e.lanes = l,
            e) : (l = i !== null,
            t = t !== null && t.memoizedState !== null,
            l && (i = e.child,
            s = null,
            i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool),
            c = null,
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool),
            c !== s && (i.flags |= 2048)),
            l !== t && l && (e.child.flags |= 8192),
            nc(e, e.updateQueue),
            ce(e),
            null);
        case 4:
            return Dt(),
            t === null && rd(e.stateNode.containerInfo),
            ce(e),
            null;
        case 10:
            return oi(e.type),
            ce(e),
            null;
        case 19:
            if (L(Oe),
            i = e.memoizedState,
            i === null)
                return ce(e),
                null;
            if (s = (e.flags & 128) !== 0,
            c = i.rendering,
            c === null)
                if (s)
                    xr(i, !1);
                else {
                    if (Ee !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (c = ks(t),
                            c !== null) {
                                for (e.flags |= 128,
                                xr(i, !1),
                                t = c.updateQueue,
                                e.updateQueue = t,
                                nc(e, t),
                                e.subtreeFlags = 0,
                                t = l,
                                l = e.child; l !== null; )
                                    O0(l, t),
                                    l = l.sibling;
                                return I(Oe, Oe.current & 1 | 2),
                                Lt && ci(e, i.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    i.tail !== null && Me() > sc && (e.flags |= 128,
                    s = !0,
                    xr(i, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!s)
                    if (t = ks(c),
                    t !== null) {
                        if (e.flags |= 128,
                        s = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        nc(e, t),
                        xr(i, !0),
                        i.tail === null && i.tailMode === "hidden" && !c.alternate && !Lt)
                            return ce(e),
                            null
                    } else
                        2 * Me() - i.renderingStartTime > sc && l !== 536870912 && (e.flags |= 128,
                        s = !0,
                        xr(i, !1),
                        e.lanes = 4194304);
                i.isBackwards ? (c.sibling = e.child,
                e.child = c) : (t = i.last,
                t !== null ? t.sibling = c : e.child = c,
                i.last = c)
            }
            return i.tail !== null ? (t = i.tail,
            i.rendering = t,
            i.tail = t.sibling,
            i.renderingStartTime = Me(),
            t.sibling = null,
            l = Oe.current,
            I(Oe, s ? l & 1 | 2 : l & 1),
            Lt && ci(e, i.treeForkCount),
            t) : (ce(e),
            null);
        case 22:
        case 23:
            return Fl(e),
            ro(),
            i = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192),
            i ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (ce(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : ce(e),
            l = e.updateQueue,
            l !== null && nc(e, l.retryQueue),
            l = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
            i = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
            i !== l && (e.flags |= 2048),
            t !== null && L(Aa),
            null;
        case 24:
            return l = null,
            t !== null && (l = t.memoizedState.cache),
            e.memoizedState.cache !== l && (e.flags |= 2048),
            oi(He),
            ce(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(a(156, e.tag))
    }
    function ny(t, e) {
        switch (Zf(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return oi(He),
            Dt(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return Re(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (Fl(e),
                e.alternate === null)
                    throw Error(a(340));
                Sa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (Fl(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(a(340));
                Sa()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return L(Oe),
            null;
        case 4:
            return Dt(),
            null;
        case 10:
            return oi(e.type),
            null;
        case 22:
        case 23:
            return Fl(e),
            ro(),
            t !== null && L(Aa),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return oi(He),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function lg(t, e) {
        switch (Zf(e),
        e.tag) {
        case 3:
            oi(He),
            Dt();
            break;
        case 26:
        case 27:
        case 5:
            Re(e);
            break;
        case 4:
            Dt();
            break;
        case 31:
            e.memoizedState !== null && Fl(e);
            break;
        case 13:
            Fl(e);
            break;
        case 19:
            L(Oe);
            break;
        case 10:
            oi(e.type);
            break;
        case 22:
        case 23:
            Fl(e),
            ro(),
            t !== null && L(Aa);
            break;
        case 24:
            oi(He)
        }
    }
    function Sr(t, e) {
        try {
            var l = e.updateQueue
              , i = l !== null ? l.lastEffect : null;
            if (i !== null) {
                var s = i.next;
                l = s;
                do {
                    if ((l.tag & t) === t) {
                        i = void 0;
                        var c = l.create
                          , m = l.inst;
                        i = c(),
                        m.destroy = i
                    }
                    l = l.next
                } while (l !== s)
            }
        } catch (v) {
            $t(e, e.return, v)
        }
    }
    function Gi(t, e, l) {
        try {
            var i = e.updateQueue
              , s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var c = s.next;
                i = c;
                do {
                    if ((i.tag & t) === t) {
                        var m = i.inst
                          , v = m.destroy;
                        if (v !== void 0) {
                            m.destroy = void 0,
                            s = e;
                            var T = l
                              , R = v;
                            try {
                                R()
                            } catch (X) {
                                $t(s, T, X)
                            }
                        }
                    }
                    i = i.next
                } while (i !== c)
            }
        } catch (X) {
            $t(e, e.return, X)
        }
    }
    function ng(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var l = t.stateNode;
            try {
                K0(e, l)
            } catch (i) {
                $t(t, t.return, i)
            }
        }
    }
    function ig(t, e, l) {
        l.props = Da(t.type, t.memoizedProps),
        l.state = t.memoizedState;
        try {
            l.componentWillUnmount()
        } catch (i) {
            $t(t, e, i)
        }
    }
    function Tr(t, e) {
        try {
            var l = t.ref;
            if (l !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var i = t.stateNode;
                    break;
                case 30:
                    i = t.stateNode;
                    break;
                default:
                    i = t.stateNode
                }
                typeof l == "function" ? t.refCleanup = l(i) : l.current = i
            }
        } catch (s) {
            $t(t, e, s)
        }
    }
    function Fn(t, e) {
        var l = t.ref
          , i = t.refCleanup;
        if (l !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (s) {
                    $t(t, e, s)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof l == "function")
                try {
                    l(null)
                } catch (s) {
                    $t(t, e, s)
                }
            else
                l.current = null
    }
    function ag(t) {
        var e = t.type
          , l = t.memoizedProps
          , i = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                l.autoFocus && i.focus();
                break t;
            case "img":
                l.src ? i.src = l.src : l.srcSet && (i.srcset = l.srcSet)
            }
        } catch (s) {
            $t(t, t.return, s)
        }
    }
    function Lo(t, e, l) {
        try {
            var i = t.stateNode;
            Ay(i, t.type, l, e),
            i[Ct] = e
        } catch (s) {
            $t(t, t.return, s)
        }
    }
    function ug(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Fi(t.type) || t.tag === 4
    }
    function Xo(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || ug(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Fi(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function Go(t, e, l) {
        var i = t.tag;
        if (i === 5 || i === 6)
            t = t.stateNode,
            e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
            e.appendChild(t),
            l = l._reactRootContainer,
            l != null || e.onclick !== null || (e.onclick = ui));
        else if (i !== 4 && (i === 27 && Fi(t.type) && (l = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (Go(t, e, l),
            t = t.sibling; t !== null; )
                Go(t, e, l),
                t = t.sibling
    }
    function ic(t, e, l) {
        var i = t.tag;
        if (i === 5 || i === 6)
            t = t.stateNode,
            e ? l.insertBefore(t, e) : l.appendChild(t);
        else if (i !== 4 && (i === 27 && Fi(t.type) && (l = t.stateNode),
        t = t.child,
        t !== null))
            for (ic(t, e, l),
            t = t.sibling; t !== null; )
                ic(t, e, l),
                t = t.sibling
    }
    function rg(t) {
        var e = t.stateNode
          , l = t.memoizedProps;
        try {
            for (var i = t.type, s = e.attributes; s.length; )
                e.removeAttributeNode(s[0]);
            nl(e, i, l),
            e[zt] = t,
            e[Ct] = l
        } catch (c) {
            $t(t, t.return, c)
        }
    }
    var pi = !1
      , qe = !1
      , Vo = !1
      , sg = typeof WeakSet == "function" ? WeakSet : Set
      , Fe = null;
    function iy(t, e) {
        if (t = t.containerInfo,
        fd = Ac,
        t = b0(t),
        Uf(t)) {
            if ("selectionStart"in t)
                var l = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    l = (l = t.ownerDocument) && l.defaultView || window;
                    var i = l.getSelection && l.getSelection();
                    if (i && i.rangeCount !== 0) {
                        l = i.anchorNode;
                        var s = i.anchorOffset
                          , c = i.focusNode;
                        i = i.focusOffset;
                        try {
                            l.nodeType,
                            c.nodeType
                        } catch {
                            l = null;
                            break t
                        }
                        var m = 0
                          , v = -1
                          , T = -1
                          , R = 0
                          , X = 0
                          , K = t
                          , U = null;
                        e: for (; ; ) {
                            for (var H; K !== l || s !== 0 && K.nodeType !== 3 || (v = m + s),
                            K !== c || i !== 0 && K.nodeType !== 3 || (T = m + i),
                            K.nodeType === 3 && (m += K.nodeValue.length),
                            (H = K.firstChild) !== null; )
                                U = K,
                                K = H;
                            for (; ; ) {
                                if (K === t)
                                    break e;
                                if (U === l && ++R === s && (v = m),
                                U === c && ++X === i && (T = m),
                                (H = K.nextSibling) !== null)
                                    break;
                                K = U,
                                U = K.parentNode
                            }
                            K = H
                        }
                        l = v === -1 || T === -1 ? null : {
                            start: v,
                            end: T
                        }
                    } else
                        l = null
                }
            l = l || {
                start: 0,
                end: 0
            }
        } else
            l = null;
        for (od = {
            focusedElem: t,
            selectionRange: l
        },
        Ac = !1,
        Fe = e; Fe !== null; )
            if (e = Fe,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                Fe = t;
            else
                for (; Fe !== null; ) {
                    switch (e = Fe,
                    c = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (l = 0; l < t.length; l++)
                                s = t[l],
                                s.ref.impl = s.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && c !== null) {
                            t = void 0,
                            l = e,
                            s = c.memoizedProps,
                            c = c.memoizedState,
                            i = l.stateNode;
                            try {
                                var nt = Da(l.type, s);
                                t = i.getSnapshotBeforeUpdate(nt, c),
                                i.__reactInternalSnapshotBeforeUpdate = t
                            } catch (mt) {
                                $t(l, l.return, mt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            l = t.nodeType,
                            l === 9)
                                md(t);
                            else if (l === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    md(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(a(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        Fe = t;
                        break
                    }
                    Fe = e.return
                }
    }
    function cg(t, e, l) {
        var i = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            vi(t, l),
            i & 4 && Sr(5, l);
            break;
        case 1:
            if (vi(t, l),
            i & 4)
                if (t = l.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (m) {
                        $t(l, l.return, m)
                    }
                else {
                    var s = Da(l.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (m) {
                        $t(l, l.return, m)
                    }
                }
            i & 64 && ng(l),
            i & 512 && Tr(l, l.return);
            break;
        case 3:
            if (vi(t, l),
            i & 64 && (t = l.updateQueue,
            t !== null)) {
                if (e = null,
                l.child !== null)
                    switch (l.child.tag) {
                    case 27:
                    case 5:
                        e = l.child.stateNode;
                        break;
                    case 1:
                        e = l.child.stateNode
                    }
                try {
                    K0(t, e)
                } catch (m) {
                    $t(l, l.return, m)
                }
            }
            break;
        case 27:
            e === null && i & 4 && rg(l);
        case 26:
        case 5:
            vi(t, l),
            e === null && i & 4 && ag(l),
            i & 512 && Tr(l, l.return);
            break;
        case 12:
            vi(t, l);
            break;
        case 31:
            vi(t, l),
            i & 4 && dg(t, l);
            break;
        case 13:
            vi(t, l),
            i & 4 && hg(t, l),
            i & 64 && (t = l.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (l = hy.bind(null, l),
            Ry(t, l))));
            break;
        case 22:
            if (i = l.memoizedState !== null || pi,
            !i) {
                e = e !== null && e.memoizedState !== null || qe,
                s = pi;
                var c = qe;
                pi = i,
                (qe = e) && !c ? yi(t, l, (l.subtreeFlags & 8772) !== 0) : vi(t, l),
                pi = s,
                qe = c
            }
            break;
        case 30:
            break;
        default:
            vi(t, l)
        }
    }
    function fg(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        fg(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && Ce(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var de = null
      , Nl = !1;
    function _i(t, e, l) {
        for (l = l.child; l !== null; )
            og(t, e, l),
            l = l.sibling
    }
    function og(t, e, l) {
        if (me && typeof me.onCommitFiberUnmount == "function")
            try {
                me.onCommitFiberUnmount(Gn, l)
            } catch {}
        switch (l.tag) {
        case 26:
            qe || Fn(l, e),
            _i(t, e, l),
            l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode,
            l.parentNode.removeChild(l));
            break;
        case 27:
            qe || Fn(l, e);
            var i = de
              , s = Nl;
            Fi(l.type) && (de = l.stateNode,
            Nl = !1),
            _i(t, e, l),
            wr(l.stateNode),
            de = i,
            Nl = s;
            break;
        case 5:
            qe || Fn(l, e);
        case 6:
            if (i = de,
            s = Nl,
            de = null,
            _i(t, e, l),
            de = i,
            Nl = s,
            de !== null)
                if (Nl)
                    try {
                        (de.nodeType === 9 ? de.body : de.nodeName === "HTML" ? de.ownerDocument.body : de).removeChild(l.stateNode)
                    } catch (c) {
                        $t(l, e, c)
                    }
                else
                    try {
                        de.removeChild(l.stateNode)
                    } catch (c) {
                        $t(l, e, c)
                    }
            break;
        case 18:
            de !== null && (Nl ? (t = de,
            n1(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode),
            Du(t)) : n1(de, l.stateNode));
            break;
        case 4:
            i = de,
            s = Nl,
            de = l.stateNode.containerInfo,
            Nl = !0,
            _i(t, e, l),
            de = i,
            Nl = s;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            Gi(2, l, e),
            qe || Gi(4, l, e),
            _i(t, e, l);
            break;
        case 1:
            qe || (Fn(l, e),
            i = l.stateNode,
            typeof i.componentWillUnmount == "function" && ig(l, e, i)),
            _i(t, e, l);
            break;
        case 21:
            _i(t, e, l);
            break;
        case 22:
            qe = (i = qe) || l.memoizedState !== null,
            _i(t, e, l),
            qe = i;
            break;
        default:
            _i(t, e, l)
        }
    }
    function dg(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                Du(t)
            } catch (l) {
                $t(e, e.return, l)
            }
        }
    }
    function hg(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                Du(t)
            } catch (l) {
                $t(e, e.return, l)
            }
    }
    function ay(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new sg),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new sg),
            e;
        default:
            throw Error(a(435, t.tag))
        }
    }
    function ac(t, e) {
        var l = ay(t);
        e.forEach(function(i) {
            if (!l.has(i)) {
                l.add(i);
                var s = my.bind(null, t, i);
                i.then(s, s)
            }
        })
    }
    function wl(t, e) {
        var l = e.deletions;
        if (l !== null)
            for (var i = 0; i < l.length; i++) {
                var s = l[i]
                  , c = t
                  , m = e
                  , v = m;
                t: for (; v !== null; ) {
                    switch (v.tag) {
                    case 27:
                        if (Fi(v.type)) {
                            de = v.stateNode,
                            Nl = !1;
                            break t
                        }
                        break;
                    case 5:
                        de = v.stateNode,
                        Nl = !1;
                        break t;
                    case 3:
                    case 4:
                        de = v.stateNode.containerInfo,
                        Nl = !0;
                        break t
                    }
                    v = v.return
                }
                if (de === null)
                    throw Error(a(160));
                og(c, m, s),
                de = null,
                Nl = !1,
                c = s.alternate,
                c !== null && (c.return = null),
                s.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                mg(e, t),
                e = e.sibling
    }
    var Yn = null;
    function mg(t, e) {
        var l = t.alternate
          , i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            wl(e, t),
            Rl(t),
            i & 4 && (Gi(3, t, t.return),
            Sr(3, t),
            Gi(5, t, t.return));
            break;
        case 1:
            wl(e, t),
            Rl(t),
            i & 512 && (qe || l === null || Fn(l, l.return)),
            i & 64 && pi && (t = t.updateQueue,
            t !== null && (i = t.callbacks,
            i !== null && (l = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = l === null ? i : l.concat(i))));
            break;
        case 26:
            var s = Yn;
            if (wl(e, t),
            Rl(t),
            i & 512 && (qe || l === null || Fn(l, l.return)),
            i & 4) {
                var c = l !== null ? l.memoizedState : null;
                if (i = t.memoizedState,
                l === null)
                    if (i === null)
                        if (t.stateNode === null) {
                            t: {
                                i = t.type,
                                l = t.memoizedProps,
                                s = s.ownerDocument || s;
                                e: switch (i) {
                                case "title":
                                    c = s.getElementsByTagName("title")[0],
                                    (!c || c[ge] || c[zt] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = s.createElement(i),
                                    s.head.insertBefore(c, s.querySelector("head > title"))),
                                    nl(c, i, l),
                                    c[zt] = t,
                                    wt(c),
                                    i = c;
                                    break t;
                                case "link":
                                    var m = m1("link", "href", s).get(i + (l.href || ""));
                                    if (m) {
                                        for (var v = 0; v < m.length; v++)
                                            if (c = m[v],
                                            c.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && c.getAttribute("rel") === (l.rel == null ? null : l.rel) && c.getAttribute("title") === (l.title == null ? null : l.title) && c.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                m.splice(v, 1);
                                                break e
                                            }
                                    }
                                    c = s.createElement(i),
                                    nl(c, i, l),
                                    s.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (m = m1("meta", "content", s).get(i + (l.content || ""))) {
                                        for (v = 0; v < m.length; v++)
                                            if (c = m[v],
                                            c.getAttribute("content") === (l.content == null ? null : "" + l.content) && c.getAttribute("name") === (l.name == null ? null : l.name) && c.getAttribute("property") === (l.property == null ? null : l.property) && c.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && c.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                m.splice(v, 1);
                                                break e
                                            }
                                    }
                                    c = s.createElement(i),
                                    nl(c, i, l),
                                    s.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(a(468, i))
                                }
                                c[zt] = t,
                                wt(c),
                                i = c
                            }
                            t.stateNode = i
                        } else
                            g1(s, t.type, t.stateNode);
                    else
                        t.stateNode = h1(s, i, t.memoizedProps);
                else
                    c !== i ? (c === null ? l.stateNode !== null && (l = l.stateNode,
                    l.parentNode.removeChild(l)) : c.count--,
                    i === null ? g1(s, t.type, t.stateNode) : h1(s, i, t.memoizedProps)) : i === null && t.stateNode !== null && Lo(t, t.memoizedProps, l.memoizedProps)
            }
            break;
        case 27:
            wl(e, t),
            Rl(t),
            i & 512 && (qe || l === null || Fn(l, l.return)),
            l !== null && i & 4 && Lo(t, t.memoizedProps, l.memoizedProps);
            break;
        case 5:
            if (wl(e, t),
            Rl(t),
            i & 512 && (qe || l === null || Fn(l, l.return)),
            t.flags & 32) {
                s = t.stateNode;
                try {
                    Ia(s, "")
                } catch (nt) {
                    $t(t, t.return, nt)
                }
            }
            i & 4 && t.stateNode != null && (s = t.memoizedProps,
            Lo(t, s, l !== null ? l.memoizedProps : s)),
            i & 1024 && (Vo = !0);
            break;
        case 6:
            if (wl(e, t),
            Rl(t),
            i & 4) {
                if (t.stateNode === null)
                    throw Error(a(162));
                i = t.memoizedProps,
                l = t.stateNode;
                try {
                    l.nodeValue = i
                } catch (nt) {
                    $t(t, t.return, nt)
                }
            }
            break;
        case 3:
            if (xc = null,
            s = Yn,
            Yn = yc(e.containerInfo),
            wl(e, t),
            Yn = s,
            Rl(t),
            i & 4 && l !== null && l.memoizedState.isDehydrated)
                try {
                    Du(e.containerInfo)
                } catch (nt) {
                    $t(t, t.return, nt)
                }
            Vo && (Vo = !1,
            gg(t));
            break;
        case 4:
            i = Yn,
            Yn = yc(t.stateNode.containerInfo),
            wl(e, t),
            Rl(t),
            Yn = i;
            break;
        case 12:
            wl(e, t),
            Rl(t);
            break;
        case 31:
            wl(e, t),
            Rl(t),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            ac(t, i)));
            break;
        case 13:
            wl(e, t),
            Rl(t),
            t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (rc = Me()),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            ac(t, i)));
            break;
        case 22:
            s = t.memoizedState !== null;
            var T = l !== null && l.memoizedState !== null
              , R = pi
              , X = qe;
            if (pi = R || s,
            qe = X || T,
            wl(e, t),
            qe = X,
            pi = R,
            Rl(t),
            i & 8192)
                t: for (e = t.stateNode,
                e._visibility = s ? e._visibility & -2 : e._visibility | 1,
                s && (l === null || T || pi || qe || Na(t)),
                l = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (l === null) {
                            T = l = e;
                            try {
                                if (c = T.stateNode,
                                s)
                                    m = c.style,
                                    typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                                else {
                                    v = T.stateNode;
                                    var K = T.memoizedProps.style
                                      , U = K != null && K.hasOwnProperty("display") ? K.display : null;
                                    v.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                                }
                            } catch (nt) {
                                $t(T, T.return, nt)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (l === null) {
                            T = e;
                            try {
                                T.stateNode.nodeValue = s ? "" : T.memoizedProps
                            } catch (nt) {
                                $t(T, T.return, nt)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (l === null) {
                            T = e;
                            try {
                                var H = T.stateNode;
                                s ? i1(H, !0) : i1(T.stateNode, !1)
                            } catch (nt) {
                                $t(T, T.return, nt)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        l === e && (l = null),
                        e = e.return
                    }
                    l === e && (l = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            i & 4 && (i = t.updateQueue,
            i !== null && (l = i.retryQueue,
            l !== null && (i.retryQueue = null,
            ac(t, l))));
            break;
        case 19:
            wl(e, t),
            Rl(t),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            ac(t, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            wl(e, t),
            Rl(t)
        }
    }
    function Rl(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var l, i = t.return; i !== null; ) {
                    if (ug(i)) {
                        l = i;
                        break
                    }
                    i = i.return
                }
                if (l == null)
                    throw Error(a(160));
                switch (l.tag) {
                case 27:
                    var s = l.stateNode
                      , c = Xo(t);
                    ic(t, c, s);
                    break;
                case 5:
                    var m = l.stateNode;
                    l.flags & 32 && (Ia(m, ""),
                    l.flags &= -33);
                    var v = Xo(t);
                    ic(t, v, m);
                    break;
                case 3:
                case 4:
                    var T = l.stateNode.containerInfo
                      , R = Xo(t);
                    Go(t, R, T);
                    break;
                default:
                    throw Error(a(161))
                }
            } catch (X) {
                $t(t, t.return, X)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function gg(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                gg(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function vi(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                cg(t, e.alternate, e),
                e = e.sibling
    }
    function Na(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Gi(4, e, e.return),
                Na(e);
                break;
            case 1:
                Fn(e, e.return);
                var l = e.stateNode;
                typeof l.componentWillUnmount == "function" && ig(e, e.return, l),
                Na(e);
                break;
            case 27:
                wr(e.stateNode);
            case 26:
            case 5:
                Fn(e, e.return),
                Na(e);
                break;
            case 22:
                e.memoizedState === null && Na(e);
                break;
            case 30:
                Na(e);
                break;
            default:
                Na(e)
            }
            t = t.sibling
        }
    }
    function yi(t, e, l) {
        for (l = l && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var i = e.alternate
              , s = t
              , c = e
              , m = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                yi(s, c, l),
                Sr(4, c);
                break;
            case 1:
                if (yi(s, c, l),
                i = c,
                s = i.stateNode,
                typeof s.componentDidMount == "function")
                    try {
                        s.componentDidMount()
                    } catch (R) {
                        $t(i, i.return, R)
                    }
                if (i = c,
                s = i.updateQueue,
                s !== null) {
                    var v = i.stateNode;
                    try {
                        var T = s.shared.hiddenCallbacks;
                        if (T !== null)
                            for (s.shared.hiddenCallbacks = null,
                            s = 0; s < T.length; s++)
                                Z0(T[s], v)
                    } catch (R) {
                        $t(i, i.return, R)
                    }
                }
                l && m & 64 && ng(c),
                Tr(c, c.return);
                break;
            case 27:
                rg(c);
            case 26:
            case 5:
                yi(s, c, l),
                l && i === null && m & 4 && ag(c),
                Tr(c, c.return);
                break;
            case 12:
                yi(s, c, l);
                break;
            case 31:
                yi(s, c, l),
                l && m & 4 && dg(s, c);
                break;
            case 13:
                yi(s, c, l),
                l && m & 4 && hg(s, c);
                break;
            case 22:
                c.memoizedState === null && yi(s, c, l),
                Tr(c, c.return);
                break;
            case 30:
                break;
            default:
                yi(s, c, l)
            }
            e = e.sibling
        }
    }
    function ko(t, e) {
        var l = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== l && (t != null && t.refCount++,
        l != null && cr(l))
    }
    function Qo(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && cr(t))
    }
    function qn(t, e, l, i) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                pg(t, e, l, i),
                e = e.sibling
    }
    function pg(t, e, l, i) {
        var s = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            qn(t, e, l, i),
            s & 2048 && Sr(9, e);
            break;
        case 1:
            qn(t, e, l, i);
            break;
        case 3:
            qn(t, e, l, i),
            s & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && cr(t)));
            break;
        case 12:
            if (s & 2048) {
                qn(t, e, l, i),
                t = e.stateNode;
                try {
                    var c = e.memoizedProps
                      , m = c.id
                      , v = c.onPostCommit;
                    typeof v == "function" && v(m, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (T) {
                    $t(e, e.return, T)
                }
            } else
                qn(t, e, l, i);
            break;
        case 31:
            qn(t, e, l, i);
            break;
        case 13:
            qn(t, e, l, i);
            break;
        case 23:
            break;
        case 22:
            c = e.stateNode,
            m = e.alternate,
            e.memoizedState !== null ? c._visibility & 2 ? qn(t, e, l, i) : Er(t, e) : c._visibility & 2 ? qn(t, e, l, i) : (c._visibility |= 2,
            yu(t, e, l, i, (e.subtreeFlags & 10256) !== 0 || !1)),
            s & 2048 && ko(m, e);
            break;
        case 24:
            qn(t, e, l, i),
            s & 2048 && Qo(e.alternate, e);
            break;
        default:
            qn(t, e, l, i)
        }
    }
    function yu(t, e, l, i, s) {
        for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var c = t
              , m = e
              , v = l
              , T = i
              , R = m.flags;
            switch (m.tag) {
            case 0:
            case 11:
            case 15:
                yu(c, m, v, T, s),
                Sr(8, m);
                break;
            case 23:
                break;
            case 22:
                var X = m.stateNode;
                m.memoizedState !== null ? X._visibility & 2 ? yu(c, m, v, T, s) : Er(c, m) : (X._visibility |= 2,
                yu(c, m, v, T, s)),
                s && R & 2048 && ko(m.alternate, m);
                break;
            case 24:
                yu(c, m, v, T, s),
                s && R & 2048 && Qo(m.alternate, m);
                break;
            default:
                yu(c, m, v, T, s)
            }
            e = e.sibling
        }
    }
    function Er(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var l = t
                  , i = e
                  , s = i.flags;
                switch (i.tag) {
                case 22:
                    Er(l, i),
                    s & 2048 && ko(i.alternate, i);
                    break;
                case 24:
                    Er(l, i),
                    s & 2048 && Qo(i.alternate, i);
                    break;
                default:
                    Er(l, i)
                }
                e = e.sibling
            }
    }
    var Ar = 8192;
    function bu(t, e, l) {
        if (t.subtreeFlags & Ar)
            for (t = t.child; t !== null; )
                _g(t, e, l),
                t = t.sibling
    }
    function _g(t, e, l) {
        switch (t.tag) {
        case 26:
            bu(t, e, l),
            t.flags & Ar && t.memoizedState !== null && Qy(l, Yn, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            bu(t, e, l);
            break;
        case 3:
        case 4:
            var i = Yn;
            Yn = yc(t.stateNode.containerInfo),
            bu(t, e, l),
            Yn = i;
            break;
        case 22:
            t.memoizedState === null && (i = t.alternate,
            i !== null && i.memoizedState !== null ? (i = Ar,
            Ar = 16777216,
            bu(t, e, l),
            Ar = i) : bu(t, e, l));
            break;
        default:
            bu(t, e, l)
        }
    }
    function vg(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function zr(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var i = e[l];
                    Fe = i,
                    bg(i, t)
                }
            vg(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                yg(t),
                t = t.sibling
    }
    function yg(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            zr(t),
            t.flags & 2048 && Gi(9, t, t.return);
            break;
        case 3:
            zr(t);
            break;
        case 12:
            zr(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            uc(t)) : zr(t);
            break;
        default:
            zr(t)
        }
    }
    function uc(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var l = 0; l < e.length; l++) {
                    var i = e[l];
                    Fe = i,
                    bg(i, t)
                }
            vg(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                Gi(8, e, e.return),
                uc(e);
                break;
            case 22:
                l = e.stateNode,
                l._visibility & 2 && (l._visibility &= -3,
                uc(e));
                break;
            default:
                uc(e)
            }
            t = t.sibling
        }
    }
    function bg(t, e) {
        for (; Fe !== null; ) {
            var l = Fe;
            switch (l.tag) {
            case 0:
            case 11:
            case 15:
                Gi(8, l, e);
                break;
            case 23:
            case 22:
                if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                    var i = l.memoizedState.cachePool.pool;
                    i != null && i.refCount++
                }
                break;
            case 24:
                cr(l.memoizedState.cache)
            }
            if (i = l.child,
            i !== null)
                i.return = l,
                Fe = i;
            else
                t: for (l = t; Fe !== null; ) {
                    i = Fe;
                    var s = i.sibling
                      , c = i.return;
                    if (fg(i),
                    i === l) {
                        Fe = null;
                        break t
                    }
                    if (s !== null) {
                        s.return = c,
                        Fe = s;
                        break t
                    }
                    Fe = c
                }
        }
    }
    var uy = {
        getCacheForType: function(t) {
            var e = el(He)
              , l = e.data.get(t);
            return l === void 0 && (l = t(),
            e.data.set(t, l)),
            l
        },
        cacheSignal: function() {
            return el(He).controller.signal
        }
    }
      , ry = typeof WeakMap == "function" ? WeakMap : Map
      , Kt = 0
      , ee = null
      , Ut = null
      , Yt = 0
      , Wt = 0
      , Wl = null
      , Vi = !1
      , xu = !1
      , Zo = !1
      , bi = 0
      , Ee = 0
      , ki = 0
      , wa = 0
      , Ko = 0
      , $l = 0
      , Su = 0
      , Mr = null
      , jl = null
      , Jo = !1
      , rc = 0
      , xg = 0
      , sc = 1 / 0
      , cc = null
      , Qi = null
      , ke = 0
      , Zi = null
      , Tu = null
      , xi = 0
      , Fo = 0
      , Wo = null
      , Sg = null
      , Cr = 0
      , $o = null;
    function Pl() {
        return (Kt & 2) !== 0 && Yt !== 0 ? Yt & -Yt : N.T !== null ? nd() : Nt()
    }
    function Tg() {
        if ($l === 0)
            if ((Yt & 536870912) === 0 || Lt) {
                var t = sl;
                sl <<= 1,
                (sl & 3932160) === 0 && (sl = 262144),
                $l = t
            } else
                $l = 536870912;
        return t = Jl.current,
        t !== null && (t.flags |= 32),
        $l
    }
    function Ul(t, e, l) {
        (t === ee && (Wt === 2 || Wt === 9) || t.cancelPendingCommit !== null) && (Eu(t, 0),
        Ki(t, Yt, $l, !1)),
        rt(t, l),
        ((Kt & 2) === 0 || t !== ee) && (t === ee && ((Kt & 2) === 0 && (wa |= l),
        Ee === 4 && Ki(t, Yt, $l, !1)),
        Wn(t))
    }
    function Eg(t, e, l) {
        if ((Kt & 6) !== 0)
            throw Error(a(327));
        var i = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gn(t, e)
          , s = i ? fy(t, e) : Io(t, e, !0)
          , c = i;
        do {
            if (s === 0) {
                xu && !i && Ki(t, e, 0, !1);
                break
            } else {
                if (l = t.current.alternate,
                c && !sy(l)) {
                    s = Io(t, e, !1),
                    c = !1;
                    continue
                }
                if (s === 2) {
                    if (c = e,
                    t.errorRecoveryDisabledLanes & c)
                        var m = 0;
                    else
                        m = t.pendingLanes & -536870913,
                        m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
                    if (m !== 0) {
                        e = m;
                        t: {
                            var v = t;
                            s = Mr;
                            var T = v.current.memoizedState.isDehydrated;
                            if (T && (Eu(v, m).flags |= 256),
                            m = Io(v, m, !1),
                            m !== 2) {
                                if (Zo && !T) {
                                    v.errorRecoveryDisabledLanes |= c,
                                    wa |= c,
                                    s = 4;
                                    break t
                                }
                                c = jl,
                                jl = s,
                                c !== null && (jl === null ? jl = c : jl.push.apply(jl, c))
                            }
                            s = m
                        }
                        if (c = !1,
                        s !== 2)
                            continue
                    }
                }
                if (s === 1) {
                    Eu(t, 0),
                    Ki(t, e, 0, !0);
                    break
                }
                t: {
                    switch (i = t,
                    c = s,
                    c) {
                    case 0:
                    case 1:
                        throw Error(a(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        Ki(i, e, $l, !Vi);
                        break t;
                    case 2:
                        jl = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(a(329))
                    }
                    if ((e & 62914560) === e && (s = rc + 300 - Me(),
                    10 < s)) {
                        if (Ki(i, e, $l, !Vi),
                        mn(i, 0, !0) !== 0)
                            break t;
                        xi = e,
                        i.timeoutHandle = e1(Ag.bind(null, i, l, jl, cc, Jo, e, $l, wa, Su, Vi, c, "Throttled", -0, 0), s);
                        break t
                    }
                    Ag(i, l, jl, cc, Jo, e, $l, wa, Su, Vi, c, null, -0, 0)
                }
            }
            break
        } while (!0);
        Wn(t)
    }
    function Ag(t, e, l, i, s, c, m, v, T, R, X, K, U, H) {
        if (t.timeoutHandle = -1,
        K = e.subtreeFlags,
        K & 8192 || (K & 16785408) === 16785408) {
            K = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: ui
            },
            _g(e, c, K);
            var nt = (c & 62914560) === c ? rc - Me() : (c & 4194048) === c ? xg - Me() : 0;
            if (nt = Zy(K, nt),
            nt !== null) {
                xi = c,
                t.cancelPendingCommit = nt(Rg.bind(null, t, e, c, l, i, s, m, v, T, X, K, null, U, H)),
                Ki(t, c, m, !R);
                return
            }
        }
        Rg(t, e, c, l, i, s, m, v, T)
    }
    function sy(t) {
        for (var e = t; ; ) {
            var l = e.tag;
            if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue,
            l !== null && (l = l.stores,
            l !== null)))
                for (var i = 0; i < l.length; i++) {
                    var s = l[i]
                      , c = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!Zl(c(), s))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (l = e.child,
            e.subtreeFlags & 16384 && l !== null)
                l.return = e,
                e = l;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function Ki(t, e, l, i) {
        e &= ~Ko,
        e &= ~wa,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        i && (t.warmLanes |= e),
        i = t.expirationTimes;
        for (var s = e; 0 < s; ) {
            var c = 31 - Ue(s)
              , m = 1 << c;
            i[c] = -1,
            s &= ~m
        }
        l !== 0 && lt(t, l, e)
    }
    function fc() {
        return (Kt & 6) === 0 ? (Or(0),
        !1) : !0
    }
    function Po() {
        if (Ut !== null) {
            if (Wt === 0)
                var t = Ut.return;
            else
                t = Ut,
                fi = Ta = null,
                mo(t),
                mu = null,
                or = 0,
                t = Ut;
            for (; t !== null; )
                lg(t.alternate, t),
                t = t.return;
            Ut = null
        }
    }
    function Eu(t, e) {
        var l = t.timeoutHandle;
        l !== -1 && (t.timeoutHandle = -1,
        Cy(l)),
        l = t.cancelPendingCommit,
        l !== null && (t.cancelPendingCommit = null,
        l()),
        xi = 0,
        Po(),
        ee = t,
        Ut = l = si(t.current, null),
        Yt = e,
        Wt = 0,
        Wl = null,
        Vi = !1,
        xu = gn(t, e),
        Zo = !1,
        Su = $l = Ko = wa = ki = Ee = 0,
        jl = Mr = null,
        Jo = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var i = t.entangledLanes;
        if (i !== 0)
            for (t = t.entanglements,
            i &= e; 0 < i; ) {
                var s = 31 - Ue(i)
                  , c = 1 << s;
                e |= t[s],
                i &= ~c
            }
        return bi = e,
        Ns(),
        l
    }
    function zg(t, e) {
        Tt = null,
        N.H = yr,
        e === hu || e === qs ? (e = G0(),
        Wt = 3) : e === eo ? (e = G0(),
        Wt = 4) : Wt = e === Do ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Wl = e,
        Ut === null && (Ee = 1,
        Is(t, xn(e, t.current)))
    }
    function Mg() {
        var t = Jl.current;
        return t === null ? !0 : (Yt & 4194048) === Yt ? An === null : (Yt & 62914560) === Yt || (Yt & 536870912) !== 0 ? t === An : !1
    }
    function Cg() {
        var t = N.H;
        return N.H = yr,
        t === null ? yr : t
    }
    function Og() {
        var t = N.A;
        return N.A = uy,
        t
    }
    function oc() {
        Ee = 4,
        Vi || (Yt & 4194048) !== Yt && Jl.current !== null || (xu = !0),
        (ki & 134217727) === 0 && (wa & 134217727) === 0 || ee === null || Ki(ee, Yt, $l, !1)
    }
    function Io(t, e, l) {
        var i = Kt;
        Kt |= 2;
        var s = Cg()
          , c = Og();
        (ee !== t || Yt !== e) && (cc = null,
        Eu(t, e)),
        e = !1;
        var m = Ee;
        t: do
            try {
                if (Wt !== 0 && Ut !== null) {
                    var v = Ut
                      , T = Wl;
                    switch (Wt) {
                    case 8:
                        Po(),
                        m = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Jl.current === null && (e = !0);
                        var R = Wt;
                        if (Wt = 0,
                        Wl = null,
                        Au(t, v, T, R),
                        l && xu) {
                            m = 0;
                            break t
                        }
                        break;
                    default:
                        R = Wt,
                        Wt = 0,
                        Wl = null,
                        Au(t, v, T, R)
                    }
                }
                cy(),
                m = Ee;
                break
            } catch (X) {
                zg(t, X)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        fi = Ta = null,
        Kt = i,
        N.H = s,
        N.A = c,
        Ut === null && (ee = null,
        Yt = 0,
        Ns()),
        m
    }
    function cy() {
        for (; Ut !== null; )
            Dg(Ut)
    }
    function fy(t, e) {
        var l = Kt;
        Kt |= 2;
        var i = Cg()
          , s = Og();
        ee !== t || Yt !== e ? (cc = null,
        sc = Me() + 500,
        Eu(t, e)) : xu = gn(t, e);
        t: do
            try {
                if (Wt !== 0 && Ut !== null) {
                    e = Ut;
                    var c = Wl;
                    e: switch (Wt) {
                    case 1:
                        Wt = 0,
                        Wl = null,
                        Au(t, e, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (L0(c)) {
                            Wt = 0,
                            Wl = null,
                            Ng(e);
                            break
                        }
                        e = function() {
                            Wt !== 2 && Wt !== 9 || ee !== t || (Wt = 7),
                            Wn(t)
                        }
                        ,
                        c.then(e, e);
                        break t;
                    case 3:
                        Wt = 7;
                        break t;
                    case 4:
                        Wt = 5;
                        break t;
                    case 7:
                        L0(c) ? (Wt = 0,
                        Wl = null,
                        Ng(e)) : (Wt = 0,
                        Wl = null,
                        Au(t, e, c, 7));
                        break;
                    case 5:
                        var m = null;
                        switch (Ut.tag) {
                        case 26:
                            m = Ut.memoizedState;
                        case 5:
                        case 27:
                            var v = Ut;
                            if (m ? p1(m) : v.stateNode.complete) {
                                Wt = 0,
                                Wl = null;
                                var T = v.sibling;
                                if (T !== null)
                                    Ut = T;
                                else {
                                    var R = v.return;
                                    R !== null ? (Ut = R,
                                    dc(R)) : Ut = null
                                }
                                break e
                            }
                        }
                        Wt = 0,
                        Wl = null,
                        Au(t, e, c, 5);
                        break;
                    case 6:
                        Wt = 0,
                        Wl = null,
                        Au(t, e, c, 6);
                        break;
                    case 8:
                        Po(),
                        Ee = 6;
                        break t;
                    default:
                        throw Error(a(462))
                    }
                }
                oy();
                break
            } catch (X) {
                zg(t, X)
            }
        while (!0);
        return fi = Ta = null,
        N.H = i,
        N.A = s,
        Kt = l,
        Ut !== null ? 0 : (ee = null,
        Yt = 0,
        Ns(),
        Ee)
    }
    function oy() {
        for (; Ut !== null && !jn(); )
            Dg(Ut)
    }
    function Dg(t) {
        var e = tg(t.alternate, t, bi);
        t.memoizedProps = t.pendingProps,
        e === null ? dc(t) : Ut = e
    }
    function Ng(t) {
        var e = t
          , l = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = Jm(l, e, e.pendingProps, e.type, void 0, Yt);
            break;
        case 11:
            e = Jm(l, e, e.pendingProps, e.type.render, e.ref, Yt);
            break;
        case 5:
            mo(e);
        default:
            lg(l, e),
            e = Ut = O0(e, bi),
            e = tg(l, e, bi)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? dc(t) : Ut = e
    }
    function Au(t, e, l, i) {
        fi = Ta = null,
        mo(e),
        mu = null,
        or = 0;
        var s = e.return;
        try {
            if (Iv(t, s, e, l, Yt)) {
                Ee = 1,
                Is(t, xn(l, t.current)),
                Ut = null;
                return
            }
        } catch (c) {
            if (s !== null)
                throw Ut = s,
                c;
            Ee = 1,
            Is(t, xn(l, t.current)),
            Ut = null;
            return
        }
        e.flags & 32768 ? (Lt || i === 1 ? t = !0 : xu || (Yt & 536870912) !== 0 ? t = !1 : (Vi = t = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = Jl.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        wg(e, t)) : dc(e)
    }
    function dc(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                wg(e, Vi);
                return
            }
            t = e.return;
            var l = ly(e.alternate, e, bi);
            if (l !== null) {
                Ut = l;
                return
            }
            if (e = e.sibling,
            e !== null) {
                Ut = e;
                return
            }
            Ut = e = t
        } while (e !== null);
        Ee === 0 && (Ee = 5)
    }
    function wg(t, e) {
        do {
            var l = ny(t.alternate, t);
            if (l !== null) {
                l.flags &= 32767,
                Ut = l;
                return
            }
            if (l = t.return,
            l !== null && (l.flags |= 32768,
            l.subtreeFlags = 0,
            l.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                Ut = t;
                return
            }
            Ut = t = l
        } while (t !== null);
        Ee = 6,
        Ut = null
    }
    function Rg(t, e, l, i, s, c, m, v, T) {
        t.cancelPendingCommit = null;
        do
            hc();
        while (ke !== 0);
        if ((Kt & 6) !== 0)
            throw Error(a(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(a(177));
            if (c = e.lanes | e.childLanes,
            c |= Lf,
            Vt(t, l, c, m, v, T),
            t === ee && (Ut = ee = null,
            Yt = 0),
            Tu = e,
            Zi = t,
            xi = l,
            Fo = c,
            Wo = s,
            Sg = i,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            gy(rl, function() {
                return Yg(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            i = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || i) {
                i = N.T,
                N.T = null,
                s = k.p,
                k.p = 2,
                m = Kt,
                Kt |= 4;
                try {
                    iy(t, e, l)
                } finally {
                    Kt = m,
                    k.p = s,
                    N.T = i
                }
            }
            ke = 1,
            jg(),
            Ug(),
            Hg()
        }
    }
    function jg() {
        if (ke === 1) {
            ke = 0;
            var t = Zi
              , e = Tu
              , l = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || l) {
                l = N.T,
                N.T = null;
                var i = k.p;
                k.p = 2;
                var s = Kt;
                Kt |= 4;
                try {
                    mg(e, t);
                    var c = od
                      , m = b0(t.containerInfo)
                      , v = c.focusedElem
                      , T = c.selectionRange;
                    if (m !== v && v && v.ownerDocument && y0(v.ownerDocument.documentElement, v)) {
                        if (T !== null && Uf(v)) {
                            var R = T.start
                              , X = T.end;
                            if (X === void 0 && (X = R),
                            "selectionStart"in v)
                                v.selectionStart = R,
                                v.selectionEnd = Math.min(X, v.value.length);
                            else {
                                var K = v.ownerDocument || document
                                  , U = K && K.defaultView || window;
                                if (U.getSelection) {
                                    var H = U.getSelection()
                                      , nt = v.textContent.length
                                      , mt = Math.min(T.start, nt)
                                      , te = T.end === void 0 ? mt : Math.min(T.end, nt);
                                    !H.extend && mt > te && (m = te,
                                    te = mt,
                                    mt = m);
                                    var O = v0(v, mt)
                                      , A = v0(v, te);
                                    if (O && A && (H.rangeCount !== 1 || H.anchorNode !== O.node || H.anchorOffset !== O.offset || H.focusNode !== A.node || H.focusOffset !== A.offset)) {
                                        var w = K.createRange();
                                        w.setStart(O.node, O.offset),
                                        H.removeAllRanges(),
                                        mt > te ? (H.addRange(w),
                                        H.extend(A.node, A.offset)) : (w.setEnd(A.node, A.offset),
                                        H.addRange(w))
                                    }
                                }
                            }
                        }
                        for (K = [],
                        H = v; H = H.parentNode; )
                            H.nodeType === 1 && K.push({
                                element: H,
                                left: H.scrollLeft,
                                top: H.scrollTop
                            });
                        for (typeof v.focus == "function" && v.focus(),
                        v = 0; v < K.length; v++) {
                            var Q = K[v];
                            Q.element.scrollLeft = Q.left,
                            Q.element.scrollTop = Q.top
                        }
                    }
                    Ac = !!fd,
                    od = fd = null
                } finally {
                    Kt = s,
                    k.p = i,
                    N.T = l
                }
            }
            t.current = e,
            ke = 2
        }
    }
    function Ug() {
        if (ke === 2) {
            ke = 0;
            var t = Zi
              , e = Tu
              , l = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || l) {
                l = N.T,
                N.T = null;
                var i = k.p;
                k.p = 2;
                var s = Kt;
                Kt |= 4;
                try {
                    cg(t, e.alternate, e)
                } finally {
                    Kt = s,
                    k.p = i,
                    N.T = l
                }
            }
            ke = 3
        }
    }
    function Hg() {
        if (ke === 4 || ke === 3) {
            ke = 0,
            Xn();
            var t = Zi
              , e = Tu
              , l = xi
              , i = Sg;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ke = 5 : (ke = 0,
            Tu = Zi = null,
            Bg(t, t.pendingLanes));
            var s = t.pendingLanes;
            if (s === 0 && (Qi = null),
            Se(l),
            e = e.stateNode,
            me && typeof me.onCommitFiberRoot == "function")
                try {
                    me.onCommitFiberRoot(Gn, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                e = N.T,
                s = k.p,
                k.p = 2,
                N.T = null;
                try {
                    for (var c = t.onRecoverableError, m = 0; m < i.length; m++) {
                        var v = i[m];
                        c(v.value, {
                            componentStack: v.stack
                        })
                    }
                } finally {
                    N.T = e,
                    k.p = s
                }
            }
            (xi & 3) !== 0 && hc(),
            Wn(t),
            s = t.pendingLanes,
            (l & 261930) !== 0 && (s & 42) !== 0 ? t === $o ? Cr++ : (Cr = 0,
            $o = t) : Cr = 0,
            Or(0)
        }
    }
    function Bg(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        cr(e)))
    }
    function hc() {
        return jg(),
        Ug(),
        Hg(),
        Yg()
    }
    function Yg() {
        if (ke !== 5)
            return !1;
        var t = Zi
          , e = Fo;
        Fo = 0;
        var l = Se(xi)
          , i = N.T
          , s = k.p;
        try {
            k.p = 32 > l ? 32 : l,
            N.T = null,
            l = Wo,
            Wo = null;
            var c = Zi
              , m = xi;
            if (ke = 0,
            Tu = Zi = null,
            xi = 0,
            (Kt & 6) !== 0)
                throw Error(a(331));
            var v = Kt;
            if (Kt |= 4,
            yg(c.current),
            pg(c, c.current, m, l),
            Kt = v,
            Or(0, !1),
            me && typeof me.onPostCommitFiberRoot == "function")
                try {
                    me.onPostCommitFiberRoot(Gn, c)
                } catch {}
            return !0
        } finally {
            k.p = s,
            N.T = i,
            Bg(t, e)
        }
    }
    function qg(t, e, l) {
        e = xn(l, e),
        e = Oo(t.stateNode, e, 2),
        t = qi(t, e, 2),
        t !== null && (rt(t, 2),
        Wn(t))
    }
    function $t(t, e, l) {
        if (t.tag === 3)
            qg(t, t, l);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    qg(e, t, l);
                    break
                } else if (e.tag === 1) {
                    var i = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Qi === null || !Qi.has(i))) {
                        t = xn(l, t),
                        l = Lm(2),
                        i = qi(e, l, 2),
                        i !== null && (Xm(l, i, e, t),
                        rt(i, 2),
                        Wn(i));
                        break
                    }
                }
                e = e.return
            }
    }
    function td(t, e, l) {
        var i = t.pingCache;
        if (i === null) {
            i = t.pingCache = new ry;
            var s = new Set;
            i.set(e, s)
        } else
            s = i.get(e),
            s === void 0 && (s = new Set,
            i.set(e, s));
        s.has(l) || (Zo = !0,
        s.add(l),
        t = dy.bind(null, t, e, l),
        e.then(t, t))
    }
    function dy(t, e, l) {
        var i = t.pingCache;
        i !== null && i.delete(e),
        t.pingedLanes |= t.suspendedLanes & l,
        t.warmLanes &= ~l,
        ee === t && (Yt & l) === l && (Ee === 4 || Ee === 3 && (Yt & 62914560) === Yt && 300 > Me() - rc ? (Kt & 2) === 0 && Eu(t, 0) : Ko |= l,
        Su === Yt && (Su = 0)),
        Wn(t)
    }
    function Lg(t, e) {
        e === 0 && (e = Di()),
        t = ba(t, e),
        t !== null && (rt(t, e),
        Wn(t))
    }
    function hy(t) {
        var e = t.memoizedState
          , l = 0;
        e !== null && (l = e.retryLane),
        Lg(t, l)
    }
    function my(t, e) {
        var l = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var i = t.stateNode
              , s = t.memoizedState;
            s !== null && (l = s.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        case 22:
            i = t.stateNode._retryCache;
            break;
        default:
            throw Error(a(314))
        }
        i !== null && i.delete(e),
        Lg(t, l)
    }
    function gy(t, e) {
        return on(t, e)
    }
    var mc = null
      , zu = null
      , ed = !1
      , gc = !1
      , ld = !1
      , Ji = 0;
    function Wn(t) {
        t !== zu && t.next === null && (zu === null ? mc = zu = t : zu = zu.next = t),
        gc = !0,
        ed || (ed = !0,
        _y())
    }
    function Or(t, e) {
        if (!ld && gc) {
            ld = !0;
            do
                for (var l = !1, i = mc; i !== null; ) {
                    if (t !== 0) {
                        var s = i.pendingLanes;
                        if (s === 0)
                            var c = 0;
                        else {
                            var m = i.suspendedLanes
                              , v = i.pingedLanes;
                            c = (1 << 31 - Ue(42 | t) + 1) - 1,
                            c &= s & ~(m & ~v),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (l = !0,
                        kg(i, c))
                    } else
                        c = Yt,
                        c = mn(i, i === ee ? c : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (c & 3) === 0 || gn(i, c) || (l = !0,
                        kg(i, c));
                    i = i.next
                }
            while (l);
            ld = !1
        }
    }
    function py() {
        Xg()
    }
    function Xg() {
        gc = ed = !1;
        var t = 0;
        Ji !== 0 && My() && (t = Ji);
        for (var e = Me(), l = null, i = mc; i !== null; ) {
            var s = i.next
              , c = Gg(i, e);
            c === 0 ? (i.next = null,
            l === null ? mc = s : l.next = s,
            s === null && (zu = l)) : (l = i,
            (t !== 0 || (c & 3) !== 0) && (gc = !0)),
            i = s
        }
        ke !== 0 && ke !== 5 || Or(t),
        Ji !== 0 && (Ji = 0)
    }
    function Gg(t, e) {
        for (var l = t.suspendedLanes, i = t.pingedLanes, s = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
            var m = 31 - Ue(c)
              , v = 1 << m
              , T = s[m];
            T === -1 ? ((v & l) === 0 || (v & i) !== 0) && (s[m] = Hn(v, e)) : T <= e && (t.expiredLanes |= v),
            c &= ~v
        }
        if (e = ee,
        l = Yt,
        l = mn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        i = t.callbackNode,
        l === 0 || t === e && (Wt === 2 || Wt === 9) || t.cancelPendingCommit !== null)
            return i !== null && i !== null && ie(i),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((l & 3) === 0 || gn(t, l)) {
            if (e = l & -l,
            e === t.callbackPriority)
                return e;
            switch (i !== null && ie(i),
            Se(l)) {
            case 2:
            case 8:
                l = fe;
                break;
            case 32:
                l = rl;
                break;
            case 268435456:
                l = dn;
                break;
            default:
                l = rl
            }
            return i = Vg.bind(null, t),
            l = on(l, i),
            t.callbackPriority = e,
            t.callbackNode = l,
            e
        }
        return i !== null && i !== null && ie(i),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function Vg(t, e) {
        if (ke !== 0 && ke !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var l = t.callbackNode;
        if (hc() && t.callbackNode !== l)
            return null;
        var i = Yt;
        return i = mn(t, t === ee ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        i === 0 ? null : (Eg(t, i, e),
        Gg(t, Me()),
        t.callbackNode != null && t.callbackNode === l ? Vg.bind(null, t) : null)
    }
    function kg(t, e) {
        if (hc())
            return null;
        Eg(t, e, !0)
    }
    function _y() {
        Oy(function() {
            (Kt & 6) !== 0 ? on(Un, py) : Xg()
        })
    }
    function nd() {
        if (Ji === 0) {
            var t = ou;
            t === 0 && (t = hn,
            hn <<= 1,
            (hn & 261888) === 0 && (hn = 256)),
            Ji = t
        }
        return Ji
    }
    function Qg(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ts("" + t)
    }
    function Zg(t, e) {
        var l = e.ownerDocument.createElement("input");
        return l.name = e.name,
        l.value = e.value,
        t.id && l.setAttribute("form", t.id),
        e.parentNode.insertBefore(l, e),
        t = new FormData(t),
        l.parentNode.removeChild(l),
        t
    }
    function vy(t, e, l, i, s) {
        if (e === "submit" && l && l.stateNode === s) {
            var c = Qg((s[Ct] || null).action)
              , m = i.submitter;
            m && (e = (e = m[Ct] || null) ? Qg(e.formAction) : m.getAttribute("formAction"),
            e !== null && (c = e,
            m = null));
            var v = new Ms("action","action",null,i,s);
            t.push({
                event: v,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (Ji !== 0) {
                                var T = m ? Zg(s, m) : new FormData(s);
                                To(l, {
                                    pending: !0,
                                    data: T,
                                    method: s.method,
                                    action: c
                                }, null, T)
                            }
                        } else
                            typeof c == "function" && (v.preventDefault(),
                            T = m ? Zg(s, m) : new FormData(s),
                            To(l, {
                                pending: !0,
                                data: T,
                                method: s.method,
                                action: c
                            }, c, T))
                    },
                    currentTarget: s
                }]
            })
        }
    }
    for (var id = 0; id < qf.length; id++) {
        var ad = qf[id]
          , yy = ad.toLowerCase()
          , by = ad[0].toUpperCase() + ad.slice(1);
        Bn(yy, "on" + by)
    }
    Bn(T0, "onAnimationEnd"),
    Bn(E0, "onAnimationIteration"),
    Bn(A0, "onAnimationStart"),
    Bn("dblclick", "onDoubleClick"),
    Bn("focusin", "onFocus"),
    Bn("focusout", "onBlur"),
    Bn(Hv, "onTransitionRun"),
    Bn(Bv, "onTransitionStart"),
    Bn(Yv, "onTransitionCancel"),
    Bn(z0, "onTransitionEnd"),
    pn("onMouseEnter", ["mouseout", "mouseover"]),
    pn("onMouseLeave", ["mouseout", "mouseover"]),
    pn("onPointerEnter", ["pointerout", "pointerover"]),
    pn("onPointerLeave", ["pointerout", "pointerover"]),
    Qn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Qn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Qn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Qn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Qn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Qn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , xy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dr));
    function Kg(t, e) {
        e = (e & 4) !== 0;
        for (var l = 0; l < t.length; l++) {
            var i = t[l]
              , s = i.event;
            i = i.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var m = i.length - 1; 0 <= m; m--) {
                        var v = i[m]
                          , T = v.instance
                          , R = v.currentTarget;
                        if (v = v.listener,
                        T !== c && s.isPropagationStopped())
                            break t;
                        c = v,
                        s.currentTarget = R;
                        try {
                            c(s)
                        } catch (X) {
                            Ds(X)
                        }
                        s.currentTarget = null,
                        c = T
                    }
                else
                    for (m = 0; m < i.length; m++) {
                        if (v = i[m],
                        T = v.instance,
                        R = v.currentTarget,
                        v = v.listener,
                        T !== c && s.isPropagationStopped())
                            break t;
                        c = v,
                        s.currentTarget = R;
                        try {
                            c(s)
                        } catch (X) {
                            Ds(X)
                        }
                        s.currentTarget = null,
                        c = T
                    }
            }
        }
    }
    function Ht(t, e) {
        var l = e[_l];
        l === void 0 && (l = e[_l] = new Set);
        var i = t + "__bubble";
        l.has(i) || (Jg(e, t, 2, !1),
        l.add(i))
    }
    function ud(t, e, l) {
        var i = 0;
        e && (i |= 4),
        Jg(l, t, i, e)
    }
    var pc = "_reactListening" + Math.random().toString(36).slice(2);
    function rd(t) {
        if (!t[pc]) {
            t[pc] = !0,
            Ql.forEach(function(l) {
                l !== "selectionchange" && (xy.has(l) || ud(l, !1, t),
                ud(l, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[pc] || (e[pc] = !0,
            ud("selectionchange", !1, e))
        }
    }
    function Jg(t, e, l, i) {
        switch (T1(e)) {
        case 2:
            var s = Fy;
            break;
        case 8:
            s = Wy;
            break;
        default:
            s = Sd
        }
        l = s.bind(null, e, l, t),
        s = void 0,
        !zf || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0),
        i ? s !== void 0 ? t.addEventListener(e, l, {
            capture: !0,
            passive: s
        }) : t.addEventListener(e, l, !0) : s !== void 0 ? t.addEventListener(e, l, {
            passive: s
        }) : t.addEventListener(e, l, !1)
    }
    function sd(t, e, l, i, s) {
        var c = i;
        if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
            t: for (; ; ) {
                if (i === null)
                    return;
                var m = i.tag;
                if (m === 3 || m === 4) {
                    var v = i.stateNode.containerInfo;
                    if (v === s)
                        break;
                    if (m === 4)
                        for (m = i.return; m !== null; ) {
                            var T = m.tag;
                            if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                                return;
                            m = m.return
                        }
                    for (; v !== null; ) {
                        if (m = pe(v),
                        m === null)
                            return;
                        if (T = m.tag,
                        T === 5 || T === 6 || T === 26 || T === 27) {
                            i = c = m;
                            continue t
                        }
                        v = v.parentNode
                    }
                }
                i = i.return
            }
        Ih(function() {
            var R = c
              , X = Ef(l)
              , K = [];
            t: {
                var U = M0.get(t);
                if (U !== void 0) {
                    var H = Ms
                      , nt = t;
                    switch (t) {
                    case "keypress":
                        if (As(l) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        H = mv;
                        break;
                    case "focusin":
                        nt = "focus",
                        H = Df;
                        break;
                    case "focusout":
                        nt = "blur",
                        H = Df;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        H = Df;
                        break;
                    case "click":
                        if (l.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        H = l0;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        H = lv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        H = _v;
                        break;
                    case T0:
                    case E0:
                    case A0:
                        H = av;
                        break;
                    case z0:
                        H = yv;
                        break;
                    case "scroll":
                    case "scrollend":
                        H = tv;
                        break;
                    case "wheel":
                        H = xv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        H = rv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        H = i0;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        H = Tv
                    }
                    var mt = (e & 4) !== 0
                      , te = !mt && (t === "scroll" || t === "scrollend")
                      , O = mt ? U !== null ? U + "Capture" : null : U;
                    mt = [];
                    for (var A = R, w; A !== null; ) {
                        var Q = A;
                        if (w = Q.stateNode,
                        Q = Q.tag,
                        Q !== 5 && Q !== 26 && Q !== 27 || w === null || O === null || (Q = Pu(A, O),
                        Q != null && mt.push(Nr(A, Q, w))),
                        te)
                            break;
                        A = A.return
                    }
                    0 < mt.length && (U = new H(U,nt,null,l,X),
                    K.push({
                        event: U,
                        listeners: mt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (U = t === "mouseover" || t === "pointerover",
                    H = t === "mouseout" || t === "pointerout",
                    U && l !== Tf && (nt = l.relatedTarget || l.fromElement) && (pe(nt) || nt[Gt]))
                        break t;
                    if ((H || U) && (U = X.window === X ? X : (U = X.ownerDocument) ? U.defaultView || U.parentWindow : window,
                    H ? (nt = l.relatedTarget || l.toElement,
                    H = R,
                    nt = nt ? pe(nt) : null,
                    nt !== null && (te = f(nt),
                    mt = nt.tag,
                    nt !== te || mt !== 5 && mt !== 27 && mt !== 6) && (nt = null)) : (H = null,
                    nt = R),
                    H !== nt)) {
                        if (mt = l0,
                        Q = "onMouseLeave",
                        O = "onMouseEnter",
                        A = "mouse",
                        (t === "pointerout" || t === "pointerover") && (mt = i0,
                        Q = "onPointerLeave",
                        O = "onPointerEnter",
                        A = "pointer"),
                        te = H == null ? U : kn(H),
                        w = nt == null ? U : kn(nt),
                        U = new mt(Q,A + "leave",H,l,X),
                        U.target = te,
                        U.relatedTarget = w,
                        Q = null,
                        pe(X) === R && (mt = new mt(O,A + "enter",nt,l,X),
                        mt.target = w,
                        mt.relatedTarget = te,
                        Q = mt),
                        te = Q,
                        H && nt)
                            e: {
                                for (mt = Sy,
                                O = H,
                                A = nt,
                                w = 0,
                                Q = O; Q; Q = mt(Q))
                                    w++;
                                Q = 0;
                                for (var ct = A; ct; ct = mt(ct))
                                    Q++;
                                for (; 0 < w - Q; )
                                    O = mt(O),
                                    w--;
                                for (; 0 < Q - w; )
                                    A = mt(A),
                                    Q--;
                                for (; w--; ) {
                                    if (O === A || A !== null && O === A.alternate) {
                                        mt = O;
                                        break e
                                    }
                                    O = mt(O),
                                    A = mt(A)
                                }
                                mt = null
                            }
                        else
                            mt = null;
                        H !== null && Fg(K, U, H, mt, !1),
                        nt !== null && te !== null && Fg(K, te, nt, mt, !0)
                    }
                }
                t: {
                    if (U = R ? kn(R) : window,
                    H = U.nodeName && U.nodeName.toLowerCase(),
                    H === "select" || H === "input" && U.type === "file")
                        var kt = d0;
                    else if (f0(U))
                        if (h0)
                            kt = Rv;
                        else {
                            kt = Nv;
                            var at = Dv
                        }
                    else
                        H = U.nodeName,
                        !H || H.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? R && Sf(R.elementType) && (kt = d0) : kt = wv;
                    if (kt && (kt = kt(t, R))) {
                        o0(K, kt, l, X);
                        break t
                    }
                    at && at(t, U, R),
                    t === "focusout" && R && U.type === "number" && R.memoizedProps.value != null && xf(U, "number", U.value)
                }
                switch (at = R ? kn(R) : window,
                t) {
                case "focusin":
                    (f0(at) || at.contentEditable === "true") && (nu = at,
                    Hf = R,
                    ur = null);
                    break;
                case "focusout":
                    ur = Hf = nu = null;
                    break;
                case "mousedown":
                    Bf = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Bf = !1,
                    x0(K, l, X);
                    break;
                case "selectionchange":
                    if (Uv)
                        break;
                case "keydown":
                case "keyup":
                    x0(K, l, X)
                }
                var Et;
                if (wf)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var qt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            qt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            qt = "onCompositionUpdate";
                            break t
                        }
                        qt = void 0
                    }
                else
                    lu ? s0(t, l) && (qt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (qt = "onCompositionStart");
                qt && (a0 && l.locale !== "ko" && (lu || qt !== "onCompositionStart" ? qt === "onCompositionEnd" && lu && (Et = t0()) : (wi = X,
                Mf = "value"in wi ? wi.value : wi.textContent,
                lu = !0)),
                at = _c(R, qt),
                0 < at.length && (qt = new n0(qt,t,null,l,X),
                K.push({
                    event: qt,
                    listeners: at
                }),
                Et ? qt.data = Et : (Et = c0(l),
                Et !== null && (qt.data = Et)))),
                (Et = Av ? zv(t, l) : Mv(t, l)) && (qt = _c(R, "onBeforeInput"),
                0 < qt.length && (at = new n0("onBeforeInput","beforeinput",null,l,X),
                K.push({
                    event: at,
                    listeners: qt
                }),
                at.data = Et)),
                vy(K, t, R, l, X)
            }
            Kg(K, e)
        })
    }
    function Nr(t, e, l) {
        return {
            instance: t,
            listener: e,
            currentTarget: l
        }
    }
    function _c(t, e) {
        for (var l = e + "Capture", i = []; t !== null; ) {
            var s = t
              , c = s.stateNode;
            if (s = s.tag,
            s !== 5 && s !== 26 && s !== 27 || c === null || (s = Pu(t, l),
            s != null && i.unshift(Nr(t, s, c)),
            s = Pu(t, e),
            s != null && i.push(Nr(t, s, c))),
            t.tag === 3)
                return i;
            t = t.return
        }
        return []
    }
    function Sy(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function Fg(t, e, l, i, s) {
        for (var c = e._reactName, m = []; l !== null && l !== i; ) {
            var v = l
              , T = v.alternate
              , R = v.stateNode;
            if (v = v.tag,
            T !== null && T === i)
                break;
            v !== 5 && v !== 26 && v !== 27 || R === null || (T = R,
            s ? (R = Pu(l, c),
            R != null && m.unshift(Nr(l, R, T))) : s || (R = Pu(l, c),
            R != null && m.push(Nr(l, R, T)))),
            l = l.return
        }
        m.length !== 0 && t.push({
            event: e,
            listeners: m
        })
    }
    var Ty = /\r\n?/g
      , Ey = /\u0000|\uFFFD/g;
    function Wg(t) {
        return (typeof t == "string" ? t : "" + t).replace(Ty, `
`).replace(Ey, "")
    }
    function $g(t, e) {
        return e = Wg(e),
        Wg(t) === e
    }
    function It(t, e, l, i, s, c) {
        switch (l) {
        case "children":
            typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Ia(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Ia(t, "" + i);
            break;
        case "className":
            xs(t, "class", i);
            break;
        case "tabIndex":
            xs(t, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            xs(t, l, i);
            break;
        case "style":
            $h(t, i, c);
            break;
        case "data":
            if (e !== "object") {
                xs(t, "data", i);
                break
            }
        case "src":
        case "href":
            if (i === "" && (e !== "a" || l !== "href")) {
                t.removeAttribute(l);
                break
            }
            if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                t.removeAttribute(l);
                break
            }
            i = Ts("" + i),
            t.setAttribute(l, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (l === "formAction" ? (e !== "input" && It(t, e, "name", s.name, s, null),
                It(t, e, "formEncType", s.formEncType, s, null),
                It(t, e, "formMethod", s.formMethod, s, null),
                It(t, e, "formTarget", s.formTarget, s, null)) : (It(t, e, "encType", s.encType, s, null),
                It(t, e, "method", s.method, s, null),
                It(t, e, "target", s.target, s, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                t.removeAttribute(l);
                break
            }
            i = Ts("" + i),
            t.setAttribute(l, i);
            break;
        case "onClick":
            i != null && (t.onclick = ui);
            break;
        case "onScroll":
            i != null && Ht("scroll", t);
            break;
        case "onScrollEnd":
            i != null && Ht("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(a(61));
                if (l = i.__html,
                l != null) {
                    if (s.children != null)
                        throw Error(a(60));
                    t.innerHTML = l
                }
            }
            break;
        case "multiple":
            t.multiple = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "muted":
            t.muted = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            l = Ts("" + i),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(l, "" + i) : t.removeAttribute(l);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
            break;
        case "capture":
        case "download":
            i === !0 ? t.setAttribute(l, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(l, i) : t.removeAttribute(l);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(l, i) : t.removeAttribute(l);
            break;
        case "rowSpan":
        case "start":
            i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(l) : t.setAttribute(l, i);
            break;
        case "popover":
            Ht("beforetoggle", t),
            Ht("toggle", t),
            bs(t, "popover", i);
            break;
        case "xlinkActuate":
            ai(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            ai(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            ai(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            ai(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            ai(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            ai(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            ai(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            ai(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            ai(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            bs(t, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = P_.get(l) || l,
            bs(t, l, i))
        }
    }
    function cd(t, e, l, i, s, c) {
        switch (l) {
        case "style":
            $h(t, i, c);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(a(61));
                if (l = i.__html,
                l != null) {
                    if (s.children != null)
                        throw Error(a(60));
                    t.innerHTML = l
                }
            }
            break;
        case "children":
            typeof i == "string" ? Ia(t, i) : (typeof i == "number" || typeof i == "bigint") && Ia(t, "" + i);
            break;
        case "onScroll":
            i != null && Ht("scroll", t);
            break;
        case "onScrollEnd":
            i != null && Ht("scrollend", t);
            break;
        case "onClick":
            i != null && (t.onclick = ui);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!$a.hasOwnProperty(l))
                t: {
                    if (l[0] === "o" && l[1] === "n" && (s = l.endsWith("Capture"),
                    e = l.slice(2, s ? l.length - 7 : void 0),
                    c = t[Ct] || null,
                    c = c != null ? c[l] : null,
                    typeof c == "function" && t.removeEventListener(e, c, s),
                    typeof i == "function")) {
                        typeof c != "function" && c !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)),
                        t.addEventListener(e, i, s);
                        break t
                    }
                    l in t ? t[l] = i : i === !0 ? t.setAttribute(l, "") : bs(t, l, i)
                }
        }
    }
    function nl(t, e, l) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            Ht("error", t),
            Ht("load", t);
            var i = !1, s = !1, c;
            for (c in l)
                if (l.hasOwnProperty(c)) {
                    var m = l[c];
                    if (m != null)
                        switch (c) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            s = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(a(137, e));
                        default:
                            It(t, e, c, m, l, null)
                        }
                }
            s && It(t, e, "srcSet", l.srcSet, l, null),
            i && It(t, e, "src", l.src, l, null);
            return;
        case "input":
            Ht("invalid", t);
            var v = c = m = s = null
              , T = null
              , R = null;
            for (i in l)
                if (l.hasOwnProperty(i)) {
                    var X = l[i];
                    if (X != null)
                        switch (i) {
                        case "name":
                            s = X;
                            break;
                        case "type":
                            m = X;
                            break;
                        case "checked":
                            T = X;
                            break;
                        case "defaultChecked":
                            R = X;
                            break;
                        case "value":
                            c = X;
                            break;
                        case "defaultValue":
                            v = X;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (X != null)
                                throw Error(a(137, e));
                            break;
                        default:
                            It(t, e, i, X, l, null)
                        }
                }
            Kh(t, c, v, T, R, m, s, !1);
            return;
        case "select":
            Ht("invalid", t),
            i = m = c = null;
            for (s in l)
                if (l.hasOwnProperty(s) && (v = l[s],
                v != null))
                    switch (s) {
                    case "value":
                        c = v;
                        break;
                    case "defaultValue":
                        m = v;
                        break;
                    case "multiple":
                        i = v;
                    default:
                        It(t, e, s, v, l, null)
                    }
            e = c,
            l = m,
            t.multiple = !!i,
            e != null ? Pa(t, !!i, e, !1) : l != null && Pa(t, !!i, l, !0);
            return;
        case "textarea":
            Ht("invalid", t),
            c = s = i = null;
            for (m in l)
                if (l.hasOwnProperty(m) && (v = l[m],
                v != null))
                    switch (m) {
                    case "value":
                        i = v;
                        break;
                    case "defaultValue":
                        s = v;
                        break;
                    case "children":
                        c = v;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(a(91));
                        break;
                    default:
                        It(t, e, m, v, l, null)
                    }
            Fh(t, i, s, c);
            return;
        case "option":
            for (T in l)
                l.hasOwnProperty(T) && (i = l[T],
                i != null) && (T === "selected" ? t.selected = i && typeof i != "function" && typeof i != "symbol" : It(t, e, T, i, l, null));
            return;
        case "dialog":
            Ht("beforetoggle", t),
            Ht("toggle", t),
            Ht("cancel", t),
            Ht("close", t);
            break;
        case "iframe":
        case "object":
            Ht("load", t);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Dr.length; i++)
                Ht(Dr[i], t);
            break;
        case "image":
            Ht("error", t),
            Ht("load", t);
            break;
        case "details":
            Ht("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            Ht("error", t),
            Ht("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (R in l)
                if (l.hasOwnProperty(R) && (i = l[R],
                i != null))
                    switch (R) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(a(137, e));
                    default:
                        It(t, e, R, i, l, null)
                    }
            return;
        default:
            if (Sf(e)) {
                for (X in l)
                    l.hasOwnProperty(X) && (i = l[X],
                    i !== void 0 && cd(t, e, X, i, l, void 0));
                return
            }
        }
        for (v in l)
            l.hasOwnProperty(v) && (i = l[v],
            i != null && It(t, e, v, i, l, null))
    }
    function Ay(t, e, l, i) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var s = null
              , c = null
              , m = null
              , v = null
              , T = null
              , R = null
              , X = null;
            for (H in l) {
                var K = l[H];
                if (l.hasOwnProperty(H) && K != null)
                    switch (H) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        T = K;
                    default:
                        i.hasOwnProperty(H) || It(t, e, H, null, i, K)
                    }
            }
            for (var U in i) {
                var H = i[U];
                if (K = l[U],
                i.hasOwnProperty(U) && (H != null || K != null))
                    switch (U) {
                    case "type":
                        c = H;
                        break;
                    case "name":
                        s = H;
                        break;
                    case "checked":
                        R = H;
                        break;
                    case "defaultChecked":
                        X = H;
                        break;
                    case "value":
                        m = H;
                        break;
                    case "defaultValue":
                        v = H;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (H != null)
                            throw Error(a(137, e));
                        break;
                    default:
                        H !== K && It(t, e, U, H, i, K)
                    }
            }
            bf(t, m, v, T, R, X, c, s);
            return;
        case "select":
            H = m = v = U = null;
            for (c in l)
                if (T = l[c],
                l.hasOwnProperty(c) && T != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        H = T;
                    default:
                        i.hasOwnProperty(c) || It(t, e, c, null, i, T)
                    }
            for (s in i)
                if (c = i[s],
                T = l[s],
                i.hasOwnProperty(s) && (c != null || T != null))
                    switch (s) {
                    case "value":
                        U = c;
                        break;
                    case "defaultValue":
                        v = c;
                        break;
                    case "multiple":
                        m = c;
                    default:
                        c !== T && It(t, e, s, c, i, T)
                    }
            e = v,
            l = m,
            i = H,
            U != null ? Pa(t, !!l, U, !1) : !!i != !!l && (e != null ? Pa(t, !!l, e, !0) : Pa(t, !!l, l ? [] : "", !1));
            return;
        case "textarea":
            H = U = null;
            for (v in l)
                if (s = l[v],
                l.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
                    switch (v) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        It(t, e, v, null, i, s)
                    }
            for (m in i)
                if (s = i[m],
                c = l[m],
                i.hasOwnProperty(m) && (s != null || c != null))
                    switch (m) {
                    case "value":
                        U = s;
                        break;
                    case "defaultValue":
                        H = s;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (s != null)
                            throw Error(a(91));
                        break;
                    default:
                        s !== c && It(t, e, m, s, i, c)
                    }
            Jh(t, U, H);
            return;
        case "option":
            for (var nt in l)
                U = l[nt],
                l.hasOwnProperty(nt) && U != null && !i.hasOwnProperty(nt) && (nt === "selected" ? t.selected = !1 : It(t, e, nt, null, i, U));
            for (T in i)
                U = i[T],
                H = l[T],
                i.hasOwnProperty(T) && U !== H && (U != null || H != null) && (T === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : It(t, e, T, U, i, H));
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var mt in l)
                U = l[mt],
                l.hasOwnProperty(mt) && U != null && !i.hasOwnProperty(mt) && It(t, e, mt, null, i, U);
            for (R in i)
                if (U = i[R],
                H = l[R],
                i.hasOwnProperty(R) && U !== H && (U != null || H != null))
                    switch (R) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (U != null)
                            throw Error(a(137, e));
                        break;
                    default:
                        It(t, e, R, U, i, H)
                    }
            return;
        default:
            if (Sf(e)) {
                for (var te in l)
                    U = l[te],
                    l.hasOwnProperty(te) && U !== void 0 && !i.hasOwnProperty(te) && cd(t, e, te, void 0, i, U);
                for (X in i)
                    U = i[X],
                    H = l[X],
                    !i.hasOwnProperty(X) || U === H || U === void 0 && H === void 0 || cd(t, e, X, U, i, H);
                return
            }
        }
        for (var O in l)
            U = l[O],
            l.hasOwnProperty(O) && U != null && !i.hasOwnProperty(O) && It(t, e, O, null, i, U);
        for (K in i)
            U = i[K],
            H = l[K],
            !i.hasOwnProperty(K) || U === H || U == null && H == null || It(t, e, K, U, i, H)
    }
    function Pg(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function zy() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), i = 0; i < l.length; i++) {
                var s = l[i]
                  , c = s.transferSize
                  , m = s.initiatorType
                  , v = s.duration;
                if (c && v && Pg(m)) {
                    for (m = 0,
                    v = s.responseEnd,
                    i += 1; i < l.length; i++) {
                        var T = l[i]
                          , R = T.startTime;
                        if (R > v)
                            break;
                        var X = T.transferSize
                          , K = T.initiatorType;
                        X && Pg(K) && (T = T.responseEnd,
                        m += X * (T < v ? 1 : (v - R) / (T - R)))
                    }
                    if (--i,
                    e += 8 * (c + m) / (s.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var fd = null
      , od = null;
    function vc(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function Ig(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function t1(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function dd(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var hd = null;
    function My() {
        var t = window.event;
        return t && t.type === "popstate" ? t === hd ? !1 : (hd = t,
        !0) : (hd = null,
        !1)
    }
    var e1 = typeof setTimeout == "function" ? setTimeout : void 0
      , Cy = typeof clearTimeout == "function" ? clearTimeout : void 0
      , l1 = typeof Promise == "function" ? Promise : void 0
      , Oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof l1 < "u" ? function(t) {
        return l1.resolve(null).then(t).catch(Dy)
    }
    : e1;
    function Dy(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Fi(t) {
        return t === "head"
    }
    function n1(t, e) {
        var l = e
          , i = 0;
        do {
            var s = l.nextSibling;
            if (t.removeChild(l),
            s && s.nodeType === 8)
                if (l = s.data,
                l === "/$" || l === "/&") {
                    if (i === 0) {
                        t.removeChild(s),
                        Du(e);
                        return
                    }
                    i--
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
                    i++;
                else if (l === "html")
                    wr(t.ownerDocument.documentElement);
                else if (l === "head") {
                    l = t.ownerDocument.head,
                    wr(l);
                    for (var c = l.firstChild; c; ) {
                        var m = c.nextSibling
                          , v = c.nodeName;
                        c[ge] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && c.rel.toLowerCase() === "stylesheet" || l.removeChild(c),
                        c = m
                    }
                } else
                    l === "body" && wr(t.ownerDocument.body);
            l = s
        } while (l);
        Du(e)
    }
    function i1(t, e) {
        var l = t;
        t = 0;
        do {
            var i = l.nextSibling;
            if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display,
            l.style.display = "none") : (l.style.display = l._stashedDisplay || "",
            l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue,
            l.nodeValue = "") : l.nodeValue = l._stashedText || ""),
            i && i.nodeType === 8)
                if (l = i.data,
                l === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
            l = i
        } while (l)
    }
    function md(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var l = e;
            switch (e = e.nextSibling,
            l.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                md(l),
                Ce(l);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (l.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(l)
        }
    }
    function Ny(t, e, l, i) {
        for (; t.nodeType === 1; ) {
            var s = l;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (i) {
                if (!t[ge])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (c = t.getAttribute("rel"),
                        c === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (c !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (c = t.getAttribute("src"),
                        (c !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = s.name == null ? null : "" + s.name;
                if (s.type === "hidden" && t.getAttribute("name") === c)
                    return t
            } else
                return t;
            if (t = zn(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function wy(t, e, l) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = zn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function a1(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = zn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function gd(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function pd(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function Ry(t, e) {
        var l = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || l.readyState !== "loading")
            e();
        else {
            var i = function() {
                e(),
                l.removeEventListener("DOMContentLoaded", i)
            };
            l.addEventListener("DOMContentLoaded", i),
            t._reactRetry = i
        }
    }
    function zn(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var _d = null;
    function u1(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "/$" || l === "/&") {
                    if (e === 0)
                        return zn(t.nextSibling);
                    e--
                } else
                    l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function r1(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var l = t.data;
                if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    l !== "/$" && l !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function s1(t, e, l) {
        switch (e = vc(l),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(a(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(a(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(a(454));
            return t;
        default:
            throw Error(a(451))
        }
    }
    function wr(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        Ce(t)
    }
    var Mn = new Map
      , c1 = new Set;
    function yc(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Si = k.d;
    k.d = {
        f: jy,
        r: Uy,
        D: Hy,
        C: By,
        L: Yy,
        m: qy,
        X: Xy,
        S: Ly,
        M: Gy
    };
    function jy() {
        var t = Si.f()
          , e = fc();
        return t || e
    }
    function Uy(t) {
        var e = Ol(t);
        e !== null && e.tag === 5 && e.type === "form" ? zm(e) : Si.r(t)
    }
    var Mu = typeof document > "u" ? null : document;
    function f1(t, e, l) {
        var i = Mu;
        if (i && typeof e == "string" && e) {
            var s = yn(e);
            s = 'link[rel="' + t + '"][href="' + s + '"]',
            typeof l == "string" && (s += '[crossorigin="' + l + '"]'),
            c1.has(s) || (c1.add(s),
            t = {
                rel: t,
                crossOrigin: l,
                href: e
            },
            i.querySelector(s) === null && (e = i.createElement("link"),
            nl(e, "link", t),
            wt(e),
            i.head.appendChild(e)))
        }
    }
    function Hy(t) {
        Si.D(t),
        f1("dns-prefetch", t, null)
    }
    function By(t, e) {
        Si.C(t, e),
        f1("preconnect", t, e)
    }
    function Yy(t, e, l) {
        Si.L(t, e, l);
        var i = Mu;
        if (i && t && e) {
            var s = 'link[rel="preload"][as="' + yn(e) + '"]';
            e === "image" && l && l.imageSrcSet ? (s += '[imagesrcset="' + yn(l.imageSrcSet) + '"]',
            typeof l.imageSizes == "string" && (s += '[imagesizes="' + yn(l.imageSizes) + '"]')) : s += '[href="' + yn(t) + '"]';
            var c = s;
            switch (e) {
            case "style":
                c = Cu(t);
                break;
            case "script":
                c = Ou(t)
            }
            Mn.has(c) || (t = y({
                rel: "preload",
                href: e === "image" && l && l.imageSrcSet ? void 0 : t,
                as: e
            }, l),
            Mn.set(c, t),
            i.querySelector(s) !== null || e === "style" && i.querySelector(Rr(c)) || e === "script" && i.querySelector(jr(c)) || (e = i.createElement("link"),
            nl(e, "link", t),
            wt(e),
            i.head.appendChild(e)))
        }
    }
    function qy(t, e) {
        Si.m(t, e);
        var l = Mu;
        if (l && t) {
            var i = e && typeof e.as == "string" ? e.as : "script"
              , s = 'link[rel="modulepreload"][as="' + yn(i) + '"][href="' + yn(t) + '"]'
              , c = s;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = Ou(t)
            }
            if (!Mn.has(c) && (t = y({
                rel: "modulepreload",
                href: t
            }, e),
            Mn.set(c, t),
            l.querySelector(s) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (l.querySelector(jr(c)))
                        return
                }
                i = l.createElement("link"),
                nl(i, "link", t),
                wt(i),
                l.head.appendChild(i)
            }
        }
    }
    function Ly(t, e, l) {
        Si.S(t, e, l);
        var i = Mu;
        if (i && t) {
            var s = _e(i).hoistableStyles
              , c = Cu(t);
            e = e || "default";
            var m = s.get(c);
            if (!m) {
                var v = {
                    loading: 0,
                    preload: null
                };
                if (m = i.querySelector(Rr(c)))
                    v.loading = 5;
                else {
                    t = y({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, l),
                    (l = Mn.get(c)) && vd(t, l);
                    var T = m = i.createElement("link");
                    wt(T),
                    nl(T, "link", t),
                    T._p = new Promise(function(R, X) {
                        T.onload = R,
                        T.onerror = X
                    }
                    ),
                    T.addEventListener("load", function() {
                        v.loading |= 1
                    }),
                    T.addEventListener("error", function() {
                        v.loading |= 2
                    }),
                    v.loading |= 4,
                    bc(m, e, i)
                }
                m = {
                    type: "stylesheet",
                    instance: m,
                    count: 1,
                    state: v
                },
                s.set(c, m)
            }
        }
    }
    function Xy(t, e) {
        Si.X(t, e);
        var l = Mu;
        if (l && t) {
            var i = _e(l).hoistableScripts
              , s = Ou(t)
              , c = i.get(s);
            c || (c = l.querySelector(jr(s)),
            c || (t = y({
                src: t,
                async: !0
            }, e),
            (e = Mn.get(s)) && yd(t, e),
            c = l.createElement("script"),
            wt(c),
            nl(c, "link", t),
            l.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            i.set(s, c))
        }
    }
    function Gy(t, e) {
        Si.M(t, e);
        var l = Mu;
        if (l && t) {
            var i = _e(l).hoistableScripts
              , s = Ou(t)
              , c = i.get(s);
            c || (c = l.querySelector(jr(s)),
            c || (t = y({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = Mn.get(s)) && yd(t, e),
            c = l.createElement("script"),
            wt(c),
            nl(c, "link", t),
            l.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            i.set(s, c))
        }
    }
    function o1(t, e, l, i) {
        var s = (s = dt.current) ? yc(s) : null;
        if (!s)
            throw Error(a(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Cu(l.href),
            l = _e(s).hoistableStyles,
            i = l.get(e),
            i || (i = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                t = Cu(l.href);
                var c = _e(s).hoistableStyles
                  , m = c.get(t);
                if (m || (s = s.ownerDocument || s,
                m = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(t, m),
                (c = s.querySelector(Rr(t))) && !c._p && (m.instance = c,
                m.state.loading = 5),
                Mn.has(t) || (l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy
                },
                Mn.set(t, l),
                c || Vy(s, t, l, m.state))),
                e && i === null)
                    throw Error(a(528, ""));
                return m
            }
            if (e && i !== null)
                throw Error(a(529, ""));
            return null;
        case "script":
            return e = l.async,
            l = l.src,
            typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ou(l),
            l = _e(s).hoistableScripts,
            i = l.get(e),
            i || (i = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            l.set(e, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(a(444, t))
        }
    }
    function Cu(t) {
        return 'href="' + yn(t) + '"'
    }
    function Rr(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function d1(t) {
        return y({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function Vy(t, e, l, i) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"),
        i.preload = e,
        e.addEventListener("load", function() {
            return i.loading |= 1
        }),
        e.addEventListener("error", function() {
            return i.loading |= 2
        }),
        nl(e, "link", l),
        wt(e),
        t.head.appendChild(e))
    }
    function Ou(t) {
        return '[src="' + yn(t) + '"]'
    }
    function jr(t) {
        return "script[async]" + t
    }
    function h1(t, e, l) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var i = t.querySelector('style[data-href~="' + yn(l.href) + '"]');
                if (i)
                    return e.instance = i,
                    wt(i),
                    i;
                var s = y({}, l, {
                    "data-href": l.href,
                    "data-precedence": l.precedence,
                    href: null,
                    precedence: null
                });
                return i = (t.ownerDocument || t).createElement("style"),
                wt(i),
                nl(i, "style", s),
                bc(i, l.precedence, t),
                e.instance = i;
            case "stylesheet":
                s = Cu(l.href);
                var c = t.querySelector(Rr(s));
                if (c)
                    return e.state.loading |= 4,
                    e.instance = c,
                    wt(c),
                    c;
                i = d1(l),
                (s = Mn.get(s)) && vd(i, s),
                c = (t.ownerDocument || t).createElement("link"),
                wt(c);
                var m = c;
                return m._p = new Promise(function(v, T) {
                    m.onload = v,
                    m.onerror = T
                }
                ),
                nl(c, "link", i),
                e.state.loading |= 4,
                bc(c, l.precedence, t),
                e.instance = c;
            case "script":
                return c = Ou(l.src),
                (s = t.querySelector(jr(c))) ? (e.instance = s,
                wt(s),
                s) : (i = l,
                (s = Mn.get(c)) && (i = y({}, l),
                yd(i, s)),
                t = t.ownerDocument || t,
                s = t.createElement("script"),
                wt(s),
                nl(s, "link", i),
                t.head.appendChild(s),
                e.instance = s);
            case "void":
                return null;
            default:
                throw Error(a(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance,
            e.state.loading |= 4,
            bc(i, l.precedence, t));
        return e.instance
    }
    function bc(t, e, l) {
        for (var i = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = i.length ? i[i.length - 1] : null, c = s, m = 0; m < i.length; m++) {
            var v = i[m];
            if (v.dataset.precedence === e)
                c = v;
            else if (c !== s)
                break
        }
        c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = l.nodeType === 9 ? l.head : l,
        e.insertBefore(t, e.firstChild))
    }
    function vd(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function yd(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var xc = null;
    function m1(t, e, l) {
        if (xc === null) {
            var i = new Map
              , s = xc = new Map;
            s.set(l, i)
        } else
            s = xc,
            i = s.get(l),
            i || (i = new Map,
            s.set(l, i));
        if (i.has(t))
            return i;
        for (i.set(t, null),
        l = l.getElementsByTagName(t),
        s = 0; s < l.length; s++) {
            var c = l[s];
            if (!(c[ge] || c[zt] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var m = c.getAttribute(e) || "";
                m = t + m;
                var v = i.get(m);
                v ? v.push(c) : i.set(m, [c])
            }
        }
        return i
    }
    function g1(t, e, l) {
        t = t.ownerDocument || t,
        t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null)
    }
    function ky(t, e, l) {
        if (l === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            return e.rel === "stylesheet" ? (t = e.disabled,
            typeof e.precedence == "string" && t == null) : !0;
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function p1(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function Qy(t, e, l, i) {
        if (l.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (l.state.loading & 4) === 0) {
            if (l.instance === null) {
                var s = Cu(i.href)
                  , c = e.querySelector(Rr(s));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = Sc.bind(t),
                    e.then(t, t)),
                    l.state.loading |= 4,
                    l.instance = c,
                    wt(c);
                    return
                }
                c = e.ownerDocument || e,
                i = d1(i),
                (s = Mn.get(s)) && vd(i, s),
                c = c.createElement("link"),
                wt(c);
                var m = c;
                m._p = new Promise(function(v, T) {
                    m.onload = v,
                    m.onerror = T
                }
                ),
                nl(c, "link", i),
                l.instance = c
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(l, e),
            (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++,
            l = Sc.bind(t),
            e.addEventListener("load", l),
            e.addEventListener("error", l))
        }
    }
    var bd = 0;
    function Zy(t, e) {
        return t.stylesheets && t.count === 0 && Ec(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(l) {
            var i = setTimeout(function() {
                if (t.stylesheets && Ec(t, t.stylesheets),
                t.unsuspend) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, 6e4 + e);
            0 < t.imgBytes && bd === 0 && (bd = 62500 * zy());
            var s = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && Ec(t, t.stylesheets),
                t.unsuspend)) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, (t.imgBytes > bd ? 50 : 800) + e);
            return t.unsuspend = l,
            function() {
                t.unsuspend = null,
                clearTimeout(i),
                clearTimeout(s)
            }
        }
        : null
    }
    function Sc() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Ec(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Tc = null;
    function Ec(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        Tc = new Map,
        e.forEach(Ky, t),
        Tc = null,
        Sc.call(t))
    }
    function Ky(t, e) {
        if (!(e.state.loading & 4)) {
            var l = Tc.get(t);
            if (l)
                var i = l.get(null);
            else {
                l = new Map,
                Tc.set(t, l);
                for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < s.length; c++) {
                    var m = s[c];
                    (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (l.set(m.dataset.precedence, m),
                    i = m)
                }
                i && l.set(null, i)
            }
            s = e.instance,
            m = s.getAttribute("data-precedence"),
            c = l.get(m) || i,
            c === i && l.set(null, s),
            l.set(m, s),
            this.count++,
            i = Sc.bind(this),
            s.addEventListener("load", i),
            s.addEventListener("error", i),
            c ? c.parentNode.insertBefore(s, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(s, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var Ur = {
        $$typeof: Z,
        Provider: null,
        Consumer: null,
        _currentValue: et,
        _currentValue2: et,
        _threadCount: 0
    };
    function Jy(t, e, l, i, s, c, m, v, T) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = yt(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = yt(0),
        this.hiddenUpdates = yt(null),
        this.identifierPrefix = i,
        this.onUncaughtError = s,
        this.onCaughtError = c,
        this.onRecoverableError = m,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = T,
        this.incompleteTransitions = new Map
    }
    function _1(t, e, l, i, s, c, m, v, T, R, X, K) {
        return t = new Jy(t,e,l,m,T,R,X,K,v),
        e = 1,
        c === !0 && (e |= 24),
        c = Kl(3, null, null, e),
        t.current = c,
        c.stateNode = t,
        e = Pf(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        c.memoizedState = {
            element: i,
            isDehydrated: l,
            cache: e
        },
        lo(c),
        t
    }
    function v1(t) {
        return t ? (t = uu,
        t) : uu
    }
    function y1(t, e, l, i, s, c) {
        s = v1(s),
        i.context === null ? i.context = s : i.pendingContext = s,
        i = Yi(e),
        i.payload = {
            element: l
        },
        c = c === void 0 ? null : c,
        c !== null && (i.callback = c),
        l = qi(t, i, e),
        l !== null && (Ul(l, t, e),
        hr(l, t, e))
    }
    function b1(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var l = t.retryLane;
            t.retryLane = l !== 0 && l < e ? l : e
        }
    }
    function xd(t, e) {
        b1(t, e),
        (t = t.alternate) && b1(t, e)
    }
    function x1(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ba(t, 67108864);
            e !== null && Ul(e, t, 67108864),
            xd(t, 67108864)
        }
    }
    function S1(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Pl();
            e = _t(e);
            var l = ba(t, e);
            l !== null && Ul(l, t, e),
            xd(t, e)
        }
    }
    var Ac = !0;
    function Fy(t, e, l, i) {
        var s = N.T;
        N.T = null;
        var c = k.p;
        try {
            k.p = 2,
            Sd(t, e, l, i)
        } finally {
            k.p = c,
            N.T = s
        }
    }
    function Wy(t, e, l, i) {
        var s = N.T;
        N.T = null;
        var c = k.p;
        try {
            k.p = 8,
            Sd(t, e, l, i)
        } finally {
            k.p = c,
            N.T = s
        }
    }
    function Sd(t, e, l, i) {
        if (Ac) {
            var s = Td(i);
            if (s === null)
                sd(t, e, i, zc, l),
                E1(t, i);
            else if (Py(s, t, e, l, i))
                i.stopPropagation();
            else if (E1(t, i),
            e & 4 && -1 < $y.indexOf(t)) {
                for (; s !== null; ) {
                    var c = Ol(s);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var m = Ve(c.pendingLanes);
                                if (m !== 0) {
                                    var v = c;
                                    for (v.pendingLanes |= 2,
                                    v.entangledLanes |= 2; m; ) {
                                        var T = 1 << 31 - Ue(m);
                                        v.entanglements[1] |= T,
                                        m &= ~T
                                    }
                                    Wn(c),
                                    (Kt & 6) === 0 && (sc = Me() + 500,
                                    Or(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            v = ba(c, 2),
                            v !== null && Ul(v, c, 2),
                            fc(),
                            xd(c, 2)
                        }
                    if (c = Td(i),
                    c === null && sd(t, e, i, zc, l),
                    c === s)
                        break;
                    s = c
                }
                s !== null && i.stopPropagation()
            } else
                sd(t, e, i, null, l)
        }
    }
    function Td(t) {
        return t = Ef(t),
        Ed(t)
    }
    var zc = null;
    function Ed(t) {
        if (zc = null,
        t = pe(t),
        t !== null) {
            var e = f(t);
            if (e === null)
                t = null;
            else {
                var l = e.tag;
                if (l === 13) {
                    if (t = o(e),
                    t !== null)
                        return t;
                    t = null
                } else if (l === 31) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (l === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return zc = t,
        null
    }
    function T1(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (je()) {
            case Un:
                return 2;
            case fe:
                return 8;
            case rl:
            case Cl:
                return 32;
            case dn:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Ad = !1
      , Wi = null
      , $i = null
      , Pi = null
      , Hr = new Map
      , Br = new Map
      , Ii = []
      , $y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function E1(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            Wi = null;
            break;
        case "dragenter":
        case "dragleave":
            $i = null;
            break;
        case "mouseover":
        case "mouseout":
            Pi = null;
            break;
        case "pointerover":
        case "pointerout":
            Hr.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Br.delete(e.pointerId)
        }
    }
    function Yr(t, e, l, i, s, c) {
        return t === null || t.nativeEvent !== c ? (t = {
            blockedOn: e,
            domEventName: l,
            eventSystemFlags: i,
            nativeEvent: c,
            targetContainers: [s]
        },
        e !== null && (e = Ol(e),
        e !== null && x1(e)),
        t) : (t.eventSystemFlags |= i,
        e = t.targetContainers,
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t)
    }
    function Py(t, e, l, i, s) {
        switch (e) {
        case "focusin":
            return Wi = Yr(Wi, t, e, l, i, s),
            !0;
        case "dragenter":
            return $i = Yr($i, t, e, l, i, s),
            !0;
        case "mouseover":
            return Pi = Yr(Pi, t, e, l, i, s),
            !0;
        case "pointerover":
            var c = s.pointerId;
            return Hr.set(c, Yr(Hr.get(c) || null, t, e, l, i, s)),
            !0;
        case "gotpointercapture":
            return c = s.pointerId,
            Br.set(c, Yr(Br.get(c) || null, t, e, l, i, s)),
            !0
        }
        return !1
    }
    function A1(t) {
        var e = pe(t.target);
        if (e !== null) {
            var l = f(e);
            if (l !== null) {
                if (e = l.tag,
                e === 13) {
                    if (e = o(l),
                    e !== null) {
                        t.blockedOn = e,
                        oe(t.priority, function() {
                            S1(l)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = h(l),
                    e !== null) {
                        t.blockedOn = e,
                        oe(t.priority, function() {
                            S1(l)
                        });
                        return
                    }
                } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Mc(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var l = Td(t.nativeEvent);
            if (l === null) {
                l = t.nativeEvent;
                var i = new l.constructor(l.type,l);
                Tf = i,
                l.target.dispatchEvent(i),
                Tf = null
            } else
                return e = Ol(l),
                e !== null && x1(e),
                t.blockedOn = l,
                !1;
            e.shift()
        }
        return !0
    }
    function z1(t, e, l) {
        Mc(t) && l.delete(e)
    }
    function Iy() {
        Ad = !1,
        Wi !== null && Mc(Wi) && (Wi = null),
        $i !== null && Mc($i) && ($i = null),
        Pi !== null && Mc(Pi) && (Pi = null),
        Hr.forEach(z1),
        Br.forEach(z1)
    }
    function Cc(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Ad || (Ad = !0,
        d.unstable_scheduleCallback(d.unstable_NormalPriority, Iy)))
    }
    var Oc = null;
    function M1(t) {
        Oc !== t && (Oc = t,
        d.unstable_scheduleCallback(d.unstable_NormalPriority, function() {
            Oc === t && (Oc = null);
            for (var e = 0; e < t.length; e += 3) {
                var l = t[e]
                  , i = t[e + 1]
                  , s = t[e + 2];
                if (typeof i != "function") {
                    if (Ed(i || l) === null)
                        continue;
                    break
                }
                var c = Ol(l);
                c !== null && (t.splice(e, 3),
                e -= 3,
                To(c, {
                    pending: !0,
                    data: s,
                    method: l.method,
                    action: i
                }, i, s))
            }
        }))
    }
    function Du(t) {
        function e(T) {
            return Cc(T, t)
        }
        Wi !== null && Cc(Wi, t),
        $i !== null && Cc($i, t),
        Pi !== null && Cc(Pi, t),
        Hr.forEach(e),
        Br.forEach(e);
        for (var l = 0; l < Ii.length; l++) {
            var i = Ii[l];
            i.blockedOn === t && (i.blockedOn = null)
        }
        for (; 0 < Ii.length && (l = Ii[0],
        l.blockedOn === null); )
            A1(l),
            l.blockedOn === null && Ii.shift();
        if (l = (t.ownerDocument || t).$$reactFormReplay,
        l != null)
            for (i = 0; i < l.length; i += 3) {
                var s = l[i]
                  , c = l[i + 1]
                  , m = s[Ct] || null;
                if (typeof c == "function")
                    m || M1(l);
                else if (m) {
                    var v = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (s = c,
                        m = c[Ct] || null)
                            v = m.formAction;
                        else if (Ed(s) !== null)
                            continue
                    } else
                        v = m.action;
                    typeof v == "function" ? l[i + 1] = v : (l.splice(i, 3),
                    i -= 3),
                    M1(l)
                }
            }
    }
    function C1() {
        function t(c) {
            c.canIntercept && c.info === "react-transition" && c.intercept({
                handler: function() {
                    return new Promise(function(m) {
                        return s = m
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            s !== null && (s(),
            s = null),
            i || setTimeout(l, 20)
        }
        function l() {
            if (!i && !navigation.transition) {
                var c = navigation.currentEntry;
                c && c.url != null && navigation.navigate(c.url, {
                    state: c.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1
              , s = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(l, 100),
            function() {
                i = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                s !== null && (s(),
                s = null)
            }
        }
    }
    function zd(t) {
        this._internalRoot = t
    }
    Dc.prototype.render = zd.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(a(409));
        var l = e.current
          , i = Pl();
        y1(l, i, t, e, null, null)
    }
    ,
    Dc.prototype.unmount = zd.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            y1(t.current, 2, null, t, null, null),
            fc(),
            e[Gt] = null
        }
    }
    ;
    function Dc(t) {
        this._internalRoot = t
    }
    Dc.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = Nt();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var l = 0; l < Ii.length && e !== 0 && e < Ii[l].priority; l++)
                ;
            Ii.splice(l, 0, t),
            l === 0 && A1(t)
        }
    }
    ;
    var O1 = n.version;
    if (O1 !== "19.2.4")
        throw Error(a(527, O1, "19.2.4"));
    k.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(a(188)) : (t = Object.keys(t).join(","),
            Error(a(268, t)));
        return t = g(e),
        t = t !== null ? _(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var t2 = {
        bundleType: 0,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: N,
        reconcilerVersion: "19.2.4"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Nc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Nc.isDisabled && Nc.supportsFiber)
            try {
                Gn = Nc.inject(t2),
                me = Nc
            } catch {}
    }
    return Lr.createRoot = function(t, e) {
        if (!r(t))
            throw Error(a(299));
        var l = !1
          , i = ""
          , s = Hm
          , c = Bm
          , m = Ym;
        return e != null && (e.unstable_strictMode === !0 && (l = !0),
        e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (m = e.onRecoverableError)),
        e = _1(t, 1, !1, null, null, l, i, null, s, c, m, C1),
        t[Gt] = e.current,
        rd(t),
        new zd(e)
    }
    ,
    Lr.hydrateRoot = function(t, e, l) {
        if (!r(t))
            throw Error(a(299));
        var i = !1
          , s = ""
          , c = Hm
          , m = Bm
          , v = Ym
          , T = null;
        return l != null && (l.unstable_strictMode === !0 && (i = !0),
        l.identifierPrefix !== void 0 && (s = l.identifierPrefix),
        l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
        l.onCaughtError !== void 0 && (m = l.onCaughtError),
        l.onRecoverableError !== void 0 && (v = l.onRecoverableError),
        l.formState !== void 0 && (T = l.formState)),
        e = _1(t, 1, !0, e, l ?? null, i, s, T, c, m, v, C1),
        e.context = v1(null),
        l = e.current,
        i = Pl(),
        i = _t(i),
        s = Yi(i),
        s.callback = null,
        qi(l, s, i),
        l = i,
        e.current.lanes = l,
        rt(e, l),
        Wn(e),
        t[Gt] = e.current,
        rd(t),
        new Dc(e)
    }
    ,
    Lr.version = "19.2.4",
    Lr
}
var q1;
function f2() {
    if (q1)
        return Od.exports;
    q1 = 1;
    function d() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)
            } catch (n) {
                console.error(n)
            }
    }
    return d(),
    Od.exports = c2(),
    Od.exports
}
var o2 = f2();
const d2 = Tp(o2)
  , h2 = ({color: d="currentColor", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
}))
, h1 = ({color: d="currentColor", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M13.0001 16.1716L18.3641 10.8076L19.7783 12.2218L12.0001 20L4.22192 12.2218L5.63614 10.8076L11.0001 16.1716V4H13.0001V16.1716Z"
}))
  , m2 = ({color: d="currentColor", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
}))
  , g2 = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z"
}))
  , mf = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
  d: "M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"
}))
  , Ep = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
  d: "M13 9H16V12H13V21H9V12H6V9H9V7.5C9 4.46243 10.4624 3 13.5 3H16V6H13.5C13.2239 6 13 6.22386 13 6.5V9Z"
}))
  , p2 = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
}))
  , ef = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
  d: "M13 9H16V12H13V21H9V12H6V9H9V7.5C9 4.46243 10.4624 3 13.5 3H16V6H13.5C13.2239 6 13 6.22386 13 6.5V9Z"
}))
  , _2 = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"
}))
  , Ap = ({color: d="#000000", size: n=24, className: u, ...a}) => Ke.createElement("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    width: n,
    height: n,
    fill: d,
    ...a,
    className: "remixicon " + (u || "")
}, Ke.createElement("path", {
    d: "M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"
}))
  , v2 = "./assets/sketch.png"
  , y2 = "./assets/pic.png"
  , Gl = gt.createContext()
  , b2 = ({children: d}) => {
    const [n,u] = gt.useState( () => localStorage.getItem("toggle") === "true")
      , a = () => {
        u(r => {
            let f = !r;
            return localStorage.setItem("toggle", f),
            f
        }
        )
    }
    ;
    return z.jsx(Gl.Provider, {
        value: {
            darkMode: n,
            handleTheme: a
        },
        children: d
    })
}
  , x2 = "/assets/Galacio, Francis_CV.pdf";
function Ti(d) {
    if (d === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return d
}
function zp(d, n) {
    d.prototype = Object.create(n.prototype),
    d.prototype.constructor = d,
    d.__proto__ = n
}
var sn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Qu = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, yh, al, he, Nn = 1e8, ne = 1 / Nn, Jd = Math.PI * 2, S2 = Jd / 4, T2 = 0, Mp = Math.sqrt, E2 = Math.cos, A2 = Math.sin, Pe = function(n) {
    return typeof n == "string"
}, Ae = function(n) {
    return typeof n == "function"
}, Ci = function(n) {
    return typeof n == "number"
}, bh = function(n) {
    return typeof n > "u"
}, ni = function(n) {
    return typeof n == "object"
}, Bl = function(n) {
    return n !== !1
}, xh = function() {
    return typeof window < "u"
}, wc = function(n) {
    return Ae(n) || Pe(n)
}, Cp = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, gl = Array.isArray, z2 = /random\([^)]+\)/g, M2 = /,\s*/g, L1 = /(?:-?\.?\d|\.)+/gi, Op = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Hu = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Rd = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Dp = /[+-]=-?[.\d]+/, C2 = /[^,'"\[\]\s]+/gi, O2 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ye, $n, Fd, Sh, cn = {}, lf = {}, Np, wp = function(n) {
    return (lf = Zu(n, cn)) && Xl
}, Th = function(n, u) {
    return console.warn("Invalid property", n, "set to", u, "Missing plugin? gsap.registerPlugin()")
}, fs = function(n, u) {
    return !u && console.warn(n)
}, Rp = function(n, u) {
    return n && (cn[n] = u) && lf && (lf[n] = u) || cn
}, os = function() {
    return 0
}, D2 = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, Zc = {
    suppressEvents: !0,
    kill: !1
}, N2 = {
    suppressEvents: !0
}, Eh = {}, ra = [], Wd = {}, jp, en = {}, jd = {}, X1 = 30, Kc = [], Ah = "", zh = function(n) {
    var u = n[0], a, r;
    if (ni(u) || Ae(u) || (n = [n]),
    !(a = (u._gsap || {}).harness)) {
        for (r = Kc.length; r-- && !Kc[r].targetTest(u); )
            ;
        a = Kc[r]
    }
    for (r = n.length; r--; )
        n[r] && (n[r]._gsap || (n[r]._gsap = new i_(n[r],a))) || n.splice(r, 1);
    return n
}, La = function(n) {
    return n._gsap || zh(wn(n))[0]._gsap
}, Up = function(n, u, a) {
    return (a = n[u]) && Ae(a) ? n[u]() : bh(a) && n.getAttribute && n.getAttribute(u) || a
}, Yl = function(n, u) {
    return (n = n.split(",")).forEach(u) || n
}, Ne = function(n) {
    return Math.round(n * 1e5) / 1e5 || 0
}, ve = function(n) {
    return Math.round(n * 1e7) / 1e7 || 0
}, qu = function(n, u) {
    var a = u.charAt(0)
      , r = parseFloat(u.substr(2));
    return n = parseFloat(n),
    a === "+" ? n + r : a === "-" ? n - r : a === "*" ? n * r : n / r
}, w2 = function(n, u) {
    for (var a = u.length, r = 0; n.indexOf(u[r]) < 0 && ++r < a; )
        ;
    return r < a
}, nf = function() {
    var n = ra.length, u = ra.slice(0), a, r;
    for (Wd = {},
    ra.length = 0,
    a = 0; a < n; a++)
        r = u[a],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, Mh = function(n) {
    return !!(n._initted || n._startAt || n.add)
}, Hp = function(n, u, a, r) {
    ra.length && !al && nf(),
    n.render(u, a, !!(al && u < 0 && Mh(n))),
    ra.length && !al && nf()
}, Bp = function(n) {
    var u = parseFloat(n);
    return (u || u === 0) && (n + "").match(C2).length < 2 ? u : Pe(n) ? n.trim() : n
}, Yp = function(n) {
    return n
}, fn = function(n, u) {
    for (var a in u)
        a in n || (n[a] = u[a]);
    return n
}, R2 = function(n) {
    return function(u, a) {
        for (var r in a)
            r in u || r === "duration" && n || r === "ease" || (u[r] = a[r])
    }
}, Zu = function(n, u) {
    for (var a in u)
        n[a] = u[a];
    return n
}, G1 = function d(n, u) {
    for (var a in u)
        a !== "__proto__" && a !== "constructor" && a !== "prototype" && (n[a] = ni(u[a]) ? d(n[a] || (n[a] = {}), u[a]) : u[a]);
    return n
}, af = function(n, u) {
    var a = {}, r;
    for (r in n)
        r in u || (a[r] = n[r]);
    return a
}, $r = function(n) {
    var u = n.parent || ye
      , a = n.keyframes ? R2(gl(n.keyframes)) : fn;
    if (Bl(n.inherit))
        for (; u; )
            a(n, u.vars.defaults),
            u = u.parent || u._dp;
    return n
}, j2 = function(n, u) {
    for (var a = n.length, r = a === u.length; r && a-- && n[a] === u[a]; )
        ;
    return a < 0
}, qp = function(n, u, a, r, f) {
    var o = n[r], h;
    if (f)
        for (h = u[f]; o && o[f] > h; )
            o = o._prev;
    return o ? (u._next = o._next,
    o._next = u) : (u._next = n[a],
    n[a] = u),
    u._next ? u._next._prev = u : n[r] = u,
    u._prev = o,
    u.parent = u._dp = n,
    u
}, gf = function(n, u, a, r) {
    a === void 0 && (a = "_first"),
    r === void 0 && (r = "_last");
    var f = u._prev
      , o = u._next;
    f ? f._next = o : n[a] === u && (n[a] = o),
    o ? o._prev = f : n[r] === u && (n[r] = f),
    u._next = u._prev = u.parent = null
}, fa = function(n, u) {
    n.parent && (!u || n.parent.autoRemoveChildren) && n.parent.remove && n.parent.remove(n),
    n._act = 0
}, Xa = function(n, u) {
    if (n && (!u || u._end > n._dur || u._start < 0))
        for (var a = n; a; )
            a._dirty = 1,
            a = a.parent;
    return n
}, U2 = function(n) {
    for (var u = n.parent; u && u.parent; )
        u._dirty = 1,
        u.totalDuration(),
        u = u.parent;
    return n
}, $d = function(n, u, a, r) {
    return n._startAt && (al ? n._startAt.revert(Zc) : n.vars.immediateRender && !n.vars.autoRevert || n._startAt.render(u, !0, r))
}, H2 = function d(n) {
    return !n || n._ts && d(n.parent)
}, V1 = function(n) {
    return n._repeat ? Ku(n._tTime, n = n.duration() + n._rDelay) * n : 0
}, Ku = function(n, u) {
    var a = Math.floor(n = ve(n / u));
    return n && a === n ? a - 1 : a
}, uf = function(n, u) {
    return (n - u._start) * u._ts + (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
}, pf = function(n) {
    return n._end = ve(n._start + (n._tDur / Math.abs(n._ts || n._rts || ne) || 0))
}, _f = function(n, u) {
    var a = n._dp;
    return a && a.smoothChildTiming && n._ts && (n._start = ve(a._time - (n._ts > 0 ? u / n._ts : ((n._dirty ? n.totalDuration() : n._tDur) - u) / -n._ts)),
    pf(n),
    a._dirty || Xa(a, n)),
    n
}, Lp = function(n, u) {
    var a;
    if ((u._time || !u._dur && u._initted || u._start < n._time && (u._dur || !u.add)) && (a = uf(n.rawTime(), u),
    (!u._dur || ys(0, u.totalDuration(), a) - u._tTime > ne) && u.render(a, !0)),
    Xa(n, u)._dp && n._initted && n._time >= n._dur && n._ts) {
        if (n._dur < n.duration())
            for (a = n; a._dp; )
                a.rawTime() >= 0 && a.totalTime(a._tTime),
                a = a._dp;
        n._zTime = -ne
    }
}, In = function(n, u, a, r) {
    return u.parent && fa(u),
    u._start = ve((Ci(a) ? a : a || n !== ye ? Cn(n, a, u) : n._time) + u._delay),
    u._end = ve(u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0)),
    qp(n, u, "_first", "_last", n._sort ? "_start" : 0),
    Pd(u) || (n._recent = u),
    r || Lp(n, u),
    n._ts < 0 && _f(n, n._tTime),
    n
}, Xp = function(n, u) {
    return (cn.ScrollTrigger || Th("scrollTrigger", u)) && cn.ScrollTrigger.create(u, n)
}, Gp = function(n, u, a, r, f) {
    if (Oh(n, u, f),
    !n._initted)
        return 1;
    if (!a && n._pt && !al && (n._dur && n.vars.lazy !== !1 || !n._dur && n.vars.lazy) && jp !== nn.frame)
        return ra.push(n),
        n._lazy = [f, r],
        1
}, B2 = function d(n) {
    var u = n.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || d(u))
}, Pd = function(n) {
    var u = n.data;
    return u === "isFromStart" || u === "isStart"
}, Y2 = function(n, u, a, r) {
    var f = n.ratio, o = u < 0 || !u && (!n._start && B2(n) && !(!n._initted && Pd(n)) || (n._ts < 0 || n._dp._ts < 0) && !Pd(n)) ? 0 : 1, h = n._rDelay, p = 0, g, _, y;
    if (h && n._repeat && (p = ys(0, n._tDur, u),
    _ = Ku(p, h),
    n._yoyo && _ & 1 && (o = 1 - o),
    _ !== Ku(n._tTime, h) && (f = 1 - o,
    n.vars.repeatRefresh && n._initted && n.invalidate())),
    o !== f || al || r || n._zTime === ne || !u && n._zTime) {
        if (!n._initted && Gp(n, u, r, a, p))
            return;
        for (y = n._zTime,
        n._zTime = u || (a ? ne : 0),
        a || (a = u && !y),
        n.ratio = o,
        n._from && (o = 1 - o),
        n._time = 0,
        n._tTime = p,
        g = n._pt; g; )
            g.r(o, g.d),
            g = g._next;
        u < 0 && $d(n, u, a, !0),
        n._onUpdate && !a && un(n, "onUpdate"),
        p && n._repeat && !a && n.parent && un(n, "onRepeat"),
        (u >= n._tDur || u < 0) && n.ratio === o && (o && fa(n, 1),
        !a && !al && (un(n, o ? "onComplete" : "onReverseComplete", !0),
        n._prom && n._prom()))
    } else
        n._zTime || (n._zTime = u)
}, q2 = function(n, u, a) {
    var r;
    if (a > u)
        for (r = n._first; r && r._start <= a; ) {
            if (r.data === "isPause" && r._start > u)
                return r;
            r = r._next
        }
    else
        for (r = n._last; r && r._start >= a; ) {
            if (r.data === "isPause" && r._start < u)
                return r;
            r = r._prev
        }
}, Ju = function(n, u, a, r) {
    var f = n._repeat
      , o = ve(u) || 0
      , h = n._tTime / n._tDur;
    return h && !r && (n._time *= o / n._dur),
    n._dur = o,
    n._tDur = f ? f < 0 ? 1e10 : ve(o * (f + 1) + n._rDelay * f) : o,
    h > 0 && !r && _f(n, n._tTime = n._tDur * h),
    n.parent && pf(n),
    a || Xa(n.parent, n),
    n
}, k1 = function(n) {
    return n instanceof Al ? Xa(n) : Ju(n, n._dur)
}, L2 = {
    _start: 0,
    endTime: os,
    totalDuration: os
}, Cn = function d(n, u, a) {
    var r = n.labels, f = n._recent || L2, o = n.duration() >= Nn ? f.endTime(!1) : n._dur, h, p, g;
    return Pe(u) && (isNaN(u) || u in r) ? (p = u.charAt(0),
    g = u.substr(-1) === "%",
    h = u.indexOf("="),
    p === "<" || p === ">" ? (h >= 0 && (u = u.replace(/=/, "")),
    (p === "<" ? f._start : f.endTime(f._repeat >= 0)) + (parseFloat(u.substr(1)) || 0) * (g ? (h < 0 ? f : a).totalDuration() / 100 : 1)) : h < 0 ? (u in r || (r[u] = o),
    r[u]) : (p = parseFloat(u.charAt(h - 1) + u.substr(h + 1)),
    g && a && (p = p / 100 * (gl(a) ? a[0] : a).totalDuration()),
    h > 1 ? d(n, u.substr(0, h - 1), a) + p : o + p)) : u == null ? o : +u
}, Pr = function(n, u, a) {
    var r = Ci(u[1]), f = (r ? 2 : 1) + (n < 2 ? 0 : 1), o = u[f], h, p;
    if (r && (o.duration = u[1]),
    o.parent = a,
    n) {
        for (h = o,
        p = a; p && !("immediateRender"in h); )
            h = p.vars.defaults || {},
            p = Bl(p.vars.inherit) && p.parent;
        o.immediateRender = Bl(h.immediateRender),
        n < 2 ? o.runBackwards = 1 : o.startAt = u[f - 1]
    }
    return new Xe(u[0],o,u[f + 1])
}, ma = function(n, u) {
    return n || n === 0 ? u(n) : u
}, ys = function(n, u, a) {
    return a < n ? n : a > u ? u : a
}, hl = function(n, u) {
    return !Pe(n) || !(u = O2.exec(n)) ? "" : u[1]
}, X2 = function(n, u, a) {
    return ma(a, function(r) {
        return ys(n, u, r)
    })
}, Id = [].slice, Vp = function(n, u) {
    return n && ni(n) && "length"in n && (!u && !n.length || n.length - 1 in n && ni(n[0])) && !n.nodeType && n !== $n
}, G2 = function(n, u, a) {
    return a === void 0 && (a = []),
    n.forEach(function(r) {
        var f;
        return Pe(r) && !u || Vp(r, 1) ? (f = a).push.apply(f, wn(r)) : a.push(r)
    }) || a
}, wn = function(n, u, a) {
    return he && !u && he.selector ? he.selector(n) : Pe(n) && !a && (Fd || !Fu()) ? Id.call((u || Sh).querySelectorAll(n), 0) : gl(n) ? G2(n, a) : Vp(n) ? Id.call(n, 0) : n ? [n] : []
}, th = function(n) {
    return n = wn(n)[0] || fs("Invalid scope") || {},
    function(u) {
        var a = n.current || n.nativeElement || n;
        return wn(u, a.querySelectorAll ? a : a === n ? fs("Invalid scope") || Sh.createElement("div") : n)
    }
}, kp = function(n) {
    return n.sort(function() {
        return .5 - Math.random()
    })
}, Qp = function(n) {
    if (Ae(n))
        return n;
    var u = ni(n) ? n : {
        each: n
    }
      , a = Ga(u.ease)
      , r = u.from || 0
      , f = parseFloat(u.base) || 0
      , o = {}
      , h = r > 0 && r < 1
      , p = isNaN(r) || h
      , g = u.axis
      , _ = r
      , y = r;
    return Pe(r) ? _ = y = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !h && p && (_ = r[0],
    y = r[1]),
    function(S, b, M) {
        var x = (M || u).length, D = o[x], B, G, Z, Y, V, F, j, W, J;
        if (!D) {
            if (J = u.grid === "auto" ? 0 : (u.grid || [1, Nn])[1],
            !J) {
                for (j = -Nn; j < (j = M[J++].getBoundingClientRect().left) && J < x; )
                    ;
                J < x && J--
            }
            for (D = o[x] = [],
            B = p ? Math.min(J, x) * _ - .5 : r % J,
            G = J === Nn ? 0 : p ? x * y / J - .5 : r / J | 0,
            j = 0,
            W = Nn,
            F = 0; F < x; F++)
                Z = F % J - B,
                Y = G - (F / J | 0),
                D[F] = V = g ? Math.abs(g === "y" ? Y : Z) : Mp(Z * Z + Y * Y),
                V > j && (j = V),
                V < W && (W = V);
            r === "random" && kp(D),
            D.max = j - W,
            D.min = W,
            D.v = x = (parseFloat(u.amount) || parseFloat(u.each) * (J > x ? x - 1 : g ? g === "y" ? x / J : J : Math.max(J, x / J)) || 0) * (r === "edges" ? -1 : 1),
            D.b = x < 0 ? f - x : f,
            D.u = hl(u.amount || u.each) || 0,
            a = a && x < 0 ? e_(a) : a
        }
        return x = (D[S] - D.min) / D.max || 0,
        ve(D.b + (a ? a(x) : x) * D.v) + D.u
    }
}, eh = function(n) {
    var u = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function(a) {
        var r = ve(Math.round(parseFloat(a) / n) * n * u);
        return (r - r % 1) / u + (Ci(a) ? 0 : hl(a))
    }
}, Zp = function(n, u) {
    var a = gl(n), r, f;
    return !a && ni(n) && (r = a = n.radius || Nn,
    n.values ? (n = wn(n.values),
    (f = !Ci(n[0])) && (r *= r)) : n = eh(n.increment)),
    ma(u, a ? Ae(n) ? function(o) {
        return f = n(o),
        Math.abs(f - o) <= r ? f : o
    }
    : function(o) {
        for (var h = parseFloat(f ? o.x : o), p = parseFloat(f ? o.y : 0), g = Nn, _ = 0, y = n.length, S, b; y--; )
            f ? (S = n[y].x - h,
            b = n[y].y - p,
            S = S * S + b * b) : S = Math.abs(n[y] - h),
            S < g && (g = S,
            _ = y);
        return _ = !r || g <= r ? n[_] : o,
        f || _ === o || Ci(o) ? _ : _ + hl(o)
    }
    : eh(n))
}, Kp = function(n, u, a, r) {
    return ma(gl(n) ? !u : a === !0 ? !!(a = 0) : !r, function() {
        return gl(n) ? n[~~(Math.random() * n.length)] : (a = a || 1e-5) && (r = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) && Math.floor(Math.round((n - a / 2 + Math.random() * (u - n + a * .99)) / a) * a * r) / r
    })
}, V2 = function() {
    for (var n = arguments.length, u = new Array(n), a = 0; a < n; a++)
        u[a] = arguments[a];
    return function(r) {
        return u.reduce(function(f, o) {
            return o(f)
        }, r)
    }
}, k2 = function(n, u) {
    return function(a) {
        return n(parseFloat(a)) + (u || hl(a))
    }
}, Q2 = function(n, u, a) {
    return Fp(n, u, 0, 1, a)
}, Jp = function(n, u, a) {
    return ma(a, function(r) {
        return n[~~u(r)]
    })
}, Z2 = function d(n, u, a) {
    var r = u - n;
    return gl(n) ? Jp(n, d(0, n.length), u) : ma(a, function(f) {
        return (r + (f - n) % r) % r + n
    })
}, K2 = function d(n, u, a) {
    var r = u - n
      , f = r * 2;
    return gl(n) ? Jp(n, d(0, n.length - 1), u) : ma(a, function(o) {
        return o = (f + (o - n) % f) % f || 0,
        n + (o > r ? f - o : o)
    })
}, ds = function(n) {
    return n.replace(z2, function(u) {
        var a = u.indexOf("[") + 1
          , r = u.substring(a || 7, a ? u.indexOf("]") : u.length - 1).split(M2);
        return Kp(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5)
    })
}, Fp = function(n, u, a, r, f) {
    var o = u - n
      , h = r - a;
    return ma(f, function(p) {
        return a + ((p - n) / o * h || 0)
    })
}, J2 = function d(n, u, a, r) {
    var f = isNaN(n + u) ? 0 : function(b) {
        return (1 - b) * n + b * u
    }
    ;
    if (!f) {
        var o = Pe(n), h = {}, p, g, _, y, S;
        if (a === !0 && (r = 1) && (a = null),
        o)
            n = {
                p: n
            },
            u = {
                p: u
            };
        else if (gl(n) && !gl(u)) {
            for (_ = [],
            y = n.length,
            S = y - 2,
            g = 1; g < y; g++)
                _.push(d(n[g - 1], n[g]));
            y--,
            f = function(M) {
                M *= y;
                var x = Math.min(S, ~~M);
                return _[x](M - x)
            }
            ,
            a = u
        } else
            r || (n = Zu(gl(n) ? [] : {}, n));
        if (!_) {
            for (p in u)
                Ch.call(h, n, p, "get", u[p]);
            f = function(M) {
                return wh(M, h) || (o ? n.p : n)
            }
        }
    }
    return ma(a, f)
}, Q1 = function(n, u, a) {
    var r = n.labels, f = Nn, o, h, p;
    for (o in r)
        h = r[o] - u,
        h < 0 == !!a && h && f > (h = Math.abs(h)) && (p = o,
        f = h);
    return p
}, un = function(n, u, a) {
    var r = n.vars, f = r[u], o = he, h = n._ctx, p, g, _;
    if (f)
        return p = r[u + "Params"],
        g = r.callbackScope || n,
        a && ra.length && nf(),
        h && (he = h),
        _ = p ? f.apply(g, p) : f.call(g),
        he = o,
        _
}, kr = function(n) {
    return fa(n),
    n.scrollTrigger && n.scrollTrigger.kill(!!al),
    n.progress() < 1 && un(n, "onInterrupt"),
    n
}, Bu, Wp = [], $p = function(n) {
    if (n)
        if (n = !n.name && n.default || n,
        xh() || n.headless) {
            var u = n.name
              , a = Ae(n)
              , r = u && !a && n.init ? function() {
                this._props = []
            }
            : n
              , f = {
                init: os,
                render: wh,
                add: Ch,
                kill: fb,
                modifier: cb,
                rawVars: 0
            }
              , o = {
                targetTest: 0,
                get: 0,
                getSetter: Nh,
                aliases: {},
                register: 0
            };
            if (Fu(),
            n !== r) {
                if (en[u])
                    return;
                fn(r, fn(af(n, f), o)),
                Zu(r.prototype, Zu(f, af(n, o))),
                en[r.prop = u] = r,
                n.targetTest && (Kc.push(r),
                Eh[u] = 1),
                u = (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) + "Plugin"
            }
            Rp(u, r),
            n.register && n.register(Xl, r, ql)
        } else
            Wp.push(n)
}, le = 255, Qr = {
    aqua: [0, le, le],
    lime: [0, le, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, le],
    navy: [0, 0, 128],
    white: [le, le, le],
    olive: [128, 128, 0],
    yellow: [le, le, 0],
    orange: [le, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [le, 0, 0],
    pink: [le, 192, 203],
    cyan: [0, le, le],
    transparent: [le, le, le, 0]
}, Ud = function(n, u, a) {
    return n += n < 0 ? 1 : n > 1 ? -1 : 0,
    (n * 6 < 1 ? u + (a - u) * n * 6 : n < .5 ? a : n * 3 < 2 ? u + (a - u) * (2 / 3 - n) * 6 : u) * le + .5 | 0
}, Pp = function(n, u, a) {
    var r = n ? Ci(n) ? [n >> 16, n >> 8 & le, n & le] : 0 : Qr.black, f, o, h, p, g, _, y, S, b, M;
    if (!r) {
        if (n.substr(-1) === "," && (n = n.substr(0, n.length - 1)),
        Qr[n])
            r = Qr[n];
        else if (n.charAt(0) === "#") {
            if (n.length < 6 && (f = n.charAt(1),
            o = n.charAt(2),
            h = n.charAt(3),
            n = "#" + f + f + o + o + h + h + (n.length === 5 ? n.charAt(4) + n.charAt(4) : "")),
            n.length === 9)
                return r = parseInt(n.substr(1, 6), 16),
                [r >> 16, r >> 8 & le, r & le, parseInt(n.substr(7), 16) / 255];
            n = parseInt(n.substr(1), 16),
            r = [n >> 16, n >> 8 & le, n & le]
        } else if (n.substr(0, 3) === "hsl") {
            if (r = M = n.match(L1),
            !u)
                p = +r[0] % 360 / 360,
                g = +r[1] / 100,
                _ = +r[2] / 100,
                o = _ <= .5 ? _ * (g + 1) : _ + g - _ * g,
                f = _ * 2 - o,
                r.length > 3 && (r[3] *= 1),
                r[0] = Ud(p + 1 / 3, f, o),
                r[1] = Ud(p, f, o),
                r[2] = Ud(p - 1 / 3, f, o);
            else if (~n.indexOf("="))
                return r = n.match(Op),
                a && r.length < 4 && (r[3] = 1),
                r
        } else
            r = n.match(L1) || Qr.transparent;
        r = r.map(Number)
    }
    return u && !M && (f = r[0] / le,
    o = r[1] / le,
    h = r[2] / le,
    y = Math.max(f, o, h),
    S = Math.min(f, o, h),
    _ = (y + S) / 2,
    y === S ? p = g = 0 : (b = y - S,
    g = _ > .5 ? b / (2 - y - S) : b / (y + S),
    p = y === f ? (o - h) / b + (o < h ? 6 : 0) : y === o ? (h - f) / b + 2 : (f - o) / b + 4,
    p *= 60),
    r[0] = ~~(p + .5),
    r[1] = ~~(g * 100 + .5),
    r[2] = ~~(_ * 100 + .5)),
    a && r.length < 4 && (r[3] = 1),
    r
}, Ip = function(n) {
    var u = []
      , a = []
      , r = -1;
    return n.split(sa).forEach(function(f) {
        var o = f.match(Hu) || [];
        u.push.apply(u, o),
        a.push(r += o.length + 1)
    }),
    u.c = a,
    u
}, Z1 = function(n, u, a) {
    var r = "", f = (n + r).match(sa), o = u ? "hsla(" : "rgba(", h = 0, p, g, _, y;
    if (!f)
        return n;
    if (f = f.map(function(S) {
        return (S = Pp(S, u, 1)) && o + (u ? S[0] + "," + S[1] + "%," + S[2] + "%," + S[3] : S.join(",")) + ")"
    }),
    a && (_ = Ip(n),
    p = a.c,
    p.join(r) !== _.c.join(r)))
        for (g = n.replace(sa, "1").split(Hu),
        y = g.length - 1; h < y; h++)
            r += g[h] + (~p.indexOf(h) ? f.shift() || o + "0,0,0,0)" : (_.length ? _ : f.length ? f : a).shift());
    if (!g)
        for (g = n.split(sa),
        y = g.length - 1; h < y; h++)
            r += g[h] + f[h];
    return r + g[y]
}, sa = (function() {
    var d = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", n;
    for (n in Qr)
        d += "|" + n + "\\b";
    return new RegExp(d + ")","gi")
}
)(), F2 = /hsl[a]?\(/, t_ = function(n) {
    var u = n.join(" "), a;
    if (sa.lastIndex = 0,
    sa.test(u))
        return a = F2.test(u),
        n[1] = Z1(n[1], a),
        n[0] = Z1(n[0], a, Ip(n[1])),
        !0
}, hs, nn = (function() {
    var d = Date.now, n = 500, u = 33, a = d(), r = a, f = 1e3 / 240, o = f, h = [], p, g, _, y, S, b, M = function x(D) {
        var B = d() - r, G = D === !0, Z, Y, V, F;
        if ((B > n || B < 0) && (a += B - u),
        r += B,
        V = r - a,
        Z = V - o,
        (Z > 0 || G) && (F = ++y.frame,
        S = V - y.time * 1e3,
        y.time = V = V / 1e3,
        o += Z + (Z >= f ? 4 : f - Z),
        Y = 1),
        G || (p = g(x)),
        Y)
            for (b = 0; b < h.length; b++)
                h[b](V, S, F, D)
    };
    return y = {
        time: 0,
        frame: 0,
        tick: function() {
            M(!0)
        },
        deltaRatio: function(D) {
            return S / (1e3 / (D || 60))
        },
        wake: function() {
            Np && (!Fd && xh() && ($n = Fd = window,
            Sh = $n.document || {},
            cn.gsap = Xl,
            ($n.gsapVersions || ($n.gsapVersions = [])).push(Xl.version),
            wp(lf || $n.GreenSockGlobals || !$n.gsap && $n || {}),
            Wp.forEach($p)),
            _ = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            p && y.sleep(),
            g = _ || function(D) {
                return setTimeout(D, o - y.time * 1e3 + 1 | 0)
            }
            ,
            hs = 1,
            M(2))
        },
        sleep: function() {
            (_ ? cancelAnimationFrame : clearTimeout)(p),
            hs = 0,
            g = os
        },
        lagSmoothing: function(D, B) {
            n = D || 1 / 0,
            u = Math.min(B || 33, n)
        },
        fps: function(D) {
            f = 1e3 / (D || 240),
            o = y.time * 1e3 + f
        },
        add: function(D, B, G) {
            var Z = B ? function(Y, V, F, j) {
                D(Y, V, F, j),
                y.remove(Z)
            }
            : D;
            return y.remove(D),
            h[G ? "unshift" : "push"](Z),
            Fu(),
            Z
        },
        remove: function(D, B) {
            ~(B = h.indexOf(D)) && h.splice(B, 1) && b >= B && b--
        },
        _listeners: h
    },
    y
}
)(), Fu = function() {
    return !hs && nn.wake()
}, Xt = {}, W2 = /^[\d.\-M][\d.\-,\s]/, $2 = /["']/g, P2 = function(n) {
    for (var u = {}, a = n.substr(1, n.length - 3).split(":"), r = a[0], f = 1, o = a.length, h, p, g; f < o; f++)
        p = a[f],
        h = f !== o - 1 ? p.lastIndexOf(",") : p.length,
        g = p.substr(0, h),
        u[r] = isNaN(g) ? g.replace($2, "").trim() : +g,
        r = p.substr(h + 1).trim();
    return u
}, I2 = function(n) {
    var u = n.indexOf("(") + 1
      , a = n.indexOf(")")
      , r = n.indexOf("(", u);
    return n.substring(u, ~r && r < a ? n.indexOf(")", a + 1) : a)
}, tb = function(n) {
    var u = (n + "").split("(")
      , a = Xt[u[0]];
    return a && u.length > 1 && a.config ? a.config.apply(null, ~n.indexOf("{") ? [P2(u[1])] : I2(n).split(",").map(Bp)) : Xt._CE && W2.test(n) ? Xt._CE("", n) : a
}, e_ = function(n) {
    return function(u) {
        return 1 - n(1 - u)
    }
}, l_ = function d(n, u) {
    for (var a = n._first, r; a; )
        a instanceof Al ? d(a, u) : a.vars.yoyoEase && (!a._yoyo || !a._repeat) && a._yoyo !== u && (a.timeline ? d(a.timeline, u) : (r = a._ease,
        a._ease = a._yEase,
        a._yEase = r,
        a._yoyo = u)),
        a = a._next
}, Ga = function(n, u) {
    return n && (Ae(n) ? n : Xt[n] || tb(n)) || u
}, Wa = function(n, u, a, r) {
    a === void 0 && (a = function(p) {
        return 1 - u(1 - p)
    }
    ),
    r === void 0 && (r = function(p) {
        return p < .5 ? u(p * 2) / 2 : 1 - u((1 - p) * 2) / 2
    }
    );
    var f = {
        easeIn: u,
        easeOut: a,
        easeInOut: r
    }, o;
    return Yl(n, function(h) {
        Xt[h] = cn[h] = f,
        Xt[o = h.toLowerCase()] = a;
        for (var p in f)
            Xt[o + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = Xt[h + "." + p] = f[p]
    }),
    f
}, n_ = function(n) {
    return function(u) {
        return u < .5 ? (1 - n(1 - u * 2)) / 2 : .5 + n((u - .5) * 2) / 2
    }
}, Hd = function d(n, u, a) {
    var r = u >= 1 ? u : 1
      , f = (a || (n ? .3 : .45)) / (u < 1 ? u : 1)
      , o = f / Jd * (Math.asin(1 / r) || 0)
      , h = function(_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * A2((_ - o) * f) + 1
    }
      , p = n === "out" ? h : n === "in" ? function(g) {
        return 1 - h(1 - g)
    }
    : n_(h);
    return f = Jd / f,
    p.config = function(g, _) {
        return d(n, g, _)
    }
    ,
    p
}, Bd = function d(n, u) {
    u === void 0 && (u = 1.70158);
    var a = function(o) {
        return o ? --o * o * ((u + 1) * o + u) + 1 : 0
    }
      , r = n === "out" ? a : n === "in" ? function(f) {
        return 1 - a(1 - f)
    }
    : n_(a);
    return r.config = function(f) {
        return d(n, f)
    }
    ,
    r
};
Yl("Linear,Quad,Cubic,Quart,Quint,Strong", function(d, n) {
    var u = n < 5 ? n + 1 : n;
    Wa(d + ",Power" + (u - 1), n ? function(a) {
        return Math.pow(a, u)
    }
    : function(a) {
        return a
    }
    , function(a) {
        return 1 - Math.pow(1 - a, u)
    }, function(a) {
        return a < .5 ? Math.pow(a * 2, u) / 2 : 1 - Math.pow((1 - a) * 2, u) / 2
    })
});
Xt.Linear.easeNone = Xt.none = Xt.Linear.easeIn;
Wa("Elastic", Hd("in"), Hd("out"), Hd());
(function(d, n) {
    var u = 1 / n
      , a = 2 * u
      , r = 2.5 * u
      , f = function(h) {
        return h < u ? d * h * h : h < a ? d * Math.pow(h - 1.5 / n, 2) + .75 : h < r ? d * (h -= 2.25 / n) * h + .9375 : d * Math.pow(h - 2.625 / n, 2) + .984375
    };
    Wa("Bounce", function(o) {
        return 1 - f(1 - o)
    }, f)
}
)(7.5625, 2.75);
Wa("Expo", function(d) {
    return Math.pow(2, 10 * (d - 1)) * d + d * d * d * d * d * d * (1 - d)
});
Wa("Circ", function(d) {
    return -(Mp(1 - d * d) - 1)
});
Wa("Sine", function(d) {
    return d === 1 ? 1 : -E2(d * S2) + 1
});
Wa("Back", Bd("in"), Bd("out"), Bd());
Xt.SteppedEase = Xt.steps = cn.SteppedEase = {
    config: function(n, u) {
        n === void 0 && (n = 1);
        var a = 1 / n
          , r = n + (u ? 0 : 1)
          , f = u ? 1 : 0
          , o = 1 - ne;
        return function(h) {
            return ((r * ys(0, o, h) | 0) + f) * a
        }
    }
};
Qu.ease = Xt["quad.out"];
Yl("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(d) {
    return Ah += d + "," + d + "Params,"
});
var i_ = function(n, u) {
    this.id = T2++,
    n._gsap = this,
    this.target = n,
    this.harness = u,
    this.get = u ? u.get : Up,
    this.set = u ? u.getSetter : Nh
}
  , ms = (function() {
    function d(u) {
        this.vars = u,
        this._delay = +u.delay || 0,
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) && (this._rDelay = u.repeatDelay || 0,
        this._yoyo = !!u.yoyo || !!u.yoyoEase),
        this._ts = 1,
        Ju(this, +u.duration, 1, 1),
        this.data = u.data,
        he && (this._ctx = he,
        he.data.push(this)),
        hs || nn.wake()
    }
    var n = d.prototype;
    return n.delay = function(a) {
        return a || a === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + a - this._delay),
        this._delay = a,
        this) : this._delay
    }
    ,
    n.duration = function(a) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a) : this.totalDuration() && this._dur
    }
    ,
    n.totalDuration = function(a) {
        return arguments.length ? (this._dirty = 0,
        Ju(this, this._repeat < 0 ? a : (a - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    n.totalTime = function(a, r) {
        if (Fu(),
        !arguments.length)
            return this._tTime;
        var f = this._dp;
        if (f && f.smoothChildTiming && this._ts) {
            for (_f(this, a),
            !f._dp || f.parent || Lp(f, this); f && f.parent; )
                f.parent._time !== f._start + (f._ts >= 0 ? f._tTime / f._ts : (f.totalDuration() - f._tTime) / -f._ts) && f.totalTime(f._tTime, !0),
                f = f.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && a < this._tDur || this._ts < 0 && a > 0 || !this._tDur && !a) && In(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== a || !this._dur && !r || this._initted && Math.abs(this._zTime) === ne || !this._initted && this._dur && a || !a && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = a),
        Hp(this, a, r)),
        this
    }
    ,
    n.time = function(a, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), a + V1(this)) % (this._dur + this._rDelay) || (a ? this._dur : 0), r) : this._time
    }
    ,
    n.totalProgress = function(a, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * a, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    n.progress = function(a, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) + V1(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    n.iteration = function(a, r) {
        var f = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (a - 1) * f, r) : this._repeat ? Ku(this._tTime, f) + 1 : 1
    }
    ,
    n.timeScale = function(a, r) {
        if (!arguments.length)
            return this._rts === -ne ? 0 : this._rts;
        if (this._rts === a)
            return this;
        var f = this.parent && this._ts ? uf(this.parent._time, this) : this._tTime;
        return this._rts = +a || 0,
        this._ts = this._ps || a === -ne ? 0 : this._rts,
        this.totalTime(ys(-Math.abs(this._delay), this.totalDuration(), f), r !== !1),
        pf(this),
        U2(this)
    }
    ,
    n.paused = function(a) {
        return arguments.length ? (this._ps !== a && (this._ps = a,
        a ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Fu(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ne && (this._tTime -= ne)))),
        this) : this._ps
    }
    ,
    n.startTime = function(a) {
        if (arguments.length) {
            this._start = ve(a);
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && In(r, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    n.endTime = function(a) {
        return this._start + (Bl(a) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    n.rawTime = function(a) {
        var r = this.parent || this._dp;
        return r ? a && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? uf(r.rawTime(a), this) : this._tTime : this._tTime
    }
    ,
    n.revert = function(a) {
        a === void 0 && (a = N2);
        var r = al;
        return al = a,
        Mh(this) && (this.timeline && this.timeline.revert(a),
        this.totalTime(-.01, a.suppressEvents)),
        this.data !== "nested" && a.kill !== !1 && this.kill(),
        al = r,
        this
    }
    ,
    n.globalTime = function(a) {
        for (var r = this, f = arguments.length ? a : r.rawTime(); r; )
            f = r._start + f / (Math.abs(r._ts) || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.globalTime(a) : f
    }
    ,
    n.repeat = function(a) {
        return arguments.length ? (this._repeat = a === 1 / 0 ? -2 : a,
        k1(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    n.repeatDelay = function(a) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = a,
            k1(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    n.yoyo = function(a) {
        return arguments.length ? (this._yoyo = a,
        this) : this._yoyo
    }
    ,
    n.seek = function(a, r) {
        return this.totalTime(Cn(this, a), Bl(r))
    }
    ,
    n.restart = function(a, r) {
        return this.play().totalTime(a ? -this._delay : 0, Bl(r)),
        this._dur || (this._zTime = -ne),
        this
    }
    ,
    n.play = function(a, r) {
        return a != null && this.seek(a, r),
        this.reversed(!1).paused(!1)
    }
    ,
    n.reverse = function(a, r) {
        return a != null && this.seek(a || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    n.pause = function(a, r) {
        return a != null && this.seek(a, r),
        this.paused(!0)
    }
    ,
    n.resume = function() {
        return this.paused(!1)
    }
    ,
    n.reversed = function(a) {
        return arguments.length ? (!!a !== this.reversed() && this.timeScale(-this._rts || (a ? -ne : 0)),
        this) : this._rts < 0
    }
    ,
    n.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -ne,
        this
    }
    ,
    n.isActive = function() {
        var a = this.parent || this._dp, r = this._start, f;
        return !!(!a || this._ts && this._initted && a.isActive() && (f = a.rawTime(!0)) >= r && f < this.endTime(!0) - ne)
    }
    ,
    n.eventCallback = function(a, r, f) {
        var o = this.vars;
        return arguments.length > 1 ? (r ? (o[a] = r,
        f && (o[a + "Params"] = f),
        a === "onUpdate" && (this._onUpdate = r)) : delete o[a],
        this) : o[a]
    }
    ,
    n.then = function(a) {
        var r = this
          , f = r._prom;
        return new Promise(function(o) {
            var h = Ae(a) ? a : Yp
              , p = function() {
                var _ = r.then;
                r.then = null,
                f && f(),
                Ae(h) && (h = h(r)) && (h.then || h === r) && (r.then = _),
                o(h),
                r.then = _
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? p() : r._prom = p
        }
        )
    }
    ,
    n.kill = function() {
        kr(this)
    }
    ,
    d
}
)();
fn(ms.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ne,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Al = (function(d) {
    zp(n, d);
    function n(a, r) {
        var f;
        return a === void 0 && (a = {}),
        f = d.call(this, a) || this,
        f.labels = {},
        f.smoothChildTiming = !!a.smoothChildTiming,
        f.autoRemoveChildren = !!a.autoRemoveChildren,
        f._sort = Bl(a.sortChildren),
        ye && In(a.parent || ye, Ti(f), r),
        a.reversed && f.reverse(),
        a.paused && f.paused(!0),
        a.scrollTrigger && Xp(Ti(f), a.scrollTrigger),
        f
    }
    var u = n.prototype;
    return u.to = function(r, f, o) {
        return Pr(0, arguments, this),
        this
    }
    ,
    u.from = function(r, f, o) {
        return Pr(1, arguments, this),
        this
    }
    ,
    u.fromTo = function(r, f, o, h) {
        return Pr(2, arguments, this),
        this
    }
    ,
    u.set = function(r, f, o) {
        return f.duration = 0,
        f.parent = this,
        $r(f).repeatDelay || (f.repeat = 0),
        f.immediateRender = !!f.immediateRender,
        new Xe(r,f,Cn(this, o),1),
        this
    }
    ,
    u.call = function(r, f, o) {
        return In(this, Xe.delayedCall(0, r, f), o)
    }
    ,
    u.staggerTo = function(r, f, o, h, p, g, _) {
        return o.duration = f,
        o.stagger = o.stagger || h,
        o.onComplete = g,
        o.onCompleteParams = _,
        o.parent = this,
        new Xe(r,o,Cn(this, p)),
        this
    }
    ,
    u.staggerFrom = function(r, f, o, h, p, g, _) {
        return o.runBackwards = 1,
        $r(o).immediateRender = Bl(o.immediateRender),
        this.staggerTo(r, f, o, h, p, g, _)
    }
    ,
    u.staggerFromTo = function(r, f, o, h, p, g, _, y) {
        return h.startAt = o,
        $r(h).immediateRender = Bl(h.immediateRender),
        this.staggerTo(r, f, h, p, g, _, y)
    }
    ,
    u.render = function(r, f, o) {
        var h = this._time, p = this._dirty ? this.totalDuration() : this._tDur, g = this._dur, _ = r <= 0 ? 0 : ve(r), y = this._zTime < 0 != r < 0 && (this._initted || !g), S, b, M, x, D, B, G, Z, Y, V, F, j;
        if (this !== ye && _ > p && r >= 0 && (_ = p),
        _ !== this._tTime || o || y) {
            if (h !== this._time && g && (_ += this._time - h,
            r += this._time - h),
            S = _,
            Y = this._start,
            Z = this._ts,
            B = !Z,
            y && (g || (h = this._zTime),
            (r || !f) && (this._zTime = r)),
            this._repeat) {
                if (F = this._yoyo,
                D = g + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(D * 100 + r, f, o);
                if (S = ve(_ % D),
                _ === p ? (x = this._repeat,
                S = g) : (V = ve(_ / D),
                x = ~~V,
                x && x === V && (S = g,
                x--),
                S > g && (S = g)),
                V = Ku(this._tTime, D),
                !h && this._tTime && V !== x && this._tTime - V * D - this._dur <= 0 && (V = x),
                F && x & 1 && (S = g - S,
                j = 1),
                x !== V && !this._lock) {
                    var W = F && V & 1
                      , J = W === (F && x & 1);
                    if (x < V && (W = !W),
                    h = W ? 0 : _ % g ? g : _,
                    this._lock = 1,
                    this.render(h || (j ? 0 : ve(x * D)), f, !g)._lock = 0,
                    this._tTime = _,
                    !f && this.parent && un(this, "onRepeat"),
                    this.vars.repeatRefresh && !j && (this.invalidate()._lock = 1,
                    V = x),
                    h && h !== this._time || B !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (g = this._dur,
                    p = this._tDur,
                    J && (this._lock = 2,
                    h = W ? g : -1e-4,
                    this.render(h, !0),
                    this.vars.repeatRefresh && !j && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !B)
                        return this;
                    l_(this, j)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (G = q2(this, ve(h), ve(S)),
            G && (_ -= S - (S = G._start))),
            this._tTime = _,
            this._time = S,
            this._act = !Z,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            h = 0),
            !h && _ && g && !f && !V && (un(this, "onStart"),
            this._tTime !== _))
                return this;
            if (S >= h && r >= 0)
                for (b = this._first; b; ) {
                    if (M = b._next,
                    (b._act || S >= b._start) && b._ts && G !== b) {
                        if (b.parent !== this)
                            return this.render(r, f, o);
                        if (b.render(b._ts > 0 ? (S - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + (S - b._start) * b._ts, f, o),
                        S !== this._time || !this._ts && !B) {
                            G = 0,
                            M && (_ += this._zTime = -ne);
                            break
                        }
                    }
                    b = M
                }
            else {
                b = this._last;
                for (var $ = r < 0 ? r : S; b; ) {
                    if (M = b._prev,
                    (b._act || $ <= b._end) && b._ts && G !== b) {
                        if (b.parent !== this)
                            return this.render(r, f, o);
                        if (b.render(b._ts > 0 ? ($ - b._start) * b._ts : (b._dirty ? b.totalDuration() : b._tDur) + ($ - b._start) * b._ts, f, o || al && Mh(b)),
                        S !== this._time || !this._ts && !B) {
                            G = 0,
                            M && (_ += this._zTime = $ ? -ne : ne);
                            break
                        }
                    }
                    b = M
                }
            }
            if (G && !f && (this.pause(),
            G.render(S >= h ? 0 : -ne)._zTime = S >= h ? 1 : -1,
            this._ts))
                return this._start = Y,
                pf(this),
                this.render(r, f, o);
            this._onUpdate && !f && un(this, "onUpdate", !0),
            (_ === p && this._tTime >= this.totalDuration() || !_ && h) && (Y === this._start || Math.abs(Z) !== Math.abs(this._ts)) && (this._lock || ((r || !g) && (_ === p && this._ts > 0 || !_ && this._ts < 0) && fa(this, 1),
            !f && !(r < 0 && !h) && (_ || h || !p) && (un(this, _ === p && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(_ < p && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    u.add = function(r, f) {
        var o = this;
        if (Ci(f) || (f = Cn(this, f, r)),
        !(r instanceof ms)) {
            if (gl(r))
                return r.forEach(function(h) {
                    return o.add(h, f)
                }),
                this;
            if (Pe(r))
                return this.addLabel(r, f);
            if (Ae(r))
                r = Xe.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? In(this, r, f) : this
    }
    ,
    u.getChildren = function(r, f, o, h) {
        r === void 0 && (r = !0),
        f === void 0 && (f = !0),
        o === void 0 && (o = !0),
        h === void 0 && (h = -Nn);
        for (var p = [], g = this._first; g; )
            g._start >= h && (g instanceof Xe ? f && p.push(g) : (o && p.push(g),
            r && p.push.apply(p, g.getChildren(!0, f, o)))),
            g = g._next;
        return p
    }
    ,
    u.getById = function(r) {
        for (var f = this.getChildren(1, 1, 1), o = f.length; o--; )
            if (f[o].vars.id === r)
                return f[o]
    }
    ,
    u.remove = function(r) {
        return Pe(r) ? this.removeLabel(r) : Ae(r) ? this.killTweensOf(r) : (r.parent === this && gf(this, r),
        r === this._recent && (this._recent = this._last),
        Xa(this))
    }
    ,
    u.totalTime = function(r, f) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = ve(nn.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        d.prototype.totalTime.call(this, r, f),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    u.addLabel = function(r, f) {
        return this.labels[r] = Cn(this, f),
        this
    }
    ,
    u.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    u.addPause = function(r, f, o) {
        var h = Xe.delayedCall(0, f || os, o);
        return h.data = "isPause",
        this._hasPause = 1,
        In(this, h, Cn(this, r))
    }
    ,
    u.removePause = function(r) {
        var f = this._first;
        for (r = Cn(this, r); f; )
            f._start === r && f.data === "isPause" && fa(f),
            f = f._next
    }
    ,
    u.killTweensOf = function(r, f, o) {
        for (var h = this.getTweensOf(r, o), p = h.length; p--; )
            la !== h[p] && h[p].kill(r, f);
        return this
    }
    ,
    u.getTweensOf = function(r, f) {
        for (var o = [], h = wn(r), p = this._first, g = Ci(f), _; p; )
            p instanceof Xe ? w2(p._targets, h) && (g ? (!la || p._initted && p._ts) && p.globalTime(0) <= f && p.globalTime(p.totalDuration()) > f : !f || p.isActive()) && o.push(p) : (_ = p.getTweensOf(h, f)).length && o.push.apply(o, _),
            p = p._next;
        return o
    }
    ,
    u.tweenTo = function(r, f) {
        f = f || {};
        var o = this, h = Cn(o, r), p = f, g = p.startAt, _ = p.onStart, y = p.onStartParams, S = p.immediateRender, b, M = Xe.to(o, fn({
            ease: f.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: h,
            overwrite: "auto",
            duration: f.duration || Math.abs((h - (g && "time"in g ? g.time : o._time)) / o.timeScale()) || ne,
            onStart: function() {
                if (o.pause(),
                !b) {
                    var D = f.duration || Math.abs((h - (g && "time"in g ? g.time : o._time)) / o.timeScale());
                    M._dur !== D && Ju(M, D, 0, 1).render(M._time, !0, !0),
                    b = 1
                }
                _ && _.apply(M, y || [])
            }
        }, f));
        return S ? M.render(0) : M
    }
    ,
    u.tweenFromTo = function(r, f, o) {
        return this.tweenTo(f, fn({
            startAt: {
                time: Cn(this, r)
            }
        }, o))
    }
    ,
    u.recent = function() {
        return this._recent
    }
    ,
    u.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        Q1(this, Cn(this, r))
    }
    ,
    u.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        Q1(this, Cn(this, r), 1)
    }
    ,
    u.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + ne)
    }
    ,
    u.shiftChildren = function(r, f, o) {
        o === void 0 && (o = 0);
        var h = this._first, p = this.labels, g;
        for (r = ve(r); h; )
            h._start >= o && (h._start += r,
            h._end += r),
            h = h._next;
        if (f)
            for (g in p)
                p[g] >= o && (p[g] += r);
        return Xa(this)
    }
    ,
    u.invalidate = function(r) {
        var f = this._first;
        for (this._lock = 0; f; )
            f.invalidate(r),
            f = f._next;
        return d.prototype.invalidate.call(this, r)
    }
    ,
    u.clear = function(r) {
        r === void 0 && (r = !0);
        for (var f = this._first, o; f; )
            o = f._next,
            this.remove(f),
            f = o;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Xa(this)
    }
    ,
    u.totalDuration = function(r) {
        var f = 0, o = this, h = o._last, p = Nn, g, _, y;
        if (arguments.length)
            return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -r : r));
        if (o._dirty) {
            for (y = o.parent; h; )
                g = h._prev,
                h._dirty && h.totalDuration(),
                _ = h._start,
                _ > p && o._sort && h._ts && !o._lock ? (o._lock = 1,
                In(o, h, _ - h._delay, 1)._lock = 0) : p = _,
                _ < 0 && h._ts && (f -= _,
                (!y && !o._dp || y && y.smoothChildTiming) && (o._start += ve(_ / o._ts),
                o._time -= _,
                o._tTime -= _),
                o.shiftChildren(-_, !1, -1 / 0),
                p = 0),
                h._end > f && h._ts && (f = h._end),
                h = g;
            Ju(o, o === ye && o._time > f ? o._time : f, 1, 1),
            o._dirty = 0
        }
        return o._tDur
    }
    ,
    n.updateRoot = function(r) {
        if (ye._ts && (Hp(ye, uf(r, ye)),
        jp = nn.frame),
        nn.frame >= X1) {
            X1 += sn.autoSleep || 120;
            var f = ye._first;
            if ((!f || !f._ts) && sn.autoSleep && nn._listeners.length < 2) {
                for (; f && !f._ts; )
                    f = f._next;
                f || nn.sleep()
            }
        }
    }
    ,
    n
}
)(ms);
fn(Al.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var eb = function(n, u, a, r, f, o, h) {
    var p = new ql(this._pt,n,u,0,1,f_,null,f), g = 0, _ = 0, y, S, b, M, x, D, B, G;
    for (p.b = a,
    p.e = r,
    a += "",
    r += "",
    (B = ~r.indexOf("random(")) && (r = ds(r)),
    o && (G = [a, r],
    o(G, n, u),
    a = G[0],
    r = G[1]),
    S = a.match(Rd) || []; y = Rd.exec(r); )
        M = y[0],
        x = r.substring(g, y.index),
        b ? b = (b + 1) % 5 : x.substr(-5) === "rgba(" && (b = 1),
        M !== S[_++] && (D = parseFloat(S[_ - 1]) || 0,
        p._pt = {
            _next: p._pt,
            p: x || _ === 1 ? x : ",",
            s: D,
            c: M.charAt(1) === "=" ? qu(D, M) - D : parseFloat(M) - D,
            m: b && b < 4 ? Math.round : 0
        },
        g = Rd.lastIndex);
    return p.c = g < r.length ? r.substring(g, r.length) : "",
    p.fp = h,
    (Dp.test(r) || B) && (p.e = 0),
    this._pt = p,
    p
}, Ch = function(n, u, a, r, f, o, h, p, g, _) {
    Ae(r) && (r = r(f || 0, n, o));
    var y = n[u], S = a !== "get" ? a : Ae(y) ? g ? n[u.indexOf("set") || !Ae(n["get" + u.substr(3)]) ? u : "get" + u.substr(3)](g) : n[u]() : y, b = Ae(y) ? g ? ub : s_ : Dh, M;
    if (Pe(r) && (~r.indexOf("random(") && (r = ds(r)),
    r.charAt(1) === "=" && (M = qu(S, r) + (hl(S) || 0),
    (M || M === 0) && (r = M))),
    !_ || S !== r || lh)
        return !isNaN(S * r) && r !== "" ? (M = new ql(this._pt,n,u,+S || 0,r - (S || 0),typeof y == "boolean" ? sb : c_,0,b),
        g && (M.fp = g),
        h && M.modifier(h, this, n),
        this._pt = M) : (!y && !(u in n) && Th(u, r),
        eb.call(this, n, u, S, r, b, p || sn.stringFilter, g))
}, lb = function(n, u, a, r, f) {
    if (Ae(n) && (n = Ir(n, f, u, a, r)),
    !ni(n) || n.style && n.nodeType || gl(n) || Cp(n))
        return Pe(n) ? Ir(n, f, u, a, r) : n;
    var o = {}, h;
    for (h in n)
        o[h] = Ir(n[h], f, u, a, r);
    return o
}, a_ = function(n, u, a, r, f, o) {
    var h, p, g, _;
    if (en[n] && (h = new en[n]).init(f, h.rawVars ? u[n] : lb(u[n], r, f, o, a), a, r, o) !== !1 && (a._pt = p = new ql(a._pt,f,n,0,1,h.render,h,0,h.priority),
    a !== Bu))
        for (g = a._ptLookup[a._targets.indexOf(f)],
        _ = h._props.length; _--; )
            g[h._props[_]] = p;
    return h
}, la, lh, Oh = function d(n, u, a) {
    var r = n.vars, f = r.ease, o = r.startAt, h = r.immediateRender, p = r.lazy, g = r.onUpdate, _ = r.runBackwards, y = r.yoyoEase, S = r.keyframes, b = r.autoRevert, M = n._dur, x = n._startAt, D = n._targets, B = n.parent, G = B && B.data === "nested" ? B.vars.targets : D, Z = n._overwrite === "auto" && !yh, Y = n.timeline, V, F, j, W, J, $, ft, P, xt, pt, vt, N, k;
    if (Y && (!S || !f) && (f = "none"),
    n._ease = Ga(f, Qu.ease),
    n._yEase = y ? e_(Ga(y === !0 ? f : y, Qu.ease)) : 0,
    y && n._yoyo && !n._repeat && (y = n._yEase,
    n._yEase = n._ease,
    n._ease = y),
    n._from = !Y && !!r.runBackwards,
    !Y || S && !r.stagger) {
        if (P = D[0] ? La(D[0]).harness : 0,
        N = P && r[P.prop],
        V = af(r, Eh),
        x && (x._zTime < 0 && x.progress(1),
        u < 0 && _ && h && !b ? x.render(-1, !0) : x.revert(_ && M ? Zc : D2),
        x._lazy = 0),
        o) {
            if (fa(n._startAt = Xe.set(D, fn({
                data: "isStart",
                overwrite: !1,
                parent: B,
                immediateRender: !0,
                lazy: !x && Bl(p),
                startAt: null,
                delay: 0,
                onUpdate: g && function() {
                    return un(n, "onUpdate")
                }
                ,
                stagger: 0
            }, o))),
            n._startAt._dp = 0,
            n._startAt._sat = n,
            u < 0 && (al || !h && !b) && n._startAt.revert(Zc),
            h && M && u <= 0 && a <= 0) {
                u && (n._zTime = u);
                return
            }
        } else if (_ && M && !x) {
            if (u && (h = !1),
            j = fn({
                overwrite: !1,
                data: "isFromStart",
                lazy: h && !x && Bl(p),
                immediateRender: h,
                stagger: 0,
                parent: B
            }, V),
            N && (j[P.prop] = N),
            fa(n._startAt = Xe.set(D, j)),
            n._startAt._dp = 0,
            n._startAt._sat = n,
            u < 0 && (al ? n._startAt.revert(Zc) : n._startAt.render(-1, !0)),
            n._zTime = u,
            !h)
                d(n._startAt, ne, ne);
            else if (!u)
                return
        }
        for (n._pt = n._ptCache = 0,
        p = M && Bl(p) || p && !M,
        F = 0; F < D.length; F++) {
            if (J = D[F],
            ft = J._gsap || zh(D)[F]._gsap,
            n._ptLookup[F] = pt = {},
            Wd[ft.id] && ra.length && nf(),
            vt = G === D ? F : G.indexOf(J),
            P && (xt = new P).init(J, N || V, n, vt, G) !== !1 && (n._pt = W = new ql(n._pt,J,xt.name,0,1,xt.render,xt,0,xt.priority),
            xt._props.forEach(function(et) {
                pt[et] = W
            }),
            xt.priority && ($ = 1)),
            !P || N)
                for (j in V)
                    en[j] && (xt = a_(j, V, n, vt, J, G)) ? xt.priority && ($ = 1) : pt[j] = W = Ch.call(n, J, j, "get", V[j], vt, G, 0, r.stringFilter);
            n._op && n._op[F] && n.kill(J, n._op[F]),
            Z && n._pt && (la = n,
            ye.killTweensOf(J, pt, n.globalTime(u)),
            k = !n.parent,
            la = 0),
            n._pt && p && (Wd[ft.id] = 1)
        }
        $ && o_(n),
        n._onInit && n._onInit(n)
    }
    n._onUpdate = g,
    n._initted = (!n._op || n._pt) && !k,
    S && u <= 0 && Y.render(Nn, !0, !0)
}, nb = function(n, u, a, r, f, o, h, p) {
    var g = (n._pt && n._ptCache || (n._ptCache = {}))[u], _, y, S, b;
    if (!g)
        for (g = n._ptCache[u] = [],
        S = n._ptLookup,
        b = n._targets.length; b--; ) {
            if (_ = S[b][u],
            _ && _.d && _.d._pt)
                for (_ = _.d._pt; _ && _.p !== u && _.fp !== u; )
                    _ = _._next;
            if (!_)
                return lh = 1,
                n.vars[u] = "+=0",
                Oh(n, h),
                lh = 0,
                p ? fs(u + " not eligible for reset") : 1;
            g.push(_)
        }
    for (b = g.length; b--; )
        y = g[b],
        _ = y._pt || y,
        _.s = (r || r === 0) && !f ? r : _.s + (r || 0) + o * _.c,
        _.c = a - _.s,
        y.e && (y.e = Ne(a) + hl(y.e)),
        y.b && (y.b = _.s + hl(y.b))
}, ib = function(n, u) {
    var a = n[0] ? La(n[0]).harness : 0, r = a && a.aliases, f, o, h, p;
    if (!r)
        return u;
    f = Zu({}, u);
    for (o in r)
        if (o in f)
            for (p = r[o].split(","),
            h = p.length; h--; )
                f[p[h]] = f[o];
    return f
}, ab = function(n, u, a, r) {
    var f = u.ease || r || "power1.inOut", o, h;
    if (gl(u))
        h = a[n] || (a[n] = []),
        u.forEach(function(p, g) {
            return h.push({
                t: g / (u.length - 1) * 100,
                v: p,
                e: f
            })
        });
    else
        for (o in u)
            h = a[o] || (a[o] = []),
            o === "ease" || h.push({
                t: parseFloat(n),
                v: u[o],
                e: f
            })
}, Ir = function(n, u, a, r, f) {
    return Ae(n) ? n.call(u, a, r, f) : Pe(n) && ~n.indexOf("random(") ? ds(n) : n
}, u_ = Ah + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", r_ = {};
Yl(u_ + ",id,stagger,delay,duration,paused,scrollTrigger", function(d) {
    return r_[d] = 1
});
var Xe = (function(d) {
    zp(n, d);
    function n(a, r, f, o) {
        var h;
        typeof r == "number" && (f.duration = r,
        r = f,
        f = null),
        h = d.call(this, o ? r : $r(r)) || this;
        var p = h.vars, g = p.duration, _ = p.delay, y = p.immediateRender, S = p.stagger, b = p.overwrite, M = p.keyframes, x = p.defaults, D = p.scrollTrigger, B = p.yoyoEase, G = r.parent || ye, Z = (gl(a) || Cp(a) ? Ci(a[0]) : "length"in r) ? [a] : wn(a), Y, V, F, j, W, J, $, ft;
        if (h._targets = Z.length ? zh(Z) : fs("GSAP target " + a + " not found. https://gsap.com", !sn.nullTargetWarn) || [],
        h._ptLookup = [],
        h._overwrite = b,
        M || S || wc(g) || wc(_)) {
            if (r = h.vars,
            Y = h.timeline = new Al({
                data: "nested",
                defaults: x || {},
                targets: G && G.data === "nested" ? G.vars.targets : Z
            }),
            Y.kill(),
            Y.parent = Y._dp = Ti(h),
            Y._start = 0,
            S || wc(g) || wc(_)) {
                if (j = Z.length,
                $ = S && Qp(S),
                ni(S))
                    for (W in S)
                        ~u_.indexOf(W) && (ft || (ft = {}),
                        ft[W] = S[W]);
                for (V = 0; V < j; V++)
                    F = af(r, r_),
                    F.stagger = 0,
                    B && (F.yoyoEase = B),
                    ft && Zu(F, ft),
                    J = Z[V],
                    F.duration = +Ir(g, Ti(h), V, J, Z),
                    F.delay = (+Ir(_, Ti(h), V, J, Z) || 0) - h._delay,
                    !S && j === 1 && F.delay && (h._delay = _ = F.delay,
                    h._start += _,
                    F.delay = 0),
                    Y.to(J, F, $ ? $(V, J, Z) : 0),
                    Y._ease = Xt.none;
                Y.duration() ? g = _ = 0 : h.timeline = 0
            } else if (M) {
                $r(fn(Y.vars.defaults, {
                    ease: "none"
                })),
                Y._ease = Ga(M.ease || r.ease || "none");
                var P = 0, xt, pt, vt;
                if (gl(M))
                    M.forEach(function(N) {
                        return Y.to(Z, N, ">")
                    }),
                    Y.duration();
                else {
                    F = {};
                    for (W in M)
                        W === "ease" || W === "easeEach" || ab(W, M[W], F, M.easeEach);
                    for (W in F)
                        for (xt = F[W].sort(function(N, k) {
                            return N.t - k.t
                        }),
                        P = 0,
                        V = 0; V < xt.length; V++)
                            pt = xt[V],
                            vt = {
                                ease: pt.e,
                                duration: (pt.t - (V ? xt[V - 1].t : 0)) / 100 * g
                            },
                            vt[W] = pt.v,
                            Y.to(Z, vt, P),
                            P += vt.duration;
                    Y.duration() < g && Y.to({}, {
                        duration: g - Y.duration()
                    })
                }
            }
            g || h.duration(g = Y.duration())
        } else
            h.timeline = 0;
        return b === !0 && !yh && (la = Ti(h),
        ye.killTweensOf(Z),
        la = 0),
        In(G, Ti(h), f),
        r.reversed && h.reverse(),
        r.paused && h.paused(!0),
        (y || !g && !M && h._start === ve(G._time) && Bl(y) && H2(Ti(h)) && G.data !== "nested") && (h._tTime = -ne,
        h.render(Math.max(0, -_) || 0)),
        D && Xp(Ti(h), D),
        h
    }
    var u = n.prototype;
    return u.render = function(r, f, o) {
        var h = this._time, p = this._tDur, g = this._dur, _ = r < 0, y = r > p - ne && !_ ? p : r < ne ? 0 : r, S, b, M, x, D, B, G, Z, Y;
        if (!g)
            Y2(this, r, f, o);
        else if (y !== this._tTime || !r || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _ || this._lazy) {
            if (S = y,
            Z = this.timeline,
            this._repeat) {
                if (x = g + this._rDelay,
                this._repeat < -1 && _)
                    return this.totalTime(x * 100 + r, f, o);
                if (S = ve(y % x),
                y === p ? (M = this._repeat,
                S = g) : (D = ve(y / x),
                M = ~~D,
                M && M === D ? (S = g,
                M--) : S > g && (S = g)),
                B = this._yoyo && M & 1,
                B && (Y = this._yEase,
                S = g - S),
                D = Ku(this._tTime, x),
                S === h && !o && this._initted && M === D)
                    return this._tTime = y,
                    this;
                M !== D && (Z && this._yEase && l_(Z, B),
                this.vars.repeatRefresh && !B && !this._lock && S !== x && this._initted && (this._lock = o = 1,
                this.render(ve(x * M), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Gp(this, _ ? r : S, o, f, y))
                    return this._tTime = 0,
                    this;
                if (h !== this._time && !(o && this.vars.repeatRefresh && M !== D))
                    return this;
                if (g !== this._dur)
                    return this.render(r, f, o)
            }
            if (this._tTime = y,
            this._time = S,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = G = (Y || this._ease)(S / g),
            this._from && (this.ratio = G = 1 - G),
            !h && y && !f && !D && (un(this, "onStart"),
            this._tTime !== y))
                return this;
            for (b = this._pt; b; )
                b.r(G, b.d),
                b = b._next;
            Z && Z.render(r < 0 ? r : Z._dur * Z._ease(S / this._dur), f, o) || this._startAt && (this._zTime = r),
            this._onUpdate && !f && (_ && $d(this, r, f, o),
            un(this, "onUpdate")),
            this._repeat && M !== D && this.vars.onRepeat && !f && this.parent && un(this, "onRepeat"),
            (y === this._tDur || !y) && this._tTime === y && (_ && !this._onUpdate && $d(this, r, !0, !0),
            (r || !g) && (y === this._tDur && this._ts > 0 || !y && this._ts < 0) && fa(this, 1),
            !f && !(_ && !h) && (y || h || B) && (un(this, y === p ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(y < p && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    u.targets = function() {
        return this._targets
    }
    ,
    u.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        d.prototype.invalidate.call(this, r)
    }
    ,
    u.resetTo = function(r, f, o, h, p) {
        hs || nn.wake(),
        this._ts || this.play();
        var g = Math.min(this._dur, (this._dp._time - this._start) * this._ts), _;
        return this._initted || Oh(this, g),
        _ = this._ease(g / this._dur),
        nb(this, r, f, o, h, _, g, p) ? this.resetTo(r, f, o, h, 1) : (_f(this, 0),
        this.parent || qp(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    u.kill = function(r, f) {
        if (f === void 0 && (f = "all"),
        !r && (!f || f === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? kr(this) : this.scrollTrigger && this.scrollTrigger.kill(!!al),
            this;
        if (this.timeline) {
            var o = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, f, la && la.vars.overwrite !== !0)._first || kr(this),
            this.parent && o !== this.timeline.totalDuration() && Ju(this, this._dur * this.timeline._tDur / o, 0, 1),
            this
        }
        var h = this._targets, p = r ? wn(r) : h, g = this._ptLookup, _ = this._pt, y, S, b, M, x, D, B;
        if ((!f || f === "all") && j2(h, p))
            return f === "all" && (this._pt = 0),
            kr(this);
        for (y = this._op = this._op || [],
        f !== "all" && (Pe(f) && (x = {},
        Yl(f, function(G) {
            return x[G] = 1
        }),
        f = x),
        f = ib(h, f)),
        B = h.length; B--; )
            if (~p.indexOf(h[B])) {
                S = g[B],
                f === "all" ? (y[B] = f,
                M = S,
                b = {}) : (b = y[B] = y[B] || {},
                M = f);
                for (x in M)
                    D = S && S[x],
                    D && ((!("kill"in D.d) || D.d.kill(x) === !0) && gf(this, D, "_pt"),
                    delete S[x]),
                    b !== "all" && (b[x] = 1)
            }
        return this._initted && !this._pt && _ && kr(this),
        this
    }
    ,
    n.to = function(r, f) {
        return new n(r,f,arguments[2])
    }
    ,
    n.from = function(r, f) {
        return Pr(1, arguments)
    }
    ,
    n.delayedCall = function(r, f, o, h) {
        return new n(f,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: f,
            onReverseComplete: f,
            onCompleteParams: o,
            onReverseCompleteParams: o,
            callbackScope: h
        })
    }
    ,
    n.fromTo = function(r, f, o) {
        return Pr(2, arguments)
    }
    ,
    n.set = function(r, f) {
        return f.duration = 0,
        f.repeatDelay || (f.repeat = 0),
        new n(r,f)
    }
    ,
    n.killTweensOf = function(r, f, o) {
        return ye.killTweensOf(r, f, o)
    }
    ,
    n
}
)(ms);
fn(Xe.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Yl("staggerTo,staggerFrom,staggerFromTo", function(d) {
    Xe[d] = function() {
        var n = new Al
          , u = Id.call(arguments, 0);
        return u.splice(d === "staggerFromTo" ? 5 : 4, 0, 0),
        n[d].apply(n, u)
    }
});
var Dh = function(n, u, a) {
    return n[u] = a
}
  , s_ = function(n, u, a) {
    return n[u](a)
}
  , ub = function(n, u, a, r) {
    return n[u](r.fp, a)
}
  , rb = function(n, u, a) {
    return n.setAttribute(u, a)
}
  , Nh = function(n, u) {
    return Ae(n[u]) ? s_ : bh(n[u]) && n.setAttribute ? rb : Dh
}
  , c_ = function(n, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * n) * 1e6) / 1e6, u)
}
  , sb = function(n, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * n), u)
}
  , f_ = function(n, u) {
    var a = u._pt
      , r = "";
    if (!n && u.b)
        r = u.b;
    else if (n === 1 && u.e)
        r = u.e;
    else {
        for (; a; )
            r = a.p + (a.m ? a.m(a.s + a.c * n) : Math.round((a.s + a.c * n) * 1e4) / 1e4) + r,
            a = a._next;
        r += u.c
    }
    u.set(u.t, u.p, r, u)
}
  , wh = function(n, u) {
    for (var a = u._pt; a; )
        a.r(n, a.d),
        a = a._next
}
  , cb = function(n, u, a, r) {
    for (var f = this._pt, o; f; )
        o = f._next,
        f.p === r && f.modifier(n, u, a),
        f = o
}
  , fb = function(n) {
    for (var u = this._pt, a, r; u; )
        r = u._next,
        u.p === n && !u.op || u.op === n ? gf(this, u, "_pt") : u.dep || (a = 1),
        u = r;
    return !a
}
  , ob = function(n, u, a, r) {
    r.mSet(n, u, r.m.call(r.tween, a, r.mt), r)
}
  , o_ = function(n) {
    for (var u = n._pt, a, r, f, o; u; ) {
        for (a = u._next,
        r = f; r && r.pr > u.pr; )
            r = r._next;
        (u._prev = r ? r._prev : o) ? u._prev._next = u : f = u,
        (u._next = r) ? r._prev = u : o = u,
        u = a
    }
    n._pt = f
}
  , ql = (function() {
    function d(u, a, r, f, o, h, p, g, _) {
        this.t = a,
        this.s = f,
        this.c = o,
        this.p = r,
        this.r = h || c_,
        this.d = p || this,
        this.set = g || Dh,
        this.pr = _ || 0,
        this._next = u,
        u && (u._prev = this)
    }
    var n = d.prototype;
    return n.modifier = function(a, r, f) {
        this.mSet = this.mSet || this.set,
        this.set = ob,
        this.m = a,
        this.mt = f,
        this.tween = r
    }
    ,
    d
}
)();
Yl(Ah + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(d) {
    return Eh[d] = 1
});
cn.TweenMax = cn.TweenLite = Xe;
cn.TimelineLite = cn.TimelineMax = Al;
ye = new Al({
    sortChildren: !1,
    defaults: Qu,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
sn.stringFilter = t_;
var Va = []
  , Jc = {}
  , db = []
  , K1 = 0
  , hb = 0
  , Yd = function(n) {
    return (Jc[n] || db).map(function(u) {
        return u()
    })
}
  , nh = function() {
    var n = Date.now()
      , u = [];
    n - K1 > 2 && (Yd("matchMediaInit"),
    Va.forEach(function(a) {
        var r = a.queries, f = a.conditions, o, h, p, g;
        for (h in r)
            o = $n.matchMedia(r[h]).matches,
            o && (p = 1),
            o !== f[h] && (f[h] = o,
            g = 1);
        g && (a.revert(),
        p && u.push(a))
    }),
    Yd("matchMediaRevert"),
    u.forEach(function(a) {
        return a.onMatch(a, function(r) {
            return a.add(null, r)
        })
    }),
    K1 = n,
    Yd("matchMedia"))
}
  , d_ = (function() {
    function d(u, a) {
        this.selector = a && th(a),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = hb++,
        u && this.add(u)
    }
    var n = d.prototype;
    return n.add = function(a, r, f) {
        Ae(a) && (f = r,
        r = a,
        a = Ae);
        var o = this
          , h = function() {
            var g = he, _ = o.selector, y;
            return g && g !== o && g.data.push(o),
            f && (o.selector = th(f)),
            he = o,
            y = r.apply(o, arguments),
            Ae(y) && o._r.push(y),
            he = g,
            o.selector = _,
            o.isReverted = !1,
            y
        };
        return o.last = h,
        a === Ae ? h(o, function(p) {
            return o.add(null, p)
        }) : a ? o[a] = h : h
    }
    ,
    n.ignore = function(a) {
        var r = he;
        he = null,
        a(this),
        he = r
    }
    ,
    n.getTweens = function() {
        var a = [];
        return this.data.forEach(function(r) {
            return r instanceof d ? a.push.apply(a, r.getTweens()) : r instanceof Xe && !(r.parent && r.parent.data === "nested") && a.push(r)
        }),
        a
    }
    ,
    n.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    n.kill = function(a, r) {
        var f = this;
        if (a ? (function() {
            for (var h = f.getTweens(), p = f.data.length, g; p--; )
                g = f.data[p],
                g.data === "isFlip" && (g.revert(),
                g.getChildren(!0, !0, !1).forEach(function(_) {
                    return h.splice(h.indexOf(_), 1)
                }));
            for (h.map(function(_) {
                return {
                    g: _._dur || _._delay || _._sat && !_._sat.vars.immediateRender ? _.globalTime(0) : -1 / 0,
                    t: _
                }
            }).sort(function(_, y) {
                return y.g - _.g || -1 / 0
            }).forEach(function(_) {
                return _.t.revert(a)
            }),
            p = f.data.length; p--; )
                g = f.data[p],
                g instanceof Al ? g.data !== "nested" && (g.scrollTrigger && g.scrollTrigger.revert(),
                g.kill()) : !(g instanceof Xe) && g.revert && g.revert(a);
            f._r.forEach(function(_) {
                return _(a, f)
            }),
            f.isReverted = !0
        }
        )() : this.data.forEach(function(h) {
            return h.kill && h.kill()
        }),
        this.clear(),
        r)
            for (var o = Va.length; o--; )
                Va[o].id === this.id && Va.splice(o, 1)
    }
    ,
    n.revert = function(a) {
        this.kill(a || {})
    }
    ,
    d
}
)()
  , mb = (function() {
    function d(u) {
        this.contexts = [],
        this.scope = u,
        he && he.data.push(this)
    }
    var n = d.prototype;
    return n.add = function(a, r, f) {
        ni(a) || (a = {
            matches: a
        });
        var o = new d_(0,f || this.scope), h = o.conditions = {}, p, g, _;
        he && !o.selector && (o.selector = he.selector),
        this.contexts.push(o),
        r = o.add("onMatch", r),
        o.queries = a;
        for (g in a)
            g === "all" ? _ = 1 : (p = $n.matchMedia(a[g]),
            p && (Va.indexOf(o) < 0 && Va.push(o),
            (h[g] = p.matches) && (_ = 1),
            p.addListener ? p.addListener(nh) : p.addEventListener("change", nh)));
        return _ && r(o, function(y) {
            return o.add(null, y)
        }),
        this
    }
    ,
    n.revert = function(a) {
        this.kill(a || {})
    }
    ,
    n.kill = function(a) {
        this.contexts.forEach(function(r) {
            return r.kill(a, !0)
        })
    }
    ,
    d
}
)()
  , rf = {
    registerPlugin: function() {
        for (var n = arguments.length, u = new Array(n), a = 0; a < n; a++)
            u[a] = arguments[a];
        u.forEach(function(r) {
            return $p(r)
        })
    },
    timeline: function(n) {
        return new Al(n)
    },
    getTweensOf: function(n, u) {
        return ye.getTweensOf(n, u)
    },
    getProperty: function(n, u, a, r) {
        Pe(n) && (n = wn(n)[0]);
        var f = La(n || {}).get
          , o = a ? Yp : Bp;
        return a === "native" && (a = ""),
        n && (u ? o((en[u] && en[u].get || f)(n, u, a, r)) : function(h, p, g) {
            return o((en[h] && en[h].get || f)(n, h, p, g))
        }
        )
    },
    quickSetter: function(n, u, a) {
        if (n = wn(n),
        n.length > 1) {
            var r = n.map(function(_) {
                return Xl.quickSetter(_, u, a)
            })
              , f = r.length;
            return function(_) {
                for (var y = f; y--; )
                    r[y](_)
            }
        }
        n = n[0] || {};
        var o = en[u]
          , h = La(n)
          , p = h.harness && (h.harness.aliases || {})[u] || u
          , g = o ? function(_) {
            var y = new o;
            Bu._pt = 0,
            y.init(n, a ? _ + a : _, Bu, 0, [n]),
            y.render(1, y),
            Bu._pt && wh(1, Bu)
        }
        : h.set(n, p);
        return o ? g : function(_) {
            return g(n, p, a ? _ + a : _, h, 1)
        }
    },
    quickTo: function(n, u, a) {
        var r, f = Xl.to(n, fn((r = {},
        r[u] = "+=0.1",
        r.paused = !0,
        r.stagger = 0,
        r), a || {})), o = function(p, g, _) {
            return f.resetTo(u, p, g, _)
        };
        return o.tween = f,
        o
    },
    isTweening: function(n) {
        return ye.getTweensOf(n, !0).length > 0
    },
    defaults: function(n) {
        return n && n.ease && (n.ease = Ga(n.ease, Qu.ease)),
        G1(Qu, n || {})
    },
    config: function(n) {
        return G1(sn, n || {})
    },
    registerEffect: function(n) {
        var u = n.name
          , a = n.effect
          , r = n.plugins
          , f = n.defaults
          , o = n.extendTimeline;
        (r || "").split(",").forEach(function(h) {
            return h && !en[h] && !cn[h] && fs(u + " effect requires " + h + " plugin.")
        }),
        jd[u] = function(h, p, g) {
            return a(wn(h), fn(p || {}, f), g)
        }
        ,
        o && (Al.prototype[u] = function(h, p, g) {
            return this.add(jd[u](h, ni(p) ? p : (g = p) && {}, this), g)
        }
        )
    },
    registerEase: function(n, u) {
        Xt[n] = Ga(u)
    },
    parseEase: function(n, u) {
        return arguments.length ? Ga(n, u) : Xt
    },
    getById: function(n) {
        return ye.getById(n)
    },
    exportRoot: function(n, u) {
        n === void 0 && (n = {});
        var a = new Al(n), r, f;
        for (a.smoothChildTiming = Bl(n.smoothChildTiming),
        ye.remove(a),
        a._dp = 0,
        a._time = a._tTime = ye._time,
        r = ye._first; r; )
            f = r._next,
            (u || !(!r._dur && r instanceof Xe && r.vars.onComplete === r._targets[0])) && In(a, r, r._start - r._delay),
            r = f;
        return In(ye, a, 0),
        a
    },
    context: function(n, u) {
        return n ? new d_(n,u) : he
    },
    matchMedia: function(n) {
        return new mb(n)
    },
    matchMediaRefresh: function() {
        return Va.forEach(function(n) {
            var u = n.conditions, a, r;
            for (r in u)
                u[r] && (u[r] = !1,
                a = 1);
            a && n.revert()
        }) || nh()
    },
    addEventListener: function(n, u) {
        var a = Jc[n] || (Jc[n] = []);
        ~a.indexOf(u) || a.push(u)
    },
    removeEventListener: function(n, u) {
        var a = Jc[n]
          , r = a && a.indexOf(u);
        r >= 0 && a.splice(r, 1)
    },
    utils: {
        wrap: Z2,
        wrapYoyo: K2,
        distribute: Qp,
        random: Kp,
        snap: Zp,
        normalize: Q2,
        getUnit: hl,
        clamp: X2,
        splitColor: Pp,
        toArray: wn,
        selector: th,
        mapRange: Fp,
        pipe: V2,
        unitize: k2,
        interpolate: J2,
        shuffle: kp
    },
    install: wp,
    effects: jd,
    ticker: nn,
    updateRoot: Al.updateRoot,
    plugins: en,
    globalTimeline: ye,
    core: {
        PropTween: ql,
        globals: Rp,
        Tween: Xe,
        Timeline: Al,
        Animation: ms,
        getCache: La,
        _removeLinkedListItem: gf,
        reverting: function() {
            return al
        },
        context: function(n) {
            return n && he && (he.data.push(n),
            n._ctx = he),
            he
        },
        suppressOverwrites: function(n) {
            return yh = n
        }
    }
};
Yl("to,from,fromTo,delayedCall,set,killTweensOf", function(d) {
    return rf[d] = Xe[d]
});
nn.add(Al.updateRoot);
Bu = rf.to({}, {
    duration: 0
});
var gb = function(n, u) {
    for (var a = n._pt; a && a.p !== u && a.op !== u && a.fp !== u; )
        a = a._next;
    return a
}
  , pb = function(n, u) {
    var a = n._targets, r, f, o;
    for (r in u)
        for (f = a.length; f--; )
            o = n._ptLookup[f][r],
            o && (o = o.d) && (o._pt && (o = gb(o, r)),
            o && o.modifier && o.modifier(u[r], n, a[f], r))
}
  , qd = function(n, u) {
    return {
        name: n,
        headless: 1,
        rawVars: 1,
        init: function(r, f, o) {
            o._onInit = function(h) {
                var p, g;
                if (Pe(f) && (p = {},
                Yl(f, function(_) {
                    return p[_] = 1
                }),
                f = p),
                u) {
                    p = {};
                    for (g in f)
                        p[g] = u(f[g]);
                    f = p
                }
                pb(h, f)
            }
        }
    }
}
  , Xl = rf.registerPlugin({
    name: "attr",
    init: function(n, u, a, r, f) {
        var o, h, p;
        this.tween = a;
        for (o in u)
            p = n.getAttribute(o) || "",
            h = this.add(n, "setAttribute", (p || 0) + "", u[o], r, f, 0, 0, o),
            h.op = o,
            h.b = p,
            this._props.push(o)
    },
    render: function(n, u) {
        for (var a = u._pt; a; )
            al ? a.set(a.t, a.p, a.b, a) : a.r(n, a.d),
            a = a._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(n, u) {
        for (var a = u.length; a--; )
            this.add(n, a, n[a] || 0, u[a], 0, 0, 0, 0, 0, 1)
    }
}, qd("roundProps", eh), qd("modifiers"), qd("snap", Zp)) || rf;
Xe.version = Al.version = Xl.version = "3.14.2";
Np = 1;
xh() && Fu();
Xt.Power0;
Xt.Power1;
Xt.Power2;
Xt.Power3;
Xt.Power4;
Xt.Linear;
Xt.Quad;
Xt.Cubic;
Xt.Quart;
Xt.Quint;
Xt.Strong;
Xt.Elastic;
Xt.Back;
Xt.SteppedEase;
Xt.Bounce;
Xt.Sine;
Xt.Expo;
Xt.Circ;
var J1, na, Lu, Rh, Ya, F1, jh, _b = function() {
    return typeof window < "u"
}, Oi = {}, Ua = 180 / Math.PI, Xu = Math.PI / 180, Nu = Math.atan2, W1 = 1e8, Uh = /([A-Z])/g, vb = /(left|right|width|margin|padding|x)/i, yb = /[\s,\(]\S/, ti = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ih = function(n, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u, u)
}, bb = function(n, u) {
    return u.set(u.t, u.p, n === 1 ? u.e : Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u, u)
}, xb = function(n, u) {
    return u.set(u.t, u.p, n ? Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u : u.b, u)
}, Sb = function(n, u) {
    return u.set(u.t, u.p, n === 1 ? u.e : n ? Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u : u.b, u)
}, Tb = function(n, u) {
    var a = u.s + u.c * n;
    u.set(u.t, u.p, ~~(a + (a < 0 ? -.5 : .5)) + u.u, u)
}, h_ = function(n, u) {
    return u.set(u.t, u.p, n ? u.e : u.b, u)
}, m_ = function(n, u) {
    return u.set(u.t, u.p, n !== 1 ? u.b : u.e, u)
}, Eb = function(n, u, a) {
    return n.style[u] = a
}, Ab = function(n, u, a) {
    return n.style.setProperty(u, a)
}, zb = function(n, u, a) {
    return n._gsap[u] = a
}, Mb = function(n, u, a) {
    return n._gsap.scaleX = n._gsap.scaleY = a
}, Cb = function(n, u, a, r, f) {
    var o = n._gsap;
    o.scaleX = o.scaleY = a,
    o.renderTransform(f, o)
}, Ob = function(n, u, a, r, f) {
    var o = n._gsap;
    o[u] = a,
    o.renderTransform(f, o)
}, be = "transform", Ll = be + "Origin", Db = function d(n, u) {
    var a = this
      , r = this.target
      , f = r.style
      , o = r._gsap;
    if (n in Oi && f) {
        if (this.tfm = this.tfm || {},
        n !== "transform")
            n = ti[n] || n,
            ~n.indexOf(",") ? n.split(",").forEach(function(h) {
                return a.tfm[h] = Ei(r, h)
            }) : this.tfm[n] = o.x ? o[n] : Ei(r, n),
            n === Ll && (this.tfm.zOrigin = o.zOrigin);
        else
            return ti.transform.split(",").forEach(function(h) {
                return d.call(a, h, u)
            });
        if (this.props.indexOf(be) >= 0)
            return;
        o.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(Ll, u, "")),
        n = be
    }
    (f || u) && this.props.push(n, u, f[n])
}, g_ = function(n) {
    n.translate && (n.removeProperty("translate"),
    n.removeProperty("scale"),
    n.removeProperty("rotate"))
}, Nb = function() {
    var n = this.props, u = this.target, a = u.style, r = u._gsap, f, o;
    for (f = 0; f < n.length; f += 3)
        n[f + 1] ? n[f + 1] === 2 ? u[n[f]](n[f + 2]) : u[n[f]] = n[f + 2] : n[f + 2] ? a[n[f]] = n[f + 2] : a.removeProperty(n[f].substr(0, 2) === "--" ? n[f] : n[f].replace(Uh, "-$1").toLowerCase());
    if (this.tfm) {
        for (o in this.tfm)
            r[o] = this.tfm[o];
        r.svg && (r.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        f = jh(),
        (!f || !f.isStart) && !a[be] && (g_(a),
        r.zOrigin && a[Ll] && (a[Ll] += " " + r.zOrigin + "px",
        r.zOrigin = 0,
        r.renderTransform()),
        r.uncache = 1)
    }
}, p_ = function(n, u) {
    var a = {
        target: n,
        props: [],
        revert: Nb,
        save: Db
    };
    return n._gsap || Xl.core.getCache(n),
    u && n.style && n.nodeType && u.split(",").forEach(function(r) {
        return a.save(r)
    }),
    a
}, __, ah = function(n, u) {
    var a = na.createElementNS ? na.createElementNS((u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), n) : na.createElement(n);
    return a && a.style ? a : na.createElement(n)
}, rn = function d(n, u, a) {
    var r = getComputedStyle(n);
    return r[u] || r.getPropertyValue(u.replace(Uh, "-$1").toLowerCase()) || r.getPropertyValue(u) || !a && d(n, Wu(u) || u, 1) || ""
}, $1 = "O,Moz,ms,Ms,Webkit".split(","), Wu = function(n, u, a) {
    var r = u || Ya
      , f = r.style
      , o = 5;
    if (n in f && !a)
        return n;
    for (n = n.charAt(0).toUpperCase() + n.substr(1); o-- && !($1[o] + n in f); )
        ;
    return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? $1[o] : "") + n
}, uh = function() {
    _b() && window.document && (J1 = window,
    na = J1.document,
    Lu = na.documentElement,
    Ya = ah("div") || {
        style: {}
    },
    ah("div"),
    be = Wu(be),
    Ll = be + "Origin",
    Ya.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    __ = !!Wu("perspective"),
    jh = Xl.core.reverting,
    Rh = 1)
}, P1 = function(n) {
    var u = n.ownerSVGElement, a = ah("svg", u && u.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = n.cloneNode(!0), f;
    r.style.display = "block",
    a.appendChild(r),
    Lu.appendChild(a);
    try {
        f = r.getBBox()
    } catch {}
    return a.removeChild(r),
    Lu.removeChild(a),
    f
}, I1 = function(n, u) {
    for (var a = u.length; a--; )
        if (n.hasAttribute(u[a]))
            return n.getAttribute(u[a])
}, v_ = function(n) {
    var u, a;
    try {
        u = n.getBBox()
    } catch {
        u = P1(n),
        a = 1
    }
    return u && (u.width || u.height) || a || (u = P1(n)),
    u && !u.width && !u.x && !u.y ? {
        x: +I1(n, ["x", "cx", "x1"]) || 0,
        y: +I1(n, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : u
}, y_ = function(n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && v_(n))
}, oa = function(n, u) {
    if (u) {
        var a = n.style, r;
        u in Oi && u !== Ll && (u = be),
        a.removeProperty ? (r = u.substr(0, 2),
        (r === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
        a.removeProperty(r === "--" ? u : u.replace(Uh, "-$1").toLowerCase())) : a.removeAttribute(u)
    }
}, ia = function(n, u, a, r, f, o) {
    var h = new ql(n._pt,u,a,0,1,o ? m_ : h_);
    return n._pt = h,
    h.b = r,
    h.e = f,
    n._props.push(a),
    h
}, tp = {
    deg: 1,
    rad: 1,
    turn: 1
}, wb = {
    grid: 1,
    flex: 1
}, da = function d(n, u, a, r) {
    var f = parseFloat(a) || 0, o = (a + "").trim().substr((f + "").length) || "px", h = Ya.style, p = vb.test(u), g = n.tagName.toLowerCase() === "svg", _ = (g ? "client" : "offset") + (p ? "Width" : "Height"), y = 100, S = r === "px", b = r === "%", M, x, D, B;
    if (r === o || !f || tp[r] || tp[o])
        return f;
    if (o !== "px" && !S && (f = d(n, u, a, "px")),
    B = n.getCTM && y_(n),
    (b || o === "%") && (Oi[u] || ~u.indexOf("adius")))
        return M = B ? n.getBBox()[p ? "width" : "height"] : n[_],
        Ne(b ? f / M * y : f / 100 * M);
    if (h[p ? "width" : "height"] = y + (S ? o : r),
    x = r !== "rem" && ~u.indexOf("adius") || r === "em" && n.appendChild && !g ? n : n.parentNode,
    B && (x = (n.ownerSVGElement || {}).parentNode),
    (!x || x === na || !x.appendChild) && (x = na.body),
    D = x._gsap,
    D && b && D.width && p && D.time === nn.time && !D.uncache)
        return Ne(f / D.width * y);
    if (b && (u === "height" || u === "width")) {
        var G = n.style[u];
        n.style[u] = y + r,
        M = n[_],
        G ? n.style[u] = G : oa(n, u)
    } else
        (b || o === "%") && !wb[rn(x, "display")] && (h.position = rn(n, "position")),
        x === n && (h.position = "static"),
        x.appendChild(Ya),
        M = Ya[_],
        x.removeChild(Ya),
        h.position = "absolute";
    return p && b && (D = La(x),
    D.time = nn.time,
    D.width = x[_]),
    Ne(S ? M * f / y : M && f ? y / M * f : 0)
}, Ei = function(n, u, a, r) {
    var f;
    return Rh || uh(),
    u in ti && u !== "transform" && (u = ti[u],
    ~u.indexOf(",") && (u = u.split(",")[0])),
    Oi[u] && u !== "transform" ? (f = ps(n, r),
    f = u !== "transformOrigin" ? f[u] : f.svg ? f.origin : cf(rn(n, Ll)) + " " + f.zOrigin + "px") : (f = n.style[u],
    (!f || f === "auto" || r || ~(f + "").indexOf("calc(")) && (f = sf[u] && sf[u](n, u, a) || rn(n, u) || Up(n, u) || (u === "opacity" ? 1 : 0))),
    a && !~(f + "").trim().indexOf(" ") ? da(n, u, f, a) + a : f
}, Rb = function(n, u, a, r) {
    if (!a || a === "none") {
        var f = Wu(u, n, 1)
          , o = f && rn(n, f, 1);
        o && o !== a ? (u = f,
        a = o) : u === "borderColor" && (a = rn(n, "borderTopColor"))
    }
    var h = new ql(this._pt,n.style,u,0,1,f_), p = 0, g = 0, _, y, S, b, M, x, D, B, G, Z, Y, V;
    if (h.b = a,
    h.e = r,
    a += "",
    r += "",
    r.substring(0, 6) === "var(--" && (r = rn(n, r.substring(4, r.indexOf(")")))),
    r === "auto" && (x = n.style[u],
    n.style[u] = r,
    r = rn(n, u) || r,
    x ? n.style[u] = x : oa(n, u)),
    _ = [a, r],
    t_(_),
    a = _[0],
    r = _[1],
    S = a.match(Hu) || [],
    V = r.match(Hu) || [],
    V.length) {
        for (; y = Hu.exec(r); )
            D = y[0],
            G = r.substring(p, y.index),
            M ? M = (M + 1) % 5 : (G.substr(-5) === "rgba(" || G.substr(-5) === "hsla(") && (M = 1),
            D !== (x = S[g++] || "") && (b = parseFloat(x) || 0,
            Y = x.substr((b + "").length),
            D.charAt(1) === "=" && (D = qu(b, D) + Y),
            B = parseFloat(D),
            Z = D.substr((B + "").length),
            p = Hu.lastIndex - Z.length,
            Z || (Z = Z || sn.units[u] || Y,
            p === r.length && (r += Z,
            h.e += Z)),
            Y !== Z && (b = da(n, u, x, Z) || 0),
            h._pt = {
                _next: h._pt,
                p: G || g === 1 ? G : ",",
                s: b,
                c: B - b,
                m: M && M < 4 || u === "zIndex" ? Math.round : 0
            });
        h.c = p < r.length ? r.substring(p, r.length) : ""
    } else
        h.r = u === "display" && r === "none" ? m_ : h_;
    return Dp.test(r) && (h.e = 0),
    this._pt = h,
    h
}, ep = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, jb = function(n) {
    var u = n.split(" ")
      , a = u[0]
      , r = u[1] || "50%";
    return (a === "top" || a === "bottom" || r === "left" || r === "right") && (n = a,
    a = r,
    r = n),
    u[0] = ep[a] || a,
    u[1] = ep[r] || r,
    u.join(" ")
}, Ub = function(n, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
        var a = u.t, r = a.style, f = u.u, o = a._gsap, h, p, g;
        if (f === "all" || f === !0)
            r.cssText = "",
            p = 1;
        else
            for (f = f.split(","),
            g = f.length; --g > -1; )
                h = f[g],
                Oi[h] && (p = 1,
                h = h === "transformOrigin" ? Ll : be),
                oa(a, h);
        p && (oa(a, be),
        o && (o.svg && a.removeAttribute("transform"),
        r.scale = r.rotate = r.translate = "none",
        ps(a, 1),
        o.uncache = 1,
        g_(r)))
    }
}, sf = {
    clearProps: function(n, u, a, r, f) {
        if (f.data !== "isFromStart") {
            var o = n._pt = new ql(n._pt,u,a,0,0,Ub);
            return o.u = r,
            o.pr = -10,
            o.tween = f,
            n._props.push(a),
            1
        }
    }
}, gs = [1, 0, 0, 1, 0, 0], b_ = {}, x_ = function(n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n
}, lp = function(n) {
    var u = rn(n, be);
    return x_(u) ? gs : u.substr(7).match(Op).map(Ne)
}, Hh = function(n, u) {
    var a = n._gsap || La(n), r = n.style, f = lp(n), o, h, p, g;
    return a.svg && n.getAttribute("transform") ? (p = n.transform.baseVal.consolidate().matrix,
    f = [p.a, p.b, p.c, p.d, p.e, p.f],
    f.join(",") === "1,0,0,1,0,0" ? gs : f) : (f === gs && !n.offsetParent && n !== Lu && !a.svg && (p = r.display,
    r.display = "block",
    o = n.parentNode,
    (!o || !n.offsetParent && !n.getBoundingClientRect().width) && (g = 1,
    h = n.nextElementSibling,
    Lu.appendChild(n)),
    f = lp(n),
    p ? r.display = p : oa(n, "display"),
    g && (h ? o.insertBefore(n, h) : o ? o.appendChild(n) : Lu.removeChild(n))),
    u && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f)
}, rh = function(n, u, a, r, f, o) {
    var h = n._gsap, p = f || Hh(n, !0), g = h.xOrigin || 0, _ = h.yOrigin || 0, y = h.xOffset || 0, S = h.yOffset || 0, b = p[0], M = p[1], x = p[2], D = p[3], B = p[4], G = p[5], Z = u.split(" "), Y = parseFloat(Z[0]) || 0, V = parseFloat(Z[1]) || 0, F, j, W, J;
    a ? p !== gs && (j = b * D - M * x) && (W = Y * (D / j) + V * (-x / j) + (x * G - D * B) / j,
    J = Y * (-M / j) + V * (b / j) - (b * G - M * B) / j,
    Y = W,
    V = J) : (F = v_(n),
    Y = F.x + (~Z[0].indexOf("%") ? Y / 100 * F.width : Y),
    V = F.y + (~(Z[1] || Z[0]).indexOf("%") ? V / 100 * F.height : V)),
    r || r !== !1 && h.smooth ? (B = Y - g,
    G = V - _,
    h.xOffset = y + (B * b + G * x) - B,
    h.yOffset = S + (B * M + G * D) - G) : h.xOffset = h.yOffset = 0,
    h.xOrigin = Y,
    h.yOrigin = V,
    h.smooth = !!r,
    h.origin = u,
    h.originIsAbsolute = !!a,
    n.style[Ll] = "0px 0px",
    o && (ia(o, h, "xOrigin", g, Y),
    ia(o, h, "yOrigin", _, V),
    ia(o, h, "xOffset", y, h.xOffset),
    ia(o, h, "yOffset", S, h.yOffset)),
    n.setAttribute("data-svg-origin", Y + " " + V)
}, ps = function(n, u) {
    var a = n._gsap || new i_(n);
    if ("x"in a && !u && !a.uncache)
        return a;
    var r = n.style, f = a.scaleX < 0, o = "px", h = "deg", p = getComputedStyle(n), g = rn(n, Ll) || "0", _, y, S, b, M, x, D, B, G, Z, Y, V, F, j, W, J, $, ft, P, xt, pt, vt, N, k, et, ot, C, E, L, I, tt, ut;
    return _ = y = S = x = D = B = G = Z = Y = 0,
    b = M = 1,
    a.svg = !!(n.getCTM && y_(n)),
    p.translate && ((p.translate !== "none" || p.scale !== "none" || p.rotate !== "none") && (r[be] = (p.translate !== "none" ? "translate3d(" + (p.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (p.rotate !== "none" ? "rotate(" + p.rotate + ") " : "") + (p.scale !== "none" ? "scale(" + p.scale.split(" ").join(",") + ") " : "") + (p[be] !== "none" ? p[be] : "")),
    r.scale = r.rotate = r.translate = "none"),
    j = Hh(n, a.svg),
    a.svg && (a.uncache ? (et = n.getBBox(),
    g = a.xOrigin - et.x + "px " + (a.yOrigin - et.y) + "px",
    k = "") : k = !u && n.getAttribute("data-svg-origin"),
    rh(n, k || g, !!k || a.originIsAbsolute, a.smooth !== !1, j)),
    V = a.xOrigin || 0,
    F = a.yOrigin || 0,
    j !== gs && (ft = j[0],
    P = j[1],
    xt = j[2],
    pt = j[3],
    _ = vt = j[4],
    y = N = j[5],
    j.length === 6 ? (b = Math.sqrt(ft * ft + P * P),
    M = Math.sqrt(pt * pt + xt * xt),
    x = ft || P ? Nu(P, ft) * Ua : 0,
    G = xt || pt ? Nu(xt, pt) * Ua + x : 0,
    G && (M *= Math.abs(Math.cos(G * Xu))),
    a.svg && (_ -= V - (V * ft + F * xt),
    y -= F - (V * P + F * pt))) : (ut = j[6],
    I = j[7],
    C = j[8],
    E = j[9],
    L = j[10],
    tt = j[11],
    _ = j[12],
    y = j[13],
    S = j[14],
    W = Nu(ut, L),
    D = W * Ua,
    W && (J = Math.cos(-W),
    $ = Math.sin(-W),
    k = vt * J + C * $,
    et = N * J + E * $,
    ot = ut * J + L * $,
    C = vt * -$ + C * J,
    E = N * -$ + E * J,
    L = ut * -$ + L * J,
    tt = I * -$ + tt * J,
    vt = k,
    N = et,
    ut = ot),
    W = Nu(-xt, L),
    B = W * Ua,
    W && (J = Math.cos(-W),
    $ = Math.sin(-W),
    k = ft * J - C * $,
    et = P * J - E * $,
    ot = xt * J - L * $,
    tt = pt * $ + tt * J,
    ft = k,
    P = et,
    xt = ot),
    W = Nu(P, ft),
    x = W * Ua,
    W && (J = Math.cos(W),
    $ = Math.sin(W),
    k = ft * J + P * $,
    et = vt * J + N * $,
    P = P * J - ft * $,
    N = N * J - vt * $,
    ft = k,
    vt = et),
    D && Math.abs(D) + Math.abs(x) > 359.9 && (D = x = 0,
    B = 180 - B),
    b = Ne(Math.sqrt(ft * ft + P * P + xt * xt)),
    M = Ne(Math.sqrt(N * N + ut * ut)),
    W = Nu(vt, N),
    G = Math.abs(W) > 2e-4 ? W * Ua : 0,
    Y = tt ? 1 / (tt < 0 ? -tt : tt) : 0),
    a.svg && (k = n.getAttribute("transform"),
    a.forceCSS = n.setAttribute("transform", "") || !x_(rn(n, be)),
    k && n.setAttribute("transform", k))),
    Math.abs(G) > 90 && Math.abs(G) < 270 && (f ? (b *= -1,
    G += x <= 0 ? 180 : -180,
    x += x <= 0 ? 180 : -180) : (M *= -1,
    G += G <= 0 ? 180 : -180)),
    u = u || a.uncache,
    a.x = _ - ((a.xPercent = _ && (!u && a.xPercent || (Math.round(n.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? n.offsetWidth * a.xPercent / 100 : 0) + o,
    a.y = y - ((a.yPercent = y && (!u && a.yPercent || (Math.round(n.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? n.offsetHeight * a.yPercent / 100 : 0) + o,
    a.z = S + o,
    a.scaleX = Ne(b),
    a.scaleY = Ne(M),
    a.rotation = Ne(x) + h,
    a.rotationX = Ne(D) + h,
    a.rotationY = Ne(B) + h,
    a.skewX = G + h,
    a.skewY = Z + h,
    a.transformPerspective = Y + o,
    (a.zOrigin = parseFloat(g.split(" ")[2]) || !u && a.zOrigin || 0) && (r[Ll] = cf(g)),
    a.xOffset = a.yOffset = 0,
    a.force3D = sn.force3D,
    a.renderTransform = a.svg ? Bb : __ ? S_ : Hb,
    a.uncache = 0,
    a
}, cf = function(n) {
    return (n = n.split(" "))[0] + " " + n[1]
}, Ld = function(n, u, a) {
    var r = hl(u);
    return Ne(parseFloat(u) + parseFloat(da(n, "x", a + "px", r))) + r
}, Hb = function(n, u) {
    u.z = "0px",
    u.rotationY = u.rotationX = "0deg",
    u.force3D = 0,
    S_(n, u)
}, Ra = "0deg", Xr = "0px", ja = ") ", S_ = function(n, u) {
    var a = u || this
      , r = a.xPercent
      , f = a.yPercent
      , o = a.x
      , h = a.y
      , p = a.z
      , g = a.rotation
      , _ = a.rotationY
      , y = a.rotationX
      , S = a.skewX
      , b = a.skewY
      , M = a.scaleX
      , x = a.scaleY
      , D = a.transformPerspective
      , B = a.force3D
      , G = a.target
      , Z = a.zOrigin
      , Y = ""
      , V = B === "auto" && n && n !== 1 || B === !0;
    if (Z && (y !== Ra || _ !== Ra)) {
        var F = parseFloat(_) * Xu, j = Math.sin(F), W = Math.cos(F), J;
        F = parseFloat(y) * Xu,
        J = Math.cos(F),
        o = Ld(G, o, j * J * -Z),
        h = Ld(G, h, -Math.sin(F) * -Z),
        p = Ld(G, p, W * J * -Z + Z)
    }
    D !== Xr && (Y += "perspective(" + D + ja),
    (r || f) && (Y += "translate(" + r + "%, " + f + "%) "),
    (V || o !== Xr || h !== Xr || p !== Xr) && (Y += p !== Xr || V ? "translate3d(" + o + ", " + h + ", " + p + ") " : "translate(" + o + ", " + h + ja),
    g !== Ra && (Y += "rotate(" + g + ja),
    _ !== Ra && (Y += "rotateY(" + _ + ja),
    y !== Ra && (Y += "rotateX(" + y + ja),
    (S !== Ra || b !== Ra) && (Y += "skew(" + S + ", " + b + ja),
    (M !== 1 || x !== 1) && (Y += "scale(" + M + ", " + x + ja),
    G.style[be] = Y || "translate(0, 0)"
}, Bb = function(n, u) {
    var a = u || this, r = a.xPercent, f = a.yPercent, o = a.x, h = a.y, p = a.rotation, g = a.skewX, _ = a.skewY, y = a.scaleX, S = a.scaleY, b = a.target, M = a.xOrigin, x = a.yOrigin, D = a.xOffset, B = a.yOffset, G = a.forceCSS, Z = parseFloat(o), Y = parseFloat(h), V, F, j, W, J;
    p = parseFloat(p),
    g = parseFloat(g),
    _ = parseFloat(_),
    _ && (_ = parseFloat(_),
    g += _,
    p += _),
    p || g ? (p *= Xu,
    g *= Xu,
    V = Math.cos(p) * y,
    F = Math.sin(p) * y,
    j = Math.sin(p - g) * -S,
    W = Math.cos(p - g) * S,
    g && (_ *= Xu,
    J = Math.tan(g - _),
    J = Math.sqrt(1 + J * J),
    j *= J,
    W *= J,
    _ && (J = Math.tan(_),
    J = Math.sqrt(1 + J * J),
    V *= J,
    F *= J)),
    V = Ne(V),
    F = Ne(F),
    j = Ne(j),
    W = Ne(W)) : (V = y,
    W = S,
    F = j = 0),
    (Z && !~(o + "").indexOf("px") || Y && !~(h + "").indexOf("px")) && (Z = da(b, "x", o, "px"),
    Y = da(b, "y", h, "px")),
    (M || x || D || B) && (Z = Ne(Z + M - (M * V + x * j) + D),
    Y = Ne(Y + x - (M * F + x * W) + B)),
    (r || f) && (J = b.getBBox(),
    Z = Ne(Z + r / 100 * J.width),
    Y = Ne(Y + f / 100 * J.height)),
    J = "matrix(" + V + "," + F + "," + j + "," + W + "," + Z + "," + Y + ")",
    b.setAttribute("transform", J),
    G && (b.style[be] = J)
}, Yb = function(n, u, a, r, f) {
    var o = 360, h = Pe(f), p = parseFloat(f) * (h && ~f.indexOf("rad") ? Ua : 1), g = p - r, _ = r + g + "deg", y, S;
    return h && (y = f.split("_")[1],
    y === "short" && (g %= o,
    g !== g % (o / 2) && (g += g < 0 ? o : -o)),
    y === "cw" && g < 0 ? g = (g + o * W1) % o - ~~(g / o) * o : y === "ccw" && g > 0 && (g = (g - o * W1) % o - ~~(g / o) * o)),
    n._pt = S = new ql(n._pt,u,a,r,g,bb),
    S.e = _,
    S.u = "deg",
    n._props.push(a),
    S
}, np = function(n, u) {
    for (var a in u)
        n[a] = u[a];
    return n
}, qb = function(n, u, a) {
    var r = np({}, a._gsap), f = "perspective,force3D,transformOrigin,svgOrigin", o = a.style, h, p, g, _, y, S, b, M;
    r.svg ? (g = a.getAttribute("transform"),
    a.setAttribute("transform", ""),
    o[be] = u,
    h = ps(a, 1),
    oa(a, be),
    a.setAttribute("transform", g)) : (g = getComputedStyle(a)[be],
    o[be] = u,
    h = ps(a, 1),
    o[be] = g);
    for (p in Oi)
        g = r[p],
        _ = h[p],
        g !== _ && f.indexOf(p) < 0 && (b = hl(g),
        M = hl(_),
        y = b !== M ? da(a, p, g, M) : parseFloat(g),
        S = parseFloat(_),
        n._pt = new ql(n._pt,h,p,y,S - y,ih),
        n._pt.u = M || 0,
        n._props.push(p));
    np(h, r)
};
Yl("padding,margin,Width,Radius", function(d, n) {
    var u = "Top"
      , a = "Right"
      , r = "Bottom"
      , f = "Left"
      , o = (n < 3 ? [u, a, r, f] : [u + f, u + a, r + a, r + f]).map(function(h) {
        return n < 2 ? d + h : "border" + h + d
    });
    sf[n > 1 ? "border" + d : d] = function(h, p, g, _, y) {
        var S, b;
        if (arguments.length < 4)
            return S = o.map(function(M) {
                return Ei(h, M, g)
            }),
            b = S.join(" "),
            b.split(S[0]).length === 5 ? S[0] : b;
        S = (_ + "").split(" "),
        b = {},
        o.forEach(function(M, x) {
            return b[M] = S[x] = S[x] || S[(x - 1) / 2 | 0]
        }),
        h.init(p, b, y)
    }
});
var T_ = {
    name: "css",
    register: uh,
    targetTest: function(n) {
        return n.style && n.nodeType
    },
    init: function(n, u, a, r, f) {
        var o = this._props, h = n.style, p = a.vars.startAt, g, _, y, S, b, M, x, D, B, G, Z, Y, V, F, j, W, J;
        Rh || uh(),
        this.styles = this.styles || p_(n),
        W = this.styles.props,
        this.tween = a;
        for (x in u)
            if (x !== "autoRound" && (_ = u[x],
            !(en[x] && a_(x, u, a, r, n, f)))) {
                if (b = typeof _,
                M = sf[x],
                b === "function" && (_ = _.call(a, r, n, f),
                b = typeof _),
                b === "string" && ~_.indexOf("random(") && (_ = ds(_)),
                M)
                    M(this, n, x, _, a) && (j = 1);
                else if (x.substr(0, 2) === "--")
                    g = (getComputedStyle(n).getPropertyValue(x) + "").trim(),
                    _ += "",
                    sa.lastIndex = 0,
                    sa.test(g) || (D = hl(g),
                    B = hl(_),
                    B ? D !== B && (g = da(n, x, g, B) + B) : D && (_ += D)),
                    this.add(h, "setProperty", g, _, r, f, 0, 0, x),
                    o.push(x),
                    W.push(x, 0, h[x]);
                else if (b !== "undefined") {
                    if (p && x in p ? (g = typeof p[x] == "function" ? p[x].call(a, r, n, f) : p[x],
                    Pe(g) && ~g.indexOf("random(") && (g = ds(g)),
                    hl(g + "") || g === "auto" || (g += sn.units[x] || hl(Ei(n, x)) || ""),
                    (g + "").charAt(1) === "=" && (g = Ei(n, x))) : g = Ei(n, x),
                    S = parseFloat(g),
                    G = b === "string" && _.charAt(1) === "=" && _.substr(0, 2),
                    G && (_ = _.substr(2)),
                    y = parseFloat(_),
                    x in ti && (x === "autoAlpha" && (S === 1 && Ei(n, "visibility") === "hidden" && y && (S = 0),
                    W.push("visibility", 0, h.visibility),
                    ia(this, h, "visibility", S ? "inherit" : "hidden", y ? "inherit" : "hidden", !y)),
                    x !== "scale" && x !== "transform" && (x = ti[x],
                    ~x.indexOf(",") && (x = x.split(",")[0]))),
                    Z = x in Oi,
                    Z) {
                        if (this.styles.save(x),
                        J = _,
                        b === "string" && _.substring(0, 6) === "var(--") {
                            if (_ = rn(n, _.substring(4, _.indexOf(")"))),
                            _.substring(0, 5) === "calc(") {
                                var $ = n.style.perspective;
                                n.style.perspective = _,
                                _ = rn(n, "perspective"),
                                $ ? n.style.perspective = $ : oa(n, "perspective")
                            }
                            y = parseFloat(_)
                        }
                        if (Y || (V = n._gsap,
                        V.renderTransform && !u.parseTransform || ps(n, u.parseTransform),
                        F = u.smoothOrigin !== !1 && V.smooth,
                        Y = this._pt = new ql(this._pt,h,be,0,1,V.renderTransform,V,0,-1),
                        Y.dep = 1),
                        x === "scale")
                            this._pt = new ql(this._pt,V,"scaleY",V.scaleY,(G ? qu(V.scaleY, G + y) : y) - V.scaleY || 0,ih),
                            this._pt.u = 0,
                            o.push("scaleY", x),
                            x += "X";
                        else if (x === "transformOrigin") {
                            W.push(Ll, 0, h[Ll]),
                            _ = jb(_),
                            V.svg ? rh(n, _, 0, F, 0, this) : (B = parseFloat(_.split(" ")[2]) || 0,
                            B !== V.zOrigin && ia(this, V, "zOrigin", V.zOrigin, B),
                            ia(this, h, x, cf(g), cf(_)));
                            continue
                        } else if (x === "svgOrigin") {
                            rh(n, _, 1, F, 0, this);
                            continue
                        } else if (x in b_) {
                            Yb(this, V, x, S, G ? qu(S, G + _) : _);
                            continue
                        } else if (x === "smoothOrigin") {
                            ia(this, V, "smooth", V.smooth, _);
                            continue
                        } else if (x === "force3D") {
                            V[x] = _;
                            continue
                        } else if (x === "transform") {
                            qb(this, _, n);
                            continue
                        }
                    } else
                        x in h || (x = Wu(x) || x);
                    if (Z || (y || y === 0) && (S || S === 0) && !yb.test(_) && x in h)
                        D = (g + "").substr((S + "").length),
                        y || (y = 0),
                        B = hl(_) || (x in sn.units ? sn.units[x] : D),
                        D !== B && (S = da(n, x, g, B)),
                        this._pt = new ql(this._pt,Z ? V : h,x,S,(G ? qu(S, G + y) : y) - S,!Z && (B === "px" || x === "zIndex") && u.autoRound !== !1 ? Tb : ih),
                        this._pt.u = B || 0,
                        Z && J !== _ ? (this._pt.b = g,
                        this._pt.e = J,
                        this._pt.r = Sb) : D !== B && B !== "%" && (this._pt.b = g,
                        this._pt.r = xb);
                    else if (x in h)
                        Rb.call(this, n, x, g, G ? G + _ : _);
                    else if (x in n)
                        this.add(n, x, g || n[x], G ? G + _ : _, r, f);
                    else if (x !== "parseTransform") {
                        Th(x, _);
                        continue
                    }
                    Z || (x in h ? W.push(x, 0, h[x]) : typeof n[x] == "function" ? W.push(x, 2, n[x]()) : W.push(x, 1, g || n[x])),
                    o.push(x)
                }
            }
        j && o_(this)
    },
    render: function(n, u) {
        if (u.tween._time || !jh())
            for (var a = u._pt; a; )
                a.r(n, a.d),
                a = a._next;
        else
            u.styles.revert()
    },
    get: Ei,
    aliases: ti,
    getSetter: function(n, u, a) {
        var r = ti[u];
        return r && r.indexOf(",") < 0 && (u = r),
        u in Oi && u !== Ll && (n._gsap.x || Ei(n, "x")) ? a && F1 === a ? u === "scale" ? Mb : zb : (F1 = a || {}) && (u === "scale" ? Cb : Ob) : n.style && !bh(n.style[u]) ? Eb : ~u.indexOf("-") ? Ab : Nh(n, u)
    },
    core: {
        _removeProperty: oa,
        _getMatrix: Hh
    }
};
Xl.utils.checkPrefix = Wu;
Xl.core.getStyleSaver = p_;
(function(d, n, u, a) {
    var r = Yl(d + "," + n + "," + u, function(f) {
        Oi[f] = 1
    });
    Yl(n, function(f) {
        sn.units[f] = "deg",
        b_[f] = 1
    }),
    ti[r[13]] = d + "," + n,
    Yl(a, function(f) {
        var o = f.split(":");
        ti[o[1]] = r[o[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Yl("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(d) {
    sn.units[d] = "px"
});
Xl.registerPlugin(T_);
var ze = Xl.registerPlugin(T_) || Xl;
ze.core.Tween;
const ip = ["Software QA Tester", "Quality Assurance Engineer", "Manual Tester", "Software Quality Advocate"]
  , Lb = () => {
    const [d,n] = gt.useState(0)
      , [u,a] = gt.useState(0)
      , [r,f] = gt.useState("")
      , [o,h] = gt.useState(!1)
      , {darkMode: p} = gt.useContext(Gl)
      , g = gt.useRef(null)
      , _ = gt.useRef(null)
      , y = gt.useRef(null)
      , S = gt.useRef(null)
      , b = gt.useRef(null);
    gt.useEffect( () => {
        const x = ip[d];
        let D;
        return !o && u < x.length && (D = setTimeout( () => {
            f(B => B + x[u]),
            a(B => B + 1)
        }
        , 80)),
        o && u > 0 && (D = setTimeout( () => {
            f(B => B.slice(0, -1)),
            a(B => B - 1)
        }
        , 50)),
        !o && u === x.length && (D = setTimeout( () => h(!0), 1e3)),
        o && u === 0 && (h(!1),
        n(B => (B + 1) % ip.length)),
        () => clearTimeout(D)
    }
    , [u, o, d]),
    gt.useEffect( () => {
        ze.timeline({
            defaults: {
                ease: "power3.out"
            }
        }).fromTo(g.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: .5
        }).fromTo(_.current.children, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: .8,
            stagger: .2
        }, "-=0.3").fromTo(y.current, {
            x: 100,
            opacity: 0,
            rotation: 5
        }, {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 1
        }, "-=0.5").fromTo(S.current.children, {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: .6,
            stagger: .15
        }, "-=0.3").fromTo(b.current.children, {
            scale: 0,
            opacity: 0
        }, {
            scale: 1,
            opacity: 1,
            duration: .5,
            stagger: .1
        }, "-=0.2")
    }
    , []);
    const M = [{
        icon: mf,
        link: "https://www.linkedin.com/in/francis-galacio-249755207"
    }, {
        icon: h2,
        link: "mailto:fgalacio11@gmail.com"
    }, {
        icon: ef,
        link: "https://www.facebook.com/francis.galacio.33"
    }];
    return z.jsxs("div", {
        ref: g,
        className: "flex min-h-screen px-4 sm:px-12 pt-20 md:pt-25 flex-col md:flex-row",
        style: {
            backgroundColor: "var(--bg)",
            color: "var(--text)"
        },
        children: [z.jsxs("div", {
            className: "w-full md:w-1/2 flex flex-col p-4 sm:p-14 text-center md:text-left",
            children: [z.jsxs("div", {
                ref: _,
                children: [z.jsx("h1", {
                    className: "font-bold text-xl sm:text-2xl mb-4",
                    children: "Hi, I am"
                }), z.jsx("h1", {
                    className: "text-4xl sm:text-6xl font-bold bg-linear-to-r from-red-600 to-blue-600 text-transparent bg-clip-text mb-3",
                    children: "Francis Galacio"
                }), z.jsxs("h2", {
                    className: "mt-2 text-xl sm:text-3xl font-semibold bg-linear-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text",
                    children: [r, z.jsx("span", {
                        className: "animate-pulse",
                        children: "|"
                    })]
                }), z.jsxs("p", {
                    className: "mt-1 sm:mt-10 sm:pr-12 text-sm sm:text-[1rem] leading-relaxed opacity-80",
                    children: ["I’m a ", z.jsx("span", {
                        className: `  font-semibold ${p ? "text-green-500" : "text-blue-900"}`,
                        children: "Software QA Tester"
                    }), " passionate about ensuring software quality through manual and regression testing, defect tracking, and UI and functionality validation across web, mobile, and desktop applications. ", z.jsx("br", {}), " I use ", z.jsx("span", {
                        className: `  font-semibold ${p ? "text-green-500" : "text-blue-900"}`,
                        children: "Jira and Confluence "
                    }), " to manage defects, document testing activities, and collaborate with Agile teams to deliver reliable and user-centered software solutions."]
                })]
            }), z.jsxs("div", {
                ref: S,
                className: "flex flex-col sm:flex-row gap-6 sm:gap-16 mt-3 sm:mt-10 justify-center md:justify-start",
                children: [z.jsxs("a", {
                    href: x2,
                    target: "_blank",
                    className: "inline-flex items-center justify-center py-2 px-3 gap-1 bg-blue-600 hover:bg-blue-700 shadow-lg text-white rounded-md",
                    children: [z.jsx(h1, {
                        size: 22
                    }), "Download Resume"]
                }), z.jsxs("a", {
                    href: "#contact",
                    className: "flex items-center justify-center gap-1 py-2 px-3 rounded-md shadow-lg border hover:bg-blue-600",
                    children: [z.jsx(m2, {
                        size: 22
                    }), "Get in Touch"]
                })]
            }), z.jsx("div", {
                ref: b,
                className: "flex gap-5 pt-8 justify-center md:justify-start",
                children: M.map( ({icon: x, link: D}, B) => z.jsx("a", {
                    href: D,
                    target: "_blank",
                    className: "p-2 rounded-md bg-gray-200 hover:bg-gray-400 dark:text-black",
                    children: z.jsx(x, {
                        size: 30
                    })
                }, B))
            })]
        }), z.jsx("div", {
            className: "w-full md:w-1/2 p-4 md:h-[77vh] sm:p-14 flex justify-center items-center mt-10 md:mt-0",
            children: z.jsx("div", {
                ref: y,
                className: "border-2 p-1.5 w-100 h-[60vh] sm:h-[60vh] bg-linear-to-r from-red-600 to-blue-600 shadow-[1px_5px_15px_rgba(0,0,0,0.35)] rounded-tr-[100px] rounded-2xl rounded-bl-[100px]",
                style: {
                    borderColor: "var(--border)"
                },
                children: z.jsx("img", {
                    src: `${p ? y2 : v2}`,
                    alt: "Profile",
                    className: "h-full w-full object-cover object-top rounded-tr-[100px] rounded-2xl rounded-bl-[100px]"
                })
            })
        })]
    })
}
  , Xb = () => {
    const {darkMode: d} = gt.useContext(Gl);
    return z.jsx("main", {
        className: `min-h-screen w-full transition-colors duration-300 
        ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `,
        children: z.jsx(Lb, {})
    })
}
  , Rc = ({title: d, skill: n}) => {
    const {darkMode: u} = gt.useContext(Gl);
    return z.jsxs("div", {
        className: `
        ${u ? "bg-[#272746] text-white" : "bg-white text-black"}
        rounded-xl shadow-lg hover:shadow-xl p-3
        w-full sm:w-[45%] mx-3 sm:mx-0
        transform transition duration-500
        hover:scale-105 hover:-translate-y-2
      `,
        children: [z.jsxs("h3", {
            className: "text-2xl font-semibold bg-gradient-to-r from-red-700 to-purple-500 text-transparent bg-clip-text",
            children: [d, z.jsx("div", {
                className: "mt-1 h-0.5 bg-gradient-to-r from-red-700 to-purple-500"
            })]
        }), z.jsx("div", {
            className: "flex gap-3 flex-wrap mt-6",
            children: n.map(a => z.jsxs("div", {
                className: `
              flex items-center gap-2 px-3 py-2 rounded-full
              ${u ? "bg-[#23234a] border-zinc-600 text-gray-200 hover:bg-[#2d2d5c]" : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"}
              border transition
            `,
                children: [z.jsx("img", {
                    className: "w-6 h-6 sm:w-7 sm:h-7 object-contain",
                    src: a.logo,
                    alt: a.name
                }), z.jsx("span", {
                    className: "text-sm sm:text-base",
                    children: a.name
                })]
            }, a.name))
        })]
    })
}
;
function Gb(d, n) {
    for (var u = 0; u < n.length; u++) {
        var a = n[u];
        a.enumerable = a.enumerable || !1,
        a.configurable = !0,
        "value"in a && (a.writable = !0),
        Object.defineProperty(d, a.key, a)
    }
}
function Vb(d, n, u) {
    return n && Gb(d.prototype, n),
    d
}
var il, Fc, an, aa, ua, Gu, E_, Ha, ts, A_, zi, Ln, z_, M_ = function() {
    return il || typeof window < "u" && (il = window.gsap) && il.registerPlugin && il
}, C_ = 1, Yu = [], jt = [], li = [], es = Date.now, sh = function(n, u) {
    return u
}, kb = function() {
    var n = ts.core
      , u = n.bridge || {}
      , a = n._scrollers
      , r = n._proxies;
    a.push.apply(a, jt),
    r.push.apply(r, li),
    jt = a,
    li = r,
    sh = function(o, h) {
        return u[o](h)
    }
}, ca = function(n, u) {
    return ~li.indexOf(n) && li[li.indexOf(n) + 1][u]
}, ls = function(n) {
    return !!~A_.indexOf(n)
}, xl = function(n, u, a, r, f) {
    return n.addEventListener(u, a, {
        passive: r !== !1,
        capture: !!f
    })
}, bl = function(n, u, a, r) {
    return n.removeEventListener(u, a, !!r)
}, jc = "scrollLeft", Uc = "scrollTop", ch = function() {
    return zi && zi.isPressed || jt.cache++
}, ff = function(n, u) {
    var a = function r(f) {
        if (f || f === 0) {
            C_ && (an.history.scrollRestoration = "manual");
            var o = zi && zi.isPressed;
            f = r.v = Math.round(f) || (zi && zi.iOS ? 1 : 0),
            n(f),
            r.cacheID = jt.cache,
            o && sh("ss", f)
        } else
            (u || jt.cache !== r.cacheID || sh("ref")) && (r.cacheID = jt.cache,
            r.v = n());
        return r.v + r.offset
    };
    return a.offset = 0,
    n && a
}, zl = {
    s: jc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: ff(function(d) {
        return arguments.length ? an.scrollTo(d, Ze.sc()) : an.pageXOffset || aa[jc] || ua[jc] || Gu[jc] || 0
    })
}, Ze = {
    s: Uc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: zl,
    sc: ff(function(d) {
        return arguments.length ? an.scrollTo(zl.sc(), d) : an.pageYOffset || aa[Uc] || ua[Uc] || Gu[Uc] || 0
    })
}, Hl = function(n, u) {
    return (u && u._ctx && u._ctx.selector || il.utils.toArray)(n)[0] || (typeof n == "string" && il.config().nullTargetWarn !== !1 ? console.warn("Element not found:", n) : null)
}, Qb = function(n, u) {
    for (var a = u.length; a--; )
        if (u[a] === n || u[a].contains(n))
            return !0;
    return !1
}, ha = function(n, u) {
    var a = u.s
      , r = u.sc;
    ls(n) && (n = aa.scrollingElement || ua);
    var f = jt.indexOf(n)
      , o = r === Ze.sc ? 1 : 2;
    !~f && (f = jt.push(n) - 1),
    jt[f + o] || xl(n, "scroll", ch);
    var h = jt[f + o]
      , p = h || (jt[f + o] = ff(ca(n, a), !0) || (ls(n) ? r : ff(function(g) {
        return arguments.length ? n[a] = g : n[a]
    })));
    return p.target = n,
    h || (p.smooth = il.getProperty(n, "scrollBehavior") === "smooth"),
    p
}, fh = function(n, u, a) {
    var r = n
      , f = n
      , o = es()
      , h = o
      , p = u || 50
      , g = Math.max(500, p * 3)
      , _ = function(M, x) {
        var D = es();
        x || D - o > p ? (f = r,
        r = M,
        h = o,
        o = D) : a ? r += M : r = f + (M - f) / (D - h) * (o - h)
    }
      , y = function() {
        f = r = a ? 0 : r,
        h = o = 0
    }
      , S = function(M) {
        var x = h
          , D = f
          , B = es();
        return (M || M === 0) && M !== r && _(M),
        o === h || B - h > g ? 0 : (r + (a ? D : -D)) / ((a ? B : o) - x) * 1e3
    };
    return {
        update: _,
        reset: y,
        getVelocity: S
    }
}, Gr = function(n, u) {
    return u && !n._gsapAllow && n.preventDefault(),
    n.changedTouches ? n.changedTouches[0] : n
}, ap = function(n) {
    var u = Math.max.apply(Math, n)
      , a = Math.min.apply(Math, n);
    return Math.abs(u) >= Math.abs(a) ? u : a
}, O_ = function() {
    ts = il.core.globals().ScrollTrigger,
    ts && ts.core && kb()
}, D_ = function(n) {
    return il = n || M_(),
    !Fc && il && typeof document < "u" && document.body && (an = window,
    aa = document,
    ua = aa.documentElement,
    Gu = aa.body,
    A_ = [an, aa, ua, Gu],
    il.utils.clamp,
    z_ = il.core.context || function() {}
    ,
    Ha = "onpointerenter"in Gu ? "pointer" : "mouse",
    E_ = we.isTouch = an.matchMedia && an.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in an || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    Ln = we.eventTypes = ("ontouchstart"in ua ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in ua ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return C_ = 0
    }, 500),
    O_(),
    Fc = 1),
    Fc
};
zl.op = Ze;
jt.cache = 0;
var we = (function() {
    function d(u) {
        this.init(u)
    }
    var n = d.prototype;
    return n.init = function(a) {
        Fc || D_(il) || console.warn("Please gsap.registerPlugin(Observer)"),
        ts || O_();
        var r = a.tolerance
          , f = a.dragMinimum
          , o = a.type
          , h = a.target
          , p = a.lineHeight
          , g = a.debounce
          , _ = a.preventDefault
          , y = a.onStop
          , S = a.onStopDelay
          , b = a.ignore
          , M = a.wheelSpeed
          , x = a.event
          , D = a.onDragStart
          , B = a.onDragEnd
          , G = a.onDrag
          , Z = a.onPress
          , Y = a.onRelease
          , V = a.onRight
          , F = a.onLeft
          , j = a.onUp
          , W = a.onDown
          , J = a.onChangeX
          , $ = a.onChangeY
          , ft = a.onChange
          , P = a.onToggleX
          , xt = a.onToggleY
          , pt = a.onHover
          , vt = a.onHoverEnd
          , N = a.onMove
          , k = a.ignoreCheck
          , et = a.isNormalizer
          , ot = a.onGestureStart
          , C = a.onGestureEnd
          , E = a.onWheel
          , L = a.onEnable
          , I = a.onDisable
          , tt = a.onClick
          , ut = a.scrollSpeed
          , dt = a.capture
          , ht = a.allowClicks
          , Zt = a.lockAxis
          , Dt = a.onLockAxis;
        this.target = h = Hl(h) || ua,
        this.vars = a,
        b && (b = il.utils.toArray(b)),
        r = r || 1e-9,
        f = f || 0,
        M = M || 1,
        ut = ut || 1,
        o = o || "wheel,touch,pointer",
        g = g !== !1,
        p || (p = parseFloat(an.getComputedStyle(Gu).lineHeight) || 22);
        var Ml, Re, Ge, Bt, Ft, Je, Ie, q = this, ul = 0, Vl = 0, on = a.passive || !_ && a.passive !== !1, ie = ha(h, zl), jn = ha(h, Ze), Xn = ie(), Me = jn(), je = ~o.indexOf("touch") && !~o.indexOf("pointer") && Ln[0] === "pointerdown", Un = ls(h), fe = h.ownerDocument || aa, rl = [0, 0, 0], Cl = [0, 0, 0], dn = 0, ga = function() {
            return dn = es()
        }, xe = function(rt, Vt) {
            return (q.event = rt) && b && Qb(rt.target, b) || Vt && je && rt.pointerType !== "touch" || k && k(rt, Vt)
        }, Gn = function() {
            q._vx.reset(),
            q._vy.reset(),
            Re.pause(),
            y && y(q)
        }, me = function() {
            var rt = q.deltaX = ap(rl)
              , Vt = q.deltaY = ap(Cl)
              , lt = Math.abs(rt) >= r
              , bt = Math.abs(Vt) >= r;
            ft && (lt || bt) && ft(q, rt, Vt, rl, Cl),
            lt && (V && q.deltaX > 0 && V(q),
            F && q.deltaX < 0 && F(q),
            J && J(q),
            P && q.deltaX < 0 != ul < 0 && P(q),
            ul = q.deltaX,
            rl[0] = rl[1] = rl[2] = 0),
            bt && (W && q.deltaY > 0 && W(q),
            j && q.deltaY < 0 && j(q),
            $ && $(q),
            xt && q.deltaY < 0 != Vl < 0 && xt(q),
            Vl = q.deltaY,
            Cl[0] = Cl[1] = Cl[2] = 0),
            (Bt || Ge) && (N && N(q),
            Ge && (D && Ge === 1 && D(q),
            G && G(q),
            Ge = 0),
            Bt = !1),
            Je && !(Je = !1) && Dt && Dt(q),
            Ft && (E(q),
            Ft = !1),
            Ml = 0
        }, pl = function(rt, Vt, lt) {
            rl[lt] += rt,
            Cl[lt] += Vt,
            q._vx.update(rt),
            q._vy.update(Vt),
            g ? Ml || (Ml = requestAnimationFrame(me)) : me()
        }, Ue = function(rt, Vt) {
            Zt && !Ie && (q.axis = Ie = Math.abs(rt) > Math.abs(Vt) ? "x" : "y",
            Je = !0),
            Ie !== "y" && (rl[2] += rt,
            q._vx.update(rt, !0)),
            Ie !== "x" && (Cl[2] += Vt,
            q._vy.update(Vt, !0)),
            g ? Ml || (Ml = requestAnimationFrame(me)) : me()
        }, Vn = function(rt) {
            if (!xe(rt, 1)) {
                rt = Gr(rt, _);
                var Vt = rt.clientX
                  , lt = rt.clientY
                  , bt = Vt - q.x
                  , st = lt - q.y
                  , _t = q.isDragging;
                q.x = Vt,
                q.y = lt,
                (_t || (bt || st) && (Math.abs(q.startX - Vt) >= f || Math.abs(q.startY - lt) >= f)) && (Ge || (Ge = _t ? 2 : 1),
                _t || (q.isDragging = !0),
                Ue(bt, st))
            }
        }, ii = q.onPress = function(yt) {
            xe(yt, 1) || yt && yt.button || (q.axis = Ie = null,
            Re.pause(),
            q.isPressed = !0,
            yt = Gr(yt),
            ul = Vl = 0,
            q.startX = q.x = yt.clientX,
            q.startY = q.y = yt.clientY,
            q._vx.reset(),
            q._vy.reset(),
            xl(et ? h : fe, Ln[1], Vn, on, !0),
            q.deltaX = q.deltaY = 0,
            Z && Z(q))
        }
        , Mt = q.onRelease = function(yt) {
            if (!xe(yt, 1)) {
                bl(et ? h : fe, Ln[1], Vn, !0);
                var rt = !isNaN(q.y - q.startY)
                  , Vt = q.isDragging
                  , lt = Vt && (Math.abs(q.x - q.startX) > 3 || Math.abs(q.y - q.startY) > 3)
                  , bt = Gr(yt);
                !lt && rt && (q._vx.reset(),
                q._vy.reset(),
                _ && ht && il.delayedCall(.08, function() {
                    if (es() - dn > 300 && !yt.defaultPrevented) {
                        if (yt.target.click)
                            yt.target.click();
                        else if (fe.createEvent) {
                            var st = fe.createEvent("MouseEvents");
                            st.initMouseEvent("click", !0, !0, an, 1, bt.screenX, bt.screenY, bt.clientX, bt.clientY, !1, !1, !1, !1, 0, null),
                            yt.target.dispatchEvent(st)
                        }
                    }
                })),
                q.isDragging = q.isGesturing = q.isPressed = !1,
                y && Vt && !et && Re.restart(!0),
                Ge && me(),
                B && Vt && B(q),
                Y && Y(q, lt)
            }
        }
        , hn = function(rt) {
            return rt.touches && rt.touches.length > 1 && (q.isGesturing = !0) && ot(rt, q.isDragging)
        }, sl = function() {
            return (q.isGesturing = !1) || C(q)
        }, cl = function(rt) {
            if (!xe(rt)) {
                var Vt = ie()
                  , lt = jn();
                pl((Vt - Xn) * ut, (lt - Me) * ut, 1),
                Xn = Vt,
                Me = lt,
                y && Re.restart(!0)
            }
        }, Ve = function(rt) {
            if (!xe(rt)) {
                rt = Gr(rt, _),
                E && (Ft = !0);
                var Vt = (rt.deltaMode === 1 ? p : rt.deltaMode === 2 ? an.innerHeight : 1) * M;
                pl(rt.deltaX * Vt, rt.deltaY * Vt, 0),
                y && !et && Re.restart(!0)
            }
        }, mn = function(rt) {
            if (!xe(rt)) {
                var Vt = rt.clientX
                  , lt = rt.clientY
                  , bt = Vt - q.x
                  , st = lt - q.y;
                q.x = Vt,
                q.y = lt,
                Bt = !0,
                y && Re.restart(!0),
                (bt || st) && Ue(bt, st)
            }
        }, gn = function(rt) {
            q.event = rt,
            pt(q)
        }, Hn = function(rt) {
            q.event = rt,
            vt(q)
        }, Di = function(rt) {
            return xe(rt) || Gr(rt, _) && tt(q)
        };
        Re = q._dc = il.delayedCall(S || .25, Gn).pause(),
        q.deltaX = q.deltaY = 0,
        q._vx = fh(0, 50, !0),
        q._vy = fh(0, 50, !0),
        q.scrollX = ie,
        q.scrollY = jn,
        q.isDragging = q.isGesturing = q.isPressed = !1,
        z_(this),
        q.enable = function(yt) {
            return q.isEnabled || (xl(Un ? fe : h, "scroll", ch),
            o.indexOf("scroll") >= 0 && xl(Un ? fe : h, "scroll", cl, on, dt),
            o.indexOf("wheel") >= 0 && xl(h, "wheel", Ve, on, dt),
            (o.indexOf("touch") >= 0 && E_ || o.indexOf("pointer") >= 0) && (xl(h, Ln[0], ii, on, dt),
            xl(fe, Ln[2], Mt),
            xl(fe, Ln[3], Mt),
            ht && xl(h, "click", ga, !0, !0),
            tt && xl(h, "click", Di),
            ot && xl(fe, "gesturestart", hn),
            C && xl(fe, "gestureend", sl),
            pt && xl(h, Ha + "enter", gn),
            vt && xl(h, Ha + "leave", Hn),
            N && xl(h, Ha + "move", mn)),
            q.isEnabled = !0,
            q.isDragging = q.isGesturing = q.isPressed = Bt = Ge = !1,
            q._vx.reset(),
            q._vy.reset(),
            Xn = ie(),
            Me = jn(),
            yt && yt.type && ii(yt),
            L && L(q)),
            q
        }
        ,
        q.disable = function() {
            q.isEnabled && (Yu.filter(function(yt) {
                return yt !== q && ls(yt.target)
            }).length || bl(Un ? fe : h, "scroll", ch),
            q.isPressed && (q._vx.reset(),
            q._vy.reset(),
            bl(et ? h : fe, Ln[1], Vn, !0)),
            bl(Un ? fe : h, "scroll", cl, dt),
            bl(h, "wheel", Ve, dt),
            bl(h, Ln[0], ii, dt),
            bl(fe, Ln[2], Mt),
            bl(fe, Ln[3], Mt),
            bl(h, "click", ga, !0),
            bl(h, "click", Di),
            bl(fe, "gesturestart", hn),
            bl(fe, "gestureend", sl),
            bl(h, Ha + "enter", gn),
            bl(h, Ha + "leave", Hn),
            bl(h, Ha + "move", mn),
            q.isEnabled = q.isPressed = q.isDragging = !1,
            I && I(q))
        }
        ,
        q.kill = q.revert = function() {
            q.disable();
            var yt = Yu.indexOf(q);
            yt >= 0 && Yu.splice(yt, 1),
            zi === q && (zi = 0)
        }
        ,
        Yu.push(q),
        et && ls(h) && (zi = q),
        q.enable(x)
    }
    ,
    Vb(d, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    d
}
)();
we.version = "3.14.2";
we.create = function(d) {
    return new we(d)
}
;
we.register = D_;
we.getAll = function() {
    return Yu.slice()
}
;
we.getById = function(d) {
    return Yu.filter(function(n) {
        return n.vars.id === d
    })[0]
}
;
M_() && il.registerPlugin(we);
var it, ju, Rt, ae, ln, Jt, Bh, of, _s, ns, Zr, Hc, ol, vf, oh, Tl, up, rp, Uu, N_, Xd, w_, Sl, dh, R_, j_, ea, hh, Yh, Vu, qh, is, mh, Gd, Bc = 1, dl = Date.now, Vd = dl(), Rn = 0, Kr = 0, sp = function(n, u, a) {
    var r = tn(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return a["_" + u + "Clamp"] = r,
    r ? n.substr(6, n.length - 7) : n
}, cp = function(n, u) {
    return u && (!tn(n) || n.substr(0, 6) !== "clamp(") ? "clamp(" + n + ")" : n
}, Zb = function d() {
    return Kr && requestAnimationFrame(d)
}, fp = function() {
    return vf = 1
}, op = function() {
    return vf = 0
}, Pn = function(n) {
    return n
}, Jr = function(n) {
    return Math.round(n * 1e5) / 1e5 || 0
}, U_ = function() {
    return typeof window < "u"
}, H_ = function() {
    return it || U_() && (it = window.gsap) && it.registerPlugin && it
}, Ka = function(n) {
    return !!~Bh.indexOf(n)
}, B_ = function(n) {
    return (n === "Height" ? qh : Rt["inner" + n]) || ln["client" + n] || Jt["client" + n]
}, Y_ = function(n) {
    return ca(n, "getBoundingClientRect") || (Ka(n) ? function() {
        return tf.width = Rt.innerWidth,
        tf.height = qh,
        tf
    }
    : function() {
        return Ai(n)
    }
    )
}, Kb = function(n, u, a) {
    var r = a.d
      , f = a.d2
      , o = a.a;
    return (o = ca(n, "getBoundingClientRect")) ? function() {
        return o()[r]
    }
    : function() {
        return (u ? B_(f) : n["client" + f]) || 0
    }
}, Jb = function(n, u) {
    return !u || ~li.indexOf(n) ? Y_(n) : function() {
        return tf
    }
}, ei = function(n, u) {
    var a = u.s
      , r = u.d2
      , f = u.d
      , o = u.a;
    return Math.max(0, (a = "scroll" + r) && (o = ca(n, a)) ? o() - Y_(n)()[f] : Ka(n) ? (ln[a] || Jt[a]) - B_(r) : n[a] - n["offset" + r])
}, Yc = function(n, u) {
    for (var a = 0; a < Uu.length; a += 3)
        (!u || ~u.indexOf(Uu[a + 1])) && n(Uu[a], Uu[a + 1], Uu[a + 2])
}, tn = function(n) {
    return typeof n == "string"
}, ml = function(n) {
    return typeof n == "function"
}, Fr = function(n) {
    return typeof n == "number"
}, Ba = function(n) {
    return typeof n == "object"
}, Vr = function(n, u, a) {
    return n && n.progress(u ? 0 : 1) && a && n.pause()
}, kd = function(n, u) {
    if (n.enabled) {
        var a = n._ctx ? n._ctx.add(function() {
            return u(n)
        }) : u(n);
        a && a.totalTime && (n.callbackAnimation = a)
    }
}, wu = Math.abs, q_ = "left", L_ = "top", Lh = "right", Xh = "bottom", ka = "width", Qa = "height", as = "Right", us = "Left", rs = "Top", ss = "Bottom", Le = "padding", On = "margin", $u = "Width", Gh = "Height", Qe = "px", Dn = function(n) {
    return Rt.getComputedStyle(n)
}, Fb = function(n) {
    var u = Dn(n).position;
    n.style.position = u === "absolute" || u === "fixed" ? u : "relative"
}, dp = function(n, u) {
    for (var a in u)
        a in n || (n[a] = u[a]);
    return n
}, Ai = function(n, u) {
    var a = u && Dn(n)[oh] !== "matrix(1, 0, 0, 1, 0, 0)" && it.to(n, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , r = n.getBoundingClientRect();
    return a && a.progress(0).kill(),
    r
}, df = function(n, u) {
    var a = u.d2;
    return n["offset" + a] || n["client" + a] || 0
}, X_ = function(n) {
    var u = [], a = n.labels, r = n.duration(), f;
    for (f in a)
        u.push(a[f] / r);
    return u
}, Wb = function(n) {
    return function(u) {
        return it.utils.snap(X_(n), u)
    }
}, Vh = function(n) {
    var u = it.utils.snap(n)
      , a = Array.isArray(n) && n.slice(0).sort(function(r, f) {
        return r - f
    });
    return a ? function(r, f, o) {
        o === void 0 && (o = .001);
        var h;
        if (!f)
            return u(r);
        if (f > 0) {
            for (r -= o,
            h = 0; h < a.length; h++)
                if (a[h] >= r)
                    return a[h];
            return a[h - 1]
        } else
            for (h = a.length,
            r += o; h--; )
                if (a[h] <= r)
                    return a[h];
        return a[0]
    }
    : function(r, f, o) {
        o === void 0 && (o = .001);
        var h = u(r);
        return !f || Math.abs(h - r) < o || h - r < 0 == f < 0 ? h : u(f < 0 ? r - n : r + n)
    }
}, $b = function(n) {
    return function(u, a) {
        return Vh(X_(n))(u, a.direction)
    }
}, qc = function(n, u, a, r) {
    return a.split(",").forEach(function(f) {
        return n(u, f, r)
    })
}, $e = function(n, u, a, r, f) {
    return n.addEventListener(u, a, {
        passive: !r,
        capture: !!f
    })
}, We = function(n, u, a, r) {
    return n.removeEventListener(u, a, !!r)
}, Lc = function(n, u, a) {
    a = a && a.wheelHandler,
    a && (n(u, "wheel", a),
    n(u, "touchmove", a))
}, hp = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Xc = {
    toggleActions: "play",
    anticipatePin: 0
}, hf = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, Wc = function(n, u) {
    if (tn(n)) {
        var a = n.indexOf("=")
          , r = ~a ? +(n.charAt(a - 1) + 1) * parseFloat(n.substr(a + 1)) : 0;
        ~a && (n.indexOf("%") > a && (r *= u / 100),
        n = n.substr(0, a - 1)),
        n = r + (n in hf ? hf[n] * u : ~n.indexOf("%") ? parseFloat(n) * u / 100 : parseFloat(n) || 0)
    }
    return n
}, Gc = function(n, u, a, r, f, o, h, p) {
    var g = f.startColor
      , _ = f.endColor
      , y = f.fontSize
      , S = f.indent
      , b = f.fontWeight
      , M = ae.createElement("div")
      , x = Ka(a) || ca(a, "pinType") === "fixed"
      , D = n.indexOf("scroller") !== -1
      , B = x ? Jt : a
      , G = n.indexOf("start") !== -1
      , Z = G ? g : _
      , Y = "border-color:" + Z + ";font-size:" + y + ";color:" + Z + ";font-weight:" + b + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return Y += "position:" + ((D || p) && x ? "fixed;" : "absolute;"),
    (D || p || !x) && (Y += (r === Ze ? Lh : Xh) + ":" + (o + parseFloat(S)) + "px;"),
    h && (Y += "box-sizing:border-box;text-align:left;width:" + h.offsetWidth + "px;"),
    M._isStart = G,
    M.setAttribute("class", "gsap-marker-" + n + (u ? " marker-" + u : "")),
    M.style.cssText = Y,
    M.innerText = u || u === 0 ? n + "-" + u : n,
    B.children[0] ? B.insertBefore(M, B.children[0]) : B.appendChild(M),
    M._offset = M["offset" + r.op.d2],
    $c(M, 0, r, G),
    M
}, $c = function(n, u, a, r) {
    var f = {
        display: "block"
    }
      , o = a[r ? "os2" : "p2"]
      , h = a[r ? "p2" : "os2"];
    n._isFlipped = r,
    f[a.a + "Percent"] = r ? -100 : 0,
    f[a.a] = r ? "1px" : 0,
    f["border" + o + $u] = 1,
    f["border" + h + $u] = 0,
    f[a.p] = u + "px",
    it.set(n, f)
}, Ot = [], gh = {}, vs, mp = function() {
    return dl() - Rn > 34 && (vs || (vs = requestAnimationFrame(Mi)))
}, Ru = function() {
    (!Sl || !Sl.isPressed || Sl.startX > Jt.clientWidth) && (jt.cache++,
    Sl ? vs || (vs = requestAnimationFrame(Mi)) : Mi(),
    Rn || Fa("scrollStart"),
    Rn = dl())
}, Qd = function() {
    j_ = Rt.innerWidth,
    R_ = Rt.innerHeight
}, Wr = function(n) {
    jt.cache++,
    (n === !0 || !ol && !w_ && !ae.fullscreenElement && !ae.webkitFullscreenElement && (!dh || j_ !== Rt.innerWidth || Math.abs(Rt.innerHeight - R_) > Rt.innerHeight * .25)) && of.restart(!0)
}, Ja = {}, Pb = [], G_ = function d() {
    return We(At, "scrollEnd", d) || qa(!0)
}, Fa = function(n) {
    return Ja[n] && Ja[n].map(function(u) {
        return u()
    }) || Pb
}, Il = [], V_ = function(n) {
    for (var u = 0; u < Il.length; u += 5)
        (!n || Il[u + 4] && Il[u + 4].query === n) && (Il[u].style.cssText = Il[u + 1],
        Il[u].getBBox && Il[u].setAttribute("transform", Il[u + 2] || ""),
        Il[u + 3].uncache = 1)
}, k_ = function() {
    return jt.forEach(function(n) {
        return ml(n) && ++n.cacheID && (n.rec = n())
    })
}, kh = function(n, u) {
    var a;
    for (Tl = 0; Tl < Ot.length; Tl++)
        a = Ot[Tl],
        a && (!u || a._ctx === u) && (n ? a.kill(1) : a.revert(!0, !0));
    is = !0,
    u && V_(u),
    u || Fa("revert")
}, Q_ = function(n, u) {
    jt.cache++,
    (u || !El) && jt.forEach(function(a) {
        return ml(a) && a.cacheID++ && (a.rec = 0)
    }),
    tn(n) && (Rt.history.scrollRestoration = Yh = n)
}, El, Za = 0, gp, Ib = function() {
    if (gp !== Za) {
        var n = gp = Za;
        requestAnimationFrame(function() {
            return n === Za && qa(!0)
        })
    }
}, Z_ = function() {
    Jt.appendChild(Vu),
    qh = !Sl && Vu.offsetHeight || Rt.innerHeight,
    Jt.removeChild(Vu)
}, pp = function(n) {
    return _s(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(u) {
        return u.style.display = n ? "none" : "block"
    })
}, qa = function(n, u) {
    if (ln = ae.documentElement,
    Jt = ae.body,
    Bh = [Rt, ae, ln, Jt],
    Rn && !n && !is) {
        $e(At, "scrollEnd", G_);
        return
    }
    Z_(),
    El = At.isRefreshing = !0,
    is || k_();
    var a = Fa("refreshInit");
    N_ && At.sort(),
    u || kh(),
    jt.forEach(function(r) {
        ml(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"),
        r(0))
    }),
    Ot.slice(0).forEach(function(r) {
        return r.refresh()
    }),
    is = !1,
    Ot.forEach(function(r) {
        if (r._subPinOffset && r.pin) {
            var f = r.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , o = r.pin[f];
            r.revert(!0, 1),
            r.adjustPinSpacing(r.pin[f] - o),
            r.refresh()
        }
    }),
    mh = 1,
    pp(!0),
    Ot.forEach(function(r) {
        var f = ei(r.scroller, r._dir)
          , o = r.vars.end === "max" || r._endClamp && r.end > f
          , h = r._startClamp && r.start >= f;
        (o || h) && r.setPositions(h ? f - 1 : r.start, o ? Math.max(h ? f : r.start + 1, f) : r.end, !0)
    }),
    pp(!1),
    mh = 0,
    a.forEach(function(r) {
        return r && r.render && r.render(-1)
    }),
    jt.forEach(function(r) {
        ml(r) && (r.smooth && requestAnimationFrame(function() {
            return r.target.style.scrollBehavior = "smooth"
        }),
        r.rec && r(r.rec))
    }),
    Q_(Yh, 1),
    of.pause(),
    Za++,
    El = 2,
    Mi(2),
    Ot.forEach(function(r) {
        return ml(r.vars.onRefresh) && r.vars.onRefresh(r)
    }),
    El = At.isRefreshing = !1,
    Fa("refresh")
}, ph = 0, Pc = 1, cs, Mi = function(n) {
    if (n === 2 || !El && !is) {
        At.isUpdating = !0,
        cs && cs.update(0);
        var u = Ot.length
          , a = dl()
          , r = a - Vd >= 50
          , f = u && Ot[0].scroll();
        if (Pc = ph > f ? -1 : 1,
        El || (ph = f),
        r && (Rn && !vf && a - Rn > 200 && (Rn = 0,
        Fa("scrollEnd")),
        Zr = Vd,
        Vd = a),
        Pc < 0) {
            for (Tl = u; Tl-- > 0; )
                Ot[Tl] && Ot[Tl].update(0, r);
            Pc = 1
        } else
            for (Tl = 0; Tl < u; Tl++)
                Ot[Tl] && Ot[Tl].update(0, r);
        At.isUpdating = !1
    }
    vs = 0
}, _h = [q_, L_, Xh, Lh, On + ss, On + as, On + rs, On + us, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], Ic = _h.concat([ka, Qa, "boxSizing", "max" + $u, "max" + Gh, "position", On, Le, Le + rs, Le + as, Le + ss, Le + us]), tx = function(n, u, a) {
    ku(a);
    var r = n._gsap;
    if (r.spacerIsNative)
        ku(r.spacerState);
    else if (n._gsap.swappedIn) {
        var f = u.parentNode;
        f && (f.insertBefore(n, u),
        f.removeChild(u))
    }
    n._gsap.swappedIn = !1
}, Zd = function(n, u, a, r) {
    if (!n._gsap.swappedIn) {
        for (var f = _h.length, o = u.style, h = n.style, p; f--; )
            p = _h[f],
            o[p] = a[p];
        o.position = a.position === "absolute" ? "absolute" : "relative",
        a.display === "inline" && (o.display = "inline-block"),
        h[Xh] = h[Lh] = "auto",
        o.flexBasis = a.flexBasis || "auto",
        o.overflow = "visible",
        o.boxSizing = "border-box",
        o[ka] = df(n, zl) + Qe,
        o[Qa] = df(n, Ze) + Qe,
        o[Le] = h[On] = h[L_] = h[q_] = "0",
        ku(r),
        h[ka] = h["max" + $u] = a[ka],
        h[Qa] = h["max" + Gh] = a[Qa],
        h[Le] = a[Le],
        n.parentNode !== u && (n.parentNode.insertBefore(u, n),
        u.appendChild(n)),
        n._gsap.swappedIn = !0
    }
}, ex = /([A-Z])/g, ku = function(n) {
    if (n) {
        var u = n.t.style, a = n.length, r = 0, f, o;
        for ((n.t._gsap || it.core.getCache(n.t)).uncache = 1; r < a; r += 2)
            o = n[r + 1],
            f = n[r],
            o ? u[f] = o : u[f] && u.removeProperty(f.replace(ex, "-$1").toLowerCase())
    }
}, Vc = function(n) {
    for (var u = Ic.length, a = n.style, r = [], f = 0; f < u; f++)
        r.push(Ic[f], a[Ic[f]]);
    return r.t = n,
    r
}, lx = function(n, u, a) {
    for (var r = [], f = n.length, o = a ? 8 : 0, h; o < f; o += 2)
        h = n[o],
        r.push(h, h in u ? u[h] : n[o + 1]);
    return r.t = n.t,
    r
}, tf = {
    left: 0,
    top: 0
}, _p = function(n, u, a, r, f, o, h, p, g, _, y, S, b, M) {
    ml(n) && (n = n(p)),
    tn(n) && n.substr(0, 3) === "max" && (n = S + (n.charAt(4) === "=" ? Wc("0" + n.substr(3), a) : 0));
    var x = b ? b.time() : 0, D, B, G;
    if (b && b.seek(0),
    isNaN(n) || (n = +n),
    Fr(n))
        b && (n = it.utils.mapRange(b.scrollTrigger.start, b.scrollTrigger.end, 0, S, n)),
        h && $c(h, a, r, !0);
    else {
        ml(u) && (u = u(p));
        var Z = (n || "0").split(" "), Y, V, F, j;
        G = Hl(u, p) || Jt,
        Y = Ai(G) || {},
        (!Y || !Y.left && !Y.top) && Dn(G).display === "none" && (j = G.style.display,
        G.style.display = "block",
        Y = Ai(G),
        j ? G.style.display = j : G.style.removeProperty("display")),
        V = Wc(Z[0], Y[r.d]),
        F = Wc(Z[1] || "0", a),
        n = Y[r.p] - g[r.p] - _ + V + f - F,
        h && $c(h, F, r, a - F < 20 || h._isStart && F > 20),
        a -= a - F
    }
    if (M && (p[M] = n || -.001,
    n < 0 && (n = 0)),
    o) {
        var W = n + a
          , J = o._isStart;
        D = "scroll" + r.d2,
        $c(o, W, r, J && W > 20 || !J && (y ? Math.max(Jt[D], ln[D]) : o.parentNode[D]) <= W + 1),
        y && (g = Ai(h),
        y && (o.style[r.op.p] = g[r.op.p] - r.op.m - o._offset + Qe))
    }
    return b && G && (D = Ai(G),
    b.seek(S),
    B = Ai(G),
    b._caScrollDist = D[r.p] - B[r.p],
    n = n / b._caScrollDist * S),
    b && b.seek(x),
    b ? n : Math.round(n)
}, nx = /(webkit|moz|length|cssText|inset)/i, vp = function(n, u, a, r) {
    if (n.parentNode !== u) {
        var f = n.style, o, h;
        if (u === Jt) {
            n._stOrig = f.cssText,
            h = Dn(n);
            for (o in h)
                !+o && !nx.test(o) && h[o] && typeof f[o] == "string" && o !== "0" && (f[o] = h[o]);
            f.top = a,
            f.left = r
        } else
            f.cssText = n._stOrig;
        it.core.getCache(n).uncache = 1,
        u.appendChild(n)
    }
}, K_ = function(n, u, a) {
    var r = u
      , f = r;
    return function(o) {
        var h = Math.round(n());
        return h !== r && h !== f && Math.abs(h - r) > 3 && Math.abs(h - f) > 3 && (o = h,
        a && a()),
        f = r,
        r = Math.round(o),
        r
    }
}, kc = function(n, u, a) {
    var r = {};
    r[u.p] = "+=" + a,
    it.set(n, r)
}, yp = function(n, u) {
    var a = ha(n, u)
      , r = "_scroll" + u.p2
      , f = function o(h, p, g, _, y) {
        var S = o.tween
          , b = p.onComplete
          , M = {};
        g = g || a();
        var x = K_(a, g, function() {
            S.kill(),
            o.tween = 0
        });
        return y = _ && y || 0,
        _ = _ || h - g,
        S && S.kill(),
        p[r] = h,
        p.inherit = !1,
        p.modifiers = M,
        M[r] = function() {
            return x(g + _ * S.ratio + y * S.ratio * S.ratio)
        }
        ,
        p.onUpdate = function() {
            jt.cache++,
            o.tween && Mi()
        }
        ,
        p.onComplete = function() {
            o.tween = 0,
            b && b.call(S)
        }
        ,
        S = o.tween = it.to(n, p),
        S
    };
    return n[r] = a,
    a.wheelHandler = function() {
        return f.tween && f.tween.kill() && (f.tween = 0)
    }
    ,
    $e(n, "wheel", a.wheelHandler),
    At.isTouch && $e(n, "touchmove", a.wheelHandler),
    f
}, At = (function() {
    function d(u, a) {
        ju || d.register(it) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        hh(this),
        this.init(u, a)
    }
    var n = d.prototype;
    return n.init = function(a, r) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !Kr) {
            this.update = this.refresh = this.kill = Pn;
            return
        }
        a = dp(tn(a) || Fr(a) || a.nodeType ? {
            trigger: a
        } : a, Xc);
        var f = a, o = f.onUpdate, h = f.toggleClass, p = f.id, g = f.onToggle, _ = f.onRefresh, y = f.scrub, S = f.trigger, b = f.pin, M = f.pinSpacing, x = f.invalidateOnRefresh, D = f.anticipatePin, B = f.onScrubComplete, G = f.onSnapComplete, Z = f.once, Y = f.snap, V = f.pinReparent, F = f.pinSpacer, j = f.containerAnimation, W = f.fastScrollEnd, J = f.preventOverlaps, $ = a.horizontal || a.containerAnimation && a.horizontal !== !1 ? zl : Ze, ft = !y && y !== 0, P = Hl(a.scroller || Rt), xt = it.core.getCache(P), pt = Ka(P), vt = ("pinType"in a ? a.pinType : ca(P, "pinType") || pt && "fixed") === "fixed", N = [a.onEnter, a.onLeave, a.onEnterBack, a.onLeaveBack], k = ft && a.toggleActions.split(" "), et = "markers"in a ? a.markers : Xc.markers, ot = pt ? 0 : parseFloat(Dn(P)["border" + $.p2 + $u]) || 0, C = this, E = a.onRefreshInit && function() {
            return a.onRefreshInit(C)
        }
        , L = Kb(P, pt, $), I = Jb(P, pt), tt = 0, ut = 0, dt = 0, ht = ha(P, $), Zt, Dt, Ml, Re, Ge, Bt, Ft, Je, Ie, q, ul, Vl, on, ie, jn, Xn, Me, je, Un, fe, rl, Cl, dn, ga, xe, Gn, me, pl, Ue, Vn, ii, Mt, hn, sl, cl, Ve, mn, gn, Hn;
        if (C._startClamp = C._endClamp = !1,
        C._dir = $,
        D *= 45,
        C.scroller = P,
        C.scroll = j ? j.time.bind(j) : ht,
        Re = ht(),
        C.vars = a,
        r = r || a.animation,
        "refreshPriority"in a && (N_ = 1,
        a.refreshPriority === -9999 && (cs = C)),
        xt.tweenScroll = xt.tweenScroll || {
            top: yp(P, Ze),
            left: yp(P, zl)
        },
        C.tweenTo = Zt = xt.tweenScroll[$.p],
        C.scrubDuration = function(lt) {
            hn = Fr(lt) && lt,
            hn ? Mt ? Mt.duration(lt) : Mt = it.to(r, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: hn,
                paused: !0,
                onComplete: function() {
                    return B && B(C)
                }
            }) : (Mt && Mt.progress(1).kill(),
            Mt = 0)
        }
        ,
        r && (r.vars.lazy = !1,
        r._initted && !C.isReverted || r.vars.immediateRender !== !1 && a.immediateRender !== !1 && r.duration() && r.render(0, !0, !0),
        C.animation = r.pause(),
        r.scrollTrigger = C,
        C.scrubDuration(y),
        Vn = 0,
        p || (p = r.vars.id)),
        Y && ((!Ba(Y) || Y.push) && (Y = {
            snapTo: Y
        }),
        "scrollBehavior"in Jt.style && it.set(pt ? [Jt, ln] : P, {
            scrollBehavior: "auto"
        }),
        jt.forEach(function(lt) {
            return ml(lt) && lt.target === (pt ? ae.scrollingElement || ln : P) && (lt.smooth = !1)
        }),
        Ml = ml(Y.snapTo) ? Y.snapTo : Y.snapTo === "labels" ? Wb(r) : Y.snapTo === "labelsDirectional" ? $b(r) : Y.directional !== !1 ? function(lt, bt) {
            return Vh(Y.snapTo)(lt, dl() - ut < 500 ? 0 : bt.direction)
        }
        : it.utils.snap(Y.snapTo),
        sl = Y.duration || {
            min: .1,
            max: 2
        },
        sl = Ba(sl) ? ns(sl.min, sl.max) : ns(sl, sl),
        cl = it.delayedCall(Y.delay || hn / 2 || .1, function() {
            var lt = ht()
              , bt = dl() - ut < 500
              , st = Zt.tween;
            if ((bt || Math.abs(C.getVelocity()) < 10) && !st && !vf && tt !== lt) {
                var _t = (lt - Bt) / ie, Se = r && !ft ? r.totalProgress() : _t, Nt = bt ? 0 : (Se - ii) / (dl() - Zr) * 1e3 || 0, oe = it.utils.clamp(-_t, 1 - _t, wu(Nt / 2) * Nt / .185), ue = _t + (Y.inertia === !1 ? 0 : oe), zt, Ct, Gt = Y, _l = Gt.onStart, re = Gt.onInterrupt, vl = Gt.onComplete;
                if (zt = Ml(ue, C),
                Fr(zt) || (zt = ue),
                Ct = Math.max(0, Math.round(Bt + zt * ie)),
                lt <= Ft && lt >= Bt && Ct !== lt) {
                    if (st && !st._initted && st.data <= wu(Ct - lt))
                        return;
                    Y.inertia === !1 && (oe = zt - _t),
                    Zt(Ct, {
                        duration: sl(wu(Math.max(wu(ue - Se), wu(zt - Se)) * .185 / Nt / .05 || 0)),
                        ease: Y.ease || "power3",
                        data: wu(Ct - lt),
                        onInterrupt: function() {
                            return cl.restart(!0) && re && re(C)
                        },
                        onComplete: function() {
                            C.update(),
                            tt = ht(),
                            r && !ft && (Mt ? Mt.resetTo("totalProgress", zt, r._tTime / r._tDur) : r.progress(zt)),
                            Vn = ii = r && !ft ? r.totalProgress() : C.progress,
                            G && G(C),
                            vl && vl(C)
                        }
                    }, lt, oe * ie, Ct - lt - oe * ie),
                    _l && _l(C, Zt.tween)
                }
            } else
                C.isActive && tt !== lt && cl.restart(!0)
        }).pause()),
        p && (gh[p] = C),
        S = C.trigger = Hl(S || b !== !0 && b),
        Hn = S && S._gsap && S._gsap.stRevert,
        Hn && (Hn = Hn(C)),
        b = b === !0 ? S : Hl(b),
        tn(h) && (h = {
            targets: S,
            className: h
        }),
        b && (M === !1 || M === On || (M = !M && b.parentNode && b.parentNode.style && Dn(b.parentNode).display === "flex" ? !1 : Le),
        C.pin = b,
        Dt = it.core.getCache(b),
        Dt.spacer ? jn = Dt.pinState : (F && (F = Hl(F),
        F && !F.nodeType && (F = F.current || F.nativeElement),
        Dt.spacerIsNative = !!F,
        F && (Dt.spacerState = Vc(F))),
        Dt.spacer = je = F || ae.createElement("div"),
        je.classList.add("pin-spacer"),
        p && je.classList.add("pin-spacer-" + p),
        Dt.pinState = jn = Vc(b)),
        a.force3D !== !1 && it.set(b, {
            force3D: !0
        }),
        C.spacer = je = Dt.spacer,
        Ue = Dn(b),
        ga = Ue[M + $.os2],
        fe = it.getProperty(b),
        rl = it.quickSetter(b, $.a, Qe),
        Zd(b, je, Ue),
        Me = Vc(b)),
        et) {
            Vl = Ba(et) ? dp(et, hp) : hp,
            q = Gc("scroller-start", p, P, $, Vl, 0),
            ul = Gc("scroller-end", p, P, $, Vl, 0, q),
            Un = q["offset" + $.op.d2];
            var Di = Hl(ca(P, "content") || P);
            Je = this.markerStart = Gc("start", p, Di, $, Vl, Un, 0, j),
            Ie = this.markerEnd = Gc("end", p, Di, $, Vl, Un, 0, j),
            j && (gn = it.quickSetter([Je, Ie], $.a, Qe)),
            !vt && !(li.length && ca(P, "fixedMarkers") === !0) && (Fb(pt ? Jt : P),
            it.set([q, ul], {
                force3D: !0
            }),
            Gn = it.quickSetter(q, $.a, Qe),
            pl = it.quickSetter(ul, $.a, Qe))
        }
        if (j) {
            var yt = j.vars.onUpdate
              , rt = j.vars.onUpdateParams;
            j.eventCallback("onUpdate", function() {
                C.update(0, 0, 1),
                yt && yt.apply(j, rt || [])
            })
        }
        if (C.previous = function() {
            return Ot[Ot.indexOf(C) - 1]
        }
        ,
        C.next = function() {
            return Ot[Ot.indexOf(C) + 1]
        }
        ,
        C.revert = function(lt, bt) {
            if (!bt)
                return C.kill(!0);
            var st = lt !== !1 || !C.enabled
              , _t = ol;
            st !== C.isReverted && (st && (Ve = Math.max(ht(), C.scroll.rec || 0),
            dt = C.progress,
            mn = r && r.progress()),
            Je && [Je, Ie, q, ul].forEach(function(Se) {
                return Se.style.display = st ? "none" : "block"
            }),
            st && (ol = C,
            C.update(st)),
            b && (!V || !C.isActive) && (st ? tx(b, je, jn) : Zd(b, je, Dn(b), xe)),
            st || C.update(st),
            ol = _t,
            C.isReverted = st)
        }
        ,
        C.refresh = function(lt, bt, st, _t) {
            if (!((ol || !C.enabled) && !bt)) {
                if (b && lt && Rn) {
                    $e(d, "scrollEnd", G_);
                    return
                }
                !El && E && E(C),
                ol = C,
                Zt.tween && !st && (Zt.tween.kill(),
                Zt.tween = 0),
                Mt && Mt.pause(),
                x && r && (r.revert({
                    kill: !1
                }).invalidate(),
                r.getChildren ? r.getChildren(!0, !0, !1).forEach(function(Zn) {
                    return Zn.vars.immediateRender && Zn.render(0, !0, !0)
                }) : r.vars.immediateRender && r.render(0, !0, !0)),
                C.isReverted || C.revert(!0, !0),
                C._subPinOffset = !1;
                var Se = L(), Nt = I(), oe = j ? j.duration() : ei(P, $), ue = ie <= .01 || !ie, zt = 0, Ct = _t || 0, Gt = Ba(st) ? st.end : a.end, _l = a.endTrigger || S, re = Ba(st) ? st.start : a.start || (a.start === 0 || !S ? 0 : b ? "0 0" : "0 100%"), vl = C.pinnedContainer = a.pinnedContainer && Hl(a.pinnedContainer, C), kl = S && Math.max(0, Ot.indexOf(C)) || 0, ge = kl, Ce, pe, Ol, kn, _e, wt, Ql, $a, Qn, pn, _n, Ni, pa;
                for (et && Ba(st) && (Ni = it.getProperty(q, $.p),
                pa = it.getProperty(ul, $.p)); ge-- > 0; )
                    wt = Ot[ge],
                    wt.end || wt.refresh(0, 1) || (ol = C),
                    Ql = wt.pin,
                    Ql && (Ql === S || Ql === b || Ql === vl) && !wt.isReverted && (pn || (pn = []),
                    pn.unshift(wt),
                    wt.revert(!0, !0)),
                    wt !== Ot[ge] && (kl--,
                    ge--);
                for (ml(re) && (re = re(C)),
                re = sp(re, "start", C),
                Bt = _p(re, S, Se, $, ht(), Je, q, C, Nt, ot, vt, oe, j, C._startClamp && "_startClamp") || (b ? -.001 : 0),
                ml(Gt) && (Gt = Gt(C)),
                tn(Gt) && !Gt.indexOf("+=") && (~Gt.indexOf(" ") ? Gt = (tn(re) ? re.split(" ")[0] : "") + Gt : (zt = Wc(Gt.substr(2), Se),
                Gt = tn(re) ? re : (j ? it.utils.mapRange(0, j.duration(), j.scrollTrigger.start, j.scrollTrigger.end, Bt) : Bt) + zt,
                _l = S)),
                Gt = sp(Gt, "end", C),
                Ft = Math.max(Bt, _p(Gt || (_l ? "100% 0" : oe), _l, Se, $, ht() + zt, Ie, ul, C, Nt, ot, vt, oe, j, C._endClamp && "_endClamp")) || -.001,
                zt = 0,
                ge = kl; ge--; )
                    wt = Ot[ge] || {},
                    Ql = wt.pin,
                    Ql && wt.start - wt._pinPush <= Bt && !j && wt.end > 0 && (Ce = wt.end - (C._startClamp ? Math.max(0, wt.start) : wt.start),
                    (Ql === S && wt.start - wt._pinPush < Bt || Ql === vl) && isNaN(re) && (zt += Ce * (1 - wt.progress)),
                    Ql === b && (Ct += Ce));
                if (Bt += zt,
                Ft += zt,
                C._startClamp && (C._startClamp += zt),
                C._endClamp && !El && (C._endClamp = Ft || -.001,
                Ft = Math.min(Ft, ei(P, $))),
                ie = Ft - Bt || (Bt -= .01) && .001,
                ue && (dt = it.utils.clamp(0, 1, it.utils.normalize(Bt, Ft, Ve))),
                C._pinPush = Ct,
                Je && zt && (Ce = {},
                Ce[$.a] = "+=" + zt,
                vl && (Ce[$.p] = "-=" + ht()),
                it.set([Je, Ie], Ce)),
                b && !(mh && C.end >= ei(P, $)))
                    Ce = Dn(b),
                    kn = $ === Ze,
                    Ol = ht(),
                    Cl = parseFloat(fe($.a)) + Ct,
                    !oe && Ft > 1 && (_n = (pt ? ae.scrollingElement || ln : P).style,
                    _n = {
                        style: _n,
                        value: _n["overflow" + $.a.toUpperCase()]
                    },
                    pt && Dn(Jt)["overflow" + $.a.toUpperCase()] !== "scroll" && (_n.style["overflow" + $.a.toUpperCase()] = "scroll")),
                    Zd(b, je, Ce),
                    Me = Vc(b),
                    pe = Ai(b, !0),
                    $a = vt && ha(P, kn ? zl : Ze)(),
                    M ? (xe = [M + $.os2, ie + Ct + Qe],
                    xe.t = je,
                    ge = M === Le ? df(b, $) + ie + Ct : 0,
                    ge && (xe.push($.d, ge + Qe),
                    je.style.flexBasis !== "auto" && (je.style.flexBasis = ge + Qe)),
                    ku(xe),
                    vl && Ot.forEach(function(Zn) {
                        Zn.pin === vl && Zn.vars.pinSpacing !== !1 && (Zn._subPinOffset = !0)
                    }),
                    vt && ht(Ve)) : (ge = df(b, $),
                    ge && je.style.flexBasis !== "auto" && (je.style.flexBasis = ge + Qe)),
                    vt && (_e = {
                        top: pe.top + (kn ? Ol - Bt : $a) + Qe,
                        left: pe.left + (kn ? $a : Ol - Bt) + Qe,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    _e[ka] = _e["max" + $u] = Math.ceil(pe.width) + Qe,
                    _e[Qa] = _e["max" + Gh] = Math.ceil(pe.height) + Qe,
                    _e[On] = _e[On + rs] = _e[On + as] = _e[On + ss] = _e[On + us] = "0",
                    _e[Le] = Ce[Le],
                    _e[Le + rs] = Ce[Le + rs],
                    _e[Le + as] = Ce[Le + as],
                    _e[Le + ss] = Ce[Le + ss],
                    _e[Le + us] = Ce[Le + us],
                    Xn = lx(jn, _e, V),
                    El && ht(0)),
                    r ? (Qn = r._initted,
                    Xd(1),
                    r.render(r.duration(), !0, !0),
                    dn = fe($.a) - Cl + ie + Ct,
                    me = Math.abs(ie - dn) > 1,
                    vt && me && Xn.splice(Xn.length - 2, 2),
                    r.render(0, !0, !0),
                    Qn || r.invalidate(!0),
                    r.parent || r.totalTime(r.totalTime()),
                    Xd(0)) : dn = ie,
                    _n && (_n.value ? _n.style["overflow" + $.a.toUpperCase()] = _n.value : _n.style.removeProperty("overflow-" + $.a));
                else if (S && ht() && !j)
                    for (pe = S.parentNode; pe && pe !== Jt; )
                        pe._pinOffset && (Bt -= pe._pinOffset,
                        Ft -= pe._pinOffset),
                        pe = pe.parentNode;
                pn && pn.forEach(function(Zn) {
                    return Zn.revert(!1, !0)
                }),
                C.start = Bt,
                C.end = Ft,
                Re = Ge = El ? Ve : ht(),
                !j && !El && (Re < Ve && ht(Ve),
                C.scroll.rec = 0),
                C.revert(!1, !0),
                ut = dl(),
                cl && (tt = -1,
                cl.restart(!0)),
                ol = 0,
                r && ft && (r._initted || mn) && r.progress() !== mn && r.progress(mn || 0, !0).render(r.time(), !0, !0),
                (ue || dt !== C.progress || j || x || r && !r._initted) && (r && !ft && (r._initted || dt || r.vars.immediateRender !== !1) && r.totalProgress(j && Bt < -.001 && !dt ? it.utils.normalize(Bt, Ft, 0) : dt, !0),
                C.progress = ue || (Re - Bt) / ie === dt ? 0 : dt),
                b && M && (je._pinOffset = Math.round(C.progress * dn)),
                Mt && Mt.invalidate(),
                isNaN(Ni) || (Ni -= it.getProperty(q, $.p),
                pa -= it.getProperty(ul, $.p),
                kc(q, $, Ni),
                kc(Je, $, Ni - (_t || 0)),
                kc(ul, $, pa),
                kc(Ie, $, pa - (_t || 0))),
                ue && !El && C.update(),
                _ && !El && !on && (on = !0,
                _(C),
                on = !1)
            }
        }
        ,
        C.getVelocity = function() {
            return (ht() - Ge) / (dl() - Zr) * 1e3 || 0
        }
        ,
        C.endAnimation = function() {
            Vr(C.callbackAnimation),
            r && (Mt ? Mt.progress(1) : r.paused() ? ft || Vr(r, C.direction < 0, 1) : Vr(r, r.reversed()))
        }
        ,
        C.labelToScroll = function(lt) {
            return r && r.labels && (Bt || C.refresh() || Bt) + r.labels[lt] / r.duration() * ie || 0
        }
        ,
        C.getTrailing = function(lt) {
            var bt = Ot.indexOf(C)
              , st = C.direction > 0 ? Ot.slice(0, bt).reverse() : Ot.slice(bt + 1);
            return (tn(lt) ? st.filter(function(_t) {
                return _t.vars.preventOverlaps === lt
            }) : st).filter(function(_t) {
                return C.direction > 0 ? _t.end <= Bt : _t.start >= Ft
            })
        }
        ,
        C.update = function(lt, bt, st) {
            if (!(j && !st && !lt)) {
                var _t = El === !0 ? Ve : C.scroll(), Se = lt ? 0 : (_t - Bt) / ie, Nt = Se < 0 ? 0 : Se > 1 ? 1 : Se || 0, oe = C.progress, ue, zt, Ct, Gt, _l, re, vl, kl;
                if (bt && (Ge = Re,
                Re = j ? ht() : _t,
                Y && (ii = Vn,
                Vn = r && !ft ? r.totalProgress() : Nt)),
                D && b && !ol && !Bc && Rn && (!Nt && Bt < _t + (_t - Ge) / (dl() - Zr) * D ? Nt = 1e-4 : Nt === 1 && Ft > _t + (_t - Ge) / (dl() - Zr) * D && (Nt = .9999)),
                Nt !== oe && C.enabled) {
                    if (ue = C.isActive = !!Nt && Nt < 1,
                    zt = !!oe && oe < 1,
                    re = ue !== zt,
                    _l = re || !!Nt != !!oe,
                    C.direction = Nt > oe ? 1 : -1,
                    C.progress = Nt,
                    _l && !ol && (Ct = Nt && !oe ? 0 : Nt === 1 ? 1 : oe === 1 ? 2 : 3,
                    ft && (Gt = !re && k[Ct + 1] !== "none" && k[Ct + 1] || k[Ct],
                    kl = r && (Gt === "complete" || Gt === "reset" || Gt in r))),
                    J && (re || kl) && (kl || y || !r) && (ml(J) ? J(C) : C.getTrailing(J).forEach(function(Ol) {
                        return Ol.endAnimation()
                    })),
                    ft || (Mt && !ol && !Bc ? (Mt._dp._time - Mt._start !== Mt._time && Mt.render(Mt._dp._time - Mt._start),
                    Mt.resetTo ? Mt.resetTo("totalProgress", Nt, r._tTime / r._tDur) : (Mt.vars.totalProgress = Nt,
                    Mt.invalidate().restart())) : r && r.totalProgress(Nt, !!(ol && (ut || lt)))),
                    b) {
                        if (lt && M && (je.style[M + $.os2] = ga),
                        !vt)
                            rl(Jr(Cl + dn * Nt));
                        else if (_l) {
                            if (vl = !lt && Nt > oe && Ft + 1 > _t && _t + 1 >= ei(P, $),
                            V)
                                if (!lt && (ue || vl)) {
                                    var ge = Ai(b, !0)
                                      , Ce = _t - Bt;
                                    vp(b, Jt, ge.top + ($ === Ze ? Ce : 0) + Qe, ge.left + ($ === Ze ? 0 : Ce) + Qe)
                                } else
                                    vp(b, je);
                            ku(ue || vl ? Xn : Me),
                            me && Nt < 1 && ue || rl(Cl + (Nt === 1 && !vl ? dn : 0))
                        }
                    }
                    Y && !Zt.tween && !ol && !Bc && cl.restart(!0),
                    h && (re || Z && Nt && (Nt < 1 || !Gd)) && _s(h.targets).forEach(function(Ol) {
                        return Ol.classList[ue || Z ? "add" : "remove"](h.className)
                    }),
                    o && !ft && !lt && o(C),
                    _l && !ol ? (ft && (kl && (Gt === "complete" ? r.pause().totalProgress(1) : Gt === "reset" ? r.restart(!0).pause() : Gt === "restart" ? r.restart(!0) : r[Gt]()),
                    o && o(C)),
                    (re || !Gd) && (g && re && kd(C, g),
                    N[Ct] && kd(C, N[Ct]),
                    Z && (Nt === 1 ? C.kill(!1, 1) : N[Ct] = 0),
                    re || (Ct = Nt === 1 ? 1 : 3,
                    N[Ct] && kd(C, N[Ct]))),
                    W && !ue && Math.abs(C.getVelocity()) > (Fr(W) ? W : 2500) && (Vr(C.callbackAnimation),
                    Mt ? Mt.progress(1) : Vr(r, Gt === "reverse" ? 1 : !Nt, 1))) : ft && o && !ol && o(C)
                }
                if (pl) {
                    var pe = j ? _t / j.duration() * (j._caScrollDist || 0) : _t;
                    Gn(pe + (q._isFlipped ? 1 : 0)),
                    pl(pe)
                }
                gn && gn(-_t / j.duration() * (j._caScrollDist || 0))
            }
        }
        ,
        C.enable = function(lt, bt) {
            C.enabled || (C.enabled = !0,
            $e(P, "resize", Wr),
            pt || $e(P, "scroll", Ru),
            E && $e(d, "refreshInit", E),
            lt !== !1 && (C.progress = dt = 0,
            Re = Ge = tt = ht()),
            bt !== !1 && C.refresh())
        }
        ,
        C.getTween = function(lt) {
            return lt && Zt ? Zt.tween : Mt
        }
        ,
        C.setPositions = function(lt, bt, st, _t) {
            if (j) {
                var Se = j.scrollTrigger
                  , Nt = j.duration()
                  , oe = Se.end - Se.start;
                lt = Se.start + oe * lt / Nt,
                bt = Se.start + oe * bt / Nt
            }
            C.refresh(!1, !1, {
                start: cp(lt, st && !!C._startClamp),
                end: cp(bt, st && !!C._endClamp)
            }, _t),
            C.update()
        }
        ,
        C.adjustPinSpacing = function(lt) {
            if (xe && lt) {
                var bt = xe.indexOf($.d) + 1;
                xe[bt] = parseFloat(xe[bt]) + lt + Qe,
                xe[1] = parseFloat(xe[1]) + lt + Qe,
                ku(xe)
            }
        }
        ,
        C.disable = function(lt, bt) {
            if (lt !== !1 && C.revert(!0, !0),
            C.enabled && (C.enabled = C.isActive = !1,
            bt || Mt && Mt.pause(),
            Ve = 0,
            Dt && (Dt.uncache = 1),
            E && We(d, "refreshInit", E),
            cl && (cl.pause(),
            Zt.tween && Zt.tween.kill() && (Zt.tween = 0)),
            !pt)) {
                for (var st = Ot.length; st--; )
                    if (Ot[st].scroller === P && Ot[st] !== C)
                        return;
                We(P, "resize", Wr),
                pt || We(P, "scroll", Ru)
            }
        }
        ,
        C.kill = function(lt, bt) {
            C.disable(lt, bt),
            Mt && !bt && Mt.kill(),
            p && delete gh[p];
            var st = Ot.indexOf(C);
            st >= 0 && Ot.splice(st, 1),
            st === Tl && Pc > 0 && Tl--,
            st = 0,
            Ot.forEach(function(_t) {
                return _t.scroller === C.scroller && (st = 1)
            }),
            st || El || (C.scroll.rec = 0),
            r && (r.scrollTrigger = null,
            lt && r.revert({
                kill: !1
            }),
            bt || r.kill()),
            Je && [Je, Ie, q, ul].forEach(function(_t) {
                return _t.parentNode && _t.parentNode.removeChild(_t)
            }),
            cs === C && (cs = 0),
            b && (Dt && (Dt.uncache = 1),
            st = 0,
            Ot.forEach(function(_t) {
                return _t.pin === b && st++
            }),
            st || (Dt.spacer = 0)),
            a.onKill && a.onKill(C)
        }
        ,
        Ot.push(C),
        C.enable(!1, !1),
        Hn && Hn(C),
        r && r.add && !ie) {
            var Vt = C.update;
            C.update = function() {
                C.update = Vt,
                jt.cache++,
                Bt || Ft || C.refresh()
            }
            ,
            it.delayedCall(.01, C.update),
            ie = .01,
            Bt = Ft = 0
        } else
            C.refresh();
        b && Ib()
    }
    ,
    d.register = function(a) {
        return ju || (it = a || H_(),
        U_() && window.document && d.enable(),
        ju = Kr),
        ju
    }
    ,
    d.defaults = function(a) {
        if (a)
            for (var r in a)
                Xc[r] = a[r];
        return Xc
    }
    ,
    d.disable = function(a, r) {
        Kr = 0,
        Ot.forEach(function(o) {
            return o[r ? "kill" : "disable"](a)
        }),
        We(Rt, "wheel", Ru),
        We(ae, "scroll", Ru),
        clearInterval(Hc),
        We(ae, "touchcancel", Pn),
        We(Jt, "touchstart", Pn),
        qc(We, ae, "pointerdown,touchstart,mousedown", fp),
        qc(We, ae, "pointerup,touchend,mouseup", op),
        of.kill(),
        Yc(We);
        for (var f = 0; f < jt.length; f += 3)
            Lc(We, jt[f], jt[f + 1]),
            Lc(We, jt[f], jt[f + 2])
    }
    ,
    d.enable = function() {
        if (Rt = window,
        ae = document,
        ln = ae.documentElement,
        Jt = ae.body,
        it && (_s = it.utils.toArray,
        ns = it.utils.clamp,
        hh = it.core.context || Pn,
        Xd = it.core.suppressOverwrites || Pn,
        Yh = Rt.history.scrollRestoration || "auto",
        ph = Rt.pageYOffset || 0,
        it.core.globals("ScrollTrigger", d),
        Jt)) {
            Kr = 1,
            Vu = document.createElement("div"),
            Vu.style.height = "100vh",
            Vu.style.position = "absolute",
            Z_(),
            Zb(),
            we.register(it),
            d.isTouch = we.isTouch,
            ea = we.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            dh = we.isTouch === 1,
            $e(Rt, "wheel", Ru),
            Bh = [Rt, ae, ln, Jt],
            it.matchMedia ? (d.matchMedia = function(g) {
                var _ = it.matchMedia(), y;
                for (y in g)
                    _.add(y, g[y]);
                return _
            }
            ,
            it.addEventListener("matchMediaInit", function() {
                k_(),
                kh()
            }),
            it.addEventListener("matchMediaRevert", function() {
                return V_()
            }),
            it.addEventListener("matchMedia", function() {
                qa(0, 1),
                Fa("matchMedia")
            }),
            it.matchMedia().add("(orientation: portrait)", function() {
                return Qd(),
                Qd
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Qd(),
            $e(ae, "scroll", Ru);
            var a = Jt.hasAttribute("style"), r = Jt.style, f = r.borderTopStyle, o = it.core.Animation.prototype, h, p;
            for (o.revert || Object.defineProperty(o, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            r.borderTopStyle = "solid",
            h = Ai(Jt),
            Ze.m = Math.round(h.top + Ze.sc()) || 0,
            zl.m = Math.round(h.left + zl.sc()) || 0,
            f ? r.borderTopStyle = f : r.removeProperty("border-top-style"),
            a || (Jt.setAttribute("style", ""),
            Jt.removeAttribute("style")),
            Hc = setInterval(mp, 250),
            it.delayedCall(.5, function() {
                return Bc = 0
            }),
            $e(ae, "touchcancel", Pn),
            $e(Jt, "touchstart", Pn),
            qc($e, ae, "pointerdown,touchstart,mousedown", fp),
            qc($e, ae, "pointerup,touchend,mouseup", op),
            oh = it.utils.checkPrefix("transform"),
            Ic.push(oh),
            ju = dl(),
            of = it.delayedCall(.2, qa).pause(),
            Uu = [ae, "visibilitychange", function() {
                var g = Rt.innerWidth
                  , _ = Rt.innerHeight;
                ae.hidden ? (up = g,
                rp = _) : (up !== g || rp !== _) && Wr()
            }
            , ae, "DOMContentLoaded", qa, Rt, "load", qa, Rt, "resize", Wr],
            Yc($e),
            Ot.forEach(function(g) {
                return g.enable(0, 1)
            }),
            p = 0; p < jt.length; p += 3)
                Lc(We, jt[p], jt[p + 1]),
                Lc(We, jt[p], jt[p + 2])
        }
    }
    ,
    d.config = function(a) {
        "limitCallbacks"in a && (Gd = !!a.limitCallbacks);
        var r = a.syncInterval;
        r && clearInterval(Hc) || (Hc = r) && setInterval(mp, r),
        "ignoreMobileResize"in a && (dh = d.isTouch === 1 && a.ignoreMobileResize),
        "autoRefreshEvents"in a && (Yc(We) || Yc($e, a.autoRefreshEvents || "none"),
        w_ = (a.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    d.scrollerProxy = function(a, r) {
        var f = Hl(a)
          , o = jt.indexOf(f)
          , h = Ka(f);
        ~o && jt.splice(o, h ? 6 : 2),
        r && (h ? li.unshift(Rt, r, Jt, r, ln, r) : li.unshift(f, r))
    }
    ,
    d.clearMatchMedia = function(a) {
        Ot.forEach(function(r) {
            return r._ctx && r._ctx.query === a && r._ctx.kill(!0, !0)
        })
    }
    ,
    d.isInViewport = function(a, r, f) {
        var o = (tn(a) ? Hl(a) : a).getBoundingClientRect()
          , h = o[f ? ka : Qa] * r || 0;
        return f ? o.right - h > 0 && o.left + h < Rt.innerWidth : o.bottom - h > 0 && o.top + h < Rt.innerHeight
    }
    ,
    d.positionInViewport = function(a, r, f) {
        tn(a) && (a = Hl(a));
        var o = a.getBoundingClientRect()
          , h = o[f ? ka : Qa]
          , p = r == null ? h / 2 : r in hf ? hf[r] * h : ~r.indexOf("%") ? parseFloat(r) * h / 100 : parseFloat(r) || 0;
        return f ? (o.left + p) / Rt.innerWidth : (o.top + p) / Rt.innerHeight
    }
    ,
    d.killAll = function(a) {
        if (Ot.slice(0).forEach(function(f) {
            return f.vars.id !== "ScrollSmoother" && f.kill()
        }),
        a !== !0) {
            var r = Ja.killAll || [];
            Ja = {},
            r.forEach(function(f) {
                return f()
            })
        }
    }
    ,
    d
}
)();
At.version = "3.14.2";
At.saveStyles = function(d) {
    return d ? _s(d).forEach(function(n) {
        if (n && n.style) {
            var u = Il.indexOf(n);
            u >= 0 && Il.splice(u, 5),
            Il.push(n, n.style.cssText, n.getBBox && n.getAttribute("transform"), it.core.getCache(n), hh())
        }
    }) : Il
}
;
At.revert = function(d, n) {
    return kh(!d, n)
}
;
At.create = function(d, n) {
    return new At(d,n)
}
;
At.refresh = function(d) {
    return d ? Wr(!0) : (ju || At.register()) && qa(!0)
}
;
At.update = function(d) {
    return ++jt.cache && Mi(d === !0 ? 2 : 0)
}
;
At.clearScrollMemory = Q_;
At.maxScroll = function(d, n) {
    return ei(d, n ? zl : Ze)
}
;
At.getScrollFunc = function(d, n) {
    return ha(Hl(d), n ? zl : Ze)
}
;
At.getById = function(d) {
    return gh[d]
}
;
At.getAll = function() {
    return Ot.filter(function(d) {
        return d.vars.id !== "ScrollSmoother"
    })
}
;
At.isScrolling = function() {
    return !!Rn
}
;
At.snapDirectional = Vh;
At.addEventListener = function(d, n) {
    var u = Ja[d] || (Ja[d] = []);
    ~u.indexOf(n) || u.push(n)
}
;
At.removeEventListener = function(d, n) {
    var u = Ja[d]
      , a = u && u.indexOf(n);
    a >= 0 && u.splice(a, 1)
}
;
At.batch = function(d, n) {
    var u = [], a = {}, r = n.interval || .016, f = n.batchMax || 1e9, o = function(g, _) {
        var y = []
          , S = []
          , b = it.delayedCall(r, function() {
            _(y, S),
            y = [],
            S = []
        }).pause();
        return function(M) {
            y.length || b.restart(!0),
            y.push(M.trigger),
            S.push(M),
            f <= y.length && b.progress(1)
        }
    }, h;
    for (h in n)
        a[h] = h.substr(0, 2) === "on" && ml(n[h]) && h !== "onRefreshInit" ? o(h, n[h]) : n[h];
    return ml(f) && (f = f(),
    $e(At, "refresh", function() {
        return f = n.batchMax()
    })),
    _s(d).forEach(function(p) {
        var g = {};
        for (h in a)
            g[h] = a[h];
        g.trigger = p,
        u.push(At.create(g))
    }),
    u
}
;
var bp = function(n, u, a, r) {
    return u > r ? n(r) : u < 0 && n(0),
    a > r ? (r - u) / (a - u) : a < 0 ? u / (u - a) : 1
}, Kd = function d(n, u) {
    u === !0 ? n.style.removeProperty("touch-action") : n.style.touchAction = u === !0 ? "auto" : u ? "pan-" + u + (we.isTouch ? " pinch-zoom" : "") : "none",
    n === ln && d(Jt, u)
}, Qc = {
    auto: 1,
    scroll: 1
}, ix = function(n) {
    var u = n.event, a = n.target, r = n.axis, f = (u.changedTouches ? u.changedTouches[0] : u).target, o = f._gsap || it.core.getCache(f), h = dl(), p;
    if (!o._isScrollT || h - o._isScrollT > 2e3) {
        for (; f && f !== Jt && (f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth || !(Qc[(p = Dn(f)).overflowY] || Qc[p.overflowX])); )
            f = f.parentNode;
        o._isScroll = f && f !== a && !Ka(f) && (Qc[(p = Dn(f)).overflowY] || Qc[p.overflowX]),
        o._isScrollT = h
    }
    (o._isScroll || r === "x") && (u.stopPropagation(),
    u._gsapAllow = !0)
}, J_ = function(n, u, a, r) {
    return we.create({
        target: n,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: u,
        onWheel: r = r && ix,
        onPress: r,
        onDrag: r,
        onScroll: r,
        onEnable: function() {
            return a && $e(ae, we.eventTypes[0], Sp, !1, !0)
        },
        onDisable: function() {
            return We(ae, we.eventTypes[0], Sp, !0)
        }
    })
}, ax = /(input|label|select|textarea)/i, xp, Sp = function(n) {
    var u = ax.test(n.target.tagName);
    (u || xp) && (n._gsapAllow = !0,
    xp = u)
}, ux = function(n) {
    Ba(n) || (n = {}),
    n.preventDefault = n.isNormalizer = n.allowClicks = !0,
    n.type || (n.type = "wheel,touch"),
    n.debounce = !!n.debounce,
    n.id = n.id || "normalizer";
    var u = n, a = u.normalizeScrollX, r = u.momentum, f = u.allowNestedScroll, o = u.onRelease, h, p, g = Hl(n.target) || ln, _ = it.core.globals().ScrollSmoother, y = _ && _.get(), S = ea && (n.content && Hl(n.content) || y && n.content !== !1 && !y.smooth() && y.content()), b = ha(g, Ze), M = ha(g, zl), x = 1, D = (we.isTouch && Rt.visualViewport ? Rt.visualViewport.scale * Rt.visualViewport.width : Rt.outerWidth) / Rt.innerWidth, B = 0, G = ml(r) ? function() {
        return r(h)
    }
    : function() {
        return r || 2.8
    }
    , Z, Y, V = J_(g, n.type, !0, f), F = function() {
        return Y = !1
    }, j = Pn, W = Pn, J = function() {
        p = ei(g, Ze),
        W = ns(ea ? 1 : 0, p),
        a && (j = ns(0, ei(g, zl))),
        Z = Za
    }, $ = function() {
        S._gsap.y = Jr(parseFloat(S._gsap.y) + b.offset) + "px",
        S.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(S._gsap.y) + ", 0, 1)",
        b.offset = b.cacheID = 0
    }, ft = function() {
        if (Y) {
            requestAnimationFrame(F);
            var et = Jr(h.deltaY / 2)
              , ot = W(b.v - et);
            if (S && ot !== b.v + b.offset) {
                b.offset = ot - b.v;
                var C = Jr((parseFloat(S && S._gsap.y) || 0) - b.offset);
                S.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + C + ", 0, 1)",
                S._gsap.y = C + "px",
                b.cacheID = jt.cache,
                Mi()
            }
            return !0
        }
        b.offset && $(),
        Y = !0
    }, P, xt, pt, vt, N = function() {
        J(),
        P.isActive() && P.vars.scrollY > p && (b() > p ? P.progress(1) && b(p) : P.resetTo("scrollY", p))
    };
    return S && it.set(S, {
        y: "+=0"
    }),
    n.ignoreCheck = function(k) {
        return ea && k.type === "touchmove" && ft() || x > 1.05 && k.type !== "touchstart" || h.isGesturing || k.touches && k.touches.length > 1
    }
    ,
    n.onPress = function() {
        Y = !1;
        var k = x;
        x = Jr((Rt.visualViewport && Rt.visualViewport.scale || 1) / D),
        P.pause(),
        k !== x && Kd(g, x > 1.01 ? !0 : a ? !1 : "x"),
        xt = M(),
        pt = b(),
        J(),
        Z = Za
    }
    ,
    n.onRelease = n.onGestureStart = function(k, et) {
        if (b.offset && $(),
        !et)
            vt.restart(!0);
        else {
            jt.cache++;
            var ot = G(), C, E;
            a && (C = M(),
            E = C + ot * .05 * -k.velocityX / .227,
            ot *= bp(M, C, E, ei(g, zl)),
            P.vars.scrollX = j(E)),
            C = b(),
            E = C + ot * .05 * -k.velocityY / .227,
            ot *= bp(b, C, E, ei(g, Ze)),
            P.vars.scrollY = W(E),
            P.invalidate().duration(ot).play(.01),
            (ea && P.vars.scrollY >= p || C >= p - 1) && it.to({}, {
                onUpdate: N,
                duration: ot
            })
        }
        o && o(k)
    }
    ,
    n.onWheel = function() {
        P._ts && P.pause(),
        dl() - B > 1e3 && (Z = 0,
        B = dl())
    }
    ,
    n.onChange = function(k, et, ot, C, E) {
        if (Za !== Z && J(),
        et && a && M(j(C[2] === et ? xt + (k.startX - k.x) : M() + et - C[1])),
        ot) {
            b.offset && $();
            var L = E[2] === ot
              , I = L ? pt + k.startY - k.y : b() + ot - E[1]
              , tt = W(I);
            L && I !== tt && (pt += tt - I),
            b(tt)
        }
        (ot || et) && Mi()
    }
    ,
    n.onEnable = function() {
        Kd(g, a ? !1 : "x"),
        At.addEventListener("refresh", N),
        $e(Rt, "resize", N),
        b.smooth && (b.target.style.scrollBehavior = "auto",
        b.smooth = M.smooth = !1),
        V.enable()
    }
    ,
    n.onDisable = function() {
        Kd(g, !0),
        We(Rt, "resize", N),
        At.removeEventListener("refresh", N),
        V.kill()
    }
    ,
    n.lockAxis = n.lockAxis !== !1,
    h = new we(n),
    h.iOS = ea,
    ea && !b() && b(1),
    ea && it.ticker.add(Pn),
    vt = h._dc,
    P = it.to(h, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: a ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: K_(b, b(), function() {
                return P.pause()
            })
        },
        onUpdate: Mi,
        onComplete: vt.vars.onComplete
    }),
    h
};
At.sort = function(d) {
    if (ml(d))
        return Ot.sort(d);
    var n = Rt.pageYOffset || 0;
    return At.getAll().forEach(function(u) {
        return u._sortY = u.trigger ? n + u.trigger.getBoundingClientRect().top : u.start + Rt.innerHeight
    }),
    Ot.sort(d || function(u, a) {
        return (u.vars.refreshPriority || 0) * -1e6 + (u.vars.containerAnimation ? 1e6 : u._sortY) - ((a.vars.containerAnimation ? 1e6 : a._sortY) + (a.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
At.observe = function(d) {
    return new we(d)
}
;
At.normalizeScroll = function(d) {
    if (typeof d > "u")
        return Sl;
    if (d === !0 && Sl)
        return Sl.enable();
    if (d === !1) {
        Sl && Sl.kill(),
        Sl = d;
        return
    }
    var n = d instanceof we ? d : ux(d);
    return Sl && Sl.target === n.target && Sl.kill(),
    Ka(n.target) && (Sl = n),
    n
}
;
At.core = {
    _getVelocityProp: fh,
    _inputObserver: J_,
    _scrollers: jt,
    _proxies: li,
    bridge: {
        ss: function() {
            Rn || Fa("scrollStart"),
            Rn = dl()
        },
        ref: function() {
            return ol
        }
    }
};
H_() && it.registerPlugin(At);
ze.registerPlugin(At);
const rx = () => {
    const {darkMode: d} = gt.useContext(Gl)
      , n = gt.useRef(null)
      , u = gt.useRef(null)
      , a = gt.useRef(null);
    gt.useEffect( () => {
        const p = ze.context( () => {
            ze.fromTo(u.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: u.current,
                    start: "top 80%"
                }
            }),
            ze.fromTo(a.current.children, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .6,
                stagger: .2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: a.current,
                    start: "top 80%"
                }
            })
        }
        , n);
        return () => p.revert()
    }
    , []);
    let r = [{
        name: "Manual / Functional / Regression / Integration Testing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }, {
        name: "API Testing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    }, {
        name: "Web / Desktop Application Testing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    }, {
        name: "Mobile Application Testing",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
    }]
      , f = [{
        name: "Jira",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    }, {
        name: "Confluence",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg"
    }, {
        name: "Postman",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    }, {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    }, {
        name: "Excel",
        logo: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/microsoftexcel.svg"
    }, {
        name: "Gitlab",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    }]
      , h = [{
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    }, {
        name: "HTML5",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    }, {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    }, {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    }, {
        name: "PHP",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    }, {
        name: "VB.NET",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
    }]
      , o = [{
        name: "SQL / MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    }, {
        name: "SDLC / STLC / Requirements Analysis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }];
    return z.jsxs("section", {
        ref: n,
        className: `
        min-h-screen py-20 transition-colors duration-300
        ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `,
        children: [z.jsx("h1", {
            ref: u,
            className: "text-center md:text-6xl text-[2.7rem] font-extrabold text-purple-600",
            children: "TECHNICAL SKILLS"
        }), z.jsx("p", {
            className: `
          text-center text-[18px] mt-8 font-sans mx-4
          ${d ? "text-gray-300" : "text-gray-600"}
        `,
            children: "Showcasing the technical skills and expertise I’ve built through continuous learning and real-world projects."
        }), z.jsxs("div", {
            ref: a,
            className: "mt-14 max-w-7xl mx-auto flex flex-wrap justify-center gap-12 px-6",
            children: [z.jsx(Rc, {
                title: "Testing",
                skill: r
            }), z.jsx(Rc, {
                title: "Tools",
                skill: f
            }), z.jsx(Rc, {
                title: "Programming Language",
                skill: h
            }), z.jsx(Rc, {
                title: "Database & Methodologies",
                skill: o
            })]
        })]
    })
}
  , sx = "/assets/onesports.png"
  , cx = "/assets/onecms.png"
  , fx = {
    projects: [{
        id: 1,
        title: "One CMS (Content Management System)",
        description: "One CMS (Content Management System) is a web platform that lets users create, manage, and publish website content with features like content editing, media management, and user roles through an easy-to-use interface.",
        techStack: ["Jira", "Confluence", "Figma", "Excel"],
        links: {
            github: "https://github.com/abhishek-250505/DailyBrief-News-Website",
            live: "https://daily-brief-news-website.vercel.app"
        },
        image: cx,
        category: "Full Stack",
        status: "Completed"
    }, {
        id: 2,
        title: "OneSports PH",
        description: "OneSports is a sports news website that lets users browse the latest sports news, live updates, match schedules, and highlights through a clean and user-friendly interface.",
        techStack: ["Jira", "Confluence", "Figma", "Excel"],
        image: sx,
        links: {
            github: "https://github.com/abhishek-250505/PrepWise-AI-Mock-Interview",
            live: "https://prepwiseai-tau.vercel.app"
        },
        category: "Full Stack",
        status: "Completed"
    }]
}
  , ox = d => {
    const {darkMode: n} = gt.useContext(Gl);
    return z.jsxs("div", {
        className: `text-card-foreground flex flex-col gap-2 rounded-xl border h-135 overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${n ? "bg-[#272746] text-white" : "bg-white text-black"} `,
        children: [z.jsx("div", {
            className: "relative h-55 overflow-hidden cursor-pointer",
            children: z.jsx("img", {
                src: d.item.image,
                alt: "E-Commerce Platform",
                className: "w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300 "
            })
        }), z.jsxs("div", {
            className: "p-6 flex flex-col",
            children: [z.jsx("h3", {
                className: "text-xl font-bold mb-3",
                children: d.item.title
            }), z.jsx("p", {
                className: "opacity-70 mb-4 flex-1 text-sm leading-relaxed",
                children: d.item.description
            }), z.jsx("div", {
                className: "flex flex-wrap gap-2 mb-4",
                children: d.item.techStack.map( (u, a) => z.jsx("span", {
                    className: "text-xm px-3 py-1 rounded-full dark:bg-blue-900/30 text-blue-600",
                    children: u
                }, a))
            })]
        })]
    })
}
;
ze.registerPlugin(At);
const dx = () => {
    const {darkMode: d} = gt.useContext(Gl)
      , n = gt.useRef(null)
      , u = gt.useRef(null)
      , a = gt.useRef(null);
    return gt.useEffect( () => {
        const r = ze.context( () => {
            ze.fromTo(u.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: u.current,
                    start: "top 80%"
                }
            }),
            ze.fromTo(a.current.children, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .6,
                stagger: .15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: a.current,
                    start: "top 80%"
                }
            })
        }
        , n);
        return () => r.revert()
    }
    , []),
    z.jsxs("div", {
        ref: n,
        className: ` min-h-screen w-full transition-colors duration-300 ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}`,
        children: [z.jsx("h1", {
            ref: u,
            className: "text-center pt-24 md:text-6xl text-[2.7rem] font-extrabold text-purple-600",
            children: "PROJECTS"
        }), z.jsx("p", {
            className: `text-center mt-8 text-[18px] font-sans mx-4
          ${d ? "text-gray-300" : "text-gray-600"}
        `,
            children: "Practical projects built to apply skills, solve real-world problems, and demonstrate hands-on experience."
        }), z.jsx("div", {
            ref: a,
            className: "max-w-7xl mx-auto px-6 py-16 grid gap-14 md:grid-cols-2 lg:grid-cols-3",
            children: fx.projects.map( (r, f) => z.jsx("div", {
                children: z.jsx(ox, {
                    item: r
                })
            }, f))
        })]
    })
}
  , hx = "/assets/react-BHHnU3iE.pdf"
  , mx = "/assets/dsa-B_3N5PC5.pdf"
  , gx = "/assets/Nptel-b464EzYw.pdf"
  , px = "/assets/oracle-Cw8zffeU.pdf"
  , _x = "/assets/postman%20certificate-D_sZVX4J.pdf"
  , vx = "/assets/mern%20stack-stFgyb6G.pdf"
  , yx = "/assets/aws-Ux2lbxOm.pdf"
  , bx = ({name: d, place: n, date: u, linkurl: a, description: r}) => {
    const {darkMode: f} = gt.useContext(Gl);
    return z.jsxs("div", {
        className: `flex flex-col gap-6 rounded-xl p-6 shadow-lg
        ${f ? "bg-[#272746] text-white" : "bg-white text-black"}
        transform transition duration-500 hover:scale-105 hover:-translate-y-2`,
        children: [z.jsxs("div", {
            className: "flex items-start gap-4 mb-4",
            children: [z.jsx("div", {
                className: `p-3 rounded-lg ${f ? "bg-blue-700/30" : "bg-blue-200"}`,
                children: z.jsxs("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: `h-6 w-6 ${f ? "text-blue-400" : "text-blue-600"}`,
                    children: [z.jsx("path", {
                        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                    }), z.jsx("circle", {
                        cx: "12",
                        cy: "8",
                        r: "6"
                    })]
                })
            }), z.jsxs("div", {
                className: "flex-1",
                children: [z.jsx("h3", {
                    className: "font-bold text-lg mb-1 leading-tight",
                    children: d
                }), z.jsx("p", {
                    className: `text-sm ${f ? "text-blue-400" : "text-blue-600"}`,
                    children: n
                })]
            })]
        }), z.jsx("p", {
            className: "text-sm opacity-70",
            children: r
        }), z.jsxs("div", {
            className: `flex items-center justify-between pt-3 border-t ${f ? "border-zinc-700" : "border-zinc-200"}`,
            children: [z.jsx("span", {
                className: "text-sm text-green-700 font-semibold",
                children: u
            
            })]
        })]
    })
}
;
ze.registerPlugin(At);
const xx = () => {
    const {darkMode: d} = gt.useContext(Gl)
      , n = gt.useRef(null)
      , u = gt.useRef(null)
      , a = gt.useRef(null);
    gt.useEffect( () => {
        const f = ze.context( () => {
            ze.fromTo(u.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: u.current,
                    start: "top 80%"
                }
            }),
            ze.fromTo(a.current.children, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .6,
                stagger: .15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: a.current,
                    start: "top 80%"
                }
            })
        }
        , n);
        return () => f.revert()
    }
    , []);
    const r = [{
        name: "Software QA Tester",
        place: "Argold Jobs, Inc. | MQuest Ventures",
        date: "January 2026 - June 2026",
        description: "Supported software QA testing for web, mobile, and desktop applications through manual test case design and execution, functional, regression, UI, and cross-platform testing, defect reporting via Jira, CMS content validation and workflow testing, and collaboration with stakeholders in Agile environments to ensure software quality across multiple platforms."
    }, {
        name: "Application System Engineer",
        place: "WeServ Systems International Inc. | Fujitsu",
        date: "April 2022 - April 5, 2025",
        description: "Supported enterprise application testing and validation through test case design, functional, regression, API, UI, and database testing, defect tracking, release support, and collaboration with developers using tools like Postman and GitLab. "
    }, {
        name: "IT Application Specialist",
        place: "SMITS, Inc. | IT Company of San Miguel",
        date: "May 2021 - October 2021",
        description: "Supported application systems and operational support activities through troubleshooting, issue resolution, system monitoring, documentation, and reporting for internal applications, while collaborating with technical teams and stakeholders to ensure stable and efficient system performance."
    }, {
        name: "Desktop Publisher",
        place: "Toppan Best-set Premedia Limited",
        date: "March 2020 - May 2020",
        description: "Supported design and content production through layout creation, formatting, and visual asset preparation using Adobe Creative Suite."
    }, {
        name: "Data Encoder / Rater",
        place: "International Data Conversion Solution Inc.",
        date: "June 2019 - March 2020",
        description: "Reviewed, processed, and encoded data with a high level of accuracy and attention to detail, ensuring data integrity and timely completion of records."
    }, {
        name: "Data Encoder",
        place: "Prime Technology Specialists Inc. | Land Registration System",
        date: "October 2018 - March 2019 ",
        description: "Performed data entry, validation, and records verification to ensure accuracy, completeness, and integrity of organizational data."
    }];
    return z.jsxs("section", {
        ref: n,
        className: `min-h-screen w-full transition-colors duration-300
        ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `,
        children: [z.jsx("h1", {
            ref: u,
            className: "text-center pt-24 md:text-6xl text-[2.7rem] font-extrabold text-purple-600",
            children: "EXPERIENCE"
        }), z.jsx("p", {
            className: `text-center mt-8 text-[18px] font-sans
          ${d ? "text-gray-300" : "text-gray-600"}
        `,
            children: "Hands-on experience in software QA testing and quality assurance activities."
        }), z.jsx("div", {
            ref: a,
            className: "max-w-7xl mx-auto px-6 py-16 grid gap-14 md:grid-cols-2 lg:grid-cols-3",
            children: r.map( (f, o) => z.jsx(bx, {
                ...f
            }, o))
        })]
    })
}
  , Sx = () => {
    const {darkMode: d, handleTheme: n} = gt.useContext(Gl);
    return z.jsxs(z.Fragment, {
        children: [z.jsx("style", {
            children: `
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(-8deg); }
          75% { transform: rotate(8deg); }
          100% { transform: rotate(0deg); }
        }
      `
        }), z.jsxs("label", {
            className: `
        relative inline-block cursor-pointer
        w-9 h-5           /* mobile */
        sm:w-11 sm:h-6    /* desktop */
      `,
            children: [z.jsx("input", {
                type: "checkbox",
                checked: d,
                className: "sr-only peer",
                onChange: n
            }), z.jsx("span", {
                className: `
          absolute inset-0 rounded-full
          bg-sky-400 transition-all duration-300
          peer-checked:bg-[#183153]
        `
            }), z.jsx("span", {
                className: `
          absolute left-0.5 top-0.5 z-20
          bg-gray-200 rounded-full transition-all duration-300
          h-4 w-4           /* mobile */
          sm:h-5 sm:w-5     /* desktop */
          peer-checked:translate-x-4
          sm:peer-checked:translate-x-5
        `
            }), z.jsx("span", {
                className: `
          absolute z-10
          right-0.75 top-0.75
          sm:right-1 sm:top-1
        `,
                children: z.jsx("svg", {
                    viewBox: "0 0 24 24",
                    className: "w-3 h-3 sm:w-4 sm:h-4",
                    style: {
                        animation: "rotate 15s linear infinite"
                    },
                    fill: "#ffd43b",
                    children: z.jsx("circle", {
                        cx: "12",
                        cy: "12",
                        r: "5"
                    })
                })
            }), z.jsx("span", {
                className: `
          absolute z-10
          left-0.75 top-0.75
          sm:left-1 sm:top-1
        `,
                children: z.jsx("svg", {
                    viewBox: "0 0 384 512",
                    className: "w-3 h-3 sm:w-4 sm:h-4 fill-sky-400",
                    style: {
                        animation: "tilt 5s linear infinite"
                    },
                    children: z.jsx("path", {
                        d: "M223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224"
                    })
                })
            })]
        })]
    })
}
  , Tx = ["about", "education", "skill", "project", "experience", "contact"]
  , Ex = () => {
    const [d,n] = gt.useState(!1)
      , [u,a] = gt.useState("about")
      , {darkMode: r, handleTheme: f} = gt.useContext(Gl);
    gt.useEffect( () => {
        const p = () => {
            const g = window.scrollY + 100;
            for (const _ of Tx) {
                const y = document.getElementById(_);
                if (y) {
                    const S = y.offsetTop
                      , b = y.offsetHeight;
                    if (g >= S && g < S + b) {
                        a(_);
                        break
                    }
                }
            }
        }
        ;
        return window.addEventListener("scroll", p),
        () => window.removeEventListener("scroll", p)
    }
    , []);
    const o = p => {
        document.getElementById(p)?.scrollIntoView({
            behavior: "smooth"
        }),
        n(!1)
    }
      , h = (p, g) => z.jsx("button", {
        onClick: () => o(g),
        className: `transition-all bg-transparent ${u === g ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`,
        children: p
    });
    return z.jsxs(z.Fragment, {
        children: [z.jsx("style", {
            children: `
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .nav-animate {
          animation: slideDown 0.3s ease-out forwards;
        }
        .logo-animate {
          opacity: 0;
          animation: slideInLeft 0.4s ease-out 0.2s forwards;
        }
        .menu-animate {
          opacity: 0;
          animation: fadeIn 0.4s ease-out 0.3s forwards;
        }
        .right-animate {
          opacity: 0;
          animation: slideInRight 0.4s ease-out 0.35s forwards;
        }
      `
        }), z.jsxs("nav", {
            className: `nav-animate fixed top-0 w-full h-16 z-50 flex items-center justify-between px-4 md:px-20 shadow-sm
        ${r ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}`,
            children: [z.jsxs("h2", {
                className: "logo-animate md:text-2xl text-[1rem] font-bold bg-linear-to-r from-red-600 to-blue-600 text-transparent bg-clip-text",
                children: [z.jsx("span", {
                    
                }), "FrancisG."]
            }), z.jsxs("div", {
                className: "menu-animate hidden md:flex gap-8 text-[16px]",
                children: [h("About", "about"), h("Education", "education"), h("Skills", "skill"), h("Projects", "project"), h("Experience", "experience"), h("Contact", "contact")]
            }), z.jsxs("div", {
                className: "right-animate flex items-center gap-3",
                children: [z.jsx(Sx, {
                    onClick: f
                }), z.jsx("button", {
                    className: "md:hidden",
                    onClick: () => n(!0),
                    children: z.jsx(_2, {
                        size: 28
                    })
                })]
            })]
        }), z.jsxs("div", {
            className: `fixed top-0 right-0 h-full w-[70%] z-50 shadow-lg transition-transform duration-300
        ${d ? "translate-x-0" : "translate-x-full"}
        ${r ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}`,
            children: [z.jsx("div", {
                className: "flex justify-end p-5",
                children: z.jsx(m2, {
                    size: 30,
                    onClick: () => n(!1)
                })
            }), z.jsxs("div", {
                className: "flex flex-col items-center gap-8 mt-10 text-lg",
                children: [h("About", "about"), h("Education", "education"), h("Skills", "skill"), h("Projects", "project"), h("Experience", "experience"), h("Contact", "contact")]
            })]
        }), d && z.jsx("div", {
            onClick: () => n(!1),
            className: "fixed inset-0 bg-black/40 z-40 md:hidden"
        })]
    })
}
;
ze.registerPlugin(At);
const Ax = "65ed9b22-266e-4e79-acc6-7a7fee2bc2ec"
  , zx = () => {
    const {darkMode: d} = gt.useContext(Gl)
      , n = gt.useRef(null)
      , u = gt.useRef(null)
      , a = gt.useRef(null);
    return gt.useEffect( () => {
        const r = ze.context( () => {
            ze.fromTo(u.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: u.current,
                    start: "top 80%"
                }
            }),
            ze.fromTo(a.current.children, {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .6,
                stagger: .2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: a.current,
                    start: "top 80%"
                }
            })
        }
        , n);
        return () => r.revert()
    }
    , []),
    z.jsxs("section", {
        ref: n,
        className: `min-h-screen w-full transition-colors duration-300
      ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"} pb-10`,
        children: [z.jsx("h2", {
            ref: u,
            className: "text-center pt-24 text-[2.7rem] md:text-6xl font-extrabold text-purple-600",
            children: "Contact"
        }), z.jsxs("div", {
            ref: a,
            className: "grid md:grid-cols-2 max-w-6xl mx-auto gap-8 mt-12 px-6",
            children: [z.jsxs("div", {
                className: `rounded-xl p-8 shadow-lg flex flex-col gap-6
          ${d ? "bg-[#272746]" : "bg-white"}`,
                children: [z.jsx("h3", {
                    className: "text-2xl font-bold",
                    children: "Let’s Connect"
                }), z.jsx("p", {
                    className: "opacity-70 leading-relaxed",
                    children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
                }), z.jsxs("div", {
                    className: "space-y-4 text-sm md:text-base",
                    children: [z.jsxs("a", {
                        href: "https://www.linkedin.com/in/francis-galacio-249755207/",
                        className: "flex items-center gap-3 hover:text-purple-500 transition",
                        children: [z.jsx(mf, {}), " Linkedin"]
                    }), z.jsxs("a", {
                        href: "mailto:fgalacio11@gmail.com",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-3 hover:text-purple-500 transition",
                        children: [z.jsx(p2, {}), " Gmail"]
                    }), z.jsxs("a", {
                        href: "https://www.facebook.com/francis.galacio.33",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-3 hover:text-purple-500 transition",
                        children: [z.jsx(ef, {}), " Facebook"]
                    })]
                })]
            }), z.jsx("div", {
                className: `rounded-xl p-8 shadow-lg
            ${d ? "bg-[#272746] text-white" : "bg-white text-black"}`,
                children: z.jsxs("form", {
                    action: "https://api.web3forms.com/submit",
                    method: "POST",
                    className: "flex flex-col gap-5",
                    autoComplete: "off",
                    children: [z.jsx("input", {
                        type: "hidden",
                        name: "access_key",
                        value: Ax
                    }), z.jsx("input", {
                        type: "text",
                        name: "name",
                        placeholder: "Your Name",
                        required: !0,
                        className: `w-full bg-transparent border rounded-md px-4 py-3
                  placeholder-gray-500
                 focus:outline-none focus:ring-2 focus:ring-purple-500`
                    }), z.jsx("input", {
                        type: "email",
                        name: "email",
                        placeholder: "Your Email",
                        required: !0,
                        className: `w-full bg-transparent border rounded-md px-4 py-3
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500`
                    }), z.jsx("textarea", {
                        name: "message",
                        rows: "5",
                        placeholder: "Your Message",
                        required: !0,
                        className: `w-full bg-transparent border rounded-md px-4 py-3
             placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`
                    }), z.jsx("button", {
                        type: "submit",
                        className: `mt-2 bg-purple-600 text-white py-3 rounded-md
                hover:bg-purple-700 transition font-semibold`,
                        children: "Send Message"
                    })]
                })
            })]
        })]
    })
}
;
ze.registerPlugin(At);
const Mx = () => {
    const {darkMode: d} = gt.useContext(Gl)
      , n = gt.useRef(null)
      , u = gt.useRef(null)
      , a = gt.useRef(null);
    return gt.useEffect( () => {
        const r = ze.context( () => {
            ze.fromTo(u.current, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: .8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: u.current,
                    start: "top 80%"
                }
            }),
            ze.fromTo(a.current.children, {
                x: -50,
                opacity: 0
            }, {
                x: 0,
                opacity: 1,
                duration: .6,
                stagger: .2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: a.current,
                    start: "top 80%"
                }
            })
        }
        , n);
        return () => r.revert()
    }
    , []),
    z.jsxs("section", {
        ref: n,
        id: "education",
        className: `w-full min-h-screen pb-24 transition-colors duration-300
        ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}
      `,
        children: [z.jsx("h1", {
            ref: u,
            className: "text-center pt-24 mb-20 text-[2.6rem] md:text-6xl font-extrabold text-purple-600",
            children: "Education"
        }), z.jsxs("div", {
            ref: a,
            className: "relative max-w-6xl mx-auto px-4",
            children: [z.jsx("div", {
                className: "hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-red-500/70 to-blue-500/40 -translate-x-1/2"
            }), z.jsx("div", {
                className: "mb-16 md:flex md:justify-start",
                children: z.jsx("div", {
                    className: "md:w-[46%] md:pr-12 relative",
                    children: z.jsxs("div", {
                        className: `relative p-6 rounded-lg border shadow-lg
                ${d ? "bg-[#202040] border-purple-500/30" : "bg-gray-50 border-gray-200"}
              `,
                        children: [z.jsx("span", {
                            className: `hidden md:block absolute top-6 -right-3 w-0 h-0 
                border-t-10 border-b-10 border-l-12
                border-t-transparent border-b-transparent
                border-l-purple-500/70`
                        }), z.jsx("span", {
                            className: `text-sm opacity-70 font-medium mb-3 ${d ? " text-green-400 " : "text-green-600"}`,
                            children: "2014 – 2018"
                        }), z.jsx("h2", {
                            className: "text-xl md:text-2xl font-semibold mt-2",
                            children: "Bachelor of Science in Information Technology (BSIT)"
                        }), z.jsx("p", {
                            className: ` font-medium mb-3 ${d ? " text-blue-400 " : "text-blue-600"}`,
                            children: "Quezon City University"
                        })]
                    })
                })
            }), z.jsx("div", {
                className: " md:flex md:justify-end",
                children: z.jsx("div", {
                    className: "md:w-[46%] md:pl-12 relative",
                    children: z.jsxs("div", {
                        className: `relative p-6 rounded-lg border shadow-lg
                ${d ? "bg-[#202040] border-blue-500/30" : "bg-gray-50 border-gray-200"}
              `,
                        children: [z.jsx("span", {
                            className: `hidden md:block absolute top-6 -left-3 w-0 h-0 
                border-t-10 border-b-10 border-r-12
                border-t-transparent border-b-transparent
                border-r-blue-500/70`
                        }), z.jsx("span", {
                            className: `text-sm opacity-70 font-medium mb-3 ${d ? " text-green-400 " : "text-green-600"}`,
                            children: "2010 – 2014"
                        }), z.jsx("h2", {
                            className: "text-xl md:text-2xl font-semibold mt-2",
                            children: "Secondary"
                        }), z.jsx("p", {
                            className: ` font-medium mb-3 ${d ? " text-blue-400 " : "text-blue-600"}`,
                            children: "San Bartolome High School"
                        })]
                    })
                })
            })]
        })]
    })
}
  , Cx = () => {
    const {darkMode: d} = gt.useContext(Gl)
      , n = r => {
        document.getElementById(r)?.scrollIntoView({
            behavior: "smooth"
        })
    }
      , u = (r, f) => z.jsx("button", {
        onClick: () => n(f),
        className: "hover:text-blue-600 transition bg-transparent text-sm",
        children: r
    })
      , a = [{
        icon: mf,
        link: "https://www.linkedin.com/in/francis-galacio-249755207/"
    }, {
        icon: p2,
        link: "mailto:fgalacio11@gmail.com"
    }, {
        icon: ef,
        link: "https://www.facebook.com/francis.galacio.33"
    }];
    return z.jsxs("footer", {
        className: `w-full ${d ? "bg-[#1A1A2E] text-white" : "bg-white text-black"}`,
        children: [z.jsx("div", {
            className: `border-t ${d ? "border-zinc-600" : "border-zinc-200"}`
        }), z.jsx("div", {
            className: "max-w-6xl mx-auto px-4 py-10",
            children: z.jsxs("div", {
                className: "grid gap-10 md:grid-cols-3 text-center md:text-left ",
                children: [z.jsxs("div", {
                    children: [z.jsx("h2", {
                        className: "font-bold text-xl mb-3 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                        children: "Francis Galacio"
                    }), z.jsx("p", {
                        className: "opacity-70 text-sm leading-relaxed",
                        children: "Software QA Tester with a passion for ensuring software quality through thorough testing, defect identification, and continuous improvement."
                    })]
                }), z.jsxs("div", {
                    className: "md:ml-30",
                    children: [z.jsx("h2", {
                        className: "font-semibold mb-4",
                        children: "Links"
                    }), z.jsxs("ul", {
                        className: "space-y-2",
                        children: [z.jsx("li", {
                            children: u("About", "about")
                        }), z.jsx("li", {
                            children: u("Education", "education")
                        }), z.jsx("li", {
                            children: u("Skills", "skill")
                        }), z.jsx("li", {
                            children: u("Projects", "project")
                        }), z.jsx("li", {
                            children: u("Experience", "experience")
                        }), z.jsx("li", {
                            children: u("Contact", "contact")
                        })]
                    })]
                }), z.jsxs("div", {
                    className: "md:ml-30",
                    children: [z.jsx("h2", {
                        className: "font-semibold mb-4",
                        children: "Connect"
                    }), z.jsx("div", {
                        className: "flex justify-center md:justify-start gap-4",
                        children: a.map( ({icon: r, link: f}, o) => z.jsx("a", {
                            href: f,
                            target: "_blank",
                            className: `p-2 rounded-md transition ${d ? "bg-white text-black hover:bg-gray-300" : "bg-gray-200 hover:bg-gray-300"}`,
                            children: z.jsx(r, {
                                size: 24
                            })
                        }, o))
                    })]
                })]
            })
        }), z.jsx("div", {
            className: `border-t ${d ? "border-zinc-600" : "border-zinc-200"}`,
            children: z.jsxs("p", {
                className: "text-center text-sm opacity-70 py-4 px-4",
                children: ["© ", new Date().getFullYear(), " Francis Galacio. All rights reserved."]
            })
        })]
    })
}
  , Ox = () => z.jsxs(z.Fragment, {
    children: [z.jsx(Ex, {}), z.jsx("section", {
        id: "about",
        children: z.jsx(Xb, {})
    }), z.jsx("section", {
        id: "education",
        children: z.jsx(Mx, {})
    }), z.jsx("section", {
        id: "skill",
        children: z.jsx(rx, {})
    }), z.jsx("section", {
        id: "project",
        children: z.jsx(dx, {})
    }), z.jsx("section", {
        id: "experience",
        children: z.jsx(xx, {})
    }), z.jsx("section", {
        id: "contact",
        children: z.jsx(zx, {})
    }), z.jsx("section", {
        id: "footer",
        children: z.jsx(Cx, {})
    })]
});
d2.createRoot(document.getElementById("root")).render(z.jsx(Ke.StrictMode, {
    children: z.jsx(b2, {
        children: z.jsx(Ox, {})
    })
}));
