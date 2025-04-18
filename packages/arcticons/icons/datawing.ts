import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDatawingIcon],svg[arcticons-datawing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5L15.5 30l8.87-2.81l8.13 2.79Zm-4.9 24.32V43.5m3.23-15.71V43.5m3.86-15.73V43.5M29.63 29v14.5"></svg:path>`,
})
export class ArcticonsDatawingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
