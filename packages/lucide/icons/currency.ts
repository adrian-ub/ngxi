import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCurrencyIcon],svg[lucide-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="m3 3l3 3m15-3l-3 3M3 21l3-3m15 3l-3-3"></svg:path></svg:g>`,
})
export class LucideCurrencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
