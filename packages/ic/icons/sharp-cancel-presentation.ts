import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCancelPresentationIcon],svg[ic-sharp-cancel-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v18h22V3zm20 16H3V5h18zM9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59z"></svg:path>`,
})
export class IcSharpCancelPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
