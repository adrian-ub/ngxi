import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeartCircle16RegularIcon],svg[fluent-heart-circle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 7l-.421-.492a1.465 1.465 0 1 0-2.157 1.98l2.4 2.44c.098.1.259.1.357 0l2.4-2.44a1.465 1.465 0 1 0-2.157-1.98zM2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-5a5 5 0 1 0 0 10A5 5 0 0 0 8 3"></svg:path>`,
})
export class FluentHeartCircle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
