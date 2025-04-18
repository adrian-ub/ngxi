import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMotorBoatIcon],svg[twemoji-motor-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M35 19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"></svg:path><svg:path fill="#66757F" d="M32 18h2v7h-2z"></svg:path><svg:path fill="#E1E8ED" d="M6 19.219S11 15 16 15h.029L16 20s0 1-4 1s-6-1.781-6-1.781"></svg:path><svg:path fill="#3B88C3" d="M7.248 19.101C10.798 16.41 14 16.043 15 16.043V20c0 3.162-7.752-.899-7.752-.899"></svg:path><svg:path fill="#CCD6DD" d="M33 24.964s.5-4.013-1-5.731L1 18.086s2 3.439 6 5.732c4 2.291 26 1.146 26 1.146"></svg:path><svg:path fill="#F4900C" d="M7 23.817c4 2.292 26 1.146 26 1.146s.288-2.335-.24-4.206L2.078 19.589c.977 1.205 2.614 2.905 4.922 4.228"></svg:path><svg:path fill="#55ACEE" d="M0 24h36v12H0z"></svg:path>`,
})
export class TwemojiMotorBoatIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
