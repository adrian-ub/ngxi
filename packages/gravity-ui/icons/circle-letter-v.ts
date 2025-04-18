import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterVIcon],svg[gravity-ui-circle-letter-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.441 5.709a.75.75 0 0 0-1.382.582l1.903 4.52a1.126 1.126 0 0 0 2.076 0l1.903-4.52a.75.75 0 1 0-1.382-.582L8 9.411z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
