import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsWindAlertFillIcon],svg[meteocons-wind-alert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsWindAlertFill0" x1="138.5" x2="224.2" y1="5.1" y2="153.5" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsWindAlertFill1" x1="77.7" x2="169" y1="96.2" y2="254.4" href="#meteoconsWindAlertFill0"></svg:lineargradient><svg:lineargradient id="meteoconsWindAlertFill2" x1="349.3" x2="399.2" y1="281.6" y2="368.1" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f87171"></svg:stop><svg:stop offset=".5" stop-color="#f87171"></svg:stop><svg:stop offset="1" stop-color="#dc2626"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsWindAlertFill3" viewBox="0 0 348 240"><svg:path fill="none" stroke="url(#meteoconsWindAlertFill0)" stroke-dasharray="148" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M267.2 24.3A40 40 0 1 1 296 92H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 2960"></svg:animate></svg:path><svg:path fill="none" stroke="url(#meteoconsWindAlertFill1)" stroke-dasharray="110" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M151.2 215.7A40 40 0 1 0 180 148H12"><svg:animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" values="0; 1540"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="348" height="240" href="#meteoconsWindAlertFill3" transform="translate(82 136)"></svg:use><svg:path fill="url(#meteoconsWindAlertFill2)" stroke="#ef4444" stroke-miterlimit="10" stroke-width="1.5" d="M430.9 339.6L411 303l-19.2-35.3a9 9 0 0 0-15.8 0l-19.2 35.4l-19.8 36.4a9 9 0 0 0 8 13.5h77.8a9 9 0 0 0 8-13.4Z"></svg:path>`,
})
export class MeteoconsWindAlertFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
