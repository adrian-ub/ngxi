import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenBottomOutlineSharpIcon],svg[material-symbols-light-splitscreen-bottom-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19.385v-6h16v6zm0-8.77v-6h16v6zm15-5H5v4h14zm-14 4v-4z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenBottomOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
