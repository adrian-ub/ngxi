import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthMedicalHeartRateHealthBeautyInformationDataBeatPulseMonitorHeartRateInfoIcon],svg[streamline-health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.58 4.31C1.09 1.85 4.12 0 7 3.27c4.11-4.71 8.5 1.13 5.52 4.14L7 12.5l-3.23-3"></svg:path><svg:path d="M.5 7H3l1.5-2l2 3.5l1.5-2h1.5"></svg:path></svg:g>`,
})
export class StreamlineHealthMedicalHeartRateHealthBeautyInformationDataBeatPulseMonitorHeartRateInfoIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
