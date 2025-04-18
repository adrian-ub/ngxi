import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackCiIcon],svg[flagpack-ci-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#67BD38" d="M22 0h10v24H22z"></svg:path><svg:path fill="#E47E00" d="M0 0h10v24H0z"></svg:path><svg:path fill="#F7FCFF" d="M10 0h12v24H10z"></svg:path></svg:g>`,
})
export class FlagpackCiIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
