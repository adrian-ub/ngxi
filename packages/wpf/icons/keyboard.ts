import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfKeyboardIcon],svg[wpf-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6H3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3m-3 5h-2V9h2zm3 0h-2V9h2zm-9 0h-2V9h2zm3 0h-2V9h2zm-6 0H9V9h2zm-6 0H3V9h2zm3 0H6V9h2zm12 8H6v-2h14zm1-4h-2v-2h2zm-6 0h-2v-2h2zm3 0h-2v-2h2zm-6 0h-2v-2h2zm-6 0H4v-2h2zm3 0H7v-2h2z"></svg:path>`,
})
export class WpfKeyboardIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
