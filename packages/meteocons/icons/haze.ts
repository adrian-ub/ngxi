import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsHazeIcon],svg[meteocons-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHaze0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsHaze1" viewBox="0 0 258 66"><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 57h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 57h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 57h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M9 9h30"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M99 9h90"></svg:path><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-miterlimit="10" stroke-width="18" d="M219 9h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsHaze0" transform="translate(76.5 140.5)"></svg:use><svg:use width="258" height="66" href="#meteoconsHaze1" transform="translate(127 405)"></svg:use>`,
})
export class MeteoconsHazeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
