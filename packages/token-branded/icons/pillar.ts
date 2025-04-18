import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPillarIcon],svg[token-branded-pillar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#9601D9"><svg:path d="M9.136 21L5.7 17.625V14.25h9.164V3L18.3 6.375v11.25H9.136z"></svg:path><svg:path d="M10.282 5.25H5.7v4.5h4.582z"></svg:path></svg:g>`,
})
export class TokenBrandedPillarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
