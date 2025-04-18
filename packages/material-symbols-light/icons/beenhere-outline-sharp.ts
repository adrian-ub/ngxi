import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBeenhereOutlineSharpIcon],svg[material-symbols-light-beenhere-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.77l-7-5.25V3h14v13.52zm0-1.27l6-4.48V4H6v12.02zm-1.05-6.192l4.958-4.958l-.708-.72l-4.25 4.25l-2.138-2.138l-.72.708zM12 4H6h12z"></svg:path>`,
})
export class MaterialSymbolsLightBeenhereOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
