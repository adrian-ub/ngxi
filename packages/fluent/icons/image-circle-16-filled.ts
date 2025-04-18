import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageCircle16FilledIcon],svg[fluent-image-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8a5.98 5.98 0 0 1-1.427 3.884L9.053 8.42a1.5 1.5 0 0 0-2.105 0l-3.521 3.465A6 6 0 1 1 14 8M8.35 9.131l3.515 3.459A5.98 5.98 0 0 1 8 14c-1.472 0-2.82-.53-3.865-1.41L7.65 9.13a.5.5 0 0 1 .702 0M10 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentImageCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
