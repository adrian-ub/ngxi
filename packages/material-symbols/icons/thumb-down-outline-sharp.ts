import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsThumbDownOutlineSharpIcon],svg[material-symbols-thumb-down-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 16v-4.4L4.65 3H17v13l-7 7l-1.85-1.85L9.45 16zM15 5H6l-3 7v2h9l-1.35 5.5L15 15.15zm0 10.15V5zm2 .85v-2h3V5h-3V3h5v13z"></svg:path>`,
})
export class MaterialSymbolsThumbDownOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
