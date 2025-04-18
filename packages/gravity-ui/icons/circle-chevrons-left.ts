import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsLeftIcon],svg[gravity-ui-circle-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 8a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0m-3.97-2.28a.75.75 0 0 1 0 1.06L9.81 8l1.22 1.22a.75.75 0 1 1-1.06 1.06L8.22 8.53a.75.75 0 0 1 0-1.06l1.75-1.75a.75.75 0 0 1 1.06 0M7.28 6.78a.75.75 0 0 0-1.06-1.06L4.47 7.47a.75.75 0 0 0 0 1.06l1.75 1.75a.75.75 0 1 0 1.06-1.06L6.06 8z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
