import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTurnSlightRightSharpIcon],svg[material-symbols-turn-slight-right-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20v-8.4L14.6 6h-2.25V4H18v5.65h-2V7.4l-5 5V20z"></svg:path>`,
})
export class MaterialSymbolsTurnSlightRightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
