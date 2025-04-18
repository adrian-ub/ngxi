import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineMobilePhoneCameraIcon],svg[streamline-mobile-phone-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M4.5 11h1M5 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9"></svg:path><svg:path d="M13.5 3a1 1 0 0 0-1-1H12L11 .5H9L8 2h-.5a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1z"></svg:path><svg:path d="M10 4.375a.375.375 0 1 1 0-.75m0 .75a.375.375 0 0 0 0-.75"></svg:path></svg:g>`,
})
export class StreamlineMobilePhoneCameraIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
