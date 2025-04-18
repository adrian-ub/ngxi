import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyAll48FilledIcon],svg[fluent-arrow-reply-all-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.56 8.44a1.5 1.5 0 0 1 0 2.12L7.622 20.5l9.94 9.94a1.5 1.5 0 0 1-2.122 2.12l-11-11a1.5 1.5 0 0 1 0-2.12l11-11a1.5 1.5 0 0 1 2.122 0m9 0a1.5 1.5 0 0 1 0 2.12L18.122 19H24.5C35.27 19 44 27.73 44 38.5a1.5 1.5 0 0 1-3 0C41 29.387 33.613 22 24.5 22h-6.379l8.44 8.44a1.5 1.5 0 0 1-2.122 2.12l-11-11a1.5 1.5 0 0 1 0-2.12l11-11a1.5 1.5 0 0 1 2.122 0"></svg:path>`,
})
export class FluentArrowReplyAll48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
