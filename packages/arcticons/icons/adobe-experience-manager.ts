import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobeExperienceManagerIcon],svg[arcticons-adobe-experience-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.75 19.5a4.25 4.25 0 0 1-4.25-4.25h0A4.25 4.25 0 0 0 24.25 11h-.5a4.25 4.25 0 0 0-4.25 4.25h0a4.25 4.25 0 0 1-4.25 4.25h0A4.25 4.25 0 0 0 11 23.75v.5a4.25 4.25 0 0 0 4.25 4.25h0a4.25 4.25 0 0 1 4.25 4.25h0A4.25 4.25 0 0 0 23.75 37h.5a4.25 4.25 0 0 0 4.25-4.25h0a4.25 4.25 0 0 1 4.25-4.25h0A4.25 4.25 0 0 0 37 24.25v-.5a4.25 4.25 0 0 0-4.25-4.25"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.37 27.005a4.25 4.25 0 0 1 0-6.01h0a4.25 4.25 0 0 0 0-6.01l-.354-.354a4.25 4.25 0 0 0-6.01 0h0a4.25 4.25 0 0 1-6.011 0h0a4.25 4.25 0 0 0-6.01 0l-.354.353a4.25 4.25 0 0 0 0 6.01h0a4.25 4.25 0 0 1 0 6.011h0a4.25 4.25 0 0 0 0 6.01l.353.354a4.25 4.25 0 0 0 6.01 0h0a4.25 4.25 0 0 1 6.011 0h0a4.25 4.25 0 0 0 6.01 0l.354-.353a4.25 4.25 0 0 0 0-6.01"></svg:path>`,
})
export class ArcticonsAdobeExperienceManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
