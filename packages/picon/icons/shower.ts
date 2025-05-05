import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconShowerIcon],svg[picon-shower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6v1h4V6M4 4v1h4V4m0 4H7V4h1M6 8H5V3h1M1 8V1l2 1h2L3 5V2L2 3v5"></svg:path>`,
})
export class PiconShowerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
