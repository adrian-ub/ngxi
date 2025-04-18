import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMathematicsDisplayBlockIcon],svg[ooui-mathematics-display-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5H5l3 5l-3 5h10v-3h-2v1H9.2l1.8-3l-1.8-3H13v1h2V5zM2 1h16v2H2zm0 16h16v2H2z"></svg:path>`,
})
export class OouiMathematicsDisplayBlockIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
