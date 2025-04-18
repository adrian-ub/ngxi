import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayerEjectFilledIcon],svg[tabler-player-eject-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.247 3.341l-7 8C3.682 11.988 4.141 13 5 13h14c.86 0 1.318-1.012.753-1.659l-7-8a1 1 0 0 0-1.506 0M18 15H6a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class TablerPlayerEjectFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
