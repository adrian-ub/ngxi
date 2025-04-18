import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiBriefcaseIcon],svg[arcticons-emoji-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.646 25.904H40.18a2.32 2.32 0 0 0 2.319-2.32V11.413h-37v12.173a2.32 2.32 0 0 0 2.319 2.32h12.068m.647-14.494V6.488h7.981v4.924"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.159 24.796v16.716H5.883v-16.65"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.31 24.09h7.98v4.506h-7.98z"></svg:path>`,
})
export class ArcticonsEmojiBriefcaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
