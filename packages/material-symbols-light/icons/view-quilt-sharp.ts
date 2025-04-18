import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewQuiltSharpIcon],svg[material-symbols-light-view-quilt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.594 11.616V6H20v5.616zM15.175 18v-5.615H20V18zm-5.58 0v-5.615h4.81V18zM4 18V6h4.825v12z"></svg:path>`,
})
export class MaterialSymbolsLightViewQuiltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
