import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUniversalTunerIcon],svg[arcticons-universal-tuner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.202 4.5v23.156A3.2 3.2 0 0 1 24 30.858h0a3.2 3.2 0 0 1-3.202-3.202V4.5M24 30.858v9.296"></svg:path><svg:circle cx="24" cy="41.827" r="1.673" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.117 11.115a9.93 9.93 0 0 0-.593 13.693m14.952 0a9.93 9.93 0 0 0-.593-13.693M12.51 6.721a16.293 16.293 0 0 0-.592 22.481m24.164 0a16.29 16.29 0 0 0-.562-22.45"></svg:path>`,
})
export class ArcticonsUniversalTunerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
