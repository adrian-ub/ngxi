import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronsDownIcon],svg[gravity-ui-circle-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.72 4.97a.75.75 0 0 1 1.06 0L8 6.19l1.22-1.22a.75.75 0 1 1 1.06 1.06L8.53 7.78a.75.75 0 0 1-1.06 0L5.72 6.03a.75.75 0 0 1 0-1.06m1.06 3.75a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l1.75-1.75a.75.75 0 1 0-1.06-1.06L8 9.94z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronsDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
