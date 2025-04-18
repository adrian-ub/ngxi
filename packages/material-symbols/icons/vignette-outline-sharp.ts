import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVignetteOutlineSharpIcon],svg[material-symbols-vignette-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q2.45 0 4.225-1.187T18 12t-1.775-2.812T12 8T7.775 9.188T6 12t1.775 2.813T12 16m0-2q-1.625 0-2.812-.6T8 12t1.188-1.4T12 10t2.813.6T16 12t-1.187 1.4T12 14M2 20V4h20v16zm2-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsVignetteOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
