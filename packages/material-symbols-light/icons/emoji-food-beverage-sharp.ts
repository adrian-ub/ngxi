import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEmojiFoodBeverageSharpIcon],svg[material-symbols-light-emoji-food-beverage-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-1h14v1zM17.308 8.5h2q.288 0 .49-.183T20 7.865v-2.23q0-.27-.202-.452Q19.596 5 19.308 5h-2zM5 16.23V4h4.116v2.17L7.385 7.595v3.75h4.23v-3.75L9.886 6.17V4h9.423q.69 0 1.191.472t.5 1.162v2.231q0 .69-.501 1.163q-.501.472-1.191.472h-2v6.73z"></svg:path>`,
})
export class MaterialSymbolsLightEmojiFoodBeverageSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
