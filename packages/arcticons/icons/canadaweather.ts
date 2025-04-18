import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCanadaweatherIcon],svg[arcticons-canadaweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.388 11.018c5.289-.284 10.791 2.762 12.617 9.731A8.155 8.155 0 0 1 36.065 37H13.26c-10.922-1.482-12.416-17.376 0-19.51a12.03 12.03 0 0 1 10.127-6.472"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24.114 29.95l-5.395.588l.74-1.711l-4.845-3.934l1.52-1.042l-1.248-2.661l2.877.668l.703-1.565l2.84 2.614l-.928-5.763l1.931.959l1.805-3.49m0 20.001V29.95l5.395.588l-.74-1.711l4.845-3.934l-1.52-1.042l1.248-2.661l-2.877.668l-.703-1.565l-2.841 2.614l.929-5.763l-1.932.959l-1.804-3.49"></svg:path>`,
})
export class ArcticonsCanadaweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
