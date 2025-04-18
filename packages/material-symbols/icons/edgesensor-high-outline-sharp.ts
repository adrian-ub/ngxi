import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorHighOutlineSharpIcon],svg[material-symbols-edgesensor-high-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 17v-7h2v7zm3-3V7h2v7zm3 8V2h12v20zm10-3H8v1h8zM8 5h8V4H8zm11 12v-7h2v7zm3-3V7h2v7zM8 5V4zm0 14v1zm0-2h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorHighOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
