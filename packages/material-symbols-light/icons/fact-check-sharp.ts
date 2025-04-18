import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFactCheckSharpIcon],svg[material-symbols-light-fact-check-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 16.5h4v-1h-4zm9.05-2.211l4.238-4.239l-.713-.714l-3.525 3.55l-1.425-1.424l-.688.713zM5.5 12.5h4v-1h-4zm0-4h4v-1h-4zM3 20V4h18v16z"></svg:path>`,
})
export class MaterialSymbolsLightFactCheckSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
