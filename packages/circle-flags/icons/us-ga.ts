import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsGaIcon],svg[circle-flags-us-ga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsGa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsGa0)"><svg:path fill="#d80027" d="M512 0v171l-64 85l64 85v171H0V341L341 0Z"></svg:path><svg:path fill="#eee" d="M341 171h171v170H341l-64-85z"></svg:path><svg:path fill="#0052b4" d="M0 0h341v341H0Z"></svg:path><svg:path fill="#ffda44" d="M184 133a40 40 0 0 0-40 40v60h80v-60a40 40 0 0 0-40-40"></svg:path><svg:path fill="#eee" d="m167 105l52-37h-64l52 37l-20-61zm101 62l37 52v-64l-37 52l61-20zm-62 101l-52 37h64l-52-37l20 61zm-101-61l-37-52v64l37-52l-61 20zm125-92l63 10l-45-45l10 63l29-57zm28 115l-10 63l45-45l-63 10l57 29zm-115 28l-63-10l45 45l-10-63l-29 57Zm-28-115l10-63l-45 45l63-10l-57-29Z"></svg:path></svg:g>`,
})
export class CircleFlagsUsGaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
