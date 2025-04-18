import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZoomInternalIcon],svg[icon-park-solid-zoom-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZoomInternal0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M44 4H4v40h40z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 4v12H4m32 8v12H24m12 0L24 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 6v20M7 4h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZoomInternal0)"></svg:path>`,
})
export class IconParkSolidZoomInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
