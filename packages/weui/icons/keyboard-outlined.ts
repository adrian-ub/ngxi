import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiKeyboardOutlinedIcon],svg[weui-keyboard-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6M6.5 8h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-9 3h2v2h-2zm3 0h2v2h-2zM9 15h6v2H9zm3.5-4h2v2h-2zm3 0h2v2h-2z"></svg:path>`,
})
export class WeuiKeyboardOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
