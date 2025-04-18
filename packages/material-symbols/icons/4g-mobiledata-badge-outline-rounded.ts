import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols4gMobiledataBadgeOutlineRoundedIcon],svg[material-symbols-4g-mobiledata-badge-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21q-.825 0-1.412-.587T1 19V5q0-.825.588-1.412T3 3h18q.825 0 1.413.588T23 5v14q0 .825-.587 1.413T21 21zm0-2h18V5H3zm0 0V5zm12-2h3q.825 0 1.413-.587T20 15v-3q0-.425-.288-.712T19 11h-1.5q-.425 0-.712.288T16.5 12t.288.713t.712.287h.5v2h-3V9h5q0-.825-.587-1.412T18 7h-3q-.825 0-1.412.588T13 9v6q0 .825.588 1.413T15 17m-7-3v2q0 .425.288.713T9 17t.713-.288T10 16v-2h1q.425 0 .713-.288T12 13t-.288-.712T11 12h-1V8q0-.425-.288-.712T9 7t-.712.288T8 8v4H6V8q0-.425-.288-.712T5 7t-.712.288T4 8v5q0 .425.288.713T5 14z"></svg:path>`,
})
export class MaterialSymbols4gMobiledataBadgeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
