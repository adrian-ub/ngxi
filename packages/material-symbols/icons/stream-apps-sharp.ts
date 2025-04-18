import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStreamAppsSharpIcon],svg[material-symbols-stream-apps-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17V8h9v7h-7zm-9 6V1h14v6h-2V6H7v12h10v-1h2v6z"></svg:path>`,
})
export class MaterialSymbolsStreamAppsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
