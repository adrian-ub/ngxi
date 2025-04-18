import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineDotIcon],svg[ix-line-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149.333 234.666v42.667h-42.666v-42.667zm85.334 0v42.667H192v-42.667zm85.333 0v42.667h-42.667v-42.667zm85.333 0v42.667h-42.666v-42.667z"></svg:path>`,
})
export class IxLineDotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
