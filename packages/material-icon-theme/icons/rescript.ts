import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRescriptIcon],svg[material-icon-theme-rescript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef5350" d="M24 2H8a6 6 0 0 0-6 6v16a6 6 0 0 0 6 6h16a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6m-8 19.862A2.14 2.14 0 0 1 13.862 24h-1.724A2.14 2.14 0 0 1 10 21.862V10.138A2.14 2.14 0 0 1 12.138 8H16ZM21 14a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class MaterialIconThemeRescriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
