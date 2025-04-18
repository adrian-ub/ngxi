import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceImportIcon],svg[mdi-invoice-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 20l3 2V3H3v8h9.67l-2.59-2.59L11.5 7l5 5l-5 5l-1.42-1.42L12.67 13H3v9l3-2l3 2l3-2l3 2z"></svg:path>`,
})
export class MdiInvoiceImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
