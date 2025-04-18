import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBellShareIcon],svg[tabler-bell-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2m-9 4v1a3 3 0 0 0 3 3m4 1l5-5m0 4.5V17h-4.5"></svg:path>`,
})
export class TablerBellShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
