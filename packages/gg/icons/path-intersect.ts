import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPathIntersectIcon],svg[gg-path-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15 5H5v10h4v4h10V9h-4zm-2 2H7v6h2V9h4zm4 10h-6v-2h4v-4h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPathIntersectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
