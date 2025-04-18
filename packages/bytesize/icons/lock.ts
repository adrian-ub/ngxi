import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeLockIcon],svg[bytesize-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 15v15h22V15Zm4 0C9 9 9 5 16 5s7 4 7 10m-7 5v3"></svg:path><svg:circle cx="16" cy="24" r="1"></svg:circle></svg:g>`,
})
export class BytesizeLockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
