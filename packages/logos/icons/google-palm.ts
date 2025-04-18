import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosGooglePalmIcon],svg[logos-google-palm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F9AB00" d="M128 228.542c9.895 0 17.91-8.015 17.91-17.91V55.413h-35.82v155.219c0 9.895 8.015 17.91 17.91 17.91"></svg:path><svg:path fill="#5BB974" d="M199.356 112.053C180.043 92.755 151.193 88.845 128 100.307l76.669 76.67c3.164 3.163 8.612 1.91 9.955-2.344c6.746-21.357 1.657-45.64-15.268-62.58"></svg:path><svg:path fill="#129EAF" d="M56.644 112.053C75.957 92.755 104.807 88.845 128 100.307l-76.669 76.67c-3.164 3.163-8.612 1.91-9.955-2.344c-6.746-21.357-1.657-45.64 15.268-62.58"></svg:path><svg:path fill="#AF5CF7" d="M193.67 52.548c-30.507 0-56.402 20-65.67 47.76h121.25c4.97 0 8.283-5.254 6.03-9.687c-11.523-22.611-34.776-38.073-61.61-38.073"></svg:path><svg:path fill="#FF8BCB" d="M140.671 20.101C119.09 41.682 114.926 74.114 128 100.307l85.743-85.743c3.523-3.522 2.15-9.582-2.582-11.119c-24.148-7.836-51.52-2.313-70.49 16.656"></svg:path><svg:path fill="#FA7B17" d="M115.329 20.101C136.91 41.682 141.074 74.114 128 100.307L42.257 14.564c-3.523-3.522-2.15-9.582 2.582-11.119c24.148-7.836 51.52-2.313 70.49 16.656"></svg:path><svg:path fill="#4285F4" d="M62.33 52.548c30.507 0 56.402 20 65.67 47.76H6.75c-4.97 0-8.283-5.254-6.03-9.687C12.244 68.01 35.497 52.548 62.33 52.548"></svg:path>`,
})
export class LogosGooglePalmIcon {
  readonly viewBox = input("0 0 256 229")
  readonly width = input("1.12em")
  readonly height = input("1em")
}
