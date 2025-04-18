import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPropaneTankIcon],svg[material-symbols-propane-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13v-3q0-1.425.85-2.475T7 6.125V4q0-.825.588-1.412T9 2h6q.825 0 1.413.588T17 4v2.125q1.3.35 2.15 1.4T20 10v3zm4 9q-1.65 0-2.825-1.175T4 18v-3h16v3q0 1.65-1.175 2.825T16 22zM9 6h2q0-.425.288-.712T12 5t.713.288T13 6h2V4H9z"></svg:path>`,
})
export class MaterialSymbolsPropaneTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
