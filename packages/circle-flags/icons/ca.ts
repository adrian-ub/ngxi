import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsCaIcon],svg[circle-flags-ca-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsCa0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsCa0)"><svg:path fill="#d80027" d="M0 0v512h144l112-64l112 64h144V0H368L256 64L144 0Z"></svg:path><svg:path fill="#eee" d="M144 0h224v512H144Z"></svg:path><svg:path fill="#d80027" d="m301 289l44-22l-22-11v-22l-45 22l23-44h-23l-22-34l-22 33h-23l23 45l-45-22v22l-22 11l45 22l-12 23h45v33h22v-33h45z"></svg:path></svg:g>`,
})
export class CircleFlagsCaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
