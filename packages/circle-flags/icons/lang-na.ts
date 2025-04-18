import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangNaIcon],svg[circle-flags-lang-na-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangNa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangNa0)"><svg:path fill="#0052b4" d="M0 0h512v233.7L494.3 257l17.7 21.3V512H0V278.3l18.7-22.9L0 233.7z"></svg:path><svg:path fill="#eee" d="m211.5 345l-28.7 13.5l15.3 27.8l-31.2-6l-4 31.5l-21.6-23.1l-21.7 23.1l-4-31.4l-31.1 6l15.3-27.9L71 345l28.7-13.4l-15.3-27.8l31.1 6l4-31.5l21.7 23.1l21.7-23.1l4 31.4l31-6l-15.2 27.9z"></svg:path><svg:path fill="#ffda44" d="M0 233.7h512v44.6H0z"></svg:path></svg:g>`,
})
export class CircleFlagsLangNaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
