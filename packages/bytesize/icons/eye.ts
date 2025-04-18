import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeEyeIcon],svg[bytesize-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="17" cy="15" r="1"></svg:circle><svg:circle cx="16" cy="16" r="6"></svg:circle><svg:path d="M2 16S7 6 16 6s14 10 14 10s-5 10-14 10S2 16 2 16"></svg:path></svg:g>`,
})
export class BytesizeEyeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
