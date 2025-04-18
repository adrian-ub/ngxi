import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScoreboardOutlineSharpIcon],svg[material-symbols-scoreboard-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15V9H19v6zm1.5-1.5h1.5v-3H16zM5 15v-3.5h3v-1H5V9h4.5v3.5h-3v1h3V15zm6.25-4V9.5h1.5V11zm0 3.5V13h1.5v1.5zM2 20V4h5V2h2v2h6V2h2v2h5v16zm2-2h7.25v-1.5h1.5V18H20V6h-7.25v1.5h-1.5V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsScoreboardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
