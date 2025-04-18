import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularPauseIcon],svg[material-symbols-light-signal-cellular-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v10.73h-6.884V21zm16.5 0v-4.884h1V21zm-3 0v-4.884h1V21z"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
