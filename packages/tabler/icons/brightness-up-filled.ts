import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrightnessUpFilledIcon],svg[tabler-brightness-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a4 4 0 1 1-3.995 4.2L8 12l.005-.2A4 4 0 0 1 12 8m0-6a1 1 0 0 1 .993.883L13 3v2a1 1 0 0 1-1.993.117L11 5V3a1 1 0 0 1 1-1m5.693 2.893a1 1 0 0 1 1.497 1.32l-.083.094l-1.4 1.4a1 1 0 0 1-1.497-1.32l.083-.094zM21 11a1 1 0 0 1 .117 1.993L21 13h-2a1 1 0 0 1-.117-1.993L19 11zm-4.707 5.293a1 1 0 0 1 1.32-.083l.094.083l1.4 1.4a1 1 0 0 1-1.32 1.497l-.094-.083l-1.4-1.4a1 1 0 0 1 0-1.414M12 18a1 1 0 0 1 .993.883L13 19v2a1 1 0 0 1-1.993.117L11 21v-2a1 1 0 0 1 1-1m-5.707-1.707a1 1 0 0 1 1.497 1.32l-.083.094l-1.4 1.4a1 1 0 0 1-1.497-1.32l.083-.094zM6 11a1 1 0 0 1 .117 1.993L6 13H4a1 1 0 0 1-.117-1.993L4 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l1.4 1.4a1 1 0 0 1-1.32 1.497l-.094-.083l-1.4-1.4a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class TablerBrightnessUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
