import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatTextClipIcon],svg[material-symbols-light-format-text-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.077 19.5v-15h1v15zm12.846 0v-7H8.846v-1h9.077v-7h1v15z"></svg:path>`,
})
export class MaterialSymbolsLightFormatTextClipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
