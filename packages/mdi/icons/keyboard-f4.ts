import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF4Icon],svg[mdi-keyboard-f4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm8 0h2v4h2V7h2v10h-2v-4h-4z"></svg:path>`,
})
export class MdiKeyboardF4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
