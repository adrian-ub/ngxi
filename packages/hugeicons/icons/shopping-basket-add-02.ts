import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketAdd02Icon],svg[hugeicons-shopping-basket-add-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 18h8m-4 4v-8M7 7.5V7a5 5 0 0 1 10 0v.5M10 22c-2.28 0-3.43-.008-4.232-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.476 12M4.5 17.5H10" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketAdd02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
