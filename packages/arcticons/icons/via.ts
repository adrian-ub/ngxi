import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsViaIcon],svg[arcticons-via-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 31.73L25.37 7.75l1.65 8.96l-14.79 18.2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.97 22l.34-8.54l-6.14 1.08L4.5 31.73M25.37 7.75l6 32.5l12.13-2.67l-9.61-29.32z"></svg:path>`,
})
export class ArcticonsViaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
