import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCommentEllipsisOIcon],svg[vaadin-comment-ellipsis-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.2q0 .15 0 0q0 .15 0 0M8.3 1C3.9 1 0 3.6 0 6.6c0 2 1.1 3.7 3 4.7s0 .1 0 .1c-.1 1.3-.9 1.7-.9 1.7L.3 14h2c2.5 0 4.3-1.1 5.1-1.9h.8c4.3 0 7.8-2.5 7.8-5.6S12.6 1 8.3 1m-.1 10.1H7.1l-.2.2c-.5.5-1.6 1.4-3.3 1.7c.3-.5.5-1.1.5-2v-.3l-.3-.1C2 9.7 1 8.3 1 6.6C1 4.2 4.5 2 8.3 2C12 2 15 4 15 6.6c0 2.4-3.1 4.5-6.8 4.5"></svg:path><svg:path fill="currentColor" d="M6 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinCommentEllipsisOIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
