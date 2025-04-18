import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHihonorSystemmanagerIcon],svg[arcticons-hihonor-systemmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.015 5.5c10.03 3.882 13.134 4.912 17.183 7.347c-.247 8.144 0 23.585-17.436 29.653C7.235 37.998 6.919 23.024 6.802 12.4c3.448-2.577 7.11-3.562 17.213-6.9m0 11.867L23.762 42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.802 12.4c4.697 3.044 14.38 4.896 17.213 4.967s11.7-2.242 17.183-4.52"></svg:path>`,
})
export class ArcticonsHihonorSystemmanagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
