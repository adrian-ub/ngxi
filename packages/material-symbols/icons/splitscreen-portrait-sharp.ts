import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenPortraitSharpIcon],svg[material-symbols-splitscreen-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h8v-5H8zm0-7h8V6H8zM4 22V2h16v20z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenPortraitSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
