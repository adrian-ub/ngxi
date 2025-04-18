import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifySpaceEvenIcon],svg[material-symbols-light-align-justify-space-even-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21V3h1v18zM3 21V3h1v18zm11.5-4.5v-9h2v9zm-7 0v-9h2v9z"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifySpaceEvenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
