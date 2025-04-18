import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTidalLogoIcon],svg[ph-tidal-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253.66 90.34l-40-40a8 8 0 0 0-11.32 0L168 84.69l-34.34-34.35a8 8 0 0 0-11.32 0L88 84.69L53.66 50.34a8 8 0 0 0-11.32 0l-40 40a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0L88 107.31L116.69 136l-34.35 34.34a8 8 0 0 0 0 11.32l40 40a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32L139.31 136L168 107.31l34.34 34.35a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0 0-11.32M48 124.69L19.31 96L48 67.31L76.69 96Zm80 80L99.31 176L128 147.31L156.69 176Zm0-80L99.31 96L128 67.31L156.69 96Zm80 0L179.31 96L208 67.31L236.69 96Z"></svg:path>`,
})
export class PhTidalLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
