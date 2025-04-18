import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTapAndPlayIcon],svg[zmdi-tap-and-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 325q62 0 105.5 44T149 475h-42q0-44-31.5-75.5T0 368zm0 86q27 0 45.5 18.5T64 475H0zm0-171q97 0 166 68.5T235 475h-43q0-80-56-136T0 283zM320 6q18 0 30.5 12T363 48v363q0 17-12.5 29.5T320 453h-44q-4-45-21-85h65V91H107v128q-20-8-43-14V48q0-18 12.5-30.5T107 5z"></svg:path>`,
})
export class ZmdiTapAndPlayIcon {
  readonly viewBox = input("0 0 368 480")
  readonly width = input("0.77em")
  readonly height = input("1em")
}
