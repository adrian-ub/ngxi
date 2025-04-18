import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen32FilledIcon],svg[fluent-lock-open-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6a4 4 0 0 1 8 0v1a1 1 0 1 0 2 0V6a6 6 0 0 0-12 0v3H8.5A4.5 4.5 0 0 0 4 13.5v12A4.5 4.5 0 0 0 8.5 30h15a4.5 4.5 0 0 0 4.5-4.5v-12A4.5 4.5 0 0 0 23.5 9H22zm-6 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class FluentLockOpen32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
