import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMathematicsIcon],svg[ooui-mathematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2H4l5 8l-5 8h12v-4h-2v2H8.25L12 10L8.25 4H14v2h2V2z"></svg:path>`,
})
export class OouiMathematicsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
