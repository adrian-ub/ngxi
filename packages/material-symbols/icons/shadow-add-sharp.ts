import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsShadowAddSharpIcon],svg[material-symbols-shadow-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14v-3h-3V9h3V6h2v3h3v2h-3v3zM2 22V6h4V2h16v16h-4v4zm6-6h12V4H8z"></svg:path>`,
})
export class MaterialSymbolsShadowAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
