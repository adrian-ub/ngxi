import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiKeyboardFilledIcon],svg[weui-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M6.5 8v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm3 0v2h2V8zm-9 3v2h2v-2zm3 0v2h2v-2zM9 15v2h6v-2zm3.5-4v2h2v-2zm3 0v2h2v-2z"></svg:path>`,
})
export class WeuiKeyboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
