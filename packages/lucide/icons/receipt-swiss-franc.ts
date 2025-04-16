import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptSwissFrancIcon],svg[lucide-receipt-swiss-franc-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Z"></svg:path><svg:path d="M10 17V7h5m-5 4h4m-6 4h5"></svg:path></svg:g>`,
})
export class LucideReceiptSwissFrancIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
