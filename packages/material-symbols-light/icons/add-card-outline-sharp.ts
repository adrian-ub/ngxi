import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAddCardOutlineSharpIcon],svg[material-symbols-light-add-card-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h18v6.192H4V18h9.192v1zM4 8.808h16V6H4zM19.5 21.5v-3h-3v-1h3v-3h1v3h3v1h-3v3zM4 18V6z"></svg:path>`,
})
export class MaterialSymbolsLightAddCardOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
