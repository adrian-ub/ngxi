import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineCloudCircleIcon],svg[ic-baseline-cloud-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01A3.98 3.98 0 0 1 12 7c2.21 0 4 1.79 4 4h.5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class IcBaselineCloudCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
