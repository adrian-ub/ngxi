import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineZoomInternalIcon],svg[icon-park-outline-zoom-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4H4v40h40z"></svg:path><svg:path stroke-linecap="round" d="M16 4v12H4m32 8v12H24m12 0L24 24M4 6v20M7 4h20"></svg:path></svg:g>`,
})
export class IconParkOutlineZoomInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
