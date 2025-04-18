import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTrophyOutlineIcon],svg[teenyicons-trophy-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M4 14.5h7m-3.5 0v-5m0 0a4 4 0 0 0 4-4v-4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v4a4 4 0 0 0 4 4Zm-4-7h-1a2 2 0 1 0 0 4h1m8-4h1a2 2 0 1 1 0 4h-1"></svg:path>`,
})
export class TeenyiconsTrophyOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
