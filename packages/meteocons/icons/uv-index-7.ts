import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex7Icon],svg[meteocons-uv-index-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex70"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex71" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex70)"><svg:use width="375" height="375" href="#meteoconsUvIndex71" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff8d00" rx="48"></svg:rect><svg:path fill="#fff" d="M355.3 388h-20q0-13.7 6.5-29a88.4 88.4 0 0 1 17.9-26.7h-35.5V316h55.6v14.7q-12.3 13.1-18.2 26.8a81.8 81.8 0 0 0-6.3 30.5Z"></svg:path>`,
})
export class MeteoconsUvIndex7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
