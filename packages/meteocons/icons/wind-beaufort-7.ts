import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindBeaufort7Icon],svg[meteocons-wind-beaufort-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindBeaufort70" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 3256"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1760"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindBeaufort70" transform="translate(85 139)"></svg:use><svg:path fill="#374251" d="M387.3 344h-20q0-13.7 6.5-29a88.4 88.4 0 0 1 17.9-26.7h-35.5V272h55.6v14.7q-12.3 13.1-18.2 26.8a81.8 81.8 0 0 0-6.3 30.5Z"></svg:path>`,
})
export class MeteoconsWindBeaufort7Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
