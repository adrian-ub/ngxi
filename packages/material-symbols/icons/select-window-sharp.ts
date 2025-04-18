import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSelectWindowSharpIcon],svg[material-symbols-select-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V9h4V2h16v13h-4v7zm2-2h12v-7H4zm14-7h2V6H8v3h10z"></svg:path>`,
})
export class MaterialSymbolsSelectWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
