import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxParagraphIcon],svg[bx-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h2v4h2V6h2v14h2V6h3V4H9c-3.309 0-6 2.691-6 6s2.691 6 6 6M9 6h2v8H9c-2.206 0-4-1.794-4-4s1.794-4 4-4"></svg:path>`,
})
export class BxParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
