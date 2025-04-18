import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentAlertOutlineIcon],svg[mdi-file-document-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v-2h-2zm0-10v6h2V7M6 16h5v2H6m0-6h8v2H6M4 2c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8l-6-6M4 4h7v5h5v11H4Z"></svg:path>`,
})
export class MdiFileDocumentAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
