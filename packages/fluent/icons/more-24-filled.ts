import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore24FilledIcon],svg[fluent-more-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8.334 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" fill="currentColor"></svg:path><svg:path d="M14.334 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0z" fill="currentColor"></svg:path><svg:path d="M18.334 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMore24FilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
