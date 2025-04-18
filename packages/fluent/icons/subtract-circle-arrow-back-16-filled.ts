import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSubtractCircleArrowBack16FilledIcon],svg[fluent-subtract-circle-arrow-back-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 0 1 13.957-.778A5.48 5.48 0 0 0 11.5 6c-1.461 0-2.79.57-3.775 1.5H5a.5.5 0 0 0 0 1h1.89a5.47 5.47 0 0 0-.89 3c0 1.31.458 2.513 1.222 3.457A7 7 0 0 1 1 8m10.5 8a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 14 13.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75H9.707l.897.896a.5.5 0 0 1-.708.708L8.144 11.35a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentSubtractCircleArrowBack16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
