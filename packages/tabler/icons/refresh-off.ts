import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRefreshOffIcon],svg[tabler-refresh-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 11A8.1 8.1 0 0 0 8.729 4.695m-2.41 1.624A8.1 8.1 0 0 0 4.5 9M4 5v4h4m-4 4a8.1 8.1 0 0 0 13.671 4.691M20 16v-1h-1M3 3l18 18"></svg:path>`,
})
export class TablerRefreshOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
