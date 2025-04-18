import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityUploadCloudOutlineAlertedIcon],svg[clarity-upload-cloud-outline-alerted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.28 21.85a1 1 0 0 0 .72-1.71l-5-5l-5 5a1 1 0 0 0 1.41 1.41L17 19v12.25a1 1 0 1 0 2 0V19l2.57 2.57a1 1 0 0 0 .71.28" class="clr-i-outline--alerted clr-i-outline-path-1--alerted"></svg:path><svg:path fill="currentColor" d="M3.6 18.38a7.71 7.71 0 0 1 7.4-7.64h.67l.23-.63a8.43 8.43 0 0 1 8-5.4a8.8 8.8 0 0 1 2 .25l1-1.8a10.8 10.8 0 0 0-3.07-.45a10.47 10.47 0 0 0-9.6 6.1A9.74 9.74 0 0 0 1.6 18.4a9.62 9.62 0 0 0 9.65 9.6H15v-2h-3.75a7.66 7.66 0 0 1-7.65-7.62" class="clr-i-outline--alerted clr-i-outline-path-2--alerted"></svg:path><svg:path fill="currentColor" d="M32.9 15.4h-2.69A6 6 0 0 1 26.38 26H21v2h5.38a8 8 0 0 0 6.52-12.6" class="clr-i-outline--alerted clr-i-outline-path-3--alerted"></svg:path><svg:path fill="currentColor" d="M26.85 1.14L21.13 11a1.28 1.28 0 0 0 1.1 2h11.45a1.28 1.28 0 0 0 1.1-2l-5.72-9.86a1.28 1.28 0 0 0-2.21 0" class="clr-i-outline--alerted clr-i-outline-path-4--alerted clr-i-alert"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityUploadCloudOutlineAlertedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
