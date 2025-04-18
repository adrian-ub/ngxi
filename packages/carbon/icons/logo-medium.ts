import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoMediumIcon],svg[carbon-logo-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16c0 3.7-.6 6.7-1.4 6.7s-1.4-3-1.4-6.7s.6-6.7 1.4-6.7s1.4 3 1.4 6.7m-3.5 0c0 4.1-1.8 7.5-3.9 7.5s-3.9-3.4-3.9-7.5s1.8-7.5 3.9-7.5s3.9 3.4 3.9 7.5m-8.7 0c0 4.4-3.5 8-7.9 8S2 20.4 2 16s3.5-8 7.9-8s7.9 3.6 7.9 8"></svg:path>`,
})
export class CarbonLogoMediumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
