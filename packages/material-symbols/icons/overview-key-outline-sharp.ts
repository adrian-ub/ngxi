import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOverviewKeyOutlineSharpIcon],svg[material-symbols-overview-key-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h14v14zm2-2h10V7H3zm14 2V5h2v14zm4 0V5h2v14zM3 17V7z"></svg:path>`,
})
export class MaterialSymbolsOverviewKeyOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
