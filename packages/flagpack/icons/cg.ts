import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCgIcon],svg[flagpack-cg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FA1111" d="M32 0v24H0z"></svg:path><svg:path fill="#07A907" d="M0 24V0h32z"></svg:path><svg:path fill="#FBCD17" d="M29.492-5.8L-1 23.576l6.052 3.012L34.64-.212z"></svg:path></svg:g>`,
})
export class FlagpackCgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
