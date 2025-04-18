import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSignalCellularPauseOutlineIcon],svg[material-symbols-light-signal-cellular-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21L21 3v10.73h-1V5.422L5.421 20h8.695v1zm13.5 0v-4.884h1V21zm3 0v-4.884h1V21zm-6.786-8.292"></svg:path>`,
})
export class MaterialSymbolsLightSignalCellularPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
