import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGarageOutlineSharpIcon],svg[material-symbols-garage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V2h20v20zm2-2h16V4H4zm5-6q-.425 0-.712-.288T8 13t.288-.712T9 12t.713.288T10 13t-.288.713T9 14m6 0q-.425 0-.712-.288T14 13t.288-.712T15 12t.713.288T16 13t-.288.713T15 14M5 11.1v7.4h2v-2h10v2h2v-7.4l-1.925-5.6H6.925zm2.65-1.6l.7-2h7.3l.7 2zM4 4v16zm3 10.5v-3h10v3z"></svg:path>`,
})
export class MaterialSymbolsGarageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
