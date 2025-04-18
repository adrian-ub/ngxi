import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCommentAltNotesIcon],svg[uil-comment-alt-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m0-4h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m2-5H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3m1 16.59l-2.29-2.3A1 1 0 0 0 17 16H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilCommentAltNotesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
