import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAirplayOutlineSharpIcon],svg[material-symbols-airplay-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 21l6-6l6 6zm-4-2V3h20v16h-5v-2h3V5H4v12h3v2zm10-7"></svg:path>`,
})
export class MaterialSymbolsAirplayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
