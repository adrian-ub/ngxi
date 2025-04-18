import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBag01Icon],svg[hugeicons-shopping-bag-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.5 8V6.364C7.5 3.954 9.515 2 12 2s4.5 1.954 4.5 4.364V8"></svg:path><svg:path d="M13.882 7.5h-3.764c-3.888 0-5.392.988-6.468 4.737c-.969 3.377-1.453 5.066-.946 6.375a4.34 4.34 0 0 0 1.581 1.998c2.61 1.812 12.702 1.894 15.43 0a4.35 4.35 0 0 0 1.582-1.998c.506-1.31.021-2.998-.947-6.375c-1.033-3.6-2.419-4.737-6.468-4.737M11 11h2"></svg:path></svg:g>`,
})
export class HugeiconsShoppingBag01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
