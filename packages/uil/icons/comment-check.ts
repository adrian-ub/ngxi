import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCommentCheckIcon],svg[uil-comment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.29 7.13a1 1 0 0 0 0 1.42l1.92 1.92a1 1 0 0 0 1.42 0l4.08-4.08A1 1 0 1 0 19.29 5l-3.37 3.35l-1.21-1.22a1 1 0 0 0-1.42 0m6.62 3.51a1 1 0 0 0-.91 1.08a3 3 0 0 1 0 .28a7 7 0 0 1-7 7H6.41l.64-.63a1 1 0 0 0 0-1.41a7 7 0 0 1 3.48-11.81a7.1 7.1 0 0 1 2.8 0a1 1 0 1 0 .4-2a9.2 9.2 0 0 0-3.61 0A9.05 9.05 0 0 0 3 12a9 9 0 0 0 2 5.62l-1.71 1.67a1 1 0 0 0-.21 1.09A1 1 0 0 0 4 21h8a9 9 0 0 0 9-9v-.44a1 1 0 0 0-1.09-.92"></svg:path>`,
})
export class UilCommentCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
