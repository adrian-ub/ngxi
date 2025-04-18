import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsBlockIcon],svg[gridicons-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M4 12a8 8 0 0 1 8-8c1.848 0 3.545.633 4.9 1.686L5.686 16.9A7.96 7.96 0 0 1 4 12m8 8a7.96 7.96 0 0 1-4.9-1.686L18.314 7.1A7.96 7.96 0 0 1 20 12a8 8 0 0 1-8 8"></svg:path>`,
})
export class GridiconsBlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
