import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasket02Icon],svg[hugeicons-shopping-basket-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.34 16.878L3.179 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371H18.91c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066l-1.163 6.942c-.41 2.448-.615 3.672-1.427 4.397S16.253 22 13.92 22h-3.84c-2.333 0-3.5 0-4.312-.725c-.812-.724-1.017-1.949-1.427-4.397M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10h15" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasket02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
