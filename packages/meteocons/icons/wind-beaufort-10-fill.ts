import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort10FillIcon],svg[meteocons-wind-beaufort-10-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsWindBeaufort10Fill0" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindBeaufort10Fill1" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#meteoconsWindBeaufort10Fill0"></svg:lineargradient><svg:symbol id="meteoconsWindBeaufort10Fill2" viewBox="0 0 348 240"><svg:path fill="none" stroke="url(#meteoconsWindBeaufort10Fill0)" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M267.2 24.3A40 40 0 1 1 296 92H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 4144"></svg:animate></svg:path><svg:path fill="none" stroke="url(#meteoconsWindBeaufort10Fill1)" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M151.2 215.7A40 40 0 1 0 180 148H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2420"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="348" height="240" href="#meteoconsWindBeaufort10Fill2" transform="translate(82 136)"></svg:use><svg:path fill="#374251" d="M366.4 344h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.6Zm63.9-9.8q-8.2 9.8-21.9 9.8t-21.9-9.8q-8.1-9.7-8.1-26.4q0-16.5 8.1-26.1q8-9.7 21.9-9.7q13.7 0 21.9 9.7t8 26.1q0 16.6-8 26.4Zm-21.9-4.2q12.6 0 12.6-22t-12.6-22q-12.7 0-12.7 22t12.7 22Z"></svg:path>`,
})
export class MeteoconsWindBeaufort10FillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
