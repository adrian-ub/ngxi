import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMessageEditIcon],svg[bx-message-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m0 14h-7.277L9 18.233V16H4V4h16z"></svg:path><svg:path fill="currentColor" d="m13.803 9.189l-1.399-1.398l-3.869 3.864v1.399h1.399zm.327-3.123l1.398 1.399l-1.066 1.066l-1.399-1.398z"></svg:path>`,
})
export class BxMessageEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
