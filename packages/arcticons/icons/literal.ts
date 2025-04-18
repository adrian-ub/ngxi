import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLiteralIcon],svg[arcticons-literal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.205 13.205l7.717 7.717M13.205 42.5L5.5 34.795V5.5h29.295v29.295H20.922V20.923h6.167m.001 6.167l7.705 7.705"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.923 27.09h6.166V13.204H13.205V42.5H42.5V13.205L34.795 5.5"></svg:path>`,
})
export class ArcticonsLiteralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
