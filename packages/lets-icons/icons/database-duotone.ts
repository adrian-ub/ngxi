import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDatabaseDuotoneIcon],svg[lets-icons-database-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M5 8a12.04 12.04 0 0 0 14 0v10a14.11 14.11 0 0 1-14 0z"></svg:path><svg:ellipse cx="12" cy="7" stroke="currentColor" stroke-width="1.2" rx="7" ry="3"></svg:ellipse><svg:path stroke="currentColor" stroke-linecap="square" stroke-width="1.2" d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"></svg:path></svg:g>`,
})
export class LetsIconsDatabaseDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
