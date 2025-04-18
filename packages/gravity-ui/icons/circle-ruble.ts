import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleRubleIcon],svg[gravity-ui-circle-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M6.75 4a.75.75 0 0 0-.75.75v2.5h-.125a.75.75 0 0 0 0 1.5H6v.5h-.125a.75.75 0 0 0 0 1.5H6v.5a.75.75 0 0 0 1.5 0v-.5H9a.75.75 0 0 0 0-1.5H7.5v-.5h1.125a2.375 2.375 0 1 0 0-4.75zm1.875 3.25H7.5V5.5h1.125a.875.875 0 1 1 0 1.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleRubleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
