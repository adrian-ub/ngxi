import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex11FillIcon],svg[meteocons-uv-index-11-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsUvIndex11Fill0" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fbbf24"></svg:stop><svg:stop offset=".5" stop-color="#fbbf24"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsUvIndex11Fill1"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex11Fill2" viewBox="0 0 384 384"><svg:circle cx="192" cy="192" r="84" fill="url(#meteoconsUvIndex11Fill0)" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex11Fill1)"><svg:use width="384" height="384" href="#meteoconsUvIndex11Fill2" transform="translate(64 64)"></svg:use><svg:path fill="none" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#9936d4" rx="48"></svg:rect><svg:path fill="#fff" d="M345 388h-18.9v-45h-17.8v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8H345Zm46.7 0h-19v-45H355v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.6Z"></svg:path>`,
})
export class MeteoconsUvIndex11FillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
