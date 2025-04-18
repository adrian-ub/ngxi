import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSplitscreenBottomSharpIcon],svg[material-symbols-splitscreen-bottom-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-8h18v8zm0-10V3h18v8zm16-6H5v4h14z"></svg:path>`,
})
export class MaterialSymbolsSplitscreenBottomSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
