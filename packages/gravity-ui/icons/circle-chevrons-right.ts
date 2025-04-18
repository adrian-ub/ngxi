import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsRightIcon],svg[gravity-ui-circle-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 0 0-11 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m3.97 2.28a.75.75 0 0 1 0-1.06L6.19 8L4.97 6.78a.75.75 0 0 1 1.06-1.06l1.75 1.75a.75.75 0 0 1 0 1.06l-1.75 1.75a.75.75 0 0 1-1.06 0m3.75-1.06a.75.75 0 1 0 1.06 1.06l1.75-1.75a.75.75 0 0 0 0-1.06L9.78 5.72a.75.75 0 0 0-1.06 1.06L9.94 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
