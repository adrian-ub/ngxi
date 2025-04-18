import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLeaderboardIcon],svg[tdesign-leaderboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v8h6v10H2V9h6zm2 16h4V5h-4zm6 0h4v-6h-4zm-8 0v-8H4v8z"></svg:path>`,
})
export class TdesignLeaderboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
