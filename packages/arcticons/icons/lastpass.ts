import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLastpassIcon],svg[arcticons-lastpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.41 9.94A1.09 1.09 0 0 1 43.5 11v26a1.1 1.1 0 1 1-2.19 0V11a1.1 1.1 0 0 1 1.1-1.06M9.25 19.22A4.75 4.75 0 1 1 4.5 24a4.75 4.75 0 0 1 4.75-4.78m12.08 0A4.75 4.75 0 1 1 16.58 24a4.75 4.75 0 0 1 4.75-4.78m12.08 0A4.75 4.75 0 1 1 28.65 24a4.75 4.75 0 0 1 4.76-4.78"></svg:path>`,
})
export class ArcticonsLastpassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
