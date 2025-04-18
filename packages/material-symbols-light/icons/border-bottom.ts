import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderBottomIcon],svg[material-symbols-light-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h16v1zm0-3.692v-1.231h1.23v1.23zm0-3.693v-1.23h1.23v1.23zm0-3.692v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zm3.692 7.384v-1.23h1.231v1.23zm0-7.384V4h1.231v1.23zm3.692 11.077v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm0-3.692v-1.23h1.231v1.23zm0-3.692V4h1.232v1.23zm3.693 7.384v-1.23h1.23v1.23zm0-7.384V4h1.23v1.23zm3.692 11.077v-1.231H20v1.23zm0-3.693v-1.23H20v1.23zm0-3.692v-1.23H20v1.23zm0-3.692V4H20v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
