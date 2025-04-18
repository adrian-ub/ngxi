import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsToeiTransportationIcon],svg[arcticons-toei-transportation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5C24 33.626 14.374 24 2.5 24C2.5 12.126 12.126 2.5 24 2.5S45.5 12.126 45.5 24C33.626 24 24 33.626 24 45.5"></svg:path><svg:circle cx="38.5" cy="38.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 34.5h5.3m-2.65 8v-8"></svg:path>`,
})
export class ArcticonsToeiTransportationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
