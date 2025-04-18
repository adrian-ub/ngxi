import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLeaderboardOutlineRoundedIcon],svg[material-symbols-leaderboard-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h4v-8H4zm6 0h4V5h-4zm6 0h4v-6h-4zM2 19v-8q0-.825.588-1.412T4 9h4V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v6h4q.825 0 1.413.588T22 13v6q0 .825-.587 1.413T20 21H4q-.825 0-1.412-.587T2 19"></svg:path>`,
})
export class MaterialSymbolsLeaderboardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
