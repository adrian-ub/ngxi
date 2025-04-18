import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineLibraIcon],svg[icon-park-outline-libra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M4 39h40M4 27h11.5m17 0H44"></svg:path><svg:path d="M15.514 27a11 11 0 0 1-.735-1A10.95 10.95 0 0 1 13 20c0-6.075 4.925-11 11-11s11 4.925 11 11a10.95 10.95 0 0 1-2.514 7"></svg:path></svg:g>`,
})
export class IconParkOutlineLibraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
