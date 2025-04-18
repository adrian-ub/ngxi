import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackBjIcon],svg[flagpack-bj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#DD2C2B" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#FECA00" fill-rule="evenodd" d="M0 0v14h32V0z" clip-rule="evenodd"></svg:path><svg:path fill="#5EAA22" d="M0 0h14v24H0z"></svg:path></svg:g>`,
})
export class FlagpackBjIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
