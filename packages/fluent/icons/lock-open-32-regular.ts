import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen32RegularIcon],svg[fluent-lock-open-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6a4 4 0 0 1 8 0v1a1 1 0 1 0 2 0V6a6 6 0 0 0-12 0v3H8.5A4.5 4.5 0 0 0 4 13.5v12A4.5 4.5 0 0 0 8.5 30h15a4.5 4.5 0 0 0 4.5-4.5v-12A4.5 4.5 0 0 0 23.5 9H22zM8.5 11h15a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 6 25.5v-12A2.5 2.5 0 0 1 8.5 11m9.5 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class FluentLockOpen32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
