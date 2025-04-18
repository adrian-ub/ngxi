import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndexFillIcon],svg[meteocons-uv-index-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsUvIndexFill0" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fbbf24"></svg:stop><svg:stop offset=".5" stop-color="#fbbf24"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsUvIndexFill1"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndexFill2" viewBox="0 0 384 384"><svg:circle cx="192" cy="192" r="84" fill="url(#meteoconsUvIndexFill0)" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndexFill1)"><svg:use width="384" height="384" href="#meteoconsUvIndexFill2" transform="translate(64 64)"></svg:use><svg:path fill="none" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:path fill="#374251" d="M337.7 388q-14.4 0-22.1-6.8t-7.8-19.3V316h18.3v46q0 11 11.7 11t11.6-11v-46h18.3v45.9q0 12.7-7.8 19.4t-22.2 6.7Zm75.7-43.5l8.2-28.5h18.6l-22.6 69.8h-19.4L375.8 316h18.8l8.2 28.4l5.4 22Z"></svg:path>`,
})
export class MeteoconsUvIndexFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
