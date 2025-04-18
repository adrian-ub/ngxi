import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitOutlineSharpIcon],svg[material-symbols-splitscreen-portrait-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-5H8zm0-7h8V6H8zM4 22V2h16v20zm2-2h12V4H6zM18 4H6z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
