import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsIuMobileIcon],svg[arcticons-iu-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.15 43.5h11.7m-11.7-39h11.7M24 4.5v39M11.325 11.813v12.024C11.325 31.15 17.175 37 24 37s12.675-5.85 12.675-13.163V11.813m-3.9-.271h7.8m-33.15 0h7.8"></svg:path>`,
})
export class ArcticonsIuMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
