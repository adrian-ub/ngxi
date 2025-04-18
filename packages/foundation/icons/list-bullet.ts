import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationListBulletIcon],svg[foundation-list-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.721 20.13H26.258a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h62.463a3.407 3.407 0 0 0 3.407-3.407v-3.143a3.407 3.407 0 0 0-3.407-3.407m0 24.892H26.258a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h62.463a3.407 3.407 0 0 0 3.407-3.407v-3.143a3.407 3.407 0 0 0-3.407-3.407m0 24.891H26.258a3.407 3.407 0 0 0-3.407 3.407v3.143a3.407 3.407 0 0 0 3.407 3.407h62.463a3.407 3.407 0 0 0 3.407-3.407V73.32a3.41 3.41 0 0 0-3.407-3.407"></svg:path><svg:circle cx="12.856" cy="25.108" r="4.984" fill="currentColor"></svg:circle><svg:circle cx="12.856" cy="49.002" r="4.984" fill="currentColor"></svg:circle><svg:circle cx="12.856" cy="74.891" r="4.984" fill="currentColor"></svg:circle>`,
})
export class FoundationListBulletIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
