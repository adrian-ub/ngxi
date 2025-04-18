import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBurstModeOutlineRoundedIcon],svg[material-symbols-burst-mode-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18V6q0-.425.288-.712T2 5t.713.288T3 6v12q0 .425-.288.713T2 19t-.712-.288T1 18m4 0V6q0-.425.288-.712T6 5t.713.288T7 6v12q0 .425-.288.713T6 19t-.712-.288T5 18m6 1q-.825 0-1.412-.587T9 17V7q0-.825.588-1.412T11 5h10q.825 0 1.413.588T23 7v10q0 .825-.587 1.413T21 19zm0-2h10V7H11zm4.5-3l-1-1.325q-.15-.2-.4-.187t-.4.212l-1.125 1.5q-.2.25-.038.525T13 15h6q.3 0 .45-.275t-.05-.525l-1.6-2.175q-.15-.2-.4-.2t-.4.2zM11 17V7z"></svg:path>`,
})
export class MaterialSymbolsBurstModeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
