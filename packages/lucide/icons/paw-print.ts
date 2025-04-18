import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePawPrintIcon],svg[lucide-paw-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="11" cy="4" r="2"></svg:circle><svg:circle cx="18" cy="8" r="2"></svg:circle><svg:circle cx="20" cy="16" r="2"></svg:circle><svg:path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10Z"></svg:path></svg:g>`,
})
export class LucidePawPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
