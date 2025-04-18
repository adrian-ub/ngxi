import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackGyIcon],svg[flagpack-gy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#FECA00" stroke="#F7FCFF" stroke-width="2" d="M1 22.587V1.413L30.995 12z"></svg:path><svg:path fill="#E11C1B" stroke="#272727" stroke-width="2" d="M-1 23.955V.045L14.371 12z"></svg:path></svg:g>`,
})
export class FlagpackGyIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
