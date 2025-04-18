import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCommentArrowLeftIcon],svg[mdi-comment-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.2 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-4 9h-4.5l1.8 1.8L12 14l-4-4l4-4l1.2 1.2L11.5 9H16z"></svg:path>`,
})
export class MdiCommentArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
