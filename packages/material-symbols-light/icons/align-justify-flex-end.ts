import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignJustifyFlexEndIcon],svg[material-symbols-light-align-justify-flex-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21V3h1v18zm-5.5-4.5v-9h2v9zm-6 0v-9h2v9z"></svg:path>`,
})
export class MaterialSymbolsLightAlignJustifyFlexEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
