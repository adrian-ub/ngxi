import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTabletCapsuleSolidIcon],svg[streamline-tablet-capsule-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.016 5.219L2.9 7.336A2.662 2.662 0 0 0 6.664 11.1l2.117-2.116zm4.202-5.1a4.66 4.66 0 0 0-3.296 1.366L1.485 5.922a4.662 4.662 0 1 0 6.593 6.593l4.437-4.437A4.662 4.662 0 0 0 9.218.12Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTabletCapsuleSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
