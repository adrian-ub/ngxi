import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentHorizontalIcon],svg[carbon-document-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-8 18h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm8 0h-6v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H4V8h24Z"></svg:path><svg:path fill="currentColor" d="M16 18a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonDocumentHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
