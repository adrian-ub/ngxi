import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siChevronLeftFillIcon],svg[si-chevron-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.707 7.293a1 1 0 0 1 0 1.414L11.414 12l3.293 3.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class SiChevronLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
