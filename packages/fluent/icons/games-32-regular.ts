import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGames32RegularIcon],svg[fluent-games-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-12-3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1m-8 4C2 10.477 6.477 6 12 6h8c5.523 0 10 4.477 10 10s-4.477 10-10 10h-8C6.477 26 2 21.523 2 16m10-8a8 8 0 1 0 0 16h8a8 8 0 1 0 0-16z"></svg:path>`,
})
export class FluentGames32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
