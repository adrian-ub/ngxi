import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTextSelectEndIcon],svg[material-symbols-text-select-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5V3h2v2zm0 16v-2h2v2zM7 5V3h2v2zm0 16v-2h2v2zM3 5V3h2v2zm0 4V7h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm0 4v-2h2v2zm12 0v-2h2V5h-2V3h6v2h-2v14h2v2z"></svg:path>`,
})
export class MaterialSymbolsTextSelectEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
