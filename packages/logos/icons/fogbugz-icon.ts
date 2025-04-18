import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFogbugzIconIcon],svg[logos-fogbugz-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosFogbugzIcon0" x1="-24.513%" x2="130.064%" y1="75.564%" y2="-56.513%"><svg:stop offset="0%" stop-color="#AB68FC"></svg:stop><svg:stop offset="86%" stop-color="#5521B3"></svg:stop></svg:lineargradient><svg:lineargradient id="logosFogbugzIcon1" x1="104.596%" x2="48.252%" y1="100.586%" y2="48.39%"><svg:stop offset="2%" stop-color="#AA69FF"></svg:stop><svg:stop offset="86%" stop-color="#C6B1FF"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosFogbugzIcon0)" d="M89.976 306.862L256 161.802H90.258s-.246 139.468-.282 145.06"></svg:path><svg:path fill="url(#logosFogbugzIcon1)" d="M166.059 0L0 161.803h165.32S166.024 4.22 166.06 0"></svg:path>`,
})
export class LogosFogbugzIconIcon {
  readonly viewBox = input("0 0 256 307")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
