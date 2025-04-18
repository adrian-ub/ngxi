import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineDashDotIcon],svg[ix-line-dash-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 234.666v42.667H85.333v-42.667zm213.333 0v42.667H170.667v-42.667zm85.334 0v42.667H384v-42.667z"></svg:path>`,
})
export class IxLineDashDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
