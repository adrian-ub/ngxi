import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF2Icon],svg[mdi-keyboard-f2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h6v2H7v2h3v2H7v4H5zm8 0h4a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-2v2h4v2h-6v-4c0-1.1.9-2 2-2h2V9h-4z"></svg:path>`,
})
export class MdiKeyboardF2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
