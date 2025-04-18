import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEdgesensorLowSharpIcon],svg[material-symbols-edgesensor-low-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14V7h2v7zm18 3v-7h2v7zM6 22V2h12v20zm2-5h8V7H8z"></svg:path>`,
})
export class MaterialSymbolsEdgesensorLowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
