import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvNextOutlineRoundedIcon],svg[material-symbols-tv-next-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18l-2.25-2.25q-.325-.325-.325-.75t.325-.75t.75-.325t.75.325l3.05 3.05q.3.3.3.7t-.3.7l-3.05 3.05q-.325.325-.75.325t-.75-.325t-.325-.75t.325-.75zM9 21q-.425 0-.712-.288T8 20v-1H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v6q0 .425-.288.713T21 12t-.712-.288T20 11V5H4v12h12q.425 0 .713.288T17 18t-.288.713T16 19h-1v1q0 .425-.288.713T14 21zm-5-4V5z"></svg:path>`,
})
export class MaterialSymbolsTvNextOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
