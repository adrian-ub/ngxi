import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPregnancyRoundedIcon],svg[material-symbols-pregnancy-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21v-4H9q-.425 0-.712-.288T8 16v-6q0-1.25.875-2.125T11 7t2.125.875T14 10q.9.375 1.45 1.2T16 13v3q0 .425-.288.713T15 17h-2v4q0 .425-.288.713T12 22h-1q-.425 0-.712-.288T10 21m1-15q-.825 0-1.412-.587T9 4t.588-1.412T11 2t1.413.588T13 4t-.587 1.413T11 6"></svg:path>`,
})
export class MaterialSymbolsPregnancyRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
