import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeTrianglesIcon],svg[icon-park-solid-three-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17 7l7 12.124L29.99 29.5H4.01z"></svg:path><svg:path fill="currentColor" d="m31 7l12.99 22.5H18.01L24 19.124zM11.01 41.5h25.98l-7-12H18.01z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.99 29.5L24 19.124M18.01 29.5l-7 12h25.98l-7-12zm0 0h25.98L31 7l-7 12.124zm0 0L24 19.124zm0 0h11.98zm11.98 0H4.01L17 7l7 12.124z"></svg:path></svg:g>`,
})
export class IconParkSolidThreeTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
