import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenAddOutlineSharpIcon],svg[material-symbols-splitscreen-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-4v.1v-.1zm-2 2v-8h18v2H5v4h10v2zm0-10V3h18v8zm2-2h14V5H5zm0 0V5zm14 12h-2v-2h2v-2h2v2h2v2h-2v2h-2z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
