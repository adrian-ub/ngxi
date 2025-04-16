import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideReceiptIndianRupeeIcon],svg[lucide-receipt-indian-rupee-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 2v20l2-1l2 1l2-1l2 1l2-1l2 1l2-1l2 1V2l-2 1l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1Zm4 5h8"></svg:path><svg:path d="M12 17.5L8 15h1a4 4 0 0 0 0-8m-1 4h8"></svg:path></svg:g>`,
})
export class LucideReceiptIndianRupeeIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
