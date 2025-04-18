import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneZoomInternalIcon],svg[icon-park-twotone-zoom-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTZoomInternal0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M44 4H4v40h40z"></svg:path><svg:path stroke-linecap="round" d="M16 4v12H4m32 8v12H24m12 0L24 24M4 6v20M7 4h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTZoomInternal0)"></svg:path>`,
})
export class IconParkTwotoneZoomInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
