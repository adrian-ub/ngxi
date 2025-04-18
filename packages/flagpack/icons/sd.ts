import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackSdIcon],svg[flagpack-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#F7FCFF" d="M0 0h32v24H0z"></svg:path><svg:path fill="#E31D1C" d="M0 0v8h32V0z"></svg:path><svg:path fill="#272727" d="M0 16v8h32v-8z"></svg:path><svg:path fill="#5EAA22" d="m0 0l16 12L0 24z"></svg:path></svg:g>`,
})
export class FlagpackSdIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
