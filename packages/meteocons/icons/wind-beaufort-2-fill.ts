import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort2FillIcon],svg[meteocons-wind-beaufort-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsWindBeaufort2Fill0" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindBeaufort2Fill1" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#meteoconsWindBeaufort2Fill0"></svg:lineargradient><svg:symbol id="meteoconsWindBeaufort2Fill2" viewBox="0 0 348 240"><svg:path fill="none" stroke="url(#meteoconsWindBeaufort2Fill0)" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M267.2 24.3A40 40 0 1 1 296 92H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1776"></svg:animate></svg:path><svg:path fill="none" stroke="url(#meteoconsWindBeaufort2Fill1)" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M151.2 215.7A40 40 0 1 0 180 148H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 660"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="348" height="240" href="#meteoconsWindBeaufort2Fill2" transform="translate(82 136)"></svg:use><svg:path fill="#374251" d="M411.9 344h-55.7q0-9.4 4-15.7q4-6.1 14.8-13.5l11-7.8a22.4 22.4 0 0 0 5.9-5.5a10.2 10.2 0 0 0 1.7-5.8a8.7 8.7 0 0 0-2.6-6.7a9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.5h-17v-2.2q0-12.1 7.2-19t20-6.8q12.5 0 19.8 6t7.4 16.7a22 22 0 0 1-3.5 12.2q-3.5 5.5-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.9h31Z"></svg:path>`,
})
export class MeteoconsWindBeaufort2FillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
