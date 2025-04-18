import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLinkSquare12FilledIcon],svg[fluent-link-square-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.998 3.248a2.25 2.25 0 0 1 2.25-2.25h2.504A2.25 2.25 0 0 1 8 3.161v2.677a2.25 2.25 0 0 1-1.5 2.036l.002-4.626a.75.75 0 0 0-.75-.75H3.248a.75.75 0 0 0-.75.75v2.504c0 .327.21.605.502.708v1.528A2.25 2.25 0 0 1 .998 5.752zM4 8.75A2.25 2.25 0 0 0 6.25 11h2.5A2.25 2.25 0 0 0 11 8.75v-2.5a2.25 2.25 0 0 0-2-2.236v1.529c.291.103.5.38.5.707v2.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75V4.128A2.25 2.25 0 0 0 4 6.25z"></svg:path>`,
})
export class FluentLinkSquare12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
