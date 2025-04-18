import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePlaygroundIcon],svg[guidance-playground-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 23.5c3-5 3-14.5 3-20.578V.5h17v2.422c0 6.078 0 15.578 3 20.578M9.5.5v15m5-15v15m-8 0v3h11v-3z"></svg:path>`,
})
export class GuidancePlaygroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
