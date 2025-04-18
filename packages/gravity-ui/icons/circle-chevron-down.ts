import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCircleChevronDownIcon],svg[gravity-ui-circle-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8m5.03-1.28a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06L8 8.69z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCircleChevronDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
