import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxFontSizeIcon],svg[bx-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 6l-3-4l-3 4h2v4h-2l3 4l3-4h-2V6zM9.307 4l-6 16h2.137l1.875-5h6.363l1.875 5h2.137l-6-16zm-1.239 9L10.5 6.515L12.932 13z"></svg:path>`,
})
export class BxFontSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
