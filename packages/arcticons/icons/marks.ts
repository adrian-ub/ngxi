import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMarksIcon],svg[arcticons-marks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.445 22.71q.28 1.25 1.83.31l3.72-2.25l3.89 2.36q1.28.83 1.67-.42m-11.11-4.4q.28 1.25 1.83.31l3.72-2.25l3.89 2.36q1.28.83 1.67-.42"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.555 5.63V27.2q-.39 1.25-1.67.41l-3.89-2.36l-3.72 2.25q-1.55.95-1.83-.3V5.5"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsMarksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
