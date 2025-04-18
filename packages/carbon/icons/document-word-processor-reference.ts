import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentWordProcessorReferenceIcon],svg[carbon-document-word-processor-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.3 20l-.909 8.611L26 20h-2l-1.391 8.611L21.7 20H20l1.36 10h2.28L25 21.626L26.36 30h2.28L30 20zM4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM25.707 9.293l-7-7A1 1 0 0 0 18 2H8a2 2 0 0 0-2 2v12h2V4h8v6a2 2 0 0 0 2 2h6v4h2v-6a1 1 0 0 0-.293-.707M18 10V4.414L23.586 10z"></svg:path>`,
})
export class CarbonDocumentWordProcessorReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
