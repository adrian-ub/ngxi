import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsAdjustAltIcon],svg[bxs-adjust-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.071 19.071c3.833-3.833 3.833-10.31 0-14.143s-10.31-3.833-14.143 0s-3.833 10.31 0 14.143s10.31 3.833 14.143 0M7.051 7.051c2.706-2.707 7.191-2.708 9.898 0l-9.898 9.898c-2.708-2.707-2.71-7.19 0-9.898"></svg:path>`,
})
export class BxsAdjustAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
