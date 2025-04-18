import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesVolumeControlDownSolidIcon],svg[bubbles-volume-control-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8a.833.833 0 0 0-.833-.833h-4a.833.833 0 1 0 0 1.666h4A.833.833 0 0 0 16 8M7.529 1.527L3.577 5.48a.17.17 0 0 1-.118.048H1.333A1.333 1.333 0 0 0 0 6.861v2.276a1.333 1.333 0 0 0 1.333 1.333H3.46a.17.17 0 0 1 .118.05l3.951 3.95A.667.667 0 0 0 8.667 14V2a.667.667 0 0 0-1.138-.473"></svg:path>`,
})
export class BubblesVolumeControlDownSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
