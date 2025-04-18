import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderManArmRaises1ManRaiseArmScaningDetectPostureSecurityIcon],svg[streamline-travel-wayfinder-man-arm-raises-1-man-raise-arm-scaning-detect-posture-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2.5" r="2"></svg:circle><svg:path d="M2.5 6.5h9m-3 0v4h-3v-4m0 4v3m3-3v3"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderManArmRaises1ManRaiseArmScaningDetectPostureSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
