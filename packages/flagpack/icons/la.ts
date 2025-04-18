import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackLaIcon],svg[flagpack-la-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#E31D1C" d="M0 16h32v8H0z"></svg:path><svg:path fill="#2E42A5" d="M0 8h32v8H0z"></svg:path><svg:path fill="#E31D1C" d="M0 0h32v8H0z"></svg:path><svg:path fill="#F7FCFF" d="M16 15.74a3.75 3.75 0 1 0 0-7.5a3.75 3.75 0 0 0 0 7.5"></svg:path></svg:g>`,
})
export class FlagpackLaIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
