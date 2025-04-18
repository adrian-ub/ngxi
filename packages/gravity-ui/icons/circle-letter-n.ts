import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterNIcon],svg[gravity-ui-circle-letter-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0m-4.25-2.25a.75.75 0 0 0-1.5 0v2.773L7.22 5.479a1.076 1.076 0 0 0-1.97.597v4.174a.75.75 0 0 0 1.5 0V7.477l2.03 3.044a1.076 1.076 0 0 0 1.97-.597z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterNIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
