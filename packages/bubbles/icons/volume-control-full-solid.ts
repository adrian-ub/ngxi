import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesVolumeControlFullSolidIcon],svg[bubbles-volume-control-full-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.867 1.527L2.913 5.48a.17.17 0 0 1-.118.048H1.333A1.333 1.333 0 0 0 0 6.861v2.276a1.333 1.333 0 0 0 1.333 1.333h1.462a.17.17 0 0 1 .118.05l3.954 3.95A.667.667 0 0 0 8 14V2a.667.667 0 0 0-1.133-.473m4.86 1.783a.667.667 0 0 0-.943.943a5.296 5.296 0 0 1 0 7.493a.667.667 0 0 0 .943.943a6.63 6.63 0 0 0 0-9.378"></svg:path><svg:path d="M13.36 1.623a.667.667 0 0 0-.942.942a7.695 7.695 0 0 1 0 10.867a.666.666 0 1 0 .943.943a9.03 9.03 0 0 0 0-12.752M10.094 5a.667.667 0 0 0-.944.942a2.92 2.92 0 0 1 0 4.12a.668.668 0 1 0 .943.938a4.255 4.255 0 0 0 .001-6"></svg:path></svg:g>`,
})
export class BubblesVolumeControlFullSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
