import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineBallotIcon],svg[ic-outline-ballot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.5h5v2h-5zm0 7h5v2h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM11 6H6v5h5zm-1 4H7V7h3zm1 3H6v5h5zm-1 4H7v-3h3z"></svg:path>`,
})
export class IcOutlineBallotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
