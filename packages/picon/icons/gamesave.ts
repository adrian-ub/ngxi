import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGamesaveIcon],svg[picon-gamesave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 2l1.5-1L6 2M1 0v6q0 2 2 2h3q2 0 2-2V0"></svg:path>`,
})
export class PiconGamesaveIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
