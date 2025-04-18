import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoogleMyBusinessIcon],svg[arcticons-google-my-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.25 19.557H24V7.094h-8.142z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.858 7.094H9.142a2 2 0 0 0-1.941 1.52L4.5 19.557h9.75m9.75 0a4.875 4.875 0 0 1-9.75 0m0 0a4.875 4.875 0 0 1-9.75 0m29.25 0H24V7.094h8.142zM32.142 7.094h6.716a2 2 0 0 1 1.941 1.52L43.5 19.557h-9.75m-9.75 0a4.875 4.875 0 0 0 9.75 0m0 0a4.875 4.875 0 0 0 9.75 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.325 23.977v14.93a2 2 0 0 0 2 2h29.35a2 2 0 0 0 2-2v-14.93"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.5 33.569h3.956a3.977 3.977 0 0 1-3.88 4.072l-.077.001a4.073 4.073 0 1 1 0-8.147a4 4 0 0 1 2.02.536"></svg:path>`,
})
export class ArcticonsGoogleMyBusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
