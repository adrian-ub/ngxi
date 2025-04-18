import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOverviewKeySharpIcon],svg[material-symbols-light-overview-key-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.77 18V6h12v12zM17 18V6h1v12zm4.23 0V6h1v12z"></svg:path>`,
})
export class MaterialSymbolsLightOverviewKeySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
