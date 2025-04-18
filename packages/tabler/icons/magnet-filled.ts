import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMagnetFilledIcon],svg[tabler-magnet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9v4a9 9 0 0 1-18 0V9h7v4a2 2 0 1 0 4 0V9zm-3-7a3 3 0 0 1 3 3v2h-7V5a3 3 0 0 1 3-3zM7 2a3 3 0 0 1 3 3v2H3V5a3 3 0 0 1 3-3z"></svg:path>`,
})
export class TablerMagnetFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
