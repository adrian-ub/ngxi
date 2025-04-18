import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAppleKeyboardShiftIcon],svg[mdi-apple-keyboard-shift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 18v-6h2.17L12 6.83L6.83 12H9v6zM12 4l10 10h-5v6H7v-6H2z"></svg:path>`,
})
export class MdiAppleKeyboardShiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
