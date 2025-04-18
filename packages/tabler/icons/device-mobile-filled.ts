import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDeviceMobileFilledIcon],svg[tabler-device-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a3 3 0 0 1 2.995 2.824L19 5v14a3 3 0 0 1-2.824 2.995L16 22H8a3 3 0 0 1-2.995-2.824L5 19V5a3 3 0 0 1 2.824-2.995L8 2zm-4 14a1 1 0 0 0-.993.883L11 17l.007.127a1 1 0 0 0 1.986 0L13 17.01l-.007-.127A1 1 0 0 0 12 16m1-12h-2l-.117.007a1 1 0 0 0 0 1.986L11 6h2l.117-.007a1 1 0 0 0 0-1.986z"></svg:path>`,
})
export class TablerDeviceMobileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
