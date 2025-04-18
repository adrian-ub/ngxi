import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeCameraIcon],svg[bytesize-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 8h7l3-4h8l3 4h7v18H2Z"></svg:path><svg:circle cx="16" cy="16" r="5"></svg:circle></svg:g>`,
})
export class BytesizeCameraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
