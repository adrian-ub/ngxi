import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHardwareOutlineIcon],svg[material-symbols-hardware-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21q-.425 0-.712-.288T9 20V8H4q0-2.075 1.463-3.537T9 3h6v3l3-3h2v8h-2l-3-3v12q0 .425-.288.713T14 21zm1-2h2v-6h-2zm0-8h2V5H9q-.65 0-1.225.263t-1 .737H11zm1 1"></svg:path>`,
})
export class MaterialSymbolsHardwareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
