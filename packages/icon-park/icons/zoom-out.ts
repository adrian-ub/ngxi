import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkZoomOutIcon],svg[icon-park-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 21L27 21"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33.2216 33.2217L41.7069 41.707"></svg:path></svg:g>`,
})
export class IconParkZoomOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
