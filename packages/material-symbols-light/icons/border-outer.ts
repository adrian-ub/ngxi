import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderOuterIcon],svg[material-symbols-light-border-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14V5H5zm-1 1V4h16v16zm3.692-7.384v-1.231h1.231v1.23zm3.692 3.692v-1.231h1.231v1.23zm0-3.692v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23zm3.693 3.693v-1.231h1.23v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightBorderOuterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
