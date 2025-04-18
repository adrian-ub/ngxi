import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGeneralDeviceOutlineIcon],svg[material-symbols-general-device-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v13zm2-2h4V5h-4zm-2 5v-2h8v2zm2-5h4z"></svg:path>`,
})
export class MaterialSymbolsGeneralDeviceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
