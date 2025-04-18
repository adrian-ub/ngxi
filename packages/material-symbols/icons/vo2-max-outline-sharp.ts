import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVo2MaxOutlineSharpIcon],svg[material-symbols-vo2-max-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20V9.525L8 4V1h2v3l7 5.5V13h-2v-2.475l-3-2.4V20h-2V6.55l-1-.8l-1 .8L8.05 20zm2-2h3.05L6 8.125l-3 2.4zm10 2v-6h4.5v6zm1.5-1.5H16v-3h-1.5zm4 3.5v-3.75h3v-.75h-3V16H23v3.75h-3v.75h3V22zm-5-8.95"></svg:path>`,
})
export class MaterialSymbolsVo2MaxOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
