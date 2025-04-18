import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCart2Icon],svg[streamline-shopping-cart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.182 7.5h-8.18l-1-5h10a.5.5 0 0 1 .49.59l-.82 4a.49.49 0 0 1-.49.41m-9.18-5L2.582.9a.5.5 0 0 0-.49-.4H.502m3.5 7l.42 2.1a.5.5 0 0 0 .49.4h6.09m-.5 3.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class StreamlineShoppingCart2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
