import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMrIcon],svg[picon-mr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7H5V4h3M6 4V2H5v1L3 1.5L5 0v1h2v3M1 8V3h1v5m1-5H0V0h3m3 5v1h1V5M1 1v1h1V1"></svg:path>`,
})
export class PiconMrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
