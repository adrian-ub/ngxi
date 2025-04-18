import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeReplyIcon],svg[bytesize-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 6l-7 8l7 8m-7-8h15q12 0 12 12"></svg:path>`,
})
export class BytesizeReplyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
