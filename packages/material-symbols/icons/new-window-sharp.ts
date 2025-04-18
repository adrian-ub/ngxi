import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewWindowSharpIcon],svg[material-symbols-new-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v2H5v14h14v-6h2v8zm13-10V8h-3V6h3V3h2v3h3v2h-3v3z"></svg:path>`,
})
export class MaterialSymbolsNewWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
