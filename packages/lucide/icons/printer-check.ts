import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucidePrinterCheckIcon],svg[lucide-printer-check-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5M16 19l2 2l4-4"></svg:path><svg:path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></svg:path></svg:g>`,
})
export class LucidePrinterCheckIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
