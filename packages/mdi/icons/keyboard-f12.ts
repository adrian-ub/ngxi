import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardF12Icon],svg[mdi-keyboard-f12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7h6v2H4v2h3v2H4v4H2zm14 0h4a2 2 0 0 1 2 2v2c0 1.11-.89 2-2 2h-2v2h4v2h-6v-4c0-1.1.9-2 2-2h2V9h-4zm-6 0h4v10h-2V9h-2z"></svg:path>`,
})
export class MdiKeyboardF12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
