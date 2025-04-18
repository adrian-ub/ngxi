import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlag32RegularIcon],svg[fluent-flag-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4.5A1.5 1.5 0 0 1 6.5 3H28a1 1 0 0 1 .8 1.6L23.25 12l5.55 7.4A1 1 0 0 1 28 21H7v7a1 1 0 1 1-2 0zM7 19h19l-4.8-6.4a1 1 0 0 1 0-1.2L26 5H7z"></svg:path>`,
})
export class FluentFlag32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
