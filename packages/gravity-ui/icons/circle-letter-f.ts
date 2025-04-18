import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterFIcon],svg[gravity-ui-circle-letter-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 5a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-1.5h1.75a.75.75 0 0 0 0-1.5H7.5V6.5h2.25a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterFIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
