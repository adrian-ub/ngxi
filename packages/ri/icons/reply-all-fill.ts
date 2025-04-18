import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReplyAllFillIcon],svg[ri-reply-all-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4.5V9c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L16 15h-2v4.5L6 12zm-6 0v2.737L2.92 12l5.079 4.761L8 19.5L0 12z"></svg:path>`,
})
export class RiReplyAllFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
