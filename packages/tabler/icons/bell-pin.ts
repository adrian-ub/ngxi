import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellPinIcon],svg[tabler-bell-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6a2 2 0 1 1 4 0a7 7 0 0 1 4 6m-9 6v1a3 3 0 0 0 3.64 2.931m8.481-.81a3 3 0 1 0-4.242 0Q17.506 20.749 19 22q1.577-1.335 2.121-1.879M19 18v.01"></svg:path>`,
})
export class TablerBellPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
