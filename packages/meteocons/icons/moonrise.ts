import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsMoonriseIcon],svg[meteocons-moonrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsMoonrise0"><svg:path fill="none" d="M512 306H304l-35.9-31.4a18.4 18.4 0 0 0-24.2 0L208 306H0V0h512Z"></svg:path></svg:clippath><svg:symbol id="meteoconsMoonrise1" viewBox="0 0 279 279"><svg:path fill="none" stroke="#72b9d5" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M256.8 173.1A133.3 133.3 0 0 1 122.4 40.7A130.5 130.5 0 0 1 127 7.5A133 133 0 0 0 7.5 139.1c0 73.1 60 132.4 134.2 132.4c62.5 0 114.8-42.2 129.8-99.2a135.6 135.6 0 0 1-14.8.8Z"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="-15 135 135; 9 135 135; -15 135 135"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h88l40-36l40 36h88"></svg:path><svg:g clip-path="url(#meteoconsMoonrise0)"><svg:use width="279" height="279" href="#meteoconsMoonrise1" transform="translate(116.5 116.5)"></svg:use></svg:g>`,
})
export class MeteoconsMoonriseIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
