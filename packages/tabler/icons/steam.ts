import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSteamIcon],svg[tabler-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m16 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-8 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5.5 5.5l3 3m7 7l3 3m0-13l-3 3m-7 7l-3 3"></svg:path>`,
})
export class TablerSteamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
