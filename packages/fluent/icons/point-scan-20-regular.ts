import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPointScan20RegularIcon],svg[fluent-point-scan-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a.5.5 0 0 1 .5.5v4.025A5 5 0 0 1 13.475 11H17.5a.5.5 0 0 1 0 1h-4.025A5 5 0 0 1 9 16.475V17.5a.5.5 0 0 1-1 0v-1.025A5 5 0 0 1 3.525 12H2.5a.5.5 0 0 1 0-1h1.025A5 5 0 0 1 8 6.525V2.5a.5.5 0 0 1 .5-.5M4.531 12A4 4 0 0 0 8 15.47V12zM8 11V7.531A4 4 0 0 0 4.531 11zm1 1v3.47A4 4 0 0 0 12.47 12zm3.47-1A4 4 0 0 0 9 7.531V11z"></svg:path>`,
})
export class FluentPointScan20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
