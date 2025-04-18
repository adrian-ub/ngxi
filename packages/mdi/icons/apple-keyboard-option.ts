import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardOptionIcon],svg[mdi-apple-keyboard-option-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h6.11l7.04 14H21v2h-6.12L7.84 6H3zm11 0h7v2h-7z"></svg:path>`,
})
export class MdiAppleKeyboardOptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
