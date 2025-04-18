import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextEditIcon],svg[mdi-invoice-text-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.86 21.43L9 22l-3-2l-3 2V3h18v7.2c-.9-.38-2-.2-2.76.55l-8.38 8.38zM17 7H7v2h10zm-2 4H7v2h8zm-3.14 8.96V22h2.04l6.13-6.13L18 13.83zm9.85-6.49l-1.32-1.32a.24.24 0 0 0-.08-.06a.5.5 0 0 0-.62.04l-.02.02l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72"></svg:path>`,
})
export class MdiInvoiceTextEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
