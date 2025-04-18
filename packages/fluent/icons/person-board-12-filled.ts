import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonBoard12FilledIcon],svg[fluent-person-board-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm4 1.25a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 3c1.5 0 2-.75 2-1.5A.75.75 0 0 0 6.25 5h-2.5a.75.75 0 0 0-.75.75c0 .75.5 1.5 2 1.5M3.268 10A2 2 0 0 0 5 11h2a4 4 0 0 0 4-4V5a2 2 0 0 0-1-1.732V7a3 3 0 0 1-3 3z"></svg:path>`,
})
export class FluentPersonBoard12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
