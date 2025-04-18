import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonScatterMatrixIcon],svg[carbon-scatter-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.5" cy="9.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="22.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="22.5" cy="22.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 13H17V4h11ZM15 4v11H4V4ZM4 17h11v11H4Zm13 11V17h11v11Z"></svg:path>`,
})
export class CarbonScatterMatrixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
