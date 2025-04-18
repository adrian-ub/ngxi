import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnifyFullscreenOutlineSharpIcon],svg[material-symbols-magnify-fullscreen-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h20v16zm2-2h16V6H4zm0 0V6zm10-4h2v-2h2v-2h-2V8h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsMagnifyFullscreenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
