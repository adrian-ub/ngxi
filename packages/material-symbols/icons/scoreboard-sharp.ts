import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScoreboardSharpIcon],svg[material-symbols-scoreboard-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 15H19V9h-4.5zm1.5-1.5v-3h1.5v3zM5 15h4.5v-1.5h-3v-1h3V9H5v1.5h3v1H5zm6.25-4h1.5V9.5h-1.5zm0 3.5h1.5V13h-1.5zM2 20V4h5V2h2v2h6V2h2v2h5v16zm9.25-12.5h1.5V6h-1.5zm0 10.5h1.5v-1.5h-1.5z"></svg:path>`,
})
export class MaterialSymbolsScoreboardSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
