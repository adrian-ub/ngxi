import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightBoldIcon],svg[ph-arrow-u-down-right-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m232.49 176.49l-48 48a12 12 0 0 1-17-17L195 180H88a68 68 0 0 1 0-136h88a12 12 0 0 1 0 24H88a44 44 0 0 0 0 88h107l-27.52-27.51a12 12 0 1 1 17-17l48 48a12 12 0 0 1 .01 17"></svg:path>`,
})
export class PhArrowUDownRightBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
