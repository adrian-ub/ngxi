import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCastleIcon],svg[twemoji-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M4 17h28v19H4z"></svg:path><svg:path fill="#269" d="M6 13h23v5H6z"></svg:path><svg:path fill="#AAB8C2" d="M1 12v22a2 2 0 0 0 2 2h4V12zm28 0v24h4a2 2 0 0 0 2-2V12z"></svg:path><svg:path fill="#F2F9FF" d="M14 22h8v11h-8z"></svg:path><svg:path fill="#269" d="M22 19c-.295 0-.558.391-.74 1h-6.52c-.183-.609-.445-1-.74-1c-.552 0-1 1.344-1 3c0 1.657.448 3 1 3s1-1.343 1-3h6c0 1.657.447 3 1 3s1-1.343 1-3c0-1.656-.447-3-1-3"></svg:path><svg:path fill="#66757F" d="M3 17h2v2H3zm6 3h2v2H9zm16 0h2v2h-2zM9 24h2v2H9zm16 0h2v2h-2zM3 21h2v2H3zm28-4h2v2h-2zm0 4h2v2h-2z"></svg:path><svg:path fill="#F2F9FF" d="M13 22h10v4H13z"></svg:path><svg:path fill="#66757F" d="M18 26a2 2 0 0 0-2 2v5h4v-5a2 2 0 0 0-2-2"></svg:path><svg:path fill="#8899A6" d="M12 33h12v3H12z"></svg:path><svg:path fill="#269" d="M1 12h6S5 4 4 4s-3 8-3 8m28 0h6s-2-8-3-8s-3 8-3 8"></svg:path><svg:path fill="#CCD6DD" d="M8 14a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1m28 0a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1"></svg:path>`,
})
export class TwemojiCastleIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
