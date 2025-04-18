import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTabletCapsuleIcon],svg[streamline-tablet-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.59 1.69a4.045 4.045 0 1 1 5.72 5.72l-4.9 4.9a4.045 4.045 0 1 1-5.72-5.72zm-2.2 2.2l5.72 5.72"></svg:path>`,
})
export class StreamlineTabletCapsuleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
