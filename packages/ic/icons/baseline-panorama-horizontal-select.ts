import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselinePanoramaHorizontalSelectIcon],svg[ic-baseline-panorama-horizontal-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.43 4c-.1 0-.2.02-.31.06C18.18 5.16 15.09 5.7 12 5.7s-6.18-.55-9.12-1.64A1 1 0 0 0 2.57 4c-.34 0-.57.23-.57.63v14.75c0 .39.23.62.57.62c.1 0 .2-.02.31-.06c2.94-1.1 6.03-1.64 9.12-1.64s6.18.55 9.12 1.64c.11.04.21.06.31.06c.33 0 .57-.23.57-.63V4.63c0-.4-.24-.63-.57-.63"></svg:path>`,
})
export class IcBaselinePanoramaHorizontalSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
