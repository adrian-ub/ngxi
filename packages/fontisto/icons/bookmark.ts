import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoBookmarkIcon],svg[fontisto-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.08 1.6h8.88a.516.516 0 0 1 .48.478V20.24L7.6 16.56l-1.12-1.04l-1.12 1.04l-3.76 3.68V2.08a.516.516 0 0 1 .478-.48zm0-1.6A2.103 2.103 0 0 0 0 1.995V24l6.56-6.24L13.12 24V2.08A2.12 2.12 0 0 0 11.042 0h-.002z"></svg:path>`,
})
export class FontistoBookmarkIcon {
  readonly viewBox = input("0 0 13 24")
  readonly width = input("0.55em")
  readonly height = input("1em")
}
