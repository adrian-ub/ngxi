import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconThrowIcon],svg[picon-throw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 1l1-1l1 1l-1 1M2 3l3-1h2l1 2.5H6L5 3m1 2h2v4L7 6L6 9M0 4l1 3h2l1-3l-1 4H1m1-4h1v1H2"></svg:path>`,
})
export class PiconThrowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
