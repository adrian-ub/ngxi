import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileScreenShareRoundedIcon],svg[material-symbols-mobile-screen-share-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15q-.425 0-.712-.288T9 14v-.5q0-1.25.875-2.125T12 10.5h1V9.1q0-.175.15-.238t.275.063l2.225 2.225q.15.15.15.35t-.15.35l-2.225 2.225q-.125.125-.275.062T13 13.9v-1.4h-1q-.425 0-.712.287T11 13.5v.5q0 .425-.288.713T10 15m-3 8q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-5h10V6H7z"></svg:path>`,
})
export class MaterialSymbolsMobileScreenShareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
