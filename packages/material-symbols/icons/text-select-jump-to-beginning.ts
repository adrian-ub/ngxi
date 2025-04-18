import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextSelectJumpToBeginningIcon],svg[material-symbols-text-select-jump-to-beginning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5V3h2v2zm0 16v-2h2v2zM15 5V3h2v2zm0 16v-2h2v2zM11 5V3h2v2zM7 5V3h2v2zm0 16v-2h2v2zm-4 0V3h2v18zm11-5l-4-4l4-4l1.4 1.4l-1.575 1.6H21v2h-7.175l1.575 1.6zm-3 5v-2h2v2z"></svg:path>`,
})
export class MaterialSymbolsTextSelectJumpToBeginningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
