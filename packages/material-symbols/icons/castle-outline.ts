import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCastleOutlineIcon],svg[material-symbols-castle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 21V9h2v2h2V3h2v2h2V3h2v2h2V3h2v2h2V3h2v8h2V9h2v12h-9v-3q0-.825-.587-1.412T12 16t-1.412.588T10 18v3zm2-2h5v-1q0-1.65 1.175-2.825T12 14t2.825 1.175T16 18v1h5v-6h-4V7H7v6H3zm6-7h2V9H9zm4 0h2V9h-2zm-1 1"></svg:path>`,
})
export class MaterialSymbolsCastleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
