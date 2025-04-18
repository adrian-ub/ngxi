import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamTrophyFIcon],svg[jam-trophy-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.294 15Q1.394 12.263 1 9Q.457 4.5 1 0h8q.466 4.993 0 9a32.7 32.7 0 0 1-1.287 6H8a2 2 0 0 1 2 2v3H0v-3a2 2 0 0 1 2-2zM3 16v2h4v-2z"></svg:path>`,
})
export class JamTrophyFIcon {
  readonly viewBox = input("-7 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
