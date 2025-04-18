import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxReplyAllIcon],svg[bx-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18v-8a1 1 0 0 0-1-1h-6V6l-5 4l5 4v-3h5v7z"></svg:path><svg:path fill="currentColor" d="M9 12.4L6 10l3-2.4V6l-5 4l5 4z"></svg:path>`,
})
export class BxReplyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
