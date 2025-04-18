import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDatabaseLightIcon],svg[lets-icons-database-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:ellipse cx="12" cy="7" rx="7" ry="3"></svg:ellipse><svg:path stroke-linecap="square" d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"></svg:path><svg:path d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"></svg:path></svg:g>`,
})
export class LetsIconsDatabaseLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
