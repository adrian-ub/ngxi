import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterPosEditOutlineIcon],svg[mdi-printer-pos-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17v-5h12.13l1.26-1.26c.03-.03.06-.05.11-.07c-.39-.41-.91-.67-1.5-.67h-1V4H7v6H6a2 2 0 0 0-2 2v7h7.13l2-2zM9 6h6v4H9zm-2 9v-2h4v2zm15.85-.81l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"></svg:path>`,
})
export class MdiPrinterPosEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
