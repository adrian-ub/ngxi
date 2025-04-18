import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiTriangleExclamationFillIcon],svg[gravity-ui-triangle-exclamation-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.835 2.244c.963-1.665 3.367-1.665 4.33 0l4.916 8.505c.964 1.666-.24 3.751-2.164 3.751H3.083c-1.925 0-3.128-2.085-2.165-3.751zM8 5a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2A.75.75 0 0 1 8 5m1 5.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiTriangleExclamationFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
