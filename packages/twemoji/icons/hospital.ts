import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHospitalIcon],svg[twemoji-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CCD6DD" d="M24 10a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM0 14v20a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V14z"></svg:path><svg:path fill="#99AAB5" d="M18 12H2a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2"></svg:path><svg:path fill="#99AAB5" d="M34 12H18a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2"></svg:path><svg:path fill="#55ACEE" d="M2 22h32v4H2zm0-6h32v4H2zm0 12h32v4H2z"></svg:path><svg:path fill="#E1E8ED" d="M8 12h20v24H8z"></svg:path><svg:path fill="#55ACEE" d="M10 20h16v4H10zm0-6h16v4H10zm0 12h16v4H10z"></svg:path><svg:path fill="#3B88C3" d="M13 32h10v4H13z"></svg:path><svg:path fill="#DD2E44" d="M22 4h-3V1h-2v3h-3v2h3v3h2V6h3z"></svg:path><svg:path fill="#99AAB5" d="M26 10H10a2 2 0 0 0-2 2h20a2 2 0 0 0-2-2"></svg:path>`,
})
export class TwemojiHospitalIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
