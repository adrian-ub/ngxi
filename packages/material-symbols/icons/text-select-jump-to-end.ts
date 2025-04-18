import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextSelectJumpToEndIcon],svg[material-symbols-text-select-jump-to-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h2v2zM3 5V3h2v2zm4 16v-2h2v2zM7 5V3h2v2zm4 16v-2h2v2zm4 0v-2h2v2zm0-16V3h2v2zm4 16V3h2v18zm-9-5l-1.4-1.4l1.575-1.6H3v-2h7.175L8.6 9.4L10 8l4 4zm1-11V3h2v2z"></svg:path>`,
})
export class MaterialSymbolsTextSelectJumpToEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
