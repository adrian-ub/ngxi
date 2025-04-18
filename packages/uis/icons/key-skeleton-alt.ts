import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisKeySkeletonAltIcon],svg[uis-key-skeleton-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.3 5.1l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9.8 12.8C9 12.3 8 12 7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-1-.3-2-.8-2.8l4.9-4.9l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.4-1.4l1.4-1.4l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4zM7 20c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path>`,
})
export class UisKeySkeletonAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
