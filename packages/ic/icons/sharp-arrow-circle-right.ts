import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpArrowCircleRightIcon],svg[ic-sharp-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10m-10 1H8v-2h4V8l4 4l-4 4z"></svg:path>`,
})
export class IcSharpArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
