import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderInnerIcon],svg[material-symbols-light-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1.23h1.23V20zm0-3.692v-1.231h1.23v1.23zm0-7.385v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zM7.692 20v-1.23h1.231V20zm0-14.77V4h1.231v1.23zM15.077 20v-1.23h1.23V20zm3.692 0v-1.23H20V20zm0-3.692v-1.231H20v1.23zm0-7.385v-1.23H20v1.23zm0-3.692V4H20v1.23zm-3.692 0V4h1.23v1.23zM11.5 20v-7.5H4v-1h7.5V4h1v7.5H20v1h-7.5V20z"></svg:path>`,
})
export class MaterialSymbolsLightBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
