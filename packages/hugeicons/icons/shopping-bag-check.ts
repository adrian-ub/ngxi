import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBagCheckIcon],svg[hugeicons-shopping-bag-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m20 12.5l-.076-.263C18.887 8.637 17.496 7.5 13.43 7.5H9.65c-3.905 0-5.415.988-6.495 4.737c-.973 3.377-1.46 5.066-.95 6.375a4.35 4.35 0 0 0 1.588 1.998c1.379.954 4.839 1.428 8.207 1.388"></svg:path><svg:path d="M7 8V6.364C7 3.954 9.015 2 11.5 2S16 3.954 16 6.364V8m-2 11s1 0 2 2c0 0 3.177-5 6-6m-11.5-4h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBagCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
