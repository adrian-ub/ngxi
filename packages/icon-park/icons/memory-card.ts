import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryCardIcon],svg[icon-park-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 40H8C6.89543 40 6 39.1046 6 38V19.1056C6 18.7107 6.11688 18.3247 6.3359 17.9962L12.4063 8.8906C12.7772 8.3342 13.4017 8 14.0704 8H40C41.1046 8 42 8.89543 42 10V38C42 39.1046 41.1046 40 40 40Z"></svg:path><svg:path d="M18 16L18 8"></svg:path><svg:path d="M24 16L24 8"></svg:path><svg:path d="M30 16L30 8"></svg:path><svg:path d="M36 16L36 8"></svg:path><svg:path fill="#2F88FF" d="M15 28H33V40H15V28Z"></svg:path></svg:g>`,
})
export class IconParkMemoryCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
