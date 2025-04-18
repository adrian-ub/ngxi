import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTextDirRtlIcon],svg[ooui-text-dir-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 10l6-5v4h7v2H7v4zm13-8V1h1.5a1.5 1.5 0 0 1 1 .39a1.5 1.5 0 0 1 1-.39H19v1h-1.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5H19v1h-1.5a1.5 1.5 0 0 1-1-.39a1.5 1.5 0 0 1-1 .39H14v-1h1.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class OouiTextDirRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
