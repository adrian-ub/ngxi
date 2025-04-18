import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFriendsIcon],svg[tabler-friends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 17v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5m6-17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 17v-4h-2l2-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1l2 6h-2v4"></svg:path>`,
})
export class TablerFriendsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
