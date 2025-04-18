import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag2Icon],svg[streamline-shopping-bag-hand-bag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.88 12.39a1 1 0 0 1-1 1.11H2.12a1 1 0 0 1-1-1.11L2 4.5h10zM4.5 4.5V3a2.5 2.5 0 1 1 5 0v1.5"></svg:path>`,
})
export class StreamlineShoppingBagHandBag2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
