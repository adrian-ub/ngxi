import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenTopOutlineSharpIcon],svg[material-symbols-light-splitscreen-top-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.615v-6h16v6zm0 8.77v-6h16v6zm1-1h14v-4H5zm0-4v4z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenTopOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
