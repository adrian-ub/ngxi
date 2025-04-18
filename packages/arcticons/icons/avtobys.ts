import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAvtobysIcon],svg[arcticons-avtobys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="33.875" r=".75" fill="currentColor"></svg:circle><svg:circle cx="24" cy="33.875" r="9.625" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.937 14.979a19.56 19.56 0 0 1 10.126 0M16.397 5.5a29.4 29.4 0 0 1 15.206 0"></svg:path>`,
})
export class ArcticonsAvtobysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
