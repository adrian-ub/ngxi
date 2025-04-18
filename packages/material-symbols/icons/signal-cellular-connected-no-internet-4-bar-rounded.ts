import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularConnectedNoInternet4BarRoundedIcon],svg[material-symbols-signal-cellular-connected-no-internet-4-bar-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.7 20.3L20.275 3.725q.5-.5 1.113-.237t.612.937V8h-1q-1.25 0-2.125.875T18 11v11H4.4q-.65 0-.913-.612T3.7 20.3M21 22q-.425 0-.712-.288T20 21t.288-.712T21 20t.713.288T22 21t-.288.713T21 22m-1-5v-6q0-.425.288-.712T21 10t.713.288T22 11v6.025q0 .425-.288.7T21 18t-.712-.288T20 17"></svg:path>`,
})
export class MaterialSymbolsSignalCellularConnectedNoInternet4BarRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
