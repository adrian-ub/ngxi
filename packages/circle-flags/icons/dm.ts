import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsDmIcon],svg[circle-flags-dm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsDm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsDm0)"><svg:path fill="#496e2d" d="M0 0h208l48 32l48-32h208v208l-32 48l32 48v208H304l-48-32l-48 32H0V304l32-48l-32-48Z"></svg:path><svg:path fill="#333" d="M512 240v32l-256 32L0 272v-32l256-32z"></svg:path><svg:path fill="#ffda44" d="M512 208v32H0v-32z"></svg:path><svg:path fill="#333" d="M240 0h32l32 256l-32 256h-32l-32-256Z"></svg:path><svg:path fill="#ffda44" d="M208 0h32v512h-32z"></svg:path><svg:path fill="#eee" d="M272 0h32v512h-32z"></svg:path><svg:path fill="#eee" d="M512 272v32H0v-32z"></svg:path><svg:circle cx="256" cy="256" r="122.4" fill="#d80027"></svg:circle><svg:path fill="#496e2d" d="M284 270c-9-19-21-37-21-37v-13a14 14 0 0 0-27-2a11 11 0 0 0-4 21a16 16 0 0 1 9-9a14 14 0 0 0 2 2h2s-7 19-7 29c0 27 19 36 19 36l-10 9h19v-18l9 9s17-11 9-27m-28-114l4 13h14l-11 8l4 12l-11-8l-11 8l4-12l-11-8h14Zm-59 19l11 8l11-8l-4 13l11 8h-14l-4 12l-4-12h-14l11-8zm-36 50h13l4-13l4 13h14l-11 8l4 13l-11-8l-11 8l5-13zm0 62l11-8l-5-13l11 8l11-8l-4 13l11 8h-14l-4 13l-4-13Zm36 50l4-13l-11-8h14l4-12l4 12h13l-10 8l4 13l-11-8zm59 19l-4-13h-14l11-8l-4-12l11 8l11-8l-4 12l11 9h-14Zm59-19l-11-8l-11 8l4-13l-10-8h13l4-12l4 12h14l-11 8zm36-50h-13l-4 13l-4-13h-14l11-8l-4-13l11 8l11-8l-5 13zm0-62l-11 8l5 13l-11-8l-11 8l4-13l-11-8h14l4-13l4 13zm-36-50l-4 13l11 8h-14l-4 12l-4-12h-14l11-8l-4-13l11 8z"></svg:path></svg:g>`,
})
export class CircleFlagsDmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
