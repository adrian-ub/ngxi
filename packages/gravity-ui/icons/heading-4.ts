import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHeading4Icon],svg[gravity-ui-heading-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.25 4.25a.75.75 0 0 0-1.347-.454l-4 5.25A.75.75 0 0 0 9.5 10.25h3.25v1.496a.75.75 0 0 0 1.5 0V10.25h.25a.75.75 0 1 0 0-1.5h-.25zm-1.5 2.222V8.75h-1.736zM2.5 4.25a.75.75 0 1 0-1.5 0v7.496a.75.75 0 0 0 1.5 0V8.75h4v2.996a.75.75 0 0 0 1.5 0V4.25a.75.75 0 1 0-1.5 0v3h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiHeading4Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
