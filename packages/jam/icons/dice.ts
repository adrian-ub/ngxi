import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamDiceIcon],svg[jam-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 2H4a2 2 0 0 0-1.995 1.85L2 4v12a2 2 0 0 0 1.85 1.995L4 18h12a2 2 0 0 0 1.995-1.85L18 16V4a2 2 0 0 0-1.85-1.995zm-1 11a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-5-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4M5 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class JamDiceIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
