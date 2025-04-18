import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore28RegularIcon],svg[fluent-more-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8.584 14a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0z" fill="currentColor"></svg:path><svg:path d="M16.584 14a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0z" fill="currentColor"></svg:path><svg:path d="M22.334 16.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMore28RegularIcon {
  readonly viewBox = input("0 0 29 28")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
