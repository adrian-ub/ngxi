import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentProcessorIcon],svg[carbon-document-processor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 28v2h-2c-1.102 0-2-.897-2-2v-2h2v2zm5-2h2v2c0 1.103-.897 2-2 2h-2v-2h2zm-2-5v-2h2c1.103 0 2 .898 2 2v2h-2v-2zm-5 2h-2v-2c0-1.102.898-2 2-2h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M14 28H8V4h8v6c0 1.1.9 2 2 2h6v4h2v-6c0-.3-.1-.5-.3-.7l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6zm4-23.6l5.6 5.6H18z"></svg:path>`,
})
export class CarbonDocumentProcessorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
