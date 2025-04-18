import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularAlt2BarRoundedIcon],svg[material-symbols-signal-cellular-alt-2-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 20q-.625 0-1.062-.437T5 18.5v-3q0-.625.438-1.062T6.5 14t1.063.438T8 15.5v3q0 .625-.437 1.063T6.5 20m6 0q-.625 0-1.062-.437T11 18.5v-8q0-.625.438-1.062T12.5 9t1.063.438T14 10.5v8q0 .625-.437 1.063T12.5 20"></svg:path>`,
})
export class MaterialSymbolsSignalCellularAlt2BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
