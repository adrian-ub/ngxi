import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSquareRootIcon],svg[ri-square-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.382 4H22v2h-5.382L9 21.236L5.382 14H2v-2h4.618L9 16.764z"></svg:path>`,
})
export class RiSquareRootIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
