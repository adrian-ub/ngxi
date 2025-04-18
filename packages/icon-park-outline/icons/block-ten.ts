import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBlockTenIcon],svg[icon-park-outline-block-ten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6h12v12H24z"></svg:path><svg:path d="M24 6h12v12H24zM12 6h12v12H12zm0 24h12v12H12zm0-12h12v12H12z"></svg:path></svg:g>`,
})
export class IconParkOutlineBlockTenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
