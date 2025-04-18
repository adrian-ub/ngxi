import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUUpRightThinIcon],svg[ph-arrow-u-up-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M173.17 133.17L214.34 92H88a52 52 0 0 0 0 104h88a4 4 0 0 1 0 8H88a60 60 0 0 1 0-120h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66"></svg:path>`,
})
export class PhArrowUUpRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
