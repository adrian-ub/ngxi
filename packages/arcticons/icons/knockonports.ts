import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKnockonportsIcon],svg[arcticons-knockonports-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.06 5.57h25.88a.83.83 0 0 1 .66 1.33L29.29 18a.84.84 0 0 1-.67.33h-9.24a.81.81 0 0 1-.66-.33L10.4 6.9a.83.83 0 0 1 .66-1.33"></svg:path><svg:circle cx="24" cy="38.74" r="5.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.8 38.22A14.28 14.28 0 0 0 34.05 15M14 15a14.28 14.28 0 0 0 4.2 23.22"></svg:path>`,
})
export class ArcticonsKnockonportsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
