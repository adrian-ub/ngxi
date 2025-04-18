import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDowndetectorIcon],svg[arcticons-downdetector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45c11.598 0 21-9.402 21-21S35.598 3 24 3S3 12.402 3 24v21z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="23.993" cy="35.723" r="2.777"></svg:circle><svg:path d="M20.396 10.22c2.795-1.084 5.103-.827 7.208 0c0 6.683-.485 13.137-1.03 19.563c-1.776.684-3.477.513-5.148 0c-.472-6.477-.977-12.945-1.03-19.563"></svg:path></svg:g>`,
})
export class ArcticonsDowndetectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
