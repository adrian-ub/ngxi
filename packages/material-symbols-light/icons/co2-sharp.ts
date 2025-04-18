import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCo2SharpIcon],svg[material-symbols-light-co2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.308 14.692V9.308h4.384v5.384zm.884-.884h2.616v-3.616h-2.616zm-7.884.884V9.308h4.384v1.384h-.884v-.5H4.192v3.616h2.616v-.5h.884v1.384zm14 3v-3.076h3v-1.424h-3v-.884h3.884v3.077h-3v1.423h3v.884z"></svg:path>`,
})
export class MaterialSymbolsLightCo2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
