import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biReplyFillIcon],svg[bi-reply-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.921 11.9L1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8c-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></svg:path>`,
})
export class BiReplyFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
