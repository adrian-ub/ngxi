import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscountPercentCutoutIcon],svg[streamline-discount-percent-cutout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 9.5l5-5m-5 .5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m3-9.5a1 1 0 0 1 1 1m-13 0a1 1 0 0 1 1-1m0 13a1 1 0 0 1-1-1m13 0a1 1 0 0 1-1 1m-8-13h1m3 0h1m-5 13h1m3 0h1m4-9v1m0 3v1m-13-5v1m0 3v1"></svg:path>`,
})
export class StreamlineDiscountPercentCutoutIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
