import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckIn02Icon],svg[hugeicons-shopping-basket-check-in-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 22h-2.92c-2.333 0-3.5 0-4.312-.725c-.812-.724-1.017-1.949-1.427-4.397L3.178 9.936c-.19-1.13-.284-1.694.007-2.065c.292-.371.83-.371 1.906-.371h13.818c1.076 0 1.614 0 1.906.37c.29.372.196.936.007 2.066L20.56 11.5"></svg:path><svg:path d="M16 16.5c.491-.506 1.8-2.5 2.5-2.5m2.5 2.5c-.491-.506-1.8-2.5-2.5-2.5m0 0v8M7 7.5V7a5 5 0 0 1 10 0v.5m-12.5 10H13"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBasketCheckIn02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
