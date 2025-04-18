import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMarkAsUnreadIcon],svg[tdesign-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 1.34l7.744 4.555L16.23 7.62L9.5 3.66L2 8.072V20H0V6.928zM4 9h19v14H4zm3.992 2l5.508 3.787L19.008 11zM21 12.057l-7.5 5.157L6 12.057V21h15z"></svg:path>`,
})
export class TdesignMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
