import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCrossPlatfromDiskTestIcon],svg[arcticons-cross-platfrom-disk-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.24 39V25.751h2.981a5.796 5.796 0 0 1 5.797 5.797v1.656A5.796 5.796 0 0 1 16.22 39zm12.742-16.751V9h4.338c2.452 0 4.44 1.992 4.44 4.45s-1.988 4.45-4.44 4.45h-4.338m0 7.851h8.778M30.371 39V25.751m-8.353-7.945v.054a4.39 4.39 0 0 1-4.389 4.389h0a4.39 4.39 0 0 1-4.389-4.389v-4.47A4.39 4.39 0 0 1 17.63 9h0a4.39 4.39 0 0 1 4.389 4.389v.054"></svg:path>`,
})
export class ArcticonsCrossPlatfromDiskTestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
