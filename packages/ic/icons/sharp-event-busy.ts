import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEventBusyIcon],svg[ic-sharp-event-busy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.31 17l2.44-2.44L14.19 17l1.06-1.06l-2.44-2.44l2.44-2.44L14.19 10l-2.44 2.44L9.31 10l-1.06 1.06l2.44 2.44l-2.44 2.44zM21 3h-3V1h-2v2H8V1H6v2H3.01L3 21h18zm-2 16H5V8h14z"></svg:path>`,
})
export class IcSharpEventBusyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
