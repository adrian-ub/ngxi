import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort0FillIcon],svg[meteocons-wind-beaufort-0-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsWindBeaufort0Fill0" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindBeaufort0Fill1" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#meteoconsWindBeaufort0Fill0"></svg:lineargradient><svg:symbol id="meteoconsWindBeaufort0Fill2" viewBox="0 0 348 240"><svg:path fill="none" stroke="url(#meteoconsWindBeaufort0Fill0)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M267.2 24.3A40 40 0 1 1 296 92H12"></svg:path><svg:path fill="none" stroke="url(#meteoconsWindBeaufort0Fill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M151.2 215.7A40 40 0 1 0 180 148H12"></svg:path></svg:symbol></svg:defs><svg:use width="348" height="240" href="#meteoconsWindBeaufort0Fill2" transform="translate(82 136)"></svg:use><svg:path fill="#374251" d="M406 334.2q-8.2 9.8-22 9.8t-21.8-9.8q-8.1-9.7-8.1-26.4q0-16.5 8-26.1q8-9.7 22-9.7q13.7 0 21.8 9.7t8 26.1q.1 16.6-8 26.4Zm-22-4.2q12.6 0 12.6-22T384 286t-12.6 22t12.7 22Z"></svg:path>`,
})
export class MeteoconsWindBeaufort0FillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
