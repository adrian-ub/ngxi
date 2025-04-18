import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChairAltSharpIcon],svg[material-symbols-chair-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-9h3v-2H5V3h14v7h-3v2h3v9h-2v-3H7v3zm5-9h4v-2h-4z"></svg:path>`,
})
export class MaterialSymbolsChairAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
