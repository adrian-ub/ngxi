import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF11Icon],svg[mdi-keyboard-f11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h6v2H5v2h3v2H5v4H3zm8 0h4v10h-2V9h-2zm6 0h4v10h-2V9h-2z"></svg:path>`,
})
export class MdiKeyboardF11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
