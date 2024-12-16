var defineProperty = Object.defineProperty;

var setObjectProperty = (object, key, value) => {
  return key in object
    ? defineProperty(object, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value,
      })
    : (object[key] = value);
};
var J = (o, e, n) => (
  setObjectProperty(o, typeof e != 'symbol' ? e + '' : e, n), n
);
(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) {
    return;
  }
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) {
    t(i);
  }
  new MutationObserver((i) => {
    for (const l of i) {
      if (l.type === 'childList') {
        for (const s of l.addedNodes) {
          s.tagName === 'LINK' && s.rel === 'modulepreload' && t(s);
        }
      }
    }
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (l.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (l.credentials = 'omit')
          : (l.credentials = 'same-origin'),
      l
    );
  }
  function t(i) {
    if (i.ep) {
      return;
    }
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function E() {}
function bt(o, e) {
  for (const n in e) {
    o[n] = e[n];
  }
  return o;
}
function ot(o) {
  return o();
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function b(o, e, n) {
  o.insertBefore(e, n || null);
}
function createEmptyObject() {
  return Object.create(null);
}
function executeAll(o) {
  o.forEach(ot);
}
function it(o) {
  return typeof o == 'function';
}
function equalityCheck(o, e) {
  return o != o
    ? e == e
    : o !== e || (o && typeof o == 'object') || typeof o == 'function';
}
function vt(o) {
  return Object.keys(o).length === 0;
}
function lt(o, e, n, t) {
  if (o) {
    const i = st(o, e, n, t);
    return o[0](i);
  }
}
function st(o, e, n, t) {
  return o[1] && t ? bt(n.ctx.slice(), o[1](t(e))) : n.ctx;
}
function rt(o, e, n, t) {
  if (o[2] && t) {
    const i = o[2](t(n));
    if (e.dirty === void 0) {
      return i;
    }
    if (typeof i == 'object') {
      const l = [],
        s = Math.max(e.dirty.length, i.length);
      for (let p = 0; p < s; p += 1) {
        l[p] = e.dirty[p] | i[p];
      }
      return l;
    }
    return e.dirty | i;
  }
  return e.dirty;
}
function ct(o, e, n, t, i, l) {
  if (i) {
    const s = st(e, n, t, l);
    o.p(s, i);
  }
}
function ft(o) {
  if (o.ctx.length > 32) {
    const e = [],
      n = o.ctx.length / 32;
    for (let t = 0; t < n; t++) {
      e[t] = -1;
    }
    return e;
  }
  return -1;
}
function P(o, e) {
  o.appendChild(e);
}
function insert(element, newNode, referenceNode) {
  element.insertBefore(newNode, referenceNode || null);
}
function removeNode(o) {
  o.parentNode && o.parentNode.removeChild(o);
}
function destroyComponents(o, e) {
  for (let n = 0; n < o.length; n += 1) {
    o[n] && o[n].d(e);
  }
}
function x(o) {
  return document.createElement(o);
}
function U(o) {
  return document.createElementNS('http://www.w3.org/2000/svg', o);
}
function re(o) {
  return document.createTextNode(o);
}
function createSpace() {
  return re(' ');
}
function createFinalSpace() {
  return re('');
}
function ae(o, e, n, t) {
  return o.addEventListener(e, n, t), () => o.removeEventListener(e, n, t);
}
function $(o, e, n) {
  n == null
    ? o.removeAttribute(e)
    : o.getAttribute(e) !== n && o.setAttribute(e, n);
}
function ge(o, e) {
  (e = '' + e), o.data !== e && (o.data = e);
}
function Z(o, e, n, t) {
  n == null
    ? o.style.removeProperty(e)
    : o.style.setProperty(e, n, t ? 'important' : '');
}
function updateArrayElementAtIndex(array, element, index) {
  const updatedArray = array.slice();
  updatedArray[6] = element[index];
  return updatedArray;
}
function z(o, e, n) {
  o.classList.toggle(e, !!n);
}
function Ct(o, e, { bubbles: n = !1, cancelable: t = !1 } = {}) {
  return new CustomEvent(o, {
    detail: e,
    bubbles: n,
    cancelable: t,
  });
}
class oe {
  constructor(e = !1) {
    J(this, 'is_svg', !1);
    J(this, 'e');
    J(this, 'n');
    J(this, 't');
    J(this, 'a');
    (this.is_svg = e), (this.e = this.n = null);
  }
  c(e) {
    this.h(e);
  }
  m(e, n, t = null) {
    this.e ||
      (this.is_svg
        ? (this.e = U(n.nodeName))
        : (this.e = x(n.nodeType === 11 ? 'TEMPLATE' : n.nodeName)),
      (this.t = n.tagName !== 'TEMPLATE' ? n : n.content),
      this.c(e)),
      this.i(t);
  }
  h(e) {
    (this.e.innerHTML = e),
      (this.n = Array.from(
        this.e.nodeName === 'TEMPLATE'
          ? this.e.content.childNodes
          : this.e.childNodes,
      ));
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1) {
      insert(this.t, this.n[n], e);
    }
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(removeNode);
  }
}
function me(o, e) {
  return new o(e);
}
let ce;
function se(o) {
  ce = o;
}
function at() {
  if (!ce) {
    throw new Error('Function called outside component initialization');
  }
  return ce;
}
function onDestroy(o) {
  at().$$.on_destroy.push(o);
}
function Lt() {
  const o = at();
  return (e, n, { cancelable: t = !1 } = {}) => {
    const i = o.$$.callbacks[e];
    if (i) {
      const l = Ct(e, n, {
        cancelable: t,
      });
      return (
        i.slice().forEach((s) => {
          s.call(o, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function pt(o, e) {
  const n = o.$$.callbacks[e.type];
  n && n.slice().forEach((t) => t.call(this, e));
}
const te = [],
  we = [];
let ne = [];
const Ce = [],
  xt = Promise.resolve();
let $e = !1;
function At() {
  $e || (($e = !0), xt.then(runAfterUpdate));
}
function ke(o) {
  ne.push(o);
}
const _e = new Set();
let Y = 0;
function runAfterUpdate() {
  if (Y !== 0) {
    return;
  }
  const o = ce;
  do {
    try {
      for (; Y < te.length; ) {
        const e = te[Y];
        Y++, se(e), Mt(e.$$);
      }
    } catch (e) {
      throw ((te.length = 0), (Y = 0), e);
    }
    for (se(null), te.length = 0, Y = 0; we.length; ) {
      we.pop()();
    }
    for (let e = 0; e < ne.length; e += 1) {
      const n = ne[e];
      _e.has(n) || (_e.add(n), n());
    }
    ne.length = 0;
  } while (te.length);
  for (; Ce.length; ) {
    Ce.pop()();
  }
  ($e = !1), _e.clear(), se(o);
}
function Mt(o) {
  if (o.fragment !== null) {
    o.update(), executeAll(o.before_update);
    const e = o.dirty;
    (o.dirty = [-1]),
      o.fragment && o.fragment.p(o.ctx, e),
      o.after_update.forEach(ke);
  }
}
function Nt(o) {
  const e = [],
    n = [];
  ne.forEach((t) => (o.indexOf(t) === -1 ? e.push(t) : n.push(t))),
    n.forEach((t) => t()),
    (ne = e);
}
const ue = new Set();
let X;
function removeElements() {
  X = {
    r: 0,
    c: [],
    p: X,
  };
}
function reinsertElements() {
  X.r || executeAll(X.c), (X = X.p);
}
function fadeIn(o, e) {
  o && o.i && (ue.delete(o), o.i(e));
}
function fadeOut(o, e, n, t) {
  if (o && o.o) {
    if (ue.has(o)) {
      return;
    }
    ue.add(o),
      X.c.push(() => {
        ue.delete(o), t && (n && o.d(1), t());
      }),
      o.o(e);
  } else {
    t && t();
  }
}
function getItems(o) {
  return (o == null ? void 0 : o.length) !== void 0 ? o : Array.from(o);
}
function O(o) {
  o && o.c();
}
function mountComponent(o, e, n) {
  const { fragment: t, after_update: i } = o.$$;
  t && t.m(e, n),
    ke(() => {
      const l = o.$$.on_mount.map(ot).filter(it);
      o.$$.on_destroy ? o.$$.on_destroy.push(...l) : executeAll(l),
        (o.$$.on_mount = []);
    }),
    i.forEach(ke);
}
function N(o, e) {
  const n = o.$$;
  n.fragment !== null &&
    (Nt(n.after_update),
    executeAll(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function scheduleUpdate(o, e) {
  o.$$.dirty[0] === -1 && (te.push(o), At(), o.$$.dirty.fill(0)),
    (o.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
/**
 * Initializes a Svelte component.
 *
 * @param {Object} componentInstance - The component instance being initialized.
 * @param {Object} options - The initialization options.
 * @param {Function} setupFunction - The function to set up the component.
 * @param {Function} createFragmentFunction - The function to create the component's fragment.
 * @param {Function} equalityCheck - Function to check equality of props.
 * @param {Object} propDefinitions - Definitions of the component's props.
 * @param {Function} [onMountCallback] - Callback to execute on mount.
 * @param {Array} [dirtyFlags=[-1]] - Array indicating dirty flags for reactive updates.
 */
function initializeComponent(
  componentInstance,
  options,
  setupFunction,
  createFragmentFunction,
  equalityCheck,
  propDefinitions,
  onMountCallback,
  dirtyFlags = [-1],
) {
  const previousContext = ce;
  se(componentInstance);

  const componentState = (componentInstance.$$ = {
    fragment: null,
    ctx: [],
    props: propDefinitions,
    update: E,
    not_equal: equalityCheck,
    bound: createEmptyObject(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(
      options.context || (previousContext ? previousContext.$$.context : []),
    ),
    callbacks: createEmptyObject(),
    dirty: dirtyFlags,
    skip_bound: false,
    root: options.target || previousContext.$$.root,
  });

  if (onMountCallback) onMountCallback(componentState.root);

  let hasUpdated = false;

  componentState.ctx = setupFunction
    ? setupFunction(
        componentInstance,
        options.props || {},
        (key, newValue, ...extraArgs) => {
          const value = extraArgs.length ? extraArgs[0] : newValue;
          if (
            componentState.ctx &&
            equalityCheck(
              componentState.ctx[key],
              (componentState.ctx[key] = value),
            ) &&
            (!componentState.skip_bound &&
              componentState.bound[key] &&
              componentState.bound[key](value),
            hasUpdated && scheduleUpdate(componentInstance, key))
          ) {
            return newValue;
          }
        },
      )
    : [];

  componentState.update();
  hasUpdated = true;
  executeAll(componentState.before_update);

  componentState.fragment = createFragmentFunction
    ? createFragmentFunction(componentState.ctx)
    : false;

  if (options.target) {
    if (options.hydrate) {
      const nodes = getNodes(options.target);
      componentState.fragment && componentState.fragment.l(nodes);
      nodes.forEach(removeNode);
    } else {
      componentState.fragment && componentState.fragment.c();
    }

    if (options.intro) {
      transitionIn(componentInstance.$$.fragment);
    }

    mountComponent(componentInstance, options.target, options.anchor);
    runAfterUpdate();
  }

  se(previousContext);
}

class q {
  constructor() {
    J(this, '$$');
    J(this, '$$set');
  }
  $destroy() {
    N(this, 1), (this.$destroy = E);
  }
  $on(e, n) {
    if (!it(n)) {
      return E;
    }
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      t.push(n),
      () => {
        const i = t.indexOf(n);
        i !== -1 && t.splice(i, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !vt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const Ot = '4';
typeof window < 'u' &&
  (
    window.__svelte ||
    (window.__svelte = {
      v: new Set(),
    })
  ).v.add(Ot);
const ee = [];
function Et(o, e = E) {
  let n;
  const t = new Set();
  function i(p) {
    if (equalityCheck(o, p) && ((o = p), n)) {
      const r = !ee.length;
      for (const f of t) {
        f[1](), ee.push(f, o);
      }
      if (r) {
        for (let f = 0; f < ee.length; f += 2) {
          ee[f][0](ee[f + 1]);
        }
        ee.length = 0;
      }
    }
  }
  function l(p) {
    i(p(o));
  }
  function s(p, r = E) {
    const f = [p, r];
    return (
      t.add(f),
      t.size === 1 && (n = e(i, l) || E),
      p(o),
      () => {
        t.delete(f), t.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return {
    set: i,
    update: l,
    subscribe: s,
  };
}
const completionsStore = Et(0);
function Pt(o) {
  let e,
    n,
    t = o[0] + 1 + '',
    i,
    l;
  const s = o[2].default,
    p = lt(s, o, o[1], null);
  return {
    c() {
      (e = x('div')),
        (n = x('span')),
        (i = re(t)),
        p && p.c(),
        $(n, 'class', 'line-number'),
        $(e, 'class', 'line');
    },
    m(r, f) {
      insert(r, e, f), P(e, n), P(n, i), p && p.m(e, null), (l = !0);
    },
    p(r, [f]) {
      (!l || f & 1) && t !== (t = r[0] + 1 + '') && ge(i, t),
        p &&
          p.p &&
          (!l || f & 2) &&
          ct(p, s, r, r[1], l ? rt(s, r[1], f, null) : ft(r[1]), null);
    },
    i(r) {
      l || (fadeIn(p, r), (l = !0));
    },
    o(r) {
      fadeOut(p, r), (l = !1);
    },
    d(r) {
      r && removeNode(e), p && p.d(r);
    },
  };
}
function It(o, e, n) {
  let { $$slots: t = {}, $$scope: i } = e,
    { index: l = 0 } = e;
  return (
    (o.$$set = (s) => {
      'index' in s && n(0, (l = s.index)),
        '$$scope' in s && n(1, (i = s.$$scope));
    }),
    [l, i, t]
  );
}
class ie extends q {
  constructor(e) {
    super(),
      initializeComponent(this, e, It, Pt, equalityCheck, {
        index: 0,
      });
  }
}
function Ht(o, id = '') {
  let e,
    n,
    t = `calc(${o[1]}em * 1.35 + var(--fern-cursor-offset-y))`,
    i = `calc(${o[2] + 3}ch + var(--fern-cursor-offset-x) - ${o[4]}px)`,
    l,
    s,
    p;
  const r = o[6].default,
    f = lt(r, o, o[5], null);
  return {
    c() {
      (e = x('div')),
        (n = x('div')),
        f && f.c(),
        $(n, 'class', 'fern-snippet-window'),
        z(n, 'is-pop', o[0]),
        $(e, 'class', 'fern-snippet-window-wrapper svelte-cqc4oo'),
        $(e, 'id', id),
        z(e, 'is-noninteractable', o[3]),
        Z(e, 'top', t),
        Z(e, 'left', i);
    },
    m(a, c) {
      insert(a, e, c),
        P(e, n),
        f && f.m(n, null),
        (l = !0),
        s || ((p = ae(e, 'mousemove', o[7])), (s = !0));
    },
    p(a, [c]) {
      f &&
        f.p &&
        (!l || c & 32) &&
        ct(f, r, a, a[5], l ? rt(r, a[5], c, null) : ft(a[5]), null),
        (!l || c & 1) && z(n, 'is-pop', a[0]),
        (!l || c & 8) && z(e, 'is-noninteractable', a[3]),
        c & 2 &&
          t !== (t = `calc(${a[1]}em * 1.35 + var(--fern-cursor-offset-y))`) &&
          Z(e, 'top', t),
        c & 20 &&
          i !==
            (i = `calc(${a[2] + 3}ch + var(--fern-cursor-offset-x) - ${a[4]}px)`) &&
          Z(e, 'left', i);
    },
    i(a) {
      l || (fadeIn(f, a), (l = !0));
    },
    o(a) {
      fadeOut(f, a), (l = !1);
    },
    d(a) {
      a && removeNode(e), f && f.d(a), (s = !1), p();
    },
  };
}
function St(o, e, n) {
  let { $$slots: t = {}, $$scope: i } = e,
    { pop: l = !1 } = e,
    { line: s } = e,
    { pos: p } = e,
    { noninteractable: r = !1 } = e,
    f = 0;
  completionsStore.subscribe((c) => {
    n(4, (f = c));
  });
  function a(c) {
    pt.call(this, o, c);
  }
  return (
    (o.$$set = (c) => {
      'pop' in c && n(0, (l = c.pop)),
        'line' in c && n(1, (s = c.line)),
        'pos' in c && n(2, (p = c.pos)),
        'noninteractable' in c && n(3, (r = c.noninteractable)),
        '$$scope' in c && n(5, (i = c.$$scope));
    }),
    [l, s, p, r, f, i, t, a]
  );
}
class G extends q {
  constructor(e) {
    super(),
      initializeComponent(this, e, St, (o) => Ht(o, e.id), equalityCheck, {
        pop: 0,
        line: 1,
        pos: 2,
        noninteractable: 3,
      });
  }
}
function Q(o) {
  return (o == null ? void 0 : o.replaceAll(/(<\/?[^>]+>)/g, '')) ?? '';
}
function insertCharacter(o, e = 0, n = 100) {
  return {
    type: 'add-line',
    line: o,
    spaces: e,
    time: n,
  };
}
function insertText(o, e, n = 65) {
  const t = [];
  let i = 0,
    l = '';
  for (const s of e.split(/(<\/?[^>]+>)/g)) {
    if (((l += s), s === '</kw>' || s === '</sp>')) {
      t.push({
        type: 'rewrite',
        line: o,
        time: 0,
        delete: i,
        text: l,
      });
      continue;
    }
    if (s === '<kw>' || s === '<sp>') {
      (l = s), (i = 0);
      continue;
    }
    if (s[0] === '<') {
      t.push({
        type: 'write',
        line: o,
        time: n,
        text: s,
      });
      continue;
    }
    for (const p of s.split('')) {
      (i += 1),
        t.push({
          type: 'write',
          line: o,
          time: n,
          text: p,
        });
    }
  }
  return t;
}
function autoComplete(
  o,
  {
    completion: e,
    completions: n,
    time: t = 800,
    text: i = '',
    interval: l = 120,
    written: s = 0,
  },
) {
  return [
    {
      type: 'start-completion',
      line: o,
      time: 0,
      completions: n,
      completion: e,
      index: 0,
      n: 0,
    },
    ...insertText(o, i.slice(s ?? 0), l),
    {
      type: 'end-completion',
      line: o,
      time: t,
      text: e.slice((i == null ? void 0 : i.length) ?? 0),
    },
  ];
}
function executeCodeWriter(o, e, n, t) {
  const i = o[e];
  return i
    ? (i.type === 'add-line' &&
        (t.splice(i.line, 0, ''),
        (t[i.line] = ' '.repeat(i.spaces)),
        (n.cursor = {
          line: i.line,
          pos: Q(t[i.line]).length,
        })),
      i.type === 'write' &&
        ((t[i.line] += i.text),
        (n.cursor = {
          line: i.line,
          pos: Q(t[i.line]).length,
        }),
        n.completionWindow &&
          ((n.completionWindow.pos = Q(t[i.line]).length),
          (n.completionWindow.written += 1))),
      i.type === 'rewrite' &&
        ((t[i.line] = t[i.line].slice(0, -i.delete) + i.text),
        (n.cursor = {
          line: i.line,
          pos: Q(t[i.line]).length,
        }),
        n.completionWindow && (n.completionWindow.pos = Q(t[i.line]).length)),
      i.type === 'start-completion' &&
        (n.completionWindow = {
          completion: i.completion,
          completions: i.completions,
          line: i.line,
          pos: Q(t[i.line]).length - (i.n ?? 0),
          written: i.n ?? 0,
          index: 0,
        }),
      i.type === 'change-completion' && (n.completionWindow.index = i.index),
      i.type === 'end-completion' &&
        ((n.completionWindow = void 0),
        (t[i.line] += i.text),
        (n.cursor = {
          line: i.line,
          pos: Q(t[i.line]).length,
        })),
      i.type === 'callback' && i.callback(),
      {
        animation: n,
        lines: t,
      })
    : {
        animation: n,
        lines: t,
      };
}
function Vt(o) {
  let e, n;
  return {
    c() {
      (e = U('svg')),
        (n = U('path')),
        $(
          n,
          'd',
          'M14.45 4.5L9.44995 2H8.55005L1.55005 5.5L1 6.39001V10.89L1.55005 11.79L6.55005 14.29H7.44995L14.45 10.79L15 9.89001V5.39001L14.45 4.5ZM6.44995 13.14L1.94995 10.89V7.17004L6.44995 9.17004V13.14ZM6.94995 8.33997L2.29004 6.22998L8.94995 2.89001L13.62 5.22998L6.94995 8.33997ZM13.95 9.89001L7.44995 13.14V9.20996L13.95 6.20996V9.89001Z',
        ),
        $(n, 'fill', '#75BEFF'),
        $(e, 'width', '16'),
        $(e, 'height', '16'),
        $(e, 'viewBox', '0 0 16 16'),
        $(e, 'fill', 'none'),
        $(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(t, i) {
      insert(t, e, i), P(e, n);
    },
    p: E,
    i: E,
    o: E,
    d(t) {
      t && removeNode(e);
    },
  };
}

class Le extends q {
  constructor(e) {
    super(), initializeComponent(this, e, null, Vt, equalityCheck, {});
  }
}
function Bt(o) {
  let e, n;
  return {
    c() {
      (e = U('svg')),
        (n = U('path')),
        $(
          n,
          'd',
          'M13.51 4L8.51001 1H7.51001L2.51001 4L2.02002 4.85999V10.86L2.51001 11.71L7.51001 14.71H8.51001L13.51 11.71L14 10.86V4.85999L13.51 4ZM7.51001 13.5601L3.01001 10.86V5.69995L7.51001 8.15002V13.5601ZM3.27002 4.69995L8.01001 1.85999L12.75 4.69995L8.01001 7.29004L3.27002 4.69995ZM13.01 10.86L8.51001 13.5601V8.15002L13.01 5.69995V10.86Z',
        ),
        $(n, 'fill', '#B180D7'),
        $(e, 'width', '16'),
        $(e, 'height', '16'),
        $(e, 'viewBox', '0 0 16 16'),
        $(e, 'fill', 'none'),
        $(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(t, i) {
      insert(t, e, i), P(e, n);
    },
    p: E,
    i: E,
    o: E,
    d(t) {
      t && removeNode(e);
    },
  };
}
class xe extends q {
  constructor(e) {
    super(), initializeComponent(this, e, null, Bt, equalityCheck, {});
  }
}
function Rt(o) {
  let e, n, t;
  return {
    c() {
      (e = U('svg')),
        (n = U('path')),
        (t = U('path')),
        $(n, 'fill-rule', 'evenodd'),
        $(n, 'clip-rule', 'evenodd'),
        $(n, 'd', 'M4 6H12V7H4V6ZM12 9H4V10H12V9Z'),
        $(n, 'fill', '#C5C5C5'),
        $(t, 'fill-rule', 'evenodd'),
        $(t, 'clip-rule', 'evenodd'),
        $(t, 'd', 'M1 4L2 3H14L15 4V12L14 13H2L1 12V4ZM2 4V12H14V4H2Z'),
        $(t, 'fill', '#C5C5C5'),
        $(e, 'width', '16'),
        $(e, 'height', '16'),
        $(e, 'viewBox', '0 0 16 16'),
        $(e, 'fill', 'none'),
        $(e, 'xmlns', 'http://www.w3.org/2000/svg');
    },
    m(i, l) {
      insert(i, e, l), P(e, n), P(e, t);
    },
    p: E,
    i: E,
    o: E,
    d(i) {
      i && removeNode(e);
    },
  };
}
class Ae extends q {
  constructor(e) {
    super(), initializeComponent(this, e, null, Rt, equalityCheck, {});
  }
}
function Me(o, e, n) {
  const t = o.slice();
  return (t[8] = e[n]), (t[10] = n), t;
}
function Ne(o) {
  let e,
    n,
    t,
    i,
    l,
    s = o[8].text.slice(0, o[0].written) + '',
    p,
    r = o[8].text.slice(o[0].written) + '',
    f,
    a,
    c,
    u,
    _;
  var g = o[8].type === 'constant' ? Ae : o[8].type === 'method' ? xe : Le;
  function m(y, d) {
    return {};
  }
  g && (t = me(g, m()));
  function L(...y) {
    return o[6](o[8], o[10], ...y);
  }
  return {
    c() {
      (e = x('div')),
        (n = x('div')),
        t && O(t.$$.fragment),
        (i = createSpace()),
        (l = x('sp')),
        (p = re(s)),
        (f = re(r)),
        (a = createSpace()),
        $(n, 'class', 'fern-completion-icon'),
        $(e, 'class', 'fern-completion-item svelte-10kv6jm'),
        z(e, 'is-active', o[10] === o[0].index);
    },
    m(y, d) {
      insert(y, e, d),
        P(e, n),
        t && mountComponent(t, n, null),
        P(e, i),
        P(e, l),
        P(l, p),
        P(e, f),
        P(e, a),
        (c = !0),
        u || ((_ = ae(e, 'click', L)), (u = !0));
    },
    p(y, d) {
      if (
        ((o = y),
        d & 16 &&
          g !==
            (g =
              o[8].type === 'constant' ? Ae : o[8].type === 'method' ? xe : Le))
      ) {
        if (t) {
          removeElements();
          const v = t;
          fadeOut(v.$$.fragment, 1, 0, () => {
            N(v, 1);
          }),
            reinsertElements();
        }
        g
          ? ((t = me(g, m())),
            O(t.$$.fragment),
            fadeIn(t.$$.fragment, 1),
            mountComponent(t, n, null))
          : (t = null);
      }
      (!c || d & 17) &&
        s !== (s = o[8].text.slice(0, o[0].written) + '') &&
        ge(p, s),
        (!c || d & 17) &&
          r !== (r = o[8].text.slice(o[0].written) + '') &&
          ge(f, r),
        (!c || d & 1) && z(e, 'is-active', o[10] === o[0].index);
    },
    i(y) {
      c || (t && fadeIn(t.$$.fragment, y), (c = !0));
    },
    o(y) {
      t && fadeOut(t.$$.fragment, y), (c = !1);
    },
    d(y) {
      y && removeNode(e), t && N(t), (u = !1), _();
    },
  };
}
function Te(o) {
  let e,
    n = o[4].at(o[0].index).description + '';
  return {
    c() {
      (e = x('div')), $(e, 'class', 'fern-completion-description');
    },
    m(t, i) {
      insert(t, e, i), (e.innerHTML = n);
    },
    p(t, i) {
      i & 17 &&
        n !== (n = t[4].at(t[0].index).description + '') &&
        (e.innerHTML = n);
    },
    d(t) {
      t && removeNode(e);
    },
  };
}
function qt(o) {
  var a;
  let e,
    n,
    t = (a = o[4].at(o[0].index)) == null ? void 0 : a.description,
    i,
    l,
    s = getItems(o[4]),
    p = [];
  for (let c = 0; c < s.length; c += 1) {
    p[c] = Ne(Me(o, s, c));
  }
  const r = (c) =>
    fadeOut(p[c], 1, 1, () => {
      p[c] = null;
    });
  let f = t && Te(o);
  return {
    c() {
      e = x('div');
      for (let c = 0; c < p.length; c += 1) {
        p[c].c();
      }
      (n = createSpace()),
        f && f.c(),
        (i = createFinalSpace()),
        $(e, 'class', 'fern-completion-items svelte-10kv6jm'),
        z(e, 'is-selectable', o[1]);
    },
    m(c, u) {
      insert(c, e, u);
      for (let _ = 0; _ < p.length; _ += 1) {
        p[_] && p[_].m(e, null);
      }
      insert(c, n, u), f && f.m(c, u), insert(c, i, u), (l = !0);
    },
    p(c, u) {
      var _;
      if (u & 51) {
        s = getItems(c[4]);
        let g;
        for (g = 0; g < s.length; g += 1) {
          const m = Me(c, s, g);
          p[g]
            ? (p[g].p(m, u), fadeIn(p[g], 1))
            : ((p[g] = Ne(m)), p[g].c(), fadeIn(p[g], 1), p[g].m(e, null));
        }
        for (removeElements(), g = s.length; g < p.length; g += 1) {
          r(g);
        }
        reinsertElements();
      }
      (!l || u & 2) && z(e, 'is-selectable', c[1]),
        u & 17 &&
          (t = (_ = c[4].at(c[0].index)) == null ? void 0 : _.description),
        t
          ? f
            ? f.p(c, u)
            : ((f = Te(c)), f.c(), f.m(i.parentNode, i))
          : f && (f.d(1), (f = null));
    },
    i(c) {
      if (!l) {
        for (let u = 0; u < s.length; u += 1) {
          fadeIn(p[u]);
        }
        l = !0;
      }
    },
    o(c) {
      p = p.filter(Boolean);
      for (let u = 0; u < p.length; u += 1) {
        fadeOut(p[u]);
      }
      l = !1;
    },
    d(c) {
      c && (removeNode(e), removeNode(n), removeNode(i)),
        destroyComponents(p, c),
        f && f.d(c);
    },
  };
}
function jt(o) {
  let e, n;
  return (
    (e = new G({
      props: {
        line: o[0].line + 1,
        pos: o[0].pos,
        noninteractable: o[2],
        pop: o[3],
        $$slots: {
          default: [qt],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    e.$on('mousemove', o[7]),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, [i]) {
        const l = {};
        i & 1 && (l.line = t[0].line + 1),
          i & 1 && (l.pos = t[0].pos),
          i & 4 && (l.noninteractable = t[2]),
          i & 8 && (l.pop = t[3]),
          i & 2067 &&
            (l.$$scope = {
              dirty: i,
              ctx: t,
            }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function Zt(o, e, n) {
  const t = Lt();
  let { selectable: i = !1 } = e,
    { noninteractable: l = !1 } = e,
    { pop: s = !1 } = e,
    { completions: p } = e,
    { completionWindow: r } = e;
  const f = (c, u, _) => {
    i &&
      (n(0, (r.completion = c.text), r),
      t('completion', c.text),
      n(0, (r.index = u), r));
  };
  function a(c) {
    pt.call(this, o, c);
  }
  return (
    (o.$$set = (c) => {
      'selectable' in c && n(1, (i = c.selectable)),
        'noninteractable' in c && n(2, (l = c.noninteractable)),
        'pop' in c && n(3, (s = c.pop)),
        'completions' in c && n(4, (p = c.completions)),
        'completionWindow' in c && n(0, (r = c.completionWindow));
    }),
    [r, i, l, s, p, t, f, a]
  );
}
class mt extends q {
  constructor(e) {
    super(),
      initializeComponent(this, e, Zt, jt, equalityCheck, {
        selectable: 1,
        noninteractable: 2,
        pop: 3,
        completions: 4,
        completionWindow: 0,
      });
  }
}
function getItemContext(o, e, n) {
  const t = o.slice();
  return (t[25] = e[n]), (t[27] = n), t;
}
function Ee(o, e, n) {
  const t = o.slice();
  return (t[25] = e[n]), (t[27] = n), t;
}
function createComponent(o) {
  let spaceBeforeModelComponent,
    spaceBeforeContentComponent,
    spaceBeforeChatComponent,
    spaceBeforeCohereComponent,
    spaceBeforeRoleComponent,
    spaceBeforeCompletionComponent,
    finalSpace,
    containerFragment,
    items = getItems(o[4]),
    itemInstances = [];

  for (let i = 0; i < items.length; i += 1) {
    itemInstances[i] = createItemComponent(getItemContext(o, items, i));
  }

  const removeItem = (index) => {
    fadeOut(itemInstances[index], 1, 1, () => {
      itemInstances[index] = null;
    });
  };

  // HERE
  let modelComponent = o[2] === 'model' && createModelComponent(o),
    contentComponent = o[2] === 'content' && createContentComponent(o),
    chatComponent = o[2] === 'chat' && createChatComponent(o),
    cohereComponent = o[2] === 'cohere' && createCohereComponent(o),
    roleComponent = o[2] === 'chat-history' && createRoleComponent(o),
    completionComponent = o[2] === 'role' && createCompletionComponent(o);

  return {
    c() {
      for (let i = 0; i < itemInstances.length; i += 1) {
        itemInstances[i].c();
      }
      (spaceBeforeModelComponent = createSpace()),
        modelComponent && modelComponent.c(),
        (spaceBeforeContentComponent = createSpace()),
        contentComponent && contentComponent.c(),
        (spaceBeforeChatComponent = createSpace()),
        chatComponent && chatComponent.c(),
        (spaceBeforeCohereComponent = createSpace()),
        cohereComponent && cohereComponent.c(),
        (spaceBeforeRoleComponent = createSpace()),
        roleComponent && roleComponent.c(),
        (spaceBeforeCompletionComponent = createSpace()),
        completionComponent && completionComponent.c(),
        (finalSpace = createFinalSpace());
    },
    m(target, anchor) {
      for (let i = 0; i < itemInstances.length; i += 1) {
        itemInstances[i] && itemInstances[i].m(target, anchor);
      }
      insert(target, spaceBeforeModelComponent, anchor),
        modelComponent && modelComponent.m(target, anchor),
        insert(target, spaceBeforeContentComponent, anchor),
        contentComponent && contentComponent.m(target, anchor),
        insert(target, spaceBeforeChatComponent, anchor),
        chatComponent && chatComponent.m(target, anchor),
        insert(target, spaceBeforeCohereComponent, anchor),
        cohereComponent && cohereComponent.m(target, anchor),
        insert(target, spaceBeforeRoleComponent, anchor),
        roleComponent && roleComponent.m(target, anchor),
        insert(target, spaceBeforeCompletionComponent, anchor),
        completionComponent && completionComponent.m(target, anchor),
        insert(target, finalSpace, anchor),
        (containerFragment = true);
    },
    p(newProps, changed) {
      if (changed & 16) {
        items = getItems(newProps[4]);
        let i;
        for (i = 0; i < items.length; i += 1) {
          const itemContext = getItemContext(newProps, items, i);
          itemInstances[i]
            ? (itemInstances[i].p(itemContext, changed),
              fadeIn(itemInstances[i], 1))
            : ((itemInstances[i] = createItemComponent(itemContext)),
              itemInstances[i].c(),
              fadeIn(itemInstances[i], 1),
              itemInstances[i].m(
                spaceBeforeModelComponent.parentNode,
                spaceBeforeModelComponent,
              ));
        }
        for (
          removeElements(), i = items.length;
          i < itemInstances.length;
          i += 1
        ) {
          removeItem(i);
        }
        reinsertElements();
      }
      newProps[2] === 'model'
        ? modelComponent
          ? (modelComponent.p(newProps, changed),
            changed & 4 && fadeIn(modelComponent, 1))
          : ((modelComponent = createModelComponent(newProps)),
            modelComponent.c(),
            fadeIn(modelComponent, 1),
            modelComponent.m(
              spaceBeforeContentComponent.parentNode,
              spaceBeforeContentComponent,
            ))
        : modelComponent &&
          (removeElements(),
          fadeOut(modelComponent, 1, 1, () => {
            modelComponent = null;
          }),
          reinsertElements()),
        newProps[2] === 'content'
          ? contentComponent
            ? changed & 4 && fadeIn(contentComponent, 1)
            : ((contentComponent = createContentComponent(newProps)),
              contentComponent.c(),
              fadeIn(contentComponent, 1),
              contentComponent.m(
                spaceBeforeChatComponent.parentNode,
                spaceBeforeChatComponent,
              ))
          : contentComponent &&
            (removeElements(),
            fadeOut(contentComponent, 1, 1, () => {
              contentComponent = null;
            }),
            reinsertElements()),
        newProps[2] === 'chat'
          ? chatComponent
            ? (chatComponent.p(newProps, changed),
              changed & 4 && fadeIn(chatComponent, 1))
            : ((chatComponent = createChatComponent(newProps)),
              chatComponent.c(),
              fadeIn(chatComponent, 1),
              chatComponent.m(
                spaceBeforeCohereComponent.parentNode,
                spaceBeforeCohereComponent,
              ))
          : chatComponent &&
            (removeElements(),
            fadeOut(chatComponent, 1, 1, () => {
              chatComponent = null;
            }),
            reinsertElements()),
        newProps[2] === 'cohere'
          ? cohereComponent
            ? (cohereComponent.p(newProps, changed),
              changed & 4 && fadeIn(cohereComponent, 1))
            : ((cohereComponent = createCohereComponent(newProps)),
              cohereComponent.c(),
              fadeIn(cohereComponent, 1),
              cohereComponent.m(
                spaceBeforeRoleComponent.parentNode,
                spaceBeforeRoleComponent,
              ))
          : cohereComponent &&
            (removeElements(),
            fadeOut(cohereComponent, 1, 1, () => {
              cohereComponent = null;
            }),
            reinsertElements()),
        newProps[2] === 'chat-history'
          ? roleComponent
            ? (roleComponent.p(newProps, changed),
              changed & 4 && fadeIn(roleComponent, 1))
            : ((roleComponent = createRoleComponent(newProps)),
              roleComponent.c(),
              fadeIn(roleComponent, 1),
              roleComponent.m(
                spaceBeforeCompletionComponent.parentNode,
                spaceBeforeCompletionComponent,
              ))
          : roleComponent &&
            (removeElements(),
            fadeOut(roleComponent, 1, 1, () => {
              roleComponent = null;
            }),
            reinsertElements()),
        newProps[2] === 'role'
          ? completionComponent
            ? (completionComponent.p(newProps, changed),
              changed & 4 && fadeIn(completionComponent, 1))
            : ((completionComponent = createCompletionComponent(newProps)),
              completionComponent.c(),
              fadeIn(completionComponent, 1),
              completionComponent.m(finalSpace.parentNode, finalSpace))
          : completionComponent &&
            (removeElements(),
            fadeOut(completionComponent, 1, 1, () => {
              completionComponent = null;
            }),
            reinsertElements());
    },
    i(enter) {
      if (!containerFragment) {
        for (let i = 0; i < items.length; i += 1) {
          fadeIn(itemInstances[i]);
        }
        fadeIn(modelComponent),
          fadeIn(contentComponent),
          fadeIn(chatComponent),
          fadeIn(cohereComponent),
          fadeIn(roleComponent),
          fadeIn(completionComponent),
          (containerFragment = true);
      }
    },
    o(exit) {
      itemInstances = itemInstances.filter(Boolean);
      for (let i = 0; i < itemInstances.length; i += 1) {
        fadeOut(itemInstances[i]);
      }
      fadeOut(modelComponent),
        fadeOut(contentComponent),
        fadeOut(chatComponent),
        fadeOut(cohereComponent),
        fadeOut(roleComponent),
        fadeOut(completionComponent),
        (containerFragment = false);
    },
    d(detach) {
      if (detach) {
        removeNode(spaceBeforeModelComponent),
          removeNode(spaceBeforeContentComponent),
          removeNode(spaceBeforeChatComponent),
          removeNode(spaceBeforeCohereComponent),
          removeNode(spaceBeforeRoleComponent),
          removeNode(spaceBeforeCompletionComponent),
          removeNode(finalSpace);
      }
      destroyComponents(itemInstances, detach),
        modelComponent && modelComponent.d(detach),
        contentComponent && contentComponent.d(detach),
        chatComponent && chatComponent.d(detach),
        cohereComponent && cohereComponent.d(detach),
        roleComponent && roleComponent.d(detach),
        completionComponent && completionComponent.d(detach);
    },
  };
}
function Dt(o) {
  let e,
    n,
    t,
    i,
    l = getItems(o[5]),
    s = [];
  for (let a = 0; a < l.length; a += 1) {
    s[a] = createIndexedComponent(Ee(o, l, a));
  }
  const p = (a) =>
    fadeOut(s[a], 1, 1, () => {
      s[a] = null;
    });
  let r = o[3].completionWindow && createAutocompleteComponent(o),
    f = o[3].cursor && createCursorElement(o);
  return {
    c() {
      for (let a = 0; a < s.length; a += 1) {
        s[a].c();
      }
      (e = createSpace()),
        r && r.c(),
        (n = createSpace()),
        f && f.c(),
        (t = createFinalSpace());
    },
    m(a, c) {
      for (let u = 0; u < s.length; u += 1) {
        s[u] && s[u].m(a, c);
      }
      insert(a, e, c),
        r && r.m(a, c),
        insert(a, n, c),
        f && f.m(a, c),
        insert(a, t, c),
        (i = !0);
    },
    p(a, c) {
      if (c & 32) {
        l = getItems(a[5]);
        let u;
        for (u = 0; u < l.length; u += 1) {
          const _ = Ee(a, l, u);
          s[u]
            ? (s[u].p(_, c), fadeIn(s[u], 1))
            : ((s[u] = createIndexedComponent(_)),
              s[u].c(),
              fadeIn(s[u], 1),
              s[u].m(e.parentNode, e));
        }
        for (removeElements(), u = l.length; u < s.length; u += 1) {
          p(u);
        }
        reinsertElements();
      }
      a[3].completionWindow
        ? r
          ? (r.p(a, c), c & 8 && fadeIn(r, 1))
          : ((r = createAutocompleteComponent(a)),
            r.c(),
            fadeIn(r, 1),
            r.m(n.parentNode, n))
        : r &&
          (removeElements(),
          fadeOut(r, 1, 1, () => {
            r = null;
          }),
          reinsertElements()),
        a[3].cursor
          ? f
            ? f.p(a, c)
            : ((f = createCursorElement(a)), f.c(), f.m(t.parentNode, t))
          : f && (f.d(1), (f = null));
    },
    i(a) {
      if (!i) {
        for (let c = 0; c < l.length; c += 1) {
          fadeIn(s[c]);
        }
        fadeIn(r), (i = !0);
      }
    },
    o(a) {
      s = s.filter(Boolean);
      for (let c = 0; c < s.length; c += 1) {
        fadeOut(s[c]);
      }
      fadeOut(r), (i = !1);
    },
    d(a) {
      a && (removeNode(e), removeNode(n), removeNode(t)),
        destroyComponents(s, a),
        r && r.d(a),
        f && f.d(a);
    },
  };
}
function Ft(o) {
  let e,
    n = o[25] + '',
    t;
  return {
    c() {
      (e = new oe(!1)), (t = createFinalSpace()), (e.a = t);
    },
    m(i, l) {
      e.m(n, i, l), insert(i, t, l);
    },
    p(i, l) {
      l & 16 && n !== (n = i[25] + '') && e.p(n);
    },
    d(i) {
      i && (removeNode(t), e.d());
    },
  };
}
function createItemComponent(o) {
  let e, n;
  return (
    (e = new ie({
      props: {
        index: o[27],
        $$slots: {
          default: [Ft],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 536870928 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createModelComponent(o) {
  let e, n;
  return (
    (e = new mt({
      props: {
        completions: o[13],
        completionWindow: o[7],
        selectable: !0,
        pop: !0,
      },
    })),
    e.$on('mousemove', o[16]),
    e.$on('completion', o[17]),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 128 && (l.completionWindow = t[7]), e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createContentComponent(o) {
  let e, n;
  return (
    (e = new G({
      props: {
        line: 14,
        pos: 45,
        pop: !0,
        noninteractable: !0,
        $$slots: {
          default: [contentCompletition],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function contentCompletition(o) {
  let e,
    n =
      '<comment>(property) ChatCompletionMessage.content: string | null</comment><hr/>The contents of the message.';
  return {
    c() {
      (e = x('div')), $(e, 'class', 'fern-completion-item');
    },
    m(t, i) {
      insert(t, e, i), (e.innerHTML = n);
    },
    p: E,
    d(t) {
      t && removeNode(e);
    },
  };
}

function createChatComponent(o) {
  let e, n;
  return (
    (e = new G({
      props: {
        line: 9,
        pos: 8,
        pop: !0,
        noninteractable: !0,
        $$slots: {
          default: [createCompletionMessage],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 536870912 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createCompletionMessage(o) {
  let e;
  return {
    c() {
      (e = x('div')), $(e, 'class', 'fern-completion-item');
    },
    m(n, t) {
      insert(n, e, t), (e.innerHTML = o[11]);
    },
    p: E,
    d(n) {
      n && removeNode(e);
    },
  };
}
function createCohereComponent(o) {
  let e, n;
  return (
    (e = new G({
      props: {
        line: 5,
        pos: 21,
        pop: !0,
        noninteractable: !0,
        $$slots: {
          default: [createCompletionItem],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 536870912 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createCompletionItem(o) {
  let e;
  return {
    c() {
      (e = x('div')), $(e, 'class', 'fern-completion-item');
    },
    m(n, t) {
      insert(n, e, t), (e.innerHTML = o[9]);
    },
    p: E,
    d(n) {
      n && removeNode(e);
    },
  };
}

function createRoleComponent(o) {
  let e, n;
  return (
    (e = new G({
      props: {
        line: 11,
        pos: 9,
        pop: !0,
        noninteractable: !0,
        $$slots: {
          default: [createCompletionItem2],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 536870912 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createCompletionItem2(o) {
  let e;
  return {
    c() {
      (e = x('div')), $(e, 'class', 'fern-completion-item');
    },
    m(n, t) {
      insert(n, e, t), (e.innerHTML = o[10]);
    },
    p: E,
    d(n) {
      n && removeNode(e);
    },
  };
}
function createCompletionComponent(o) {
  let e, n;
  return (
    (e = new G({
      props: {
        line: 12,
        pos: 8,
        pop: !0,
        noninteractable: !0,
        $$slots: {
          default: [createCompletionItem3],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 536871040 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createCompletionItem3(o) {
  let e,
    n = o[12](o[7].completion) + '';
  return {
    c() {
      (e = x('div')), $(e, 'class', 'fern-completion-item');
    },
    m(t, i) {
      insert(t, e, i), (e.innerHTML = n);
    },
    p(t, i) {
      i & 128 && n !== (n = t[12](t[7].completion) + '') && (e.innerHTML = n);
    },
    d(t) {
      t && removeNode(e);
    },
  };
}
function createDynamicTextComponent(o) {
  let e,
    n = o[25] + '',
    t;
  return {
    c() {
      (e = new oe(!1)), (t = createFinalSpace()), (e.a = t);
    },
    m(i, l) {
      e.m(n, i, l), insert(i, t, l);
    },
    p(i, l) {
      l & 32 && n !== (n = i[25] + '') && e.p(n);
    },
    d(i) {
      i && (removeNode(t), e.d());
    },
  };
}
function createIndexedComponent(o) {
  let e, n;
  return (
    (e = new ie({
      props: {
        index: o[27],
        $$slots: {
          default: [createDynamicTextComponent],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 536870944 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createAutocompleteComponent(o) {
  let e, n;
  return (
    (e = new mt({
      props: {
        completions: o[8],
        completionWindow: o[3].completionWindow,
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 256 && (l.completions = t[8]),
          i & 8 && (l.completionWindow = t[3].completionWindow),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createCursorElement(o) {
  let e,
    n = `calc(${o[3].cursor.line}em * 1.35 + var(--fern-cursor-offset-y))`,
    t = `calc(${o[3].cursor.pos + 3}ch + var(--fern-cursor-offset-x) - ${o[6]}px)`;
  return {
    c() {
      (e = x('span')),
        $(e, 'class', 'fern-cursor'),
        Z(e, 'top', n),
        Z(e, 'left', t);
    },
    m(i, l) {
      insert(i, e, l);
    },
    p(i, l) {
      l & 8 &&
        n !==
          (n = `calc(${i[3].cursor.line}em * 1.35 + var(--fern-cursor-offset-y))`) &&
        Z(e, 'top', n),
        l & 72 &&
          t !==
            (t = `calc(${i[3].cursor.pos + 3}ch + var(--fern-cursor-offset-x) - ${i[6]}px)`) &&
          Z(e, 'left', t);
    },
    d(i) {
      i && removeNode(e);
    },
  };
}
function createDynamicComponent(o) {
  let e, n, t, i, l, s;
  const p = [Dt, createComponent],
    r = [];
  function f(a, c) {
    return a[0] ? 0 : 1;
  }
  return (
    (n = f(o)),
    (t = r[n] = p[n](o)),
    {
      c() {
        (e = x('div')), t.c();
      },
      m(a, c) {
        insert(a, e, c),
          r[n].m(e, null),
          o[18](e),
          (i = !0),
          l || ((s = ae(e, 'mousemove', o[15])), (l = !0));
      },
      p(a, [c]) {
        let u = n;
        (n = f(a)),
          n === u
            ? r[n].p(a, c)
            : (removeElements(),
              fadeOut(r[u], 1, 1, () => {
                r[u] = null;
              }),
              reinsertElements(),
              (t = r[n]),
              t ? t.p(a, c) : ((t = r[n] = p[n](a)), t.c()),
              fadeIn(t, 1),
              t.m(e, null));
      },
      i(a) {
        i || (fadeIn(t), (i = !0));
      },
      o(a) {
        fadeOut(t), (i = !1);
      },
      d(a) {
        a && removeNode(e), r[n].d(), o[18](null), (l = !1), s();
      },
    }
  );
}
/**
 * Configura sugerencias interactivas para el editor de código.
 *
 * @param {object} component - El componente al que se agregarán las sugerencias.
 * @param {object} options - Las opciones de configuración.
 * @param {function} updateFunction - La función que actualiza el componente.
 */
function setupInteractiveHints(component, options, updateFunction) {
  let filteredCompletions,
    { animated: isAnimated = true } = options;

    const cohereClientDeclaration = `(alias) <kw>new</kw> <id>SquareClient</id>(_options?: SquareClient.Options | undefined): SquareClient)
    import SquareClient`,
      chatHistoryDescription = `(property) <id>CreatePaymentRequest.sourceId</id>: string
    <hr/><comment>The unique identifier for the payment source. Can be a card nonce, card on file, or other payment source ID.</comment>`,
      chatMethodDescription = `(method) <id>SquareClient.payments</id>(request: CreatePaymentRequest, requestOptions?: RequestOptions | undefined): Promise<CreatePaymentResponse>
          <hr/><comment>Creates a payment using a payment source. To learn more about payments, follow our Payments API guide.</comment>`,
      generateResponseObject = (amount) => `{
      <sp>payment</sp>: {
        <sp>id</sp>: <str>'abcdef123456'</str>,
        <sp>status</sp>: <str>'COMPLETED'</str>,
        <sp>amountMoney</sp>: {
          <sp>amount</sp>: ${amount},
          <sp>currency</sp>: <str>'USD'</str>
        },
        <sp>sourceType</sp>: <str>'CARD'</str>,
        <sp>cardDetails</sp>: {
          <sp>status</sp>: <str>'CAPTURED'</str>,
          <sp>card</sp>: {
            <sp>brand</sp>: <str>'VISA'</str>,
            <sp>last4</sp>: <str>'1234'</str>
          }
        },
        ...
    `,
    modelOptions = [
      { text: 'payments', description: 'Square Payments API' },
      { text: 'customers', description: 'Square Customers API' },
      { text: 'locations', description: 'Square Locations API' },
      // etc
    ];

    let codeSnippet =
    `<kw>import</kw> { SquareClient } <kw>from</kw> <str>'../src'</str>;

<kw>void</kw> <fn>main</fn>();

<kw>async</kw> <kw>function</kw> <fn>main</fn>(): <str>Promise&lt;void&gt;</str> {
  <kw>const</kw> square = <kw>new</kw> <span class="hover" id="fern-node-cohere"><id>SquareClient</id></span>({
    token: process.env.SQUARE_TOKEN
  });

  <kw>const</kw> payment = <kw>await</kw> <span class="hover" id="fern-node-chat">square</span>.<fn>payments</fn>.<fn>create</fn>({
    <span class="hover" id="fern-node-chat-history">sourceId</span>: <str>"abcddsdfsf"</str>,
    <span class="hover" id="fern-node-model">idempotencyKey</span>: <str>"asdfsdfsdf"</str>,
    amountMoney: {
      amount: <str>100</str>,
      currency: <str>"USD"</str>
    }
  });

  console.<fn>log</fn>(<str>\`Payment sent for \${</str>payment.payment?.amountMoney<str>} dollars\`</str>);
}

<fn>main</fn>();`
      .trim()
      .split('\n');
      const codeWriterSteps = [
        insertCharacter(9, 2, 100),
        insertText(9, '<kw>const</kw> payment = <kw>await</kw> <kw>square</kw>.'),
        // First autocomplete for 'payments'
        autoComplete(9, {
          interval: 500,
          completion: 'payments',
          completions: [
            { text: 'customers', type: 'method', description: 'Manage customer profiles' },
            { text: 'orders', type: 'method', description: 'Create and manage orders' },
            { text: 'catalog', type: 'method', description: 'Manage items and inventory' },
            { text: 'locations', description: 'Manage business locations' },
            { text: 'payments', description: 'Process payments and refunds' },
            { text: 'refunds', type: 'method', description: 'Process refunds' },
          ],
          text: 'pa',
        }),
        insertText(9, '.', 30),
        // Second autocomplete for 'create'
        {
          line: 9,
          type: 'start-completion',
          time: 100,
          completions: [
            { text: 'cancel', type: 'method', description: 'Cancel a payment' },
            { text: 'complete', type: 'method', description: 'Complete a payment' },
            { text: 'create', description: 'Create a new payment' },
            { text: 'get', type: 'method', description: 'Get payment by ID' },
            { text: 'list', type: 'method', description: 'List all payments' },
            { text: 'update', type: 'method', description: 'Update a payment' },
          ],
          completion: 'create',
        },
        {
          type: 'change-completion',
          time: 600,
          index: 1,
        },
        {
          type: 'change-completion',
          time: 100,
          index: 2,
        },
        {
          line: 9,
          type: 'end-completion',
          time: 500,
          text: 'create',
        },
        insertText(9, '({', 30),
        insertCharacter(10, 4),
        autoComplete(10, {
          interval: 500,
          completion: 'sourceId',
          completions: [
            { text: 'acceptPartialAuthorization', description: 'Accept partial payment authorization' },
            { text: 'amountMoney', description: 'Payment amount and currency' },
            { text: 'appFeeMoney', description: 'Fee to be collected for the payment' },
            { text: 'autocomplete', description: 'Automatically complete the payment' },
            { text: 'billingAddress', description: 'Billing address for the payment' },
            { text: 'buyerEmailAddress', description: 'Email address of the buyer' },
            { text: 'cashDetails', description: 'Details for cash payment' },
            { text: 'customerId', description: 'ID of the customer making payment' },
            { text: 'delayAction', description: 'When to process the payment' },
            { text: 'delayDuration', description: 'Duration to delay payment processing' },
            { text: 'externalDetails', description: 'External payment details' },
            { text: 'idempotencyKey', description: 'Unique key to prevent duplicate payments' },
            { text: 'sourceId', description: 'Unique identifier for the payment source' },
            { text: 'source', description: 'Payment source details' },
            { text: 'sourceType', description: 'Type of payment source (card, bank, etc)' },
            { text: 'sourceToken', description: 'Token representing the payment source' },
            { text: 'sortCode', description: 'Bank sort code for payment routing' },
            { text: 'softwareId', description: 'Identifier for the payment software' },
            { text: 'sourceMetadata', description: 'Additional metadata about payment source' },
            { text: 'sourceDescription', description: 'Human readable source description' },
            { text: 'sourceExpiration', description: 'When the payment source expires' },
            { text: 'sourceCategory', description: 'Category of the payment source' },
            { text: 'sourceVerification', description: 'Verification status of payment source' },
            { text: 'socialSecurityNumber', description: 'SSN for identity verification' }
          ],
          text: 'so'
        }),
        insertText(10, ': <str>"', 30),
        {
          type: 'wait',
          time: 600,
        },
        insertText(10, 'abcddsdfsf', 0),
        {
          type: 'wait',
          time: 600,
        },
        insertText(10, '"</str>,', 30),
        insertCharacter(11, 4),
        autoComplete(11, {
          interval: 500,
          completion: 'idempotencyKey',
          completions: [
            { text: 'acceptPartialAuthorization', description: 'Accept partial payment authorization' },
            { text: 'amountMoney', description: 'Payment amount and currency' },
            { text: 'appFeeMoney', description: 'Fee to be collected for the payment' },
            { text: 'autocomplete', description: 'Automatically complete the payment' },
            { text: 'billingAddress', description: 'Billing address for the payment' },
            { text: 'buyerEmailAddress', description: 'Email address of the buyer' },
            { text: 'cashDetails', description: 'Details for cash payment' },
            { text: 'customerId', description: 'ID of the customer making payment' },
            { text: 'delayAction', description: 'When to process the payment' },
            { text: 'delayDuration', description: 'Duration to delay payment processing' },
            { text: 'externalDetails', description: 'External payment details' },
            { text: 'idempotencyKey', description: 'Unique key to prevent duplicate payments' },
            { text: 'id', description: 'Unique identifier for the payment' },
            { text: 'identityVerification', description: 'Details about customer identity verification' },
            { text: 'idType', description: 'Type of identification provided' },
            { text: 'identifierKey', description: 'Key used to identify the transaction' },
            { text: 'idempotencyDuration', description: 'How long to retain idempotency key' },
            { text: 'identificationNumber', description: 'Government-issued identification number' },
            { text: 'idProvider', description: 'Provider of the identification service' },
            { text: 'identityDocument', description: 'Scanned identity document details' },
            { text: 'idValidation', description: 'Results of ID validation checks' },
            { text: 'idReference', description: 'External reference ID for the payment' },
            { text: 'identityToken', description: 'Token representing verified identity' }
          ],
          text: 'id'
        }),
        insertText(11, ': <str>"', 30),
        {
          type: 'wait',
          time: 600,
        },
        insertText(11, 'asdfsdfsdf', 0),
        {
          type: 'wait',
          time: 600,
        },
        insertText(11, '"</str>,', 30),
        insertCharacter(12, 4),
        autoComplete(12, {
          interval: 500,
          completion: 'amountMoney',
          completions: [
            { text: 'acceptPartialAuthorization', description: 'Accept partial payment authorization' },
            { text: 'amountMoney', description: 'Payment amount and currency' },
            { text: 'appFeeMoney', description: 'Fee to be collected for the payment' },
            { text: 'autocomplete', description: 'Automatically complete the payment' },
            { text: 'billingAddress', description: 'Billing address for the payment' },
            { text: 'buyerEmailAddress', description: 'Email address of the buyer' },
            { text: 'cashDetails', description: 'Details for cash payment' },
            { text: 'customerId', description: 'ID of the customer making payment' },
            { text: 'delayAction', description: 'When to process the payment' },
            { text: 'delayDuration', description: 'Duration to delay payment processing' },
          ],
          text: 'am'
        }),
        insertText(12, ': {', 30),
        insertCharacter(13, 6),
        // For amount inside amountMoney object
        autoComplete(13, {
          interval: 400,
          completion: 'amount',
          completions: [
            { text: 'amount', description: 'The payment amount in smallest currency unit' },
            { text: 'approved', description: 'Whether the payment was approved' },
            { text: 'applicationDetails', description: 'Details about the application' },
            { text: 'attachments', description: 'Files attached to the payment' },
            { text: 'automaticPaymentSource', description: 'Source for automatic payments' }
          ],
          text: 'am',
        }),
        insertText(13, ': <str>', 30),
        insertText(13, '1', 300),
        insertText(13, '0', 300),
        insertText(13, '0</str>,', 300),
        insertCharacter(14, 6),
        // For currency inside amountMoney object
        autoComplete(14, {
          interval: 350,
          completion: 'currency',
          completions: [
            { text: 'currency', description: 'The currency code (e.g. USD, EUR, GBP)' },
            { text: 'customerId', description: 'ID of the customer making payment' },
            { text: 'cashDetails', description: 'Details for cash payment' },
            { text: 'cardDetails', description: 'Details for card payment' },
            { text: 'contactDetails', description: 'Contact information for the payment' },
            { text: 'createdAt', description: 'When the payment was created' }
          ],
          text: 'cu',
        }),
        insertText(14, ': <str>"', 30),
        // For currency inside amountMoney object
        autoComplete(14, {
          interval: 500,
          completion: 'USD',
          completions: [
            { text: 'EUR', description: 'Euro' },
            { text: 'GBP', description: 'British Pound Sterling' },
            { text: 'CAD', description: 'Canadian Dollar' },
            { text: 'AUD', description: 'Australian Dollar' },
            { text: 'JPY', description: 'Japanese Yen' },
            { text: 'USD', description: 'United States Dollar' },
            { text: 'CNY', description: 'Chinese Yuan' },
            { text: 'INR', description: 'Indian Rupee' },
            { text: 'CHF', description: 'Swiss Franc' },
            { text: 'SGD', description: 'Singapore Dollar' },
            { text: 'MXN', description: 'Mexican Peso' },
            { text: 'BRL', description: 'Brazilian Real' }
          ],
          text: 'U',
        }),
        insertText(14, '"</str>', 30),
        insertCharacter(15, 4),
        insertText(15, '}', 30),
        insertCharacter(16, 2),
        insertText(16, '});', 30),
        insertCharacter(18, 2),
        // Simulate typing console.log with pauses
        insertText(18, 'console', 30),
        {
          type: 'wait',
          time: 100,
        },
        insertText(18, '.', 100),
        insertText(18, '<fn>log</fn>', 30),
        insertText(18, '(<str>`Paymet', 30), // Intentional typo
        {
          type: 'wait',
          time: 200,
        },
        {
          type: 'rewrite',
          time: 200,
          line: 18,
          delete: 1,  // Delete 't'
          text: '',
        },
        {
          type: 'rewrite',
          time: 200,
          line: 18,
          delete: 1,  // Delete 'e'
          text: '',
        },
        {
          type: 'rewrite',
          time: 200,
          line: 18,
          delete: 1,  // Delete 'm'
          text: '',
        },
        insertText(18, 'ment sent for ${</str>', 60), // Complete the corrected text
        {
          type: 'wait',
          time: 200,
        },
        insertText(18, 'payment.payment?.amountMoney', 65),
        insertText(18, '<str>} dollars`</str>);', 30),
        {
          type: 'wait',
          time: 800,
        },
        {
          type: 'callback',
          time: 100,
          callback: () => {
            updateFunction(0, (isAnimated = !1));
            updateFunction(2, (currentSection = undefined)); // Clear the hover state
            canUpdateSection = true;
            // Remove or comment out the auto-timer if you don't want automatic hover cycling
            // setSectionChangeTimer(500);
          },
        },
      ].flat();

  let initialCodeSnippet = 
  `<kw>import</kw> { SquareClient } <kw>from</kw> <str>"../src"</str>;
  
<kw>void</kw> <fn>main</fn>();
  
<kw>async</kw> <kw>function</kw> <fn>main</fn>(): <str>Promise&lt;void&gt;</str> {
  <kw>const</kw> square = <kw>new</kw> <id>SquareClient</id>({
    token: process.env.SQUARE_TOKEN
  });


}
  
<fn>main</fn>();`.split('\n'),
    codeWriterTimeout,
    currentSection = isAnimated ? void 0 : 'cohere',
    intervalId;

  /**
   * Configura un temporizador para cambiar de sección automáticamente.
   *
   * @param {number} [delay=3000] - Tiempo de espera antes de cambiar de sección.
   */
  function setSectionChangeTimer(delay = 3000) {
    clearTimeout(intervalId);
    intervalId = setTimeout(changeSection, delay);
  }

  /**
   * Cambia la sección actual de forma cíclica.
   */

  let nextSection = "init"
  let canUpdateSection = false;

  function changeSection() {
    if (!canUpdateSection) return;
  
    if (nextSection === 'init') nextSection = 'cohere';        // Shows SquareClient hover
    else if (nextSection === 'cohere') nextSection = 'chat';   // Shows square instance hover
    else if (nextSection === 'chat') nextSection = 'chat-history'; // Shows sourceId hover
    else if (nextSection === 'chat-history') nextSection = 'model'; // Shows idempotencyKey hover
    else if (nextSection === 'model') nextSection = undefined;
  
    currentSection = nextSection;   
    updateFunction(2, currentSection);
    setSectionChangeTimer();
  }

  /**
   * Maneja el evento de clic para actualizar la sección actual basada en el elemento clicado.
   *
   * @param {Event} event - El evento de clic.
   */
  function handleSectionClick(event) {
    const targetElement =
      event.target.parentElement.tagName === 'SPAN'
        ? event.target.parentElement
        : event.target;

    if (targetElement.id === 'fern-node-cohere') currentSection = 'cohere';
    else if (targetElement.id === 'fern-node-chat') currentSection = 'chat';
    else if (targetElement.id === 'fern-node-chat-history') {
      currentSection = 'chat-history';
    } else if (targetElement.id === 'fern-node-model') currentSection = 'model';
    else if (targetElement.id === 'fern-node-role') currentSection = 'role';
    else if (targetElement.id === 'fern-node-content') {
      currentSection = 'content';
    } else {
      //intervalId || setSectionChangeTimer(1000);
      return;
    }

    clearTimeout(intervalId);
    intervalId = void 0;
    updateFunction(2, currentSection);
  }

  //setSectionChangeTimer(1500);
  onDestroy(() => clearTimeout(intervalId));

  let codeWriterState = {
    timeout: void 0,
  };


  /**
   * Ejecuta el siguiente paso del escritor de código.
   *
   * @param {number} stepIndex - El índice del paso a ejecutar.
   */
  function executeCodeWriterStep(stepIndex) {
    updateFunction(
      3,
      ({ animation: codeWriterState, lines: initialCodeSnippet } =
        executeCodeWriter(
          codeWriterSteps,
          stepIndex,
          codeWriterState,
          initialCodeSnippet,
        )),
      codeWriterState,
      updateFunction(5, initialCodeSnippet),
    );

    const nextStep = codeWriterSteps[stepIndex + 1];
    if (nextStep) {
      codeWriterState.timeout = setTimeout(
        () => executeCodeWriterStep(stepIndex + 1),
        nextStep.time,
      );
      updateFunction(3, codeWriterState);
    }
  }

  /**
   * Inicia el escritor de código.
   */
  function startCodeWriter() {
    codeWriterState = { timeout: void 0 };
    updateFunction(3, codeWriterState);
    executeCodeWriterStep(0);
  }

  isAnimated && startCodeWriter();
  onDestroy(() => clearTimeout(codeWriterState.timeout));

  let activeCompletionIndex = 0;
  completionsStore.subscribe((newIndex) => {
    activeCompletionIndex = newIndex;
    updateFunction(6, activeCompletionIndex);
  });

  let completionState = {
    line: 11,
    pos: 13,
    completion: 'SYSTEM',
    completions: modelOptions,
    written: 0,
    index: 1,
  };

  const setAutoCompleteTimer = () => setSectionChangeTimer(1500),
    handleModelChange = (event) => {
      completionState.completion = event.detail;
      updateFunction(7, completionState);
      updateFunction(
        4,
        (codeSnippet[11] = `      role: <span class="hover" id="fern-node-model"><str>'${event.detail}'</str></span>,`),
        codeSnippet,
      );
    };

  function manageVisibility(shouldShow) {
    we[shouldShow ? 'unshift' : 'push'](() => {
      codeWriterTimeout = shouldShow;
      updateFunction(1, codeWriterTimeout);
    });
  }

  return (
    (component.$$set = (newOptions) => {
      'animated' in newOptions && (isAnimated = newOptions.animated);
      updateFunction(0, isAnimated);
    }),
    (component.$$.update = () => {
      var completionWindow;
      if (component.$$.dirty & 6 && codeWriterTimeout) {
        const hoverElements = codeWriterTimeout.getElementsByClassName('hover');
        for (const hoverElement of hoverElements) {
          hoverElement.classList.remove('is-active');
        }
        if (currentSection) {
          const activeElement = document.getElementById(
            'fern-node-' + currentSection,
          );
          activeElement && activeElement.classList.add('is-active');
        }
      }
      component.$$.dirty & 8 &&
        updateFunction(
          8,
          (filteredCompletions =
            (completionWindow = codeWriterState.completionWindow) == null
              ? void 0
              : completionWindow.completions.filter(({ text }) =>
                  text.startsWith(
                    codeWriterState.completionWindow.completion.slice(
                      0,
                      codeWriterState.completionWindow.written,
                    ),
                  ),
                )),
        );
    }),
    [
      isAnimated,
      codeWriterTimeout,
      currentSection,
      codeWriterState,
      codeSnippet,
      initialCodeSnippet,
      activeCompletionIndex,
      completionState,
      filteredCompletions,
      cohereClientDeclaration,
      chatHistoryDescription,
      chatMethodDescription,
      generateResponseObject,
      modelOptions,
      setSectionChangeTimer,
      handleSectionClick,
      setAutoCompleteTimer,
      handleModelChange,
      manageVisibility,
    ]
  );
}

class HeroNodeCodeblockSetup extends q {
  constructor(options) {
    super();
    initializeComponent(
      this,
      options,
      setupInteractiveHints,
      createDynamicComponent,
      equalityCheck,
      {
        animated: 0,
      },
    );
  }
}

function updateArrayWithElementAtIndex(o, e, n) {
  const t = o.slice();
  return (t[6] = e[n]), (t[8] = n), t;
}
function createDynamicComponent2(o) {
  let e,
    n = o[6] + '',
    t;
  return {
    c() {
      (e = new oe(!1)), (t = createFinalSpace()), (e.a = t);
    },
    m(i, l) {
      e.m(n, i, l), insert(i, t, l);
    },
    p(i, l) {
      l & 2 && n !== (n = i[6] + '') && e.p(n);
    },
    d(i) {
      i && (removeNode(t), e.d());
    },
  };
}
function createDynamicComponentFromIndex(o) {
  let e, n;
  return (
    (e = new ie({
      props: {
        index: o[8],
        $$slots: {
          default: [createDynamicComponent2],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        O(e.$$.fragment);
      },
      m(t, i) {
        mountComponent(e, t, i), (n = !0);
      },
      p(t, i) {
        const l = {};
        i & 514 &&
          (l.$$scope = {
            dirty: i,
            ctx: t,
          }),
          e.$set(l);
      },
      i(t) {
        n || (fadeIn(e.$$.fragment, t), (n = !0));
      },
      o(t) {
        fadeOut(e.$$.fragment, t), (n = !1);
      },
      d(t) {
        N(e, t);
      },
    }
  );
}
function createStreamedOutputComponent(o) {
  let e, n, t;
  return {
    c() {
      (e = x('div')),
        (e.textContent = 'Output:'),
        (n = createSpace()),
        (t = x('div')),
        $(e, 'class', 'fern-completion-heading'),
        $(e, 'class', 'empty'),
        $(t, 'class', 'fern-completion-item');
    },
    m(i, l) {
      insert(i, e, l), insert(i, n, l), insert(i, t, l), (t.innerHTML = o[0]);
    },
    p(i, l) {
      l & 1 && (t.innerHTML = i[0]);
    },
    d(i) {
      i && (removeNode(e), removeNode(n), removeNode(t));
    },
  };
}

function createStreamedOutputComponentEmpty(o) {
  let e, n, t;
  return {
    c() {
      (e = x('div')),
        (n = createSpace()),
        (t = x('div')),
        $(t, 'class', 'empty');
    },
    m(i, l) {
      insert(i, e, l), insert(i, n, l), insert(i, t, l), (t.innerHTML = o[0]);
    },
    p(i, l) {
      l & 1 && (t.innerHTML = i[0]);
    },
    d(i) {
      i && (removeNode(e), removeNode(n), removeNode(t));
    },
  };
}
function createPythonComponents(o) {
  let e,
    n,
    t,
    i,
    l = getItems(o[1]),
    s = [];
  for (let r = 0; r < l.length; r += 1) {
    s[r] = createDynamicComponentFromIndex(
      updateArrayWithElementAtIndex(o, l, r),
    );
  }
  const p = (r) =>
    fadeOut(s[r], 1, 1, () => {
      s[r] = null;
    });
  return (
    (t = new G({
      props: {
        line: 8,
        pos: 20,
        $$slots: {
          default: [createStreamedOutputComponent],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        e = x('div');
        for (let r = 0; r < s.length; r += 1) {
          s[r].c();
        }
        (n = createSpace()), O(t.$$.fragment);
      },
      m(r, f) {
        insert(r, e, f);
        for (let a = 0; a < s.length; a += 1) {
          s[a] && s[a].m(e, null);
        }
        P(e, n), mountComponent(t, e, null), (i = !0);
      },
      p(r, [f]) {
        if (f & 2) {
          l = getItems(r[1]);
          let c;
          for (c = 0; c < l.length; c += 1) {
            const u = updateArrayWithElementAtIndex(r, l, c);
            s[c]
              ? (s[c].p(u, f), fadeIn(s[c], 1))
              : ((s[c] = createDynamicComponentFromIndex(u)),
                s[c].c(),
                fadeIn(s[c], 1),
                s[c].m(e, n));
          }
          for (removeElements(), c = l.length; c < s.length; c += 1) {
            p(c);
          }
          reinsertElements();
        }
        const a = {};
        f & 513 &&
          (a.$$scope = {
            dirty: f,
            ctx: r,
          }),
          t.$set(a);
      },
      i(r) {
        if (!i) {
          for (let f = 0; f < l.length; f += 1) {
            fadeIn(s[f]);
          }
          fadeIn(t.$$.fragment, r), (i = !0);
        }
      },
      o(r) {
        s = s.filter(Boolean);
        for (let f = 0; f < s.length; f += 1) {
          fadeOut(s[f]);
        }
        fadeOut(t.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && removeNode(e), destroyComponents(s, r), N(t);
      },
    }
  );
}
// const blueBirdNames = `To generate an SDK, define the functionalities and design the API with clear methods and outputs. Write comprehensive documentation, develop and test the code, ensuring reliability. Package the SDK with the documentation and provide it to users, offering support and updates as needed.`;

function generateBlueBirdMessages(o, e, n) {
  let t;

  const i = `<kw>import</kw> os 
<kw>from</kw> cohere <kw>import</kw> Client

co = <kw>Client</kw>(
  api_key=<kw>os</kw>.<fn>getenv</fn>(<str>"COHERE_API_KEY"</str>),
)

chat = <kw>co</kw>.<fn>chat</fn>(
  message=<str>"How do I generate an SDK?"</str>,
  chat_history=[{
    <str>"role"</str>: <str>"SYSTEM"</str>,
    <str>"message"</str>: <str>"You are a developer advocate at an API company"</str>,
  }],
)
  `,
    l = [];
  // for (let f = 0; f < blueBirdNames.length; f += 3) {
  //   l.push(blueBirdNames.slice(f, f + 3));
  // }
  let s = '',
    p;
  function r() {
    n(0, (s = ''));
    let f = 0;
    function a() {
      if (f < l.length) {
        n(0, (s += l[f]));
        const c = Math.random() * 200;
        p = setTimeout(a, c);
      }
      f === l.length && (p = setTimeout(r, 5e3)), f++;
    }
    a();
  }
  return (
    onDestroy(() => clearTimeout(p)),
    r(),
    n(
      1,
      (t = i.split(`
`)),
    ),
    [s, t]
  );
}
class HeroPythonCodeblockSetup extends q {
  constructor(e) {
    super(),
      initializeComponent(
        this,
        e,
        generateBlueBirdMessages,
        createPythonComponents,
        equalityCheck,
        {},
      );
  }
}

function goPopupComponent(o, e, n) {
  let t;

  const i = `<kw>import</kw> (
  co      <str>"github.com/cohere-ai/cohere-go/v2"</str>
  coclient <str>"github.com/cohere-ai/cohere-go/v2/client"</str>
)

client := <kw>coclient</kw>.<fn>NewClient</fn>(
  <kw>option</kw>.<fn>WithToken</fn>(<kw>os</kw>.<fn>Getenv</fn>(<str>"COHERE_API_KEY"</str>)),
)

response, err := <kw>client</kw>.<fn>Chat</fn>(
  <kw>context</kw>.<fn>TODO</fn>(),
  <kw>&co</kw>.<fn>ChatRequest</fn>{
    Message: <str>"How do I offer a Stripe-level developer experience?"</str>,
    ChatHistory: []*<kw>co</kw>.<fn>Message</fn>{
      {
        System: &<kw>co</kw>.<fn>ChatMessage</fn>{
          Message: "You are a developer advocate at an API company",
        },
      },
    },
  },
)`,
    l = [];
  let s = '',
    p;
  function r() {
    n(0, (s = ''));
    let f = 0;
    function a() {
      if (f < l.length) {
        n(0, (s += l[f]));
        const c = Math.random() * 200;
        p = setTimeout(a, c);
      }
      f === l.length && (p = setTimeout(r, 5e3)), f++;
    }
    a();
  }
  return (
    onDestroy(() => clearTimeout(p)),
    r(),
    n(
      1,
      (t = i.split(`
`)),
    ),
    [s, t]
  );
}
class HeroGoCodeblockSetup extends q {
  constructor(e) {
    super(),
      initializeComponent(
        this,
        e,
        goPopupComponent,
        createStaticLanguageComponents,
        equalityCheck,
        {},
      );
  }
}

function createStaticLanguageComponents(o) {
  let e,
    n,
    t,
    i,
    l = getItems(o[1]),
    s = [];
  for (let r = 0; r < l.length; r += 1) {
    s[r] = createDynamicComponentFromIndex(
      updateArrayWithElementAtIndex(o, l, r),
    );
  }
  const p = (r) =>
    fadeOut(s[r], 1, 1, () => {
      s[r] = null;
    });
  return (
    (t = new G({
      props: {
        line: 8,
        pos: 20,
        $$slots: {
          default: [createStreamedOutputComponentEmpty],
        },
        $$scope: {
          ctx: o,
        },
      },
    })),
    {
      c() {
        e = x('div');
        for (let r = 0; r < s.length; r += 1) {
          s[r].c();
        }
        (n = createSpace()), O(t.$$.fragment);
      },
      m(r, f) {
        insert(r, e, f);
        for (let a = 0; a < s.length; a += 1) {
          s[a] && s[a].m(e, null);
        }
        P(e, n), mountComponent(t, e, null), (i = !0);
      },
      p(r, [f]) {
        if (f & 2) {
          l = getItems(r[1]);
          let c;
          for (c = 0; c < l.length; c += 1) {
            const u = updateArrayWithElementAtIndex(r, l, c);
            s[c]
              ? (s[c].p(u, f), fadeIn(s[c], 1))
              : ((s[c] = createDynamicComponentFromIndex(u)),
                s[c].c(),
                fadeIn(s[c], 1),
                s[c].m(e, n));
          }
          for (removeElements(), c = l.length; c < s.length; c += 1) {
            p(c);
          }
          reinsertElements();
        }
        const a = {};
        f & 513 &&
          (a.$$scope = {
            dirty: f,
            ctx: r,
          }),
          t.$set(a);
      },
      i(r) {
        if (!i) {
          for (let f = 0; f < l.length; f += 1) {
            fadeIn(s[f]);
          }
          fadeIn(t.$$.fragment, r), (i = !0);
        }
      },
      o(r) {
        s = s.filter(Boolean);
        for (let f = 0; f < s.length; f += 1) {
          fadeOut(s[f]);
        }
        fadeOut(t.$$.fragment, r), (i = !1);
      },
      d(r) {
        r && removeNode(e), destroyComponents(s, r), N(t);
      },
    }
  );
}

function javaContent(o, e, n) {
  let t;

  const i = `<kw>import</kw> com.cohere.api.Cohere;
<kw>import</kw> com.cohere.api.requests.ChatRequest;
<kw>import</kw> com.cohere.api.types.ChatMessage;
<kw>import</kw> com.cohere.api.types.Message;

<kw>public static void</kw> <fn>main</fn>(<kw>String[]</kw> <id>args</id>) {
    <kw>Cohere</kw> co = <kw>Cohere</kw>.<fn>builder</fn>()
      .<fn>token</fn>(<kw>System</kw>.<fn>getenv</fn>(<str>"COHERE_API_KEY"<str/>))
      .<fn>build</fn>();
    
    <kw>co</kw>.<fn>chat</fn>(<kw>ChatRequest</kw>.<fn>builder</fn>()
      .<fn>message</fn>(<str>"How do I offer a Stripe-level developer experience?"</str>)
      .<fn>chatHistory</fn>(List.of(<kw>Message</kw>.system(
        <kw>ChatMessage</kw>.<fn>builder</fn>()
          <fn>.message</fn>(<str>"You are a developer advocate at an API company"</str>)
          <fn>.build</fn>()
      )))
      .build());
}
  `,
    l = [];
  let s = '',
    p;
  function r() {
    n(0, (s = ''));
    let f = 0;
    function a() {
      if (f < l.length) {
        n(0, (s += l[f]));
        const c = Math.random() * 200;
        p = setTimeout(a, c);
      }
      f === l.length && (p = setTimeout(r, 5e3)), f++;
    }
    a();
  }
  return (
    onDestroy(() => clearTimeout(p)),
    r(),
    n(
      1,
      (t = i.split(`
`)),
    ),
    [s, t]
  );
}
class HeroJavaCodeblockSetup extends q {
  constructor(e) {
    super(),
      initializeComponent(
        this,
        e,
        javaContent,
        createStaticLanguageComponents,
        equalityCheck,
        {},
      );
  }
}

function rubyContent(o, e, n) {
  let t;

  const i = `<kw>require</kw> <str>"cohere"</str>

co = <kw>Cohere</kw>::<id>Client</id>.<fn>new</fn>(api_key: <kw>ENV</kw>[<str>"COHERE_API_KEY"</str>])
  
response = <kw>co</kw>.<fn>chat</fn>(
  message: <str>"How do I offer a Stripe-level developer experience?"</str>,
  chat_history: [{
    type: <str>"SYSTEM"</str>,
    message: <str>"You are a developer advocate at an API company"</str>
  }]
)
  `,
    l = [];
  let s = '',
    p;
  function r() {
    n(0, (s = ''));
    let f = 0;
    function a() {
      if (f < l.length) {
        n(0, (s += l[f]));
        const c = Math.random() * 200;
        p = setTimeout(a, c);
      }
      f === l.length && (p = setTimeout(r, 5e3)), f++;
    }
    a();
  }
  return (
    onDestroy(() => clearTimeout(p)),
    r(),
    n(
      1,
      (t = i.split(`
`)),
    ),
    [s, t]
  );
}
class HeroRubyCodeblockSetup extends q {
  constructor(e) {
    super(),
      initializeComponent(
        this,
        e,
        rubyContent,
        createStaticLanguageComponents,
        equalityCheck,
        {},
      );
  }
}

function cSharpContent(o, e, n) {
  let t;

  const i = `<kw>using</kw> Cohere.Net;

<kw>var</kw> co = <kw>new</kw> <id>Cohere</id>(
  <kw>Environment</kw>.<fn>GetEnvironmentVariable</fn>(<str>"COHERE_API_KEY"</str>)
)

<kw>var</kw> response = <kw>co</kw>.<fn>ChatAsync</fn>(
  <kw>new</kw> <id>ChatRequest</id> {
    Message = <str>"How do I offer a Stripe-level developer experience?"</str>,
    ChatHistory = <kw>new</kw> <id>List</id><Message> {
      <kw>new</kw> <id>SystemMessage</id> {
        Message = <str>"You are a developer advocate at an API company"</str>
      }
    }
  }
)
  `,
    l = [];
  let s = '',
    p;
  function r() {
    n(0, (s = ''));
    let f = 0;
    function a() {
      if (f < l.length) {
        n(0, (s += l[f]));
        const c = Math.random() * 200;
        p = setTimeout(a, c);
      }
      f === l.length && (p = setTimeout(r, 5e3)), f++;
    }
    a();
  }
  return (
    onDestroy(() => clearTimeout(p)),
    r(),
    n(
      1,
      (t = i.split(`
`)),
    ),
    [s, t]
  );
}
class HeroCSharpCodeblockSetup extends q {
  constructor(e) {
    super(),
      initializeComponent(
        this,
        e,
        cSharpContent,
        createStaticLanguageComponents,
        equalityCheck,
        {},
      );
  }
}

function PHPContent(o, e, n) {
  let t;

  const i = `<kw>use</kw> CohereClient;

$cohere = <kw>new</kw> <id>CohereClient</id>([<str>'api_key'</str> => <fn>getenv</fn>(<str>"COHERE_API_KEY"</str>)]);
<fn>getenv</fn>(<str>"COHERE_API_KEY"</str>);

$chat = <kw>$cohere</kw>-><fn>chat</fn>([
  <str>'message'</str> => <str>'How do I offer a Stripe-level developer experience?'</str>,
  <str>'chatHistory'</str> => [[
    <str>'role'</str> => <str>'SYSTEM'</str>,
    <str>'message'</str> => <str>'You are a developer advocate at an API company.'</str>
  ]]
]);
  `,
    l = [];
  let s = '',
    p;
  function r() {
    n(0, (s = ''));
    let f = 0;
    function a() {
      if (f < l.length) {
        n(0, (s += l[f]));
        const c = Math.random() * 200;
        p = setTimeout(a, c);
      }
      f === l.length && (p = setTimeout(r, 5e3)), f++;
    }
    a();
  }
  return (
    onDestroy(() => clearTimeout(p)),
    r(),
    n(
      1,
      (t = i.split(`
`)),
    ),
    [s, t]
  );
}

class HeroPHPCodeblockSetup extends q {
  constructor(e) {
    super(),
      initializeComponent(
        this,
        e,
        PHPContent,
        createStaticLanguageComponents,
        equalityCheck,
        {},
      );
  }
}

function et(o, e, n) {
  const t = o.slice();
  return (t[5] = e[n][0]), (t[6] = e[n][1]), t;
}

function createIcon(paths, w = '20', h = '20', viewBox) {
  let e, n;

  e = U('svg');
  n = U('path');

  for (let i = 0; i < paths.length; i++) {
    n = U('path');

    $(n, 'd', paths[i]);
    $(n, 'fill', 'currentcolor');
    P(e, n);
  }

  $(e, 'width', w);
  $(e, 'height', h);
  $(e, 'viewBox', viewBox ? viewBox : `0 0 ${w} ${h}`);
  $(e, 'fill', 'none');
  $(e, 'xmlns', 'http://www.w3.org/2000/svg');

  return e;
}

function createPhpIcon() {
  let e, n, c, paths;

  e = U('svg');
  paths = [
    'M14.4392 10H16.1192L15.6444 12.5242H17.154C17.9819 12.5419 18.5986 12.7269 19.0045 13.0793C19.4184 13.4316 19.5402 14.1014 19.3698 15.0881L18.5541 19.4889H16.8497L17.6288 15.2863C17.7099 14.8457 17.6856 14.533 17.5558 14.348C17.426 14.163 17.146 14.0705 16.7158 14.0705L15.3644 14.0573L14.3661 19.4889H12.6861L14.4392 10Z',
    'M6.74092 12.5243H10.0036C10.9612 12.533 11.6552 12.8327 12.0854 13.4229C12.5156 14.0132 12.6576 14.8193 12.5115 15.8414C12.4548 16.3085 12.3289 16.7665 12.1341 17.2159C11.9474 17.6652 11.6878 18.0704 11.355 18.4317C10.9491 18.8898 10.5149 19.1805 10.0523 19.304C9.58969 19.4274 9.11076 19.489 8.61575 19.489H7.15484L6.69222 22H5L6.74092 12.5243ZM7.43485 17.9956L8.16287 14.0441H8.40879C8.49815 14.0441 8.5914 14.0396 8.6888 14.0309C9.33817 14.0221 9.87774 14.0882 10.308 14.2291C10.7462 14.37 10.8923 14.9031 10.7462 15.8282C10.5678 16.9296 10.2186 17.5727 9.69926 17.7577C9.1799 17.934 8.53053 18.0176 7.75138 18.0088H7.58094C7.53224 18.0088 7.48355 18.0043 7.43485 17.9956Z',
    'M24.4365 12.5243H21.1738L19.4329 22H21.1251L21.5878 19.489H23.0487C23.5437 19.489 24.0226 19.4274 24.4852 19.304C24.9479 19.1805 25.382 18.8898 25.7879 18.4317C26.1207 18.0704 26.3803 17.6652 26.567 17.2159C26.7618 16.7665 26.8877 16.3085 26.9444 15.8414C27.0905 14.8193 26.9486 14.0132 26.5183 13.4229C26.0881 12.8327 25.3942 12.533 24.4365 12.5243ZM22.5958 14.0441L21.8678 17.9956C21.9165 18.0043 21.9652 18.0088 22.0139 18.0088H22.1843C22.9635 18.0176 23.6128 17.934 24.1322 17.7577C24.6515 17.5727 25.0007 16.9296 25.1792 15.8282C25.3253 14.9031 25.1792 14.37 24.7409 14.2291C24.3107 14.0882 23.7711 14.0221 23.1217 14.0309C23.0243 14.0396 22.9311 14.0441 22.8417 14.0441H22.5958Z',
  ];

  c = U('circle');
  $(c, 'cx', '16');
  $(c, 'cy', '16');
  $(c, 'r', '14');
  $(c, 'fill', 'currentcolor');
  P(e, c)

  for (let i = 0; i < paths.length; i++) {
    n = U('path');

    $(n, 'd', paths[i]);
    $(n, 'fill', '#081008');
    if (i === 1 || i === 2) {
      $(n, 'fill-rule', 'evenodd');
    }
    P(e, n);
  }

  $(e, 'width', '24');
  $(e, 'height', '24');
  $(e, 'viewBox', '0 0 32 32');
  $(e, 'fill', 'none');
  $(e, 'xmlns', 'http://www.w3.org/2000/svg');

  return e;
}

function createRubyIcon() {
  let e, n, paths;

  e = U('svg');
  paths = [
    'M14.4579 12.1747 4.15234 18.2942l13.34386-.9055 1.0277-13.45511-4.066 8.24111Z',
    'm17.5188 17.3769-1.1467-7.91596L13.248 13.586l4.2708 3.7909ZM17.5338 17.3783l-8.40248-.6595-4.93405 1.5569 13.33653-.8974Z',
    'm4.21053 18.279 2.09911-6.8767-4.61921.9878 2.5201 5.8889ZM13.2466 13.6082l-1.9314-7.56523-5.52711 5.18113 7.45851 2.3841Z',
    'm18.0869 6.15-5.2248-4.26719-1.4549 4.70362L18.0869 6.15Z',
    'm15.6434.362632-3.073 1.698208L10.6318.339844l5.0116.022788ZM.474609 14.6953l1.287261-2.3477L.720488 9.55078.474609 14.6953Z',
    'M.651367 9.46273 1.6989 12.4344l4.55249-1.0213 5.19751-4.8303 1.4667-4.65894L10.6063.292969 6.67973 1.76254c-1.23719 1.15068-3.63765 3.4273-3.72415 3.47018-.08591.04363-1.58547 2.87783-2.304213 4.23001ZM4.21094 18.2734l2.08247-6.8984 6.91679 2.2219c-2.5007 2.3451-5.2823 4.3276-8.99926 4.6765ZM11.46 6.57058l1.7757 7.03312c2.089-2.1964 3.9639-4.55785 4.882-7.4787l-6.6577.44558Z',
    'M18.0979 6.15957c.7106-2.14469.8745-5.221165-2.4763-5.792382L12.8721 1.88594l5.2258 4.27363ZM.474609 14.6667C.572961 18.2062 3.12665 18.2588 4.21451 18.29L1.7019 12.4219.474609 14.6667ZM11.4678 6.58066c1.6054.98666 4.8405 2.96823 4.906 3.00466.1019.05742 1.3949-2.18022 1.6883-3.4447l-6.5943.44004ZM6.29004 11.375l2.78412 5.3715c1.64614-.8928 2.93544-1.9806 4.11604-3.1459L6.29004 11.375Z',
    'm1.69133 12.427-.39445 4.6973c.74423 1.0166 1.76822 1.1051 2.84259 1.0258-.77722-1.9341-2.32955-5.8016-2.44814-5.7231ZM12.8564 1.89747l5.531.77617C18.0922 1.42281 17.1857.615606 15.6407.363281L12.8564 1.89747Z',
  ];

  for (let i = 0; i < paths.length; i++) {
    n = U('path');

    $(n, 'd', paths[i]);
    $(n, 'stroke', 'currentcolor');
    $(n, 'stroke-width', '.525591');
    $(n, 'stroke-linejoin', 'bevel');
    P(e, n);
  }

  $(e, 'width', '19');
  $(e, 'height', '19');
  $(e, 'viewBox', '0 0 19 19');
  $(e, 'fill', 'none');
  $(e, 'xmlns', 'http://www.w3.org/2000/svg');

  return e;
}

function createTypeScriptIcon() {
  let e, n, path1, path2;

  e = U('svg');
  path1 = U('path');
  $(
    path1,
    'd',
    'M22.1562 0.208008H2.84375C1.54933 0.208008 0.5 1.25734 0.5 2.55176V21.8643C0.5 23.1587 1.54933 24.208 2.84375 24.208H22.1562C23.4507 24.208 24.5 23.1587 24.5 21.8643V2.55176C24.5 1.25734 23.4507 0.208008 22.1562 0.208008Z',
  );
  $(path1, 'fill', 'currentColor');
  P(e, path1);

  path2 = U('path');
  $(
    path2,
    'd',
    'M15.3565 19.306V21.6526C15.738 21.8482 16.1892 21.9948 16.71 22.0926C17.2309 22.1904 17.7799 22.2393 18.357 22.2393C18.9194 22.2393 19.4537 22.1855 19.9599 22.0779C20.4661 21.9704 20.91 21.7931 21.2915 21.5463C21.6729 21.2994 21.9749 20.9767 22.1975 20.5783C22.42 20.1799 22.5312 19.6873 22.5312 19.1007C22.5312 18.6754 22.4677 18.3026 22.3405 17.9824C22.2133 17.6622 22.03 17.3774 21.7903 17.1281C21.5507 16.8788 21.2633 16.6551 20.9283 16.4571C20.5933 16.2591 20.2155 16.0721 19.7949 15.8961C19.4868 15.769 19.2104 15.6456 18.9659 15.5258C18.7213 15.406 18.5135 15.2838 18.3423 15.1592C18.1711 15.0345 18.0391 14.9025 17.9462 14.7632C17.8533 14.6238 17.8068 14.4662 17.8068 14.2901C17.8068 14.1289 17.8483 13.9834 17.9315 13.8538C18.0147 13.7243 18.132 13.6131 18.2836 13.5202C18.4353 13.4273 18.6211 13.3552 18.8412 13.3039C19.0613 13.2525 19.3058 13.2269 19.5748 13.2269C19.7704 13.2269 19.977 13.2416 20.1947 13.2709C20.4123 13.3002 20.6312 13.3454 20.8513 13.4065C21.0714 13.4676 21.2853 13.5446 21.4932 13.6375C21.701 13.7304 21.893 13.8379 22.0691 13.9602V11.7676C21.7121 11.6307 21.322 11.5293 20.899 11.4633C20.4759 11.3973 19.9905 11.3643 19.4427 11.3643C18.8852 11.3643 18.357 11.4242 17.8581 11.5439C17.3593 11.6637 16.9204 11.8507 16.5413 12.1049C16.1622 12.3591 15.8627 12.683 15.6426 13.0766C15.4226 13.4701 15.3125 13.9406 15.3125 14.4881C15.3125 15.1872 15.5142 15.7837 15.9177 16.2775C16.3212 16.7712 16.9338 17.1892 17.7554 17.5314C18.0782 17.6634 18.379 17.7929 18.6578 17.9201C18.9365 18.0472 19.1774 18.1792 19.3804 18.3161C19.5833 18.4529 19.7435 18.602 19.8609 18.7634C19.9783 18.9247 20.037 19.108 20.037 19.3134C20.037 19.4649 20.0003 19.6054 19.9269 19.735C19.8536 19.8646 19.7423 19.977 19.5931 20.0723C19.444 20.1677 19.2581 20.2422 19.0356 20.296C18.813 20.3498 18.5526 20.3766 18.2543 20.3766C17.7456 20.3766 17.2419 20.2874 16.743 20.109C16.2442 19.9306 15.782 19.6629 15.3565 19.306ZM11.4116 13.5244H14.4219V11.5986H6.03125V13.5244H9.02684V22.0986H11.4116V13.5244Z',
  );
  $(path2, 'fill', '#081008');
  $(path2, 'clip-rule', 'evenodd');
  $(path2, 'fill-rule', 'evenodd');
  P(e, path2);

  $(e, 'width', '25');
  $(e, 'height', '25');
  $(e, 'viewBox', '0 0 25 25');
  $(e, 'fill', 'none');
  $(e, 'xmlns', 'http://www.w3.org/2000/svg');

  return e;
}

function getTabIcon(tabName) {
  switch (tabName) {
    case 'TypeScript':
      return createTypeScriptIcon();
    case 'Node':
      return createIcon(
        [
          'M9.8288.291748c-.28077 0-.56148.06887-.80378.207332l-7.6232 4.40054c-.49231.28462-.799281.8235-.799281 1.39273v7.98375c0 .5769.306971 1.1081.799281 1.3928l2.0012 1.1538c.96923.4769 1.31484.4763 1.75331.4763 1.43846 0 2.26111-.8692 2.26111-2.3768V6.68448c0-.12308-.09928-.22386-.22235-.22386h-.96154c-.13077 0-.22386.10078-.22386.22386v8.23012c0 .677-.69916 1.3383-1.82993.7768l-2.09285-1.2079c-.07692-.0385-.12319-.1228-.12319-.2074V6.29986c0-.09231.04627-.17019.12319-.21634l7.6232-4.39904c.06923-.04616.16196-.04616.23888 0l7.62321 4.39904c.0769.04615.1232.12421.1232.20883v7.98375c0 .0846-.0465.1689-.1157.2074l-7.63071 4.408c-.06923.0385-.16965.0385-.23888 0l-1.96214-1.1613c-.05384-.0385-.12944-.0458-.18329-.0151-.54615.3077-.64615.3459-1.15385.5229-.12307.0384-.3155.1151.06911.3305l2.54508 1.5084c.24615.1385.52385.2148.80078.2148.2846 0 .5606-.0763.8068-.2148l7.6322-4.408c.4923-.2847.7993-.8159.7993-1.3928V6.29986c0-.57692-.307-1.10811-.7993-1.39273L10.6326.49908c-.2423-.138462-.523-.207332-.8038-.207332ZM11.8796 6.4501c-2.17694 0-3.47658.92248-3.47658 2.46094 0 1.66926 1.29111 2.13006 3.38338 2.33776 2.5.2461 2.6923.6164 2.6923 1.1088 0 .8461-.6834 1.2079-2.2911 1.2079-2.0231 0-2.46955-.5084-2.61571-1.5084-.01538-.1077-.10715-.1848-.21484-.1848h-.99309c-.12308 0-.21484.1009-.21484.2163 0 1.2846.7 2.814 4.03848 2.814 2.4154 0 3.7996-.9526 3.7996-2.6142 0-1.6461-1.1156-2.0854-3.4541-2.4008-2.3769-.30769-2.61566-.46929-2.61566-1.02314 0-.46153.20826-1.0682 1.96216-1.0682 1.5615 0 2.1458.33737 2.3843 1.39122.0231.1.1072.17729.2148.17729h.9931c.0616 0 .1146-.03047.1608-.07663.0385-.03846.0618-.10054.0541-.16977-.1539-1.81538-1.361-2.66827-3.8071-2.66827Z',
        ],
        '20',
        '21',
      );
    case 'YAML':
      return createIcon(
        [
          '',
        ],
        '0',
        '0',
    );
    case 'Python':
      return createIcon(
        [
          'M10.3816.291902c-.81573.003864-1.5944.07323-2.27994.194571C6.08252.843155 5.71618 1.58975 5.71618 2.96682v1.81839h4.77112v.60612H3.92543c-1.38654 0-2.60073.83336-2.980593 2.4193-.438221 1.81722-.457542 2.95137 0 4.84897.339103 1.4127 1.149073 2.419 2.535803 2.419h1.64062v-2.1799c0-1.575 1.36239-2.96402 2.98059-2.96402h4.76575c1.3266 0 2.3855-1.09246 2.3855-2.42451V2.96702c0-1.29322-1.0909-2.264528-2.3855-2.480354-.82-.136412-1.6704-.198435-2.486-.194764ZM7.8014 1.75438c.49271 0 .89537.40904.89537.91218 0 .50102-.40247.9062-.89537.9062-.49464 0-.89518-.40518-.89518-.9062-.0002-.50314.40054-.91218.89518-.91218Z',
          'M15.8486 5.39204v2.11884c0 1.64236-1.3927 3.02482-2.9806 3.02482H8.10228c-1.30539 0-2.38548 1.1174-2.38548 2.4247v4.5436c0 1.2928 1.12414 2.0535 2.38548 2.4243 1.51019.4438 2.95852.5242 4.76572 0 1.2011-.348 2.3855-1.0478 2.3855-2.4243v-1.8186h-4.7656v-.6063h7.1515c1.3865 0 1.9036-.9671 2.3858-2.4189.4981-1.4946.4767-2.93194 0-4.84906-.3427-1.38055-.9972-2.41929-2.3858-2.41929h-1.7908v.00019ZM13.1681 16.8976c.4948 0 .8954.4052.8954.9066 0 .5028-.4008.9118-.8954.9118-.4927 0-.8952-.409-.8952-.9118 0-.5014.4025-.9066.8952-.9066Z',
        ],
        '21',
        '21',
      );
    case 'Java':
      return createIcon(
        [
          'M6.01629 19.061s-.91656.5333.65314.7133c1.90195.2173 2.87388.1861 4.96927-.21 0 0 .552.3452 1.3215.6443-4.69895 2.0131-10.63417-.1167-6.94391-1.1476Zm-.57451-2.6274s-1.02827.7612.54278.9239c2.03173.2097 3.63585.2268 6.41304-.3077 0 0 .3832.3894.9867.602-5.68006 1.6612-12.00656.1308-7.94252-1.2182ZM10.2822 11.9755c1.1584 1.3334-.30383 2.5322-.30383 2.5322s2.93963-1.5172 1.58993-3.418c-1.2611-1.77175-2.22788-2.65178 3.0061-5.68736 0 .0002-8.21592 2.05154-4.2922 6.57316Z',
          'M16.4966 21.0015s.6785.5595-.7475.9919c-2.7114.8214-11.28751 1.0691-13.66937.0329-.85579-.3726.74967-.8892 1.25477-.9982.52663-.1141.82734-.0933.82734-.0933-.95232-.6704-6.15518 1.3171-2.64238 1.8871 9.57914 1.5528 17.46154-.6992 14.97714-1.8204ZM6.45794 13.7077s-4.36186 1.0362-1.54451 1.4128c1.18977.1592 3.56048.1227 5.77027-.0627 1.8054-.1517 3.6172-.4756 3.6172-.4756s-.6361.2728-1.0967.587c-4.43035 1.1653-12.986804.6225-10.52323-.5688 2.08268-1.0073 3.77697-.8927 3.77697-.8927Zm7.82486 4.3736c4.5032-2.3394 2.4209-4.5876.9675-4.2848-.3553.0741-.5147.1385-.5147.1385s.1323-.2075.3845-.2967c2.8751-1.0104 5.0858 2.9808-.9273 4.5616 0-.0004.069-.0628.09-.1186ZM11.5699.5s2.4934 2.49491-2.36549 6.33015c-3.89657 3.07749-.88849 4.83175-.00135 6.83695C6.9283 11.615 5.25977 9.80824 6.37898 8.12682 8.02251 5.65921 12.5757 4.46233 11.5699.5Z',
          'M6.90046 24.4254c4.32144.2763 10.95944-.1538 11.11654-2.1988 0 0-.3021.7752-3.5718 1.3903-3.6889.6945-8.23961.6135-10.93775.168 0 .0002.55278.4578 3.39301.6405Z',
        ],
        '19',
        '25',
      );
    case 'Go':
      return createIcon(
        [
          'M3.43235 4.52876c-.07298 0-.09122-.03648-.05473-.09121l.38311-.49257c.03648-.05473.1277-.09122.20067-.09122h6.5129c.0729 0 .0912.05473.0547.10946l-.3101.47433c-.0365.05473-.1277.10945-.1825.10945l-6.60405-.01824ZM.672583 6.20894c-.072973 0-.091217-.03649-.05473-.09122l.383107-.49257c.03649-.05473.12771-.09121.20068-.09121h8.31895c.07297 0 .10946.05473.09122.10946l-.14595.43783c-.01824.07298-.09122.10946-.16419.10946l-8.629087.01825ZM5.0803 7.88594c-.07298 0-.09122-.05473-.05473-.10946l.2554-.45608c.03649-.05473.10946-.10946.18244-.10946h3.64866c.07297 0 .10946.05473.10946.1277l-.03649.43784c0 .07297-.07297.1277-.1277.1277L5.0803 7.88594ZM24.026 4.20208c-1.1494.29189-1.9338.51081-3.0649.8027-.2737.07298-.2919.09122-.5291-.18243-.2736-.31014-.4743-.51081-.8574-.69324-1.1493-.56555-2.2622-.40136-3.302.27365-1.2406.8027-1.8791 1.98852-1.8609 3.46622.0183 1.45947 1.0217 2.66352 2.4629 2.86422 1.2405.1642 2.2804-.2737 3.1013-1.20407.1642-.20068.3102-.4196.4926-.67501h-3.5209c-.3832 0-.4744-.23716-.3467-.5473.2372-.56554.675-1.51419.9304-1.98852.0548-.10946.1825-.29189.4561-.29189h6.6406c-.0365.49257-.0365.98514-.1095 1.47771-.2006 1.31352-.6932 2.51758-1.4959 3.57568-1.3135 1.7331-3.0284 2.8095-5.1994 3.1014-1.7878.2371-3.448-.1095-4.9074-1.2041-1.35-1.0216-2.1162-2.3716-2.3169-4.05-.2372-1.98853.3466-3.77637 1.5507-5.34529C13.4448 1.88518 15.1597.808823 17.2577.425714c1.7149-.310137 3.3568-.10946 4.8345.893926.9669.63851 1.6601 1.51419 2.1162 2.5723.1095.16419.0365.25541-.1824.31014Z',
          'M30.0604 14.2919c-1.6601-.0365-3.1743-.5108-4.4514-1.6054-1.0763-.9305-1.7513-2.1163-1.9702-3.521-.3284-2.0615.2371-3.88583 1.4777-5.50948C26.4482 1.90466 28.0536.992492 30.2246.609383c1.8608-.32838 3.6122-.145947 5.1993.930407 1.4413.98514 2.3352 2.3169 2.5723 4.06826.3102 2.46285-.4013 4.46965-2.0979 6.18445-1.2041 1.2223-2.6818 1.9886-4.3784 2.3352-.4926.0912-.9852.1094-1.4595.1642Zm4.3419-7.37033c-.0182-.23716-.0182-.4196-.0547-.60203-.3284-1.80609-1.9885-2.82771-3.7217-2.42636-1.6966.38311-2.7912 1.45946-3.1925 3.17434-.3284 1.42297.3648 2.8642 1.6783 3.44798 1.0034.4378 2.0068.3831 2.9737-.1095 1.4412-.74793 2.2257-1.91551 2.3169-3.48443Z',
        ],
        '36',
        '15',
        '0 0 39 15',
      );
    case 'Ruby':
      return createRubyIcon();
    case 'C#':
      return createIcon(
        [
          'M.661743 13.5245V5.48508c.009399-.0188.018798-.0376.025065-.0564.090858-.45742.360302-.78012.751932-1.0057 1.22188-.70807 2.44377-1.40987 3.66879-2.11481.92112-.52948 1.83596-1.0715 2.76021-1.591584.52009-.291373 1.05584-.28824 1.57906.006266.52635.297638 1.0464.601548 1.5697.902318.73.41983 1.4631.83965 2.1931 1.26261.7143.41043 1.4255.82086 2.1367 1.23442.2601.15039.5358.28198.7707.47309.2883.23811.47.54202.5201.91485.022.17545.0345.3509.0345.52949v6.92717c0 .1316-.0094.26-.0188.3885-.0407.5514-.3133.9493-.7801 1.225-.3415.2005-.6862.3979-1.0277.5953-.9963.5733-1.9957 1.1498-2.992 1.7232-.7864.4511-1.5697.9054-2.35607 1.3566-.25065.1441-.52009.2381-.8146.2443-.32583.0063-.62347-.1002-.90545-.26-.39163-.2256-.78326-.4543-1.17802-.6799-1.71377-.9869-3.43068-1.9738-5.14446-2.9638-.30077-.1724-.53888-.4042-.676734-.7332-.046996-.1096-.059528-.2318-.115923-.3383ZM8.69173 3.58019c-.72686-.01567-1.4318.12219-2.11793.3791-.777.29137-1.45687.74253-2.04588 1.31901-.3227.31643-.60468.67047-.84906 1.05583-.58901.93678-.88038 1.96129-.91798 3.06099-.01253.3603.0282.71748.08773 1.07148.19425 1.2156.74253 2.2589 1.58532 3.1456.50128.5263 1.08716.9368 1.7451 1.2469 1.00571.4731 2.06155.6454 3.16438.5264.74249-.0783 1.44749-.2914 2.10849-.6454.9556-.5076 1.7201-1.2188 2.2903-2.1399.0815-.1316.0783-.1316-.0533-.2099-.7519-.4355-1.5038-.871-2.2558-1.3096-.1535-.0877-.1503-.0909-.2537.0533-.7175 1.0057-1.69187 1.46-2.92003 1.2939-1.61351-.2193-2.71948-1.7326-2.5033-3.31476.14412-1.04644.70494-1.8109 1.64172-2.28712.48248-.24438.99944-.33837 1.54459-.28824.44489.04073.85532.16292 1.24072.38536.4041.23498.7331.54829.99.93678.0407.06267.0689.12219.1692.06267.777-.4543 1.5602-.90232 2.3404-1.35348.119-.06893.1222-.08459.0532-.20678-.0188-.03133-.0376-.06266-.0595-.09086-.2569-.40103-.5671-.75506-.9086-1.08716-.4417-.42923-.943-.77387-1.4976-1.03704-.8114-.38537-1.66362-.59215-2.57533-.57335l-.00314.00627Zm5.01287 6.72041h.2976c.1254.0031.141.0188.1442.1504v.4699c0 .1546.0793.2298.2381.2256h.0156c.1285-.0063.1379-.0125.141-.1473v-.5482c0-.1285.0188-.1442.1441-.1473.1504-.0031.3008 0 .4543 0 .1692 0 .2507-.0825.2444-.2475-.0031-.13787-.0094-.14413-.1566-.14727h-.5483c-.1191 0-.1347-.01879-.1379-.13785-.0031-.19425-.0031-.38536 0-.57961 0-.12532.0188-.14099.1504-.14099h.47c.1524 0 .2266-.07833.2224-.23498v-.01566c-.0063-.13159-.0125-.14099-.1472-.14099h-.5327c-.1472 0-.1629-.01566-.166-.15978v-.43863c0-.25691 0-.26004-.2632-.24438-.119.00627-.1284.01567-.1316.14099v.54828c0 .13472-.0188.15039-.1566.15352h-.5326c-.1849 0-.1912-.0094-.1943-.19425v-.51695c0-.09086-.0345-.13785-.1284-.13159h-.047c-.188 0-.1943.00627-.1974.18798V8.521c0 .11592-.022.13472-.1379.13785-.1504.00313-.3007 0-.4543 0-.26 0-.2631.00627-.2506.26004.0063.11906.0157.13159.141.13159h.5639c.1191 0 .1379.0188.1379.13785.0031.19425.0031.38537 0 .57962 0 .12532-.022.13785-.1504.14098h-.4543c-.2475 0-.2506.00314-.2381.25687.0063.1222.0188.1348.1378.1379.1473.0031.2914 0 .4387 0 .1796 0 .2694.0867.2694.26v.4543c0 .0408-.0031.094.0407.1097.0909.0345.188.0345.2757.0063.0846-.0282.0533-.1128.0564-.1786.0032-.1629 0-.3227 0-.4857 0-.1535.0157-.166.1724-.1691h.2694Z',
          'M13.7053 9.90456h-.3101c-.0815 0-.1285-.03134-.1285-.11906v-.62348c0-.08459.047-.11905.1285-.11905h.6235c.0939 0 .1284.04386.1284.13472v.59214c0 .11593-.0188.12846-.1441.13159h-.2977v.00314Z',
        ],
        '17',
        '19',
      );
    case 'PHP':
      return createPhpIcon()
    default:
      throw new Error('Invalid tab name');
  }
}

function createTabElement(o) {
  let e, n, t;
  function i() {
    return o[3](o[6]);
  }

  return {
    c() {
      (e = x('button')),
        (text = re(o[6].name)),
        e.appendChild(getTabIcon(o[6].name)),
        e.appendChild(text),
        $(e, 'class', 'fern-terminal-tab fern-1dfudv'),
        z(e, 'is-active', o[6].name === o[0].name);
    },
    m(l, s) {
      insert(l, e, s), n || ((t = ae(e, 'click', i)), (n = !0));
    },
    p(l, s) {
      (o = l), s & 5 && z(e, 'is-active', o[6].name === o[0].name);
    },
    d(l) {
      l && removeNode(e), (n = !1), t();
    },
  };
}
function layout(o, id = 'hero-fern-terminal', m) {
  let e,
    n,
    t,
    i,
    l,
    s,
    p,
    r,
    f = getItems(Object.entries(o[2])),
    a = [];
  for (let _ = 0; _ < f.length; _ += 1) {
    a[_] = createTabElement(et(o, f, _));
  }
  var c = o[0].component;
  function u(_, g) {
    return {
      props: {
        animated: _[1],
      },
    };
  }
  return (
    c && (l = me(c, u(o))),
    {
      c() {
        (e = x('div')), (n = x('div'));
        for (let _ = 0; _ < a.length; _ += 1) {
          a[_].c();
        }
        (t = createSpace()),
          (i = x('div')),
          l && O(l.$$.fragment),
          $(n, 'class', 'fern-terminal-tabs fern-1dfudv'),
          $(i, 'class', 'fern-code-content fern-1dfudv'),
          $(e, 'id', id),
          $(
            e,
            'class',
            'fern-code fern-1dfudv' + (m ? ' fern-code-mobile' : ''),
          );
      },
      m(_, g) {
        insert(_, e, g), P(e, n);
        for (let m = 0; m < a.length; m += 1) {
          a[m] && a[m].m(n, null);
        }
        P(e, t),
          P(e, i),
          l && mountComponent(l, i, null),
          (s = !0),
          p || ((r = ae(i, 'scroll', o[4])), (p = !0));
      },
      p(_, [g]) {
        if (g & 7) {
          f = getItems(Object.entries(_[2]));
          let m;
          for (m = 0; m < f.length; m += 1) {
            const L = et(_, f, m);
            a[m]
              ? a[m].p(L, g)
              : ((a[m] = createTabElement(L)), a[m].c(), a[m].m(n, null));
          }
          for (; m < a.length; m += 1) {
            a[m].d(1);
          }
          a.length = f.length;
        }
        if (g & 1 && c !== (c = _[0].component)) {
          if (l) {
            removeElements();
            const m = l;
            fadeOut(m.$$.fragment, 1, 0, () => {
              N(m, 1);
            }),
              reinsertElements();
          }
          c
            ? ((l = me(c, u(_))),
              O(l.$$.fragment),
              fadeIn(l.$$.fragment, 1),
              mountComponent(l, i, null))
            : (l = null);
        } else if (c) {
          const m = {};
          g & 2 && (m.animated = _[1]), l.$set(m);
        }
      },
      i(_) {
        s || (l && fadeIn(l.$$.fragment, _), (s = !0));
      },
      o(_) {
        l && fadeOut(l.$$.fragment, _), (s = !1);
      },
      d(_) {
        _ && removeNode(e), destroyComponents(a, _), l && N(l), (p = !1), r();
      },
    }
  );
}
function heroLangs(o, e, n) {
  const t = {
    node: {
      name: 'Node',
      component: HeroNodeCodeblockSetup,
    },
    python: {
      name: 'Python',
      component: HeroPythonCodeblockSetup,
    },
    java: {
      name: 'Java',
      component: HeroJavaCodeblockSetup,
    },
    go: {
      name: 'Go',
      component: HeroGoCodeblockSetup,
    },
    ruby: {
      name: 'Ruby',
      component: HeroRubyCodeblockSetup,
    },
    csharp: {
      name: 'C#',
      component: HeroCSharpCodeblockSetup,
    },
    php: {
      name: 'PHP',
      component: HeroPHPCodeblockSetup,
    },
  };
  let i = t.node,
    l = !0;
  return [
    i,
    l,
    t,
    (r) => {
      n(0, (i = r)), n(1, (l = !1));
    },
    (r) => completionsStore.set(r.target.scrollLeft),
  ];
}
class HeroCodeEditor extends q {
  constructor(e) {
    super(), initializeComponent(this, e, heroLangs, layout, equalityCheck, {});
  }
}

/*
 * Load the `fern-terminal` web component
 */

const HERO_CUSTOM_ELEMENTS_NAME = 'fern-terminal';
const HERO_TERMINAL_ID = 'hero-fern-terminal';
const HERO_TERMINAL_CLASSES = ['fern-code', 'fern-terminal'];

const loadTerminal = () => {
  const nvTerminal = document.getElementById(HERO_TERMINAL_ID),
    docFragment = document.createDocumentFragment();
  new HeroCodeEditor({ target: docFragment });
  nvTerminal.replaceWith(docFragment);
};

customElements.define(
  HERO_CUSTOM_ELEMENTS_NAME,
  class extends HTMLElement {
    connectedCallback() {
      this.mount();
    }

    mount() {
      this.id = HERO_TERMINAL_ID;
      this.classList.add(...HERO_TERMINAL_CLASSES);
      loadTerminal(); // Mount the terminal
    }
  },
);
