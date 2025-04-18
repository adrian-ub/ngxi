import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBackToTabSharpIcon],svg[material-symbols-back-to-tab-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.275 11.7L4 7.425V11H2V4h7v2H5.4l4.3 4.275zM2 20v-7h2v5h8v2zm18-7V6h-9V4h11v9zm2 2v5h-8v-5z"></svg:path>`,
})
export class MaterialSymbolsBackToTabSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
