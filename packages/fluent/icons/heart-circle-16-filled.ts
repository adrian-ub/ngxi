import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartCircle16FilledIcon],svg[fluent-heart-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-1l-.422-.492a1.465 1.465 0 1 0-2.156 1.98l2.4 2.44c.097.1.258.1.356 0l2.4-2.44a1.465 1.465 0 1 0-2.157-1.98z"></svg:path>`,
})
export class FluentHeartCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
