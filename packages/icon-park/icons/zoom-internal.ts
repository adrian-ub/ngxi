import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkZoomInternalIcon],svg[icon-park-zoom-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 4H4V44H44V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 4V16H4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 24V36H24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 36L24 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 6V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 4H27"></svg:path></svg:g>`,
})
export class IconParkZoomInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
