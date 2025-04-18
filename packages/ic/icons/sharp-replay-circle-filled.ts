import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpReplayCircleFilledIcon],svg[ic-sharp-replay-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m6 10.5c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4v3l-4-4l4-4v3c3.31 0 6 2.69 6 6"></svg:path>`,
})
export class IcSharpReplayCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
