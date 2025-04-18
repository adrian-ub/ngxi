import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFormatTextdirectionVerticalOutlineIcon],svg[material-symbols-format-textdirection-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18v-5q-1.65 0-2.825-1.175T2 9t1.175-2.825T6 5h8v2h-2v11h-2V7H8v11zm12 2l-4-4l1.4-1.4l1.6 1.575V5h2v11.175l1.6-1.6L22 16zM6 11V7q-.825 0-1.412.588T4 9t.588 1.413T6 11m0-2"></svg:path>`,
})
export class MaterialSymbolsFormatTextdirectionVerticalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
