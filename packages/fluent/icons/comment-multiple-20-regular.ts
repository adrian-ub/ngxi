import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentMultiple20RegularIcon],svg[fluent-comment-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.39 4.114A3.5 3.5 0 0 1 17 7.5v6c.607-.456 1-1.182 1-2v-4A4.5 4.5 0 0 0 13.5 3h-7c-.818 0-1.544.393-2 1h9a3.5 3.5 0 0 1 .89.114M4.5 5A2.5 2.5 0 0 0 2 7.5v6A2.5 2.5 0 0 0 4.5 16H5v.995a1 1 0 0 0 1.59.808L9.057 16H13.5a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 13.5 5zM3 7.5A1.5 1.5 0 0 1 4.5 6h9A1.5 1.5 0 0 1 15 7.5v6a1.5 1.5 0 0 1-1.5 1.5H8.73L6 16.995V15H4.5A1.5 1.5 0 0 1 3 13.5z"></svg:path>`,
})
export class FluentCommentMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
