import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinElmIcon],svg[catppuccin-elm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="M3 1.5h10c.83 0 1.5.67 1.5 1.5v10c0 .83-.67 1.5-1.5 1.5H3A1.5 1.5 0 0 1 1.5 13V3c0-.83.67-1.5 1.5-1.5M2 2l12 12M8.5 1.5l6 6M11 11l3.5-3.5m-10-3h6.25M2 14l9-9"></svg:path>`,
})
export class CatppuccinElmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
