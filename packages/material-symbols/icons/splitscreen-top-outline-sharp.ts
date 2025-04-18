import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenTopOutlineSharpIcon],svg[material-symbols-splitscreen-top-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11V3h18v8zm0 10v-8h18v8zm2-2h14v-4H5zm0-4v4z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenTopOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
