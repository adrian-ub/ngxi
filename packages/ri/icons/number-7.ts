import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber7Icon],svg[ri-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v1.5L10.763 22H8.574l8.013-18H6V2z"></svg:path>`,
})
export class RiNumber7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
