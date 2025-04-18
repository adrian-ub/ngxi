import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCardJFilledIcon],svg[tabler-play-card-j-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M14 8h-4a1 1 0 0 0-1 1l.007.117A1 1 0 0 0 10 10h3v3a1 1 0 0 1-2 0a1 1 0 0 0-2 0a3 3 0 0 0 6 0V9a1 1 0 0 0-1-1M7.01 4H7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2"></svg:path>`,
})
export class TablerPlayCardJFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
