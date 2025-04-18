import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndexIcon],svg[meteocons-uv-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex0"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex0)"><svg:use width="375" height="375" href="#meteoconsUvIndex1" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:path fill="#374251" d="M337.7 388q-14.4 0-22.1-6.8t-7.8-19.3V316h18.3v46q0 11 11.7 11t11.6-11v-46h18.3v45.9q0 12.7-7.8 19.4t-22.2 6.7Zm75.7-43.5l8.2-28.5h18.6l-22.6 69.8h-19.4L375.8 316h18.8l8.2 28.4l5.4 22Z"></svg:path>`,
})
export class MeteoconsUvIndexIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
