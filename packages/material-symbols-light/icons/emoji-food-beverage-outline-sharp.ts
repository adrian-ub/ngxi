import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEmojiFoodBeverageOutlineSharpIcon],svg[material-symbols-light-emoji-food-beverage-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zm0-3.77V4h14.308q.69 0 1.191.472T21 5.634v2.231q0 .69-.501 1.163q-.501.472-1.191.472h-2v6.73zM6 5h10.308zm11.308 3.5h2q.288 0 .49-.183T20 7.865v-2.23q0-.27-.202-.452Q19.596 5 19.308 5h-2zm-1 6.73V5H9.885v1.17l1.73 1.426v3.75h-4.23v-3.75l1.73-1.427V5H6v10.23zM9.116 5h.769z"></svg:path>`,
})
export class MaterialSymbolsLightEmojiFoodBeverageOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
