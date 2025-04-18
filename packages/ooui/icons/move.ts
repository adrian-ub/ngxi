import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMoveIcon],svg[ooui-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 10l-4-3v2h-4V5h2l-3-4l-3 4h2v4H5V7l-4 3l4 3v-2h4v4H7l3 4l3-4h-2v-4h4v2z"></svg:path>`,
})
export class OouiMoveIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
