import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoThinIcon],svg[ph-tidal-logo-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250.83 93.17l-40-40a4 4 0 0 0-5.66 0L168 90.34l-37.17-37.17a4 4 0 0 0-5.66 0L88 90.34L50.83 53.17a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0L88 101.66L122.34 136l-37.17 37.17a4 4 0 0 0 0 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66L133.66 136L168 101.66l37.17 37.17a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66M48 130.34L13.66 96L48 61.66L82.34 96Zm80 80L93.66 176L128 141.66L162.34 176Zm0-80L93.66 96L128 61.66L162.34 96Zm80 0L173.66 96L208 61.66L242.34 96Z"></svg:path>`,
})
export class PhTidalLogoThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
