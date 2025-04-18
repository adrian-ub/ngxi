import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDestructionOutlineSharpIcon],svg[material-symbols-destruction-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22v-8h18v8zm2-2h14v-4H5zm1.525-7.5L1.5 9.65l6-1l-1.625-5.875L10.85 6.3l3-5.3l1 6l5.875-1.625L17.2 10.35L21 12.5h-4.05L14.3 11l1.55-2.2l-2.6.725l-.45-2.65L11.5 9.2L9.3 7.65l.725 2.6l-2.65.45l3 1.8zm5.65 0"></svg:path>`,
})
export class MaterialSymbolsDestructionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
