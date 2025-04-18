import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindAlertIcon],svg[meteocons-wind-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsWindAlert0" viewBox="0 0 342 234"><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M264.2 21.3A40 40 0 1 1 293 89H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M148.2 212.7A40 40 0 1 0 177 145H9"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="342" height="234" href="#meteoconsWindAlert0" transform="translate(85 139)"></svg:use><svg:path fill="#ef4444" d="M430.9 339.6L411 303l-19.2-35.3a9 9 0 0 0-15.8 0l-19.2 35.4l-19.8 36.4a9 9 0 0 0 8 13.5h77.8a9 9 0 0 0 8-13.4Z"></svg:path>`,
})
export class MeteoconsWindAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
