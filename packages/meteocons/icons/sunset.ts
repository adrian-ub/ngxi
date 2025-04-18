import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSunsetIcon],svg[meteocons-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="meteoconsSunset0"><svg:path fill="none" d="M512 306H296a21.5 21.5 0 0 0-14 5.3L256 334l-26-22.7a21.5 21.5 0 0 0-14-5.3H0V0h512Z"></svg:path></svg:clippath><svg:symbol id="meteoconsSunset1" viewBox="0 0 375 375"><svg:circle cx="187.5" cy="187.5" r="84" fill="none" stroke="#fbbf24" stroke-miterlimit="10" stroke-width="15"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="15" d="M187.5 57.2V7.5m0 360v-49.7m92.2-222.5l35-35M60.3 314.7l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M57.2 187.5H7.5m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 187.5 187.5; 45 187.5 187.5"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsSunset0)"><svg:use width="375" height="375" href="#meteoconsSunset1" transform="translate(68.5 104.5)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h88l40 36l40-36h88"></svg:path>`,
})
export class MeteoconsSunsetIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
