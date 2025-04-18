import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpFillIcon],svg[ph-monitor-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8m64-160v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24m-74.34 42.34l-24-24a8 8 0 0 0-11.32 0l-24 24a8 8 0 0 0 11.32 11.32L120 107.31V152a8 8 0 0 0 16 0v-44.69l10.34 10.35a8 8 0 0 0 11.32-11.32"></svg:path>`,
})
export class PhMonitorArrowUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
