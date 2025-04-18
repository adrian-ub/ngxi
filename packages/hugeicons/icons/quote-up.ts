import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsQuoteUpIcon],svg[hugeicons-quote-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 16c0-1.886 0-2.828.586-3.414S16.114 12 18 12s2.828 0 3.414.586S22 14.114 22 16s0 2.828-.586 3.414S19.886 20 18 20s-2.828 0-3.414-.586S14 17.886 14 16"></svg:path><svg:path d="M14 16v-4.137C14 8.196 16.516 5.086 20 4M2 16c0-1.886 0-2.828.586-3.414S4.114 12 6 12s2.828 0 3.414.586S10 14.114 10 16s0 2.828-.586 3.414S7.886 20 6 20s-2.828 0-3.414-.586S2 17.886 2 16"></svg:path><svg:path d="M2 16v-4.137C2 8.196 4.516 5.086 8 4"></svg:path></svg:g>`,
})
export class HugeiconsQuoteUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
