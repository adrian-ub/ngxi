import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsVoucherIcon],svg[hugeicons-voucher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.563 5.558L7.4 8m0 0l3.6 3M7.4 8l-2.895 2.387M7.4 8L11 5m-9-.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m0 7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m6 3.577V14m11.846-6.73c.495.14.885.353 1.208.676s.535.713.675 1.208m0 9.692c-.14.495-.352.885-.675 1.208s-.713.535-1.208.675m-9.692 0c-.495-.14-.885-.352-1.208-.675s-.535-.713-.675-1.208M13.923 21h2.154M22 15.077v-2.154M16.077 7h-2.154" color="currentColor"></svg:path>`,
})
export class HugeiconsVoucherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
