import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRecyclingPoolIcon],svg[icon-park-recycling-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 16L24 20L28 16"></svg:path><svg:path d="M32 29L36 33L40 29"></svg:path><svg:path d="M8 29L12 33L16 29"></svg:path><svg:path d="M24 20V4"></svg:path><svg:path d="M36 32.8669V19.637C36 17.4278 37.7909 15.637 40 15.637H44"></svg:path><svg:path d="M12 32.8669V19.637C12 17.4278 10.2091 15.637 8 15.637H4"></svg:path><svg:path d="M4 36V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V36"></svg:path></svg:g>`,
})
export class IconParkRecyclingPoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
