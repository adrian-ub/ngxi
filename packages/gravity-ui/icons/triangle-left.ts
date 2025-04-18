import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleLeftIcon],svg[gravity-ui-triangle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.995 7.134L11.5 2.217a1 1 0 0 1 1.5.866v9.834a1 1 0 0 1-1.5.866L2.995 8.866a1 1 0 0 1 0-1.732m-.751 3.03c-1.665-.962-1.665-3.366 0-4.329L10.749.918c1.666-.963 3.751.24 3.751 2.165v9.834c0 1.925-2.085 3.128-3.751 2.164z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
