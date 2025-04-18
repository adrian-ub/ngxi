import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileDocumentAlertIcon],svg[mdi-file-document-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h2v-2h-2zm0-10v6h2V7zm-9 2h5.5L11 3.5zM4 2h8l6 6v12c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H4v2zm3-4v-2H4v2z"></svg:path>`,
})
export class MdiFileDocumentAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
