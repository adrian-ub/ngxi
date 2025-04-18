import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSelectWindowSharpIcon],svg[material-symbols-light-select-window-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.808v-11h4V3.192h14v11h-4v6.616zm1-1h12v-7H4zm13-6.616h3v-7H8v3.616h9z"></svg:path>`,
})
export class MaterialSymbolsLightSelectWindowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
