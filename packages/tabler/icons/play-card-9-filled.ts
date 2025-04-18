import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayCard9FilledIcon],svg[tabler-play-card-9-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm.01 16H17a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M13 8h-2a2 2 0 0 0-2 2v1l.005.15A2 2 0 0 0 11 13h2v1h-3a1 1 0 0 0 0 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 2v1h-2v-1zM7.01 4H7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2"></svg:path>`,
})
export class TablerPlayCard9FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
