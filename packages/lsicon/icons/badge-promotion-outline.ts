import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBadgePromotionOutlineIcon],svg[lsicon-badge-promotion-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m5.5 10.5l5-5m-2.682-4l1.768 1.06l2.053.181l.807 1.897L14 5.99L13.538 8L14 10.009l-1.554 1.353l-.807 1.897l-2.053.181l-1.768 1.06l-1.767-1.06l-2.054-.181l-.806-1.897l-1.555-1.353L2.098 8l-.462-2.009l1.555-1.353l.806-1.897l2.054-.181zM7 6.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class LsiconBadgePromotionOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
