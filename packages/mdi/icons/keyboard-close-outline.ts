import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyboardCloseOutlineIcon],svg[mdi-keyboard-close-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23l4-4H8M4 3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2h16v10H4zm1 1v2h2V6zm3 0v2h2V6zm3 0v2h2V6zm3 0v2h2V6zm3 0v2h2V6zM5 9v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm3 0v2h2V9zm-9 3v2h8v-2z"></svg:path>`,
})
export class MdiKeyboardCloseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
