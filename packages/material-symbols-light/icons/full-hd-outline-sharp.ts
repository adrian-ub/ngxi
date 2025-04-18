import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFullHdOutlineSharpIcon],svg[material-symbols-light-full-hd-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.808 14.692h.884v-2h2.116v2h.884V9.308h-.884v2.5h-2.116v-2.5h-.884zm5.269 0h3.442l.443-.442v-4.5l-.443-.442h-3.442zm.885-.884v-3.616h2.115v3.616zm-10.923.884h.884v-2.076h2v-.885h-2v-1.539h2.5v-.884H5.039zM2 19V5h20v14zm1-1h18V6H3zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightFullHdOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
