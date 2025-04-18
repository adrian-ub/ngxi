import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChipExtractionIcon],svg[material-symbols-light-chip-extraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-1.664 0-3.118-.626T6.34 17.66t-1.714-2.542T4 12t.626-3.118T6.34 6.34t2.542-1.714T12 4v1Q9.075 5 7.038 7.038T5 12t2.038 4.963T12 19zm4-3.712l-.708-.713l3.095-3.075H9.5v-1h8.867l-3.075-3.1l.708-.689L20.288 12z"></svg:path>`,
})
export class MaterialSymbolsLightChipExtractionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
