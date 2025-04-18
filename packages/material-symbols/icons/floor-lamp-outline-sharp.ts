import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFloorLampOutlineSharpIcon],svg[material-symbols-floor-lamp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 19v-8H4.65l2.775-9h9.15l2.775 9H13v8zM7.35 9h9.3L15.1 4H8.9zM8 22v-2h8v2zm4-15.5"></svg:path>`,
})
export class MaterialSymbolsFloorLampOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
