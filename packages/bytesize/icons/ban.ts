import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeBanIcon],svg[bytesize-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="16" cy="16" r="14"></svg:circle><svg:path d="m6 6l20 20"></svg:path></svg:g>`,
})
export class BytesizeBanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
