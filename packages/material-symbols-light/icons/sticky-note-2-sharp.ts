import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStickyNote2SharpIcon],svg[material-symbols-light-sticky-note-2-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h-5v5zM4 20V4h16v10.289L14.288 20zm3.885-6.539H12v-1H7.885zm0-3.961h8.23v-1h-8.23z"></svg:path>`,
})
export class MaterialSymbolsLightStickyNote2SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
