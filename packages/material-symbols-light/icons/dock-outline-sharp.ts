import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDockOutlineSharpIcon],svg[material-symbols-light-dock-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 21.385v-1h7v1zm-1.5-3v-16h10v16zm1-2.5v1.5h8v-1.5zm0-1h8v-9H8zm0-10h8v-1.5H8zm0 0v-1.5zm0 11v1.5z"></svg:path>`,
})
export class MaterialSymbolsLightDockOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
