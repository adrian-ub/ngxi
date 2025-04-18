import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshIcon],svg[zmdi-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 112q-53 0-90.5 37.5T43 240q0 32 15 60l-32 31Q0 289 0 240q0-71 50-121t121-50V5l85 86l-85 85zm144 37q26 42 26 91q0 71-50 121t-120 50v64l-86-86l86-85v64q53 0 90.5-37.5T299 240q0-31-15-60z"></svg:path>`,
})
export class ZmdiRefreshIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
