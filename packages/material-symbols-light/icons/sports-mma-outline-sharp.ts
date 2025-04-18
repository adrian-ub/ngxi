import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSportsMmaOutlineSharpIcon],svg[material-symbols-light-sports-mma-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.616v-3.232h8.077v3.231zM7.039 15l-.808-4.05V3.846h10v2.77h1.538v4.296L16.923 15zm.842-1h8.238l.65-3.323v-.908h-1.538V4.846h-8v5.87zM9 9.77h4.462V8H9zm3-.347"></svg:path>`,
})
export class MaterialSymbolsLightSportsMmaOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
