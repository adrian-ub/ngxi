import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQfileIcon],svg[arcticons-qfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.959 17.679H9.403a4.9 4.9 0 0 0-4.663 6.403l3.976 12.332a4.715 4.715 0 0 0 4.488 3.27h22.555a4.9 4.9 0 0 0 4.663-6.404l-3.975-12.333a4.715 4.715 0 0 0-4.488-3.268"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.696 39.683A6.804 6.804 0 0 0 43.5 32.88V18.258a6.804 6.804 0 0 0-6.804-6.804H24.731a4.45 4.45 0 0 1-2.478-.754l-2.432-1.63a4.45 4.45 0 0 0-2.478-.753h-2.97a5.46 5.46 0 0 0-3.775 1.514h0a4.93 4.93 0 0 0-1.508 3.963l.314 3.885"></svg:path>`,
})
export class ArcticonsQfileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
