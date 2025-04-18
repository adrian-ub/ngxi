import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimplecameraIcon],svg[arcticons-simplecamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.63 15.22l-24.73-.05M13.8 24L26.15 2.61M6.53 11.44l12.34 21.34m-14.5 0l24.71.05m-7.29 12.55l12.4-21.36m7.24 12.58L29.1 15.17"></svg:path>`,
})
export class ArcticonsSimplecameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
