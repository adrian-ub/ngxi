import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpStayCurrentLandscapeIcon],svg[ic-sharp-stay-current-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 19h22V5H1zM19 7v10H5V7z"></svg:path>`,
})
export class IcSharpStayCurrentLandscapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
