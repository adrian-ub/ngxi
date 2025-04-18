import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconRIcon],svg[devicon-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconR0" x1=".741" x2="590.86" y1="3.666" y2="593.79" gradientTransform="matrix(.2169 0 0 .14527 -.16 14.112)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#cbced0"></svg:stop><svg:stop offset="1" stop-color="#84838b"></svg:stop></svg:lineargradient><svg:lineargradient id="deviconR1" x1="301.03" x2="703.07" y1="151.4" y2="553.44" gradientTransform="matrix(.17572 0 0 .17931 -.16 14.112)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#276dc3"></svg:stop><svg:stop offset="1" stop-color="#165caa"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconR0)" fill-rule="evenodd" d="M64 100.38c-35.346 0-64-19.19-64-42.863s28.654-42.863 64-42.863s64 19.19 64 42.863s-28.654 42.863-64 42.863m9.796-68.967c-26.866 0-48.646 13.119-48.646 29.303c0 16.183 21.78 29.303 48.646 29.303s46.693-8.97 46.693-29.303c0-20.327-19.827-29.303-46.693-29.303"></svg:path><svg:path fill="url(#deviconR1)" fill-rule="evenodd" d="M97.469 81.033s3.874 1.169 6.124 2.308c.78.395 2.132 1.183 3.106 2.219a8.4 8.4 0 0 1 1.42 2.04l15.266 25.74l-24.674.01l-11.537-21.666s-2.363-4.06-3.817-5.237c-1.213-.982-1.73-1.331-2.929-1.331h-5.862l.004 28.219l-21.833.009V41.26h43.844s19.97.36 19.97 19.359s-19.082 20.413-19.082 20.413zm-9.497-24.137l-13.218-.009l-.006 12.258l13.224-.005s6.124-.019 6.124-6.235c0-6.34-6.124-6.009-6.124-6.009"></svg:path>`,
})
export class DeviconRIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
