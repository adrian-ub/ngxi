import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLetterMIcon],svg[gravity-ui-letter-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.062 2c.454 0 .876.234 1.115.62L8 7.162l2.823-4.542a1.312 1.312 0 0 1 2.427.692v9.938a.75.75 0 0 1-1.5 0V3.97L8.637 8.98a.75.75 0 0 1-1.274 0L4.25 3.97v9.28a.75.75 0 0 1-1.5 0V3.312C2.75 2.588 3.338 2 4.062 2" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiLetterMIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
