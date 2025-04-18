import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingGaugeDashboard2BarSpeedTestLoadingDashboardInternetGaugeProgressIcon],svg[streamline-interface-setting-gauge-dashboard-2-bar-speed-test-loading-dashboard-internet-gauge-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10 6.5l-3 5m6 0a6.5 6.5 0 1 0-12 0Z"></svg:path>`,
})
export class StreamlineInterfaceSettingGaugeDashboard2BarSpeedTestLoadingDashboardInternetGaugeProgressIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
