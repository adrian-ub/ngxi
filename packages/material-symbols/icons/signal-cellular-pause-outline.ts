import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSignalCellularPauseOutlineIcon],svg[material-symbols-signal-cellular-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22L22 2v11h-2V6.825L6.825 20H13v2zm13 0v-7h2v7zm4 0v-7h2v7zm-5.575-8.6"></svg:path>`,
})
export class MaterialSymbolsSignalCellularPauseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
