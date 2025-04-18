import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psMixxAltIcon],svg[ps-mixx-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M460 131V20H0v348h111V132h63v236h112V132h63v236h111z"></svg:path>`,
})
export class PsMixxAltIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
