import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterKIcon],svg[gravity-ui-circle-letter-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M7 5.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-1.5h.212l2.286 2.057a.75.75 0 0 0 1.004-1.114L8.589 7.97l1.691-1.69a.75.75 0 1 0-1.06-1.06L7.19 7.25H7z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterKIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
