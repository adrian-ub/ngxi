import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyboardFilledIcon],svg[tdesign-keyboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1v18h22zM4.996 7.5H7v2.004H4.996zM19 15v2H5v-2zm-8-7.5v2.004H8.996V7.5zm1.996 0H15v2.004h-2.004zM19 7.5v2.004h-2.004V7.5zm-14.004 3H7v2.004H4.996zm6.004 0v2.004H8.996V10.5zm1.996 0H15v2.004h-2.004zm6.004 0v2.004h-2.004V10.5z"></svg:path>`,
})
export class TdesignKeyboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
