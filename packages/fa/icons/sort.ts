import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSortIcon],svg[fa-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 896q0 26-19 45l-448 448q-19 19-45 19t-45-19L19 941Q0 922 0 896t19-45t45-19h896q26 0 45 19t19 45m0-384q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45"></svg:path>`,
})
export class FaSortIcon {
  readonly viewBox = input("0 0 1024 1408")
  readonly width = input("0.73em")
  readonly height = input("1em")
}
