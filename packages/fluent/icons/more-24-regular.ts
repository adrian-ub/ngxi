import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore24RegularIcon],svg[fluent-more-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8.667 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z" fill="currentColor"></svg:path><svg:path d="M14.668 12a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0z" fill="currentColor"></svg:path><svg:path d="M18.918 13.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMore24RegularIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
