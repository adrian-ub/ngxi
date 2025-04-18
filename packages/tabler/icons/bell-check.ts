import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellCheckIcon],svg[tabler-bell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3q.023.193.065.382M9 17v1a3 3 0 0 0 2.502 2.959M15 19l2 2l4-4"></svg:path>`,
})
export class TablerBellCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
