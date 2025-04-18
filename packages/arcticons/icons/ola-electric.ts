import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOlaElectricIcon],svg[arcticons-ola-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.353 17c3.785 0 6.853 3.13 6.853 7s-3.068 7-6.853 7S4.5 27.87 4.5 24s3.068-7 6.853-7m9.002 0v14h5.728m2.149 0l7.634-14L43.5 31"></svg:path>`,
})
export class ArcticonsOlaElectricIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
