import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNaIcon],svg[circle-flags-na-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNa0)"><svg:path fill="#eee" d="m0 401.9l160.6-237.1L401.9 0H449l63 63v47.3L350.3 339.2L110.3 512H63L0 449z"></svg:path><svg:path fill="#a2001d" d="M0 512h63L512 63V0h-63L0 449z"></svg:path><svg:path fill="#0052b4" d="M0 0v401.9L401.9 0z"></svg:path><svg:path fill="#496e2d" d="M512 512V110.3L110.3 512z"></svg:path><svg:path fill="#ffda44" d="m211.5 144.7l-28.7 13.5L198 186l-31.2-6l-4 31.5l-21.6-23.2l-21.7 23.2l-4-31.5l-31 6l15.2-27.8L71 144.7l28.7-13.5l-15.3-27.8l31.1 6l4-31.5l21.7 23.2L163 78l4 31.5l31-6l-15.2 27.8z"></svg:path></svg:g>`,
})
export class CircleFlagsNaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
