import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyDown24FilledIcon],svg[fluent-arrow-reply-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.704 8.706A1 1 0 1 0 8.29 7.292l-4.997 5.004a1 1 0 0 0 0 1.413l4.997 4.998a1 1 0 1 0 1.415-1.414L6.41 14H13a8 8 0 0 0 7.996-7.75L21 6a1 1 0 1 0-2 0a6 6 0 0 1-5.775 5.996L13 12H6.414z"></svg:path>`,
})
export class FluentArrowReplyDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
