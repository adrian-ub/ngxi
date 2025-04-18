import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCheckFillIcon],svg[si-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.633 6.226a1 1 0 0 1 .141 1.407l-9 11a1 1 0 0 1-1.481.074l-5-5a1 1 0 1 1 1.414-1.414l4.219 4.219l8.3-10.145a1 1 0 0 1 1.407-.141" clip-rule="evenodd"></svg:path>`,
})
export class SiCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
