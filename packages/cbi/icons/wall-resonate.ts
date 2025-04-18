import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiWallResonateIcon],svg[cbi-wall-resonate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.4 2L5.372 4.791V21.3l10 .7l3.256-1.163V3.628Zm6.74 19.07l-7.907-.465l1.86-.931l8.605.7z"></svg:path>`,
})
export class CbiWallResonateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
