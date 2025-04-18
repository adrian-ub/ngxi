import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBeenhereSharpIcon],svg[material-symbols-light-beenhere-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.77l-7-5.25V3h14v13.52zm-1.05-7.462l4.958-4.958l-.708-.72l-4.25 4.25l-2.138-2.138l-.72.708z"></svg:path>`,
})
export class MaterialSymbolsLightBeenhereSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
