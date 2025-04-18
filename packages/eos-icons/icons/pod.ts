import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPodIcon],svg[eos-icons-pod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.003A2 2 0 0 0 8 21h8a2 2 0 0 0 2-1.997V18H6Zm9-15.011A.995.995 0 0 0 14.002 3H9.998A.995.995 0 0 0 9 3.992V5h6ZM14.993 6H9L4 17h16Zm-2.983 7.01a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class EosIconsPodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
