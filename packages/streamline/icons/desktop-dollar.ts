import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopDollarIcon],svg[streamline-desktop-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7.76 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-1M6 11l-1 2.5M8 11l1 2.5m-5 0h6"></svg:path><svg:path d="M13.424 2.722a1.33 1.33 0 0 0-1.257-.889h-1.032a1.19 1.19 0 0 0-.255 2.353l1.572.344a1.334 1.334 0 0 1-.285 2.637h-.89c-.58 0-1.074-.371-1.257-.89m1.702-4.444V.5m0 8V7.167"></svg:path></svg:g>`,
})
export class StreamlineDesktopDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
