import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBoldCyrlPalochkaIcon],svg[ooui-bold-cyrl-palochka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19H6v-2l2-1V4L6 3V1h8v2l-2 1v12l2 1z"></svg:path>`,
})
export class OouiBoldCyrlPalochkaIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
