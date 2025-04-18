import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBackToTabSharpIcon],svg[material-symbols-light-back-to-tab-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.525 12.239L4 6.714v3.902H3V5h5.616v1H4.689l5.55 5.525zM3 19v-6h1v5h7.77v1zm17-6.23V6h-9V5h10v7.77zm1 2.384V19h-6.846v-3.846z"></svg:path>`,
})
export class MaterialSymbolsLightBackToTabSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
