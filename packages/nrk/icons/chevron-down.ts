import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkChevronDownIcon],svg[nrk-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 10.88l8 5.6l8-5.6V9l-8 5.6L4 9z"></svg:path>`,
})
export class NrkChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
