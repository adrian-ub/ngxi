import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVillaOutlineIcon],svg[material-symbols-light-villa-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V8.692l11.23-4.326V13h1.693q0-.635.452-1.086q.451-.453 1.085-.453t1.087.452T20 13v7zm1-1h5v-6h4.23V5.804L5 9.375zm6 0h3.23v-2.308h1.54V19H19v-5h-8zm4-.654"></svg:path>`,
})
export class MaterialSymbolsLightVillaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
