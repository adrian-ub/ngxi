import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteDownIcon],svg[hugeicons-quote-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 8c0 1.886 0 2.828-.586 3.414S7.886 12 6 12s-2.828 0-3.414-.586S2 9.886 2 8s0-2.828.586-3.414S4.114 4 6 4s2.828 0 3.414.586S10 6.114 10 8"></svg:path><svg:path d="M10 7v4.482c0 3.973-2.516 7.342-6 8.518M22 8c0 1.886 0 2.828-.586 3.414S19.886 12 18 12s-2.828 0-3.414-.586S14 9.886 14 8s0-2.828.586-3.414S16.114 4 18 4s2.828 0 3.414.586S22 6.114 22 8"></svg:path><svg:path d="M22 7v4.482c0 3.973-2.516 7.342-6 8.518"></svg:path></svg:g>`,
})
export class HugeiconsQuoteDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
