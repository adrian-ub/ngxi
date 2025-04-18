import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFontSizeLineIcon],svg[clarity-font-size-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9.08A1.13 1.13 0 0 0 19.86 8H4.62a1.1 1.1 0 1 0 0 2.19H11V27a1.09 1.09 0 0 0 2.17 0V10.19h6.69A1.14 1.14 0 0 0 21 9.08" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M30.67 15h-9.52a1.1 1.1 0 1 0 0 2.19H25v9.31a1.09 1.09 0 0 0 2.17 0v-9.27h3.54a1.1 1.1 0 1 0 0-2.19Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFontSizeLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
