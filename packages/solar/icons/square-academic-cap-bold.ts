import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCapBoldIcon],svg[solar-square-academic-cap-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.217 3.5a5.17 5.17 0 0 0-4.434 0L3.092 6.637c-1.076.504-1.357 1.927-.842 2.91V14.5a.75.75 0 0 0 1.5 0v-3.828L9.783 13.5a5.17 5.17 0 0 0 4.434 0l6.691-3.137c1.456-.682 1.456-3.044 0-3.726z"></svg:path><svg:path fill="currentColor" d="M5 12.915v3.71c0 1.008.503 1.952 1.385 2.44C7.854 19.88 10.204 21 12 21s4.146-1.121 5.615-1.934c.882-.489 1.385-1.433 1.385-2.44v-3.711l-4.146 1.944a6.67 6.67 0 0 1-5.708 0z"></svg:path>`,
})
export class SolarSquareAcademicCapBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
