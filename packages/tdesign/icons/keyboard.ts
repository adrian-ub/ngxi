import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignKeyboardIcon],svg[tdesign-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5zm1.996 2.5H7v2.004H4.996zm4 0H11v2.004H8.996zm4 0H15v2.004h-2.004zm4 0H19v2.004h-2.004zm-12 3H7v2.004H4.996zm4 0H11v2.004H8.996zm4 0H15v2.004h-2.004zm4 0H19v2.004h-2.004zM5 15h14v2H5z"></svg:path>`,
})
export class TdesignKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
