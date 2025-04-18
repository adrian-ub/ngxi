import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentEpdfIcon],svg[carbon-document-epdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2.01 2.01 0 0 0 2 2h5v-2h-5v-2Zm-6-4h4v2h-4Z"></svg:path><svg:path fill="currentColor" d="m25.707 9.293l-7-7A1 1 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8v-2H8V4h8v6a2 2 0 0 0 2 2h6v4h2v-6a1 1 0 0 0-.293-.707M18 4.414L23.586 10H18Z"></svg:path>`,
})
export class CarbonDocumentEpdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
