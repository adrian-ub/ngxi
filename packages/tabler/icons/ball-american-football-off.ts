import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallAmericanFootballOffIcon],svg[tabler-ball-american-football-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 9l-1 1m-2 2l-3 3m1-3l2 2m-4 7a5 5 0 0 0-5-5"></svg:path><svg:path d="M6.813 6.802A12.96 12.96 0 0 0 3 16a5 5 0 0 0 5 5a12.96 12.96 0 0 0 9.186-3.801m1.789-2.227A12.94 12.94 0 0 0 21 8a5 5 0 0 0-5-5a12.94 12.94 0 0 0-6.967 2.022"></svg:path><svg:path d="M16 3a5 5 0 0 0 5 5M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBallAmericanFootballOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
