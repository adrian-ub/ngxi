import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRewind20RegularIcon],svg[fluent-rewind-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5.487a1 1 0 0 0-1.591-.806l-5.88 4.311a1.25 1.25 0 0 0 0 2.016l5.88 4.312A1 1 0 0 0 10 14.514v-3.16l5.409 3.966A1 1 0 0 0 17 14.514V5.487a1 1 0 0 0-1.591-.806L10 8.647zM3.12 9.8L9 5.487v9.027l-5.88-4.312a.25.25 0 0 1 0-.403m7 0L16 5.487v9.027l-5.88-4.312a.25.25 0 0 1 0-.403"></svg:path>`,
})
export class FluentRewind20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
