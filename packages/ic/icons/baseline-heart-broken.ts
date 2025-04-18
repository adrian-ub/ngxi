import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineHeartBrokenIcon],svg[ic-baseline-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 3c-.96 0-1.9.25-2.73.69L12 9h3l-3 10l1-9h-3l1.54-5.39C10.47 3.61 9.01 3 7.5 3C4.42 3 2 5.42 2 8.5c0 4.13 4.16 7.18 10 12.5c5.47-4.94 10-8.26 10-12.5C22 5.42 19.58 3 16.5 3"></svg:path>`,
})
export class IcBaselineHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
