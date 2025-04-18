import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsHorizonFillIcon],svg[meteocons-horizon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsHorizonFill0" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#fbbf24"></svg:stop><svg:stop offset=".5" stop-color="#fbbf24"></svg:stop><svg:stop offset="1" stop-color="#f59e0b"></svg:stop></svg:lineargradient><svg:clippath id="meteoconsHorizonFill1"><svg:path fill="none" d="M0 0h512v306H0z"></svg:path></svg:clippath><svg:symbol id="meteoconsHorizonFill2" viewBox="0 0 384 384"><svg:circle cx="192" cy="192" r="84" fill="url(#meteoconsHorizonFill0)" stroke="#f8af18" stroke-miterlimit="10" stroke-width="6"></svg:circle><svg:path fill="none" stroke="#fbbf24" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:g clip-path="url(#meteoconsHorizonFill1)"><svg:use width="384" height="384" href="#meteoconsHorizonFill2" transform="translate(64 100)"></svg:use></svg:g><svg:path fill="none" stroke="#374151" stroke-linecap="round" stroke-linejoin="round" stroke-width="18" d="M128 332h256"></svg:path>`,
})
export class MeteoconsHorizonFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
