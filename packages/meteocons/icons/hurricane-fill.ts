import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsHurricaneFillIcon],svg[meteocons-hurricane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsHurricaneFill0" x1="175.8" x2="336.2" y1="117" y2="395" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="none" stroke="url(#meteoconsHurricaneFill0)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M344 256a88 88 0 1 1-88-88a88 88 0 0 1 88 88ZM200 116.9l-3.8 7.7A269.7 269.7 0 0 0 169 267h0m143.1 128l3.8-7.7A269.7 269.7 0 0 0 343.2 245h0"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="1440 256 256; 0 256 256"></svg:animatetransform></svg:path>`,
})
export class MeteoconsHurricaneFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
