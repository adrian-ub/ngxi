import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUDownRightThinIcon],svg[ph-arrow-u-down-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226.83 170.83l-48 48a4 4 0 0 1-5.66-5.66L214.34 172H88a60 60 0 0 1 0-120h88a4 4 0 0 1 0 8H88a52 52 0 0 0 0 104h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66"></svg:path>`,
})
export class PhArrowUDownRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
