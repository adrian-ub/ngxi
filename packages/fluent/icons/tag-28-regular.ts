import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTag28RegularIcon],svg[fluent-tag-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-4.215-7a3.25 3.25 0 0 0-2.298.952l-9.25 9.25a3.25 3.25 0 0 0 0 4.596l6.464 6.465a3.25 3.25 0 0 0 4.597 0l9.25-9.25A3.25 3.25 0 0 0 25 12.714V5.75A2.75 2.75 0 0 0 22.25 3zm-1.237 2.013a1.75 1.75 0 0 1 1.237-.513h6.965c.69 0 1.25.56 1.25 1.25v6.964c0 .465-.185.91-.513 1.238l-9.25 9.25a1.75 1.75 0 0 1-2.475 0l-6.464-6.465a1.75 1.75 0 0 1 0-2.474z"></svg:path>`,
})
export class FluentTag28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
