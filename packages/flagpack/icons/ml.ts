import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackMlIcon],svg[flagpack-ml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FBCD17" d="M10 0h12v24H10z"></svg:path><svg:path fill="#E11C1B" d="M22 0h10v24H22z"></svg:path><svg:path fill="#0B9E7A" d="M0 0h10v24H0z"></svg:path></svg:g>`,
})
export class FlagpackMlIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
