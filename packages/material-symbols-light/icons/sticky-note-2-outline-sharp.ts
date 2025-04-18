import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStickyNote2OutlineSharpIcon],svg[material-symbols-light-sticky-note-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h9v-5h5V5H5zm-1 1V4h16v10.289L14.288 20zm3.885-6.539v-1H12v1zm0-3.961v-1h8.23v1zM5 19V5z"></svg:path>`,
})
export class MaterialSymbolsLightStickyNote2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
