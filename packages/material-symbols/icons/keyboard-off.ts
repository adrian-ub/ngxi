import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsKeyboardOffIcon],svg[material-symbols-keyboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.85 22.525L1.475 4.15L2.9 2.725L21.275 21.1zM8 16h8.175l-2-2H8zm-3-3h2v-2H5zm3 0h2v-2H8zm9 0h2v-2h-2zM5 10h2V8H5zm9 0h2V8h-2zm3 0h2V8h-2zM4 19q-.825 0-1.412-.587T2 17V7q0-.825.588-1.412T4 5h1.175l14 14zm17.4-.575l-5.4-5.45V11h-2l-1-1.025V8h-1.975l-3-3H20q.825 0 1.413.588T22 7v10.025q0 .425-.162.775t-.438.625"></svg:path>`,
})
export class MaterialSymbolsKeyboardOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
