import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiRoundBracketsIcon],svg[gravity-ui-round-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.22 2.28a.75.75 0 0 1 1.06-1.06a9.59 9.59 0 0 1 0 13.56a.75.75 0 1 1-1.06-1.06a8.09 8.09 0 0 0 0-11.44m-6.44 0a.75.75 0 0 0-1.06-1.06a9.59 9.59 0 0 0 0 13.56a.75.75 0 0 0 1.06-1.06a8.09 8.09 0 0 1 0-11.44" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiRoundBracketsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
