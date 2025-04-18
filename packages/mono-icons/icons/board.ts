import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[monoIconsBoardIcon],svg[mono-icons-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm6 0H4v14h4zm2 0v14h4V5zm6 0v14h4V5z"></svg:path>`,
})
export class MonoIconsBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
