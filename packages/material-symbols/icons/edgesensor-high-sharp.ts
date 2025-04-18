import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorHighSharpIcon],svg[material-symbols-edgesensor-high-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 17v-7h2v7zm3-3V7h2v7zm3 8V2h12v20zm13-5v-7h2v7zm3-3V7h2v7zM8 17h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorHighSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
