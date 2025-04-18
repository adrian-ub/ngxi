import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeadingIcon],svg[gravity-ui-heading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 2.25A.75.75 0 0 1 5 3v4.25h6V3a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.5 0V8.75H5V13a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeadingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
