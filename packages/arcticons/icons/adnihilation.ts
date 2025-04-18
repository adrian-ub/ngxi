import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdnihilationIcon],svg[arcticons-adnihilation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="24.285" x="4.5" y="11.857" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.057 15.15l23.161 17.01m-12.35-17.515l3.097 18.852m-14.703-7.328l25.001-3.563m-3.933-3.872L15.641 30.448"></svg:path>`,
})
export class ArcticonsAdnihilationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
