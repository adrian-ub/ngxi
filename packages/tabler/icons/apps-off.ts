import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAppsOffIcon],svg[tabler-apps-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h1a1 1 0 0 1 1 1v1m-.29 3.704A1 1 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.276.111-.525.292-.706M18 14h1a1 1 0 0 1 1 1v1m-.29 3.704A1 1 0 0 1 19 20h-4a1 1 0 0 1-1-1v-4c0-.276.111-.525.292-.706M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10-8h6m-3-3v6M3 3l18 18"></svg:path>`,
})
export class TablerAppsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
