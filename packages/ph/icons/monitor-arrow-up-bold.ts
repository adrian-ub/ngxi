import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMonitorArrowUpBoldIcon],svg[ph-monitor-arrow-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m4 140a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-40 52a12 12 0 0 1-12 12H96a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-11.51-124.49a12 12 0 0 1-17 17L140 117v35a12 12 0 0 1-24 0v-35l-3.51 3.52a12 12 0 0 1-17-17l24-24a12 12 0 0 1 17 0Z"></svg:path>`,
})
export class PhMonitorArrowUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
