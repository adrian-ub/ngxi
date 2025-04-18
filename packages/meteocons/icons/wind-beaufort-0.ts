import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort0Icon],svg[meteocons-wind-beaufort-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort00" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9m139.2 123.7A40 40 0 1 0 177 145H9"></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort00" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M406 334.2q-8.2 9.8-22 9.8t-21.8-9.8q-8.1-9.7-8.1-26.4q0-16.5 8-26.1q8-9.7 22-9.7q13.7 0 21.8 9.7t8 26.1q.1 16.6-8 26.4Zm-22-4.2q12.6 0 12.6-22T384 286t-12.6 22t12.7 22Z"></svg:path>`,
})
export class MeteoconsWindBeaufort0Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
