import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGrid3x3OffIcon],svg[material-symbols-grid-3x3-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.825 16l-2-2H20v2zM16 13.175L10.825 8H14V4h2v4h4v2h-4zm-6-6l-2-2V4h2zM19.775 22.6L16 18.825V20h-2v-3.175L13.175 16H10v4H8v-4H4v-2h4v-3.175L7.175 10H4V8h1.175L1.4 4.225L2.8 2.8l18.4 18.4z"></svg:path>`,
})
export class MaterialSymbolsGrid3x3OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
