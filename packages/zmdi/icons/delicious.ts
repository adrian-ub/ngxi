import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiDeliciousIcon],svg[zmdi-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 216H213v213H0V216h213V3h214z"></svg:path>`,
})
export class ZmdiDeliciousIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
