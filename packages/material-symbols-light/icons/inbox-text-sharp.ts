import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInboxTextSharpIcon],svg[material-symbols-light-inbox-text-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11.904h9v-1h-9zm0-3.077h9v-1h-9zM4 20V4h16v16zm8-3.384q.95 0 1.725-.55t1.075-1.45H19V5H5v9.616h4.2q.3.9 1.075 1.45t1.725.55"></svg:path>`,
})
export class MaterialSymbolsLightInboxTextSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
