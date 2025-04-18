import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpEventSeatIcon],svg[ic-sharp-event-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21h3v-3h10v3h3v-6H4zm15-11h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2z"></svg:path>`,
})
export class IcSharpEventSeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
