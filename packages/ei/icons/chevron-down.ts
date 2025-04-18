import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiChevronDownIcon],svg[ei-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 32.4l-9.7-9.7l1.4-1.4l8.3 8.3l8.3-8.3l1.4 1.4z"></svg:path>`,
})
export class EiChevronDownIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
