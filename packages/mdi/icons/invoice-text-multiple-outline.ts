import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMultipleOutlineIcon],svg[mdi-invoice-text-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v15h2V4h13V2zm8 8h7v2h-7zm5 4h-5v2h5zm3.5 6.32L21 22V6H6v16l2.5-1.68L11 22l2.5-1.68L16 22zM19 8v9.57l-3 2.02l-2.5-1.69l-2.5 1.69l-3-2.02V8z"></svg:path>`,
})
export class MdiInvoiceTextMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
