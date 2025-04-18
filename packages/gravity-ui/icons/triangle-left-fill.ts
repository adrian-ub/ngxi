import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleLeftFillIcon],svg[gravity-ui-triangle-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.244 10.164c-1.665-.962-1.665-3.366 0-4.328L10.749.919c1.666-.964 3.751.239 3.751 2.164v9.834c0 1.925-2.085 3.128-3.751 2.164z"></svg:path>`,
})
export class GravityUiTriangleLeftFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
