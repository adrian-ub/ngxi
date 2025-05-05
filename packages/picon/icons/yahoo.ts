import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconYahooIcon],svg[picon-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6V5h1v1M6 4l1-4h1L7 4M4 2h2L3 8H1l1-2l-2-4h1.5L3 5"></svg:path>`,
})
export class PiconYahooIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
