import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed32RegularIcon],svg[fluent-lock-closed-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0M10 9H8.5A4.5 4.5 0 0 0 4 13.5v12A4.5 4.5 0 0 0 8.5 30h15a4.5 4.5 0 0 0 4.5-4.5v-12A4.5 4.5 0 0 0 23.5 9H22V8a6 6 0 0 0-12 0zm2-1a4 4 0 0 1 8 0v1h-8zm11.5 3a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 6 25.5v-12A2.5 2.5 0 0 1 8.5 11z"></svg:path>`,
})
export class FluentLockClosed32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
