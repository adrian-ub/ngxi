import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGridGoldenratioIcon],svg[material-symbols-light-grid-goldenratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-7H3v-1h7v-2H3v-1h7V3h1v7h2V3h1v7h7v1h-7v2h7v1h-7v7h-1v-7h-2v7zm1-8h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsLightGridGoldenratioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
