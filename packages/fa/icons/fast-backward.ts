import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faFastBackwardIcon],svg[fa-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1747 13q19-19 32-13t13 32v1472q0 26-13 32t-32-13l-710-710q-9-9-13-19v710q0 26-13 32t-32-13L269 813q-9-9-13-19v678q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0h128q26 0 45 19t19 45v678q4-10 13-19L979 13q19-19 32-13t13 32v710q4-10 13-19z"></svg:path>`,
})
export class FaFastBackwardIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
