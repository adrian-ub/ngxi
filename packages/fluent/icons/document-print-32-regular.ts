import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentPrint32RegularIcon],svg[fluent-document-print-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a3 3 0 0 0-3 3v10.837a3.5 3.5 0 0 1 1.5-.337H7V5a1 1 0 0 1 1-1h9v5a3 3 0 0 0 3 3h5v15a1 1 0 0 1-1 1h-5.587a3.25 3.25 0 0 1-1.43 2H24a3 3 0 0 0 3-3V10.828a3 3 0 0 0-.879-2.12l-5.828-5.83A3 3 0 0 0 18.172 2zm16.586 8H20a1 1 0 0 1-1-1V4.414zM6.5 17a2 2 0 0 0-2 2v1h-.25A2.25 2.25 0 0 0 2 22.25v5c0 .966.784 1.75 1.75 1.75h.75a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h.75A1.75 1.75 0 0 0 17 27.25v-5A2.25 2.25 0 0 0 14.75 20h-.25v-1a2 2 0 0 0-2-2zM6 20v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1zm0 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5V29a.5.5 0 0 1-.5.5h-6A.5.5 0 0 1 6 29z"></svg:path>`,
})
export class FluentDocumentPrint32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
