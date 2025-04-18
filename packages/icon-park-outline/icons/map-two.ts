import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMapTwoIcon],svg[icon-park-outline-map-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 10H4v30h40z"></svg:path><svg:path stroke-linecap="round" d="m10 16l28 18m0-18L24 35m0-19L10 34"></svg:path></svg:g>`,
})
export class IconParkOutlineMapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
