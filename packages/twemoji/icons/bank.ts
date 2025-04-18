import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBankIcon],svg[twemoji-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M3 16h30v18H3z"></svg:path><svg:path fill="#CCD6DD" d="M2 34h32a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2"></svg:path><svg:path fill="#292F33" d="M18 23a3 3 0 0 0-3 3v6h6v-6a3 3 0 0 0-3-3"></svg:path><svg:path fill="#CCD6DD" d="M3 21h4v11H3zm6 0h4v11H9zm20 0h4v11h-4zm-6 0h4v11h-4z"></svg:path><svg:path fill="#AAB8C2" d="M2 32h32v2H2z"></svg:path><svg:path fill="#66757F" d="M36 11L18 0L0 11z"></svg:path><svg:path fill="#CCD6DD" d="M18 2.4L2 12v4h32v-4z"></svg:path><svg:path fill="#8899A6" d="M3 19h4v2H3zm6 0h4v2H9zm14 0h4v2h-4zm6 0h4v2h-4z"></svg:path><svg:path fill="#CCD6DD" d="M1 12h34v5H1z"></svg:path><svg:path fill="#AAB8C2" d="M36 12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1zm0 6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#E1E8ED" d="M13 32h10v2H13z"></svg:path><svg:path fill="#F5F8FA" d="M11 34h14v2H11z"></svg:path>`,
})
export class TwemojiBankIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
