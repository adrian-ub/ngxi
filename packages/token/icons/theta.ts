import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenThetaIcon],svg[token-theta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.737 3.947H7.263v16.106h9.474zm-10.421 0v16.106l.947.947h9.474l.947-.947V3.947L16.737 3H7.263z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.528 9.628H9.159v.948h5.684v-.948h-2.368V6.786h-.947zm0 4.737H9.159v-.947h5.684v.947h-2.368v2.842h-.947z"></svg:path>`,
})
export class TokenThetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
