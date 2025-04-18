import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalJiraalignIcon],svg[devicon-original-jiraalign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconOriginalJiraalign0" x1="8.221" x2="9.771" y1="20.546" y2="12.639" gradientTransform="translate(.556 -37.409) scale(6.46335)" gradientUnits="userSpaceOnUse"><svg:stop offset=".15" stop-color="#0052cc"></svg:stop><svg:stop offset=".503" stop-color="#0e64de"></svg:stop><svg:stop offset="1" stop-color="#2684ff"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconOriginalJiraalign1" x1="11.391" x2="9.84" y1="10.847" y2="18.754" gradientTransform="translate(.556 -37.409) scale(6.46335)" gradientUnits="userSpaceOnUse"><svg:stop offset=".15" stop-color="#0052cc"></svg:stop><svg:stop offset=".503" stop-color="#0e64de"></svg:stop><svg:stop offset="1" stop-color="#2684ff"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconOriginalJiraalign0)" d="M.555 0c0 24.102 19.488 43.758 43.375 43.758h40.14v40.719h43.368V7.254c0-3.75-3.012-7.02-6.723-7.02Zm0 0"></svg:path><svg:path fill="url(#deviconOriginalJiraalign1)" d="M127.21 128c0-24.105-19.483-43.523-43.382-43.523H43.93v-40.72H.555v77.223c0 3.743 3.02 7.02 6.722 7.02Zm0 0"></svg:path>`,
})
export class DeviconOriginalJiraalignIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
