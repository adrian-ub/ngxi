import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biHeartArrowIcon],svg[bi-heart-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5c-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5L.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class BiHeartArrowIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
