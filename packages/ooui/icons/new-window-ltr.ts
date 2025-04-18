import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNewWindowLtrIcon],svg[ooui-new-window-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17H3V3h5V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-2z"></svg:path><svg:path fill="currentColor" d="m11 1l3.3 3.3L8.6 10l1.4 1.4l5.7-5.7L19 9V1z"></svg:path>`,
})
export class OouiNewWindowLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
