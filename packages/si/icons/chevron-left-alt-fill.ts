import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftAltFillIcon],svg[si-chevron-left-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.707 3.293a1 1 0 0 1 0 1.414L9.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronLeftAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
