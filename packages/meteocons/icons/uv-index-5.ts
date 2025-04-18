import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex5Icon],svg[meteocons-uv-index-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex50"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex51" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex50)"><svg:use width="375" height="375" href="#meteoconsUvIndex51" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ffb800" rx="48"></svg:rect><svg:path fill="#fff" d="M351.8 388q-12 0-19.7-5.5t-9-15.7l17.6-1.4a9.9 9.9 0 0 0 3.8 6a12 12 0 0 0 7.2 2.2a11.6 11.6 0 0 0 8.5-3a10.5 10.5 0 0 0 3-8a10.4 10.4 0 0 0-3-7.8a11.6 11.6 0 0 0-8.5-3a12.6 12.6 0 0 0-9.7 4.3l-16.6-1.5l6.4-38.6H376v14.7h-30.9l-2.3 12l.3.2q5.6-4 14.2-4q10.7 0 17 6.2t6.6 17.1q0 11.8-7.8 18.8t-21.3 7Z"></svg:path>`,
})
export class MeteoconsUvIndex5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
