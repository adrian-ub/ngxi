import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutdoorGardenOutlineIcon],svg[material-symbols-light-outdoor-garden-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 20.5V6.25L6 3.616l3 2.25l3-2.25l3 2.25l3-2.25l3.5 2.634V20.5zm1-1h5V6.75L6 4.866L3.5 6.75zm6 0h5V6.75L12 4.866L9.5 6.75zm6 0h5V6.75L18 4.866L15.5 6.75z"></svg:path>`,
})
export class MaterialSymbolsLightOutdoorGardenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
