import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBungalowIcon],svg[material-symbols-light-bungalow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-6.796l-1.196 1.904l-.854-.512L12 4.885l6.03 9.711l-.853.512L16 13.223V20h-3.23v-3.77h-1.54V20zm3.23-6h1.54v-1.538h-1.54z"></svg:path>`,
})
export class MaterialSymbolsLightBungalowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
