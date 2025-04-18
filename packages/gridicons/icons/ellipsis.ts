import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsEllipsisIcon],svg[gridicons-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a2 2 0 1 1-4.001-.001A2 2 0 0 1 7 12m12-2a2 2 0 1 0 .001 4.001A2 2 0 0 0 19 10m-7 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 12 10"></svg:path>`,
})
export class GridiconsEllipsisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
