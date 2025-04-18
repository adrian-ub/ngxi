import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRadioCircleMarkedIcon],svg[bx-radio-circle-marked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-3.859 0-7 3.141-7 7s3.141 7 7 7s7-3.141 7-7s-3.141-7-7-7m0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5s5 2.243 5 5s-2.243 5-5 5"></svg:path><svg:path fill="currentColor" d="M12 9c-1.627 0-3 1.373-3 3s1.373 3 3 3s3-1.373 3-3s-1.373-3-3-3"></svg:path>`,
})
export class BxRadioCircleMarkedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
