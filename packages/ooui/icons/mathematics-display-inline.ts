import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMathematicsDisplayInlineIcon],svg[ooui-mathematics-display-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 13H0V7h4zm12-6h4v6h-4zM6 6l3 4l-3 4h8v-3h-2v1H9.5l1.5-2l-1.5-2H12v1h2V6z"></svg:path>`,
})
export class OouiMathematicsDisplayInlineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
