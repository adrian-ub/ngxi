import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenStart48RegularIcon],svg[fluent-share-screen-start-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 14.75c.331 0 .65.132.884.366l6 6a1.25 1.25 0 0 1-1.768 1.768l-3.866-3.866V31.75a1.25 1.25 0 1 1-2.5 0V19.018l-3.866 3.866a1.25 1.25 0 0 1-1.768-1.768l6-6A1.25 1.25 0 0 1 24 14.75M8.25 8A4.25 4.25 0 0 0 4 12.25v23.5A4.25 4.25 0 0 0 8.25 40h31.5A4.25 4.25 0 0 0 44 35.75v-23.5A4.25 4.25 0 0 0 39.75 8zM6.5 12.25c0-.966.784-1.75 1.75-1.75h31.5c.967 0 1.75.784 1.75 1.75v23.5a1.75 1.75 0 0 1-1.75 1.75H8.25a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentShareScreenStart48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
