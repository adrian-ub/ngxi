import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGames32FilledIcon],svg[fluent-games-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C6.477 6 2 10.477 2 16s4.477 10 10 10h8c5.523 0 10-4.477 10-10S25.523 6 20 6zm10 13a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-4a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-12-3a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H7a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentGames32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
