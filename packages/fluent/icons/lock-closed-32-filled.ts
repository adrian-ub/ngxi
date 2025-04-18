import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed32FilledIcon],svg[fluent-lock-closed-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8a6 6 0 0 1 12 0v1h1.5a4.5 4.5 0 0 1 4.5 4.5v12a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 25.5v-12A4.5 4.5 0 0 1 8.5 9H10zm6-4a4 4 0 0 0-4 4v1h8V8a4 4 0 0 0-4-4m0 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FluentLockClosed32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
