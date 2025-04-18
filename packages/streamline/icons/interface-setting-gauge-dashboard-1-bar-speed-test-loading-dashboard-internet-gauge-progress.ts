import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceSettingGaugeDashboard1BarSpeedTestLoadingDashboardInternetGaugeProgressIcon],svg[streamline-interface-setting-gauge-dashboard-1-bar-speed-test-loading-dashboard-internet-gauge-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="m10 4.5l-3 5m-6 0h12"></svg:path></svg:g>`,
})
export class StreamlineInterfaceSettingGaugeDashboard1BarSpeedTestLoadingDashboardInternetGaugeProgressIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
