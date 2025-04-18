import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifyCenterIcon],svg[material-symbols-light-align-justify-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 21V3h1v18zm3.23-4.5v-9h2v9zm-7.46 0v-9h2v9z"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifyCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
