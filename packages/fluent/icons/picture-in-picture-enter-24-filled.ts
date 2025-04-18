import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPictureInPictureEnter24FilledIcon],svg[fluent-picture-in-picture-enter-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 3A3.25 3.25 0 0 0 2 6.25v9.5A3.25 3.25 0 0 0 5.25 19H11v-4a3 3 0 0 1 3-3h7c.35 0 .687.06 1 .17V6.25A3.25 3.25 0 0 0 18.75 3zm1.03 3.22L9.5 9.44V7.75a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5h1.69L5.22 7.28a.75.75 0 0 1 1.06-1.06M22 13.268A2 2 0 0 0 21 13h-7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-5a2 2 0 0 0-1-1.732"></svg:path>`,
})
export class FluentPictureInPictureEnter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
