import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGif2SharpIcon],svg[material-symbols-gif-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17V7h8v2H4v6h4v-2H6v-2h4v6zm10 0V7h2v10zm4 0V7h7v2h-5v2h4v2h-4v4z"></svg:path>`,
})
export class MaterialSymbolsGif2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
