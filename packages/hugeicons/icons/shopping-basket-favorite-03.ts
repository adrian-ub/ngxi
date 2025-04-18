import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketFavorite03Icon],svg[hugeicons-shopping-basket-favorite-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378c-.033.154-.133.247-.252.323M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H12m2.142-7.558c1.207-.731 2.26-.437 2.893.033c.259.192.389.288.465.288s.206-.096.465-.288c.633-.47 1.686-.764 2.893-.033c1.584.96 1.942 4.125-1.71 6.795c-.697.509-1.044.763-1.648.763s-.951-.254-1.647-.763c-3.653-2.67-3.295-5.836-1.711-6.795M6.5 11L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketFavorite03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
