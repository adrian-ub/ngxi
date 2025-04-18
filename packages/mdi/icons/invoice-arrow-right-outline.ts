import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceArrowRightOutlineIcon],svg[mdi-invoice-arrow-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM19 22v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiInvoiceArrowRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
