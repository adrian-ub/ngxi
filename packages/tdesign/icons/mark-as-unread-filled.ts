import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkAsUnreadFilledIcon],svg[tdesign-mark-as-unread-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 1.34L0 6.928V20h2V8.072L9.5 3.66l6.73 3.959l1.014-1.724z"></svg:path><svg:path fill="currentColor" d="M4 23V11.417l9.5 5.752l9.5-5.747V23z"></svg:path><svg:path fill="currentColor" d="M23 9v.085l-9.5 5.746L4 9.08V9z"></svg:path>`,
})
export class TdesignMarkAsUnreadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
