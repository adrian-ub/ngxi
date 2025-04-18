import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMuseumOutlineIcon],svg[material-symbols-museum-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22v-2h2v-9H2V9l10-7l10 7v2h-2v9h2v2zm4-2h12zm2-2h2v-4l2 3l2-3v4h2v-7h-2l-2 3l-2-3H8zm10 2V8.65l-6-4.2l-6 4.2V20z"></svg:path>`,
})
export class MaterialSymbolsMuseumOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
