import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignJustifySpaceEvenIcon],svg[material-symbols-align-justify-space-even-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22V2h2v20zM2 22V2h2v20zm12-5V7h3v10zm-7 0V7h3v10z"></svg:path>`,
})
export class MaterialSymbolsAlignJustifySpaceEvenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
