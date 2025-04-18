import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort5Icon],svg[meteocons-wind-beaufort-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort50" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2664"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1320"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort50" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M383.8 344q-12 0-19.7-5.5t-9-15.7l17.6-1.4a9.9 9.9 0 0 0 3.8 6a12 12 0 0 0 7.2 2.2a11.6 11.6 0 0 0 8.5-3a10.5 10.5 0 0 0 3-8a10.4 10.4 0 0 0-3-7.8a11.6 11.6 0 0 0-8.5-3a12.6 12.6 0 0 0-9.7 4.3l-16.6-1.5l6.4-38.6H408v14.7h-30.9l-2.3 12l.3.2q5.6-4 14.2-4q10.7 0 17 6.2t6.6 17.1q0 11.8-7.8 18.8t-21.3 7Z"></svg:path>`,
})
export class MeteoconsWindBeaufort5Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
