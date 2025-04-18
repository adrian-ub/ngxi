import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQtalkIcon],svg[arcticons-qtalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.08 6.909A18.5 18.5 0 1 0 24 42.499h9.25a7.4 7.4 0 0 0-7.4-7.4H24A11.1 11.1 0 1 1 35.1 24v1.85a7.4 7.4 0 0 0 7.4 7.4V24A18.5 18.5 0 0 0 31.08 6.907z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.1 42.5v-5.4c0-1.108.891-2 2-2h5.4v7.4z"></svg:path>`,
})
export class ArcticonsQtalkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
