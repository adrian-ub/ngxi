import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOilLineIcon],svg[ri-oil-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.07 7L6 11.606V20h12V7zM8 5h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11zm5-4h5a1 1 0 0 1 1 1v2h-7V2a1 1 0 0 1 1-1M8 12h2v6H8z"></svg:path>`,
})
export class RiOilLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
