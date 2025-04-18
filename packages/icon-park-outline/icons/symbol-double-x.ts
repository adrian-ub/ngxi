import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSymbolDoubleXIcon],svg[icon-park-outline-symbol-double-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m10 4l14 14L38 4M10 44l14-14l14 14m5-34L29 24l14 14M4 10l14 14L4 38"></svg:path>`,
})
export class IconParkOutlineSymbolDoubleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
