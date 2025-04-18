import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixArrowDownIcon],svg[ix-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M234.672 106.68v216.973l-70.25-70.25l-30.167 30.167l121.75 121.75l121.74-121.75l-30.167-30.167l-70.24 70.247V106.68z"></svg:path>`,
})
export class IxArrowDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
