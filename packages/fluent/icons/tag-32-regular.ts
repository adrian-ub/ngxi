import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag32RegularIcon],svg[fluent-tag-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.934 3a3.25 3.25 0 0 0-2.298.952l-11.68 11.68a3.25 3.25 0 0 0 0 4.596l7.818 7.818a3.25 3.25 0 0 0 4.596 0l11.68-11.68a3.25 3.25 0 0 0 .952-2.298V6.25A3.25 3.25 0 0 0 25.752 3zm-.884 2.366A1.25 1.25 0 0 1 17.934 5h7.818c.69 0 1.25.56 1.25 1.25v7.818c0 .332-.132.65-.366.884l-11.68 11.68a1.25 1.25 0 0 1-1.768 0L5.37 18.814a1.25 1.25 0 0 1 0-1.768zM23.002 11a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class FluentTag32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
