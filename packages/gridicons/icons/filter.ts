import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsFilterIcon],svg[gridicons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19h4v-2h-4zm-4-6h12v-2H6zM3 5v2h18V5z"></svg:path>`,
})
export class GridiconsFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
