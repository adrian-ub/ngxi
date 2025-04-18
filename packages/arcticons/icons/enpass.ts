import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEnpassIcon],svg[arcticons-enpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.513 6.95H10.487a5.985 5.985 0 0 0-5.895 7.02L8.476 36.1a5.985 5.985 0 0 0 5.895 4.95h19.258a5.985 5.985 0 0 0 5.895-4.95l3.884-22.128a5.985 5.985 0 0 0-5.895-7.02"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.527 20.353a6.529 6.529 0 1 0-9.625 5.745v6.957a1.12 1.12 0 0 0 1.12 1.12h3.956a1.12 1.12 0 0 0 1.12-1.12v-6.957a6.53 6.53 0 0 0 3.43-5.745"></svg:path>`,
})
export class ArcticonsEnpassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
