import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeChessLightIcon],svg[material-icon-theme-chess-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M6 26h20v4H6zm16.5-13a5.49 5.49 0 0 0-4.5 2.344V10h4V6h-4V2h-4v4h-4v4h4v5.344a5.498 5.498 0 1 0-5 8.63V24h14v-.025A5.499 5.499 0 0 0 22.5 13"></svg:path>`,
})
export class MaterialIconThemeChessLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
