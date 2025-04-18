import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHpoIcon],svg[token-hpo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.589 10.412V3h-3.177v7.412zm0 3.176v-3.176H21v3.176zm0 0V21h-3.177v-7.412zM3 10.41h7.412v3.177H3z"></svg:path>`,
})
export class TokenHpoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
