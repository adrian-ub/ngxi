import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeClockIcon],svg[icomoon-free-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.293 11.707L7 8.414V4h2v3.586l2.707 2.707zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12"></svg:path>`,
})
export class IcomoonFreeClockIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
