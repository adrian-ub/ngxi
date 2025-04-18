import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGuideLineIcon],svg[ri-guide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8v8a3 3 0 0 1-3 3H7.83a3.001 3.001 0 1 1 0-2H10a1 1 0 0 0 1-1V8a3 3 0 0 1 3-3h3V2l5 4l-5 4V7h-3a1 1 0 0 0-1 1M5 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiGuideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
