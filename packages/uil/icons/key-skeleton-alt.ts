import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilKeySkeletonAltIcon],svg[uil-key-skeleton-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 6.53l-1.42-1.41l1.42-1.41a1 1 0 1 0-1.42-1.42L9.75 12.83a5 5 0 1 0 1.42 1.42l4.88-4.89l1.41 1.42a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.42L17.46 8l1.42-1.42L20.29 8a1 1 0 0 0 .71.29a1 1 0 0 0 .71-.29a1 1 0 0 0 0-1.47M7 20a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class UilKeySkeletonAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
