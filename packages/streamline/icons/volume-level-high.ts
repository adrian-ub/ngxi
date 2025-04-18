import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineVolumeLevelHighIcon],svg[streamline-volume-level-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.495 10.5a6.9 6.9 0 0 0 1-3.5a6.9 6.9 0 0 0-1-3.5m-1.995 2c.348.42.526.955.5 1.5a2.2 2.2 0 0 1-.5 1.5M3 5H1.5c-.545 0-1 .455-1 1v2c0 .545.455 1 1 1H3l3.91 2.81c.645.447 1.573-.024 1.59-.81V3A.954.954 0 0 0 7 2.19z"></svg:path>`,
})
export class StreamlineVolumeLevelHighIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
