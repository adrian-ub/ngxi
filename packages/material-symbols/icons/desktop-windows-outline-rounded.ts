import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDesktopWindowsOutlineRoundedIcon],svg[material-symbols-desktop-windows-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19v-2H4q-.825 0-1.412-.587T2 15V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v10q0 .825-.587 1.413T20 17h-6v2h1q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zm-6-4h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsDesktopWindowsOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
