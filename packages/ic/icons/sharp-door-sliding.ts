import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDoorSlidingIcon],svg[ic-sharp-door-sliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19V3h-7.25v16h-1.5V3H4v16H3v2h18v-2zm-10-6H8v-2h2zm6 0h-2v-2h2z"></svg:path>`,
})
export class IcSharpDoorSlidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
