import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBusIcon],svg[guidance-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 17.5h2m2 0h6m2 0h2M2.5 4.5h19m0 9s-3.969 1-9.5 1s-9.5-1-9.5-1m0-12h19v21h-2.25l-.075-.12a4 4 0 0 0-3.392-1.88H8.217a4 4 0 0 0-3.392 1.88l-.075.12H2.5z"></svg:path>`,
})
export class GuidanceBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
