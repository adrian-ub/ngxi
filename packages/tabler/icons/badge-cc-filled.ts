import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBadgeCcFilledIcon],svg[tabler-badge-cc-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM8.5 8A2.5 2.5 0 0 0 6 10.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0-2 0a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0a1 1 0 0 0 2 0A2.5 2.5 0 0 0 8.5 8m7 0a2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0-2 0a.5.5 0 1 1-1 0v-3a.5.5 0 1 1 1 0a1 1 0 0 0 2 0A2.5 2.5 0 0 0 15.5 8"></svg:path>`,
})
export class TablerBadgeCcFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
