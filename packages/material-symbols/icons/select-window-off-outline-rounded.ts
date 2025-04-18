import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSelectWindowOffOutlineRoundedIcon],svg[material-symbols-select-window-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.575L10.175 13H4v7h12v-4.025l2 2V20q0 .825-.587 1.413T16 22H4q-.825 0-1.412-.587T2 20v-9q0-.825.588-1.412T4 9h2v-.175L1.375 4.2q-.3-.3-.3-.712t.3-.713q.3-.3.713-.3t.712.3l18.4 18.4q.3.3.3.7t-.3.7q-.3.3-.712.3t-.713-.3M18 15.125l-2-2L11.875 9H16q.825 0 1.413.588T18 11v2h2V6H8.875L6.15 3.275q.2-.575.713-.925T8 2h12q.825 0 1.413.588T22 4v9q0 .825-.587 1.413T20 15h-2z"></svg:path>`,
})
export class MaterialSymbolsSelectWindowOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
