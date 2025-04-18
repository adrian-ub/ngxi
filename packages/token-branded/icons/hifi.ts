import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHifiIcon],svg[token-branded-hifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6E2EF4" d="M3.601 12.296a2.04 2.04 0 0 1 0-2.89L9.41 3.599a2.044 2.044 0 0 1 2.89 2.89l-5.802 5.807a2.044 2.044 0 0 1-2.89 0zm6.157 1.949a2.04 2.04 0 0 1 0-2.89l1.599-1.6a2.044 2.044 0 1 1 2.89 2.89l-1.598 1.6a2.04 2.04 0 0 1-2.228.443a2 2 0 0 1-.663-.444m1.948 6.156a2.045 2.045 0 0 1 0-2.89l5.802-5.808a2.05 2.05 0 0 1 2.228-.443a2.045 2.045 0 0 1 .663 3.334L14.597 20.4a2.046 2.046 0 0 1-2.89 0"></svg:path>`,
})
export class TokenBrandedHifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
