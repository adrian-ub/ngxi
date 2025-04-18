import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpFlightTakeoffIcon],svg[ic-sharp-flight-takeoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43l-1.93.51l4.14 7.17l-4.97 1.33l-1.97-1.54l-1.45.39l1.82 3.16l.77 1.33L21 11.49c.81-.23 1.28-1.05 1.07-1.85"></svg:path>`,
})
export class IcSharpFlightTakeoffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
