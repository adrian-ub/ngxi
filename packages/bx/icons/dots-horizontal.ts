import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxDotsHorizontalIcon],svg[bx-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z"></svg:path>`,
})
export class BxDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
