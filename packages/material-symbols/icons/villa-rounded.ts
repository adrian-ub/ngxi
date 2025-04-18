import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVillaRoundedIcon],svg[material-symbols-villa-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21v-7q0-.825.588-1.412T11 12h6q0-.825.588-1.412T19 10t1.413.588T21 12v9h-5v-4q0-.425-.288-.712T15 16t-.712.288T14 17v4zm-6 0V9.375q0-.625.35-1.137t.925-.738L14.65 3.525q.5-.2.925.1T16 4.45V10h-6q-1.25 0-2.125.875T7 13v8z"></svg:path>`,
})
export class MaterialSymbolsVillaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
