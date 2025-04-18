import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBsIcon],svg[flagpack-bs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FECA00" d="M0 0h32v24H0z"></svg:path><svg:path fill="#3CB1CF" d="M0 0v8h32V0zm0 16v8h32v-8z"></svg:path><svg:path fill="#272727" d="m0 0l16 12L0 24z"></svg:path></svg:g>`,
})
export class FlagpackBsIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
