import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCommentAltImageIcon],svg[uil-comment-alt-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h11.59l3.7 3.71A1 1 0 0 0 21 22a.84.84 0 0 0 .38-.08A1 1 0 0 0 22 21V5a3 3 0 0 0-3-3M5.77 16H5a1 1 0 0 1-1-1v-.42l3.3-3.29a1 1 0 0 1 1.41 0l.87.87ZM20 18.59l-2.29-2.3A1 1 0 0 0 17 16H8.59l6.71-6.71a1 1 0 0 1 1.4 0l3.3 3.29Zm0-8.83l-1.88-1.87a3 3 0 0 0-4.24 0L11 10.76l-.88-.87a3.06 3.06 0 0 0-4.24 0L4 11.76V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class UilCommentAltImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
