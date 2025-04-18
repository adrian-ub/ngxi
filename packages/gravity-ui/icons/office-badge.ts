import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiOfficeBadgeIcon],svg[gravity-ui-office-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.75 1.75a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM5.25 4a.75.75 0 0 1 0 1.5H4A1.5 1.5 0 0 0 2.5 7v4A1.5 1.5 0 0 0 4 12.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 12 5.5h-1.25a.75.75 0 0 1 0-1.5H12a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm6 4.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0 0 1.5zM9 10.25a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h3.5a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiOfficeBadgeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
