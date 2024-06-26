/*! For license information please see index.js.LICENSE.txt */
!(function () {
  var t = {
      638: function (t) {
        t.exports = '25386'
      },
      243: function (t) {
        t.exports = '12928'
      },
      102: function (t, e, r) {
        'use strict'
        r.r(e)
        var n = r(72),
          i = r.n(n),
          s = r(825),
          o = r.n(s),
          a = r(659),
          u = r.n(a),
          l = r(56),
          c = r.n(l),
          f = r(540),
          h = r.n(f),
          d = r(113),
          p = r.n(d),
          g = r(474),
          m = r.n(g),
          v = {}
        ;(v.styleTagTransform = p()),
          (v.setAttributes = c()),
          (v.insert = u().bind(null, 'head')),
          (v.domAPI = o()),
          (v.insertStyleElement = h()),
          i()(m(), v),
          m() && m().locals && m().locals
        var _ = r(453),
          y = r.n(_),
          b = {}
        ;(b.styleTagTransform = p()),
          (b.setAttributes = c()),
          (b.insert = u().bind(null, 'head')),
          (b.domAPI = o()),
          (b.insertStyleElement = h()),
          i()(y(), b),
          y() && y().locals && y().locals
        var x = r(629),
          w = r.n(x),
          T = {}
        ;(T.styleTagTransform = p()),
          (T.setAttributes = c()),
          (T.insert = u().bind(null, 'head')),
          (T.domAPI = o()),
          (T.insertStyleElement = h()),
          i()(w(), T),
          w() && w().locals && w().locals
      },
      958: function (t, e) {
        !(function (t) {
          'use strict'
          function e (t, e) {
            for (var r = 0; r < e.length; r++) {
              var n = e[r]
              ;(n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                'value' in n && (n.writable = !0),
                Object.defineProperty(t, n.key, n)
            }
          }
          function r () {
            return 'undefined' != typeof window
          }
          function n () {
            return i || (r() && (i = window.gsap) && i.registerPlugin && i)
          }
          var i,
            s,
            o,
            a,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            g,
            m =
              ((v.register = function (t) {
                return (
                  s ||
                    ((i = t || n()),
                    r() &&
                      window.document &&
                      ((o = window),
                      (a = document),
                      (u = a.documentElement),
                      (l = a.body)),
                    i &&
                      ((c = i.utils.toArray),
                      (f = i.utils.clamp),
                      (p = i.parseEase('expo')),
                      (h = i.core.globals().ScrollTrigger),
                      i.core.globals('ScrollSmoother', v),
                      l && h && ((g = h.core._getVelocityProp), (s = 1)))),
                  s
                )
              }),
              (function (t, r, n) {
                r && e(t.prototype, r)
              })(v, [
                {
                  key: 'progress',
                  get: function () {
                    return this.scrollTrigger.animation._time / 100
                  }
                }
              ]),
              v)
          function v (t) {
            var e = this
            function r () {
              return U.update(-N)
            }
            function n () {
              return (S.style.overflow = 'visible')
            }
            function m (t) {
              var e = t.getTween()
              e && (e.pause(), (e._time = e._dur), (e._tTime = e._tDur)),
                (B = !1),
                t.animation.progress(t.progress, !0)
            }
            function _ (t, e) {
              ;((t !== N && !I) || e) &&
                (Y &&
                  (S.style.transform =
                    'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                    t +
                    ', 0, 1)'),
                (X = t - N),
                (N = t),
                h.isUpdating || h.update())
            }
            function y (t) {
              return arguments.length
                ? (I && (N = -t), (W.y = -t), (B = !0), $(t), this)
                : -N
            }
            function b (t) {
              ;(E.scrollTop = 0),
                h.isInViewport(t.target) ||
                  t.target === L ||
                  e.scrollTo(t.target, !1, 'center center'),
                (L = t.target)
            }
            function x (t) {
              var e, r, n, s
              P.forEach(function (o) {
                ;(e = o.pins),
                  (s = o.markers),
                  t.forEach(function (t) {
                    ;(t.trigger !== o.trigger &&
                      t.pinnedContainer !== o.trigger) ||
                      o === t ||
                      ((r = t.start),
                      (n = (r - o.start - o.offset) / o.ratio - (r - o.start)),
                      e.forEach(function (t) {
                        return (n -= t.distance / o.ratio - t.distance)
                      }),
                      t.setPositions(r + n, t.end + n),
                      t.markerStart &&
                        s.push(
                          i.quickSetter([t.markerStart, t.markerEnd], 'y', 'px')
                        ),
                      t.pin &&
                        0 < t.end &&
                        ((n = t.end - t.start),
                        e.push({
                          start: t.start,
                          end: t.end,
                          distance: n,
                          trig: t
                        }),
                        o.setPositions(o.start, o.end + n),
                        o.vars.onRefresh(o)))
                  })
              })
            }
            function w () {
              n(),
                requestAnimationFrame(n),
                P &&
                  (P.forEach(function (t) {
                    var e = t.start,
                      r = t.auto
                        ? Math.min(h.maxScroll(t.scroller), t.end)
                        : e + (t.end - e) / t.ratio,
                      n = (r - t.end) / 2
                    ;(e -= n),
                      (r -= n),
                      (t.offset = n || 1e-4),
                      (t.pins.length = 0),
                      t.setPositions(Math.min(e, r), Math.max(e, r)),
                      t.vars.onRefresh(t)
                  }),
                  x(h.sort())),
                U.reset()
            }
            function T () {
              return (
                P &&
                P.forEach(function (t) {
                  return t.vars.onRefresh(t)
                })
              )
            }
            function O () {
              return (
                P &&
                  P.forEach(function (t) {
                    return t.vars.onRefreshInit(t)
                  }),
                T
              )
            }
            function k (t, e, r, n) {
              return function () {
                var i = 'function' == typeof e ? e(r, n) : e
                return (
                  i ||
                    0 === i ||
                    (i =
                      n.getAttribute('data-' + t) || ('speed' === t ? 1 : 0)),
                  n.setAttribute('data-' + t, i),
                  'auto' === i ? i : parseFloat(i)
                )
              }
            }
            function C (t, e, r, n) {
              function s () {
                ;(e = y()),
                  (r = b()),
                  (c = parseFloat(e) || 1),
                  (v = (g = 'auto' === e) ? 0 : 0.5),
                  m && m.kill(),
                  (m =
                    r &&
                    i.to(t, { ease: p, overwrite: !1, y: '+=0', duration: r })),
                  d && ((d.ratio = c), (d.autoSpeed = g))
              }
              function a () {
                ;(w.y = x + 'px'), w.renderTransform(1), s()
              }
              function l (e) {
                if (g) {
                  a()
                  var r = (function (t, e) {
                    var r,
                      n,
                      i = t.parentNode || u,
                      s = t.getBoundingClientRect(),
                      a = i.getBoundingClientRect(),
                      l = a.top - s.top,
                      c = a.bottom - s.bottom,
                      f = (Math.abs(l) > Math.abs(c) ? l : c) / (1 - e),
                      h = -f * e
                    return (
                      0 < f &&
                        ((h +=
                          -(n =
                            0.5 == (r = a.height / (o.innerHeight + a.height))
                              ? 2 * a.height
                              : 2 *
                                Math.min(a.height, (-f * r) / (2 * r - 1))) /
                          2),
                        (f += n)),
                      { change: f, offset: h }
                    )
                  })(t, f(0, 1, -e.start / (e.end - e.start)))
                  ;(S = r.change), (_ = r.offset)
                } else (S = (e.end - e.start) * (1 - c)), (_ = 0)
                T.forEach(function (t) {
                  return (S -= t.distance * (1 - c))
                }),
                  e.vars.onUpdate(e),
                  m && m.progress(1)
              }
              var c,
                d,
                g,
                m,
                v,
                _,
                y = k('speed', e, n, t),
                b = k('lag', r, n, t),
                x = i.getProperty(t, 'y'),
                w = t._gsap,
                T = [],
                C = [],
                S = 0
              return (
                s(),
                (1 !== c || g || m) &&
                  (l(
                    (d = h.create({
                      trigger: g ? t.parentNode : t,
                      scroller: E,
                      scrub: !0,
                      refreshPriority: -999,
                      onRefreshInit: a,
                      onRefresh: l,
                      onKill: function (t) {
                        var e = P.indexOf(t)
                        0 <= e && P.splice(e, 1)
                      },
                      onUpdate: function (t) {
                        var e,
                          r,
                          n,
                          s = x + S * (t.progress - v),
                          o = T.length,
                          a = 0
                        if (t.offset) {
                          if (o) {
                            for (r = -W.y, n = t.end; o--; ) {
                              if (
                                (e = T[o]).trig.isActive ||
                                (r >= e.start && r <= e.end)
                              )
                                return void (
                                  m &&
                                  ((e.trig.progress +=
                                    e.trig.direction < 0 ? 0.001 : -0.001),
                                  e.trig.update(0, 0, 1),
                                  m.resetTo('y', parseFloat(w.y), -X, !0),
                                  q && m.progress(1))
                                )
                              r > e.end && (a += e.distance), (n -= e.distance)
                            }
                            s =
                              x +
                              a +
                              S *
                                ((i.utils.clamp(t.start, t.end, r) -
                                  t.start -
                                  a) /
                                  (n - t.start) -
                                  v)
                          }
                          ;(s = (function (t) {
                            return Math.round(1e5 * t) / 1e5 || 0
                          })(s + _)),
                            C.length &&
                              !g &&
                              C.forEach(function (t) {
                                return t(s - a)
                              }),
                            m
                              ? (m.resetTo('y', s, -X, !0), q && m.progress(1))
                              : ((w.y = s + 'px'), w.renderTransform(1))
                        }
                      }
                    }))
                  ),
                  (i.core.getCache(d.trigger).stRevert = O),
                  (d.startY = x),
                  (d.pins = T),
                  (d.markers = C),
                  (d.ratio = c),
                  (d.autoSpeed = g),
                  (t.style.willChange = 'transform')),
                d
              )
            }
            s ||
              v.register(i) ||
              console.warn('Please gsap.registerPlugin(ScrollSmoother)'),
              (t = this.vars = t || {}),
              d && d.kill(),
              (d = this)
            var S,
              E,
              M,
              A,
              P,
              R,
              D,
              z,
              I,
              F,
              B,
              L,
              $ = h.getScrollFunc(o),
              Y =
                1 === h.isTouch
                  ? !0 === t.smoothTouch
                    ? 0.8
                    : parseFloat(t.smoothTouch) || 0
                  : 0 === t.smooth || !1 === t.smooth
                  ? 0
                  : parseFloat(t.smooth) || 0.8,
              N = 0,
              X = 0,
              q = 1,
              V = t.onUpdate,
              H = t.onStop,
              U = g(0),
              W = { y: 0 }
            function j () {
              return (
                (M = S.clientHeight),
                (S.style.overflow = 'visible'),
                (l.style.height = M + 'px'),
                M - o.innerHeight
              )
            }
            h.addEventListener('refresh', w),
              i.delayedCall(0.5, function () {
                return (q = 0)
              }),
              (this.scrollTop = y),
              (this.scrollTo = function (t, r, n) {
                var s = i.utils.clamp(
                  0,
                  h.maxScroll(o),
                  isNaN(t) ? e.offset(t, n) : +t
                )
                r
                  ? I
                    ? i.to(e, {
                        duration: Y,
                        scrollTop: s,
                        overwrite: 'auto',
                        ease: p
                      })
                    : $(s)
                  : y(s)
              }),
              (this.offset = function (t, e) {
                t = c(t)[0]
                var r,
                  n = i.getProperty(t, 'y'),
                  s = h.create({ trigger: t, start: e || 'top top' })
                return (
                  P && x([s]), (r = s.start), s.kill(!1), i.set(t, { y: n }), r
                )
              }),
              (this.content = function (t) {
                return arguments.length
                  ? ((S = c(t || '#smooth-content')[0] || l.children[0]),
                    (z = S.getAttribute('style') || ''),
                    i.set(S, { overflow: 'visible', width: '100%' }),
                    this)
                  : S
              }),
              (this.wrapper = function (t) {
                return arguments.length
                  ? ((E =
                      c(t || '#smooth-wrapper')[0] ||
                      (function (t) {
                        var e = a.createElement('div')
                        return (
                          e.classList.add('ScrollSmoother-wrapper'),
                          t.parentNode.insertBefore(e, t),
                          e.appendChild(t),
                          e
                        )
                      })(S)),
                    (D = E.getAttribute('style') || ''),
                    j(),
                    i.set(
                      E,
                      Y
                        ? {
                            overflow: 'hidden',
                            position: 'fixed',
                            height: '100%',
                            width: '100%',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                          }
                        : {
                            overflow: 'visible',
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            top: 'auto',
                            bottom: 'auto',
                            left: 'auto',
                            right: 'auto'
                          }
                    ),
                    this)
                  : E
              }),
              (this.effects = function (t, e) {
                if (((P = P || []), !t)) return P.slice(0)
                ;(t = c(t)).forEach(function (t) {
                  for (var e = P.length; e--; )
                    P[e].trigger === t && (P[e].kill(), P.splice(e, 1))
                })
                var r,
                  n,
                  i = (e = e || {}).speed,
                  s = e.lag,
                  o = []
                for (r = 0; r < t.length; r++)
                  (n = C(t[r], i, s, r)) && o.push(n)
                return P.push.apply(P, o), o
              }),
              this.content(t.content),
              this.wrapper(t.wrapper),
              (this.render = function (t) {
                return _(t || 0 === t ? t : N)
              }),
              (this.getVelocity = function () {
                return U.getVelocity(-N)
              }),
              h.scrollerProxy(E, {
                scrollTop: y,
                scrollHeight: function () {
                  return l.scrollHeight
                },
                fixedMarkers: !1 !== t.fixedMarkers && !!Y,
                content: S,
                getBoundingClientRect: function () {
                  return {
                    top: 0,
                    left: 0,
                    width: o.innerWidth,
                    height: o.innerHeight
                  }
                }
              }),
              h.defaults({ scroller: E })
            var G = h.getAll().filter(function (t) {
              return t.scroller === o || t.scroller === E
            })
            G.forEach(function (t) {
              return t.revert(!0)
            }),
              (A = h.create({
                animation: i.to(W, {
                  y: function () {
                    return o.innerHeight - M
                  },
                  ease: 'none',
                  data: 'ScrollSmoother',
                  duration: 100,
                  onUpdate: function () {
                    var t = B
                    t && ((W.y = N), m(A)), _(W.y, t), r(), V && !I && V(e)
                  }
                }),
                onRefreshInit: function () {
                  return (W.y = 0)
                },
                id: 'ScrollSmoother',
                scroller: o,
                invalidateOnRefresh: !0,
                start: 0,
                refreshPriority: -9999,
                end: j,
                onScrubComplete: function () {
                  U.reset(), H && H(e)
                },
                scrub: Y || !0,
                onRefresh: function (t) {
                  m(t), _(W.y)
                }
              })),
              (this.smooth = function (t) {
                return (
                  (Y = t),
                  arguments.length
                    ? A.scrubDuration(t)
                    : A.getTween()
                    ? A.getTween().duration()
                    : 0
                )
              }),
              A.getTween() && (A.getTween().vars.ease = t.ease || p),
              (this.scrollTrigger = A),
              t.effects &&
                this.effects(
                  !0 === t.effects ? '[data-speed], [data-lag]' : t.effects,
                  {}
                ),
              G.forEach(function (t) {
                ;(t.vars.scroller = E), t.init(t.vars, t.animation)
              }),
              (this.paused = function (t) {
                return arguments.length
                  ? (!!I !== t &&
                      (t
                        ? (A.getTween() && A.getTween().pause(),
                          $(-N),
                          U.reset(),
                          (F = h.normalizeScroll()) && F.disable(),
                          (I = h.observe({
                            preventDefault: !0,
                            type: 'wheel,touch,scroll',
                            debounce: !1,
                            onChangeY: function () {
                              return y(-N)
                            }
                          })))
                        : (I.kill(),
                          (I = 0),
                          F && F.enable(),
                          (A.progress = (-N - A.start) / (A.end - A.start)),
                          m(A))),
                    this)
                  : !!I
              }),
              (this.kill = function () {
                e.paused(!1), m(A), A.kill()
                for (var t = P ? P.length : 0; t--; ) P[t].kill()
                h.scrollerProxy(E),
                  h.removeEventListener('refresh', w),
                  (E.style.cssText = D),
                  (S.style.cssText = z)
                var r = h.defaults({})
                r && r.scroller === E && h.defaults({ scroller: o }),
                  e.observer && h.normalizeScroll(!1),
                  clearInterval(R),
                  (d = null),
                  o.removeEventListener('focusin', b)
              }),
              t.normalizeScroll &&
                (this.observer = h.normalizeScroll({ debounce: !0 })),
              h.config(t),
              'overscrollBehavior' in o.getComputedStyle(l) &&
                i.set(l, { overscrollBehavior: 'none' }),
              o.addEventListener('focusin', b),
              (R = setInterval(r, 250)),
              'loading' === a.readyState ||
                requestAnimationFrame(function () {
                  return h.refresh()
                })
          }
          ;(m.version = '3.10.2'),
            (m.create = function (t) {
              return d && t && d.content() === c(t.content)[0] ? d : new m(t)
            }),
            (m.get = function () {
              return d
            }),
            n() && i.registerPlugin(m),
            (t.ScrollSmoother = m),
            (t.default = m),
            'undefined' == typeof window || window !== t
              ? Object.defineProperty(t, '__esModule', { value: !0 })
              : delete t.default
        })(e)
      },
      813: function () {},
      12: function () {},
      931: function () {},
      225: function () {
        let t = document.getElementById('myVideo'),
          e = document.getElementById('playVideo')
        t &&
          (e.addEventListener('click', function () {
            e.classList.add('d-none'), t.play()
          }),
          document
            .querySelector('.video_border')
            .addEventListener('click', function () {
              e.classList.add('d-none'), t.play()
            }),
          document.querySelector('#myVideo').addEventListener('ended', t => {
            e.classList.remove('d-none')
          }),
          window.addEventListener('scroll', function () {
            var t = document.getElementById('back_to_top')
            window.pageYOffset > 300
              ? (t.style.display = 'block')
              : (t.style.display = 'none')
          }),
          document
            .getElementById('back_to_top')
            .addEventListener('click', function () {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }))
      },
      631: function () {
        $('.hamburger-menu').on('click', function () {
          $('.hamburger-menu').toggleClass('animate'),
            $('#overlay').toggleClass('overlay-active'),
            $('.main-top-section').toggleClass('mobile-view'),
            $('body').toggleClass('fix-screen-mobile')
        }),
          $(document).ready(function () {
            let t = document.querySelector('#mint'),
              e = document.querySelector('#Update'),
              r = document.querySelector('#OurWhy'),
              n = document.querySelector('#Solutions'),
              i = document.querySelector('#HowWorks'),
              s = document.querySelector('#Applications')
            document.querySelector('#Resources'),
              document.querySelector('#FAQ'),
              document.querySelector('#Contact'),
              $('.section-1').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  t.scrollIntoView()
              }),
              $('.section-2').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  e.scrollIntoView()
              }),
              $('.section-3').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  r.scrollIntoView()
              }),
              $('.section-4').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  n.scrollIntoView()
              }),
              $('.section-5').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  i.scrollIntoView()
              }),
              $('.section-6').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  s.scrollIntoView()
              }),
              $('.section-7').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  s.scrollIntoView()
              }),
              $('.section-8').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  s.scrollIntoView()
              }),
              $('.section-9').click(function () {
                $('.hamburger-menu').removeClass('animate'),
                  $('#overlay').removeClass('overlay-active'),
                  $('.main-top-section').removeClass('mobile-view'),
                  $('body').removeClass('fix-screen-mobile'),
                  $('.main-top-section').removeClass('h-100vh'),
                  s.scrollIntoView()
              }),
              $('.mobile_view_link').on('click', function () {
                $('.hamburger-menu').toggleClass('animate'),
                  $('#overlay').toggleClass('overlay-active'),
                  $('.main-top-section').toggleClass('mobile-view'),
                  $('body').toggleClass('fix-screen-mobile')
              })
          })
      },
      629: function () {},
      474: function () {},
      453: function () {},
      798: function () {},
      789: function () {},
      219: function () {},
      459: function () {},
      247: function () {},
      647: function () {},
      72: function (t) {
        'use strict'
        var e = []
        function r (t) {
          for (var r = -1, n = 0; n < e.length; n++)
            if (e[n].identifier === t) {
              r = n
              break
            }
          return r
        }
        function n (t, n) {
          for (var s = {}, o = [], a = 0; a < t.length; a++) {
            var u = t[a],
              l = n.base ? u[0] + n.base : u[0],
              c = s[l] || 0,
              f = ''.concat(l, ' ').concat(c)
            s[l] = c + 1
            var h = r(f),
              d = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5]
              }
            if (-1 !== h) e[h].references++, e[h].updater(d)
            else {
              var p = i(d, n)
              ;(n.byIndex = a),
                e.splice(a, 0, { identifier: f, updater: p, references: 1 })
            }
            o.push(f)
          }
          return o
        }
        function i (t, e) {
          var r = e.domAPI(e)
          return (
            r.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return
                r.update((t = e))
              } else r.remove()
            }
          )
        }
        t.exports = function (t, i) {
          var s = n((t = t || []), (i = i || {}))
          return function (t) {
            t = t || []
            for (var o = 0; o < s.length; o++) {
              var a = r(s[o])
              e[a].references--
            }
            for (var u = n(t, i), l = 0; l < s.length; l++) {
              var c = r(s[l])
              0 === e[c].references && (e[c].updater(), e.splice(c, 1))
            }
            s = u
          }
        }
      },
      659: function (t) {
        'use strict'
        var e = {}
        t.exports = function (t, r) {
          var n = (function (t) {
            if (void 0 === e[t]) {
              var r = document.querySelector(t)
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head
                } catch (t) {
                  r = null
                }
              e[t] = r
            }
            return e[t]
          })(t)
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            )
          n.appendChild(r)
        }
      },
      540: function (t) {
        'use strict'
        t.exports = function (t) {
          var e = document.createElement('style')
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
        }
      },
      56: function (t, e, r) {
        'use strict'
        t.exports = function (t) {
          var e = r.nc
          e && t.setAttribute('nonce', e)
        }
      },
      825: function (t) {
        'use strict'
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} }
          var e = t.insertStyleElement(t)
          return {
            update: function (r) {
              !(function (t, e, r) {
                var n = ''
                r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                  r.media && (n += '@media '.concat(r.media, ' {'))
                var i = void 0 !== r.layer
                i &&
                  (n += '@layer'.concat(
                    r.layer.length > 0 ? ' '.concat(r.layer) : '',
                    ' {'
                  )),
                  (n += r.css),
                  i && (n += '}'),
                  r.media && (n += '}'),
                  r.supports && (n += '}')
                var s = r.sourceMap
                s &&
                  'undefined' != typeof btoa &&
                  (n +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                      ' */'
                    )),
                  e.styleTagTransform(n, t, e.options)
              })(e, t, r)
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(e)
            }
          }
        }
      },
      113: function (t) {
        'use strict'
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(t))
          }
        }
      }
    },
    e = {}
  function r (n) {
    var i = e[n]
    if (void 0 !== i) return i.exports
    var s = (e[n] = { exports: {} })
    return t[n].call(s.exports, s, s.exports, r), s.exports
  }
  ;(r.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default
          }
        : function () {
            return t
          }
    return r.d(e, { a: e }), e
  }),
    (r.d = function (t, e) {
      for (var n in e)
        r.o(e, n) &&
          !r.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] })
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (r.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (r.nc = void 0),
    (function () {
      'use strict'
      function t (t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          )
        return t
      }
      function e (t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e)
      }
      var n,
        i,
        s,
        o,
        a,
        u,
        l,
        c,
        f,
        h,
        d,
        p,
        g,
        m,
        v,
        _,
        y,
        b = {
          autoSleep: 120,
          force3D: 'auto',
          nullTargetWarn: 1,
          units: { lineHeight: '' }
        },
        x = { duration: 0.5, overwrite: !1, delay: 0 },
        w = 1e8,
        T = 1e-8,
        O = 2 * Math.PI,
        k = O / 4,
        C = 0,
        S = Math.sqrt,
        E = Math.cos,
        M = Math.sin,
        A = function (t) {
          return 'string' == typeof t
        },
        P = function (t) {
          return 'function' == typeof t
        },
        R = function (t) {
          return 'number' == typeof t
        },
        D = function (t) {
          return void 0 === t
        },
        z = function (t) {
          return 'object' == typeof t
        },
        I = function (t) {
          return !1 !== t
        },
        F = function () {
          return 'undefined' != typeof window
        },
        B = function (t) {
          return P(t) || A(t)
        },
        L =
          ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        $ = Array.isArray,
        Y = /(?:-?\.?\d|\.)+/gi,
        N = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        X = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        q = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        V = /[+-]=-?[.\d]+/,
        H = /[^,'"\[\]\s]+/gi,
        U = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        W = {},
        j = {},
        G = function (t) {
          return (j = Ot(t, W)) && Or
        },
        Q = function (t, e) {
          return console.warn(
            'Invalid property',
            t,
            'set to',
            e,
            'Missing plugin? gsap.registerPlugin()'
          )
        },
        Z = function (t, e) {
          return !e && console.warn(t)
        },
        K = function (t, e) {
          return (t && (W[t] = e) && j && (j[t] = e)) || W
        },
        J = function () {
          return 0
        },
        tt = { suppressEvents: !0, isStart: !0, kill: !1 },
        et = { suppressEvents: !0, kill: !1 },
        rt = { suppressEvents: !0 },
        nt = {},
        it = [],
        st = {},
        ot = {},
        at = {},
        ut = 30,
        lt = [],
        ct = '',
        ft = function (t) {
          var e,
            r,
            n = t[0]
          if ((z(n) || P(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
            for (r = lt.length; r-- && !lt[r].targetTest(n); );
            e = lt[r]
          }
          for (r = t.length; r--; )
            (t[r] && (t[r]._gsap || (t[r]._gsap = new Le(t[r], e)))) ||
              t.splice(r, 1)
          return t
        },
        ht = function (t) {
          return t._gsap || ft(ee(t))[0]._gsap
        },
        dt = function (t, e, r) {
          return (r = t[e]) && P(r)
            ? t[e]()
            : (D(r) && t.getAttribute && t.getAttribute(e)) || r
        },
        pt = function (t, e) {
          return (t = t.split(',')).forEach(e) || t
        },
        gt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        mt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        vt = function (t, e) {
          var r = e.charAt(0),
            n = parseFloat(e.substr(2))
          return (
            (t = parseFloat(t)),
            '+' === r ? t + n : '-' === r ? t - n : '*' === r ? t * n : t / n
          )
        },
        _t = function (t, e) {
          for (var r = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < r; );
          return n < r
        },
        yt = function () {
          var t,
            e,
            r = it.length,
            n = it.slice(0)
          for (st = {}, it.length = 0, t = 0; t < r; t++)
            (e = n[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        bt = function (t, e, r, n) {
          it.length && !i && yt(),
            t.render(e, r, n || (i && e < 0 && (t._initted || t._startAt))),
            it.length && !i && yt()
        },
        xt = function (t) {
          var e = parseFloat(t)
          return (e || 0 === e) && (t + '').match(H).length < 2
            ? e
            : A(t)
            ? t.trim()
            : t
        },
        wt = function (t) {
          return t
        },
        Tt = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r])
          return t
        },
        Ot = function (t, e) {
          for (var r in e) t[r] = e[r]
          return t
        },
        kt = function t (e, r) {
          for (var n in r)
            '__proto__' !== n &&
              'constructor' !== n &&
              'prototype' !== n &&
              (e[n] = z(r[n]) ? t(e[n] || (e[n] = {}), r[n]) : r[n])
          return e
        },
        Ct = function (t, e) {
          var r,
            n = {}
          for (r in t) r in e || (n[r] = t[r])
          return n
        },
        St = function (t) {
          var e,
            r = t.parent || o,
            n = t.keyframes
              ? ((e = $(t.keyframes)),
                function (t, r) {
                  for (var n in r)
                    n in t ||
                      ('duration' === n && e) ||
                      'ease' === n ||
                      (t[n] = r[n])
                })
              : Tt
          if (I(t.inherit))
            for (; r; ) n(t, r.vars.defaults), (r = r.parent || r._dp)
          return t
        },
        Et = function (t, e, r, n, i) {
          void 0 === r && (r = '_first'), void 0 === n && (n = '_last')
          var s,
            o = t[n]
          if (i) for (s = e[i]; o && o[i] > s; ) o = o._prev
          return (
            o
              ? ((e._next = o._next), (o._next = e))
              : ((e._next = t[r]), (t[r] = e)),
            e._next ? (e._next._prev = e) : (t[n] = e),
            (e._prev = o),
            (e.parent = e._dp = t),
            e
          )
        },
        Mt = function (t, e, r, n) {
          void 0 === r && (r = '_first'), void 0 === n && (n = '_last')
          var i = e._prev,
            s = e._next
          i ? (i._next = s) : t[r] === e && (t[r] = s),
            s ? (s._prev = i) : t[n] === e && (t[n] = i),
            (e._next = e._prev = e.parent = null)
        },
        At = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0)
        },
        Pt = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r; ) (r._dirty = 1), (r = r.parent)
          return t
        },
        Rt = function (t, e, r, n) {
          return (
            t._startAt &&
            (i
              ? t._startAt.revert(et)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, n))
          )
        },
        Dt = function t (e) {
          return !e || (e._ts && t(e.parent))
        },
        zt = function (t) {
          return t._repeat
            ? It(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0
        },
        It = function (t, e) {
          var r = Math.floor((t /= e))
          return t && r === t ? r - 1 : r
        },
        Ft = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          )
        },
        Bt = function (t) {
          return (t._end = mt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || T) || 0)
          ))
        },
        Lt = function (t, e) {
          var r = t._dp
          return (
            r &&
              r.smoothChildTiming &&
              t._ts &&
              ((t._start = mt(
                r._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
              )),
              Bt(t),
              r._dirty || Pt(r, t)),
            t
          )
        },
        $t = function (t, e) {
          var r
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((r = Ft(t.rawTime(), e)),
              (!e._dur || Zt(0, e.totalDuration(), r) - e._tTime > T) &&
                e.render(r, !0)),
            Pt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (r = t; r._dp; )
                r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp)
            t._zTime = -1e-8
          }
        },
        Yt = function (t, e, r, n) {
          return (
            e.parent && At(e),
            (e._start = mt(
              (R(r) ? r : r || t !== o ? jt(t, r, e) : t._time) + e._delay
            )),
            (e._end = mt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
            )),
            Et(t, e, '_first', '_last', t._sort ? '_start' : 0),
            Vt(e) || (t._recent = e),
            n || $t(t, e),
            t._ts < 0 && Lt(t, t._tTime),
            t
          )
        },
        Nt = function (t, e) {
          return (
            (W.ScrollTrigger || Q('scrollTrigger', e)) &&
            W.ScrollTrigger.create(e, t)
          )
        },
        Xt = function (t, e, r, n, s) {
          return (
            Ue(t, e, s),
            t._initted
              ? !r &&
                t._pt &&
                !i &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                f !== ke.frame
                ? (it.push(t), (t._lazy = [s, n]), 1)
                : void 0
              : 1
          )
        },
        qt = function t (e) {
          var r = e.parent
          return (
            r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r))
          )
        },
        Vt = function (t) {
          var e = t.data
          return 'isFromStart' === e || 'isStart' === e
        },
        Ht = function (t, e, r, n) {
          var i = t._repeat,
            s = mt(e) || 0,
            o = t._tTime / t._tDur
          return (
            o && !n && (t._time *= s / t._dur),
            (t._dur = s),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : mt(s * (i + 1) + t._rDelay * i)
              : s),
            o > 0 && !n && Lt(t, (t._tTime = t._tDur * o)),
            t.parent && Bt(t),
            r || Pt(t.parent, t),
            t
          )
        },
        Ut = function (t) {
          return t instanceof Ye ? Pt(t) : Ht(t, t._dur)
        },
        Wt = { _start: 0, endTime: J, totalDuration: J },
        jt = function t (e, r, n) {
          var i,
            s,
            o,
            a = e.labels,
            u = e._recent || Wt,
            l = e.duration() >= w ? u.endTime(!1) : e._dur
          return A(r) && (isNaN(r) || r in a)
            ? ((s = r.charAt(0)),
              (o = '%' === r.substr(-1)),
              (i = r.indexOf('=')),
              '<' === s || '>' === s
                ? (i >= 0 && (r = r.replace(/=/, '')),
                  ('<' === s ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(r.substr(1)) || 0) *
                      (o ? (i < 0 ? u : n).totalDuration() / 100 : 1))
                : i < 0
                ? (r in a || (a[r] = l), a[r])
                : ((s = parseFloat(r.charAt(i - 1) + r.substr(i + 1))),
                  o && n && (s = (s / 100) * ($(n) ? n[0] : n).totalDuration()),
                  i > 1 ? t(e, r.substr(0, i - 1), n) + s : l + s))
            : null == r
            ? l
            : +r
        },
        Gt = function (t, e, r) {
          var n,
            i,
            s = R(e[1]),
            o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
            a = e[o]
          if ((s && (a.duration = e[1]), (a.parent = r), t)) {
            for (n = a, i = r; i && !('immediateRender' in n); )
              (n = i.vars.defaults || {}), (i = I(i.vars.inherit) && i.parent)
            ;(a.immediateRender = I(n.immediateRender)),
              t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1])
          }
          return new Ze(e[0], a, e[o + 1])
        },
        Qt = function (t, e) {
          return t || 0 === t ? e(t) : e
        },
        Zt = function (t, e, r) {
          return r < t ? t : r > e ? e : r
        },
        Kt = function (t, e) {
          return A(t) && (e = U.exec(t)) ? e[1] : ''
        },
        Jt = [].slice,
        te = function (t, e) {
          return (
            t &&
            z(t) &&
            'length' in t &&
            ((!e && !t.length) || (t.length - 1 in t && z(t[0]))) &&
            !t.nodeType &&
            t !== a
          )
        },
        ee = function (t, e, r) {
          return s && !e && s.selector
            ? s.selector(t)
            : !A(t) || r || (!u && Ce())
            ? $(t)
              ? (function (t, e, r) {
                  return (
                    void 0 === r && (r = []),
                    t.forEach(function (t) {
                      var n
                      return (A(t) && !e) || te(t, 1)
                        ? (n = r).push.apply(n, ee(t))
                        : r.push(t)
                    }) || r
                  )
                })(t, r)
              : te(t)
              ? Jt.call(t, 0)
              : t
              ? [t]
              : []
            : Jt.call((e || l).querySelectorAll(t), 0)
        },
        re = function (t) {
          return (
            (t = ee(t)[0] || Z('Invalid scope') || {}),
            function (e) {
              var r = t.current || t.nativeElement || t
              return ee(
                e,
                r.querySelectorAll
                  ? r
                  : r === t
                  ? Z('Invalid scope') || l.createElement('div')
                  : t
              )
            }
          )
        },
        ne = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random()
          })
        },
        ie = function (t) {
          if (P(t)) return t
          var e = z(t) ? t : { each: t },
            r = De(e.ease),
            n = e.from || 0,
            i = parseFloat(e.base) || 0,
            s = {},
            o = n > 0 && n < 1,
            a = isNaN(n) || o,
            u = e.axis,
            l = n,
            c = n
          return (
            A(n)
              ? (l = c = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
              : !o && a && ((l = n[0]), (c = n[1])),
            function (t, o, f) {
              var h,
                d,
                p,
                g,
                m,
                v,
                _,
                y,
                b,
                x = (f || e).length,
                T = s[x]
              if (!T) {
                if (!(b = 'auto' === e.grid ? 0 : (e.grid || [1, w])[1])) {
                  for (
                    _ = -w;
                    _ < (_ = f[b++].getBoundingClientRect().left) && b < x;

                  );
                  b < x && b--
                }
                for (
                  T = s[x] = [],
                    h = a ? Math.min(b, x) * l - 0.5 : n % b,
                    d = b === w ? 0 : a ? (x * c) / b - 0.5 : (n / b) | 0,
                    _ = 0,
                    y = w,
                    v = 0;
                  v < x;
                  v++
                )
                  (p = (v % b) - h),
                    (g = d - ((v / b) | 0)),
                    (T[v] = m =
                      u ? Math.abs('y' === u ? g : p) : S(p * p + g * g)),
                    m > _ && (_ = m),
                    m < y && (y = m)
                'random' === n && ne(T),
                  (T.max = _ - y),
                  (T.min = y),
                  (T.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > x
                          ? x - 1
                          : u
                          ? 'y' === u
                            ? x / b
                            : b
                          : Math.max(b, x / b)) ||
                      0) * ('edges' === n ? -1 : 1)),
                  (T.b = x < 0 ? i - x : i),
                  (T.u = Kt(e.amount || e.each) || 0),
                  (r = r && x < 0 ? Pe(r) : r)
              }
              return (
                (x = (T[t] - T.min) / T.max || 0),
                mt(T.b + (r ? r(x) : x) * T.v) + T.u
              )
            }
          )
        },
        se = function (t) {
          var e = Math.pow(10, ((t + '').split('.')[1] || '').length)
          return function (r) {
            var n = mt(Math.round(parseFloat(r) / t) * t * e)
            return (n - (n % 1)) / e + (R(r) ? 0 : Kt(r))
          }
        },
        oe = function (t, e) {
          var r,
            n,
            i = $(t)
          return (
            !i &&
              z(t) &&
              ((r = i = t.radius || w),
              t.values
                ? ((t = ee(t.values)), (n = !R(t[0])) && (r *= r))
                : (t = se(t.increment))),
            Qt(
              e,
              i
                ? P(t)
                  ? function (e) {
                      return (n = t(e)), Math.abs(n - e) <= r ? n : e
                    }
                  : function (e) {
                      for (
                        var i,
                          s,
                          o = parseFloat(n ? e.x : e),
                          a = parseFloat(n ? e.y : 0),
                          u = w,
                          l = 0,
                          c = t.length;
                        c--;

                      )
                        (i = n
                          ? (i = t[c].x - o) * i + (s = t[c].y - a) * s
                          : Math.abs(t[c] - o)) < u && ((u = i), (l = c))
                      return (
                        (l = !r || u <= r ? t[l] : e),
                        n || l === e || R(e) ? l : l + Kt(e)
                      )
                    }
                : se(t)
            )
          )
        },
        ae = function (t, e, r, n) {
          return Qt($(t) ? !e : !0 === r ? !!(r = 0) : !n, function () {
            return $(t)
              ? t[~~(Math.random() * t.length)]
              : (r = r || 1e-5) &&
                  (n = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r
                    ) *
                      r *
                      n
                  ) / n
          })
        },
        ue = function (t, e, r) {
          return Qt(r, function (r) {
            return t[~~e(r)]
          })
        },
        le = function (t) {
          for (var e, r, n, i, s = 0, o = ''; ~(e = t.indexOf('random(', s)); )
            (n = t.indexOf(')', e)),
              (i = '[' === t.charAt(e + 7)),
              (r = t.substr(e + 7, n - e - 7).match(i ? H : Y)),
              (o +=
                t.substr(s, e - s) +
                ae(i ? r : +r[0], i ? 0 : +r[1], +r[2] || 1e-5)),
              (s = n + 1)
          return o + t.substr(s, t.length - s)
        },
        ce = function (t, e, r, n, i) {
          var s = e - t,
            o = n - r
          return Qt(i, function (e) {
            return r + (((e - t) / s) * o || 0)
          })
        },
        fe = function (t, e, r) {
          var n,
            i,
            s,
            o = t.labels,
            a = w
          for (n in o)
            (i = o[n] - e) < 0 == !!r &&
              i &&
              a > (i = Math.abs(i)) &&
              ((s = n), (a = i))
          return s
        },
        he = function (t, e, r) {
          var n,
            i,
            o,
            a = t.vars,
            u = a[e],
            l = s,
            c = t._ctx
          if (u)
            return (
              (n = a[e + 'Params']),
              (i = a.callbackScope || t),
              r && it.length && yt(),
              c && (s = c),
              (o = n ? u.apply(i, n) : u.call(i)),
              (s = l),
              o
            )
        },
        de = function (t) {
          return (
            At(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!i),
            t.progress() < 1 && he(t, 'onInterrupt'),
            t
          )
        },
        pe = [],
        ge = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), F() || t.headless)) {
              var e = t.name,
                r = P(t),
                n =
                  e && !r && t.init
                    ? function () {
                        this._props = []
                      }
                    : t,
                i = {
                  init: J,
                  render: or,
                  add: Ve,
                  kill: ur,
                  modifier: ar,
                  rawVars: 0
                },
                s = {
                  targetTest: 0,
                  get: 0,
                  getSetter: rr,
                  aliases: {},
                  register: 0
                }
              if ((Ce(), t !== n)) {
                if (ot[e]) return
                Tt(n, Tt(Ct(t, i), s)),
                  Ot(n.prototype, Ot(i, Ct(t, s))),
                  (ot[(n.prop = e)] = n),
                  t.targetTest && (lt.push(n), (nt[e] = 1)),
                  (e =
                    ('css' === e
                      ? 'CSS'
                      : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin')
              }
              K(e, n), t.register && t.register(Or, n, fr)
            } else pe.push(t)
        },
        me = 255,
        ve = {
          aqua: [0, me, me],
          lime: [0, me, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, me],
          navy: [0, 0, 128],
          white: [me, me, me],
          olive: [128, 128, 0],
          yellow: [me, me, 0],
          orange: [me, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [me, 0, 0],
          pink: [me, 192, 203],
          cyan: [0, me, me],
          transparent: [me, me, me, 0]
        },
        _e = function (t, e, r) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (r - e) * t * 6
              : t < 0.5
              ? r
              : 3 * t < 2
              ? e + (r - e) * (2 / 3 - t) * 6
              : e) *
              me +
              0.5) |
            0
          )
        },
        ye = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            f,
            h,
            d = t ? (R(t) ? [t >> 16, (t >> 8) & me, t & me] : 0) : ve.black
          if (!d) {
            if (
              (',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), ve[t])
            )
              d = ve[t]
            else if ('#' === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((n = t.charAt(1)),
                  (i = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t =
                    '#' +
                    n +
                    n +
                    i +
                    i +
                    s +
                    s +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                9 === t.length)
              )
                return [
                  (d = parseInt(t.substr(1, 6), 16)) >> 16,
                  (d >> 8) & me,
                  d & me,
                  parseInt(t.substr(7), 16) / 255
                ]
              d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & me, t & me]
            } else if ('hsl' === t.substr(0, 3))
              if (((d = h = t.match(Y)), e)) {
                if (~t.indexOf('='))
                  return (d = t.match(N)), r && d.length < 4 && (d[3] = 1), d
              } else
                (o = (+d[0] % 360) / 360),
                  (a = +d[1] / 100),
                  (n =
                    2 * (u = +d[2] / 100) -
                    (i = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                  d.length > 3 && (d[3] *= 1),
                  (d[0] = _e(o + 1 / 3, n, i)),
                  (d[1] = _e(o, n, i)),
                  (d[2] = _e(o - 1 / 3, n, i))
            else d = t.match(Y) || ve.transparent
            d = d.map(Number)
          }
          return (
            e &&
              !h &&
              ((n = d[0] / me),
              (i = d[1] / me),
              (s = d[2] / me),
              (u = ((l = Math.max(n, i, s)) + (c = Math.min(n, i, s))) / 2),
              l === c
                ? (o = a = 0)
                : ((f = l - c),
                  (a = u > 0.5 ? f / (2 - l - c) : f / (l + c)),
                  (o =
                    l === n
                      ? (i - s) / f + (i < s ? 6 : 0)
                      : l === i
                      ? (s - n) / f + 2
                      : (n - i) / f + 4),
                  (o *= 60)),
              (d[0] = ~~(o + 0.5)),
              (d[1] = ~~(100 * a + 0.5)),
              (d[2] = ~~(100 * u + 0.5))),
            r && d.length < 4 && (d[3] = 1),
            d
          )
        },
        be = function (t) {
          var e = [],
            r = [],
            n = -1
          return (
            t.split(we).forEach(function (t) {
              var i = t.match(X) || []
              e.push.apply(e, i), r.push((n += i.length + 1))
            }),
            (e.c = r),
            e
          )
        },
        xe = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a = '',
            u = (t + a).match(we),
            l = e ? 'hsla(' : 'rgba(',
            c = 0
          if (!u) return t
          if (
            ((u = u.map(function (t) {
              return (
                (t = ye(t, e, 1)) &&
                l +
                  (e
                    ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3]
                    : t.join(',')) +
                  ')'
              )
            })),
            r && ((s = be(t)), (n = r.c).join(a) !== s.c.join(a)))
          )
            for (o = (i = t.replace(we, '1').split(X)).length - 1; c < o; c++)
              a +=
                i[c] +
                (~n.indexOf(c)
                  ? u.shift() || l + '0,0,0,0)'
                  : (s.length ? s : u.length ? u : r).shift())
          if (!i)
            for (o = (i = t.split(we)).length - 1; c < o; c++) a += i[c] + u[c]
          return a + i[o]
        },
        we = (function () {
          var t,
            e =
              '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b'
          for (t in ve) e += '|' + t + '\\b'
          return new RegExp(e + ')', 'gi')
        })(),
        Te = /hsl[a]?\(/,
        Oe = function (t) {
          var e,
            r = t.join(' ')
          if (((we.lastIndex = 0), we.test(r)))
            return (
              (e = Te.test(r)),
              (t[1] = xe(t[1], e)),
              (t[0] = xe(t[0], e, be(t[1]))),
              !0
            )
        },
        ke = (function () {
          var t,
            e,
            r,
            n,
            i,
            s,
            o = Date.now,
            f = 500,
            h = 33,
            p = o(),
            g = p,
            m = 1e3 / 240,
            v = m,
            _ = [],
            y = function r (a) {
              var u,
                l,
                c,
                d,
                y = o() - g,
                b = !0 === a
              if (
                ((y > f || y < 0) && (p += y - h),
                ((u = (c = (g += y) - p) - v) > 0 || b) &&
                  ((d = ++n.frame),
                  (i = c - 1e3 * n.time),
                  (n.time = c /= 1e3),
                  (v += u + (u >= m ? 4 : m - u)),
                  (l = 1)),
                b || (t = e(r)),
                l)
              )
                for (s = 0; s < _.length; s++) _[s](c, i, d, a)
            }
          return (n = {
            time: 0,
            frame: 0,
            tick: function () {
              y(!0)
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60))
            },
            wake: function () {
              c &&
                (!u &&
                  F() &&
                  ((a = u = window),
                  (l = a.document || {}),
                  (W.gsap = Or),
                  (a.gsapVersions || (a.gsapVersions = [])).push(Or.version),
                  G(j || a.GreenSockGlobals || (!a.gsap && a) || {}),
                  pe.forEach(ge)),
                (r =
                  'undefined' != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && n.sleep(),
                (e =
                  r ||
                  function (t) {
                    return setTimeout(t, (v - 1e3 * n.time + 1) | 0)
                  }),
                (d = 1),
                y(2))
            },
            sleep: function () {
              ;(r ? cancelAnimationFrame : clearTimeout)(t), (d = 0), (e = J)
            },
            lagSmoothing: function (t, e) {
              ;(f = t || 1 / 0), (h = Math.min(e || 33, f))
            },
            fps: function (t) {
              ;(m = 1e3 / (t || 240)), (v = 1e3 * n.time + m)
            },
            add: function (t, e, r) {
              var i = e
                ? function (e, r, s, o) {
                    t(e, r, s, o), n.remove(i)
                  }
                : t
              return n.remove(t), _[r ? 'unshift' : 'push'](i), Ce(), i
            },
            remove: function (t, e) {
              ~(e = _.indexOf(t)) && _.splice(e, 1) && s >= e && s--
            },
            _listeners: _
          })
        })(),
        Ce = function () {
          return !d && ke.wake()
        },
        Se = {},
        Ee = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        Ae = function (t) {
          for (
            var e,
              r,
              n,
              i = {},
              s = t.substr(1, t.length - 3).split(':'),
              o = s[0],
              a = 1,
              u = s.length;
            a < u;
            a++
          )
            (r = s[a]),
              (e = a !== u - 1 ? r.lastIndexOf(',') : r.length),
              (n = r.substr(0, e)),
              (i[o] = isNaN(n) ? n.replace(Me, '').trim() : +n),
              (o = r.substr(e + 1).trim())
          return i
        },
        Pe = function (t) {
          return function (e) {
            return 1 - t(1 - e)
          }
        },
        Re = function t (e, r) {
          for (var n, i = e._first; i; )
            i instanceof Ye
              ? t(i, r)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === r ||
                (i.timeline
                  ? t(i.timeline, r)
                  : ((n = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = n),
                    (i._yoyo = r))),
              (i = i._next)
        },
        De = function (t, e) {
          return (
            (t &&
              (P(t)
                ? t
                : Se[t] ||
                  (function (t) {
                    var e,
                      r,
                      n,
                      i,
                      s = (t + '').split('('),
                      o = Se[s[0]]
                    return o && s.length > 1 && o.config
                      ? o.config.apply(
                          null,
                          ~t.indexOf('{')
                            ? [Ae(s[1])]
                            : ((e = t),
                              (r = e.indexOf('(') + 1),
                              (n = e.indexOf(')')),
                              (i = e.indexOf('(', r)),
                              e.substring(
                                r,
                                ~i && i < n ? e.indexOf(')', n + 1) : n
                              ))
                                .split(',')
                                .map(xt)
                        )
                      : Se._CE && Ee.test(t)
                      ? Se._CE('', t)
                      : o
                  })(t))) ||
            e
          )
        },
        ze = function (t, e, r, n) {
          void 0 === r &&
            (r = function (t) {
              return 1 - e(1 - t)
            }),
            void 0 === n &&
              (n = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
              })
          var i,
            s = { easeIn: e, easeOut: r, easeInOut: n }
          return (
            pt(t, function (t) {
              for (var e in ((Se[t] = W[t] = s),
              (Se[(i = t.toLowerCase())] = r),
              s))
                Se[
                  i +
                    ('easeIn' === e
                      ? '.in'
                      : 'easeOut' === e
                      ? '.out'
                      : '.inOut')
                ] = Se[t + '.' + e] = s[e]
            }),
            s
          )
        },
        Ie = function (t) {
          return function (e) {
            return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2
          }
        },
        Fe = function t (e, r, n) {
          var i = r >= 1 ? r : 1,
            s = (n || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
            o = (s / O) * (Math.asin(1 / i) || 0),
            a = function (t) {
              return 1 === t ? 1 : i * Math.pow(2, -10 * t) * M((t - o) * s) + 1
            },
            u =
              'out' === e
                ? a
                : 'in' === e
                ? function (t) {
                    return 1 - a(1 - t)
                  }
                : Ie(a)
          return (
            (s = O / s),
            (u.config = function (r, n) {
              return t(e, r, n)
            }),
            u
          )
        },
        Be = function t (e, r) {
          void 0 === r && (r = 1.70158)
          var n = function (t) {
              return t ? --t * t * ((r + 1) * t + r) + 1 : 0
            },
            i =
              'out' === e
                ? n
                : 'in' === e
                ? function (t) {
                    return 1 - n(1 - t)
                  }
                : Ie(n)
          return (
            (i.config = function (r) {
              return t(e, r)
            }),
            i
          )
        }
      pt('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
        var r = e < 5 ? e + 1 : e
        ze(
          t + ',Power' + (r - 1),
          e
            ? function (t) {
                return Math.pow(t, r)
              }
            : function (t) {
                return t
              },
          function (t) {
            return 1 - Math.pow(1 - t, r)
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, r) / 2
              : 1 - Math.pow(2 * (1 - t), r) / 2
          }
        )
      }),
        (Se.Linear.easeNone = Se.none = Se.Linear.easeIn),
        ze('Elastic', Fe('in'), Fe('out'), Fe()),
        (p = 7.5625),
        (v = 2 * (m = 1 / (g = 2.75))),
        (_ = 2.5 * m),
        ze(
          'Bounce',
          function (t) {
            return 1 - y(1 - t)
          },
          (y = function (t) {
            return t < m
              ? p * t * t
              : t < v
              ? p * Math.pow(t - 1.5 / g, 2) + 0.75
              : t < _
              ? p * (t -= 2.25 / g) * t + 0.9375
              : p * Math.pow(t - 2.625 / g, 2) + 0.984375
          })
        ),
        ze('Expo', function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0
        }),
        ze('Circ', function (t) {
          return -(S(1 - t * t) - 1)
        }),
        ze('Sine', function (t) {
          return 1 === t ? 1 : 1 - E(t * k)
        }),
        ze('Back', Be('in'), Be('out'), Be()),
        (Se.SteppedEase =
          Se.steps =
          W.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1)
                var r = 1 / t,
                  n = t + (e ? 0 : 1),
                  i = e ? 1 : 0
                return function (t) {
                  return (((n * Zt(0, 0.99999999, t)) | 0) + i) * r
                }
              }
            }),
        (x.ease = Se['quad.out']),
        pt(
          'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
          function (t) {
            return (ct += t + ',' + t + 'Params,')
          }
        )
      var Le = function (t, e) {
          ;(this.id = C++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : dt),
            (this.set = e ? e.getSetter : rr)
        },
        $e = (function () {
          function t (t) {
            ;(this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Ht(this, +t.duration, 1, 1),
              (this.data = t.data),
              s && ((this._ctx = s), s.data.push(this)),
              d || ke.wake()
          }
          var e = t.prototype
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Ht(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                  ))
                : this._tDur
            }),
            (e.totalTime = function (t, e) {
              if ((Ce(), !arguments.length)) return this._tTime
              var r = this._dp
              if (r && r.smoothChildTiming && this._ts) {
                for (
                  Lt(this, t), !r._dp || r.parent || $t(r, this);
                  r && r.parent;

                )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent)
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Yt(this._dp, this, this._start - this._delay)
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === T) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), bt(this, t, e)),
                this
              )
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + zt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e
                  )
                : this._time
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() > 0
                ? 1
                : 0
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      zt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.rawTime() > 0
                ? 1
                : 0
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? It(this._tTime, r) + 1
                : 1
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts
              if (this._rts === t) return this
              var r =
                this.parent && this._ts
                  ? Ft(this.parent._time, this)
                  : this._tTime
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  Zt(-Math.abs(this._delay), this._tDur, r),
                  !1 !== e
                ),
                Bt(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent)
                  return t
                })(this)
              )
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ce(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== T &&
                            (this._tTime -= T)
                        ))),
                  this)
                : this._ps
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t
                var e = this.parent || this._dp
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Yt(e, this, t - this._delay),
                  this
                )
              }
              return this._start
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (I(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              )
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? Ft(e.rawTime(t), this)
                  : this._tTime
                : this._tTime
            }),
            (e.revert = function (t) {
              void 0 === t && (t = rt)
              var e = i
              return (
                (i = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                'nested' !== this.data && !1 !== t.kill && this.kill(),
                (i = e),
                this
              )
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp)
              return !this.parent && this._sat ? this._sat.globalTime(t) : r
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Ut(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time
                return (this._rDelay = t), Ut(this), e ? this.time(e) : this
              }
              return this._rDelay
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo
            }),
            (e.seek = function (t, e) {
              return this.totalTime(jt(this, t), I(e))
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, I(e))
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              )
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0)
            }),
            (e.resume = function () {
              return this.paused(!1)
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              )
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - T
                )
              )
            }),
            (e.eventCallback = function (t, e, r) {
              var n = this.vars
              return arguments.length > 1
                ? (e
                    ? ((n[t] = e),
                      r && (n[t + 'Params'] = r),
                      'onUpdate' === t && (this._onUpdate = e))
                    : delete n[t],
                  this)
                : n[t]
            }),
            (e.then = function (t) {
              var e = this
              return new Promise(function (r) {
                var n = P(t) ? t : wt,
                  i = function () {
                    var t = e.then
                    ;(e.then = null),
                      P(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                      r(n),
                      (e.then = t)
                  }
                ;(e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i)
              })
            }),
            (e.kill = function () {
              de(this)
            }),
            t
          )
        })()
      Tt($e.prototype, {
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
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
      })
      var Ye = (function (r) {
        function n (e, n) {
          var i
          return (
            void 0 === e && (e = {}),
            ((i = r.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = I(e.sortChildren)),
            o && Yt(e.parent || o, t(i), n),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && Nt(t(i), e.scrollTrigger),
            i
          )
        }
        e(n, r)
        var s = n.prototype
        return (
          (s.to = function (t, e, r) {
            return Gt(0, arguments, this), this
          }),
          (s.from = function (t, e, r) {
            return Gt(1, arguments, this), this
          }),
          (s.fromTo = function (t, e, r, n) {
            return Gt(2, arguments, this), this
          }),
          (s.set = function (t, e, r) {
            return (
              (e.duration = 0),
              (e.parent = this),
              St(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ze(t, e, jt(this, r), 1),
              this
            )
          }),
          (s.call = function (t, e, r) {
            return Yt(this, Ze.delayedCall(0, t, e), r)
          }),
          (s.staggerTo = function (t, e, r, n, i, s, o) {
            return (
              (r.duration = e),
              (r.stagger = r.stagger || n),
              (r.onComplete = s),
              (r.onCompleteParams = o),
              (r.parent = this),
              new Ze(t, r, jt(this, i)),
              this
            )
          }),
          (s.staggerFrom = function (t, e, r, n, i, s, o) {
            return (
              (r.runBackwards = 1),
              (St(r).immediateRender = I(r.immediateRender)),
              this.staggerTo(t, e, r, n, i, s, o)
            )
          }),
          (s.staggerFromTo = function (t, e, r, n, i, s, o, a) {
            return (
              (n.startAt = r),
              (St(n).immediateRender = I(n.immediateRender)),
              this.staggerTo(t, e, n, i, s, o, a)
            )
          }),
          (s.render = function (t, e, r) {
            var n,
              s,
              a,
              u,
              l,
              c,
              f,
              h,
              d,
              p,
              g,
              m,
              v = this._time,
              _ = this._dirty ? this.totalDuration() : this._tDur,
              y = this._dur,
              b = t <= 0 ? 0 : mt(t),
              x = this._zTime < 0 != t < 0 && (this._initted || !y)
            if (
              (this !== o && b > _ && t >= 0 && (b = _),
              b !== this._tTime || r || x)
            ) {
              if (
                (v !== this._time &&
                  y &&
                  ((b += this._time - v), (t += this._time - v)),
                (n = b),
                (d = this._start),
                (c = !(h = this._ts)),
                x && (y || (v = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((g = this._yoyo),
                  (l = y + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * l + t, e, r)
                if (
                  ((n = mt(b % l)),
                  b === _
                    ? ((u = this._repeat), (n = y))
                    : ((u = ~~(b / l)) && u === b / l && ((n = y), u--),
                      n > y && (n = y)),
                  (p = It(this._tTime, l)),
                  !v &&
                    this._tTime &&
                    p !== u &&
                    this._tTime - p * l - this._dur <= 0 &&
                    (p = u),
                  g && 1 & u && ((n = y - n), (m = 1)),
                  u !== p && !this._lock)
                ) {
                  var w = g && 1 & p,
                    O = w === (g && 1 & u)
                  if (
                    (u < p && (w = !w),
                    (v = w ? 0 : b % y ? y : b),
                    (this._lock = 1),
                    (this.render(v || (m ? 0 : mt(u * l)), e, !y)._lock = 0),
                    (this._tTime = b),
                    !e && this.parent && he(this, 'onRepeat'),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (v && v !== this._time) ||
                      c !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this
                  if (
                    ((y = this._dur),
                    (_ = this._tDur),
                    O &&
                      ((this._lock = 2),
                      (v = w ? y : -1e-4),
                      this.render(v, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !c)
                  )
                    return this
                  Re(this, m)
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((f = (function (t, e, r) {
                    var n
                    if (r > e)
                      for (n = t._first; n && n._start <= r; ) {
                        if ('isPause' === n.data && n._start > e) return n
                        n = n._next
                      }
                    else
                      for (n = t._last; n && n._start >= r; ) {
                        if ('isPause' === n.data && n._start < e) return n
                        n = n._prev
                      }
                  })(this, mt(v), mt(n))),
                  f && (b -= n - (n = f._start))),
                (this._tTime = b),
                (this._time = n),
                (this._act = !h),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (v = 0)),
                !v && n && !e && !u && (he(this, 'onStart'), this._tTime !== b))
              )
                return this
              if (n >= v && t >= 0)
                for (s = this._first; s; ) {
                  if (
                    ((a = s._next),
                    (s._act || n >= s._start) && s._ts && f !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, r)
                    if (
                      (s.render(
                        s._ts > 0
                          ? (n - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (n - s._start) * s._ts,
                        e,
                        r
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      ;(f = 0), a && (b += this._zTime = -1e-8)
                      break
                    }
                  }
                  s = a
                }
              else {
                s = this._last
                for (var k = t < 0 ? t : n; s; ) {
                  if (
                    ((a = s._prev), (s._act || k <= s._end) && s._ts && f !== s)
                  ) {
                    if (s.parent !== this) return this.render(t, e, r)
                    if (
                      (s.render(
                        s._ts > 0
                          ? (k - s._start) * s._ts
                          : (s._dirty ? s.totalDuration() : s._tDur) +
                              (k - s._start) * s._ts,
                        e,
                        r || (i && (s._initted || s._startAt))
                      ),
                      n !== this._time || (!this._ts && !c))
                    ) {
                      ;(f = 0), a && (b += this._zTime = k ? -1e-8 : T)
                      break
                    }
                  }
                  s = a
                }
              }
              if (
                f &&
                !e &&
                (this.pause(),
                (f.render(n >= v ? 0 : -1e-8)._zTime = n >= v ? 1 : -1),
                this._ts)
              )
                return (this._start = d), Bt(this), this.render(t, e, r)
              this._onUpdate && !e && he(this, 'onUpdate', !0),
                ((b === _ && this._tTime >= this.totalDuration()) ||
                  (!b && v)) &&
                  ((d !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !y) &&
                      ((b === _ && this._ts > 0) || (!b && this._ts < 0)) &&
                      At(this, 1),
                    e ||
                      (t < 0 && !v) ||
                      (!b && !v && _) ||
                      (he(
                        this,
                        b === _ && t >= 0 ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(b < _ && this.timeScale() > 0) &&
                        this._prom())))
            }
            return this
          }),
          (s.add = function (t, e) {
            var r = this
            if ((R(e) || (e = jt(this, e, t)), !(t instanceof $e))) {
              if ($(t))
                return (
                  t.forEach(function (t) {
                    return r.add(t, e)
                  }),
                  this
                )
              if (A(t)) return this.addLabel(t, e)
              if (!P(t)) return this
              t = Ze.delayedCall(0, t)
            }
            return this !== t ? Yt(this, t, e) : this
          }),
          (s.getChildren = function (t, e, r, n) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              void 0 === n && (n = -w)
            for (var i = [], s = this._first; s; )
              s._start >= n &&
                (s instanceof Ze
                  ? e && i.push(s)
                  : (r && i.push(s),
                    t && i.push.apply(i, s.getChildren(!0, e, r)))),
                (s = s._next)
            return i
          }),
          (s.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
              if (e[r].vars.id === t) return e[r]
          }),
          (s.remove = function (t) {
            return A(t)
              ? this.removeLabel(t)
              : P(t)
              ? this.killTweensOf(t)
              : (Mt(this, t),
                t === this._recent && (this._recent = this._last),
                Pt(this))
          }),
          (s.totalTime = function (t, e) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = mt(
                    ke.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts)
                  )),
                r.prototype.totalTime.call(this, t, e),
                (this._forcing = 0),
                this)
              : this._tTime
          }),
          (s.addLabel = function (t, e) {
            return (this.labels[t] = jt(this, e)), this
          }),
          (s.removeLabel = function (t) {
            return delete this.labels[t], this
          }),
          (s.addPause = function (t, e, r) {
            var n = Ze.delayedCall(0, e || J, r)
            return (
              (n.data = 'isPause'),
              (this._hasPause = 1),
              Yt(this, n, jt(this, t))
            )
          }),
          (s.removePause = function (t) {
            var e = this._first
            for (t = jt(this, t); e; )
              e._start === t && 'isPause' === e.data && At(e), (e = e._next)
          }),
          (s.killTweensOf = function (t, e, r) {
            for (var n = this.getTweensOf(t, r), i = n.length; i--; )
              Ne !== n[i] && n[i].kill(t, e)
            return this
          }),
          (s.getTweensOf = function (t, e) {
            for (var r, n = [], i = ee(t), s = this._first, o = R(e); s; )
              s instanceof Ze
                ? _t(s._targets, i) &&
                  (o
                    ? (!Ne || (s._initted && s._ts)) &&
                      s.globalTime(0) <= e &&
                      s.globalTime(s.totalDuration()) > e
                    : !e || s.isActive()) &&
                  n.push(s)
                : (r = s.getTweensOf(i, e)).length && n.push.apply(n, r),
                (s = s._next)
            return n
          }),
          (s.tweenTo = function (t, e) {
            e = e || {}
            var r,
              n = this,
              i = jt(n, t),
              s = e,
              o = s.startAt,
              a = s.onStart,
              u = s.onStartParams,
              l = s.immediateRender,
              c = Ze.to(
                n,
                Tt(
                  {
                    ease: e.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: 'auto',
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (o && 'time' in o ? o.time : n._time)) /
                          n.timeScale()
                      ) ||
                      T,
                    onStart: function () {
                      if ((n.pause(), !r)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (o && 'time' in o ? o.time : n._time)) /
                              n.timeScale()
                          )
                        c._dur !== t && Ht(c, t, 0, 1).render(c._time, !0, !0),
                          (r = 1)
                      }
                      a && a.apply(c, u || [])
                    }
                  },
                  e
                )
              )
            return l ? c.render(0) : c
          }),
          (s.tweenFromTo = function (t, e, r) {
            return this.tweenTo(e, Tt({ startAt: { time: jt(this, t) } }, r))
          }),
          (s.recent = function () {
            return this._recent
          }),
          (s.nextLabel = function (t) {
            return void 0 === t && (t = this._time), fe(this, jt(this, t))
          }),
          (s.previousLabel = function (t) {
            return void 0 === t && (t = this._time), fe(this, jt(this, t), 1)
          }),
          (s.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + T)
          }),
          (s.shiftChildren = function (t, e, r) {
            void 0 === r && (r = 0)
            for (var n, i = this._first, s = this.labels; i; )
              i._start >= r && ((i._start += t), (i._end += t)), (i = i._next)
            if (e) for (n in s) s[n] >= r && (s[n] += t)
            return Pt(this)
          }),
          (s.invalidate = function (t) {
            var e = this._first
            for (this._lock = 0; e; ) e.invalidate(t), (e = e._next)
            return r.prototype.invalidate.call(this, t)
          }),
          (s.clear = function (t) {
            void 0 === t && (t = !0)
            for (var e, r = this._first; r; )
              (e = r._next), this.remove(r), (r = e)
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Pt(this)
            )
          }),
          (s.totalDuration = function (t) {
            var e,
              r,
              n,
              i = 0,
              s = this,
              a = s._last,
              u = w
            if (arguments.length)
              return s.timeScale(
                (s._repeat < 0 ? s.duration() : s.totalDuration()) /
                  (s.reversed() ? -t : t)
              )
            if (s._dirty) {
              for (n = s.parent; a; )
                (e = a._prev),
                  a._dirty && a.totalDuration(),
                  (r = a._start) > u && s._sort && a._ts && !s._lock
                    ? ((s._lock = 1), (Yt(s, a, r - a._delay, 1)._lock = 0))
                    : (u = r),
                  r < 0 &&
                    a._ts &&
                    ((i -= r),
                    ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                      ((s._start += r / s._ts),
                      (s._time -= r),
                      (s._tTime -= r)),
                    s.shiftChildren(-r, !1, -Infinity),
                    (u = 0)),
                  a._end > i && a._ts && (i = a._end),
                  (a = e)
              Ht(s, s === o && s._time > i ? s._time : i, 1, 1), (s._dirty = 0)
            }
            return s._tDur
          }),
          (n.updateRoot = function (t) {
            if ((o._ts && (bt(o, Ft(t, o)), (f = ke.frame)), ke.frame >= ut)) {
              ut += b.autoSleep || 120
              var e = o._first
              if ((!e || !e._ts) && b.autoSleep && ke._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next
                e || ke.sleep()
              }
            }
          }),
          n
        )
      })($e)
      Tt(Ye.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
      var Ne,
        Xe,
        qe = function (t, e, r, n, i, s, o) {
          var a,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            g = new fr(this._pt, t, e, 0, 1, sr, null, i),
            m = 0,
            v = 0
          for (
            g.b = r,
              g.e = n,
              r += '',
              (d = ~(n += '').indexOf('random(')) && (n = le(n)),
              s && (s((p = [r, n]), t, e), (r = p[0]), (n = p[1])),
              u = r.match(q) || [];
            (a = q.exec(n));

          )
            (c = a[0]),
              (f = n.substring(m, a.index)),
              l ? (l = (l + 1) % 5) : 'rgba(' === f.substr(-5) && (l = 1),
              c !== u[v++] &&
                ((h = parseFloat(u[v - 1]) || 0),
                (g._pt = {
                  _next: g._pt,
                  p: f || 1 === v ? f : ',',
                  s: h,
                  c: '=' === c.charAt(1) ? vt(h, c) - h : parseFloat(c) - h,
                  m: l && l < 4 ? Math.round : 0
                }),
                (m = q.lastIndex))
          return (
            (g.c = m < n.length ? n.substring(m, n.length) : ''),
            (g.fp = o),
            (V.test(n) || d) && (g.e = 0),
            (this._pt = g),
            g
          )
        },
        Ve = function (t, e, r, n, i, s, o, a, u, l) {
          P(n) && (n = n(i || 0, t, s))
          var c,
            f = t[e],
            h =
              'get' !== r
                ? r
                : P(f)
                ? u
                  ? t[
                      e.indexOf('set') || !P(t['get' + e.substr(3)])
                        ? e
                        : 'get' + e.substr(3)
                    ](u)
                  : t[e]()
                : f,
            d = P(f) ? (u ? tr : Je) : Ke
          if (
            (A(n) &&
              (~n.indexOf('random(') && (n = le(n)),
              '=' === n.charAt(1) &&
                ((c = vt(h, n) + (Kt(h) || 0)) || 0 === c) &&
                (n = c)),
            !l || h !== n || Xe)
          )
            return isNaN(h * n) || '' === n
              ? (!f && !(e in t) && Q(e, n),
                qe.call(this, t, e, h, n, d, a || b.stringFilter, u))
              : ((c = new fr(
                  this._pt,
                  t,
                  e,
                  +h || 0,
                  n - (h || 0),
                  'boolean' == typeof f ? ir : nr,
                  0,
                  d
                )),
                u && (c.fp = u),
                o && c.modifier(o, this, t),
                (this._pt = c))
        },
        He = function (t, e, r, n, i, s) {
          var o, a, u, l
          if (
            ot[t] &&
            !1 !==
              (o = new ot[t]()).init(
                i,
                o.rawVars
                  ? e[t]
                  : (function (t, e, r, n, i) {
                      if (
                        (P(t) && (t = je(t, i, e, r, n)),
                        !z(t) || (t.style && t.nodeType) || $(t) || L(t))
                      )
                        return A(t) ? je(t, i, e, r, n) : t
                      var s,
                        o = {}
                      for (s in t) o[s] = je(t[s], i, e, r, n)
                      return o
                    })(e[t], n, i, s, r),
                r,
                n,
                s
              ) &&
            ((r._pt = a =
              new fr(r._pt, i, t, 0, 1, o.render, o, 0, o.priority)),
            r !== h)
          )
            for (
              u = r._ptLookup[r._targets.indexOf(i)], l = o._props.length;
              l--;

            )
              u[o._props[l]] = a
          return o
        },
        Ue = function t (e, r, s) {
          var a,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            g,
            m,
            v,
            _,
            y,
            b = e.vars,
            O = b.ease,
            k = b.startAt,
            C = b.immediateRender,
            S = b.lazy,
            E = b.onUpdate,
            M = b.runBackwards,
            A = b.yoyoEase,
            P = b.keyframes,
            R = b.autoRevert,
            D = e._dur,
            z = e._startAt,
            F = e._targets,
            B = e.parent,
            L = B && 'nested' === B.data ? B.vars.targets : F,
            $ = 'auto' === e._overwrite && !n,
            Y = e.timeline
          if (
            (Y && (!P || !O) && (O = 'none'),
            (e._ease = De(O, x.ease)),
            (e._yEase = A ? Pe(De(!0 === A ? O : A, x.ease)) : 0),
            A &&
              e._yoyo &&
              !e._repeat &&
              ((A = e._yEase), (e._yEase = e._ease), (e._ease = A)),
            (e._from = !Y && !!b.runBackwards),
            !Y || (P && !b.stagger))
          ) {
            if (
              ((_ = (p = F[0] ? ht(F[0]).harness : 0) && b[p.prop]),
              (a = Ct(b, nt)),
              z &&
                (z._zTime < 0 && z.progress(1),
                r < 0 && M && C && !R
                  ? z.render(-1, !0)
                  : z.revert(M && D ? et : tt),
                (z._lazy = 0)),
              k)
            ) {
              if (
                (At(
                  (e._startAt = Ze.set(
                    F,
                    Tt(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: B,
                        immediateRender: !0,
                        lazy: !z && I(S),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          E &&
                          function () {
                            return he(e, 'onUpdate')
                          },
                        stagger: 0
                      },
                      k
                    )
                  ))
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 && (i || (!C && !R)) && e._startAt.revert(et),
                C && D && r <= 0 && s <= 0)
              )
                return void (r && (e._zTime = r))
            } else if (M && D && !z)
              if (
                (r && (C = !1),
                (l = Tt(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: C && !z && I(S),
                    immediateRender: C,
                    stagger: 0,
                    parent: B
                  },
                  a
                )),
                _ && (l[p.prop] = _),
                At((e._startAt = Ze.set(F, l))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                r < 0 &&
                  (i ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                (e._zTime = r),
                C)
              ) {
                if (!r) return
              } else t(e._startAt, T, T)
            for (
              e._pt = e._ptCache = 0, S = (D && I(S)) || (S && !D), u = 0;
              u < F.length;
              u++
            ) {
              if (
                ((d = (f = F[u])._gsap || ft(F)[u]._gsap),
                (e._ptLookup[u] = m = {}),
                st[d.id] && it.length && yt(),
                (v = L === F ? u : L.indexOf(f)),
                p &&
                  !1 !== (g = new p()).init(f, _ || a, e, v, L) &&
                  ((e._pt = c =
                    new fr(e._pt, f, g.name, 0, 1, g.render, g, 0, g.priority)),
                  g._props.forEach(function (t) {
                    m[t] = c
                  }),
                  g.priority && (h = 1)),
                !p || _)
              )
                for (l in a)
                  ot[l] && (g = He(l, a, e, v, f, L))
                    ? g.priority && (h = 1)
                    : (m[l] = c =
                        Ve.call(e, f, l, 'get', a[l], v, L, 0, b.stringFilter))
              e._op && e._op[u] && e.kill(f, e._op[u]),
                $ &&
                  e._pt &&
                  ((Ne = e),
                  o.killTweensOf(f, m, e.globalTime(r)),
                  (y = !e.parent),
                  (Ne = 0)),
                e._pt && S && (st[d.id] = 1)
            }
            h && cr(e), e._onInit && e._onInit(e)
          }
          ;(e._onUpdate = E),
            (e._initted = (!e._op || e._pt) && !y),
            P && r <= 0 && Y.render(w, !0, !0)
        },
        We = function (t, e, r, n) {
          var i,
            s,
            o = e.ease || n || 'power1.inOut'
          if ($(e))
            (s = r[t] || (r[t] = [])),
              e.forEach(function (t, r) {
                return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o })
              })
          else
            for (i in e)
              (s = r[i] || (r[i] = [])),
                'ease' === i || s.push({ t: parseFloat(t), v: e[i], e: o })
        },
        je = function (t, e, r, n, i) {
          return P(t)
            ? t.call(e, r, n, i)
            : A(t) && ~t.indexOf('random(')
            ? le(t)
            : t
        },
        Ge = ct + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
        Qe = {}
      pt(Ge + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
        return (Qe[t] = 1)
      })
      var Ze = (function (r) {
        function s (e, i, s, a) {
          var u
          'number' == typeof i && ((s.duration = i), (i = s), (s = null))
          var l,
            c,
            f,
            h,
            d,
            p,
            g,
            m,
            v = (u = r.call(this, a ? i : St(i)) || this).vars,
            _ = v.duration,
            y = v.delay,
            x = v.immediateRender,
            w = v.stagger,
            T = v.overwrite,
            O = v.keyframes,
            k = v.defaults,
            C = v.scrollTrigger,
            S = v.yoyoEase,
            E = i.parent || o,
            M = ($(e) || L(e) ? R(e[0]) : 'length' in i) ? [e] : ee(e)
          if (
            ((u._targets = M.length
              ? ft(M)
              : Z(
                  'GSAP target ' + e + ' not found. https://gsap.com',
                  !b.nullTargetWarn
                ) || []),
            (u._ptLookup = []),
            (u._overwrite = T),
            O || w || B(_) || B(y))
          ) {
            if (
              ((i = u.vars),
              (l = u.timeline =
                new Ye({
                  data: 'nested',
                  defaults: k || {},
                  targets: E && 'nested' === E.data ? E.vars.targets : M
                })).kill(),
              (l.parent = l._dp = t(u)),
              (l._start = 0),
              w || B(_) || B(y))
            ) {
              if (((h = M.length), (g = w && ie(w)), z(w)))
                for (d in w) ~Ge.indexOf(d) && (m || (m = {}), (m[d] = w[d]))
              for (c = 0; c < h; c++)
                ((f = Ct(i, Qe)).stagger = 0),
                  S && (f.yoyoEase = S),
                  m && Ot(f, m),
                  (p = M[c]),
                  (f.duration = +je(_, t(u), c, p, M)),
                  (f.delay = (+je(y, t(u), c, p, M) || 0) - u._delay),
                  !w &&
                    1 === h &&
                    f.delay &&
                    ((u._delay = y = f.delay), (u._start += y), (f.delay = 0)),
                  l.to(p, f, g ? g(c, p, M) : 0),
                  (l._ease = Se.none)
              l.duration() ? (_ = y = 0) : (u.timeline = 0)
            } else if (O) {
              St(Tt(l.vars.defaults, { ease: 'none' })),
                (l._ease = De(O.ease || i.ease || 'none'))
              var A,
                P,
                D,
                F = 0
              if ($(O))
                O.forEach(function (t) {
                  return l.to(M, t, '>')
                }),
                  l.duration()
              else {
                for (d in ((f = {}), O))
                  'ease' === d || 'easeEach' === d || We(d, O[d], f, O.easeEach)
                for (d in f)
                  for (
                    A = f[d].sort(function (t, e) {
                      return t.t - e.t
                    }),
                      F = 0,
                      c = 0;
                    c < A.length;
                    c++
                  )
                    ((D = {
                      ease: (P = A[c]).e,
                      duration: ((P.t - (c ? A[c - 1].t : 0)) / 100) * _
                    })[d] = P.v),
                      l.to(M, D, F),
                      (F += D.duration)
                l.duration() < _ && l.to({}, { duration: _ - l.duration() })
              }
            }
            _ || u.duration((_ = l.duration()))
          } else u.timeline = 0
          return (
            !0 !== T || n || ((Ne = t(u)), o.killTweensOf(M), (Ne = 0)),
            Yt(E, t(u), s),
            i.reversed && u.reverse(),
            i.paused && u.paused(!0),
            (x ||
              (!_ &&
                !O &&
                u._start === mt(E._time) &&
                I(x) &&
                Dt(t(u)) &&
                'nested' !== E.data)) &&
              ((u._tTime = -1e-8), u.render(Math.max(0, -y) || 0)),
            C && Nt(t(u), C),
            u
          )
        }
        e(s, r)
        var a = s.prototype
        return (
          (a.render = function (t, e, r) {
            var n,
              s,
              o,
              a,
              u,
              l,
              c,
              f,
              h,
              d = this._time,
              p = this._tDur,
              g = this._dur,
              m = t < 0,
              v = t > p - T && !m ? p : t < T ? 0 : t
            if (g) {
              if (
                v !== this._tTime ||
                !t ||
                r ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((n = v), (f = this.timeline), this._repeat)) {
                  if (((a = g + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * a + t, e, r)
                  if (
                    ((n = mt(v % a)),
                    v === p
                      ? ((o = this._repeat), (n = g))
                      : ((o = ~~(v / a)) && o === mt(v / a) && ((n = g), o--),
                        n > g && (n = g)),
                    (l = this._yoyo && 1 & o) &&
                      ((h = this._yEase), (n = g - n)),
                    (u = It(this._tTime, a)),
                    n === d && !r && this._initted && o === u)
                  )
                    return (this._tTime = v), this
                  o !== u &&
                    (f && this._yEase && Re(f, l),
                    this.vars.repeatRefresh &&
                      !l &&
                      !this._lock &&
                      this._time !== a &&
                      this._initted &&
                      ((this._lock = r = 1),
                      (this.render(mt(a * o), !0).invalidate()._lock = 0)))
                }
                if (!this._initted) {
                  if (Xt(this, m ? t : n, r, e, v))
                    return (this._tTime = 0), this
                  if (
                    !(
                      d === this._time ||
                      (r && this.vars.repeatRefresh && o !== u)
                    )
                  )
                    return this
                  if (g !== this._dur) return this.render(t, e, r)
                }
                if (
                  ((this._tTime = v),
                  (this._time = n),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = c = (h || this._ease)(n / g)),
                  this._from && (this.ratio = c = 1 - c),
                  n &&
                    !d &&
                    !e &&
                    !o &&
                    (he(this, 'onStart'), this._tTime !== v))
                )
                  return this
                for (s = this._pt; s; ) s.r(c, s.d), (s = s._next)
                ;(f &&
                  f.render(
                    t < 0 ? t : f._dur * f._ease(n / this._dur),
                    e,
                    r
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && Rt(this, t, 0, r), he(this, 'onUpdate')),
                  this._repeat &&
                    o !== u &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    he(this, 'onRepeat'),
                  (v !== this._tDur && v) ||
                    this._tTime !== v ||
                    (m && !this._onUpdate && Rt(this, t, 0, !0),
                    (t || !g) &&
                      ((v === this._tDur && this._ts > 0) ||
                        (!v && this._ts < 0)) &&
                      At(this, 1),
                    e ||
                      (m && !d) ||
                      !(v || d || l) ||
                      (he(
                        this,
                        v === p ? 'onComplete' : 'onReverseComplete',
                        !0
                      ),
                      this._prom &&
                        !(v < p && this.timeScale() > 0) &&
                        this._prom()))
              }
            } else
              !(function (t, e, r, n) {
                var s,
                  o,
                  a,
                  u = t.ratio,
                  l =
                    e < 0 ||
                    (!e &&
                      ((!t._start && qt(t) && (t._initted || !Vt(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Vt(t))))
                      ? 0
                      : 1,
                  c = t._rDelay,
                  f = 0
                if (
                  (c &&
                    t._repeat &&
                    ((f = Zt(0, t._tDur, e)),
                    (o = It(f, c)),
                    t._yoyo && 1 & o && (l = 1 - l),
                    o !== It(t._tTime, c) &&
                      ((u = 1 - l),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  l !== u || i || n || t._zTime === T || (!e && t._zTime))
                ) {
                  if (!t._initted && Xt(t, e, n, r, f)) return
                  for (
                    a = t._zTime,
                      t._zTime = e || (r ? T : 0),
                      r || (r = e && !a),
                      t.ratio = l,
                      t._from && (l = 1 - l),
                      t._time = 0,
                      t._tTime = f,
                      s = t._pt;
                    s;

                  )
                    s.r(l, s.d), (s = s._next)
                  e < 0 && Rt(t, e, 0, !0),
                    t._onUpdate && !r && he(t, 'onUpdate'),
                    f && t._repeat && !r && t.parent && he(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === l &&
                      (l && At(t, 1),
                      r ||
                        i ||
                        (he(t, l ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
              })(this, t, e, r)
            return this
          }),
          (a.targets = function () {
            return this._targets
          }),
          (a.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              r.prototype.invalidate.call(this, t)
            )
          }),
          (a.resetTo = function (t, e, r, n, i) {
            d || ke.wake(), this._ts || this.play()
            var s = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts
            )
            return (
              this._initted || Ue(this, s),
              (function (t, e, r, n, i, s, o, a) {
                var u,
                  l,
                  c,
                  f,
                  h = ((t._pt && t._ptCache) || (t._ptCache = {}))[e]
                if (!h)
                  for (
                    h = t._ptCache[e] = [],
                      c = t._ptLookup,
                      f = t._targets.length;
                    f--;

                  ) {
                    if ((u = c[f][e]) && u.d && u.d._pt)
                      for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                        u = u._next
                    if (!u)
                      return (
                        (Xe = 1),
                        (t.vars[e] = '+=0'),
                        Ue(t, o),
                        (Xe = 0),
                        a ? Z(e + ' not eligible for reset') : 1
                      )
                    h.push(u)
                  }
                for (f = h.length; f--; )
                  ((u = (l = h[f])._pt || l).s =
                    (!n && 0 !== n) || i ? u.s + (n || 0) + s * u.c : n),
                    (u.c = r - u.s),
                    l.e && (l.e = gt(r) + Kt(l.e)),
                    l.b && (l.b = u.s + Kt(l.b))
              })(this, t, e, r, n, this._ease(s / this._dur), s, i)
                ? this.resetTo(t, e, r, n, 1)
                : (Lt(this, 0),
                  this.parent ||
                    Et(
                      this._dp,
                      this,
                      '_first',
                      '_last',
                      this._dp._sort ? '_start' : 0
                    ),
                  this.render(0))
            )
          }),
          (a.kill = function (t, e) {
            if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
              return (this._lazy = this._pt = 0), this.parent ? de(this) : this
            if (this.timeline) {
              var r = this.timeline.totalDuration()
              return (
                this.timeline.killTweensOf(t, e, Ne && !0 !== Ne.vars.overwrite)
                  ._first || de(this),
                this.parent &&
                  r !== this.timeline.totalDuration() &&
                  Ht(this, (this._dur * this.timeline._tDur) / r, 0, 1),
                this
              )
            }
            var n,
              i,
              s,
              o,
              a,
              u,
              l,
              c = this._targets,
              f = t ? ee(t) : c,
              h = this._ptLookup,
              d = this._pt
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (
                  var r = t.length, n = r === e.length;
                  n && r-- && t[r] === e[r];

                );
                return r < 0
              })(c, f)
            )
              return 'all' === e && (this._pt = 0), de(this)
            for (
              n = this._op = this._op || [],
                'all' !== e &&
                  (A(e) &&
                    ((a = {}),
                    pt(e, function (t) {
                      return (a[t] = 1)
                    }),
                    (e = a)),
                  (e = (function (t, e) {
                    var r,
                      n,
                      i,
                      s,
                      o = t[0] ? ht(t[0]).harness : 0,
                      a = o && o.aliases
                    if (!a) return e
                    for (n in ((r = Ot({}, e)), a))
                      if ((n in r))
                        for (i = (s = a[n].split(',')).length; i--; )
                          r[s[i]] = r[n]
                    return r
                  })(c, e))),
                l = c.length;
              l--;

            )
              if (~f.indexOf(c[l]))
                for (a in ((i = h[l]),
                'all' === e
                  ? ((n[l] = e), (o = i), (s = {}))
                  : ((s = n[l] = n[l] || {}), (o = e)),
                o))
                  (u = i && i[a]) &&
                    (('kill' in u.d && !0 !== u.d.kill(a)) ||
                      Mt(this, u, '_pt'),
                    delete i[a]),
                    'all' !== s && (s[a] = 1)
            return this._initted && !this._pt && d && de(this), this
          }),
          (s.to = function (t, e) {
            return new s(t, e, arguments[2])
          }),
          (s.from = function (t, e) {
            return Gt(1, arguments)
          }),
          (s.delayedCall = function (t, e, r, n) {
            return new s(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: n
            })
          }),
          (s.fromTo = function (t, e, r) {
            return Gt(2, arguments)
          }),
          (s.set = function (t, e) {
            return (
              (e.duration = 0), e.repeatDelay || (e.repeat = 0), new s(t, e)
            )
          }),
          (s.killTweensOf = function (t, e, r) {
            return o.killTweensOf(t, e, r)
          }),
          s
        )
      })($e)
      Tt(Ze.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
      }),
        pt('staggerTo,staggerFrom,staggerFromTo', function (t) {
          Ze[t] = function () {
            var e = new Ye(),
              r = Jt.call(arguments, 0)
            return (
              r.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, r)
            )
          }
        })
      var Ke = function (t, e, r) {
          return (t[e] = r)
        },
        Je = function (t, e, r) {
          return t[e](r)
        },
        tr = function (t, e, r, n) {
          return t[e](n.fp, r)
        },
        er = function (t, e, r) {
          return t.setAttribute(e, r)
        },
        rr = function (t, e) {
          return P(t[e]) ? Je : D(t[e]) && t.setAttribute ? er : Ke
        },
        nr = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ir = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        sr = function (t, e) {
          var r = e._pt,
            n = ''
          if (!t && e.b) n = e.b
          else if (1 === t && e.e) n = e.e
          else {
            for (; r; )
              (n =
                r.p +
                (r.m
                  ? r.m(r.s + r.c * t)
                  : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                n),
                (r = r._next)
            n += e.c
          }
          e.set(e.t, e.p, n, e)
        },
        or = function (t, e) {
          for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next)
        },
        ar = function (t, e, r, n) {
          for (var i, s = this._pt; s; )
            (i = s._next), s.p === n && s.modifier(t, e, r), (s = i)
        },
        ur = function (t) {
          for (var e, r, n = this._pt; n; )
            (r = n._next),
              (n.p === t && !n.op) || n.op === t
                ? Mt(this, n, '_pt')
                : n.dep || (e = 1),
              (n = r)
          return !e
        },
        lr = function (t, e, r, n) {
          n.mSet(t, e, n.m.call(n.tween, r, n.mt), n)
        },
        cr = function (t) {
          for (var e, r, n, i, s = t._pt; s; ) {
            for (e = s._next, r = n; r && r.pr > s.pr; ) r = r._next
            ;(s._prev = r ? r._prev : i) ? (s._prev._next = s) : (n = s),
              (s._next = r) ? (r._prev = s) : (i = s),
              (s = e)
          }
          t._pt = n
        },
        fr = (function () {
          function t (t, e, r, n, i, s, o, a, u) {
            ;(this.t = e),
              (this.s = n),
              (this.c = i),
              (this.p = r),
              (this.r = s || nr),
              (this.d = o || this),
              (this.set = a || Ke),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this)
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              ;(this.mSet = this.mSet || this.set),
                (this.set = lr),
                (this.m = t),
                (this.mt = r),
                (this.tween = e)
            }),
            t
          )
        })()
      pt(
        ct +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (t) {
          return (nt[t] = 1)
        }
      ),
        (W.TweenMax = W.TweenLite = Ze),
        (W.TimelineLite = W.TimelineMax = Ye),
        (o = new Ye({
          sortChildren: !1,
          defaults: x,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0
        })),
        (b.stringFilter = Oe)
      var hr = [],
        dr = {},
        pr = [],
        gr = 0,
        mr = 0,
        vr = function (t) {
          return (dr[t] || pr).map(function (t) {
            return t()
          })
        },
        _r = function () {
          var t = Date.now(),
            e = []
          t - gr > 2 &&
            (vr('matchMediaInit'),
            hr.forEach(function (t) {
              var r,
                n,
                i,
                s,
                o = t.queries,
                u = t.conditions
              for (n in o)
                (r = a.matchMedia(o[n]).matches) && (i = 1),
                  r !== u[n] && ((u[n] = r), (s = 1))
              s && (t.revert(), i && e.push(t))
            }),
            vr('matchMediaRevert'),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e)
              })
            }),
            (gr = t),
            vr('matchMedia'))
        },
        yr = (function () {
          function t (t, e) {
            ;(this.selector = e && re(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = mr++),
              t && this.add(t)
          }
          var e = t.prototype
          return (
            (e.add = function (t, e, r) {
              P(t) && ((r = e), (e = t), (t = P))
              var n = this,
                i = function () {
                  var t,
                    i = s,
                    o = n.selector
                  return (
                    i && i !== n && i.data.push(n),
                    r && (n.selector = re(r)),
                    (s = n),
                    (t = e.apply(n, arguments)),
                    P(t) && n._r.push(t),
                    (s = i),
                    (n.selector = o),
                    (n.isReverted = !1),
                    t
                  )
                }
              return (
                (n.last = i),
                t === P
                  ? i(n, function (t) {
                      return n.add(null, t)
                    })
                  : t
                  ? (n[t] = i)
                  : i
              )
            }),
            (e.ignore = function (t) {
              var e = s
              ;(s = null), t(this), (s = e)
            }),
            (e.getTweens = function () {
              var e = []
              return (
                this.data.forEach(function (r) {
                  return r instanceof t
                    ? e.push.apply(e, r.getTweens())
                    : r instanceof Ze &&
                        !(r.parent && 'nested' === r.parent.data) &&
                        e.push(r)
                }),
                e
              )
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0
            }),
            (e.kill = function (t, e) {
              var r = this
              if (
                (t
                  ? (function () {
                      for (var e, n = r.getTweens(), i = r.data.length; i--; )
                        'isFlip' === (e = r.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return n.splice(n.indexOf(t), 1)
                          }))
                      for (
                        n
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t: t
                            }
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0
                          })
                          .forEach(function (e) {
                            return e.t.revert(t)
                          }),
                          i = r.data.length;
                        i--;

                      )
                        (e = r.data[i]) instanceof Ye
                          ? 'nested' !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : !(e instanceof Ze) && e.revert && e.revert(t)
                      r._r.forEach(function (e) {
                        return e(t, r)
                      }),
                        (r.isReverted = !0)
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill()
                    }),
                this.clear(),
                e)
              )
                for (var n = hr.length; n--; )
                  hr[n].id === this.id && hr.splice(n, 1)
            }),
            (e.revert = function (t) {
              this.kill(t || {})
            }),
            t
          )
        })(),
        br = (function () {
          function t (t) {
            ;(this.contexts = []), (this.scope = t), s && s.data.push(this)
          }
          var e = t.prototype
          return (
            (e.add = function (t, e, r) {
              z(t) || (t = { matches: t })
              var n,
                i,
                o,
                u = new yr(0, r || this.scope),
                l = (u.conditions = {})
              for (i in (s && !u.selector && (u.selector = s.selector),
              this.contexts.push(u),
              (e = u.add('onMatch', e)),
              (u.queries = t),
              t))
                'all' === i
                  ? (o = 1)
                  : (n = a.matchMedia(t[i])) &&
                    (hr.indexOf(u) < 0 && hr.push(u),
                    (l[i] = n.matches) && (o = 1),
                    n.addListener
                      ? n.addListener(_r)
                      : n.addEventListener('change', _r))
              return (
                o &&
                  e(u, function (t) {
                    return u.add(null, t)
                  }),
                this
              )
            }),
            (e.revert = function (t) {
              this.kill(t || {})
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0)
              })
            }),
            t
          )
        })(),
        xr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r]
            e.forEach(function (t) {
              return ge(t)
            })
          },
          timeline: function (t) {
            return new Ye(t)
          },
          getTweensOf: function (t, e) {
            return o.getTweensOf(t, e)
          },
          getProperty: function (t, e, r, n) {
            A(t) && (t = ee(t)[0])
            var i = ht(t || {}).get,
              s = r ? wt : xt
            return (
              'native' === r && (r = ''),
              t
                ? e
                  ? s(((ot[e] && ot[e].get) || i)(t, e, r, n))
                  : function (e, r, n) {
                      return s(((ot[e] && ot[e].get) || i)(t, e, r, n))
                    }
                : t
            )
          },
          quickSetter: function (t, e, r) {
            if ((t = ee(t)).length > 1) {
              var n = t.map(function (t) {
                  return Or.quickSetter(t, e, r)
                }),
                i = n.length
              return function (t) {
                for (var e = i; e--; ) n[e](t)
              }
            }
            t = t[0] || {}
            var s = ot[e],
              o = ht(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              u = s
                ? function (e) {
                    var n = new s()
                    ;(h._pt = 0),
                      n.init(t, r ? e + r : e, h, 0, [t]),
                      n.render(1, n),
                      h._pt && or(1, h)
                  }
                : o.set(t, a)
            return s
              ? u
              : function (e) {
                  return u(t, a, r ? e + r : e, o, 1)
                }
          },
          quickTo: function (t, e, r) {
            var n,
              i = Or.to(
                t,
                Ot((((n = {})[e] = '+=0.1'), (n.paused = !0), n), r || {})
              ),
              s = function (t, r, n) {
                return i.resetTo(e, t, r, n)
              }
            return (s.tween = i), s
          },
          isTweening: function (t) {
            return o.getTweensOf(t, !0).length > 0
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = De(t.ease, x.ease)), kt(x, t || {})
          },
          config: function (t) {
            return kt(b, t || {})
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              n = t.plugins,
              i = t.defaults,
              s = t.extendTimeline
            ;(n || '').split(',').forEach(function (t) {
              return (
                t &&
                !ot[t] &&
                !W[t] &&
                Z(e + ' effect requires ' + t + ' plugin.')
              )
            }),
              (at[e] = function (t, e, n) {
                return r(ee(t), Tt(e || {}, i), n)
              }),
              s &&
                (Ye.prototype[e] = function (t, r, n) {
                  return this.add(at[e](t, z(r) ? r : (n = r) && {}, this), n)
                })
          },
          registerEase: function (t, e) {
            Se[t] = De(e)
          },
          parseEase: function (t, e) {
            return arguments.length ? De(t, e) : Se
          },
          getById: function (t) {
            return o.getById(t)
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {})
            var r,
              n,
              i = new Ye(t)
            for (
              i.smoothChildTiming = I(t.smoothChildTiming),
                o.remove(i),
                i._dp = 0,
                i._time = i._tTime = o._time,
                r = o._first;
              r;

            )
              (n = r._next),
                (!e &&
                  !r._dur &&
                  r instanceof Ze &&
                  r.vars.onComplete === r._targets[0]) ||
                  Yt(i, r, r._start - r._delay),
                (r = n)
            return Yt(o, i, 0), i
          },
          context: function (t, e) {
            return t ? new yr(t, e) : s
          },
          matchMedia: function (t) {
            return new br(t)
          },
          matchMediaRefresh: function () {
            return (
              hr.forEach(function (t) {
                var e,
                  r,
                  n = t.conditions
                for (r in n) n[r] && ((n[r] = !1), (e = 1))
                e && t.revert()
              }) || _r()
            )
          },
          addEventListener: function (t, e) {
            var r = dr[t] || (dr[t] = [])
            ~r.indexOf(e) || r.push(e)
          },
          removeEventListener: function (t, e) {
            var r = dr[t],
              n = r && r.indexOf(e)
            n >= 0 && r.splice(n, 1)
          },
          utils: {
            wrap: function t (e, r, n) {
              var i = r - e
              return $(e)
                ? ue(e, t(0, e.length), r)
                : Qt(n, function (t) {
                    return ((i + ((t - e) % i)) % i) + e
                  })
            },
            wrapYoyo: function t (e, r, n) {
              var i = r - e,
                s = 2 * i
              return $(e)
                ? ue(e, t(0, e.length - 1), r)
                : Qt(n, function (t) {
                    return (
                      e + ((t = (s + ((t - e) % s)) % s || 0) > i ? s - t : t)
                    )
                  })
            },
            distribute: ie,
            random: ae,
            snap: oe,
            normalize: function (t, e, r) {
              return ce(t, e, 0, 1, r)
            },
            getUnit: Kt,
            clamp: function (t, e, r) {
              return Qt(r, function (r) {
                return Zt(t, e, r)
              })
            },
            splitColor: ye,
            toArray: ee,
            selector: re,
            mapRange: ce,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                r < t;
                r++
              )
                e[r] = arguments[r]
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t)
                }, t)
              }
            },
            unitize: function (t, e) {
              return function (r) {
                return t(parseFloat(r)) + (e || Kt(r))
              }
            },
            interpolate: function t (e, r, n, i) {
              var s = isNaN(e + r)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * r
                  }
              if (!s) {
                var o,
                  a,
                  u,
                  l,
                  c,
                  f = A(e),
                  h = {}
                if ((!0 === n && (i = 1) && (n = null), f))
                  (e = { p: e }), (r = { p: r })
                else if ($(e) && !$(r)) {
                  for (u = [], l = e.length, c = l - 2, a = 1; a < l; a++)
                    u.push(t(e[a - 1], e[a]))
                  l--,
                    (s = function (t) {
                      t *= l
                      var e = Math.min(c, ~~t)
                      return u[e](t - e)
                    }),
                    (n = r)
                } else i || (e = Ot($(e) ? [] : {}, e))
                if (!u) {
                  for (o in r) Ve.call(h, e, o, 'get', r[o])
                  s = function (t) {
                    return or(t, h) || (f ? e.p : e)
                  }
                }
              }
              return Qt(n, s)
            },
            shuffle: ne
          },
          install: G,
          effects: at,
          ticker: ke,
          updateRoot: Ye.updateRoot,
          plugins: ot,
          globalTimeline: o,
          core: {
            PropTween: fr,
            globals: K,
            Tween: Ze,
            Timeline: Ye,
            Animation: $e,
            getCache: ht,
            _removeLinkedListItem: Mt,
            reverting: function () {
              return i
            },
            context: function (t) {
              return t && s && (s.data.push(t), (t._ctx = s)), s
            },
            suppressOverwrites: function (t) {
              return (n = t)
            }
          }
        }
      pt('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
        return (xr[t] = Ze[t])
      }),
        ke.add(Ye.updateRoot),
        (h = xr.to({}, { duration: 0 }))
      var wr = function (t, e) {
          for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
            r = r._next
          return r
        },
        Tr = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, r, n) {
              n._onInit = function (t) {
                var n, i
                if (
                  (A(r) &&
                    ((n = {}),
                    pt(r, function (t) {
                      return (n[t] = 1)
                    }),
                    (r = n)),
                  e)
                ) {
                  for (i in ((n = {}), r)) n[i] = e(r[i])
                  r = n
                }
                !(function (t, e) {
                  var r,
                    n,
                    i,
                    s = t._targets
                  for (r in e)
                    for (n = s.length; n--; )
                      (i = t._ptLookup[n][r]) &&
                        (i = i.d) &&
                        (i._pt && (i = wr(i, r)),
                        i && i.modifier && i.modifier(e[r], t, s[n], r))
                })(t, r)
              }
            }
          }
        },
        Or =
          xr.registerPlugin(
            {
              name: 'attr',
              init: function (t, e, r, n, i) {
                var s, o, a
                for (s in ((this.tween = r), e))
                  (a = t.getAttribute(s) || ''),
                    ((o = this.add(
                      t,
                      'setAttribute',
                      (a || 0) + '',
                      e[s],
                      n,
                      i,
                      0,
                      0,
                      s
                    )).op = s),
                    (o.b = a),
                    this._props.push(s)
              },
              render: function (t, e) {
                for (var r = e._pt; r; )
                  i ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next)
              }
            },
            {
              name: 'endArray',
              init: function (t, e) {
                for (var r = e.length; r--; )
                  this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
              }
            },
            Tr('roundProps', se),
            Tr('modifiers'),
            Tr('snap', oe)
          ) || xr
      ;(Ze.version = Ye.version = Or.version = '3.12.5'),
        (c = 1),
        F() && Ce(),
        Se.Power0,
        Se.Power1,
        Se.Power2,
        Se.Power3,
        Se.Power4,
        Se.Linear,
        Se.Quad,
        Se.Cubic,
        Se.Quart,
        Se.Quint,
        Se.Strong,
        Se.Elastic,
        Se.Back,
        Se.SteppedEase,
        Se.Bounce,
        Se.Sine,
        Se.Expo,
        Se.Circ
      var kr,
        Cr,
        Sr,
        Er,
        Mr,
        Ar,
        Pr,
        Rr,
        Dr = {},
        zr = 180 / Math.PI,
        Ir = Math.PI / 180,
        Fr = Math.atan2,
        Br = /([A-Z])/g,
        Lr = /(left|right|width|margin|padding|x)/i,
        $r = /[\s,\(]\S/,
        Yr = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity'
        },
        Nr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          )
        },
        Xr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e
          )
        },
        qr = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e
          )
        },
        Vr = function (t, e) {
          var r = e.s + e.c * t
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e)
        },
        Hr = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Ur = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Wr = function (t, e, r) {
          return (t.style[e] = r)
        },
        jr = function (t, e, r) {
          return t.style.setProperty(e, r)
        },
        Gr = function (t, e, r) {
          return (t._gsap[e] = r)
        },
        Qr = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r)
        },
        Zr = function (t, e, r, n, i) {
          var s = t._gsap
          ;(s.scaleX = s.scaleY = r), s.renderTransform(i, s)
        },
        Kr = function (t, e, r, n, i) {
          var s = t._gsap
          ;(s[e] = r), s.renderTransform(i, s)
        },
        Jr = 'transform',
        tn = Jr + 'Origin',
        en = function t (e, r) {
          var n = this,
            i = this.target,
            s = i.style,
            o = i._gsap
          if (e in Dr && s) {
            if (((this.tfm = this.tfm || {}), 'transform' === e))
              return Yr.transform.split(',').forEach(function (e) {
                return t.call(n, e, r)
              })
            if (
              (~(e = Yr[e] || e).indexOf(',')
                ? e.split(',').forEach(function (t) {
                    return (n.tfm[t] = bn(i, t))
                  })
                : (this.tfm[e] = o.x ? o[e] : bn(i, e)),
              e === tn && (this.tfm.zOrigin = o.zOrigin),
              this.props.indexOf(Jr) >= 0)
            )
              return
            o.svg &&
              ((this.svgo = i.getAttribute('data-svg-origin')),
              this.props.push(tn, r, '')),
              (e = Jr)
          }
          ;(s || r) && this.props.push(e, r, s[e])
        },
        rn = function (t) {
          t.translate &&
            (t.removeProperty('translate'),
            t.removeProperty('scale'),
            t.removeProperty('rotate'))
        },
        nn = function () {
          var t,
            e,
            r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? (n[r[t]] = r[t + 2])
              : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty(
                  '--' === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(Br, '-$1').toLowerCase()
                )
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e]
            s.svg &&
              (s.renderTransform(),
              n.setAttribute('data-svg-origin', this.svgo || '')),
              ((t = Pr()) && t.isStart) ||
                i[Jr] ||
                (rn(i),
                s.zOrigin &&
                  i[tn] &&
                  ((i[tn] += ' ' + s.zOrigin + 'px'),
                  (s.zOrigin = 0),
                  s.renderTransform()),
                (s.uncache = 1))
          }
        },
        sn = function (t, e) {
          var r = { target: t, props: [], revert: nn, save: en }
          return (
            t._gsap || Or.core.getCache(t),
            e &&
              e.split(',').forEach(function (t) {
                return r.save(t)
              }),
            r
          )
        },
        on = function (t, e) {
          var r = Cr.createElementNS
            ? Cr.createElementNS(
                (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                t
              )
            : Cr.createElement(t)
          return r && r.style ? r : Cr.createElement(t)
        },
        an = function t (e, r, n) {
          var i = getComputedStyle(e)
          return (
            i[r] ||
            i.getPropertyValue(r.replace(Br, '-$1').toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, ln(r) || r, 1)) ||
            ''
          )
        },
        un = 'O,Moz,ms,Ms,Webkit'.split(','),
        ln = function (t, e, r) {
          var n = (e || Mr).style,
            i = 5
          if (t in n && !r) return t
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(un[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? 'ms' : i >= 0 ? un[i] : '') + t
        },
        cn = function () {
          'undefined' != typeof window &&
            window.document &&
            ((kr = window),
            (Cr = kr.document),
            (Sr = Cr.documentElement),
            (Mr = on('div') || { style: {} }),
            on('div'),
            (Jr = ln(Jr)),
            (tn = Jr + 'Origin'),
            (Mr.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (Rr = !!ln('perspective')),
            (Pr = Or.core.reverting),
            (Er = 1))
        },
        fn = function t (e) {
          var r,
            n = on(
              'svg',
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg'
            ),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText
          if (
            (Sr.appendChild(n),
            n.appendChild(this),
            (this.style.display = 'block'),
            e)
          )
            try {
              ;(r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t)
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox())
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
            Sr.removeChild(n),
            (this.style.cssText = o),
            r
          )
        },
        hn = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
        },
        dn = function (t) {
          var e
          try {
            e = t.getBBox()
          } catch (r) {
            e = fn.call(t, !0)
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === fn ||
              (e = fn.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +hn(t, ['x', 'cx', 'x1']) || 0,
                  y: +hn(t, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0
                }
          )
        },
        pn = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !dn(t))
        },
        gn = function (t, e) {
          if (e) {
            var r,
              n = t.style
            e in Dr && e !== tn && (e = Jr),
              n.removeProperty
                ? (('ms' !== (r = e.substr(0, 2)) &&
                    'webkit' !== e.substr(0, 6)) ||
                    (e = '-' + e),
                  n.removeProperty(
                    '--' === r ? e : e.replace(Br, '-$1').toLowerCase()
                  ))
                : n.removeAttribute(e)
          }
        },
        mn = function (t, e, r, n, i, s) {
          var o = new fr(t._pt, e, r, 0, 1, s ? Ur : Hr)
          return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o
        },
        vn = { deg: 1, rad: 1, turn: 1 },
        _n = { grid: 1, flex: 1 },
        yn = function t (e, r, n, i) {
          var s,
            o,
            a,
            u,
            l = parseFloat(n) || 0,
            c = (n + '').trim().substr((l + '').length) || 'px',
            f = Mr.style,
            h = Lr.test(r),
            d = 'svg' === e.tagName.toLowerCase(),
            p = (d ? 'client' : 'offset') + (h ? 'Width' : 'Height'),
            g = 100,
            m = 'px' === i,
            v = '%' === i
          if (i === c || !l || vn[i] || vn[c]) return l
          if (
            ('px' !== c && !m && (l = t(e, r, n, 'px')),
            (u = e.getCTM && pn(e)),
            (v || '%' === c) && (Dr[r] || ~r.indexOf('adius')))
          )
            return (
              (s = u ? e.getBBox()[h ? 'width' : 'height'] : e[p]),
              gt(v ? (l / s) * g : (l / 100) * s)
            )
          if (
            ((f[h ? 'width' : 'height'] = g + (m ? c : i)),
            (o =
              ~r.indexOf('adius') || ('em' === i && e.appendChild && !d)
                ? e
                : e.parentNode),
            u && (o = (e.ownerSVGElement || {}).parentNode),
            (o && o !== Cr && o.appendChild) || (o = Cr.body),
            (a = o._gsap) &&
              v &&
              a.width &&
              h &&
              a.time === ke.time &&
              !a.uncache)
          )
            return gt((l / a.width) * g)
          if (!v || ('height' !== r && 'width' !== r))
            (v || '%' === c) &&
              !_n[an(o, 'display')] &&
              (f.position = an(e, 'position')),
              o === e && (f.position = 'static'),
              o.appendChild(Mr),
              (s = Mr[p]),
              o.removeChild(Mr),
              (f.position = 'absolute')
          else {
            var _ = e.style[r]
            ;(e.style[r] = g + i), (s = e[p]), _ ? (e.style[r] = _) : gn(e, r)
          }
          return (
            h && v && (((a = ht(o)).time = ke.time), (a.width = o[p])),
            gt(m ? (s * l) / g : s && l ? (g / s) * l : 0)
          )
        },
        bn = function (t, e, r, n) {
          var i
          return (
            Er || cn(),
            e in Yr &&
              'transform' !== e &&
              ~(e = Yr[e]).indexOf(',') &&
              (e = e.split(',')[0]),
            Dr[e] && 'transform' !== e
              ? ((i = Pn(t, n)),
                (i =
                  'transformOrigin' !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : Rn(an(t, tn)) + ' ' + i.zOrigin + 'px'))
              : (!(i = t.style[e]) ||
                  'auto' === i ||
                  n ||
                  ~(i + '').indexOf('calc(')) &&
                (i =
                  (On[e] && On[e](t, e, r)) ||
                  an(t, e) ||
                  dt(t, e) ||
                  ('opacity' === e ? 1 : 0)),
            r && !~(i + '').trim().indexOf(' ') ? yn(t, e, i, r) + r : i
          )
        },
        xn = function (t, e, r, n) {
          if (!r || 'none' === r) {
            var i = ln(e, t, 1),
              s = i && an(t, i, 1)
            s && s !== r
              ? ((e = i), (r = s))
              : 'borderColor' === e && (r = an(t, 'borderTopColor'))
          }
          var o,
            a,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            g,
            m,
            v = new fr(this._pt, t.style, e, 0, 1, sr),
            _ = 0,
            y = 0
          if (
            ((v.b = r),
            (v.e = n),
            (r += ''),
            'auto' == (n += '') &&
              ((f = t.style[e]),
              (t.style[e] = n),
              (n = an(t, e) || n),
              f ? (t.style[e] = f) : gn(t, e)),
            Oe((o = [r, n])),
            (n = o[1]),
            (u = (r = o[0]).match(X) || []),
            (n.match(X) || []).length)
          ) {
            for (; (a = X.exec(n)); )
              (h = a[0]),
                (p = n.substring(_, a.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ('rgba(' !== p.substr(-5) && 'hsla(' !== p.substr(-5)) ||
                    (c = 1),
                h !== (f = u[y++] || '') &&
                  ((l = parseFloat(f) || 0),
                  (m = f.substr((l + '').length)),
                  '=' === h.charAt(1) && (h = vt(l, h) + m),
                  (d = parseFloat(h)),
                  (g = h.substr((d + '').length)),
                  (_ = X.lastIndex - g.length),
                  g ||
                    ((g = g || b.units[e] || m),
                    _ === n.length && ((n += g), (v.e += g))),
                  m !== g && (l = yn(t, e, f, g) || 0),
                  (v._pt = {
                    _next: v._pt,
                    p: p || 1 === y ? p : ',',
                    s: l,
                    c: d - l,
                    m: (c && c < 4) || 'zIndex' === e ? Math.round : 0
                  }))
            v.c = _ < n.length ? n.substring(_, n.length) : ''
          } else v.r = 'display' === e && 'none' === n ? Ur : Hr
          return V.test(n) && (v.e = 0), (this._pt = v), v
        },
        wn = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%'
        },
        Tn = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              o = s.style,
              a = e.u,
              u = s._gsap
            if ('all' === a || !0 === a) (o.cssText = ''), (n = 1)
            else
              for (i = (a = a.split(',')).length; --i > -1; )
                (r = a[i]),
                  Dr[r] && ((n = 1), (r = 'transformOrigin' === r ? tn : Jr)),
                  gn(s, r)
            n &&
              (gn(s, Jr),
              u &&
                (u.svg && s.removeAttribute('transform'),
                Pn(s, 1),
                (u.uncache = 1),
                rn(o)))
          }
        },
        On = {
          clearProps: function (t, e, r, n, i) {
            if ('isFromStart' !== i.data) {
              var s = (t._pt = new fr(t._pt, e, r, 0, 0, Tn))
              return (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
            }
          }
        },
        kn = [1, 0, 0, 1, 0, 0],
        Cn = {},
        Sn = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t
        },
        En = function (t) {
          var e = an(t, Jr)
          return Sn(e) ? kn : e.substr(7).match(N).map(gt)
        },
        Mn = function (t, e) {
          var r,
            n,
            i,
            s,
            o = t._gsap || ht(t),
            a = t.style,
            u = En(t)
          return o.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f
              ]).join(',')
              ? kn
              : u
            : (u !== kn ||
                t.offsetParent ||
                t === Sr ||
                o.svg ||
                ((i = a.display),
                (a.display = 'block'),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (n = t.nextElementSibling), Sr.appendChild(t)),
                (u = En(t)),
                i ? (a.display = i) : gn(t, 'display'),
                s &&
                  (n
                    ? r.insertBefore(t, n)
                    : r
                    ? r.appendChild(t)
                    : Sr.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        An = function (t, e, r, n, i, s) {
          var o,
            a,
            u,
            l = t._gsap,
            c = i || Mn(t, !0),
            f = l.xOrigin || 0,
            h = l.yOrigin || 0,
            d = l.xOffset || 0,
            p = l.yOffset || 0,
            g = c[0],
            m = c[1],
            v = c[2],
            _ = c[3],
            y = c[4],
            b = c[5],
            x = e.split(' '),
            w = parseFloat(x[0]) || 0,
            T = parseFloat(x[1]) || 0
          r
            ? c !== kn &&
              (a = g * _ - m * v) &&
              ((u = w * (-m / a) + T * (g / a) - (g * b - m * y) / a),
              (w = w * (_ / a) + T * (-v / a) + (v * b - _ * y) / a),
              (T = u))
            : ((w =
                (o = dn(t)).x + (~x[0].indexOf('%') ? (w / 100) * o.width : w)),
              (T =
                o.y +
                (~(x[1] || x[0]).indexOf('%') ? (T / 100) * o.height : T))),
            n || (!1 !== n && l.smooth)
              ? ((y = w - f),
                (b = T - h),
                (l.xOffset = d + (y * g + b * v) - y),
                (l.yOffset = p + (y * m + b * _) - b))
              : (l.xOffset = l.yOffset = 0),
            (l.xOrigin = w),
            (l.yOrigin = T),
            (l.smooth = !!n),
            (l.origin = e),
            (l.originIsAbsolute = !!r),
            (t.style[tn] = '0px 0px'),
            s &&
              (mn(s, l, 'xOrigin', f, w),
              mn(s, l, 'yOrigin', h, T),
              mn(s, l, 'xOffset', d, l.xOffset),
              mn(s, l, 'yOffset', p, l.yOffset)),
            t.setAttribute('data-svg-origin', w + ' ' + T)
        },
        Pn = function (t, e) {
          var r = t._gsap || new Le(t)
          if ('x' in r && !e && !r.uncache) return r
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c,
            f,
            h,
            d,
            p,
            g,
            m,
            v,
            _,
            y,
            x,
            w,
            T,
            O,
            k,
            C,
            S,
            E,
            M,
            A,
            P,
            R,
            D,
            z,
            I,
            F = t.style,
            B = r.scaleX < 0,
            L = 'px',
            $ = 'deg',
            Y = getComputedStyle(t),
            N = an(t, tn) || '0'
          return (
            (n = i = s = u = l = c = f = h = d = 0),
            (o = a = 1),
            (r.svg = !(!t.getCTM || !pn(t))),
            Y.translate &&
              (('none' === Y.translate &&
                'none' === Y.scale &&
                'none' === Y.rotate) ||
                (F[Jr] =
                  ('none' !== Y.translate
                    ? 'translate3d(' +
                      (Y.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== Y.rotate ? 'rotate(' + Y.rotate + ') ' : '') +
                  ('none' !== Y.scale
                    ? 'scale(' + Y.scale.split(' ').join(',') + ') '
                    : '') +
                  ('none' !== Y[Jr] ? Y[Jr] : '')),
              (F.scale = F.rotate = F.translate = 'none')),
            (m = Mn(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((E = t.getBBox()),
                  (N = r.xOrigin - E.x + 'px ' + (r.yOrigin - E.y) + 'px'),
                  (S = ''))
                : (S = !e && t.getAttribute('data-svg-origin')),
              An(t, S || N, !!S || r.originIsAbsolute, !1 !== r.smooth, m)),
            (p = r.xOrigin || 0),
            (g = r.yOrigin || 0),
            m !== kn &&
              ((x = m[0]),
              (w = m[1]),
              (T = m[2]),
              (O = m[3]),
              (n = k = m[4]),
              (i = C = m[5]),
              6 === m.length
                ? ((o = Math.sqrt(x * x + w * w)),
                  (a = Math.sqrt(O * O + T * T)),
                  (u = x || w ? Fr(w, x) * zr : 0),
                  (f = T || O ? Fr(T, O) * zr + u : 0) &&
                    (a *= Math.abs(Math.cos(f * Ir))),
                  r.svg &&
                    ((n -= p - (p * x + g * T)), (i -= g - (p * w + g * O))))
                : ((I = m[6]),
                  (D = m[7]),
                  (A = m[8]),
                  (P = m[9]),
                  (R = m[10]),
                  (z = m[11]),
                  (n = m[12]),
                  (i = m[13]),
                  (s = m[14]),
                  (l = (v = Fr(I, R)) * zr),
                  v &&
                    ((S = k * (_ = Math.cos(-v)) + A * (y = Math.sin(-v))),
                    (E = C * _ + P * y),
                    (M = I * _ + R * y),
                    (A = k * -y + A * _),
                    (P = C * -y + P * _),
                    (R = I * -y + R * _),
                    (z = D * -y + z * _),
                    (k = S),
                    (C = E),
                    (I = M)),
                  (c = (v = Fr(-T, R)) * zr),
                  v &&
                    ((_ = Math.cos(-v)),
                    (z = O * (y = Math.sin(-v)) + z * _),
                    (x = S = x * _ - A * y),
                    (w = E = w * _ - P * y),
                    (T = M = T * _ - R * y)),
                  (u = (v = Fr(w, x)) * zr),
                  v &&
                    ((S = x * (_ = Math.cos(v)) + w * (y = Math.sin(v))),
                    (E = k * _ + C * y),
                    (w = w * _ - x * y),
                    (C = C * _ - k * y),
                    (x = S),
                    (k = E)),
                  l &&
                    Math.abs(l) + Math.abs(u) > 359.9 &&
                    ((l = u = 0), (c = 180 - c)),
                  (o = gt(Math.sqrt(x * x + w * w + T * T))),
                  (a = gt(Math.sqrt(C * C + I * I))),
                  (v = Fr(k, C)),
                  (f = Math.abs(v) > 2e-4 ? v * zr : 0),
                  (d = z ? 1 / (z < 0 ? -z : z) : 0)),
              r.svg &&
                ((S = t.getAttribute('transform')),
                (r.forceCSS =
                  t.setAttribute('transform', '') || !Sn(an(t, Jr))),
                S && t.setAttribute('transform', S))),
            Math.abs(f) > 90 &&
              Math.abs(f) < 270 &&
              (B
                ? ((o *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((a *= -1), (f += f <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!e && r.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              L),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!e && r.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              L),
            (r.z = s + L),
            (r.scaleX = gt(o)),
            (r.scaleY = gt(a)),
            (r.rotation = gt(u) + $),
            (r.rotationX = gt(l) + $),
            (r.rotationY = gt(c) + $),
            (r.skewX = f + $),
            (r.skewY = h + $),
            (r.transformPerspective = d + L),
            (r.zOrigin =
              parseFloat(N.split(' ')[2]) || (!e && r.zOrigin) || 0) &&
              (F[tn] = Rn(N)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = b.force3D),
            (r.renderTransform = r.svg ? $n : Rr ? Ln : zn),
            (r.uncache = 0),
            r
          )
        },
        Rn = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1]
        },
        Dn = function (t, e, r) {
          var n = Kt(e)
          return gt(parseFloat(e) + parseFloat(yn(t, 'x', r + 'px', n))) + n
        },
        zn = function (t, e) {
          ;(e.z = '0px'),
            (e.rotationY = e.rotationX = '0deg'),
            (e.force3D = 0),
            Ln(t, e)
        },
        In = '0deg',
        Fn = '0px',
        Bn = ') ',
        Ln = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            u = r.rotation,
            l = r.rotationY,
            c = r.rotationX,
            f = r.skewX,
            h = r.skewY,
            d = r.scaleX,
            p = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            v = r.target,
            _ = r.zOrigin,
            y = '',
            b = ('auto' === m && t && 1 !== t) || !0 === m
          if (_ && (c !== In || l !== In)) {
            var x,
              w = parseFloat(l) * Ir,
              T = Math.sin(w),
              O = Math.cos(w)
            ;(w = parseFloat(c) * Ir),
              (x = Math.cos(w)),
              (s = Dn(v, s, T * x * -_)),
              (o = Dn(v, o, -Math.sin(w) * -_)),
              (a = Dn(v, a, O * x * -_ + _))
          }
          g !== Fn && (y += 'perspective(' + g + Bn),
            (n || i) && (y += 'translate(' + n + '%, ' + i + '%) '),
            (b || s !== Fn || o !== Fn || a !== Fn) &&
              (y +=
                a !== Fn || b
                  ? 'translate3d(' + s + ', ' + o + ', ' + a + ') '
                  : 'translate(' + s + ', ' + o + Bn),
            u !== In && (y += 'rotate(' + u + Bn),
            l !== In && (y += 'rotateY(' + l + Bn),
            c !== In && (y += 'rotateX(' + c + Bn),
            (f === In && h === In) || (y += 'skew(' + f + ', ' + h + Bn),
            (1 === d && 1 === p) || (y += 'scale(' + d + ', ' + p + Bn),
            (v.style[Jr] = y || 'translate(0, 0)')
        },
        $n = function (t, e) {
          var r,
            n,
            i,
            s,
            o,
            a = e || this,
            u = a.xPercent,
            l = a.yPercent,
            c = a.x,
            f = a.y,
            h = a.rotation,
            d = a.skewX,
            p = a.skewY,
            g = a.scaleX,
            m = a.scaleY,
            v = a.target,
            _ = a.xOrigin,
            y = a.yOrigin,
            b = a.xOffset,
            x = a.yOffset,
            w = a.forceCSS,
            T = parseFloat(c),
            O = parseFloat(f)
          ;(h = parseFloat(h)),
            (d = parseFloat(d)),
            (p = parseFloat(p)) && ((d += p = parseFloat(p)), (h += p)),
            h || d
              ? ((h *= Ir),
                (d *= Ir),
                (r = Math.cos(h) * g),
                (n = Math.sin(h) * g),
                (i = Math.sin(h - d) * -m),
                (s = Math.cos(h - d) * m),
                d &&
                  ((p *= Ir),
                  (o = Math.tan(d - p)),
                  (i *= o = Math.sqrt(1 + o * o)),
                  (s *= o),
                  p &&
                    ((o = Math.tan(p)),
                    (r *= o = Math.sqrt(1 + o * o)),
                    (n *= o))),
                (r = gt(r)),
                (n = gt(n)),
                (i = gt(i)),
                (s = gt(s)))
              : ((r = g), (s = m), (n = i = 0)),
            ((T && !~(c + '').indexOf('px')) ||
              (O && !~(f + '').indexOf('px'))) &&
              ((T = yn(v, 'x', c, 'px')), (O = yn(v, 'y', f, 'px'))),
            (_ || y || b || x) &&
              ((T = gt(T + _ - (_ * r + y * i) + b)),
              (O = gt(O + y - (_ * n + y * s) + x))),
            (u || l) &&
              ((o = v.getBBox()),
              (T = gt(T + (u / 100) * o.width)),
              (O = gt(O + (l / 100) * o.height))),
            (o =
              'matrix(' +
              r +
              ',' +
              n +
              ',' +
              i +
              ',' +
              s +
              ',' +
              T +
              ',' +
              O +
              ')'),
            v.setAttribute('transform', o),
            w && (v.style[Jr] = o)
        },
        Yn = function (t, e, r, n, i) {
          var s,
            o,
            a = 360,
            u = A(i),
            l = parseFloat(i) * (u && ~i.indexOf('rad') ? zr : 1) - n,
            c = n + l + 'deg'
          return (
            u &&
              ('short' === (s = i.split('_')[1]) &&
                (l %= a) != l % 180 &&
                (l += l < 0 ? a : -360),
              'cw' === s && l < 0
                ? (l = ((l + 36e9) % a) - ~~(l / a) * a)
                : 'ccw' === s &&
                  l > 0 &&
                  (l = ((l - 36e9) % a) - ~~(l / a) * a)),
            (t._pt = o = new fr(t._pt, e, r, n, l, Xr)),
            (o.e = c),
            (o.u = 'deg'),
            t._props.push(r),
            o
          )
        },
        Nn = function (t, e) {
          for (var r in e) t[r] = e[r]
          return t
        },
        Xn = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            u,
            l,
            c = Nn({}, r._gsap),
            f = r.style
          for (i in (c.svg
            ? ((s = r.getAttribute('transform')),
              r.setAttribute('transform', ''),
              (f[Jr] = e),
              (n = Pn(r, 1)),
              gn(r, Jr),
              r.setAttribute('transform', s))
            : ((s = getComputedStyle(r)[Jr]),
              (f[Jr] = e),
              (n = Pn(r, 1)),
              (f[Jr] = s)),
          Dr))
            (s = c[i]) !== (o = n[i]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(i) < 0 &&
              ((a = Kt(s) !== (l = Kt(o)) ? yn(r, i, s, l) : parseFloat(s)),
              (u = parseFloat(o)),
              (t._pt = new fr(t._pt, n, i, a, u - a, Nr)),
              (t._pt.u = l || 0),
              t._props.push(i))
          Nn(n, c)
        }
      pt('padding,margin,Width,Radius', function (t, e) {
        var r = 'Top',
          n = 'Right',
          i = 'Bottom',
          s = 'Left',
          o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(
            function (r) {
              return e < 2 ? t + r : 'border' + r + t
            }
          )
        On[e > 1 ? 'border' + t : t] = function (t, e, r, n, i) {
          var s, a
          if (arguments.length < 4)
            return (
              (s = o.map(function (e) {
                return bn(t, e, r)
              })),
              5 === (a = s.join(' ')).split(s[0]).length ? s[0] : a
            )
          ;(s = (n + '').split(' ')),
            (a = {}),
            o.forEach(function (t, e) {
              return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0])
            }),
            t.init(e, a, i)
        }
      })
      var qn,
        Vn,
        Hn = {
          name: 'css',
          register: cn,
          targetTest: function (t) {
            return t.style && t.nodeType
          },
          init: function (t, e, r, n, i) {
            var s,
              o,
              a,
              u,
              l,
              c,
              f,
              h,
              d,
              p,
              g,
              m,
              v,
              _,
              y,
              x,
              w,
              T,
              O,
              k,
              C = this._props,
              S = t.style,
              E = r.vars.startAt
            for (f in (Er || cn(),
            (this.styles = this.styles || sn(t)),
            (x = this.styles.props),
            (this.tween = r),
            e))
              if (
                'autoRound' !== f &&
                ((o = e[f]), !ot[f] || !He(f, e, r, n, t, i))
              )
                if (
                  ((l = typeof o),
                  (c = On[f]),
                  'function' === l && (l = typeof (o = o.call(r, n, t, i))),
                  'string' === l && ~o.indexOf('random(') && (o = le(o)),
                  c)
                )
                  c(this, t, f, o, r) && (y = 1)
                else if ('--' === f.substr(0, 2))
                  (s = (getComputedStyle(t).getPropertyValue(f) + '').trim()),
                    (o += ''),
                    (we.lastIndex = 0),
                    we.test(s) || ((h = Kt(s)), (d = Kt(o))),
                    d ? h !== d && (s = yn(t, f, s, d) + d) : h && (o += h),
                    this.add(S, 'setProperty', s, o, n, i, 0, 0, f),
                    C.push(f),
                    x.push(f, 0, S[f])
                else if ('undefined' !== l) {
                  if (
                    (E && f in E
                      ? ((s =
                          'function' == typeof E[f]
                            ? E[f].call(r, n, t, i)
                            : E[f]),
                        A(s) && ~s.indexOf('random(') && (s = le(s)),
                        Kt(s + '') ||
                          'auto' === s ||
                          (s += b.units[f] || Kt(bn(t, f)) || ''),
                        '=' === (s + '').charAt(1) && (s = bn(t, f)))
                      : (s = bn(t, f)),
                    (u = parseFloat(s)),
                    (p =
                      'string' === l &&
                      '=' === o.charAt(1) &&
                      o.substr(0, 2)) && (o = o.substr(2)),
                    (a = parseFloat(o)),
                    f in Yr &&
                      ('autoAlpha' === f &&
                        (1 === u &&
                          'hidden' === bn(t, 'visibility') &&
                          a &&
                          (u = 0),
                        x.push('visibility', 0, S.visibility),
                        mn(
                          this,
                          S,
                          'visibility',
                          u ? 'inherit' : 'hidden',
                          a ? 'inherit' : 'hidden',
                          !a
                        )),
                      'scale' !== f &&
                        'transform' !== f &&
                        ~(f = Yr[f]).indexOf(',') &&
                        (f = f.split(',')[0])),
                    (g = f in Dr))
                  )
                    if (
                      (this.styles.save(f),
                      m ||
                        (((v = t._gsap).renderTransform && !e.parseTransform) ||
                          Pn(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && v.smooth),
                        ((m = this._pt =
                          new fr(
                            this._pt,
                            S,
                            Jr,
                            0,
                            1,
                            v.renderTransform,
                            v,
                            0,
                            -1
                          )).dep = 1)),
                      'scale' === f)
                    )
                      (this._pt = new fr(
                        this._pt,
                        v,
                        'scaleY',
                        v.scaleY,
                        (p ? vt(v.scaleY, p + a) : a) - v.scaleY || 0,
                        Nr
                      )),
                        (this._pt.u = 0),
                        C.push('scaleY', f),
                        (f += 'X')
                    else {
                      if ('transformOrigin' === f) {
                        x.push(tn, 0, S[tn]),
                          (T = void 0),
                          (O = void 0),
                          (k = void 0),
                          (O = (T = (w = o).split(' '))[0]),
                          (k = T[1] || '50%'),
                          ('top' !== O &&
                            'bottom' !== O &&
                            'left' !== k &&
                            'right' !== k) ||
                            ((w = O), (O = k), (k = w)),
                          (T[0] = wn[O] || O),
                          (T[1] = wn[k] || k),
                          (o = T.join(' ')),
                          v.svg
                            ? An(t, o, 0, _, 0, this)
                            : ((d = parseFloat(o.split(' ')[2]) || 0) !==
                                v.zOrigin &&
                                mn(this, v, 'zOrigin', v.zOrigin, d),
                              mn(this, S, f, Rn(s), Rn(o)))
                        continue
                      }
                      if ('svgOrigin' === f) {
                        An(t, o, 1, _, 0, this)
                        continue
                      }
                      if (f in Cn) {
                        Yn(this, v, f, u, p ? vt(u, p + o) : o)
                        continue
                      }
                      if ('smoothOrigin' === f) {
                        mn(this, v, 'smooth', v.smooth, o)
                        continue
                      }
                      if ('force3D' === f) {
                        v[f] = o
                        continue
                      }
                      if ('transform' === f) {
                        Xn(this, o, t)
                        continue
                      }
                    }
                  else f in S || (f = ln(f) || f)
                  if (
                    g ||
                    ((a || 0 === a) && (u || 0 === u) && !$r.test(o) && f in S)
                  )
                    a || (a = 0),
                      (h = (s + '').substr((u + '').length)) !==
                        (d = Kt(o) || (f in b.units ? b.units[f] : h)) &&
                        (u = yn(t, f, s, d)),
                      (this._pt = new fr(
                        this._pt,
                        g ? v : S,
                        f,
                        u,
                        (p ? vt(u, p + a) : a) - u,
                        g ||
                        ('px' !== d && 'zIndex' !== f) ||
                        !1 === e.autoRound
                          ? Nr
                          : Vr
                      )),
                      (this._pt.u = d || 0),
                      h !== d &&
                        '%' !== d &&
                        ((this._pt.b = s), (this._pt.r = qr))
                  else if (f in S) xn.call(this, t, f, s, p ? p + o : o)
                  else if (f in t)
                    this.add(t, f, s || t[f], p ? p + o : o, n, i)
                  else if ('parseTransform' !== f) {
                    Q(f, o)
                    continue
                  }
                  g || (f in S ? x.push(f, 0, S[f]) : x.push(f, 1, s || t[f])),
                    C.push(f)
                }
            y && cr(this)
          },
          render: function (t, e) {
            if (e.tween._time || !Pr())
              for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next)
            else e.styles.revert()
          },
          get: bn,
          aliases: Yr,
          getSetter: function (t, e, r) {
            var n = Yr[e]
            return (
              n && n.indexOf(',') < 0 && (e = n),
              e in Dr && e !== tn && (t._gsap.x || bn(t, 'x'))
                ? r && Ar === r
                  ? 'scale' === e
                    ? Qr
                    : Gr
                  : (Ar = r || {}) && ('scale' === e ? Zr : Kr)
                : t.style && !D(t.style[e])
                ? Wr
                : ~e.indexOf('-')
                ? jr
                : rr(t, e)
            )
          },
          core: { _removeProperty: gn, _getMatrix: Mn }
        }
      ;(Or.utils.checkPrefix = ln),
        (Or.core.getStyleSaver = sn),
        (Vn = pt(
          'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
            ',' +
            (qn = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            Dr[t] = 1
          }
        )),
        pt(qn, function (t) {
          ;(b.units[t] = 'deg'), (Cn[t] = 1)
        }),
        (Yr[Vn[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + qn),
        pt(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (t) {
            var e = t.split(':')
            Yr[e[1]] = Vn[e[0]]
          }
        ),
        pt(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (t) {
            b.units[t] = 'px'
          }
        ),
        Or.registerPlugin(Hn)
      var Un = Or.registerPlugin(Hn) || Or
      function Wn (t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r]
          ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
      }
      Un.core.Tween
      var jn,
        Gn,
        Qn,
        Zn,
        Kn,
        Jn,
        ti,
        ei,
        ri,
        ni,
        ii,
        si,
        oi,
        ai = function () {
          return (
            jn ||
            ('undefined' != typeof window &&
              (jn = window.gsap) &&
              jn.registerPlugin &&
              jn)
          )
        },
        ui = 1,
        li = [],
        ci = [],
        fi = [],
        hi = Date.now,
        di = function (t, e) {
          return e
        },
        pi = function (t, e) {
          return ~fi.indexOf(t) && fi[fi.indexOf(t) + 1][e]
        },
        gi = function (t) {
          return !!~ni.indexOf(t)
        },
        mi = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !1 !== n, capture: !!i })
        },
        vi = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n)
        },
        _i = 'scrollLeft',
        yi = 'scrollTop',
        bi = function () {
          return (ii && ii.isPressed) || ci.cache++
        },
        xi = function (t, e) {
          var r = function r (n) {
            if (n || 0 === n) {
              ui && (Qn.history.scrollRestoration = 'manual')
              var i = ii && ii.isPressed
              ;(n = r.v = Math.round(n) || (ii && ii.iOS ? 1 : 0)),
                t(n),
                (r.cacheID = ci.cache),
                i && di('ss', n)
            } else
              (e || ci.cache !== r.cacheID || di('ref')) &&
                ((r.cacheID = ci.cache), (r.v = t()))
            return r.v + r.offset
          }
          return (r.offset = 0), t && r
        },
        wi = {
          s: _i,
          p: 'left',
          p2: 'Left',
          os: 'right',
          os2: 'Right',
          d: 'width',
          d2: 'Width',
          a: 'x',
          sc: xi(function (t) {
            return arguments.length
              ? Qn.scrollTo(t, Ti.sc())
              : Qn.pageXOffset || Zn[_i] || Kn[_i] || Jn[_i] || 0
          })
        },
        Ti = {
          s: yi,
          p: 'top',
          p2: 'Top',
          os: 'bottom',
          os2: 'Bottom',
          d: 'height',
          d2: 'Height',
          a: 'y',
          op: wi,
          sc: xi(function (t) {
            return arguments.length
              ? Qn.scrollTo(wi.sc(), t)
              : Qn.pageYOffset || Zn[yi] || Kn[yi] || Jn[yi] || 0
          })
        },
        Oi = function (t, e) {
          return (
            ((e && e._ctx && e._ctx.selector) || jn.utils.toArray)(t)[0] ||
            ('string' == typeof t && !1 !== jn.config().nullTargetWarn
              ? console.warn('Element not found:', t)
              : null)
          )
        },
        ki = function (t, e) {
          var r = e.s,
            n = e.sc
          gi(t) && (t = Zn.scrollingElement || Kn)
          var i = ci.indexOf(t),
            s = n === Ti.sc ? 1 : 2
          !~i && (i = ci.push(t) - 1), ci[i + s] || mi(t, 'scroll', bi)
          var o = ci[i + s],
            a =
              o ||
              (ci[i + s] =
                xi(pi(t, r), !0) ||
                (gi(t)
                  ? n
                  : xi(function (e) {
                      return arguments.length ? (t[r] = e) : t[r]
                    })))
          return (
            (a.target = t),
            o || (a.smooth = 'smooth' === jn.getProperty(t, 'scrollBehavior')),
            a
          )
        },
        Ci = function (t, e, r) {
          var n = t,
            i = t,
            s = hi(),
            o = s,
            a = e || 50,
            u = Math.max(500, 3 * a),
            l = function (t, e) {
              var u = hi()
              e || u - s > a
                ? ((i = n), (n = t), (o = s), (s = u))
                : r
                ? (n += t)
                : (n = i + ((t - i) / (u - o)) * (s - o))
            }
          return {
            update: l,
            reset: function () {
              ;(i = n = r ? 0 : n), (o = s = 0)
            },
            getVelocity: function (t) {
              var e = o,
                a = i,
                c = hi()
              return (
                (t || 0 === t) && t !== n && l(t),
                s === o || c - o > u
                  ? 0
                  : ((n + (r ? a : -a)) / ((r ? c : s) - e)) * 1e3
              )
            }
          }
        },
        Si = function (t, e) {
          return (
            e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
          )
        },
        Ei = function (t) {
          var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t)
          return Math.abs(e) >= Math.abs(r) ? e : r
        },
        Mi = function () {
          var t, e, r, n
          ;(ri = jn.core.globals().ScrollTrigger) &&
            ri.core &&
            ((t = ri.core),
            (e = t.bridge || {}),
            (r = t._scrollers),
            (n = t._proxies),
            r.push.apply(r, ci),
            n.push.apply(n, fi),
            (ci = r),
            (fi = n),
            (di = function (t, r) {
              return e[t](r)
            }))
        },
        Ai = function (t) {
          return (
            (jn = t || ai()),
            !Gn &&
              jn &&
              'undefined' != typeof document &&
              document.body &&
              ((Qn = window),
              (Zn = document),
              (Kn = Zn.documentElement),
              (Jn = Zn.body),
              (ni = [Qn, Zn, Kn, Jn]),
              jn.utils.clamp,
              (oi = jn.core.context || function () {}),
              (ei = 'onpointerenter' in Jn ? 'pointer' : 'mouse'),
              (ti = Pi.isTouch =
                Qn.matchMedia &&
                Qn.matchMedia('(hover: none), (pointer: coarse)').matches
                  ? 1
                  : 'ontouchstart' in Qn ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (si = Pi.eventTypes =
                (
                  'ontouchstart' in Kn
                    ? 'touchstart,touchmove,touchcancel,touchend'
                    : 'onpointerdown' in Kn
                    ? 'pointerdown,pointermove,pointercancel,pointerup'
                    : 'mousedown,mousemove,mouseup,mouseup'
                ).split(',')),
              setTimeout(function () {
                return (ui = 0)
              }, 500),
              Mi(),
              (Gn = 1)),
            Gn
          )
        }
      ;(wi.op = Ti), (ci.cache = 0)
      var Pi = (function () {
        function t (t) {
          this.init(t)
        }
        var e, r
        return (
          (t.prototype.init = function (t) {
            Gn ||
              Ai(jn) ||
              console.warn('Please gsap.registerPlugin(Observer)'),
              ri || Mi()
            var e = t.tolerance,
              r = t.dragMinimum,
              n = t.type,
              i = t.target,
              s = t.lineHeight,
              o = t.debounce,
              a = t.preventDefault,
              u = t.onStop,
              l = t.onStopDelay,
              c = t.ignore,
              f = t.wheelSpeed,
              h = t.event,
              d = t.onDragStart,
              p = t.onDragEnd,
              g = t.onDrag,
              m = t.onPress,
              v = t.onRelease,
              _ = t.onRight,
              y = t.onLeft,
              b = t.onUp,
              x = t.onDown,
              w = t.onChangeX,
              T = t.onChangeY,
              O = t.onChange,
              k = t.onToggleX,
              C = t.onToggleY,
              S = t.onHover,
              E = t.onHoverEnd,
              M = t.onMove,
              A = t.ignoreCheck,
              P = t.isNormalizer,
              R = t.onGestureStart,
              D = t.onGestureEnd,
              z = t.onWheel,
              I = t.onEnable,
              F = t.onDisable,
              B = t.onClick,
              L = t.scrollSpeed,
              $ = t.capture,
              Y = t.allowClicks,
              N = t.lockAxis,
              X = t.onLockAxis
            ;(this.target = i = Oi(i) || Kn),
              (this.vars = t),
              c && (c = jn.utils.toArray(c)),
              (e = e || 1e-9),
              (r = r || 0),
              (f = f || 1),
              (L = L || 1),
              (n = n || 'wheel,touch,pointer'),
              (o = !1 !== o),
              s || (s = parseFloat(Qn.getComputedStyle(Jn).lineHeight) || 22)
            var q,
              V,
              H,
              U,
              W,
              j,
              G,
              Q = this,
              Z = 0,
              K = 0,
              J = t.passive || !a,
              tt = ki(i, wi),
              et = ki(i, Ti),
              rt = tt(),
              nt = et(),
              it =
                ~n.indexOf('touch') &&
                !~n.indexOf('pointer') &&
                'pointerdown' === si[0],
              st = gi(i),
              ot = i.ownerDocument || Zn,
              at = [0, 0, 0],
              ut = [0, 0, 0],
              lt = 0,
              ct = function () {
                return (lt = hi())
              },
              ft = function (t, e) {
                return (
                  ((Q.event = t) && c && ~c.indexOf(t.target)) ||
                  (e && it && 'touch' !== t.pointerType) ||
                  (A && A(t, e))
                )
              },
              ht = function () {
                var t = (Q.deltaX = Ei(at)),
                  r = (Q.deltaY = Ei(ut)),
                  n = Math.abs(t) >= e,
                  i = Math.abs(r) >= e
                O && (n || i) && O(Q, t, r, at, ut),
                  n &&
                    (_ && Q.deltaX > 0 && _(Q),
                    y && Q.deltaX < 0 && y(Q),
                    w && w(Q),
                    k && Q.deltaX < 0 != Z < 0 && k(Q),
                    (Z = Q.deltaX),
                    (at[0] = at[1] = at[2] = 0)),
                  i &&
                    (x && Q.deltaY > 0 && x(Q),
                    b && Q.deltaY < 0 && b(Q),
                    T && T(Q),
                    C && Q.deltaY < 0 != K < 0 && C(Q),
                    (K = Q.deltaY),
                    (ut[0] = ut[1] = ut[2] = 0)),
                  (U || H) && (M && M(Q), H && (g(Q), (H = !1)), (U = !1)),
                  j && !(j = !1) && X && X(Q),
                  W && (z(Q), (W = !1)),
                  (q = 0)
              },
              dt = function (t, e, r) {
                ;(at[r] += t),
                  (ut[r] += e),
                  Q._vx.update(t),
                  Q._vy.update(e),
                  o ? q || (q = requestAnimationFrame(ht)) : ht()
              },
              pt = function (t, e) {
                N &&
                  !G &&
                  ((Q.axis = G = Math.abs(t) > Math.abs(e) ? 'x' : 'y'),
                  (j = !0)),
                  'y' !== G && ((at[2] += t), Q._vx.update(t, !0)),
                  'x' !== G && ((ut[2] += e), Q._vy.update(e, !0)),
                  o ? q || (q = requestAnimationFrame(ht)) : ht()
              },
              gt = function (t) {
                if (!ft(t, 1)) {
                  var e = (t = Si(t, a)).clientX,
                    n = t.clientY,
                    i = e - Q.x,
                    s = n - Q.y,
                    o = Q.isDragging
                  ;(Q.x = e),
                    (Q.y = n),
                    (o ||
                      Math.abs(Q.startX - e) >= r ||
                      Math.abs(Q.startY - n) >= r) &&
                      (g && (H = !0),
                      o || (Q.isDragging = !0),
                      pt(i, s),
                      o || (d && d(Q)))
                }
              },
              mt = (Q.onPress = function (t) {
                ft(t, 1) ||
                  (t && t.button) ||
                  ((Q.axis = G = null),
                  V.pause(),
                  (Q.isPressed = !0),
                  (t = Si(t)),
                  (Z = K = 0),
                  (Q.startX = Q.x = t.clientX),
                  (Q.startY = Q.y = t.clientY),
                  Q._vx.reset(),
                  Q._vy.reset(),
                  mi(P ? i : ot, si[1], gt, J, !0),
                  (Q.deltaX = Q.deltaY = 0),
                  m && m(Q))
              }),
              vt = (Q.onRelease = function (t) {
                if (!ft(t, 1)) {
                  vi(P ? i : ot, si[1], gt, !0)
                  var e = !isNaN(Q.y - Q.startY),
                    r = Q.isDragging,
                    n =
                      r &&
                      (Math.abs(Q.x - Q.startX) > 3 ||
                        Math.abs(Q.y - Q.startY) > 3),
                    s = Si(t)
                  !n &&
                    e &&
                    (Q._vx.reset(),
                    Q._vy.reset(),
                    a &&
                      Y &&
                      jn.delayedCall(0.08, function () {
                        if (hi() - lt > 300 && !t.defaultPrevented)
                          if (t.target.click) t.target.click()
                          else if (ot.createEvent) {
                            var e = ot.createEvent('MouseEvents')
                            e.initMouseEvent(
                              'click',
                              !0,
                              !0,
                              Qn,
                              1,
                              s.screenX,
                              s.screenY,
                              s.clientX,
                              s.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              t.target.dispatchEvent(e)
                          }
                      })),
                    (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                    u && r && !P && V.restart(!0),
                    p && r && p(Q),
                    v && v(Q, n)
                }
              }),
              _t = function (t) {
                return (
                  t.touches &&
                  t.touches.length > 1 &&
                  (Q.isGesturing = !0) &&
                  R(t, Q.isDragging)
                )
              },
              yt = function () {
                return (Q.isGesturing = !1) || D(Q)
              },
              bt = function (t) {
                if (!ft(t)) {
                  var e = tt(),
                    r = et()
                  dt((e - rt) * L, (r - nt) * L, 1),
                    (rt = e),
                    (nt = r),
                    u && V.restart(!0)
                }
              },
              xt = function (t) {
                if (!ft(t)) {
                  ;(t = Si(t, a)), z && (W = !0)
                  var e =
                    (1 === t.deltaMode
                      ? s
                      : 2 === t.deltaMode
                      ? Qn.innerHeight
                      : 1) * f
                  dt(t.deltaX * e, t.deltaY * e, 0), u && !P && V.restart(!0)
                }
              },
              wt = function (t) {
                if (!ft(t)) {
                  var e = t.clientX,
                    r = t.clientY,
                    n = e - Q.x,
                    i = r - Q.y
                  ;(Q.x = e),
                    (Q.y = r),
                    (U = !0),
                    u && V.restart(!0),
                    (n || i) && pt(n, i)
                }
              },
              Tt = function (t) {
                ;(Q.event = t), S(Q)
              },
              Ot = function (t) {
                ;(Q.event = t), E(Q)
              },
              kt = function (t) {
                return ft(t) || (Si(t, a) && B(Q))
              }
            ;(V = Q._dc =
              jn
                .delayedCall(l || 0.25, function () {
                  Q._vx.reset(), Q._vy.reset(), V.pause(), u && u(Q)
                })
                .pause()),
              (Q.deltaX = Q.deltaY = 0),
              (Q._vx = Ci(0, 50, !0)),
              (Q._vy = Ci(0, 50, !0)),
              (Q.scrollX = tt),
              (Q.scrollY = et),
              (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
              oi(this),
              (Q.enable = function (t) {
                return (
                  Q.isEnabled ||
                    (mi(st ? ot : i, 'scroll', bi),
                    n.indexOf('scroll') >= 0 &&
                      mi(st ? ot : i, 'scroll', bt, J, $),
                    n.indexOf('wheel') >= 0 && mi(i, 'wheel', xt, J, $),
                    ((n.indexOf('touch') >= 0 && ti) ||
                      n.indexOf('pointer') >= 0) &&
                      (mi(i, si[0], mt, J, $),
                      mi(ot, si[2], vt),
                      mi(ot, si[3], vt),
                      Y && mi(i, 'click', ct, !0, !0),
                      B && mi(i, 'click', kt),
                      R && mi(ot, 'gesturestart', _t),
                      D && mi(ot, 'gestureend', yt),
                      S && mi(i, ei + 'enter', Tt),
                      E && mi(i, ei + 'leave', Ot),
                      M && mi(i, ei + 'move', wt)),
                    (Q.isEnabled = !0),
                    t && t.type && mt(t),
                    I && I(Q)),
                  Q
                )
              }),
              (Q.disable = function () {
                Q.isEnabled &&
                  (li.filter(function (t) {
                    return t !== Q && gi(t.target)
                  }).length || vi(st ? ot : i, 'scroll', bi),
                  Q.isPressed &&
                    (Q._vx.reset(),
                    Q._vy.reset(),
                    vi(P ? i : ot, si[1], gt, !0)),
                  vi(st ? ot : i, 'scroll', bt, $),
                  vi(i, 'wheel', xt, $),
                  vi(i, si[0], mt, $),
                  vi(ot, si[2], vt),
                  vi(ot, si[3], vt),
                  vi(i, 'click', ct, !0),
                  vi(i, 'click', kt),
                  vi(ot, 'gesturestart', _t),
                  vi(ot, 'gestureend', yt),
                  vi(i, ei + 'enter', Tt),
                  vi(i, ei + 'leave', Ot),
                  vi(i, ei + 'move', wt),
                  (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                  F && F(Q))
              }),
              (Q.kill = Q.revert =
                function () {
                  Q.disable()
                  var t = li.indexOf(Q)
                  t >= 0 && li.splice(t, 1), ii === Q && (ii = 0)
                }),
              li.push(Q),
              P && gi(i) && (ii = Q),
              Q.enable(h)
          }),
          (e = t),
          (r = [
            {
              key: 'velocityX',
              get: function () {
                return this._vx.getVelocity()
              }
            },
            {
              key: 'velocityY',
              get: function () {
                return this._vy.getVelocity()
              }
            }
          ]) && Wn(e.prototype, r),
          t
        )
      })()
      ;(Pi.version = '3.12.5'),
        (Pi.create = function (t) {
          return new Pi(t)
        }),
        (Pi.register = Ai),
        (Pi.getAll = function () {
          return li.slice()
        }),
        (Pi.getById = function (t) {
          return li.filter(function (e) {
            return e.vars.id === t
          })[0]
        }),
        ai() && jn.registerPlugin(Pi)
      var Ri,
        Di,
        zi,
        Ii,
        Fi,
        Bi,
        Li,
        $i,
        Yi,
        Ni,
        Xi,
        qi,
        Vi,
        Hi,
        Ui,
        Wi,
        ji,
        Gi,
        Qi,
        Zi,
        Ki,
        Ji,
        ts,
        es,
        rs,
        ns,
        is,
        ss,
        os,
        as,
        us,
        ls,
        cs,
        fs,
        hs,
        ds,
        ps,
        gs,
        ms = 1,
        vs = Date.now,
        _s = vs(),
        ys = 0,
        bs = 0,
        xs = function (t, e, r) {
          var n =
            Is(t) && ('clamp(' === t.substr(0, 6) || t.indexOf('max') > -1)
          return (r['_' + e + 'Clamp'] = n), n ? t.substr(6, t.length - 7) : t
        },
        ws = function (t, e) {
          return !e || (Is(t) && 'clamp(' === t.substr(0, 6))
            ? t
            : 'clamp(' + t + ')'
        },
        Ts = function t () {
          return bs && requestAnimationFrame(t)
        },
        Os = function () {
          return (Hi = 1)
        },
        ks = function () {
          return (Hi = 0)
        },
        Cs = function (t) {
          return t
        },
        Ss = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        Es = function () {
          return 'undefined' != typeof window
        },
        Ms = function () {
          return Ri || (Es() && (Ri = window.gsap) && Ri.registerPlugin && Ri)
        },
        As = function (t) {
          return !!~Li.indexOf(t)
        },
        Ps = function (t) {
          return (
            ('Height' === t ? us : zi['inner' + t]) ||
            Fi['client' + t] ||
            Bi['client' + t]
          )
        },
        Rs = function (t) {
          return (
            pi(t, 'getBoundingClientRect') ||
            (As(t)
              ? function () {
                  return (Uo.width = zi.innerWidth), (Uo.height = us), Uo
                }
              : function () {
                  return io(t)
                })
          )
        },
        Ds = function (t, e) {
          var r = e.s,
            n = e.d2,
            i = e.d,
            s = e.a
          return Math.max(
            0,
            (r = 'scroll' + n) && (s = pi(t, r))
              ? s() - Rs(t)()[i]
              : As(t)
              ? (Fi[r] || Bi[r]) - Ps(n)
              : t[r] - t['offset' + n]
          )
        },
        zs = function (t, e) {
          for (var r = 0; r < Qi.length; r += 3)
            (!e || ~e.indexOf(Qi[r + 1])) && t(Qi[r], Qi[r + 1], Qi[r + 2])
        },
        Is = function (t) {
          return 'string' == typeof t
        },
        Fs = function (t) {
          return 'function' == typeof t
        },
        Bs = function (t) {
          return 'number' == typeof t
        },
        Ls = function (t) {
          return 'object' == typeof t
        },
        $s = function (t, e, r) {
          return t && t.progress(e ? 0 : 1) && r && t.pause()
        },
        Ys = function (t, e) {
          if (t.enabled) {
            var r = t._ctx
              ? t._ctx.add(function () {
                  return e(t)
                })
              : e(t)
            r && r.totalTime && (t.callbackAnimation = r)
          }
        },
        Ns = Math.abs,
        Xs = 'left',
        qs = 'right',
        Vs = 'bottom',
        Hs = 'width',
        Us = 'height',
        Ws = 'Right',
        js = 'Left',
        Gs = 'Top',
        Qs = 'Bottom',
        Zs = 'padding',
        Ks = 'margin',
        Js = 'Width',
        to = 'Height',
        eo = 'px',
        ro = function (t) {
          return zi.getComputedStyle(t)
        },
        no = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r])
          return t
        },
        io = function (t, e) {
          var r =
              e &&
              'matrix(1, 0, 0, 1, 0, 0)' !== ro(t)[Ui] &&
              Ri.to(t, {
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
              }).progress(1),
            n = t.getBoundingClientRect()
          return r && r.progress(0).kill(), n
        },
        so = function (t, e) {
          var r = e.d2
          return t['offset' + r] || t['client' + r] || 0
        },
        oo = function (t) {
          var e,
            r = [],
            n = t.labels,
            i = t.duration()
          for (e in n) r.push(n[e] / i)
          return r
        },
        ao = function (t) {
          var e = Ri.utils.snap(t),
            r =
              Array.isArray(t) &&
              t.slice(0).sort(function (t, e) {
                return t - e
              })
          return r
            ? function (t, n, i) {
                var s
                if ((void 0 === i && (i = 0.001), !n)) return e(t)
                if (n > 0) {
                  for (t -= i, s = 0; s < r.length; s++)
                    if (r[s] >= t) return r[s]
                  return r[s - 1]
                }
                for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s]
                return r[0]
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001)
                var s = e(r)
                return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
                  ? s
                  : e(n < 0 ? r - t : r + t)
              }
        },
        uo = function (t, e, r, n) {
          return r.split(',').forEach(function (r) {
            return t(e, r, n)
          })
        },
        lo = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !n, capture: !!i })
        },
        co = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n)
        },
        fo = function (t, e, r) {
          ;(r = r && r.wheelHandler) && (t(e, 'wheel', r), t(e, 'touchmove', r))
        },
        ho = {
          startColor: 'green',
          endColor: 'red',
          indent: 0,
          fontSize: '16px',
          fontWeight: 'normal'
        },
        po = { toggleActions: 'play', anticipatePin: 0 },
        go = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        mo = function (t, e) {
          if (Is(t)) {
            var r = t.indexOf('='),
              n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0
            ~r &&
              (t.indexOf('%') > r && (n *= e / 100), (t = t.substr(0, r - 1))),
              (t =
                n +
                (t in go
                  ? go[t] * e
                  : ~t.indexOf('%')
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0))
          }
          return t
        },
        vo = function (t, e, r, n, i, s, o, a) {
          var u = i.startColor,
            l = i.endColor,
            c = i.fontSize,
            f = i.indent,
            h = i.fontWeight,
            d = Ii.createElement('div'),
            p = As(r) || 'fixed' === pi(r, 'pinType'),
            g = -1 !== t.indexOf('scroller'),
            m = p ? Bi : r,
            v = -1 !== t.indexOf('start'),
            _ = v ? u : l,
            y =
              'border-color:' +
              _ +
              ';font-size:' +
              c +
              ';color:' +
              _ +
              ';font-weight:' +
              h +
              ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
          return (
            (y += 'position:' + ((g || a) && p ? 'fixed;' : 'absolute;')),
            (g || a || !p) &&
              (y += (n === Ti ? qs : Vs) + ':' + (s + parseFloat(f)) + 'px;'),
            o &&
              (y +=
                'box-sizing:border-box;text-align:left;width:' +
                o.offsetWidth +
                'px;'),
            (d._isStart = v),
            d.setAttribute(
              'class',
              'gsap-marker-' + t + (e ? ' marker-' + e : '')
            ),
            (d.style.cssText = y),
            (d.innerText = e || 0 === e ? t + '-' + e : t),
            m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d),
            (d._offset = d['offset' + n.op.d2]),
            _o(d, 0, n, v),
            d
          )
        },
        _o = function (t, e, r, n) {
          var i = { display: 'block' },
            s = r[n ? 'os2' : 'p2'],
            o = r[n ? 'p2' : 'os2']
          ;(t._isFlipped = n),
            (i[r.a + 'Percent'] = n ? -100 : 0),
            (i[r.a] = n ? '1px' : 0),
            (i['border' + s + Js] = 1),
            (i['border' + o + Js] = 0),
            (i[r.p] = e + 'px'),
            Ri.set(t, i)
        },
        yo = [],
        bo = {},
        xo = function () {
          return vs() - ys > 34 && (hs || (hs = requestAnimationFrame($o)))
        },
        wo = function () {
          ;(!ts || !ts.isPressed || ts.startX > Bi.clientWidth) &&
            (ci.cache++,
            ts ? hs || (hs = requestAnimationFrame($o)) : $o(),
            ys || Eo('scrollStart'),
            (ys = vs()))
        },
        To = function () {
          ;(ns = zi.innerWidth), (rs = zi.innerHeight)
        },
        Oo = function () {
          ci.cache++,
            !Vi &&
              !Ji &&
              !Ii.fullscreenElement &&
              !Ii.webkitFullscreenElement &&
              (!es ||
                ns !== zi.innerWidth ||
                Math.abs(zi.innerHeight - rs) > 0.25 * zi.innerHeight) &&
              $i.restart(!0)
        },
        ko = {},
        Co = [],
        So = function t () {
          return co(Jo, 'scrollEnd', t) || Fo(!0)
        },
        Eo = function (t) {
          return (
            (ko[t] &&
              ko[t].map(function (t) {
                return t()
              })) ||
            Co
          )
        },
        Mo = [],
        Ao = function (t) {
          for (var e = 0; e < Mo.length; e += 5)
            (!t || (Mo[e + 4] && Mo[e + 4].query === t)) &&
              ((Mo[e].style.cssText = Mo[e + 1]),
              Mo[e].getBBox && Mo[e].setAttribute('transform', Mo[e + 2] || ''),
              (Mo[e + 3].uncache = 1))
        },
        Po = function (t, e) {
          var r
          for (Wi = 0; Wi < yo.length; Wi++)
            !(r = yo[Wi]) ||
              (e && r._ctx !== e) ||
              (t ? r.kill(1) : r.revert(!0, !0))
          ;(ls = !0), e && Ao(e), e || Eo('revert')
        },
        Ro = function (t, e) {
          ci.cache++,
            (e || !ds) &&
              ci.forEach(function (t) {
                return Fs(t) && t.cacheID++ && (t.rec = 0)
              }),
            Is(t) && (zi.history.scrollRestoration = os = t)
        },
        Do = 0,
        zo = function () {
          Bi.appendChild(as),
            (us = (!ts && as.offsetHeight) || zi.innerHeight),
            Bi.removeChild(as)
        },
        Io = function (t) {
          return Yi(
            '.gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end'
          ).forEach(function (e) {
            return (e.style.display = t ? 'none' : 'block')
          })
        },
        Fo = function (t, e) {
          if (!ys || t || ls) {
            zo(),
              (ds = Jo.isRefreshing = !0),
              ci.forEach(function (t) {
                return Fs(t) && ++t.cacheID && (t.rec = t())
              })
            var r = Eo('refreshInit')
            Zi && Jo.sort(),
              e || Po(),
              ci.forEach(function (t) {
                Fs(t) &&
                  (t.smooth && (t.target.style.scrollBehavior = 'auto'), t(0))
              }),
              yo.slice(0).forEach(function (t) {
                return t.refresh()
              }),
              (ls = !1),
              yo.forEach(function (t) {
                if (t._subPinOffset && t.pin) {
                  var e = t.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
                    r = t.pin[e]
                  t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh()
                }
              }),
              (cs = 1),
              Io(!0),
              yo.forEach(function (t) {
                var e = Ds(t.scroller, t._dir),
                  r = 'max' === t.vars.end || (t._endClamp && t.end > e),
                  n = t._startClamp && t.start >= e
                ;(r || n) &&
                  t.setPositions(
                    n ? e - 1 : t.start,
                    r ? Math.max(n ? e : t.start + 1, e) : t.end,
                    !0
                  )
              }),
              Io(!1),
              (cs = 0),
              r.forEach(function (t) {
                return t && t.render && t.render(-1)
              }),
              ci.forEach(function (t) {
                Fs(t) &&
                  (t.smooth &&
                    requestAnimationFrame(function () {
                      return (t.target.style.scrollBehavior = 'smooth')
                    }),
                  t.rec && t(t.rec))
              }),
              Ro(os, 1),
              $i.pause(),
              Do++,
              (ds = 2),
              $o(2),
              yo.forEach(function (t) {
                return Fs(t.vars.onRefresh) && t.vars.onRefresh(t)
              }),
              (ds = Jo.isRefreshing = !1),
              Eo('refresh')
          } else lo(Jo, 'scrollEnd', So)
        },
        Bo = 0,
        Lo = 1,
        $o = function (t) {
          if (2 === t || (!ds && !ls)) {
            ;(Jo.isUpdating = !0), gs && gs.update(0)
            var e = yo.length,
              r = vs(),
              n = r - _s >= 50,
              i = e && yo[0].scroll()
            if (
              ((Lo = Bo > i ? -1 : 1),
              ds || (Bo = i),
              n &&
                (ys && !Hi && r - ys > 200 && ((ys = 0), Eo('scrollEnd')),
                (Xi = _s),
                (_s = r)),
              Lo < 0)
            ) {
              for (Wi = e; Wi-- > 0; ) yo[Wi] && yo[Wi].update(0, n)
              Lo = 1
            } else for (Wi = 0; Wi < e; Wi++) yo[Wi] && yo[Wi].update(0, n)
            Jo.isUpdating = !1
          }
          hs = 0
        },
        Yo = [
          Xs,
          'top',
          Vs,
          qs,
          Ks + Qs,
          Ks + Ws,
          Ks + Gs,
          Ks + js,
          'display',
          'flexShrink',
          'float',
          'zIndex',
          'gridColumnStart',
          'gridColumnEnd',
          'gridRowStart',
          'gridRowEnd',
          'gridArea',
          'justifySelf',
          'alignSelf',
          'placeSelf',
          'order'
        ],
        No = Yo.concat([
          Hs,
          Us,
          'boxSizing',
          'max' + Js,
          'max' + to,
          'position',
          Ks,
          Zs,
          Zs + Gs,
          Zs + Ws,
          Zs + Qs,
          Zs + js
        ]),
        Xo = function (t, e, r, n) {
          if (!t._gsap.swappedIn) {
            for (var i, s = Yo.length, o = e.style, a = t.style; s--; )
              o[(i = Yo[s])] = r[i]
            ;(o.position = 'absolute' === r.position ? 'absolute' : 'relative'),
              'inline' === r.display && (o.display = 'inline-block'),
              (a[Vs] = a[qs] = 'auto'),
              (o.flexBasis = r.flexBasis || 'auto'),
              (o.overflow = 'visible'),
              (o.boxSizing = 'border-box'),
              (o[Hs] = so(t, wi) + eo),
              (o[Us] = so(t, Ti) + eo),
              (o[Zs] = a[Ks] = a.top = a[Xs] = '0'),
              Vo(n),
              (a[Hs] = a['max' + Js] = r[Hs]),
              (a[Us] = a['max' + to] = r[Us]),
              (a[Zs] = r[Zs]),
              t.parentNode !== e &&
                (t.parentNode.insertBefore(e, t), e.appendChild(t)),
              (t._gsap.swappedIn = !0)
          }
        },
        qo = /([A-Z])/g,
        Vo = function (t) {
          if (t) {
            var e,
              r,
              n = t.t.style,
              i = t.length,
              s = 0
            for (
              (t.t._gsap || Ri.core.getCache(t.t)).uncache = 1;
              s < i;
              s += 2
            )
              (r = t[s + 1]),
                (e = t[s]),
                r
                  ? (n[e] = r)
                  : n[e] && n.removeProperty(e.replace(qo, '-$1').toLowerCase())
          }
        },
        Ho = function (t) {
          for (var e = No.length, r = t.style, n = [], i = 0; i < e; i++)
            n.push(No[i], r[No[i]])
          return (n.t = t), n
        },
        Uo = { left: 0, top: 0 },
        Wo = function (t, e, r, n, i, s, o, a, u, l, c, f, h, d) {
          Fs(t) && (t = t(a)),
            Is(t) &&
              'max' === t.substr(0, 3) &&
              (t = f + ('=' === t.charAt(4) ? mo('0' + t.substr(3), r) : 0))
          var p,
            g,
            m,
            v = h ? h.time() : 0
          if ((h && h.seek(0), isNaN(t) || (t = +t), Bs(t)))
            h &&
              (t = Ri.utils.mapRange(
                h.scrollTrigger.start,
                h.scrollTrigger.end,
                0,
                f,
                t
              )),
              o && _o(o, r, n, !0)
          else {
            Fs(e) && (e = e(a))
            var _,
              y,
              b,
              x,
              w = (t || '0').split(' ')
            ;(m = Oi(e, a) || Bi),
              ((_ = io(m) || {}) && (_.left || _.top)) ||
                'none' !== ro(m).display ||
                ((x = m.style.display),
                (m.style.display = 'block'),
                (_ = io(m)),
                x ? (m.style.display = x) : m.style.removeProperty('display')),
              (y = mo(w[0], _[n.d])),
              (b = mo(w[1] || '0', r)),
              (t = _[n.p] - u[n.p] - l + y + i - b),
              o && _o(o, b, n, r - b < 20 || (o._isStart && b > 20)),
              (r -= r - b)
          }
          if ((d && ((a[d] = t || -0.001), t < 0 && (t = 0)), s)) {
            var T = t + r,
              O = s._isStart
            ;(p = 'scroll' + n.d2),
              _o(
                s,
                T,
                n,
                (O && T > 20) ||
                  (!O &&
                    (c ? Math.max(Bi[p], Fi[p]) : s.parentNode[p]) <= T + 1)
              ),
              c &&
                ((u = io(o)),
                c && (s.style[n.op.p] = u[n.op.p] - n.op.m - s._offset + eo))
          }
          return (
            h &&
              m &&
              ((p = io(m)),
              h.seek(f),
              (g = io(m)),
              (h._caScrollDist = p[n.p] - g[n.p]),
              (t = (t / h._caScrollDist) * f)),
            h && h.seek(v),
            h ? t : Math.round(t)
          )
        },
        jo = /(webkit|moz|length|cssText|inset)/i,
        Go = function (t, e, r, n) {
          if (t.parentNode !== e) {
            var i,
              s,
              o = t.style
            if (e === Bi) {
              for (i in ((t._stOrig = o.cssText), (s = ro(t))))
                +i ||
                  jo.test(i) ||
                  !s[i] ||
                  'string' != typeof o[i] ||
                  '0' === i ||
                  (o[i] = s[i])
              ;(o.top = r), (o.left = n)
            } else o.cssText = t._stOrig
            ;(Ri.core.getCache(t).uncache = 1), e.appendChild(t)
          }
        },
        Qo = function (t, e, r) {
          var n = e,
            i = n
          return function (e) {
            var s = Math.round(t())
            return (
              s !== n &&
                s !== i &&
                Math.abs(s - n) > 3 &&
                Math.abs(s - i) > 3 &&
                ((e = s), r && r()),
              (i = n),
              (n = e),
              e
            )
          }
        },
        Zo = function (t, e, r) {
          var n = {}
          ;(n[e.p] = '+=' + r), Ri.set(t, n)
        },
        Ko = function (t, e) {
          var r = ki(t, e),
            n = '_scroll' + e.p2,
            i = function e (i, s, o, a, u) {
              var l = e.tween,
                c = s.onComplete,
                f = {}
              o = o || r()
              var h = Qo(r, o, function () {
                l.kill(), (e.tween = 0)
              })
              return (
                (u = (a && u) || 0),
                (a = a || i - o),
                l && l.kill(),
                (s[n] = i),
                (s.inherit = !1),
                (s.modifiers = f),
                (f[n] = function () {
                  return h(o + a * l.ratio + u * l.ratio * l.ratio)
                }),
                (s.onUpdate = function () {
                  ci.cache++, e.tween && $o()
                }),
                (s.onComplete = function () {
                  ;(e.tween = 0), c && c.call(l)
                }),
                (l = e.tween = Ri.to(t, s))
              )
            }
          return (
            (t[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0)
            }),
            lo(t, 'wheel', r.wheelHandler),
            Jo.isTouch && lo(t, 'touchmove', r.wheelHandler),
            i
          )
        },
        Jo = (function () {
          function t (e, r) {
            Di ||
              t.register(Ri) ||
              console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
              ss(this),
              this.init(e, r)
          }
          return (
            (t.prototype.init = function (e, r) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                bs)
              ) {
                var n,
                  i,
                  s,
                  o,
                  a,
                  u,
                  l,
                  c,
                  f,
                  h,
                  d,
                  p,
                  g,
                  m,
                  v,
                  _,
                  y,
                  b,
                  x,
                  w,
                  T,
                  O,
                  k,
                  C,
                  S,
                  E,
                  M,
                  A,
                  P,
                  R,
                  D,
                  z,
                  I,
                  F,
                  B,
                  L,
                  $,
                  Y,
                  N,
                  X,
                  q,
                  V,
                  H = (e = no(
                    Is(e) || Bs(e) || e.nodeType ? { trigger: e } : e,
                    po
                  )),
                  U = H.onUpdate,
                  W = H.toggleClass,
                  j = H.id,
                  G = H.onToggle,
                  Q = H.onRefresh,
                  Z = H.scrub,
                  K = H.trigger,
                  J = H.pin,
                  tt = H.pinSpacing,
                  et = H.invalidateOnRefresh,
                  rt = H.anticipatePin,
                  nt = H.onScrubComplete,
                  it = H.onSnapComplete,
                  st = H.once,
                  ot = H.snap,
                  at = H.pinReparent,
                  ut = H.pinSpacer,
                  lt = H.containerAnimation,
                  ct = H.fastScrollEnd,
                  ft = H.preventOverlaps,
                  ht =
                    e.horizontal ||
                    (e.containerAnimation && !1 !== e.horizontal)
                      ? wi
                      : Ti,
                  dt = !Z && 0 !== Z,
                  pt = Oi(e.scroller || zi),
                  gt = Ri.core.getCache(pt),
                  mt = As(pt),
                  vt =
                    'fixed' ===
                    ('pinType' in e
                      ? e.pinType
                      : pi(pt, 'pinType') || (mt && 'fixed')),
                  _t = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                  yt = dt && e.toggleActions.split(' '),
                  bt = 'markers' in e ? e.markers : po.markers,
                  xt = mt ? 0 : parseFloat(ro(pt)['border' + ht.p2 + Js]) || 0,
                  wt = this,
                  Tt =
                    e.onRefreshInit &&
                    function () {
                      return e.onRefreshInit(wt)
                    },
                  Ot = (function (t, e, r) {
                    var n = r.d,
                      i = r.d2,
                      s = r.a
                    return (s = pi(t, 'getBoundingClientRect'))
                      ? function () {
                          return s()[n]
                        }
                      : function () {
                          return (e ? Ps(i) : t['client' + i]) || 0
                        }
                  })(pt, mt, ht),
                  kt = (function (t, e) {
                    return !e || ~fi.indexOf(t)
                      ? Rs(t)
                      : function () {
                          return Uo
                        }
                  })(pt, mt),
                  Ct = 0,
                  St = 0,
                  Et = 0,
                  Mt = ki(pt, ht)
                if (
                  ((wt._startClamp = wt._endClamp = !1),
                  (wt._dir = ht),
                  (rt *= 45),
                  (wt.scroller = pt),
                  (wt.scroll = lt ? lt.time.bind(lt) : Mt),
                  (o = Mt()),
                  (wt.vars = e),
                  (r = r || e.animation),
                  'refreshPriority' in e &&
                    ((Zi = 1), -9999 === e.refreshPriority && (gs = wt)),
                  (gt.tweenScroll = gt.tweenScroll || {
                    top: Ko(pt, Ti),
                    left: Ko(pt, wi)
                  }),
                  (wt.tweenTo = n = gt.tweenScroll[ht.p]),
                  (wt.scrubDuration = function (t) {
                    ;(I = Bs(t) && t)
                      ? z
                        ? z.duration(t)
                        : (z = Ri.to(r, {
                            ease: 'expo',
                            totalProgress: '+=0',
                            inherit: !1,
                            duration: I,
                            paused: !0,
                            onComplete: function () {
                              return nt && nt(wt)
                            }
                          }))
                      : (z && z.progress(1).kill(), (z = 0))
                  }),
                  r &&
                    ((r.vars.lazy = !1),
                    (r._initted && !wt.isReverted) ||
                      (!1 !== r.vars.immediateRender &&
                        !1 !== e.immediateRender &&
                        r.duration() &&
                        r.render(0, !0, !0)),
                    (wt.animation = r.pause()),
                    (r.scrollTrigger = wt),
                    wt.scrubDuration(Z),
                    (R = 0),
                    j || (j = r.vars.id)),
                  ot &&
                    ((Ls(ot) && !ot.push) || (ot = { snapTo: ot }),
                    'scrollBehavior' in Bi.style &&
                      Ri.set(mt ? [Bi, Fi] : pt, { scrollBehavior: 'auto' }),
                    ci.forEach(function (t) {
                      return (
                        Fs(t) &&
                        t.target === (mt ? Ii.scrollingElement || Fi : pt) &&
                        (t.smooth = !1)
                      )
                    }),
                    (s = Fs(ot.snapTo)
                      ? ot.snapTo
                      : 'labels' === ot.snapTo
                      ? (function (t) {
                          return function (e) {
                            return Ri.utils.snap(oo(t), e)
                          }
                        })(r)
                      : 'labelsDirectional' === ot.snapTo
                      ? ((X = r),
                        function (t, e) {
                          return ao(oo(X))(t, e.direction)
                        })
                      : !1 !== ot.directional
                      ? function (t, e) {
                          return ao(ot.snapTo)(
                            t,
                            vs() - St < 500 ? 0 : e.direction
                          )
                        }
                      : Ri.utils.snap(ot.snapTo)),
                    (F = ot.duration || { min: 0.1, max: 2 }),
                    (F = Ls(F) ? Ni(F.min, F.max) : Ni(F, F)),
                    (B = Ri.delayedCall(ot.delay || I / 2 || 0.1, function () {
                      var t = Mt(),
                        e = vs() - St < 500,
                        i = n.tween
                      if (
                        !(e || Math.abs(wt.getVelocity()) < 10) ||
                        i ||
                        Hi ||
                        Ct === t
                      )
                        wt.isActive && Ct !== t && B.restart(!0)
                      else {
                        var o,
                          a,
                          c = (t - u) / m,
                          f = r && !dt ? r.totalProgress() : c,
                          h = e ? 0 : ((f - D) / (vs() - Xi)) * 1e3 || 0,
                          d = Ri.utils.clamp(
                            -c,
                            1 - c,
                            (Ns(h / 2) * h) / 0.185
                          ),
                          p = c + (!1 === ot.inertia ? 0 : d),
                          g = ot,
                          v = g.onStart,
                          _ = g.onInterrupt,
                          y = g.onComplete
                        if (
                          ((o = s(p, wt)),
                          Bs(o) || (o = p),
                          (a = Math.round(u + o * m)),
                          t <= l && t >= u && a !== t)
                        ) {
                          if (i && !i._initted && i.data <= Ns(a - t)) return
                          !1 === ot.inertia && (d = o - c),
                            n(
                              a,
                              {
                                duration: F(
                                  Ns(
                                    (0.185 * Math.max(Ns(p - f), Ns(o - f))) /
                                      h /
                                      0.05 || 0
                                  )
                                ),
                                ease: ot.ease || 'power3',
                                data: Ns(a - t),
                                onInterrupt: function () {
                                  return B.restart(!0) && _ && _(wt)
                                },
                                onComplete: function () {
                                  wt.update(),
                                    (Ct = Mt()),
                                    r &&
                                      (z
                                        ? z.resetTo(
                                            'totalProgress',
                                            o,
                                            r._tTime / r._tDur
                                          )
                                        : r.progress(o)),
                                    (R = D =
                                      r && !dt
                                        ? r.totalProgress()
                                        : wt.progress),
                                    it && it(wt),
                                    y && y(wt)
                                }
                              },
                              t,
                              d * m,
                              a - t - d * m
                            ),
                            v && v(wt, n.tween)
                        }
                      }
                    }).pause())),
                  j && (bo[j] = wt),
                  (N =
                    (K = wt.trigger = Oi(K || (!0 !== J && J))) &&
                    K._gsap &&
                    K._gsap.stRevert) && (N = N(wt)),
                  (J = !0 === J ? K : Oi(J)),
                  Is(W) && (W = { targets: K, className: W }),
                  J &&
                    (!1 === tt ||
                      tt === Ks ||
                      (tt =
                        !(
                          !tt &&
                          J.parentNode &&
                          J.parentNode.style &&
                          'flex' === ro(J.parentNode).display
                        ) && Zs),
                    (wt.pin = J),
                    (i = Ri.core.getCache(J)).spacer
                      ? (v = i.pinState)
                      : (ut &&
                          ((ut = Oi(ut)) &&
                            !ut.nodeType &&
                            (ut = ut.current || ut.nativeElement),
                          (i.spacerIsNative = !!ut),
                          ut && (i.spacerState = Ho(ut))),
                        (i.spacer = b = ut || Ii.createElement('div')),
                        b.classList.add('pin-spacer'),
                        j && b.classList.add('pin-spacer-' + j),
                        (i.pinState = v = Ho(J))),
                    !1 !== e.force3D && Ri.set(J, { force3D: !0 }),
                    (wt.spacer = b = i.spacer),
                    (P = ro(J)),
                    (C = P[tt + ht.os2]),
                    (w = Ri.getProperty(J)),
                    (T = Ri.quickSetter(J, ht.a, eo)),
                    Xo(J, b, P),
                    (y = Ho(J))),
                  bt)
                ) {
                  ;(p = Ls(bt) ? no(bt, ho) : ho),
                    (h = vo('scroller-start', j, pt, ht, p, 0)),
                    (d = vo('scroller-end', j, pt, ht, p, 0, h)),
                    (x = h['offset' + ht.op.d2])
                  var At = Oi(pi(pt, 'content') || pt)
                  ;(c = this.markerStart = vo('start', j, At, ht, p, x, 0, lt)),
                    (f = this.markerEnd = vo('end', j, At, ht, p, x, 0, lt)),
                    lt && (Y = Ri.quickSetter([c, f], ht.a, eo)),
                    vt ||
                      (fi.length && !0 === pi(pt, 'fixedMarkers')) ||
                      ((V = ro((q = mt ? Bi : pt)).position),
                      (q.style.position =
                        'absolute' === V || 'fixed' === V ? V : 'relative'),
                      Ri.set([h, d], { force3D: !0 }),
                      (E = Ri.quickSetter(h, ht.a, eo)),
                      (A = Ri.quickSetter(d, ht.a, eo)))
                }
                if (lt) {
                  var Pt = lt.vars.onUpdate,
                    Rt = lt.vars.onUpdateParams
                  lt.eventCallback('onUpdate', function () {
                    wt.update(0, 0, 1), Pt && Pt.apply(lt, Rt || [])
                  })
                }
                if (
                  ((wt.previous = function () {
                    return yo[yo.indexOf(wt) - 1]
                  }),
                  (wt.next = function () {
                    return yo[yo.indexOf(wt) + 1]
                  }),
                  (wt.revert = function (t, e) {
                    if (!e) return wt.kill(!0)
                    var n = !1 !== t || !wt.enabled,
                      i = Vi
                    n !== wt.isReverted &&
                      (n &&
                        ((L = Math.max(Mt(), wt.scroll.rec || 0)),
                        (Et = wt.progress),
                        ($ = r && r.progress())),
                      c &&
                        [c, f, h, d].forEach(function (t) {
                          return (t.style.display = n ? 'none' : 'block')
                        }),
                      n && ((Vi = wt), wt.update(n)),
                      !J ||
                        (at && wt.isActive) ||
                        (n
                          ? (function (t, e, r) {
                              Vo(r)
                              var n = t._gsap
                              if (n.spacerIsNative) Vo(n.spacerState)
                              else if (t._gsap.swappedIn) {
                                var i = e.parentNode
                                i && (i.insertBefore(t, e), i.removeChild(e))
                              }
                              t._gsap.swappedIn = !1
                            })(J, b, v)
                          : Xo(J, b, ro(J), S)),
                      n || wt.update(n),
                      (Vi = i),
                      (wt.isReverted = n))
                  }),
                  (wt.refresh = function (i, s, p, x) {
                    if ((!Vi && wt.enabled) || s)
                      if (J && i && ys) lo(t, 'scrollEnd', So)
                      else {
                        !ds && Tt && Tt(wt),
                          (Vi = wt),
                          n.tween && !p && (n.tween.kill(), (n.tween = 0)),
                          z && z.pause(),
                          et && r && r.revert({ kill: !1 }).invalidate(),
                          wt.isReverted || wt.revert(!0, !0),
                          (wt._subPinOffset = !1)
                        var T,
                          C,
                          E,
                          A,
                          P,
                          R,
                          D,
                          I,
                          F,
                          Y,
                          N,
                          X,
                          q,
                          V = Ot(),
                          H = kt(),
                          U = lt ? lt.duration() : Ds(pt, ht),
                          W = m <= 0.01,
                          j = 0,
                          G = x || 0,
                          Z = Ls(p) ? p.end : e.end,
                          rt = e.endTrigger || K,
                          nt = Ls(p)
                            ? p.start
                            : e.start ||
                              (0 !== e.start && K ? (J ? '0 0' : '0 100%') : 0),
                          it = (wt.pinnedContainer =
                            e.pinnedContainer && Oi(e.pinnedContainer, wt)),
                          st = (K && Math.max(0, yo.indexOf(wt))) || 0,
                          ot = st
                        for (
                          bt &&
                          Ls(p) &&
                          ((X = Ri.getProperty(h, ht.p)),
                          (q = Ri.getProperty(d, ht.p)));
                          ot--;

                        )
                          (R = yo[ot]).end || R.refresh(0, 1) || (Vi = wt),
                            !(D = R.pin) ||
                              (D !== K && D !== J && D !== it) ||
                              R.isReverted ||
                              (Y || (Y = []), Y.unshift(R), R.revert(!0, !0)),
                            R !== yo[ot] && (st--, ot--)
                        for (
                          Fs(nt) && (nt = nt(wt)),
                            nt = xs(nt, 'start', wt),
                            u =
                              Wo(
                                nt,
                                K,
                                V,
                                ht,
                                Mt(),
                                c,
                                h,
                                wt,
                                H,
                                xt,
                                vt,
                                U,
                                lt,
                                wt._startClamp && '_startClamp'
                              ) || (J ? -0.001 : 0),
                            Fs(Z) && (Z = Z(wt)),
                            Is(Z) &&
                              !Z.indexOf('+=') &&
                              (~Z.indexOf(' ')
                                ? (Z = (Is(nt) ? nt.split(' ')[0] : '') + Z)
                                : ((j = mo(Z.substr(2), V)),
                                  (Z = Is(nt)
                                    ? nt
                                    : (lt
                                        ? Ri.utils.mapRange(
                                            0,
                                            lt.duration(),
                                            lt.scrollTrigger.start,
                                            lt.scrollTrigger.end,
                                            u
                                          )
                                        : u) + j),
                                  (rt = K))),
                            Z = xs(Z, 'end', wt),
                            l =
                              Math.max(
                                u,
                                Wo(
                                  Z || (rt ? '100% 0' : U),
                                  rt,
                                  V,
                                  ht,
                                  Mt() + j,
                                  f,
                                  d,
                                  wt,
                                  H,
                                  xt,
                                  vt,
                                  U,
                                  lt,
                                  wt._endClamp && '_endClamp'
                                )
                              ) || -0.001,
                            j = 0,
                            ot = st;
                          ot--;

                        )
                          (D = (R = yo[ot]).pin) &&
                            R.start - R._pinPush <= u &&
                            !lt &&
                            R.end > 0 &&
                            ((T =
                              R.end -
                              (wt._startClamp
                                ? Math.max(0, R.start)
                                : R.start)),
                            ((D === K && R.start - R._pinPush < u) ||
                              D === it) &&
                              isNaN(nt) &&
                              (j += T * (1 - R.progress)),
                            D === J && (G += T))
                        if (
                          ((u += j),
                          (l += j),
                          wt._startClamp && (wt._startClamp += j),
                          wt._endClamp &&
                            !ds &&
                            ((wt._endClamp = l || -0.001),
                            (l = Math.min(l, Ds(pt, ht)))),
                          (m = l - u || ((u -= 0.01) && 0.001)),
                          W &&
                            (Et = Ri.utils.clamp(
                              0,
                              1,
                              Ri.utils.normalize(u, l, L)
                            )),
                          (wt._pinPush = G),
                          c &&
                            j &&
                            (((T = {})[ht.a] = '+=' + j),
                            it && (T[ht.p] = '-=' + Mt()),
                            Ri.set([c, f], T)),
                          !J || (cs && wt.end >= Ds(pt, ht)))
                        ) {
                          if (K && Mt() && !lt)
                            for (C = K.parentNode; C && C !== Bi; )
                              C._pinOffset &&
                                ((u -= C._pinOffset), (l -= C._pinOffset)),
                                (C = C.parentNode)
                        } else
                          (T = ro(J)),
                            (A = ht === Ti),
                            (E = Mt()),
                            (O = parseFloat(w(ht.a)) + G),
                            !U &&
                              l > 1 &&
                              ((N = {
                                style: (N = (
                                  mt ? Ii.scrollingElement || Fi : pt
                                ).style),
                                value: N['overflow' + ht.a.toUpperCase()]
                              }),
                              mt &&
                                'scroll' !==
                                  ro(Bi)['overflow' + ht.a.toUpperCase()] &&
                                (N.style['overflow' + ht.a.toUpperCase()] =
                                  'scroll')),
                            Xo(J, b, T),
                            (y = Ho(J)),
                            (C = io(J, !0)),
                            (I = vt && ki(pt, A ? wi : Ti)()),
                            tt
                              ? (((S = [tt + ht.os2, m + G + eo]).t = b),
                                (ot = tt === Zs ? so(J, ht) + m + G : 0) &&
                                  (S.push(ht.d, ot + eo),
                                  'auto' !== b.style.flexBasis &&
                                    (b.style.flexBasis = ot + eo)),
                                Vo(S),
                                it &&
                                  yo.forEach(function (t) {
                                    t.pin === it &&
                                      !1 !== t.vars.pinSpacing &&
                                      (t._subPinOffset = !0)
                                  }),
                                vt && Mt(L))
                              : (ot = so(J, ht)) &&
                                'auto' !== b.style.flexBasis &&
                                (b.style.flexBasis = ot + eo),
                            vt &&
                              (((P = {
                                top: C.top + (A ? E - u : I) + eo,
                                left: C.left + (A ? I : E - u) + eo,
                                boxSizing: 'border-box',
                                position: 'fixed'
                              })[Hs] = P['max' + Js] =
                                Math.ceil(C.width) + eo),
                              (P[Us] = P['max' + to] =
                                Math.ceil(C.height) + eo),
                              (P[Ks] =
                                P[Ks + Gs] =
                                P[Ks + Ws] =
                                P[Ks + Qs] =
                                P[Ks + js] =
                                  '0'),
                              (P[Zs] = T[Zs]),
                              (P[Zs + Gs] = T[Zs + Gs]),
                              (P[Zs + Ws] = T[Zs + Ws]),
                              (P[Zs + Qs] = T[Zs + Qs]),
                              (P[Zs + js] = T[Zs + js]),
                              (_ = (function (t, e, r) {
                                for (
                                  var n, i = [], s = t.length, o = r ? 8 : 0;
                                  o < s;
                                  o += 2
                                )
                                  (n = t[o]),
                                    i.push(n, n in e ? e[n] : t[o + 1])
                                return (i.t = t.t), i
                              })(v, P, at)),
                              ds && Mt(0)),
                            r
                              ? ((F = r._initted),
                                Ki(1),
                                r.render(r.duration(), !0, !0),
                                (k = w(ht.a) - O + m + G),
                                (M = Math.abs(m - k) > 1),
                                vt && M && _.splice(_.length - 2, 2),
                                r.render(0, !0, !0),
                                F || r.invalidate(!0),
                                r.parent || r.totalTime(r.totalTime()),
                                Ki(0))
                              : (k = m),
                            N &&
                              (N.value
                                ? (N.style['overflow' + ht.a.toUpperCase()] =
                                    N.value)
                                : N.style.removeProperty('overflow-' + ht.a))
                        Y &&
                          Y.forEach(function (t) {
                            return t.revert(!1, !0)
                          }),
                          (wt.start = u),
                          (wt.end = l),
                          (o = a = ds ? L : Mt()),
                          lt || ds || (o < L && Mt(L), (wt.scroll.rec = 0)),
                          wt.revert(!1, !0),
                          (St = vs()),
                          B && ((Ct = -1), B.restart(!0)),
                          (Vi = 0),
                          r &&
                            dt &&
                            (r._initted || $) &&
                            r.progress() !== $ &&
                            r.progress($ || 0, !0).render(r.time(), !0, !0),
                          (W || Et !== wt.progress || lt || et) &&
                            (r &&
                              !dt &&
                              r.totalProgress(
                                lt && u < -0.001 && !Et
                                  ? Ri.utils.normalize(u, l, 0)
                                  : Et,
                                !0
                              ),
                            (wt.progress = W || (o - u) / m === Et ? 0 : Et)),
                          J &&
                            tt &&
                            (b._pinOffset = Math.round(wt.progress * k)),
                          z && z.invalidate(),
                          isNaN(X) ||
                            ((X -= Ri.getProperty(h, ht.p)),
                            (q -= Ri.getProperty(d, ht.p)),
                            Zo(h, ht, X),
                            Zo(c, ht, X - (x || 0)),
                            Zo(d, ht, q),
                            Zo(f, ht, q - (x || 0))),
                          W && !ds && wt.update(),
                          !Q || ds || g || ((g = !0), Q(wt), (g = !1))
                      }
                  }),
                  (wt.getVelocity = function () {
                    return ((Mt() - a) / (vs() - Xi)) * 1e3 || 0
                  }),
                  (wt.endAnimation = function () {
                    $s(wt.callbackAnimation),
                      r &&
                        (z
                          ? z.progress(1)
                          : r.paused()
                          ? dt || $s(r, wt.direction < 0, 1)
                          : $s(r, r.reversed()))
                  }),
                  (wt.labelToScroll = function (t) {
                    return (
                      (r &&
                        r.labels &&
                        (u || wt.refresh() || u) +
                          (r.labels[t] / r.duration()) * m) ||
                      0
                    )
                  }),
                  (wt.getTrailing = function (t) {
                    var e = yo.indexOf(wt),
                      r =
                        wt.direction > 0
                          ? yo.slice(0, e).reverse()
                          : yo.slice(e + 1)
                    return (
                      Is(t)
                        ? r.filter(function (e) {
                            return e.vars.preventOverlaps === t
                          })
                        : r
                    ).filter(function (t) {
                      return wt.direction > 0 ? t.end <= u : t.start >= l
                    })
                  }),
                  (wt.update = function (t, e, i) {
                    if (!lt || i || t) {
                      var s,
                        c,
                        f,
                        d,
                        p,
                        g,
                        v,
                        x = !0 === ds ? L : wt.scroll(),
                        w = t ? 0 : (x - u) / m,
                        S = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                        P = wt.progress
                      if (
                        (e &&
                          ((a = o),
                          (o = lt ? Mt() : x),
                          ot &&
                            ((D = R), (R = r && !dt ? r.totalProgress() : S))),
                        rt &&
                          J &&
                          !Vi &&
                          !ms &&
                          ys &&
                          (!S && u < x + ((x - a) / (vs() - Xi)) * rt
                            ? (S = 1e-4)
                            : 1 === S &&
                              l > x + ((x - a) / (vs() - Xi)) * rt &&
                              (S = 0.9999)),
                        S !== P && wt.enabled)
                      ) {
                        if (
                          ((d =
                            (p =
                              (s = wt.isActive = !!S && S < 1) !=
                              (!!P && P < 1)) || !!S != !!P),
                          (wt.direction = S > P ? 1 : -1),
                          (wt.progress = S),
                          d &&
                            !Vi &&
                            ((c = S && !P ? 0 : 1 === S ? 1 : 1 === P ? 2 : 3),
                            dt &&
                              ((f =
                                (!p && 'none' !== yt[c + 1] && yt[c + 1]) ||
                                yt[c]),
                              (v =
                                r &&
                                ('complete' === f ||
                                  'reset' === f ||
                                  f in r)))),
                          ft &&
                            (p || v) &&
                            (v || Z || !r) &&
                            (Fs(ft)
                              ? ft(wt)
                              : wt.getTrailing(ft).forEach(function (t) {
                                  return t.endAnimation()
                                })),
                          dt ||
                            (!z || Vi || ms
                              ? r && r.totalProgress(S, !(!Vi || (!St && !t)))
                              : (z._dp._time - z._start !== z._time &&
                                  z.render(z._dp._time - z._start),
                                z.resetTo
                                  ? z.resetTo(
                                      'totalProgress',
                                      S,
                                      r._tTime / r._tDur
                                    )
                                  : ((z.vars.totalProgress = S),
                                    z.invalidate().restart()))),
                          J)
                        )
                          if ((t && tt && (b.style[tt + ht.os2] = C), vt)) {
                            if (d) {
                              if (
                                ((g =
                                  !t &&
                                  S > P &&
                                  l + 1 > x &&
                                  x + 1 >= Ds(pt, ht)),
                                at)
                              )
                                if (t || (!s && !g)) Go(J, b)
                                else {
                                  var I = io(J, !0),
                                    F = x - u
                                  Go(
                                    J,
                                    Bi,
                                    I.top + (ht === Ti ? F : 0) + eo,
                                    I.left + (ht === Ti ? 0 : F) + eo
                                  )
                                }
                              Vo(s || g ? _ : y),
                                (M && S < 1 && s) ||
                                  T(O + (1 !== S || g ? 0 : k))
                            }
                          } else T(Ss(O + k * S))
                        ot && !n.tween && !Vi && !ms && B.restart(!0),
                          W &&
                            (p || (st && S && (S < 1 || !fs))) &&
                            Yi(W.targets).forEach(function (t) {
                              return t.classList[s || st ? 'add' : 'remove'](
                                W.className
                              )
                            }),
                          U && !dt && !t && U(wt),
                          d && !Vi
                            ? (dt &&
                                (v &&
                                  ('complete' === f
                                    ? r.pause().totalProgress(1)
                                    : 'reset' === f
                                    ? r.restart(!0).pause()
                                    : 'restart' === f
                                    ? r.restart(!0)
                                    : r[f]()),
                                U && U(wt)),
                              (!p && fs) ||
                                (G && p && Ys(wt, G),
                                _t[c] && Ys(wt, _t[c]),
                                st && (1 === S ? wt.kill(!1, 1) : (_t[c] = 0)),
                                p ||
                                  (_t[(c = 1 === S ? 1 : 3)] && Ys(wt, _t[c]))),
                              ct &&
                                !s &&
                                Math.abs(wt.getVelocity()) >
                                  (Bs(ct) ? ct : 2500) &&
                                ($s(wt.callbackAnimation),
                                z
                                  ? z.progress(1)
                                  : $s(r, 'reverse' === f ? 1 : !S, 1)))
                            : dt && U && !Vi && U(wt)
                      }
                      if (A) {
                        var $ = lt
                          ? (x / lt.duration()) * (lt._caScrollDist || 0)
                          : x
                        E($ + (h._isFlipped ? 1 : 0)), A($)
                      }
                      Y && Y((-x / lt.duration()) * (lt._caScrollDist || 0))
                    }
                  }),
                  (wt.enable = function (e, r) {
                    wt.enabled ||
                      ((wt.enabled = !0),
                      lo(pt, 'resize', Oo),
                      mt || lo(pt, 'scroll', wo),
                      Tt && lo(t, 'refreshInit', Tt),
                      !1 !== e && ((wt.progress = Et = 0), (o = a = Ct = Mt())),
                      !1 !== r && wt.refresh())
                  }),
                  (wt.getTween = function (t) {
                    return t && n ? n.tween : z
                  }),
                  (wt.setPositions = function (t, e, r, n) {
                    if (lt) {
                      var i = lt.scrollTrigger,
                        s = lt.duration(),
                        o = i.end - i.start
                      ;(t = i.start + (o * t) / s), (e = i.start + (o * e) / s)
                    }
                    wt.refresh(
                      !1,
                      !1,
                      {
                        start: ws(t, r && !!wt._startClamp),
                        end: ws(e, r && !!wt._endClamp)
                      },
                      n
                    ),
                      wt.update()
                  }),
                  (wt.adjustPinSpacing = function (t) {
                    if (S && t) {
                      var e = S.indexOf(ht.d) + 1
                      ;(S[e] = parseFloat(S[e]) + t + eo),
                        (S[1] = parseFloat(S[1]) + t + eo),
                        Vo(S)
                    }
                  }),
                  (wt.disable = function (e, r) {
                    if (
                      wt.enabled &&
                      (!1 !== e && wt.revert(!0, !0),
                      (wt.enabled = wt.isActive = !1),
                      r || (z && z.pause()),
                      (L = 0),
                      i && (i.uncache = 1),
                      Tt && co(t, 'refreshInit', Tt),
                      B &&
                        (B.pause(), n.tween && n.tween.kill() && (n.tween = 0)),
                      !mt)
                    ) {
                      for (var s = yo.length; s--; )
                        if (yo[s].scroller === pt && yo[s] !== wt) return
                      co(pt, 'resize', Oo), mt || co(pt, 'scroll', wo)
                    }
                  }),
                  (wt.kill = function (t, n) {
                    wt.disable(t, n), z && !n && z.kill(), j && delete bo[j]
                    var s = yo.indexOf(wt)
                    s >= 0 && yo.splice(s, 1),
                      s === Wi && Lo > 0 && Wi--,
                      (s = 0),
                      yo.forEach(function (t) {
                        return t.scroller === wt.scroller && (s = 1)
                      }),
                      s || ds || (wt.scroll.rec = 0),
                      r &&
                        ((r.scrollTrigger = null),
                        t && r.revert({ kill: !1 }),
                        n || r.kill()),
                      c &&
                        [c, f, h, d].forEach(function (t) {
                          return t.parentNode && t.parentNode.removeChild(t)
                        }),
                      gs === wt && (gs = 0),
                      J &&
                        (i && (i.uncache = 1),
                        (s = 0),
                        yo.forEach(function (t) {
                          return t.pin === J && s++
                        }),
                        s || (i.spacer = 0)),
                      e.onKill && e.onKill(wt)
                  }),
                  yo.push(wt),
                  wt.enable(!1, !1),
                  N && N(wt),
                  r && r.add && !m)
                ) {
                  var Dt = wt.update
                  ;(wt.update = function () {
                    ;(wt.update = Dt), u || l || wt.refresh()
                  }),
                    Ri.delayedCall(0.01, wt.update),
                    (m = 0.01),
                    (u = l = 0)
                } else wt.refresh()
                J &&
                  (function () {
                    if (ps !== Do) {
                      var t = (ps = Do)
                      requestAnimationFrame(function () {
                        return t === Do && Fo(!0)
                      })
                    }
                  })()
              } else this.update = this.refresh = this.kill = Cs
            }),
            (t.register = function (e) {
              return (
                Di ||
                  ((Ri = e || Ms()),
                  Es() && window.document && t.enable(),
                  (Di = bs)),
                Di
              )
            }),
            (t.defaults = function (t) {
              if (t) for (var e in t) po[e] = t[e]
              return po
            }),
            (t.disable = function (t, e) {
              ;(bs = 0),
                yo.forEach(function (r) {
                  return r[e ? 'kill' : 'disable'](t)
                }),
                co(zi, 'wheel', wo),
                co(Ii, 'scroll', wo),
                clearInterval(qi),
                co(Ii, 'touchcancel', Cs),
                co(Bi, 'touchstart', Cs),
                uo(co, Ii, 'pointerdown,touchstart,mousedown', Os),
                uo(co, Ii, 'pointerup,touchend,mouseup', ks),
                $i.kill(),
                zs(co)
              for (var r = 0; r < ci.length; r += 3)
                fo(co, ci[r], ci[r + 1]), fo(co, ci[r], ci[r + 2])
            }),
            (t.enable = function () {
              if (
                ((zi = window),
                (Ii = document),
                (Fi = Ii.documentElement),
                (Bi = Ii.body),
                Ri &&
                  ((Yi = Ri.utils.toArray),
                  (Ni = Ri.utils.clamp),
                  (ss = Ri.core.context || Cs),
                  (Ki = Ri.core.suppressOverwrites || Cs),
                  (os = zi.history.scrollRestoration || 'auto'),
                  (Bo = zi.pageYOffset),
                  Ri.core.globals('ScrollTrigger', t),
                  Bi))
              ) {
                ;(bs = 1),
                  ((as = document.createElement('div')).style.height = '100vh'),
                  (as.style.position = 'absolute'),
                  zo(),
                  Ts(),
                  Pi.register(Ri),
                  (t.isTouch = Pi.isTouch),
                  (is =
                    Pi.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (es = 1 === Pi.isTouch),
                  lo(zi, 'wheel', wo),
                  (Li = [zi, Ii, Fi, Bi]),
                  Ri.matchMedia
                    ? ((t.matchMedia = function (t) {
                        var e,
                          r = Ri.matchMedia()
                        for (e in t) r.add(e, t[e])
                        return r
                      }),
                      Ri.addEventListener('matchMediaInit', function () {
                        return Po()
                      }),
                      Ri.addEventListener('matchMediaRevert', function () {
                        return Ao()
                      }),
                      Ri.addEventListener('matchMedia', function () {
                        Fo(0, 1), Eo('matchMedia')
                      }),
                      Ri.matchMedia('(orientation: portrait)', function () {
                        return To(), To
                      }))
                    : console.warn('Requires GSAP 3.11.0 or later'),
                  To(),
                  lo(Ii, 'scroll', wo)
                var e,
                  r,
                  n = Bi.style,
                  i = n.borderTopStyle,
                  s = Ri.core.Animation.prototype
                for (
                  s.revert ||
                    Object.defineProperty(s, 'revert', {
                      value: function () {
                        return this.time(-0.01, !0)
                      }
                    }),
                    n.borderTopStyle = 'solid',
                    e = io(Bi),
                    Ti.m = Math.round(e.top + Ti.sc()) || 0,
                    wi.m = Math.round(e.left + wi.sc()) || 0,
                    i
                      ? (n.borderTopStyle = i)
                      : n.removeProperty('border-top-style'),
                    qi = setInterval(xo, 250),
                    Ri.delayedCall(0.5, function () {
                      return (ms = 0)
                    }),
                    lo(Ii, 'touchcancel', Cs),
                    lo(Bi, 'touchstart', Cs),
                    uo(lo, Ii, 'pointerdown,touchstart,mousedown', Os),
                    uo(lo, Ii, 'pointerup,touchend,mouseup', ks),
                    Ui = Ri.utils.checkPrefix('transform'),
                    No.push(Ui),
                    Di = vs(),
                    $i = Ri.delayedCall(0.2, Fo).pause(),
                    Qi = [
                      Ii,
                      'visibilitychange',
                      function () {
                        var t = zi.innerWidth,
                          e = zi.innerHeight
                        Ii.hidden
                          ? ((ji = t), (Gi = e))
                          : (ji === t && Gi === e) || Oo()
                      },
                      Ii,
                      'DOMContentLoaded',
                      Fo,
                      zi,
                      'load',
                      Fo,
                      zi,
                      'resize',
                      Oo
                    ],
                    zs(lo),
                    yo.forEach(function (t) {
                      return t.enable(0, 1)
                    }),
                    r = 0;
                  r < ci.length;
                  r += 3
                )
                  fo(co, ci[r], ci[r + 1]), fo(co, ci[r], ci[r + 2])
              }
            }),
            (t.config = function (e) {
              'limitCallbacks' in e && (fs = !!e.limitCallbacks)
              var r = e.syncInterval
              ;(r && clearInterval(qi)) || ((qi = r) && setInterval(xo, r)),
                'ignoreMobileResize' in e &&
                  (es = 1 === t.isTouch && e.ignoreMobileResize),
                'autoRefreshEvents' in e &&
                  (zs(co) || zs(lo, e.autoRefreshEvents || 'none'),
                  (Ji = -1 === (e.autoRefreshEvents + '').indexOf('resize')))
            }),
            (t.scrollerProxy = function (t, e) {
              var r = Oi(t),
                n = ci.indexOf(r),
                i = As(r)
              ~n && ci.splice(n, i ? 6 : 2),
                e && (i ? fi.unshift(zi, e, Bi, e, Fi, e) : fi.unshift(r, e))
            }),
            (t.clearMatchMedia = function (t) {
              yo.forEach(function (e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
              })
            }),
            (t.isInViewport = function (t, e, r) {
              var n = (Is(t) ? Oi(t) : t).getBoundingClientRect(),
                i = n[r ? Hs : Us] * e || 0
              return r
                ? n.right - i > 0 && n.left + i < zi.innerWidth
                : n.bottom - i > 0 && n.top + i < zi.innerHeight
            }),
            (t.positionInViewport = function (t, e, r) {
              Is(t) && (t = Oi(t))
              var n = t.getBoundingClientRect(),
                i = n[r ? Hs : Us],
                s =
                  null == e
                    ? i / 2
                    : e in go
                    ? go[e] * i
                    : ~e.indexOf('%')
                    ? (parseFloat(e) * i) / 100
                    : parseFloat(e) || 0
              return r
                ? (n.left + s) / zi.innerWidth
                : (n.top + s) / zi.innerHeight
            }),
            (t.killAll = function (t) {
              if (
                (yo.slice(0).forEach(function (t) {
                  return 'ScrollSmoother' !== t.vars.id && t.kill()
                }),
                !0 !== t)
              ) {
                var e = ko.killAll || []
                ;(ko = {}),
                  e.forEach(function (t) {
                    return t()
                  })
              }
            }),
            t
          )
        })()
      ;(Jo.version = '3.12.5'),
        (Jo.saveStyles = function (t) {
          return t
            ? Yi(t).forEach(function (t) {
                if (t && t.style) {
                  var e = Mo.indexOf(t)
                  e >= 0 && Mo.splice(e, 5),
                    Mo.push(
                      t,
                      t.style.cssText,
                      t.getBBox && t.getAttribute('transform'),
                      Ri.core.getCache(t),
                      ss()
                    )
                }
              })
            : Mo
        }),
        (Jo.revert = function (t, e) {
          return Po(!t, e)
        }),
        (Jo.create = function (t, e) {
          return new Jo(t, e)
        }),
        (Jo.refresh = function (t) {
          return t ? Oo() : (Di || Jo.register()) && Fo(!0)
        }),
        (Jo.update = function (t) {
          return ++ci.cache && $o(!0 === t ? 2 : 0)
        }),
        (Jo.clearScrollMemory = Ro),
        (Jo.maxScroll = function (t, e) {
          return Ds(t, e ? wi : Ti)
        }),
        (Jo.getScrollFunc = function (t, e) {
          return ki(Oi(t), e ? wi : Ti)
        }),
        (Jo.getById = function (t) {
          return bo[t]
        }),
        (Jo.getAll = function () {
          return yo.filter(function (t) {
            return 'ScrollSmoother' !== t.vars.id
          })
        }),
        (Jo.isScrolling = function () {
          return !!ys
        }),
        (Jo.snapDirectional = ao),
        (Jo.addEventListener = function (t, e) {
          var r = ko[t] || (ko[t] = [])
          ~r.indexOf(e) || r.push(e)
        }),
        (Jo.removeEventListener = function (t, e) {
          var r = ko[t],
            n = r && r.indexOf(e)
          n >= 0 && r.splice(n, 1)
        }),
        (Jo.batch = function (t, e) {
          var r,
            n = [],
            i = {},
            s = e.interval || 0.016,
            o = e.batchMax || 1e9,
            a = function (t, e) {
              var r = [],
                n = [],
                i = Ri.delayedCall(s, function () {
                  e(r, n), (r = []), (n = [])
                }).pause()
              return function (t) {
                r.length || i.restart(!0),
                  r.push(t.trigger),
                  n.push(t),
                  o <= r.length && i.progress(1)
              }
            }
          for (r in e)
            i[r] =
              'on' === r.substr(0, 2) && Fs(e[r]) && 'onRefreshInit' !== r
                ? a(0, e[r])
                : e[r]
          return (
            Fs(o) &&
              ((o = o()),
              lo(Jo, 'refresh', function () {
                return (o = e.batchMax())
              })),
            Yi(t).forEach(function (t) {
              var e = {}
              for (r in i) e[r] = i[r]
              ;(e.trigger = t), n.push(Jo.create(e))
            }),
            n
          )
        })
      var ta,
        ea = function (t, e, r, n) {
          return (
            e > n ? t(n) : e < 0 && t(0),
            r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
          )
        },
        ra = function t (e, r) {
          !0 === r
            ? e.style.removeProperty('touch-action')
            : (e.style.touchAction =
                !0 === r
                  ? 'auto'
                  : r
                  ? 'pan-' + r + (Pi.isTouch ? ' pinch-zoom' : '')
                  : 'none'),
            e === Fi && t(Bi, r)
        },
        na = { auto: 1, scroll: 1 },
        ia = function (t) {
          var e,
            r = t.event,
            n = t.target,
            i = t.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            o = s._gsap || Ri.core.getCache(s),
            a = vs()
          if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (
              ;
              s &&
              s !== Bi &&
              ((s.scrollHeight <= s.clientHeight &&
                s.scrollWidth <= s.clientWidth) ||
                (!na[(e = ro(s)).overflowY] && !na[e.overflowX]));

            )
              s = s.parentNode
            ;(o._isScroll =
              s &&
              s !== n &&
              !As(s) &&
              (na[(e = ro(s)).overflowY] || na[e.overflowX])),
              (o._isScrollT = a)
          }
          ;(o._isScroll || 'x' === i) &&
            (r.stopPropagation(), (r._gsapAllow = !0))
        },
        sa = function (t, e, r, n) {
          return Pi.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: (n = n && ia),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && lo(Ii, Pi.eventTypes[0], aa, !1, !0)
            },
            onDisable: function () {
              return co(Ii, Pi.eventTypes[0], aa, !0)
            }
          })
        },
        oa = /(input|label|select|textarea)/i,
        aa = function (t) {
          var e = oa.test(t.target.tagName)
          ;(e || ta) && ((t._gsapAllow = !0), (ta = e))
        }
      ;(Jo.sort = function (t) {
        return yo.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                t.start -
                (e.start + -1e6 * (e.vars.refreshPriority || 0))
              )
            }
        )
      }),
        (Jo.observe = function (t) {
          return new Pi(t)
        }),
        (Jo.normalizeScroll = function (t) {
          if (void 0 === t) return ts
          if (!0 === t && ts) return ts.enable()
          if (!1 === t) return ts && ts.kill(), void (ts = t)
          var e =
            t instanceof Pi
              ? t
              : (function (t) {
                  Ls(t) || (t = {}),
                    (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
                    t.type || (t.type = 'wheel,touch'),
                    (t.debounce = !!t.debounce),
                    (t.id = t.id || 'normalizer')
                  var e,
                    r,
                    n,
                    i,
                    s,
                    o,
                    a,
                    u,
                    l = t,
                    c = l.normalizeScrollX,
                    f = l.momentum,
                    h = l.allowNestedScroll,
                    d = l.onRelease,
                    p = Oi(t.target) || Fi,
                    g = Ri.core.globals().ScrollSmoother,
                    m = g && g.get(),
                    v =
                      is &&
                      ((t.content && Oi(t.content)) ||
                        (m && !1 !== t.content && !m.smooth() && m.content())),
                    _ = ki(p, Ti),
                    y = ki(p, wi),
                    b = 1,
                    x =
                      (Pi.isTouch && zi.visualViewport
                        ? zi.visualViewport.scale * zi.visualViewport.width
                        : zi.outerWidth) / zi.innerWidth,
                    w = 0,
                    T = Fs(f)
                      ? function () {
                          return f(e)
                        }
                      : function () {
                          return f || 2.8
                        },
                    O = sa(p, t.type, !0, h),
                    k = function () {
                      return (i = !1)
                    },
                    C = Cs,
                    S = Cs,
                    E = function () {
                      ;(r = Ds(p, Ti)),
                        (S = Ni(is ? 1 : 0, r)),
                        c && (C = Ni(0, Ds(p, wi))),
                        (n = Do)
                    },
                    M = function () {
                      ;(v._gsap.y =
                        Ss(parseFloat(v._gsap.y) + _.offset) + 'px'),
                        (v.style.transform =
                          'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                          parseFloat(v._gsap.y) +
                          ', 0, 1)'),
                        (_.offset = _.cacheID = 0)
                    },
                    A = function () {
                      E(),
                        s.isActive() &&
                          s.vars.scrollY > r &&
                          (_() > r
                            ? s.progress(1) && _(r)
                            : s.resetTo('scrollY', r))
                    }
                  return (
                    v && Ri.set(v, { y: '+=0' }),
                    (t.ignoreCheck = function (t) {
                      return (
                        (is &&
                          'touchmove' === t.type &&
                          (function () {
                            if (i) {
                              requestAnimationFrame(k)
                              var t = Ss(e.deltaY / 2),
                                r = S(_.v - t)
                              if (v && r !== _.v + _.offset) {
                                _.offset = r - _.v
                                var n = Ss(
                                  (parseFloat(v && v._gsap.y) || 0) - _.offset
                                )
                                ;(v.style.transform =
                                  'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' +
                                  n +
                                  ', 0, 1)'),
                                  (v._gsap.y = n + 'px'),
                                  (_.cacheID = ci.cache),
                                  $o()
                              }
                              return !0
                            }
                            _.offset && M(), (i = !0)
                          })()) ||
                        (b > 1.05 && 'touchstart' !== t.type) ||
                        e.isGesturing ||
                        (t.touches && t.touches.length > 1)
                      )
                    }),
                    (t.onPress = function () {
                      i = !1
                      var t = b
                      ;(b = Ss(
                        ((zi.visualViewport && zi.visualViewport.scale) || 1) /
                          x
                      )),
                        s.pause(),
                        t !== b && ra(p, b > 1.01 || (!c && 'x')),
                        (o = y()),
                        (a = _()),
                        E(),
                        (n = Do)
                    }),
                    (t.onRelease = t.onGestureStart =
                      function (t, e) {
                        if ((_.offset && M(), e)) {
                          ci.cache++
                          var n,
                            i,
                            o = T()
                          c &&
                            ((i =
                              (n = y()) + (0.05 * o * -t.velocityX) / 0.227),
                            (o *= ea(y, n, i, Ds(p, wi))),
                            (s.vars.scrollX = C(i))),
                            (i = (n = _()) + (0.05 * o * -t.velocityY) / 0.227),
                            (o *= ea(_, n, i, Ds(p, Ti))),
                            (s.vars.scrollY = S(i)),
                            s.invalidate().duration(o).play(0.01),
                            ((is && s.vars.scrollY >= r) || n >= r - 1) &&
                              Ri.to({}, { onUpdate: A, duration: o })
                        } else u.restart(!0)
                        d && d(t)
                      }),
                    (t.onWheel = function () {
                      s._ts && s.pause(),
                        vs() - w > 1e3 && ((n = 0), (w = vs()))
                    }),
                    (t.onChange = function (t, e, r, i, s) {
                      if (
                        (Do !== n && E(),
                        e &&
                          c &&
                          y(
                            C(
                              i[2] === e ? o + (t.startX - t.x) : y() + e - i[1]
                            )
                          ),
                        r)
                      ) {
                        _.offset && M()
                        var u = s[2] === r,
                          l = u ? a + t.startY - t.y : _() + r - s[1],
                          f = S(l)
                        u && l !== f && (a += f - l), _(f)
                      }
                      ;(r || e) && $o()
                    }),
                    (t.onEnable = function () {
                      ra(p, !c && 'x'),
                        Jo.addEventListener('refresh', A),
                        lo(zi, 'resize', A),
                        _.smooth &&
                          ((_.target.style.scrollBehavior = 'auto'),
                          (_.smooth = y.smooth = !1)),
                        O.enable()
                    }),
                    (t.onDisable = function () {
                      ra(p, !0),
                        co(zi, 'resize', A),
                        Jo.removeEventListener('refresh', A),
                        O.kill()
                    }),
                    (t.lockAxis = !1 !== t.lockAxis),
                    ((e = new Pi(t)).iOS = is),
                    is && !_() && _(1),
                    is && Ri.ticker.add(Cs),
                    (u = e._dc),
                    (s = Ri.to(e, {
                      ease: 'power4',
                      paused: !0,
                      inherit: !1,
                      scrollX: c ? '+=0.1' : '+=0',
                      scrollY: '+=0.1',
                      modifiers: {
                        scrollY: Qo(_, _(), function () {
                          return s.pause()
                        })
                      },
                      onUpdate: $o,
                      onComplete: u.vars.onComplete
                    })),
                    e
                  )
                })(t)
          return (
            ts && ts.target === e.target && ts.kill(),
            As(e.target) && (ts = e),
            e
          )
        }),
        (Jo.core = {
          _getVelocityProp: Ci,
          _inputObserver: sa,
          _scrollers: ci,
          _proxies: fi,
          bridge: {
            ss: function () {
              ys || Eo('scrollStart'), (ys = vs())
            },
            ref: function () {
              return Vi
            }
          }
        }),
        Ms() && Ri.registerPlugin(Jo)
      var ua,
        la,
        ca,
        fa,
        ha = function () {
          return 'undefined' != typeof window
        },
        da = function () {
          return ua || (ha() && (ua = window.gsap) && ua.registerPlugin && ua)
        },
        pa = function () {
          return (
            la ||
              (ga(),
              fa ||
                console.warn(
                  'Please gsap.registerPlugin(CSSPlugin, CSSRulePlugin)'
                )),
            la
          )
        },
        ga = function (t) {
          ;(ua = t || da()),
            ha() && (window, (ca = document)),
            ua && (fa = ua.plugins.css) && (la = 1)
        },
        ma = {
          version: '3.12.5',
          name: 'cssRule',
          init: function (t, e, r, n, i) {
            if (!pa() || void 0 === t.cssText) return !1
            var s = (t._gsProxy = t._gsProxy || ca.createElement('div'))
            ;(this.ss = t),
              (this.style = s.style),
              (s.style.cssText = t.cssText),
              fa.prototype.init.call(this, s, e, r, n, i)
          },
          render: function (t, e) {
            for (var r, n = e._pt, i = e.style, s = e.ss; n; )
              n.r(t, n.d), (n = n._next)
            for (r = i.length; --r > -1; ) s[i[r]] = i[i[r]]
          },
          getRule: function (t) {
            pa()
            var e,
              r,
              n,
              i,
              s = ca.all ? 'rules' : 'cssRules',
              o = ca.styleSheets,
              a = o.length,
              u = ':' === t.charAt(0)
            for (
              t = (u ? '' : ',') + t.split('::').join(':').toLowerCase() + ',',
                u && (i = []);
              a--;

            ) {
              try {
                if (!(r = o[a][s])) continue
                e = r.length
              } catch (t) {
                console.warn(t)
                continue
              }
              for (; --e > -1; )
                if (
                  (n = r[e]).selectorText &&
                  -1 !==
                    (
                      ',' +
                      n.selectorText.split('::').join(':').toLowerCase() +
                      ','
                    ).indexOf(t)
                ) {
                  if (!u) return n.style
                  i.push(n.style)
                }
            }
            return i
          },
          register: ga
        }
      da() && ua.registerPlugin(ma), r(958)
      var va = r(72),
        _a = r.n(va),
        ya = r(825),
        ba = r.n(ya),
        xa = r(659),
        wa = r.n(xa),
        Ta = r(56),
        Oa = r.n(Ta),
        ka = r(540),
        Ca = r.n(ka),
        Sa = r(113),
        Ea = r.n(Sa),
        Ma = r(459),
        Aa = r.n(Ma),
        Pa = {}
      ;(Pa.styleTagTransform = Ea()),
        (Pa.setAttributes = Oa()),
        (Pa.insert = wa().bind(null, 'head')),
        (Pa.domAPI = ba()),
        (Pa.insertStyleElement = Ca()),
        _a()(Aa(), Pa),
        Aa() && Aa().locals && Aa().locals
      var Ra = r(798),
        Da = r.n(Ra),
        za = {}
      ;(za.styleTagTransform = Ea()),
        (za.setAttributes = Oa()),
        (za.insert = wa().bind(null, 'head')),
        (za.domAPI = ba()),
        (za.insertStyleElement = Ca()),
        _a()(Da(), za),
        Da() && Da().locals && Da().locals
      var Ia = r(789),
        Fa = r.n(Ia),
        Ba = {}
      ;(Ba.styleTagTransform = Ea()),
        (Ba.setAttributes = Oa()),
        (Ba.insert = wa().bind(null, 'head')),
        (Ba.domAPI = ba()),
        (Ba.insertStyleElement = Ca()),
        _a()(Fa(), Ba),
        Fa() && Fa().locals && Fa().locals
      var La = r(219),
        $a = r.n(La),
        Ya = {}
      ;(Ya.styleTagTransform = Ea()),
        (Ya.setAttributes = Oa()),
        (Ya.insert = wa().bind(null, 'head')),
        (Ya.domAPI = ba()),
        (Ya.insertStyleElement = Ca()),
        _a()($a(), Ya),
        $a() && $a().locals && $a().locals
      var Na = r(247),
        Xa = r.n(Na),
        qa = {}
      ;(qa.styleTagTransform = Ea()),
        (qa.setAttributes = Oa()),
        (qa.insert = wa().bind(null, 'head')),
        (qa.domAPI = ba()),
        (qa.insertStyleElement = Ca()),
        _a()(Xa(), qa),
        Xa() && Xa().locals && Xa().locals
      var Va = r(647),
        Ha = r.n(Va),
        Ua = {}
      ;(Ua.styleTagTransform = Ea()),
        (Ua.setAttributes = Oa()),
        (Ua.insert = wa().bind(null, 'head')),
        (Ua.domAPI = ba()),
        (Ua.insertStyleElement = Ca()),
        _a()(Ha(), Ua),
        Ha() && Ha().locals && Ha().locals,
        r(102),
        r(631),
        r(12),
        r(813),
        r(931),
        r(225),
        Un.registerPlugin(Jo, ma),
        r(243),
        r(638),
        document.body.classList.contains('home-page') &&
          (Un.set('body', { duration: 1, ease: 'none', opacity: 1 }),
          Un.to('.wrapper', { opacity: 1 }),
          Un.set('.banner', { scale: 1, filter: 'blur(80px)' }),
          Un.set('.svg_custom', { y: '65%' }),
          Un.set('.banner-text', { y: '85%', autoAlpha: 0 }),
          Un.set('.banner-btn', { y: '85%', opacity: 0 }),
          Un.timeline({})
            .to('.banner', { duration: 1, scale: 1, filter: 'blur(0px)' })
            .to(
              '.svg_custom',
              { duration: 1, y: 0, ease: 'back.inOut(10)' },
              '>'
            )
            .to(
              '.banner-text',
              { duration: 1, y: 0, autoAlpha: 0.7, ease: 'back.inOut(10)' },
              '<'
            )
            .to(
              '.banner-btn',
              { duration: 1, y: 0, opacity: 1, ease: 'back.inOut(10)' },
              '<'
            ),
          Un.to('#scanFingerGrey3 >*', {
            duration: 0.1,
            opacity: 0,
            repeat: -1,
            yoyo: !0,
            stagger: { each: 0.1, from: 'random' },
            ease: 'none',
            transformOrigin: '50% 50%'
          }),
          Un.to('#scanFingerGrey4 >*', {
            duration: 0.1,
            opacity: 0,
            repeat: -1,
            yoyo: !0,
            stagger: { each: 0.1, from: 'random' },
            ease: 'none',
            transformOrigin: '50% 50%'
          }),
          Un.to('#scanFingerGrey5 >*', {
            duration: 0.1,
            delay: 0.7,
            opacity: 0,
            repeat: -1,
            yoyo: !0,
            stagger: { each: 0.1, from: 'random' },
            ease: 'none',
            transformOrigin: '50% 50%'
          }),
          Un.utils.toArray('.paralax-effect_left').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                x: -100,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '50% 80%',
                  end: '50% 80%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_right').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                x: 100,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '65% 80%',
                  end: '65% 80%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_center2').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: '.aplication-block',
                  start: '0% 90%',
                  end: '0% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_left2').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                x: -100,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: '.aplication-block',
                  start: '20% 90%',
                  end: '20% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_right2').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                x: 100,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: '.aplication-block',
                  start: '20% 90%',
                  end: '20% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_center3').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '0% 90%',
                  end: '0% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_center4').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '-80% 90%',
                  end: '-80% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_left3').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                x: -100,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '-180% 90%',
                  end: '-180% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.paralax-effect_right3').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                x: 100,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                x: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '20% 90%',
                  end: '20% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.scale3').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                y: 150,
                opacity: 0,
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '0% 90%',
                  end: '0% 90%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.roadmap_line').forEach(t => {
            Un.fromTo(
              t,
              { duration: 2.2, y: 100, opacity: 0, ease: 'sine.inOut' },
              {
                duration: 2.2,
                y: 0,
                opacity: 1,
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '60% 70%',
                  end: '60% 70%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.circle-left').forEach(t => {
            Un.fromTo(
              t,
              { duration: 2.2, left: '50%', ease: 'sine.inOut' },
              {
                duration: 2.2,
                left: '0%',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '50% 70%',
                  end: '50% 70%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.circle-right').forEach(t => {
            Un.fromTo(
              t,
              { duration: 2.2, left: '50%', ease: 'sine.inOut' },
              {
                duration: 2.2,
                left: '100%',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '50% 70%',
                  end: '50% 70%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.cart-works').forEach(t => {
            Un.fromTo(
              t,
              { duration: 2.2, y: 100, opacity: 0, ease: 'sine.inOut' },
              {
                duration: 2.2,
                y: 0,
                opacity: 1,
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '60% 70%',
                  end: '60% 70%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.cart-works-l').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                x: '100%',
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                x: '0%',
                filter: 'blur(0px)',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '60% 70%',
                  end: '60% 70%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.cart-works-r').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                x: '-100%',
                filter: 'blur(80px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                x: '0%',
                filter: 'blur(0px)',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '60% 70%',
                  end: '60% 70%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.video-container').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                maxWidth: '100%',
                y: 0,
                filter: 'blur(0px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                maxWidth: '1140px',
                y: 0,
                filter: 'blur(0px)',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '50% 100%',
                  end: '50% 100%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.blind-section').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                maxWidth: '100%',
                y: 0,
                filter: 'blur(0px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                maxWidth: '1140px',
                y: 0,
                filter: 'blur(0px)',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '0% 100%',
                  end: '0% 100%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.scale-swiper').forEach(t => {
            Un.fromTo(
              t,
              {
                duration: 2.2,
                scale: 1.8,
                transformOrigin: 'top',
                y: 0,
                filter: 'blur(0px)',
                ease: 'sine.inOut'
              },
              {
                duration: 2.2,
                scale: 1,
                y: 0,
                filter: 'blur(0px)',
                y: 0,
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: t,
                  start: '0% 100%',
                  end: '0% 100%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.utils.toArray('.btn-width').forEach(t => {
            Un.fromTo(
              t,
              { duration: 2.2, width: '0%', ease: 'sine.inOut' },
              {
                duration: 2.2,
                width: '50%',
                ease: 'sine.inOut',
                scrollTrigger: {
                  trigger: '#Solutions',
                  start: '40% 100%',
                  end: '40% 100%',
                  scrub: 2,
                  markers: !1,
                  invalidateOnRefresh: !0
                }
              }
            )
          }),
          Un.fromTo(
            '.scale-faq1',
            {
              duration: 2.2,
              y: 150,
              opacity: 0,
              filter: 'blur(80px)',
              ease: 'sine.inOut'
            },
            {
              duration: 2.2,
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
              ease: 'sine.inOut',
              scrollTrigger: {
                trigger: '.scale-faq1',
                start: '0% 90%',
                end: '0% 90%',
                scrub: 2,
                markers: !1
              }
            }
          ),
          Un.fromTo(
            '.aboutus-bg',
            { duration: 2.2, y: window.innerHeight, ease: 'sine.inOut' },
            {
              duration: 2.2,
              y: -window.innerHeight,
              ease: 'sine.inOut',
              scrollTrigger: {
                trigger: '#aboutus',
                start: '10% 70%',
                end: '100% 70%',
                scrub: 2,
                markers: !1,
                invalidateOnRefresh: !0
              }
            }
          ),
          Un.fromTo(
            '.homework-bg',
            { duration: 2.2, y: window.innerHeight, ease: 'sine.inOut' },
            {
              duration: 2.2,
              y: -window.innerHeight,
              ease: 'sine.inOut',
              scrollTrigger: {
                trigger: '.how-work-bg',
                start: '10% 70%',
                end: '100% 70%',
                scrub: 2,
                markers: !1,
                invalidateOnRefresh: !0
              }
            }
          ),
          Un.fromTo(
            '.video-bg',
            { duration: 2.2, y: 0, ease: 'sine.inOut' },
            {
              duration: 2.2,
              y: 1.5 * window.innerHeight,
              ease: 'sine.inOut',
              scrollTrigger: {
                trigger: '.video-bg',
                start: '10% 70%',
                end: '200% 70%',
                scrub: 2,
                markers: !1,
                invalidateOnRefresh: !0
              }
            }
          ),
          Un.fromTo(
            '.stay-bg',
            { duration: 2.2, y: 0, ease: 'sine.inOut' },
            {
              duration: 2.2,
              y: window.innerHeight,
              ease: 'sine.inOut',
              scrollTrigger: {
                trigger: '.solutions-bg',
                start: '10% 50%',
                end: '80% 50%',
                endTrigger: '#FAQs',
                scrub: 2,
                markers: !1,
                invalidateOnRefresh: !0
              }
            }
          ))
    })()
})()
