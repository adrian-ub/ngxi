import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort12FillIcon],svg[meteocons-wind-beaufort-12-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsWindBeaufort12Fill0" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindBeaufort12Fill1" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#meteoconsWindBeaufort12Fill0"></svg:lineargradient><svg:symbol id="meteoconsWindBeaufort12Fill2" viewBox="0 0 348 240"><svg:path fill="none" stroke="url(#meteoconsWindBeaufort12Fill0)" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M267.2 24.3A40 40 0 1 1 296 92H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 4736"></svg:animate></svg:path><svg:path fill="none" stroke="url(#meteoconsWindBeaufort12Fill1)" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M151.2 215.7A40 40 0 1 0 180 148H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2860"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="348" height="240" href="#meteoconsWindBeaufort12Fill2" transform="translate(82 136)"></svg:use><svg:path fill="#374251" d="M367.5 344.4h-19v-45h-17.7v-12.6h3q7.8 0 12.3-3.4q4.3-3.1 5.6-10.2l.2-.8h15.5Zm69.7-.8h-55.7q0-9.4 4-15.7q4-6.1 14.9-13.5l10.9-7.7a22.2 22.2 0 0 0 5.8-5.5a10.2 10.2 0 0 0 1.8-5.8a8.7 8.7 0 0 0-2.6-6.7a9.8 9.8 0 0 0-7-2.4q-10 0-10 11.8v1.4h-16.8v-2.1q0-12.2 7.1-19t20.2-6.8q12.4 0 19.7 6t7.4 16.6a22.2 22.2 0 0 1-3.5 12.3q-3.5 5.4-11.2 10.4l-12.1 7.7c-2.3 1.5-3.6 2.8-3.8 3.8h31Z"></svg:path>`,
})
export class MeteoconsWindBeaufort12FillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
