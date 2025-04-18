import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVoteYeaIcon],svg[la-vote-yea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v16h16V5zm2 2h12v12H10zm9.3 2.9L15 14.2l-2.3-2.3l-1.4 1.5l3 3l.7.7l.7-.7l5-5zM2 19v8h2v-6h2v-2zm24 0v2h2v6h2v-8zM6 23v2h20v-2z"></svg:path>`,
})
export class LaVoteYeaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
