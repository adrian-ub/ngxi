import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterZIcon],svg[gravity-ui-circle-letter-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6 5a.75.75 0 0 0 0 1.5h2.49L5.56 9.284A.995.995 0 0 0 6.245 11H10a.75.75 0 0 0 0-1.5H7.51l2.93-2.784A.995.995 0 0 0 9.755 5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterZIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
