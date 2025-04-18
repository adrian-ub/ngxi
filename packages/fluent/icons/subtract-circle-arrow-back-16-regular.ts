import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractCircleArrowBack16RegularIcon],svg[fluent-subtract-circle-arrow-back-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 0 1 11.813-1.491c.412.19.796.431 1.144.713a7.001 7.001 0 1 0-7.735 7.735a5.5 5.5 0 0 1-.713-1.144A6 6 0 0 1 2 8m3-.5h2.725a5.5 5.5 0 0 0-.836 1H5a.5.5 0 0 1 0-1m6.5 8.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 14 13.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75H9.707l.897.896a.5.5 0 0 1-.708.708L8.144 11.35a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentSubtractCircleArrowBack16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
