import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLowellIcon],svg[arcticons-lowell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.854 36.188l-2.44-2.438L19.173 24l-9.759-9.75l4.88-4.875L28.93 24L14.294 38.625l4.88 4.875L38.586 24L19.173 4.5l-2.44 2.438"></svg:path>`,
})
export class ArcticonsLowellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
