import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiNewlineRtlIcon],svg[ooui-newline-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4v8h12v4l6-5l-6-5v4H3V4z"></svg:path>`,
})
export class OouiNewlineRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
