import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBallAmericanFootballIcon],svg[tabler-ball-american-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 9l-6 6m1-3l2 2m0-4l2 2m-6 9a5 5 0 0 0-5-5"></svg:path><svg:path d="M16 3C8.82 3 3 8.82 3 16a5 5 0 0 0 5 5c7.18 0 13-5.82 13-13a5 5 0 0 0-5-5"></svg:path><svg:path d="M16 3a5 5 0 0 0 5 5"></svg:path></svg:g>`,
})
export class TablerBallAmericanFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
