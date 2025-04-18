import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesVolumeControlMediumSolidIcon],svg[bubbles-volume-control-medium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.028 1.527L4.078 5.48a.17.17 0 0 1-.119.048H2.5a1.333 1.333 0 0 0-1.333 1.334v2.276A1.333 1.333 0 0 0 2.5 10.47h1.46c.044 0 .086.018.117.05l3.951 3.95A.667.667 0 0 0 9.167 14V2a.667.667 0 0 0-1.139-.473M12.89 3.31a.667.667 0 0 0-.943.943a5.296 5.296 0 0 1 0 7.493a.667.667 0 0 0 .943.943a6.627 6.627 0 0 0 0-9.378"></svg:path><svg:path d="M11.257 5a.667.667 0 1 0-.944.94a2.92 2.92 0 0 1 0 4.119a.667.667 0 1 0 .944.941a4.254 4.254 0 0 0 0-6"></svg:path></svg:g>`,
})
export class BubblesVolumeControlMediumSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
