import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonicaIcon],svg[arcticons-monica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.5 24c0 7.906-7.385 14.315-16.495 14.315c-9.11.005-16.499-6.4-16.505-14.306V24c0-7.906 7.385-14.314 16.495-14.314h.007c9.11-.002 16.496 6.405 16.498 14.31zm-7.437-2.75l-4.009 4.04l5.232 3.235M16.68 20.988V28.8"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMonicaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
