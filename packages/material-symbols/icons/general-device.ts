import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGeneralDeviceIcon],svg[material-symbols-general-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v13zm0 3v-2h8v2z"></svg:path>`,
})
export class MaterialSymbolsGeneralDeviceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
