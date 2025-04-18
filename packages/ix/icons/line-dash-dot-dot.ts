import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineDashDotDotIcon],svg[ix-line-dash-dot-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 234.666v42.667H85.333v-42.667zm85.333 0v42.667h-42.666v-42.667zm85.334 0v42.667H384v-42.667z"></svg:path>`,
})
export class IxLineDashDotDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
