import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiKeyboardIcon],svg[ooui-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2zm9-9h2v2H9zm0 3h2v2H9zM6 6h2v2H6zm0 3h2v2H6zm-1 5H3v-2h2zm0-3H3V9h2zm0-3H3V6h2zm9 6H6v-2h8zm0-3h-2V9h2zm0-3h-2V6h2zm3 6h-2v-2h2zm0-3h-2V9h2zm0-3h-2V6h2z"></svg:path>`,
})
export class OouiKeyboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
