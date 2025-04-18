import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsLandmarkIcon],svg[bxs-landmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-2V9h2V7a1 1 0 0 0-.594-.914l-9.432-4.191l-8.421 4.21A1 1 0 0 0 2 7v2h2v8H2v4h19zm-5-8v8h-3V9zM7 9h3v8H7z"></svg:path>`,
})
export class BxsLandmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
