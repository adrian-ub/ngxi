import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonJoinOuterIcon],svg[carbon-join-outer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6a10 10 0 0 0-4 .838a9.995 9.995 0 0 1 0 18.324A9.999 9.999 0 1 0 20 6M10 16a10 10 0 0 1 6-9.162a10 10 0 1 0 0 18.324A10 10 0 0 1 10 16"></svg:path>`,
})
export class CarbonJoinOuterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
