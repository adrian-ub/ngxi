import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceImportOutlineIcon],svg[mdi-invoice-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 20l3 2V3H3v6h2V5h14v13.26l-1-.66l-3 2l-3-2l-3 2l-3-2l-1 .66V15H3v7l3-2l3 2l3-2l3 2zm-6.5-3l-1.42-1.42L12.67 13H3v-2h9.67l-2.59-2.59L11.5 7l5 5z"></svg:path>`,
})
export class MdiInvoiceImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
