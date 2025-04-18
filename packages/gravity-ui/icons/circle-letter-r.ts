import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleLetterRIcon],svg[gravity-ui-circle-letter-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M5.75 5.5a.75.75 0 0 1 .75-.75h1.75a2.25 2.25 0 0 1 1.38 4.028l.771 1.35a.75.75 0 0 1-1.302.744L8.172 9.25H7.25v1.25a.75.75 0 0 1-1.5 0zm1.5 2.25h1a.75.75 0 0 0 0-1.5h-1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleLetterRIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
