import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiMailReplyAllIcon],svg[zmdi-mail-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149 107l-85 85l85 85v64L0 192L149 43zm128 21q54 8 96.5 30.5T443 214t43.5 69.5T512 363q-78-109-235-109v87L128 192L277 43z"></svg:path>`,
})
export class ZmdiMailReplyAllIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
