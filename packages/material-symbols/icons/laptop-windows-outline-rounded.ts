import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLaptopWindowsOutlineRoundedIcon],svg[material-symbols-laptop-windows-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 20q-.425 0-.712-.288T0 19t.288-.712T1 18h3v-1q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17v1h3q.425 0 .713.288T24 19t-.288.713T23 20zm3-5h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsLaptopWindowsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
