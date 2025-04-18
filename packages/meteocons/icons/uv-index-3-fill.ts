import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex3FillIcon],svg[meteocons-uv-index-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsUvIndex3Fill0" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fbbf24"></svg:stop><svg:stop offset=".5" stop-color="#fbbf24"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsUvIndex3Fill1"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex3Fill2" viewBox="0 0 384 384"><svg:circle cx="192" cy="192" r="84" fill="url(#meteoconsUvIndex3Fill0)" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex3Fill1)"><svg:use width="384" height="384" href="#meteoconsUvIndex3Fill2" transform="translate(64 64)"></svg:use><svg:path fill="none" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ffb800" rx="48"></svg:rect><svg:path fill="#fff" d="M365.5 349.2a17.8 17.8 0 0 1 10.8 5.7a16.4 16.4 0 0 1 3.8 11.2a20 20 0 0 1-7.2 15.7q-7.3 6.2-20.3 6.2q-13.6 0-21-6.7t-7.8-18.6h16.5q.6 11.7 11.7 11.7a11.6 11.6 0 0 0 7.7-2.4a8.1 8.1 0 0 0 2.8-6.5a7.5 7.5 0 0 0-3-6.5a14 14 0 0 0-8.4-2.2h-4.9v-12h5.2c3 0 5.3-.6 7-2a7 7 0 0 0 2.4-5.7a7.2 7.2 0 0 0-2.4-5.8c-1.7-1.4-4-2-7-2s-5.2.7-6.8 2.1s-2.4 3.9-2.7 7.2H326q1-22.6 26-22.6q11.8 0 18.5 5.2a16.1 16.1 0 0 1 6.6 13.3a14.9 14.9 0 0 1-3 9.3a15.2 15.2 0 0 1-8.6 5.4Z"></svg:path>`,
})
export class MeteoconsUvIndex3FillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
