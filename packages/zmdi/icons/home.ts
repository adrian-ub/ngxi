import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHomeIcon],svg[zmdi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 363H64V192H0L213 0l214 192h-64v171H256V235h-85z"></svg:path>`,
})
export class ZmdiHomeIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
