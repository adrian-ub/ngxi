import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBurstModeSharpIcon],svg[material-symbols-burst-mode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19V5h2v14zm4 0V5h2v14zm4 0V5h14v14zm3-4h8l-2.6-3.5l-1.9 2.5l-1.4-1.85z"></svg:path>`,
})
export class MaterialSymbolsBurstModeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
