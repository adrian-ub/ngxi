import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrendUpLightIcon],svg[ph-trend-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M238 56v64a6 6 0 0 1-12 0V70.48l-85.76 85.76a6 6 0 0 1-8.48 0L96 120.49l-67.76 67.75a6 6 0 0 1-8.48-8.48l72-72a6 6 0 0 1 8.48 0L136 143.51L217.52 62H168a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhTrendUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
