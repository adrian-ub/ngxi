import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageDotsRoundMinusIcon],svg[mage-message-dots-round-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.25 12a9.4 9.4 0 0 1-.7 3.54a9.3 9.3 0 0 1-5 5a9.3 9.3 0 0 1-7.34-.11L4.34 21c-.19.045-.39.045-.58 0a1.3 1.3 0 0 1-.48-.31A1.15 1.15 0 0 1 3 19.58l.53-3.92A8.9 8.9 0 0 1 2.75 12a9.4 9.4 0 0 1 .7-3.54a9.3 9.3 0 0 1 5-5A9.3 9.3 0 0 1 12 2.75"></svg:path><svg:path stroke-miterlimit="10" d="M15.024 5.87h6.226"></svg:path><svg:path stroke-linejoin="round" d="M12 12.61a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m4.279 0a.61.61 0 1 0 0-1.221a.61.61 0 0 0 0 1.221m-8.558 0a.61.61 0 1 0 .001-1.221a.61.61 0 0 0 0 1.221"></svg:path></svg:g>`,
})
export class MageMessageDotsRoundMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
