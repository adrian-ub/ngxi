import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconJsIcon],svg[picon-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l3 1l3-1l1-7H0m3 1v5H1.5L1 4l1 1V1m2 0h3v1H5v1h1.5L6 6H4V5h1V4H4"></svg:path>`,
})
export class PiconJsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
