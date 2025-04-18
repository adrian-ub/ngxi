import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAmbulanceIcon],svg[streamline-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.159 10.773V4a1 1 0 0 0-1-1H1.702a1 1 0 0 0-1 1v6.626a1 1 0 0 0 1 1h.787m10.809-3.894H9.16"></svg:path><svg:path d="M11.638 11.626h.682a1 1 0 0 0 1-1.008l-.024-3.18l-1.392-2.85a1 1 0 0 0-.899-.562h-1.86m-6.643 7.63a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0"></svg:path><svg:path d="M8.839 11.656a1.396 1.396 0 1 0 2.792 0a1.396 1.396 0 1 0-2.792 0M3.431 7H6.43m-1.5-1.499v2.998m3.909 3.127H5.294"></svg:path></svg:g>`,
})
export class StreamlineAmbulanceIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
