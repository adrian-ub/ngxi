import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPasswordkeeperIcon],svg[arcticons-passwordkeeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 8.28l1.65 1.79A14 14 0 0 1 24 38h0a14 14 0 0 1-1.64-28zm0 9.54A6.18 6.18 0 0 1 30.18 24h0A6.18 6.18 0 0 1 24 30.18h0A6.18 6.18 0 0 1 17.82 24h0A6.18 6.18 0 0 1 24 17.82m0-11.64V3.5m12.6 7.9l1.9-1.9M41.82 24h2.68m-7.9 12.6l1.9 1.9M24 41.82v2.68m-12.6-7.9l-1.9 1.9M6.18 24H3.5m7.9-12.6L9.5 9.5"></svg:path>`,
})
export class ArcticonsPasswordkeeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
