import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBusinessCenterOutlineRoundedIcon],svg[material-symbols-business-center-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V8q0-.825.588-1.412T4 6h4V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2h4q.825 0 1.413.588T22 8v11q0 .825-.587 1.413T20 21zm6-15h4V4h-4zm10 9h-5v1q0 .425-.288.713T14 17h-4q-.425 0-.712-.288T9 16v-1H4v4h16zm-9 0h2v-2h-2zm-7-2h5v-1q0-.425.288-.712T10 11h4q.425 0 .713.288T15 12v1h5V8H4zm8 1"></svg:path>`,
})
export class MaterialSymbolsBusinessCenterOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
