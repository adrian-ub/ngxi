import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotRegionRoundedIcon],svg[material-symbols-screenshot-region-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17h2q.425 0 .713.288T10 18t-.288.713T9 19H6q-.425 0-.712-.288T5 18v-3q0-.425.288-.712T6 14t.713.288T7 15zM7 7v2q0 .425-.288.713T6 10t-.712-.288T5 9V6q0-.425.288-.712T6 5h3q.425 0 .713.288T10 6t-.288.713T9 7zm10 0h-2q-.425 0-.712-.288T14 6t.288-.712T15 5h3q.425 0 .713.288T19 6v3q0 .425-.288.713T18 10t-.712-.288T17 9zm0 12h-2q-.425 0-.712-.288T14 18t.288-.712T15 17h2v-2q0-.425.288-.712T18 14t.713.288T19 15v2h2q.425 0 .713.288T22 18t-.288.713T21 19h-2v2q0 .425-.288.713T18 22t-.712-.288T17 21z"></svg:path>`,
})
export class MaterialSymbolsScreenshotRegionRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
