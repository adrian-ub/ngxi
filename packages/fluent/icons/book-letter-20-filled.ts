import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookLetter20FilledIcon],svg[fluent-book-letter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2zm4 3c.2 0 .38.12.46.303l3 7a.5.5 0 0 1-.92.394L11.813 11H8.187l-.727 1.697a.5.5 0 0 1-.92-.394l3-7A.5.5 0 0 1 10 5m-1.385 5h2.77L10 6.77z"></svg:path>`,
})
export class FluentBookLetter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
