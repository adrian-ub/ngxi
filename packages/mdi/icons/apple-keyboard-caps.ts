import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardCapsIcon],svg[mdi-apple-keyboard-caps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14V8h2.17L12 2.83L6.83 8H9v6zM12 0l10 10h-5v6H7v-6H2zM7 18h10v6H7zm8 2H9v2h6z"></svg:path>`,
})
export class MdiAppleKeyboardCapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
