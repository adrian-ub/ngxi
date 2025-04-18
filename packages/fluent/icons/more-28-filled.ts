import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore28FilledIcon],svg[fluent-more-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8.751 14a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0z" fill="currentColor"></svg:path><svg:path d="M16.751 14a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0z" fill="currentColor"></svg:path><svg:path d="M22.001 16.75a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMore28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
