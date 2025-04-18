import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpViewDayIcon],svg[ic-sharp-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z"></svg:path>`,
})
export class IcSharpViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
