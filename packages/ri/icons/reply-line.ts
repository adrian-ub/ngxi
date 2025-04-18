import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReplyLineIcon],svg[ri-reply-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20L1 12l10-8v5c5.523 0 10 4.477 10 10q0 .41-.032.81a9 9 0 0 0-7.655-4.805L13 15h-2zm-2-7h4.034l.347.007c1.285.043 2.524.31 3.676.766A7.98 7.98 0 0 0 11 11H9V8.161L4.202 12L9 15.839z"></svg:path>`,
})
export class RiReplyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
