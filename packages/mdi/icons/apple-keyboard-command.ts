import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardCommandIcon],svg[mdi-apple-keyboard-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a4 4 0 0 1 4 4v2h4V6a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4h-2v4h2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4v-2h-4v2a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4h2v-4H6a4 4 0 0 1-4-4a4 4 0 0 1 4-4m10 16a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2h-2zm-2-8h-4v4h4zm-8 6a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2v-2zM8 6a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2h2zm10 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2z"></svg:path>`,
})
export class MdiAppleKeyboardCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
