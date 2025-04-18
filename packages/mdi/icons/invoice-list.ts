import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceListIcon],svg[mdi-invoice-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v19l-3-2l-3 2l-3-2l-3 2l-3-2zM17 9V7h-2v2zm-4 0V7H7v2zm0 2H7v2h6zm2 2h2v-2h-2z"></svg:path>`,
})
export class MdiInvoiceListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
