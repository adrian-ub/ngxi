import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFriendsOffIcon],svg[tabler-friends-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M5 22v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5m6-17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 17v-4h-2l1.254-3.763m1.036-2.942A1 1 0 0 1 16 11h2a1 1 0 0 1 1 1l1.503 4.508M19 19v3M3 3l18 18"></svg:path>`,
})
export class TablerFriendsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
