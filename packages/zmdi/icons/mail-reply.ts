import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMailReplyIcon],svg[zmdi-mail-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 128q54 8 96.5 30.5T315 214t43.5 69.5T384 363q-78-109-235-109v87L0 192L149 43z"></svg:path>`,
})
export class ZmdiMailReplyIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
