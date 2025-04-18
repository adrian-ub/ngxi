import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSortAscIcon],svg[fa-sort-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45"></svg:path>`,
})
export class FaSortAscIcon {
  readonly viewBox = input("0 0 1024 1344")
  readonly width = input("0.77em")
  readonly height = input("1em")
}
