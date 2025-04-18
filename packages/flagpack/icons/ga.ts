import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGaIcon],svg[flagpack-ga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#40A8FF" d="M0 16h32v8H0z"></svg:path><svg:path fill="#FECA00" d="M0 8h32v8H0z"></svg:path><svg:path fill="#73BE4A" d="M0 0h32v8H0z"></svg:path></svg:g>`,
})
export class FlagpackGaIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
