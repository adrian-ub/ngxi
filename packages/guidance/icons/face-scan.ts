import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceFaceScanIcon],svg[guidance-face-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17 6v3M7 6v3m5-1c0 2.5.5 4.5.5 4.5l-2 1m-3.5 3c1.444.984 3 1.5 5 1.5s3.556-.516 5-1.5M7 1l-5.7.3L1 7m16-6l5.7.3L23 7m-6 16l5.7-.3l.3-5.7M7 23l-5.7-.3L1 17"></svg:path>`,
})
export class GuidanceFaceScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
