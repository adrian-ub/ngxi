import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBasket1Icon],svg[streamline-shopping-basket-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M12.36 6H1.64a1 1 0 0 0-1 1.13l.73 5.5a1 1 0 0 0 1 .87h9.24a1 1 0 0 0 1-.87l.73-5.5A1 1 0 0 0 12.36 6M4.5 8.5V11M7 8.5V11m2.5-2.5V11"></svg:path><svg:path d="M9.48 1.54A2.79 2.79 0 0 1 11.78 4L12 6M2 6l.22-2a2.79 2.79 0 0 1 2.3-2.44"></svg:path><svg:path d="M9.5 1.75A1.25 1.25 0 0 1 8.25 3h-2.5a1.25 1.25 0 0 1 0-2.5h2.5A1.25 1.25 0 0 1 9.5 1.75"></svg:path></svg:g>`,
})
export class StreamlineShoppingBasket1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
