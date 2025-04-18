import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortClockAscendingIcon],svg[mdi-sort-clock-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17h3l-4 4l-4-4h3V3h2zM8 5c-3.86 0-7 3.13-7 7s3.13 7 7 7c3.86 0 7-3.13 7-7s-3.13-7-7-7m2.19 9.53L7 12.69V9h1.5v2.82l2.44 1.41z"></svg:path>`,
})
export class MdiSortClockAscendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
