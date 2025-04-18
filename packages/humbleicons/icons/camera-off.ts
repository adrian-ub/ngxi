import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsCameraOffIcon],svg[humbleicons-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="m3 5l16 16m1-3V8a1 1 0 0 0-1-1h-2.382a1 1 0 0 1-.894-.553l-.448-.894A1 1 0 0 0 14.382 5H9.721a1 1 0 0 0-.949.684L8.5 6.5M16 18H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1v0"></svg:path><svg:path d="M11 9.17A3 3 0 0 1 14.83 13"></svg:path></svg:g>`,
})
export class HumbleiconsCameraOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
