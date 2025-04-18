import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGalatasarayIcon],svg[arcticons-galatasaray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.536 28.35a8.46 8.46 0 0 0 16.92 0h0c.138-10.48-13.556-5.472-14.317-14.038c.002-3.21 2.629-5.812 5.866-5.812s5.859 2.602 5.856 5.812"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.83 20.628A11.13 11.13 0 0 0 24 17.412c-6.13 0-11.1 4.945-11.1 11.044S17.87 39.5 24 39.5s11.1-4.945 11.1-11.044h0l-5.75.05"></svg:path><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="16.054" ry="21"></svg:ellipse>`,
})
export class ArcticonsGalatasarayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
