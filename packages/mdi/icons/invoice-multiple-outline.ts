import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMultipleOutlineIcon],svg[mdi-invoice-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v15h2V4h13V2zm16.5 18.32L21 22V6H6v16l2.5-1.68L11 22l2.5-1.68L16 22zM19 8v9.57l-3 2.02l-2.5-1.69l-2.5 1.69l-3-2.02V8z"></svg:path>`,
})
export class MdiInvoiceMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
