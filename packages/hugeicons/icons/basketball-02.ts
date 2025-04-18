import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBasketball02Icon],svg[hugeicons-basketball-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M2 12c2.28 2.429 5.91 4 10 4s7.72-1.571 10-4M12 2v20"></svg:path><svg:path d="M5.156 5c-.382 1.5-.116 4 1.41 6c1.605 2.103 2.616 5-1.197 8M18.844 5c.382 1.5.116 4-1.41 6c-1.605 2.103-2.616 5 1.197 8"></svg:path></svg:g>`,
})
export class HugeiconsBasketball02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
