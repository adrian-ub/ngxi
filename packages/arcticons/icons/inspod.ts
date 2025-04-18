import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInspodIcon],svg[arcticons-inspod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.522 25.495v4.488a13.522 13.522 0 0 1-27.043 0l.13-5.482m12.323-7.711a12.295 12.295 0 0 1 24.59 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.545 31.333a6.193 6.193 0 0 1 12.387 0m0-15.758v27.883M5.61 24.5a6.161 6.161 0 0 1 12.322 0m0-7.71a12.295 12.295 0 1 1 14.724 12.051m-7.065-7.987v21.048"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.591 20.854A12.293 12.293 0 0 1 37.886 8.563q.6 0 1.186.056m-6.55 16.569a9.696 9.696 0 0 1 9.697-9.694m-28.385 3.137a2.63 2.63 0 0 1 3.944-1.585"></svg:path>`,
})
export class ArcticonsInspodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
