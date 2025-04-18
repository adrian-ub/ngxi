import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDiscussionConverstionReplyIcon],svg[streamline-discussion-converstion-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.052 6.906V2.314a.845.845 0 0 1 .845-.845h8.22a.845.845 0 0 1 .845.845v.53M2.052 9.03v.965l-.845 2.535l3.38-.845h6.53a.845.845 0 0 0 .845-.845V4.875"></svg:path><svg:path d="M.65 5.612L2.038 7l1.388-1.388m7.148.636l1.388-1.388l1.388 1.388"></svg:path></svg:g>`,
})
export class StreamlineDiscussionConverstionReplyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
