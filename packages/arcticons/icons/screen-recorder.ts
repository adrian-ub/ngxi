import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreenRecorderIcon],svg[arcticons-screen-recorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="28.3" height="25.12" x="4.5" y="11.44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.49"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.8 27.71l8.32 7.37A1.43 1.43 0 0 0 43.5 34V14a1.43 1.43 0 0 0-2.38-1.07l-8.32 7.36"></svg:path>`,
})
export class ArcticonsScreenRecorderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
