import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLeaderboardOutlineRoundedIcon],svg[material-symbols-light-leaderboard-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19h4.673v-8H4zm5.673 0h4.654V5H9.673zm5.654 0H20v-6h-4.673zM3 18.384v-6.768q0-.667.475-1.141T4.615 10h4.058V5.616q0-.667.475-1.141T10.288 4h3.424q.666 0 1.14.475t.475 1.14V12h4.058q.666 0 1.14.475t.475 1.14v4.77q0 .666-.475 1.14t-1.14.475H4.615q-.666 0-1.14-.475T3 18.386"></svg:path>`,
})
export class MaterialSymbolsLightLeaderboardOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
