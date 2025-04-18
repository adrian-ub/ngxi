import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineVideogameAssetOffIcon],svg[ic-baseline-videogame-asset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 21.19L2.81 2.81L1.39 4.22L3.3 6.13C2.54 6.41 2 7.15 2 8v8c0 1.1.9 2 2 2h11.17l4.61 4.61zM9 13v2H7v-2H5v-2h2V9.83L10.17 13zm11.7 4.87c.76-.28 1.3-1.02 1.3-1.87V8c0-1.1-.9-2-2-2H8.83zM17.5 9c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5"></svg:path>`,
})
export class IcBaselineVideogameAssetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
