import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNotebookReferenceIcon],svg[carbon-notebook-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h3.586L2 27.586L3.414 29L9 23.414V27h2v-7zm15-10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v10h2V7h11v20h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M17 25V7h11l.002 18Z"></svg:path>`,
})
export class CarbonNotebookReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
