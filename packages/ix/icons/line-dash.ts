import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLineDashIcon],svg[ix-line-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M234.667 234.666v42.667H85.333v-42.667zm192 0v42.667H277.333v-42.667z"></svg:path>`,
})
export class IxLineDashIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
