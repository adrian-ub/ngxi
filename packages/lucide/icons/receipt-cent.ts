import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptCentIcon],svg[lucide-receipt-cent-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm8 4.5v11"></svg:path><svg:path d="M15 9.4a4 4 0 1 0 0 5.2"></svg:path></svg:g>`,
})
export class LucideReceiptCentIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
