import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagAddIcon],svg[hugeicons-shopping-bag-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 11.5c-1.02-3.02-2.296-4-6.07-4H9.65c-3.905 0-5.415.988-6.495 4.737c-.973 3.377-1.46 5.066-.95 6.375a4.35 4.35 0 0 0 1.588 1.998c1.447 1 5.187 1.474 8.707 1.378"></svg:path><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8m-2 10h8m-4 4v-8m-7.5-3h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
