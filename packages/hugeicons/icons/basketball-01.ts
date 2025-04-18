import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBasketball01Icon],svg[hugeicons-basketball-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M2 12.95C8.145 13.56 13.558 8.116 12.95 2m-1.9 20c-.61-6.145 4.837-11.558 10.951-10.95"></svg:path><svg:path d="M17 20c0-7.18-5.82-13-13-13"></svg:path></svg:g>`,
})
export class HugeiconsBasketball01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
