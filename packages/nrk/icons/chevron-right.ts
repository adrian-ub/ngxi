import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkChevronRightIcon],svg[nrk-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.88 4l5.6 8l-5.6 8H9l5.6-8L9 4z"></svg:path>`,
})
export class NrkChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
