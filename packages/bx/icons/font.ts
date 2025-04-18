import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFontIcon],svg[bx-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16zm-1.239 9L12.5 6.515L14.932 13z"></svg:path>`,
})
export class BxFontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
