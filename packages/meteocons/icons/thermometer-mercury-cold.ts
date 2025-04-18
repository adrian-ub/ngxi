import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsThermometerMercuryColdIcon],svg[meteocons-thermometer-mercury-cold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsThermometerMercuryCold0" viewBox="0 0 72 168"><svg:circle cx="36" cy="132" r="36" fill="#2885c7"></svg:circle><svg:path fill="none" stroke="#2885c7" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M36 12v120"></svg:path></svg:symbol></svg:defs><svg:use width="72" height="168" href="#meteoconsThermometerMercuryCold0" transform="translate(220 204)"></svg:use>`,
})
export class MeteoconsThermometerMercuryColdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
