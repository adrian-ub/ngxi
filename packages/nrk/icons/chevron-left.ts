import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkChevronLeftIcon],svg[nrk-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.12 4l-5.6 8l5.6 8H15l-5.6-8L15 4z"></svg:path>`,
})
export class NrkChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
