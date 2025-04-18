import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangMrIcon],svg[circle-flags-lang-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangMr0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangMr0)"><svg:path fill="#ff9811" d="M0 0h512L384 320L0 256Z"></svg:path><svg:path fill="#eee" d="M512 0L320 256H0v256h512V256Z"></svg:path><svg:path fill="#d80027" d="M112 148v-40l28-28h40l28 28v40l-28 28h-40z"></svg:path></svg:g>`,
})
export class CircleFlagsLangMrIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
