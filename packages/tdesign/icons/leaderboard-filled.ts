import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLeaderboardFilledIcon],svg[tdesign-leaderboard-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.368 3h5.264v18H9.368zM2 9h5.263v12H2zm20 2h-5.263v10H22z"></svg:path>`,
})
export class TdesignLeaderboardFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
