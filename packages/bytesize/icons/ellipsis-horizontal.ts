import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeEllipsisHorizontalIcon],svg[bytesize-ellipsis-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="7" cy="16" r="2"></svg:circle><svg:circle cx="16" cy="16" r="2"></svg:circle><svg:circle cx="25" cy="16" r="2"></svg:circle></svg:g>`,
})
export class BytesizeEllipsisHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
