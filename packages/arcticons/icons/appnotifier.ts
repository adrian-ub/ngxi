import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAppnotifierIcon],svg[arcticons-appnotifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.005 5.541a2.914 2.914 0 0 0-2.41 2.873v31.168c0 2.246 2.43 3.65 4.375 2.527l26.978-15.584c1.943-1.124 1.943-3.93 0-5.054L32.43 17.71L21.02 29.127l-6.875-6.88l2.75-2.75l4.124 4.126L35.77 8.868l-2.75-2.75l-7.56 7.56l-13.49-7.791a2.92 2.92 0 0 0-1.965-.346"></svg:path>`,
})
export class ArcticonsAppnotifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
