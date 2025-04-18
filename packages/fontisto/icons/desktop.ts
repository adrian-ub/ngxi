import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoDesktopIcon],svg[fontisto-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.749 0H2.251a2.25 2.25 0 0 0-2.25 2.25v14.999a2.25 2.25 0 0 0 2.25 2.25h8.999l-.75 2.25H7.124a1.125 1.125 0 0 0 0 2.25h12.75a1.125 1.125 0 0 0 0-2.25h-3.375l-.75-2.249h8.999a2.25 2.25 0 0 0 2.25-2.249V2.25A2.25 2.25 0 0 0 24.748 0zm-.751 16.499H2.999V3h20.999z"></svg:path>`,
})
export class FontistoDesktopIcon {
  readonly viewBox = input("0 0 27 24")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
