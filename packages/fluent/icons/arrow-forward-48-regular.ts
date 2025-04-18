import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowForward48RegularIcon],svg[fluent-arrow-forward-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.866 10.134a1.25 1.25 0 0 1 1.768-1.768l11 11a1.25 1.25 0 0 1 0 1.768l-11 11a1.25 1.25 0 0 1-1.768-1.768l8.866-8.866H22.75c-8.975 0-16.25 7.275-16.25 16.25a1.25 1.25 0 1 1-2.5 0C4 27.395 12.395 19 22.75 19h16.982z"></svg:path>`,
})
export class FluentArrowForward48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
