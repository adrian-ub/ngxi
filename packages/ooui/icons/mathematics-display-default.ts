import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMathematicsDisplayDefaultIcon],svg[ooui-mathematics-display-default-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5H4l3 5l-3 5h10v-3h-2v1H8.2l1.8-3l-1.8-3H12v1h2V5zM1 9h3v2H1zm15 0h3v2h-3z"></svg:path>`,
})
export class OouiMathematicsDisplayDefaultIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
