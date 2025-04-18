import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceEditIcon],svg[mdi-invoice-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zm2-1.47L18 13.83l2.03 2.04L13.9 22h-2.04zm8.53-7.81a.24.24 0 0 0-.08-.06a.5.5 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72z"></svg:path>`,
})
export class MdiInvoiceEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
