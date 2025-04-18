import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewColumnSharpIcon],svg[material-symbols-light-view-column-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6h4.825v12zm5.594 0V6H14.4v12zm5.575 0V6h4.825v12z"></svg:path>`,
})
export class MaterialSymbolsLightViewColumnSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
