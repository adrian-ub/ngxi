import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilSunCircleIcon],svg[pepicons-pencil-sun-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g transform="translate(3 3)"><svg:path fill-rule="evenodd" d="M10 13.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5" clip-rule="evenodd"></svg:path><svg:rect width="1" height="3" x="1" y="10.5" rx=".5" transform="rotate(-90 1 10.5)"></svg:rect><svg:rect width="1" height="3" x="16" y="10.5" rx=".5" transform="rotate(-90 16 10.5)"></svg:rect><svg:rect width="1" height="3" x="14" y="14.707" rx=".5" transform="rotate(-45 14 14.707)"></svg:rect><svg:rect width="1" height="3" x="3" y="3.707" rx=".5" transform="rotate(-45 3 3.707)"></svg:rect><svg:rect width="1" height="3" x="9.5" y="16" rx=".5"></svg:rect><svg:rect width="1" height="3" x="9.5" y="1" rx=".5"></svg:rect><svg:rect width="1" height="3" x="16.121" y="3" rx=".5" transform="rotate(45 16.121 3)"></svg:rect><svg:rect width="1" height="3" x="5.121" y="14" rx=".5" transform="rotate(45 5.121 14)"></svg:rect></svg:g><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilSunCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
