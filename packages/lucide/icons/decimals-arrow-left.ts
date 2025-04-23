import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideDecimalsArrowLeftIcon],svg[lucide-decimals-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m13 21l-3-3l3-3m7 3H10m-7-7h.01"></svg:path><svg:rect width="5" height="8" x="6" y="3" rx="2.5"></svg:rect></svg:g>`,
})
export class LucideDecimalsArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
