import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTravelWayfinderManArmRaises2ManRaiseArmScaningDetectPostureSecurityIcon],svg[streamline-travel-wayfinder-man-arm-raises-2-man-raise-arm-scaning-detect-posture-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="2.5" r="2"></svg:circle><svg:path d="M2.5 5a7.5 7.5 0 0 0 9 0"></svg:path><svg:path d="M8.5 6.33v4.17h-3V6.33m0 4.17v3m3-3v3"></svg:path></svg:g>`,
})
export class StreamlineTravelWayfinderManArmRaises2ManRaiseArmScaningDetectPostureSecurityIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
