import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPowerPlugSharpIcon],svg[material-symbols-power-plug-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21v-3L6 14.5V7h2V3h2v4h4V3h2v4h2v7.5L14.5 18v3z"></svg:path>`,
})
export class MaterialSymbolsPowerPlugSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
