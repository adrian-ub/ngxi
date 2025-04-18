import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClinicalThermometerIcon],svg[openmoji-clinical-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#92d3f5" d="M48.852 24.687a4.76 4.76 0 0 0-6.723-.254L26.15 39.245c-1.336 1.239-1.564 4.939-1.769 5.127l-3.1 2.856a2.356 2.356 0 0 0-.137 3.328l.115.125a2.356 2.356 0 0 0 3.328.137l3.1-2.856c.265-.243 3.706-.603 4.931-1.739l15.979-14.812a4.757 4.757 0 0 0 .254-6.724"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M48.852 24.687a4.76 4.76 0 0 0-6.723-.254L26.15 39.245c-1.336 1.239-1.564 4.939-1.769 5.127l-3.1 2.856a2.356 2.356 0 0 0-.137 3.328l.115.125a2.356 2.356 0 0 0 3.328.137l3.1-2.856c.265-.243 3.706-.603 4.931-1.739l15.979-14.812a4.757 4.757 0 0 0 .254-6.724M23.463 48.575l22.79-21.158"></svg:path><svg:rect width="2.893" height="1.571" x="27.905" y="37.732" rx=".523" transform="rotate(45 29.352 38.517)"></svg:rect><svg:rect width="2.126" height="1.571" x="31.086" y="34.331" rx=".523" transform="rotate(45 32.15 35.116)"></svg:rect><svg:rect width="3.39" height="1.571" x="33.602" y="32.203" rx=".523" transform="rotate(45 35.297 32.988)"></svg:rect><svg:rect width="2.786" height="1.571" x="36.814" y="29.035" rx=".523" transform="rotate(45 38.207 29.82)"></svg:rect><svg:rect width="2.786" height="1.571" x="39.727" y="26.249" rx=".523" transform="rotate(45 41.12 27.034)"></svg:rect>`,
})
export class OpenmojiClinicalThermometerIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
