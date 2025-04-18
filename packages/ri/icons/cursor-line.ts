import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCursorLineIcon],svg[ri-cursor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.387 13.498l2.553 7.014l-4.698 1.71l-2.553-7.014l-3.899 2.445l1.619-16.02l11.537 11.232zm-.01 5.818l-2.715-7.46l2.96-.41l-5.64-5.49l-.791 7.83l2.531-1.587l2.715 7.46z"></svg:path>`,
})
export class RiCursorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
