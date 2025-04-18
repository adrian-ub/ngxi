import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppMetricbeatIcon],svg[oui-app-metricbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16a16 16 0 0 1-16 16m0-30C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M28 16h-2c0-5.523-4.477-10-10-10S6 10.477 6 16H4C4 9.373 9.373 4 16 4s12 5.373 12 12" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M21.71 11.71L20.3 10.3L18 12.57a4 4 0 0 0-2-.57a4 4 0 1 0 4 4a4 4 0 0 0-.57-2zM16 18a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class OuiAppMetricbeatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
