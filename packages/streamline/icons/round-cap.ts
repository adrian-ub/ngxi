import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRoundCapIcon],svg[streamline-round-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.988 7H13.5m0-4.794H5.294a4.794 4.794 0 0 0 0 9.588H13.5"></svg:path><svg:path d="M4.392 6.999a1.798 1.798 0 1 0 3.596 0a1.798 1.798 0 1 0-3.596 0"></svg:path></svg:g>`,
})
export class StreamlineRoundCapIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
