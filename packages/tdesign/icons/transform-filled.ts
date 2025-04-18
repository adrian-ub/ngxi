import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignTransformFilledIcon],svg[tdesign-transform-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4a3 3 0 0 1 5.83-1h10.34A3.001 3.001 0 1 1 21 6.83v10.34A3.001 3.001 0 1 1 17.17 21H6.83A3.001 3.001 0 1 1 3 17.17V6.83A3 3 0 0 1 1 4m4 2.83v10.34A3 3 0 0 1 6.83 19h10.34A3 3 0 0 1 19 17.17V6.83A3 3 0 0 1 17.17 5H6.83A3 3 0 0 1 5 6.83"></svg:path>`,
})
export class TdesignTransformFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
