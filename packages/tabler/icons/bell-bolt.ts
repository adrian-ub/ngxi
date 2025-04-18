import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellBoltIcon],svg[tabler-bell-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v1m-9 5v1a3 3 0 0 0 4.368 2.67M19 16l-2 3h4l-2 3"></svg:path>`,
})
export class TablerBellBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
