import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMessagesOneIcon],svg[icon-park-twotone-messages-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMessagesOne0"><svg:g fill="#555" stroke="#fff" stroke-width="4"><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke-linejoin="round" d="M34 23c0 3.862-2.703 7.157-6.5 8.433c-1.09.367-2.269.567-3.5.567c-4 0-9 2-9 2l1.132-2.446c.563-1.216.204-2.63-.57-3.723C14.572 26.436 14 24.778 14 23c0-4.97 4.477-9 10-9s10 4.03 10 9Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMessagesOne0)"></svg:path>`,
})
export class IconParkTwotoneMessagesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
