import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsUvIndex9Icon],svg[meteocons-uv-index-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsUvIndex90"><svg:path fill="none" d="M64 64h384v192H328a72 72 0 0 0-72 72v120H64Z"></svg:path></svg:clippath><svg:symbol id="meteoconsUvIndex91" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsUvIndex90)"><svg:use width="375" height="375" href="#meteoconsUvIndex91" transform="translate(68.5 68.5)"></svg:use><svg:path fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15" d="M254 338v-10a74 74 0 0 1 74-74h10"></svg:path></svg:g><svg:rect width="144" height="144" x="280" y="280" fill="#ff3c00" rx="48"></svg:rect><svg:path fill="#fff" d="M371.4 323.7q9.7 9 9.7 27.6q0 17.5-7.7 27.1t-22.3 9.6q-10.1 0-16.8-4.6a21.9 21.9 0 0 1-9-12.8l16.6-1.1q2.1 5.5 9.3 5.5q5.9 0 9-4t3.8-13q-6 7.1-16.6 7.1q-10.9 0-17.6-6.4t-6.9-17.3q0-11.2 7.8-18.4t20-7q12.7 0 20.7 7.7Zm-20 28.5a11 11 0 0 0 8.2-3a12.2 12.2 0 0 0 3.3-8.3a11.6 11.6 0 0 0-2.7-7.3a11.2 11.2 0 0 0-9-3.7c-3.5 0-6.2 1-8.2 3.1a11.3 11.3 0 0 0-2.9 8a10.9 10.9 0 0 0 3.1 8.2a11.3 11.3 0 0 0 8.3 3Z"></svg:path>`,
})
export class MeteoconsUvIndex9Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
