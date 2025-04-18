import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsLandmarkIcon],svg[bx-bxs-landmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 17h-2V9h2V7a.998.998 0 0 0-.594-.914l-9.432-4.191l-8.421 4.21A1 1 0 0 0 2 7v2h2v8H2v4h19v-4zm-5-8v8h-3V9h3zM7 9h3v8H7V9z" fill="currentColor"></svg:path>`,
})
export class BxBxsLandmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
