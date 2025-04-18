import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackNgIcon],svg[flagpack-ng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#F7FCFF" d="M0 0h32v24H0z"></svg:path><svg:path fill="#093" d="M21 0h11v24H21zM0 0h11v24H0z"></svg:path></svg:g>`,
})
export class FlagpackNgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
