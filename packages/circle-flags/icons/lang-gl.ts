import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangGlIcon],svg[circle-flags-lang-gl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangGl0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangGl0)"><svg:path fill="#eee" d="M0 63L63 0h449v449l-63 63H0z"></svg:path><svg:path fill="#338af3" d="M0 0v63l449 449h63v-63L63 0z"></svg:path><svg:path fill="#d80027" d="m211 181l46 16.4l44-16.4v-38l-18 9l-27-27l-27 27l-18-9z"></svg:path><svg:path fill="#0052b4" d="M186 181v103a70 70 0 0 0 140 0V181z"></svg:path></svg:g>`,
})
export class CircleFlagsLangGlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
