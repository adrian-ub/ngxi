import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAngleIcon],svg[picon-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 7l7-7h1L2 6h6v1M0 2q6 0 6 6H5c0-4-1-5-5-5"></svg:path>`,
})
export class PiconAngleIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
