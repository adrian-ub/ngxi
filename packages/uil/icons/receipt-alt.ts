import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilReceiptAltIcon],svg[uil-receipt-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8h6a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2m-2 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2m0 4h8a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2M20 2H4a1 1 0 0 0-1 1v18a1 1 0 0 0 1.6.8l2.07-1.55l2.06 1.55a1 1 0 0 0 1.2 0L12 20.25l2.07 1.55a1 1 0 0 0 1.2 0l2.06-1.55l2.07 1.55a1 1 0 0 0 1.05.09A1 1 0 0 0 21 21V3a1 1 0 0 0-1-1m-1 17l-1.07-.8a1 1 0 0 0-1.2 0l-2.06 1.55l-2.07-1.55a1 1 0 0 0-1.2 0l-2.07 1.55l-2.06-1.55a1 1 0 0 0-1.2 0L5 19V4h14Z"></svg:path>`,
})
export class UilReceiptAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
