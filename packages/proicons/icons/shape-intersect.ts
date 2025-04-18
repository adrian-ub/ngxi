import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsShapeIntersectIcon],svg[proicons-shape-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M12.748 15.75a3 3 0 0 0 3-3v-4.5h-4.496a3 3 0 0 0-3 3v4.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.252 15.75v2.5a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-2.504m-7.496 7.5v-4.5a3 3 0 0 1 3-3h4.496m-7.496 7.5h4.496a3 3 0 0 0 3-3v-4.5m-7.496 7.5H5.748a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2.5"></svg:path></svg:g>`,
})
export class ProiconsShapeIntersectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
