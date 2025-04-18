import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosServerlessIcon],svg[logos-serverless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F26D61" d="M0 161.202h45.312l-14.039 42.396H0zM0 80.6h72l-14.036 42.396H0zM0 0h98.692l-14.04 42.395H0zm143.349 0H256v42.395H129.312zM116.66 80.6H256v42.397H102.622zm-26.69 80.602H256v42.396H75.933z"></svg:path>`,
})
export class LogosServerlessIcon {
  readonly viewBox = input("0 0 256 204")
  readonly width = input("1.26em")
  readonly height = input("1em")
}
