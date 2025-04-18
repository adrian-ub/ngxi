import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextRemoveOutlineIcon],svg[mdi-invoice-text-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-.24 0-.5.04-.71L12 17.6l-3 2l-3-2l-1 .66V5h14v8c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2zm5-11V7H7v2zm-2 4v-2H7v2zm4 4.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1l-1.4-1.4z"></svg:path>`,
})
export class MdiInvoiceTextRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
