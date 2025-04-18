import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagRemoveIcon],svg[hugeicons-shopping-bag-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8"></svg:path><svg:path d="M19.5 11.502C18.48 8.48 17.204 7.5 13.43 7.5H9.65c-3.905 0-5.415.988-6.495 4.74c-.973 3.377-1.46 5.067-.95 6.376a4.35 4.35 0 0 0 1.588 2C5.035 21.474 7.968 21.944 11 22m3-7l3.5 3.5m0 0L21 22m-3.5-3.5L14 22m3.5-3.5L21 15m-10.5-4h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
