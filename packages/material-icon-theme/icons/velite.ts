import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeVeliteIcon],svg[material-icon-theme-velite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#43a047" d="m5.767 7.155l.918 2.46L5 13L1 3.014c.444 0 .866.107 1.267.221c1.433.408 2.594 1.594 3.5 3.92"></svg:path><svg:path fill="#26a69a" d="M15 3.014c-1.357-.423-2.581.024-3.602.943L6.75 8.285C4.833 10.077 3.69 9.871 3 8l2 5z"></svg:path></svg:g>`,
})
export class MaterialIconThemeVeliteIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
