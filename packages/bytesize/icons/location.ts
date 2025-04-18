import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeLocationIcon],svg[bytesize-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="16" cy="11" r="4"></svg:circle><svg:path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13"></svg:path></svg:g>`,
})
export class BytesizeLocationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
