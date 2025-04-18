import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex2Icon],svg[meteocons-uv-index-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex20"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex21" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex20)"><svg:use width="375" height="375" href="#meteoconsUvIndex21" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#91c700" rx="48"></svg:rect><svg:path fill="#fff" d="M379.9 388h-55.7q0-9.4 4-15.7q4-6.1 14.8-13.5l11-7.8a22.4 22.4 0 0 0 5.9-5.5a10.2 10.2 0 0 0 1.7-5.8a8.7 8.7 0 0 0-2.6-6.7a9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.5h-17v-2.2q0-12.1 7.2-19t20-6.8q12.5 0 19.8 6t7.4 16.7a22 22 0 0 1-3.5 12.2q-3.5 5.5-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.9h31Z"></svg:path>`,
})
export class MeteoconsUvIndex2Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
