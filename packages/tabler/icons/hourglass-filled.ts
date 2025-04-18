import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHourglassFilledIcon],svg[tabler-hourglass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a2 2 0 0 1 1.995 1.85L19 4v2a7 7 0 0 1-3.393 6a7 7 0 0 1 3.388 5.728L19 18v2a2 2 0 0 1-1.85 1.995L17 22H7a2 2 0 0 1-1.995-1.85L5 20v-2a7 7 0 0 1 3.393-6a7 7 0 0 1-3.388-5.728L5 6V4a2 2 0 0 1 1.85-1.995L7 2z"></svg:path>`,
})
export class TablerHourglassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
