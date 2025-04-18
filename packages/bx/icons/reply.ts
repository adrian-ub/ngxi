import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxReplyIcon],svg[bx-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11h6v7h2v-8a1 1 0 0 0-1-1h-7V6l-5 4l5 4z"></svg:path>`,
})
export class BxReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
