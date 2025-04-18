import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackAeIcon],svg[flagpack-ae-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"></svg:path><svg:path fill="#272727" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"></svg:path><svg:path fill="#E31D1C" d="M0 0h10v24H0z"></svg:path></svg:g>`,
})
export class FlagpackAeIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
