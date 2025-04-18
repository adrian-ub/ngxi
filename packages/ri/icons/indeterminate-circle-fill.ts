import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riIndeterminateCircleFillIcon],svg[ri-indeterminate-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10M7 11v2h10v-2z"></svg:path>`,
})
export class RiIndeterminateCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
