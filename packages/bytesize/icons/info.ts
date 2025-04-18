import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeInfoIcon],svg[bytesize-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 14v9m0-15v2"></svg:path><svg:circle cx="16" cy="16" r="14"></svg:circle></svg:g>`,
})
export class BytesizeInfoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
