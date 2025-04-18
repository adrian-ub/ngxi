import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxTagIcon],svg[bx-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H8.515a2 2 0 0 0-1.627.838l-4.701 6.581a1 1 0 0 0 0 1.162l4.701 6.581A2 2 0 0 0 8.515 20H20c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2m0 14H8.515l-4.286-6l4.286-6H20z"></svg:path>`,
})
export class BxTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
