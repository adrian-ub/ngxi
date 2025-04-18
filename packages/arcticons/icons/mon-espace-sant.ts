import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonEspaceSantIcon],svg[arcticons-mon-espace-sant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.508 42.5V12.363c.207-7.678 11.259-10.437 13.98 0v12.81m0-12.81c1.188-8.743 13.784-9.55 14.223 0v12.81l8.78.01"></svg:path>`,
})
export class ArcticonsMonEspaceSantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
