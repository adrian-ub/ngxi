import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDataObjectOutlineSharpIcon],svg[material-symbols-light-data-object-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.52 19v-1H18v-5.79h2v-.42h-2V6h-3.48V5H19v5.946h2v2.108h-2V19zM5 19v-5.946H3v-2.108h2V5h4.48v1H6v5.79H4v.42h2V18h3.48v1z"></svg:path>`,
})
export class MaterialSymbolsLightDataObjectOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
