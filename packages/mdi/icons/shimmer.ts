import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiShimmerIcon],svg[mdi-shimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 9.6L9 15L7.4 9.6L2 8l5.4-1.6L9 1l1.6 5.4L16 8zm6.4 4.6l4-2.2l-2.2 4l2.2 4l-4-2.2l-4 2.2l2.2-4l-2.2-4zM10 16l-1.7 3l1.7 3l-3-1.7L4 22l1.7-3L4 16l3 1.7z"></svg:path>`,
})
export class MdiShimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
