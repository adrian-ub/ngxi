import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPergolaSharpIcon],svg[material-symbols-pergola-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V2h2v2h14V2h2v19h-2V10H5v11zm8 0v-3H8v-2h8v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsPergolaSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
