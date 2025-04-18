import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberTwoBoldIcon],svg[ph-number-two-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 208a12 12 0 0 1-12 12H88a12 12 0 0 1-9.6-19.2l71.95-95.92a28 28 0 1 0-48-28.06a12 12 0 0 1-22-9.62a52.3 52.3 0 0 1 6.13-10.49a52 52 0 0 1 83.06 62.59L112 196h56a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhNumberTwoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
