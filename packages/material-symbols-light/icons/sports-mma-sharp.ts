import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSportsMmaSharpIcon],svg[material-symbols-light-sports-mma-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.616v-3.232h8.077v3.231zM7.039 15l-.808-4.05V3.846h10v2.77h1.538v4.296L16.923 15zM9 9.77h4.462V8H9z"></svg:path>`,
})
export class MaterialSymbolsLightSportsMmaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
