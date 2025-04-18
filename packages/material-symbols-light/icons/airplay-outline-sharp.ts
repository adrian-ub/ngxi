import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAirplayOutlineSharpIcon],svg[material-symbols-light-airplay-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.423 20L12 15.423L16.577 20zM3 18V4h18v14h-4v-1h3V5H4v12h3v1zm9-6.5"></svg:path>`,
})
export class MaterialSymbolsLightAirplayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
