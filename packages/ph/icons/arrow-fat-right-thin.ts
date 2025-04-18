import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowFatRightThinIcon],svg[ph-arrow-fat-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m234.83 125.17l-96-96A4 4 0 0 0 132 32v44H48a12 12 0 0 0-12 12v80a12 12 0 0 0 12 12h84v44a4 4 0 0 0 2.47 3.7a4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66M140 214.34V176a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h88a4 4 0 0 0 4-4V41.66L226.34 128Z"></svg:path>`,
})
export class PhArrowFatRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
