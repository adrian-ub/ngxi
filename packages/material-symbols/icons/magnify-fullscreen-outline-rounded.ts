import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMagnifyFullscreenOutlineRoundedIcon],svg[material-symbols-magnify-fullscreen-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6zm10-6v1q0 .425.288.713T15 14t.713-.288T16 13v-1h1q.425 0 .713-.288T18 11t-.288-.712T17 10h-1V9q0-.425-.288-.712T15 8t-.712.288T14 9v1h-1q-.425 0-.712.288T12 11t.288.713T13 12z"></svg:path>`,
})
export class MaterialSymbolsMagnifyFullscreenOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
