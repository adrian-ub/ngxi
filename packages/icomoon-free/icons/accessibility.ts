import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeAccessibilityIcon],svg[icomoon-free-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 1.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 6.5 1.5"></svg:path><svg:path fill="currentColor" d="m10 5l5.15-2.221l-.371-.929L8.5 4h-1L1.221 1.85l-.371.929L6 5v4l-2.051 6.634l.935.355L7.786 9.5h.429l2.902 6.489l.935-.355L10.001 9z"></svg:path>`,
})
export class IcomoonFreeAccessibilityIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
