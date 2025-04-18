import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsCustomPostTypeIcon],svg[gridicons-custom-post-type-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M6 6h5v5H6zm4.5 13a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m3-6l3-5l3 5z"></svg:path>`,
})
export class GridiconsCustomPostTypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
