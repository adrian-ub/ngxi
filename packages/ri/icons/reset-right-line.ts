import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riResetRightLineIcon],svg[ri-reset-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2v2a8 8 0 1 1-4.5 1.385V8h2V2h-6v2H6a9.99 9.99 0 0 0-4 8"></svg:path>`,
})
export class RiResetRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
