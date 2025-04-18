import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsDotsHorizontalIcon],svg[humbleicons-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="4" height="4" x="3" y="10" rx="2"></svg:rect><svg:rect width="4" height="4" x="10" y="10" rx="2"></svg:rect><svg:rect width="4" height="4" x="17" y="10" rx="2"></svg:rect></svg:g>`,
})
export class HumbleiconsDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
